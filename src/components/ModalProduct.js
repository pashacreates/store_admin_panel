import React from "react";
import {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import editProduct from "../firebaseFunctions/editProduct"

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
    width: '30%',
    height: '30%',
    marginRight: 20,
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(props.data.name);
  const [price, setPrice] = useState(props.data.price);
  const [imgUrl, setImgUrl] = useState(props.data.image);
  const [desc, setDesc] = useState(props.data.desc);

  let newData = {
    id: props.data.id,
    name: name,
    price: price,
    img_url: imgUrl,
    desc: desc,
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangeImgUrl = (event) => {
    setImgUrl(event.target.value);
  };
  const handleChangeDesc = (event) => {
    setDesc(event.target.value);
  };

  
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className="button-edit"
        startIcon={<EditIcon />}
        onClick={handleOpen}
      >
        Edit
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
            <h4>Edit {props.data.name}</h4>
            <div>
              <div className={classes.mainFild}>
                <img src={props.data.image} alt={props.data.name} className={classes.img}/>
                <div className={classes.inputBlock}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    className={classes.TextField}
                    value={name}
                    onChange={handleChangeName}
                  />
                  <TextField
                    label="Price"
                    variant="outlined"
                    size="small"
                    className={classes.TextField}
                    value={price}
                    onChange={handleChangePrice}
                  />
                  <TextField
                    label="Image"
                    variant="outlined"
                    size="small"
                    className={classes.TextField}
                    value={imgUrl}
                    onChange={handleChangeImgUrl}
                  />
                  <TextField
                    label="Description"
                    variant="outlined"
                    size="small"
                    className={classes.TextField}
                    value={desc}
                    onChange={handleChangeDesc}
                    multiline
                  />
                </div>
              </div>

              <Button
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
                startIcon={<EditIcon />}
                onClick= {() => editProduct(newData)}
              >
                Edit
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
