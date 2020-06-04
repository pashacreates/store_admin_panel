import React from "react";
import {useState} from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";
import writeDatabase from "../firebaseFunctions/writeDatabase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

export default function AddProductsForm() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("");
  const [colorUrl, setColorUrl] = useState("");

  let data = {
    name: name,
    price: price,
    img_url: imgUrl,
    desc: desc,
    colors: [{
      color: color,
      colorUrl: colorUrl,
    }]
  }

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
  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  const handleChangeColorUrl = (event) => {
    setColorUrl(event.target.value);
  };
  function sendData(){
    setName('');
    setPrice('');
    setImgUrl('');
    setDesc('');
    setColor('');
    setColorUrl('');
    writeDatabase(data);
  }

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Box m={5}>
          <TextField
            id="add-prod-name"
            label="Name"
            variant="outlined"
            size="small"
            value={name}
            onChange={handleChangeName}
            // error - для валидации
            // helperText="Incorrect entry."
          />
          <TextField
            id="add-prod-price"
            label="Price"
            variant="outlined"
            size="small"
            value={price}
            className={classes.input}
            onChange={handleChangePrice}
          />
          <TextField
            id="add-prod-imgurl"
            label="Image"
            variant="outlined"
            size="small"
            value={imgUrl}
            onChange={handleChangeImgUrl}
          />

          <div>
            <TextField
              id="add-prod-color"
              label="Color"
              variant="outlined"
              size="small"
              value={color}
              onChange={handleChangeColor}
            />
            <TextField
              id="add-prod-colors-path"
              label="Colors Image URL"
              variant="outlined"
              size="small"
              value={colorUrl}
              onChange={handleChangeColorUrl}
            />

          </div>
          <TextField
            id="add-prod-desc"
            label="Description"
            variant="outlined"
            size="small"
            onChange={handleChangeDesc}
            value={desc}
            multiline
            fullWidth
          />
          <Button
            className={classes.root}
            variant="contained"
            color="primary"
            size="medium"
            fullWidth
            startIcon={<AddIcon />}
            onClick={() => sendData()}
          >
            Add
          </Button>
        </Box>
        
      </form>
    </div>
  );
}
