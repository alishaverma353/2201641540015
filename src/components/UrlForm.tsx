import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";

type UrlFormProps = {
  onSubmit: (url: string, validity: number, shortcode?: string) => void;
};

const UrlForm: React.FC<UrlFormProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState<string>("");
  const [validity, setValidity] = useState<number>(30);
  const [shortcode, setShortcode] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) return;

    onSubmit(url, validity || 30, shortcode || undefined);

    // Reset form
    setUrl("");
    setValidity(30);
    setShortcode("");
  };

  return (
    <Paper sx={{ p: 3, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Shorten a new URL
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Long URL */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Long URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </Grid>

          {/* Validity */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="number"
              label="Validity (minutes)"
              value={validity}
              onChange={(e) => setValidity(Number(e.target.value))}
            />
          </Grid>

          {/* Shortcode */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Preferred Shortcode (optional)"
              value={shortcode}
              onChange={(e) => setShortcode(e.target.value)}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Shorten
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UrlForm;
