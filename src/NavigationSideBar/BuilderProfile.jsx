import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Button, CardContent } from "@material-ui/core";
import profilepic from "./profilepic.png";

import LocationOn from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    width: 800,
    height: 500,
    marginLeft: 400,
    marginTop: 50,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  head: {
    display: "flex",
  },
  p: {
    marginTop: 40,
  },
  name: {
    fontSize: 30,
    fontFamily: "impact",
  },
  edit: {
    marginLeft: 250,
  },
  anchor: {
    marginLeft: 80,
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  builderId: {
    display: "flex",
    marginLeft: 80,
  },
  builderName: {
    display: "flex",
    marginLeft: 80,
  },
  builderPhNo: {
    display: "flex",
    marginLeft: 80,
  },
  builderEmail: {
    display: "flex",
    marginLeft: 80,
  },
  builderDtls: {
    marginTop: 30,
  },
  builderIdDtls: {
    marginLeft: 150,
  },
  builderNameDtls: {
    marginLeft: 120,
  },
  builderPhNoDtls: {
    marginLeft: 91,
  },
  builderEmailDtls: {
    marginLeft: 160,
  },
  submit: {
    marginLeft: 80,
    marginTop: 20,
  },
});

export default function BuilderProfile() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent class={classes.head}>
          <div>
            <img src={profilepic} alt="prf" width="200px" />
          </div>

          <div className={classes.p}>
            <h5 className={classes.name}>Sadha Shivam</h5>
            <LocationOn></LocationOn>
            <text>Hyderabad</text>
          </div>
          <div className={classes.p}>
            <Button color="secondary" className={classes.edit}>
              Edit Profile
            </Button>
          </div>
        </CardContent>

        <CardContent>
          <div className={classes.anchor}>
            <a href="#1">About</a>
          </div>

          <div className={classes.builderDtls}>
            <div className={classes.builderId}>
              <lable>Builder Id</lable>
              <p className={classes.builderIdDtls}>xxxxxxxxxxxx</p>
            </div>

            <div className={classes.builderName}>
              <lable>Builder Name</lable>
              <p className={classes.builderNameDtls}>Sadha shivam</p>
            </div>

            <div className={classes.builderPhNo}>
              <lable>Phone Number</lable>
              <p className={classes.builderPhNoDtls}>9999999999</p>
            </div>

            <div className={classes.builderEmail}>
              <lable>Email</lable>
              <p className={classes.builderEmailDtls}>....@gmail.com</p>
            </div>

            <Button
              className={classes.submit}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
