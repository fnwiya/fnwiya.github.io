import Markdown from "markdown-to-jsx";
import resume from "../public/resume.md";
import css from "@emotion/css";

const IndexPage = () => {
  return (
    <div
      css={css`
        width: 100%;
        background-color: #f5f5f6;
        line-height: 1.5;
        word-break: break-all;
        color: #111;
      `}
    >
      <div
        css={css`
          max-width: 770px;
          background-color: #e1e2e1;
          margin: 0 auto;
          padding: 0 20px 10px;
        `}
      >
        <Markdown
          css={css`
            h1 {
              background-color: #004d40;
              color: #fff;
              margin: 0 -20px 15px;
              padding: 16px 20px;
            }
          `}
        >
          {resume}
        </Markdown>
      </div>
    </div>
  );
};

export default IndexPage;
