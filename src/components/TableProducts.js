import React from "react";
import getDatabase from "../firebaseFunctions/getDatabase";
import Table from "@material-ui/core/Table";
import TableRowProducts from "./TableRowProducts";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableBody from "@material-ui/core/TableBody";
import {createStore} from "redux"
//import { connect, Provider } from "react-redux"

export default class TableProducts extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: [],
      pages: 1,
      currentPage: 1,
      loadProgress: null,
    };
  }

  componentDidMount() {
    this.setState({ loadProgress: <LinearProgress /> });
    const request = {
      name: null,
      maxPrice: null,
      minPrice: null,
      pageNumber: 1,
      itemOnPage: 30,
    };
    getDatabase(request).then((res) => {
      this.setState({
        data: res.products,
        pages: res.pages,
        loadProgress: null,
      });
    });
  }

  handleChange = (event, value) => {
    this.setState({
      loadProgress: <LinearProgress />,
      currentPage: value,
    });
    const request = {
      pageNumber: value,
      itemOnPage: 30,
    };

    getDatabase(request).then((res) => {
      this.setState({
        data: res.products,
        pages: res.pages,
        loadProgress: null,
      });
    });
  };

  render() {
    const products = this.state.data;
    const productsList = products.map((product) => (
      <TableRowProducts product={product} key={product.id}/>
    ));

    return (
      <TableContainer component={Paper}>
        <Typography display="inline">Page: {this.state.currentPage}</Typography>
        <Pagination
          count={this.state.pages}
          page={this.state.currentPage}
          boundaryCount={2}
          onChange={this.handleChange}
          color="primary"
        />
        {this.state.loadProgress}
        <Table className="Table" size="small" aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell>Buttons</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Colors</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {productsList}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
