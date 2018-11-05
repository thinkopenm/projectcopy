import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import 'babel-polyfill';
import axios from "axios";
import qs from "qs";		// import Ema per post
import 'bootstrap3/dist/css/bootstrap.css';
import Modal from 'react-modal';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
      super(props);
      }

	render() {
		return (
			<div>
                My React APP
			</div>
		);
	}
}


export default App;
