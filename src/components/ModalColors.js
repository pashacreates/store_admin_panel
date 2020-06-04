import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import updateColors from "../firebaseFunctions/updateColors";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  inputBlock: {
    display: "flex",
    flexDirection: "column",
  },
  mainFild: {
    display: "flex",
    flexDirection: "row",
  },
  TextField: {
    margin: 5,
  },
  img: {
    width: "30%",
    height: "30%",
    marginRight: 20,
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [colors, setColors] = useState(props.data.colors);
  const [color, setColor] = useState(props.data.color);
  const [colorUrl, setColorUrl] = useState(props.data.colorUrl);

  function newColor(data) {
    setColors(colors.push(data));
    const upColor = {
      id: props.data.id,
      colors: colors,
    };
    setOpen(false);
    updateColors(upColor);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  const handleChangeColorUrl = (event) => {
    setColorUrl(event.target.value);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className="button-edit"
        startIcon={<AddPhotoAlternateIcon />}
        onClick={handleOpen}
      >
        Add Color
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} id={props.data.id}>
            <h4>Add Color {props.data.name}</h4>
            <div>
              <div className={classes.mainFild}>
                <img src={colorUrl} alt={color} className={classes.img} />
                <div className={classes.inputBlock}>
                  <TextField
                    label="Color"
                    variant="outlined"
                    size="small"
                    className={classes.TextField}
                    value={color}
                    onChange={handleChangeColor}
                  />
                  <TextField
                    label="URL"
                    variant="outlined"
                    size="small"
                    className={classes.TextField}
                    value={colorUrl}
                    onChange={handleChangeColorUrl}
                  />
                </div>
              </div>

              <Button
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
                startIcon={<AddPhotoAlternateIcon />}
                onClick={() => newColor({ color: color, colorUrl: colorUrl })}
              >
                Add Color
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
