import ReactQuill from "react-quill";
import { Paper } from "@material-ui/core";

import "react-quill/dist/quill.snow.css";
import "../../styles/quill.css";

function Editor({ value, setValue }) {
  return (
    <Paper>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </Paper>
  );
}

export default Editor;
