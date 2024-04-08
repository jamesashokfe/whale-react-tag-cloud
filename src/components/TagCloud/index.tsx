import { memo } from "react";
import Tag from "../Tag";
import TagProps from "../Tag/tag.props";
import TagCloudProps, { TagCloudOptions } from "./tag-cloud.props";
import "./tag-cloud.css";

const TagCloud = memo(function TagCloud({ tags, options }: TagCloudProps) {
  // Override available custom options on default options.
  const defaultOptions = new TagCloudOptions();
  const tagCloudOptions = { ...defaultOptions, ...options };
  const { minFontSize, maxFontSize, linkTarget, hoverEffect } = tagCloudOptions as {
    minFontSize: number;
    maxFontSize: number;
    linkTarget: string;
    hoverEffect?: string;
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

  // Randomise positioning and alignment of each tag.
  const getStyle = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const alignSelfList = ["start", "center", "end"];

    return {
      order: randomNumber,
      alignSelf: alignSelfList[randomNumber % alignSelfList.length],
    };
  };

  if (tags && tags.length > 0) {
    assignFontSizes(tags);

    let classTagCloud = "tag-cloud";
    if (hoverEffect) {
      classTagCloud += ` ${classTagCloud}--hover-${hoverEffect}`;
    }

    return (
      <ul className={classTagCloud}>
        {tags.map((value) => {
          const style = getStyle();

          return (
            <li
              className="tag-cloud__item"
              key={`${value.text}-${value.link}-${value.weight}-${value.color}`}
              style={style}
            >
              <Tag {...value} linkTarget={linkTarget} />
            </li>
          );
        })}
      </ul>
    );
  }
  return <p className="tag-cloud">No tags provided.</p>;
});

export default TagCloud;
