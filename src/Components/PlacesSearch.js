import { useQuery } from "react-query";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";

const URL =
  "http://api.geonames.org/searchJSON?username=ksuhiyp&country=np&maxRows=1000&style=SHORT";

const useStyles = makeStyles(() => ({
  typo: {
    marginBottom: "10px",
  },
}));

const PlacesSearch = ({ setLocation }) => {
  const classes = useStyles();
  const { data, isLoading } = useQuery("cities", async () => {
    const response = await axios.get(URL);
    return response.data;
  });

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <Typography color="textSecondary" className={classes.typo}>
        Search
      </Typography>
      <Autocomplete
        id="combo-box-demo"
        onChange={(_event, newValue) => {
          if (newValue == null) return;
          setLocation([newValue.lat, newValue.lng]);
        }}
        options={data.geonames}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} label="Search City" variant="outlined" />
        )}
      />
    </>
  );
};

export default PlacesSearch;
