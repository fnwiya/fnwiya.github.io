import Markdown from "markdown-to-jsx";
import resume from "../public/resume.md";

const IndexPage = () => {
  return <Markdown>{resume}</Markdown>;
};

export default IndexPage;
