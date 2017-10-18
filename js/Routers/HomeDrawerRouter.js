import React, { Component } from "react";
import Home from "../components/home/";
import Setting from "../components/setting";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
    Setting: { screen: Setting }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
