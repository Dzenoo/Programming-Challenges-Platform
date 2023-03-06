import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab, Toolbar, Button, Typography } from "@mui/material";

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
        <Tab label="Profile" component={Link} to="/profile" />
        <Tab label="Leaderboard" component={Link} to="/home" />
        <Tab label="Community" component={Link} to="/home" />
        <Tab label="Pricing" component={Link} to="/home" />
      </Tabs>
      <div style={buttonsStyle}>
        <Button variant="contained">Login</Button>
        <Button variant="outlined">Register</Button>
      </div>
    </AppBar>
  );
}
