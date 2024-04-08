# whale-react-tag-cloud

- Project setup using [Vite](https://vitejs.dev/)

## Usage notes
- Add `TagCloud` component in a container element.
- This container element must have `width/height/aspect-ratio` defined.
- Control the spread range of tag cloud within the container, by styling the container.
  - Less `padding` on container will have the tag cloud spread out throughout the container,
  - More `padding` on container will compact the tag cloud.

---

**@TODO**
- add monochrome option to tag cloud
- add `redraw/refresh` - re-position the tags in the cloud
- add `save layout` functionality
- **Known Issues**
  - Keyboard accessibility (tab navigation) on tag-cloud is unpredictable due to random positioning of tags.
  - `fluid` hover effect can disrupt the flow of a compact tag cloud.
