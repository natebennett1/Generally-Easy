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
  Toolbar,
  Typography
} from "@material-ui/core";
import { auth } from "./firebase";
import AddRating from "./AddRating";

export function App(props) {
  const [drawer_open, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => {
      if (u) {
        setUser(u);
      } else {
        props.history.push("/");
      }
    });

    return unsubscribe;
  }, [props.history]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        props.history.push("/");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  if (!user) {
    return <div />;
  }

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => {
              setDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            style={{ flexGrow: 1, marginLeft: "30px" }}
            onClick={() => {
              props.history.push("/app/");
              setDrawerOpen (false);
            }}
          >
            Generally Easy
          </Typography>
          <Typography color="inherit" style={{ marginRight: "30px" }}>
            Hi! {user.email}
          </Typography>
          <Button color="inherit" onClick={handleSignOut}>
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawer_open}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <List>
          <ListItem onClick={() => {
              props.history.push("/app/american");
              setDrawerOpen (false);
            }}
            button>
            <ListItemText primary="American Heritage" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/global");
              setDrawerOpen (false);
            }}
            button>
            <ListItemText primary="Global and Cultural Awareness" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/first-year");
              setDrawerOpen (false);
            }} button>
            <ListItemText primary="First-Year Writing" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/written&oral");
              setDrawerOpen (false);
            }} button>
            <ListItemText primary="Adv. Written and Oral Communication" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/languages");
              setDrawerOpen (false);
            }} button>
            <ListItemText primary="Languages of Learning" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/civ1");
              setDrawerOpen (false);
            }} button>
            <ListItemText primary="Civ 1" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/civ2");
              setDrawerOpen (false);
            }} button>
            <ListItemText primary="Civ 2" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/arts");
              setDrawerOpen (false);
            }} button>
            <ListItemText primary="Arts" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/letters");
              setDrawerOpen (false);
            }} button>
            <ListItemText primary="Letters" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/biological");
              setDrawerOpen (false);
            }} button>
            <ListItemText primary="Biological Science" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/physical");
              setDrawerOpen (false);
            }} button>
            <ListItemText primary="Physical Science" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/social");
              setDrawerOpen (false);
            }} button>
            <ListItemText primary="Social Science" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/religion");
              setDrawerOpen (false);
            }} button>
            <ListItemText primary="Religion" />
          </ListItem>
          <ListItem onClick={() => {
              props.history.push("/app/");
              setDrawerOpen (false);
            }} button>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
