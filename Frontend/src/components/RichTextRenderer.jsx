import React from "react";

const RichTextRenderer = ({ content }) => {
  const getHeadingClass = (level) => {
    switch (level) {
      case 1:
        return "text-4xl font-bold mb-4  text-Primary-Blue-900";
      case 2:
        return "text-3xl font-semibold mb-3  text-Primary-Blue-900";
      case 3:
        return "text-2xl font-semibold mb-2  text-Primary-Blue-900";
      case 4:
        return "text-xl font-semibold mb-2  text-Primary-Blue-900";
      case 5:
        return "text-lg font-semibold mb-1  text-Primary-Blue-900";
      case 6:
        return "text-base font-semibold mb-1  text-Primary-Blue-900";
      default:
        return "text-base";
    }
  };

  return (
    <div className="max-w-none text-justify">
      {content?.map((block, index) => {
        if (block.type === "heading") {
          return (
            <div key={index} className={getHeadingClass(block.level)}>
              {block.children.map((child, i) => (
                <React.Fragment key={i}>{child.text}</React.Fragment>
              ))}
            </div>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={index} className="mb-4 text-base leading-relaxed">
              {block.children.map((child, i) => (
                <React.Fragment key={i}>{child.text}</React.Fragment>
              ))}
            </p>
          );
        }

        if (block.type === "list") {
          const ListTag = block.format === "unordered" ? "ul" : "ol";
          return (
            <ListTag key={index} className="list-disc pl-5 mb-4">
              {block.children.map((li, liIndex) => (
                <li key={liIndex}>
                  {li.children.map((child, ci) => (
                    <React.Fragment key={ci}>{child.text}</React.Fragment>
                  ))}
                </li>
              ))}
            </ListTag>
          );
        }

        return null;
      })}
    </div>
  );
};

export default RichTextRenderer;
