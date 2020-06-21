import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import ModalProduct from "./ModalProduct";
import ModalColors from "./ModalColors";
import delFromDatabase from "../firebaseFunctions/delFromDatabase";
import updateColors from "../firebaseFunctions/updateColors";

export default class TableRowProducts extends React.Component {
  render() {
    const product = this.props.product;

    function delColor(index){
      
      let colors = product.colors;
      colors.splice(index,1);
      const upColor = {
        id: product.id,
        colors: colors,
      };
      updateColors(upColor)
    }

    return (
      <TableRow key={product.id}>
        <TableCell align="center">
          <ModalProduct data={product} />
          <ModalColors data={product} />
          <Button
            variant="contained"
            color="secondary"
            className="button-edit"
            startIcon={<DeleteIcon />}
            onClick={() => delFromDatabase(product.id)}
          >
            Delete
          </Button>
        </TableCell>
        <TableCell component="th" scope="row">
          {product.name}
        </TableCell>
        <TableCell align="center">{product.price}</TableCell>
        <TableCell align="center"><img src={product.image} alt={product.name} /></TableCell>
        <TableCell align="center">{product.desc}</TableCell>
        <TableCell>
          <ul className="colors-collection">
            {product.colors.map((item,index) => (
              <li key={item.color}>
                <p>{item.color}</p>
                <div className="color-block" key={item.color}>
                  <img
                    src={item.colorUrl}
                    alt={item.name}
                    title={item.color}
                    className="colors-img"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className="color-del-but"
                    startIcon={<DeleteIcon />}
                    onClick={() => delColor(index) }
                  />
                </div>
              </li>
            ))}
          </ul>
        </TableCell>
      </TableRow>
    );
  }
}
