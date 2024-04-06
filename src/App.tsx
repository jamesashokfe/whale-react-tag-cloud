import "./App.css";
import TagCloud from "./components/TagCloud";
import { TagCloudOptions } from "./components/TagCloud/tag-cloud.props";
import { tags } from "./tags.mock-data";

function App() {
  const optionsDemo1: TagCloudOptions = {
    maxFontSize: 48,
  };
  const optionsDemo2: TagCloudOptions = {
    maxFontSize: 24,
  };

  return (
    <>
      <h1 className="app__title">React Tag Cloud</h1>

      <div className="demo">
        <h2 className="demo__title">Demo 1 - Large Container</h2>
        <div className="demo__container demo__container--1">
          <TagCloud tags={tags} options={optionsDemo1} />
        </div>
      </div>

      <div className="demo">
        <h2 className="demo__title">Demo 2 - Small Container</h2>
        <div className="demo__container demo__container--2">
          <TagCloud tags={tags} options={optionsDemo2} />
        </div>
      </div>

      <div className="demo">
        <h2 className="demo__title">Demo 3 - No data</h2>
        <div className="demo__container demo__container--3">
          <TagCloud tags={[]} />
        </div>
      </div>
    </>
  );
}

export default App;
