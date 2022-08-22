import React from "react";
import { Card, Grid, CardMedia, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
function MovieList() {
  const { movieList } = useSelector((state) => ({ ...state.movie }));

  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid items xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {movieList?.Search?.map((item, index) => (
              <Grid key={index} item>
                <Card sx={{ maxWidth: "350" }}>
                  <Link to={`/movie/${item.imdbID}`} > 
                  <CardMedia
                    component="img"
                    height="350"
                    image={item.Poster}
                    alt={item.Title}
                  ></CardMedia>
                  <CardContent>
                    <Typography varient="body2" color="text.primary">
                      {item.Title}
                    </Typography>
                    <Typography varient="body2" color="text.primary">
                      {item.Year}
                    </Typography>
                  </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MovieList;
