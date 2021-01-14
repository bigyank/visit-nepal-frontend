import { useQuery } from "react-query";
import Cards from "./CardSlider";
import { getEditorChoice } from "../../services/place";
import { Box, CircularProgress, Typography } from "@material-ui/core";

const EditorChoice = () => {
  const { isLoading, data, isError } = useQuery(
    "editorChoice",
    getEditorChoice
  );

  if (isLoading)
    return (
      <div
        style={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  if (isError) return null;

  return (
    <Box mb={4}>
      <Box px={2}>
        <Typography variant="h5">Editor's Pick</Typography>
      </Box>
      <Cards editorData={data} />
    </Box>
  );
};

export default EditorChoice;
