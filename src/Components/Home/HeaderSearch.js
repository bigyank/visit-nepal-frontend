import { useState } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import {
  Paper,
  Grid,
  Box,
  TextField,
  Typography,
  InputAdornment,
  Hidden,
  CircularProgress,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { getPlaceByQuery } from "../../services/place";

import explore from "../../images/explore.png";

const HeaderSearch = ({ smMatch, mdMatch }) => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const { isLoading, refetch } = useQuery(
    ["getPlaceByQuery", search],
    getPlaceByQuery,
    {
      enabled: false,
      onSuccess: (data) => {
        if (data.length === 0) return history.push("/404");
        history.push(`/place/${data[0].id}`);
      },
    }
  );

  const handleQuery = () => {
    refetch();
  };

  const styles = {
    searchContainer: {
      height: mdMatch ? "60vh" : "40vh",
      backgroundImage: `url(${explore})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
    },
  };

  return (
    <Box mb={mdMatch ? 12 : 6}>
      <Paper style={{ padding: "20px" }}>
        <Grid container spacing={4}>
          <Grid
            item
            container
            xs={12}
            sm={6}
            direction="column"
            justify="center"
          >
            <Grid item>
              <Box mb={2}>
                <Typography align="center" variant={smMatch ? "h5" : "body1"}>
                  Find your next Destination
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <TextField
                value={search}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleQuery();
                  }
                }}
                onChange={({ target }) => setSearch(target.value)}
                id="header-search"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {isLoading ? <CircularProgress /> : <SearchIcon />}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Hidden xsDown>
            <Grid item xs={6}>
              <Box style={styles.searchContainer}></Box>
            </Grid>
          </Hidden>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HeaderSearch;
