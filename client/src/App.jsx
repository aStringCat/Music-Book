import { CssBaseline, ThemeProvider, AppBar, Toolbar, Container, Typography } from "@mui/material";
import theme from "./components/Theme";
import MusicGrid from "./components/MusicGrid";
import MusicUpload from "./components/MusicUpload";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: "background.default" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Music
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <MusicUpload onUpload={() => window.location.reload()} />
        <MusicGrid />
      </Container>
    </ThemeProvider>
  );
};
export default App;
