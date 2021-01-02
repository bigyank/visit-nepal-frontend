import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useAuth } from "../user-contex";

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

const Header = () => {
  const [{ user }] = useAuth();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Visit Nepal
          </Typography>

          {user ? (
            user.user ? (
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
            )
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
