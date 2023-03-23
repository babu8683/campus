import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Components/index";
import User from "./Components/User";

class Ra extends Component {
	render() {
		return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </Router>
    );
	}
}

export default Ra;