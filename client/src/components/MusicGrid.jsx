import { useEffect, useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import { PlayArrow, Pause, MoreHoriz } from "@mui/icons-material";

const MusicGrid = () => {
  const [musicList, setMusicList] = useState([]);
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    fetch("/api/music")
      .then((res) => res.json())
      .then(setMusicList)
      .catch(console.error);
  }, []);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      {musicList.map((music) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={music.id}>
          <Card
            sx={{
              bgcolor: "background.paper",
              borderRadius: 3,
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="200"
                image={music.coverUrl || "/default-cover.jpg"}
                alt={music.title}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
                onClick={() => setPlayingId(playingId === music.id ? null : music.id)}
              >
                {playingId === music.id ? (
                  <Pause sx={{ color: "white" }} />
                ) : (
                  <PlayArrow sx={{ color: "white" }} />
                )}
              </IconButton>
            </Box>

            <CardContent>
              <Typography variant="h6" noWrap>
                {music.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {music.artist}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {formatDuration(music.duration)}
                </Typography>
                <IconButton sx={{ ml: "auto" }}>
                  <MoreHoriz />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default MusicGrid;
