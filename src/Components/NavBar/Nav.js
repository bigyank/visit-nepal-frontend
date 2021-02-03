import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Box, Grid, IconButton, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ toggleDrawer, handleLogout, user }) => {
  const classes = useStyles();

  if (user === null) return null;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box className={classes.title}>
            <Grid container alignItems="center">
              <Hidden mdUp>
                <IconButton
                  aria-label="toggle-drawer"
                  onClick={toggleDrawer("left", true)}
                >
                  <MenuIcon fontSize="large" style={{ color: "white" }} />
                </IconButton>
              </Hidden>
              <Typography variant="h6">Visit Nepal</Typography>
            </Grid>
          </Box>
          <Hidden smDown>
            {user && user.user ? (
              <>
                <Button component={Link} to="/" color="inherit">
                  Home
                </Button>
                <Button component={Link} to="/explore" color="inherit">
                  Explore
                </Button>
                <Button component={Link} to="/contribute" color="inherit">
                  Contribute
                </Button>
                <Button component={Link} to="/bucketlist" color="inherit">
                  Bucket List
                </Button>
                <Button onClick={handleLogout} color="inherit">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button component={Link} to="/login" color="inherit">
                  Login
                </Button>
                <Button component={Link} to="/signup" color="inherit">
                  Signup
                </Button>
              </>
            )}
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
