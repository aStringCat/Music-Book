import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

const LabelBottomNavigation = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 1000,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        sx={{ width: "100%", maxWidth: 800 }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
        <BottomNavigationAction label="You" value="you" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
};
export default LabelBottomNavigation;
