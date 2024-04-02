import './App.css'
import TagCloud from './components/TagCloud'
import { tags } from './tags.mock-data'

function App() {
  return (
    <>
      <h1>React Tag Cloud</h1>
      <TagCloud tags={tags} />
    </>
  )
}

export default App
