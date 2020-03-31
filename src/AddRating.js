import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Toolbar,
  Typography,
  Radio
} from "@material-ui/core";
import { Link, Route } from "react-router-dom";
import { db, functions } from "./firebase";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function AddRating(props) {
  const [rating, setRating] = useState(0);
  const [wouldTakeAgain, setWouldTakeAgain] = useState("");
  const [comments, setComments] = useState("");

  const handleSave = () => {
    db.collection("users")
      .doc(props.user.uid)
      .collection("Rating")
      .add({
        rating: rating,
        wouldTakeAgain: wouldTakeAgain,
        comments: comments,

        date: new Date()
      })
      .then(() => {
        setRating("");
        setWouldTakeAgain(0);
        setComments("");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "align-items" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <paper
          style={{ padding: 12, marginTop: 30, width: "100", maxWidth: 400 }}
        >
          <Typography variant="h4">Rating</Typography>
          <Typography style={{ marginTop: 16 }}>
            On a scale from 1 to 5, with 5 being the best, how would you rate
            your experience?
          </Typography>
          <div style={{ display: "flex" }}>
            <Radio
              checked={rating === 1}
              checkedIcon={1}
              icon={1}
              onChange={() => setRating(1)}
            ></Radio>
            <Radio
              checked={rating === 2}
              checkedIcon={2}
              icon={2}
              onChange={() => setRating(2)}
            ></Radio>
            <Radio
              checked={rating === 3}
              checkedIcon={3}
              icon={3}
              onChange={() => setRating(3)}
            ></Radio>
            <Radio
              checked={rating === 4}
              checkedIcon={4}
              icon={4}
              onChange={() => setRating(4)}
            ></Radio>
            <Radio
              checked={rating === 5}
              checkedIcon={5}
              icon={5}
              onChange={() => setRating(5)}
            ></Radio>
          </div>
          <Typography style={{ marginTop: 16 }}>
            Would you take this course again from the same professor?
          </Typography>
          <Checkbox
            value={wouldTakeAgain}
            onChange={e => setWouldTakeAgain(e.target.value)}
          >
            Yes
          </Checkbox>
          <Checkbox
            value={wouldTakeAgain}
            onChange={e => setWouldTakeAgain(e.target.value)}
          >
            No
          </Checkbox>
          <Typography style={{ marginTop: 16 }}>
            Please describe your experience.
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            value={comments}
            onChange={e => setComments(e.target.value)}
          ></TextField>
          <Typography style={{ marginTop: 16 }}>
            What category does this course fall under?
          </Typography>
          <div>
            <Button className={classes.button} onClick={handleOpen}>
              What category does this course fall under?
            </Button>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Button
            onClick={handleSave}
            style={{ marginTop: 16 }}
            variant="outlined"
            color="primary"
          >
            Save
          </Button>
        </paper>
      </div>
      ); };
    </div>
  );
}
