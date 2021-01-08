import { useQuery } from "react-query";
import Cards from "./CardSlider";
import { getEditorChoice } from "../../services/place";
import { Box, Typography } from "@material-ui/core";

const EditorChoice = () => {
  const { isLoading, data, isError } = useQuery(
    "editorChoice",
    getEditorChoice
  );

  if (isLoading) return null;
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
