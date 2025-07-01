import React from "react";

const RichTextRenderer = ({ content }) => {
  const HeadingRenderer = ({ level = 2, children }) => {
    const Tag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(`h${level}`) ? `h${level}` : 'p';
    return <Tag>{children}</Tag>;
  };

  return (
    <div className="prose max-w-none text-justify">
      {content?.map((block, index) => {
        if (block.type === "heading") {
          return (
            <HeadingRenderer key={index} level={block.level} >
              {block.children.map((child, i) => (
                <React.Fragment key={i}>{child.text}</React.Fragment>
              ))}
            </HeadingRenderer>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={index}>
              {block.children.map((child, i) => (
                <React.Fragment key={i}>{child.text}</React.Fragment>
              ))}
            </p>
          );
        }

        if (block.type === "list") {
          const ListTag = block.format === "unordered" ? "ul" : "ol";
          return (
            <ListTag key={index} className="list-disc pl-5">
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
