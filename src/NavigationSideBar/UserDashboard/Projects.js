import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import { CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "lightblue",
    maxWidth: 500,
    maxHeight: 700,
    margin: "auto",
    marginTop: 20,
    transition: "0.3s",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  header: {
    textAlign: "center",
  },
  inputH: {
    margin: 10,
    width: 200,
    height: 30,
    borderRadius: 10,
  },
  inputP: {
    width: 450,
    height: 80,
  },
  input: {
    marginTop: 10,
    fontSize: "15px",
  },
  inputN: {
    marginTop: 10,
    borderRadius: 5,
    width: 80,
    height: 20,
  },
  button: {
    display: "flex",
    marginLeft: 310,
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.header}>
          <h1 className={classes.h1}>Create Your Project</h1>
          <input
            className={classes.inputH}
            type="Project name"
            name="Project name"
            id="project"
            placeholder="Enter Project Name"
            autoComplete="off"
          />

          <input
            className={classes.inputH}
            type="text"
            id="Location"
            placeholder="Set Location"
            name="location"
          />
        </CardContent>

        <CardContent>
          <label className={classes.input}>Project Details</label>
          <br />
          <input
            className={classes.inputP}
            type="text"
            id="AboutProject"
            placeholder="Tell Us About Your Project"
            name="project"
          />
        </CardContent>

        <CardContent className={classes.input3}>
          <div className={classes.input}>
            <label>Area In Square Ft:</label>
            <br />
            <input
              className={classes.inputN}
              type="number"
              id="quantity"
              name="quantity"
              placeholder="sq.ft"
              min="1"
              max=""
            />
          </div>
          <div className={classes.input}>
            <label>Number Of Floors:</label>
            <br />
            <input
              className={classes.inputN}
              type="number"
              id="quantity"
              name="quantity"
              placeholder="No."
              min="1"
              max="10"
            />
          </div>

          <div className={classes.input}>
            <label>Estimated Cost:</label>
            <br />
            <input
              className={classes.inputN}
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Cost."
              min="1"
              max=""
            />
          </div>

          <div className={classes.input}>
            <label>Expected Days:</label>
            <br />
            <input
              className={classes.inputN}
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Days."
              min="1"
              max=""
            />
          </div>
        </CardContent>

        <CardContent className={classes.button}>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
