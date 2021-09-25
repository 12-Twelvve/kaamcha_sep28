import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
const Data = [
  {
    name: "12-twelvve",
    photo:
      "https://i.pinimg.com/236x/c0/f5/ea/c0f5ea0229d00d2a6b10bf4b8793e00d.jpg",
    quote:
      "i m legion ,How do I take off a mask when it stops being a mask, when it's as much a part of me as I am?",
    facebook: "https://www.facebook.com/twelvve.nepo",
    github: "https://github.com/12-Twelvve",
  },
  {
    name: "AmarDeep Khatri",
    photo:
      "https://scontent.fktm4-1.fna.fbcdn.net/v/t1.6435-9/p180x540/81809558_2634246860029798_2263427114789240832_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=84a396&_nc_ohc=oaTgKmc9bw0AX8j4rYN&_nc_ht=scontent.fktm4-1.fna&oh=bcf7002b75d5fb4fd9519a84511bd18b&oe=61739341",
    quote:
      "They showed themselves, the top 1% of the 1%, the ones in control, the ones who play God without permission. And now I'm gonna take them down",
    facebook: "https://www.facebook.com/amar.khatri.180",
    github: "https://github.com/12-Twelvve",
  },
  {
    name: "Samir Pant",
    photo:
      "https://scontent.fktm4-1.fna.fbcdn.net/v/t1.6435-9/p526x296/240990076_3047313738846689_6001040626559888431_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=RenM4GzKRygAX91u3tH&_nc_ht=scontent.fktm4-1.fna&oh=d4538a2fc4e3c93e8f570c4af3f8ea40&oe=61722558",
    quote:
      "I’ve never found it hard to hack most people. If you listen to them, watch them, their vulnerabilities are like a neon sign screwed into their heads ",
    facebook: "https://www.facebook.com/samir.pant.7",
    github: "https://github.com/12-Twelvve",
  },
  {
    name: "Aadesh Bhattrai",
    photo:
      "https://i.pinimg.com/originals/37/9a/9d/379a9d2babd08db16bfa80855980b0ca.jpg",
    quote:
      "I do see the beauty in the rules, the invisible code of chaos hiding behind the menacing face of order.",
    facebook: "https://www.facebook.com/twelvve.nepo",
    github: "https://github.com/12-Twelvve",
  },
  {
    name: "Sahil Maharjan",
    photo:
      "https://scontent.fktm4-1.fna.fbcdn.net/v/t1.6435-9/81911053_2529753980627563_1993259584378109952_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=ughAnXSwm1YAX-lUhks&tn=uJbgogVvv8aUgXmM&_nc_ht=scontent.fktm4-1.fna&oh=3d7c2d376e1242f3741b8c23fc93c737&oe=6171164C",
    quote: "We’re all living in each other’s paranoia",
    facebook: "https://www.facebook.com/profile.php?id=100007789575090",
    github: "https://github.com/12-Twelvve",
  },
  {
    name: "Saurab Neupane",
    photo:
      "https://scontent.fktm4-1.fna.fbcdn.net/v/t1.6435-9/p720x720/116152179_1527692117687730_4983000437372478324_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=GV6LQoLgPo8AX_WTa5-&_nc_ht=scontent.fktm4-1.fna&oh=f9b92f59f5ff8279c7e83e42c3d0672b&oe=61730E34",
    quote:
      "Maybe wars aren’t meant to be won, maybe they’re meant to be continuous",
    facebook: "https://www.facebook.com/saurab.neupane.16",
    github: "https://github.com/12-Twelvve",
  },
];

export const About = () => {
  return (
    <div
      className="about"
      style={{
        margin: "0 10vw",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div
        className="about_description"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>World's Coolest and perfect superheroes marketplace</h1>
        <p style={{ margin: "0 10vw", align: "center" }}>
          kAamChha.com.np is the world's largest Coolest and perfect superheroes
          marketplace. We connect over 6M helpless, superheroes and sidekicks
          globally from over 247 countries, regions and territories. Through our
          marketplace, helpless can hire superheroes to help in areas such as
          plumbing, carpenting, painting, electricity, loading, and many more
          you name it .
        </p>
      </div>
      <br />
      <div>
        <Typography variant="h4">Team</Typography>
      </div>
      <div>
        <br />
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            justifyItems: "center",
          }}
        >
          {Data.map((mem) => (
            <MemberCard d={mem} />
          ))}
        </Grid>
      </div>
    </div>
  );
};

function MemberCard(props) {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
      <CardMedia
        component="img"
        height="140"
        image={props.d.photo}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.d.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.d.quote}
        </Typography>
      </CardContent>
      <Box
        align="center"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <IconButton color="primary" href={props.d.facebook}>
          <FacebookIcon />
        </IconButton>
        <IconButton color="primary" href={props.d.github}>
          <GitHubIcon />
        </IconButton>
        <IconButton color="primary" href={props.d.github}>
          <InstagramIcon />
        </IconButton>
      </Box>
    </Card>
  );
}
