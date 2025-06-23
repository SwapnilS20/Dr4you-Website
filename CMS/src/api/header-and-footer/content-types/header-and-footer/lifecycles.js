module.exports = {
  async beforeUpdate(event) {
    const { data } = event.params;

    /** @type {any} */
    const populateOptions = {
      Header: {
        populate: {
          navbar_items: {
            fields: ["slug", "id"],
          },
        },
      },
    };

    const existing = await strapi.entityService.findMany(
      "api::header-and-footer.header-and-footer",
      {
        populate: populateOptions,
      }
    );

    const currentEntry = existing[0];
    const existingNavItems = currentEntry?.Header?.navbar_items || [];
    const updatedNavItems = data?.Header?.navbar_items || [];

    for (const updatedItem of updatedNavItems) {
      const matchingExisting = existingNavItems.find(
        (item) => item.id === updatedItem.id
      );

      if (
        matchingExisting &&
        updatedItem.slug &&
        updatedItem.slug !== matchingExisting.slug
      ) {
        throw new Error(
          `Slug for navbar item "${matchingExisting.name}" cannot be edited once set.`
        );
      }
    }
  },

  async beforeCreate(event) {
    const { data } = event.params;

    const generateSlug = (text) =>
      text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

    const navItems = data?.Header?.navbar_items || [];

    navItems.forEach((item) => {
      if (item.name && !item.slug) {
        item.slug = generateSlug(item.name);
      }
    });
  },
};
