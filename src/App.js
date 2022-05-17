import React, { Component } from "react";
import UserFinder from "./components/UserFinder";

export default class App extends Component {
  // componentDidMount(){
  //   console.log("mount");
  // }
  // componentDidUpdate(){
  //   console.log("update");
  // }
  // componentWillUnmount(){
  //   console.log("unmount")
  // }
  render() {
    return (
      <>
        <UserFinder />
      </>
    );
  }
}
