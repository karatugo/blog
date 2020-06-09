import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from "./Blog";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../Redux/store";
import {Card, Col, Layout, Row, Space,Menu} from "antd";
import ListPosts from "./ListPosts";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);


function App() {

    return (
      <ReduxProvider store={reduxStore}>
          <div className="App">
                <Blog />
          </div>
      </ReduxProvider>
  );
}

export default App;
