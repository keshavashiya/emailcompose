import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1 }}>
            Email Compose
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 16 }}>
        <Button
          onClick={handleOpen}
          style={{ marginTop: 16 }}
          variant="contained"
        >
          Compose
        </Button>
      </div>
      <Modal style={{}} open={open} onClose={handleClose}>
        <div
          style={{
            backgroundColor: "#fff",
            position: "absolute",
            right: 20,
            bottom: 0,
            height: 500,
            width: 500,
          }}
        >
          <AppBar position="static">
            <div
              style={{
                backgroundColor: "#404040",
              }}
            >
              <Button style={{ color: "#fff" }} onClick={handleClose}>
                x
              </Button>
            </div>
          </AppBar>
          <div style={{ padding: 16 }}>
            <div style={{}}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">To</InputAdornment>
                  ),
                }}
                style={{ width: 460 }}
                id="standard-basic"
              />
            </div>
            <div style={{}}>
              <TextField
                placeholder="Subject"
                style={{ width: 460 }}
                id="standard-basic"
              />
            </div>
            <div>
              <textarea
                name="body"
                style={{ border: 0, width: 480, height: 380, marginTop: 6 }}
                // onChange={this.handleChange}
                // value={value}
              />
            </div>
            <div style={{ position: "absolute", bottom: 10, left: 10 }}>
              <Button
                // style={{ marginTop: 16 }}
                variant="contained"
                color="primary"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
