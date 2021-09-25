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
    value: "kathmandu",
    label: "Kathmandu",
  },
  {
    value: "lalitpur",
    label: "Lalitpur",
  },
  {
    value: "bhaktapur",
    label: "Bhaktapur",
  },
  {
    value: "dang",
    label: "Dang",
  },
  {
    value: "butwal",
    label: "Butwal",
  },
  {
    value: "chitwan",
    label: "Chitwan",
  },
];

const Search = () => {
  const [Data, setData] = useState([]);
  const [clearValue, setclearValue] = useState(false);
  const [prof, setprof] = useState("painter");
  const [loc, setloc] = useState("kathmandu");
  const handleProf = (event) => {
    setprof(event.target.value);
  };
  const handleLoc = (event) => {
    setloc(event.target.value);
  };

  const searchHandler = (e) => {
    console.log("searching..");
    e.preventDefault();
    fetch(`/api/techuserapi/?profession=${prof}&location=${loc}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setclearValue(true);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  const handleBack = (e) => {
    setclearValue(false);
  };
  return (
    <React.Fragment>
      {clearValue ? (
        <React.Fragment>
          <div
            style={{
              minHeight: "83vh",
              margin: "3px 0",
            }}
          >
            <IconButton
              color="primary"
              sx={{ margin: "30px" }}
              onClick={handleBack}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Box
              container
              sx={{
                display: "flex",
                flexWrap: "wrap",
                margin: "0 20px",
                justifyContent: "center",
              }}
            >
              {
                //   mapping data
                Data.map((person) => {
                  return <BasicCard d={person} />;
                })
              }
            </Box>
          </div>
        </React.Fragment>
      ) : (
        <Grid
          container
          display="flex"
          flexDirection="column"
          alignItems="center"
          minHeight="83vh"
          justifyContent="center"
          align="center"
          overflow="hidden"
          margin="3px 0"
        >
          <Box padding="5px">
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
              <Button
                sx={{ backgroundColor: "#00e5ff" }}
                variant="contained"
                onClick={searchHandler}
              >
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
    <Card
      sx={{
        minWidth: 450,
        margin: "20px",
        textAlign: "center",
        backgroundImage:
          "url('https://files.123freevectors.com/wp-content/original/130978-blue-and-white-polygon-background-template-graphic.jpg')",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 17 }} color="secondary" gutterBottom>
          {props.d.profession}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "5px" }} component="div">
          {props.d.first_name}
          {"  "}
          {props.d.last_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="primary">
          {props.d.location}
        </Typography>
        <Typography variant="body2">
          {props.d.bio}
          <br />
          {"phone : "}
          {props.d.phone}
          <br />
          {props.d.email ? props.d.email : ""}
        </Typography>
      </CardContent>
    </Card>
  );
};
