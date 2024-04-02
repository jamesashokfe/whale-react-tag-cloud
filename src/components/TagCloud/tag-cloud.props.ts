import TagProps from "../Tag/tag.props";

type TagCloudProps = {
  tags: TagProps[],
  options: TagCloudOptions,
};

export class TagCloudOptions {
  minFontSize: number = 12;
  maxFontSize: number = 36;
}

export default TagCloudProps;
