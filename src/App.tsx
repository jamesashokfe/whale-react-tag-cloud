import "./App.css";
import TagCloud from "./components/TagCloud";
import { TagCloudOptions } from "./components/TagCloud/tag-cloud.props";
import { tags } from "./tags.mock-data";

function App() {
  const options: TagCloudOptions = {
    maxFontSize: 48,
  };

  return (
    <>
      <h1>React Tag Cloud</h1>
      <TagCloud tags={tags} options={options} />
    </>
  );
}

export default App;
