import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Alert } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
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

export const Register = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [prof, setprof] = useState("");
  const [bio, setbio] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [prof2, setprof2] = useState("");
  const [prof3, setprof3] = useState("");
  const [loc, setloc] = useState("");
  const [message, setmessage] = useState("");
  const [errmessage, seterrmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/techuserapi/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: fname,
        last_name: lname,
        profession: prof,
        profession2: prof2,
        profession3: prof3,
        bio: bio,
        phone: phone,
        email: email,
        location: loc,
      }),
    })
      .then((res) => {
        if (res.ok) {
          seterrmessage("");
          setmessage(" Register Successfull :)");
        } else {
          setmessage("");
          seterrmessage("Register Failed please check all the * field");
        }
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <React.Fragment>
      <Grid
        container
        spacing={1}
        align="center"
        sx={{
          margin: 10,
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "67vh",
        }}
      >
        <Paper>
          <Box px={3} py={2}>
            <Typography variant="h6" align="center" margin="dense">
              Register as a superMan
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="fist_name"
                  name="first_name"
                  label="First Name"
                  fullWidth
                  margin="dense"
                  value={fname}
                  onChange={(e) => setfname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="last_name"
                  name="last_name"
                  label="Family Name"
                  fullWidth
                  margin="dense"
                  value={lname}
                  onChange={(e) => setlname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  select
                  id="address"
                  name="address"
                  label="Your Gotham location"
                  fullWidth
                  margin="dense"
                  value={loc}
                  onChange={(e) => setloc(e.target.value)}
                >
                  {location.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  select
                  required
                  id="profession"
                  name="profession"
                  label="Super Power"
                  fullWidth
                  margin="dense"
                  value={prof}
                  onChange={(e) => setprof(e.target.value)}
                >
                  {profession.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  id="profession2"
                  name="profession2"
                  label="Super Power 2"
                  fullWidth
                  margin="dense"
                  value={prof2}
                  onChange={(e) => setprof2(e.target.value)}
                >
                  {profession.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  id="profession3"
                  name="profession3"
                  label="Super Power 3"
                  fullWidth
                  margin="dense"
                  value={prof3}
                  onChange={(e) => setprof3(e.target.value)}
                >
                  {profession.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  type="number"
                  id="phone"
                  name="phone"
                  label="Phone"
                  fullWidth
                  margin="dense"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  name="email"
                  label="email"
                  fullWidth
                  margin="dense"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  multiline
                  maxRows={3}
                  minRows={3}
                  required
                  id="bio"
                  name="bio"
                  label="Bio"
                  placeholder="write something about your greatness ... :) "
                  fullWidth
                  margin="dense"
                  value={bio}
                  onChange={(e) => setbio(e.target.value)}
                />
              </Grid>
            </Grid>
            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Register
              </Button>
            </Box>
            {message ? (
              <Alert severity="success">Register successfull ! :)</Alert>
            ) : (
              ""
            )}
            {errmessage ? (
              <Alert severity="error">Register Failed ! :(</Alert>
            ) : (
              ""
            )}
          </Box>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};
