import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";

const MusicUpload = ({ onUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);

      fetch("/api/music/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => onUpload(data))
        .catch(console.error);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "audio/*": [".mp3", ".wav", ".flac"] },
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: "2px dashed #444",
        borderRadius: 4,
        p: 8,
        textAlign: "center",
        bgcolor: isDragActive ? "rgba(255,255,255,0.05)" : "transparent",
        cursor: "pointer",
        transition: "background 0.3s",
      }}
    >
      <input {...getInputProps()} />
      <CloudUpload sx={{ fontSize: 48, mb: 2, color: "text.secondary" }} />
      <Typography variant="h6">
        {isDragActive ? "Drop to upload" : "Drag music files here"}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Supported formats: MP3, WAV, FLAC
      </Typography>
    </Box>
  );
};
export default MusicUpload;
