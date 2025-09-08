import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import UrlShortenerPage from "./pages/UrlShortenerPage";
import StatisticsPage from "./pages/StatisticsPage";
import RedirectHandler from "./pages/RedirectHandler";

const App: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            React URL Shortener (TS)
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Shorten
          </Button>
          <Button color="inherit" component={Link} to="/stats">
            Statistics
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<UrlShortenerPage />} />
          <Route path="/stats" element={<StatisticsPage />} />
          <Route path="/:shortcode" element={<RedirectHandler />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
