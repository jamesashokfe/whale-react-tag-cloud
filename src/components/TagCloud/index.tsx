import TagProps from "../Tag/tag.props";
import TagCloudProps, { TagCloudOptions } from "./tag-cloud.props";
import "./tag-cloud.css";

function TagCloud({ tags, options }: TagCloudProps) {
  const defaultOptions = new TagCloudOptions();
  // Override available custom options on default options.
  const tagCloudOptions = { ...defaultOptions, ...options };
  const { minFontSize, maxFontSize } = tagCloudOptions as {
    minFontSize: number;
    maxFontSize: number;
  };

  const sortTagsByWeight = (tags: TagProps[]) => {
    tags.sort((a, b) => {
      return (b.weight || 0) - (a.weight || 0);
    });
  };

  // Calculate font size relative to tag weights.
  const calculateFontSize = (weight: number, maxWeight: number) => {
    const weightRatio = weight / maxWeight;
    return minFontSize + weightRatio * (maxFontSize - minFontSize);
  };

  const assignFontSizes = (tags: TagProps[]) => {
    const maxWeight = Math.max(...tags.map((value) => value.weight || 1));
    tags.forEach((value) => {
      // Compute relative font sizes in `em` based on tag weights.
      value.fontSize =
        value.weight || value.weight === 0
          ? (value.fontSize = calculateFontSize(value.weight, maxWeight) / 16)
          : 1;
    });
  };

  if (tags && tags.length > 0) {
    sortTagsByWeight(tags);
    assignFontSizes(tags);
  }
  return <div>Hello World!</div>;
}

export default TagCloud;
