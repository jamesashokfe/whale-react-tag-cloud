import "./tag.css";
import TagProps from "./tag.props";

function Tag({
  text,
  link,
  color,
  fontSize,
  linkTarget,
  customClass,
}: TagProps) {
  const style: { color?: string; fontSize?: string } = {};
  color && (style.color = color);
  fontSize && (style.fontSize = `${fontSize}em`);

  let className = "tag";
  if (link) {
    className += " tag--link";
  }
  if (customClass) {
    className += ` ${customClass}`;
  }

  // Common attributes for text/link tags.
  const attributes = { style, className };

  return link ? (
    <a href={link} target={linkTarget} {...attributes}>
      {text}
    </a>
  ) : (
    <span {...attributes}>{text}</span>
  );
}

export default Tag;
