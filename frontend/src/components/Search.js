import React, { useState } from "react";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const profession = [
  {
    value: "painter",
    label: "Painter",
  },
  {
    value: "carpenter",
    label: "Carpenter",
  },
  {
    value: "electrician",
    label: "Electrician",
  },
  {
    value: "plumber",
    label: "Plumber",
  },
];

const location = [
  {
    value: "ktm",
    label: "Kathmandu",
  },
  {
    value: "ltp",
    label: "Lalitpur",
  },
  {
    value: "dng",
    label: "Dang",
  },
  {
    value: "btw",
    label: "Butwal",
  },
  {
    value: "ctw",
    label: "Chitwan",
  },
];

const Search = () => {
  const [Data, setData] = useState([]);
  const [clearValue, setclearValue] = useState(false);
  const [prof, setprof] = useState("painter");
  const [loc, setloc] = useState("ktm");
  const handleProf = (event) => {
    setprof(event.target.value);
  };
  const handleLoc = (event) => {
    setloc(event.target.value);
  };

  const searchHandler = (e) => {
    console.log("searching..");
    e.preventDefault();
    fetch(`/api/techuserapi/?profession=${prof}&locatio=${loc}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setclearValue(true);
        console.log(data);
      })
      .catch((err) => console.log(err));
    // get the data
    // fetch()
    // setclearvalue =true
  };
  const handleBack = (e) => {
    setclearValue(false);
  };
  return (
    <React.Fragment>
      {clearValue ? (
        <React.Fragment>
          <Grid container spacing={0} align="center">
            <IconButton
              color="primary"
              sx={{ margin: 10 }}
              onClick={handleBack}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Box
              container
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              {
                //   mapping data
                Data.map((person) => {
                  return <BasicCard d={person} />;
                })
              }
            </Box>
          </Grid>
        </React.Fragment>
      ) : (
        <Grid container spacing={3} align="center" display="flex">
          <Box container px={80} py={35} align="center" variant="contained">
            <Grid item xs={12} align="center">
              <Typography variant="h4" compact="h4">
                Find a local craftsmen for your job
              </Typography>
              <p>
                Search for craftsmen for free. Match to your craftsmen near you.
              </p>
              <br />
              <br />
            </Grid>
            <Grid item xs={12} align="center">
              <TextField
                id="prof"
                select
                label="Profession"
                value={prof}
                onChange={handleProf}
                helperText="Please select the job type"
              >
                {profession.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="loc"
                select
                label="Location"
                value={loc}
                onChange={handleLoc}
                helperText="Please select your place"
              >
                {location.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Box mt={3}>
              <Button variant="contained" onClick={searchHandler}>
                Search
              </Button>
            </Box>
          </Box>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default Search;

const BasicCard = (props) => {
  return (
    <Card sx={{ minWidth: 500, margin: 10 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
          {props.d.profession}
        </Typography>
        <Typography variant="h4" component="div">
          {props.d.first_name}
          {props.d.last_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="primary">
          {props.d.location}
        </Typography>
        <Typography variant="body2">
          {props.d.bio}
          <br />
          {"phone "}
          {props.d.phone}
          <br />
          {props.d.email ? props.d.email : ""}
        </Typography>
      </CardContent>
    </Card>
  );
};
