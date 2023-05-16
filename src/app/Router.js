import React from "react";
import { BrowserRouter, Route } from "../../node_modules/react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import "../App.css";
import AnyPhoto from "../pages/AnyPhoto/AnyPhoto";
import HomeVideo from "../pages/HomeVideo/HomeVideo";
import Earth_Background from '../img/Earth_Background.mp4';
require('dotenv').config()


export const Router = () => {

  return (
    <BrowserRouter>
      <div className="app">
      <video class="Video_Background" autoPlay loop muted>
              <source src={Earth_Background} type="video/mp4"/>
          </video>
          <Route component={HomePage} path="/" exact />
          <Route component={AnyPhoto} path="/AnyPhoto" />
          <Route component={HomeVideo} path="/HomeVideo" />
      </div>
    </BrowserRouter>
  );
};
