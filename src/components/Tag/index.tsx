import "./tag.css";
import TagProps from "./tag.props";

function Tag({ text, link, weight, color }: TagProps) {
  console.log(text, link, weight, color);
  return <div>Hello World!</div>;
}

export default Tag;
