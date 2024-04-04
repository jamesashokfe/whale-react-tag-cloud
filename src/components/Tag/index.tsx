import "./tag.css";
import TagProps from "./tag.props";

function Tag({ text, link, color, fontSize, linkTarget }: TagProps) {
  const styles: { color?: string; fontSize?: string } = {};
  color && (styles.color = color);
  fontSize && (styles.fontSize = `${fontSize}em`);

  const tagElement = link ? (
    <a
      className="tag__text tag__text--link"
      href={link}
      style={styles}
      target={linkTarget}
    >
      {text}
    </a>
  ) : (
    <span className="tag__text" style={styles}>
      {text}
    </span>
  );
  return <div className="tag">{tagElement}</div>;
}

export default Tag;
