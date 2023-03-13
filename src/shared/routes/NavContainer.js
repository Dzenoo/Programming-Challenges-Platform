import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab, Toolbar, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const appBarStyle = {
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const buttonsStyle = {
  display: "flex",
  gap: "1em",
};

export default function NavContainer({ value }) {
  const auth = useContext(AuthContext);

  return (
    <AppBar position="static" style={appBarStyle}>
      <Toolbar>
        <Typography variant="h6" color="#333">
          Coding<span className="ch">Hero</span>
        </Typography>
      </Toolbar>
      <Tabs value={value}>
        <Tab label="Home" component={Link} to="/home" />
        <Tab label="Challenges" component={Link} to="/challenges" />
        <Tab label="Blog" component={Link} to="/tutorials" />
        {auth.isLoggedIn && (
          <Tab
            label="Profile"
            component={Link}
            to={`/${auth.userId}/profile`}
          />
        )}

        {auth.isLoggedIn && (
          <Tab label="Leaderboard" component={Link} to="/leaderboard" />
        )}

        {auth.isLoggedIn && (
          <Tab label="Community" component={Link} to="/community" />
        )}

        <Tab label="Pricing" component={Link} to="/pricing" />
      </Tabs>
      <div style={buttonsStyle}>
        {!auth.isLoggedIn && (
          <Link
            to="/signin"
            style={{ textDecoration: "none", marginRight: "20px" }}
          >
            <Button variant="contained" size="large">
              Sign In
            </Button>
          </Link>
        )}

        {auth.isLoggedIn && (
          <Button
            sx={{ textDecoration: "none", marginRight: "20px" }}
            variant="outlined"
            size="large"
            onClick={auth.logout}
          >
            Logout
          </Button>
        )}
      </div>
    </AppBar>
  );
}
