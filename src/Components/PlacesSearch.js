import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

const URL =
  "http://api.geonames.org/searchJSON?username=ksuhiyp&country=np&maxRows=1000&style=SHORT";

const PlacesSearch = ({ setLocation }) => {
  const [place, setPlace] = useState(null);
  const { data, isLoading } = useQuery("cities", async () => {
    const response = await axios.get(URL);
    return response.data;
  });

  useEffect(() => {
    console.log(place);
  }, [place]);

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        onChange={(_event, newValue) => {
          setPlace(newValue);
        }}
        options={data.geonames}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search City" variant="outlined" />
        )}
      />
    </>
  );
};

export default PlacesSearch;
