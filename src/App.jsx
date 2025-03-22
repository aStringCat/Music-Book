import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Background from "./components/Background";
import MusicCard from "./components/MusicCard";
import LabelBottomNavigation from "./components/LabelBottomNavigation";

const App = () => {
  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <List>
        <ListItem>
          <MusicCard isPlayed={true} />
        </ListItem>
        <ListItem>
          <MusicCard isPlayed={false} />
        </ListItem>
        <ListItem>
          <MusicCard isPlayed={false} />
        </ListItem>
        <ListItem>
          <MusicCard isPlayed={false} />
        </ListItem>
        <ListItem>
          <MusicCard isPlayed={false} />
        </ListItem>
        <ListItem>
          <MusicCard isPlayed={false} />
        </ListItem>
        <ListItem>
          <MusicCard isPlayed={false} />
        </ListItem>
      </List>
      <Background />
      <LabelBottomNavigation />
    </Box>
  );
};

export default App;
