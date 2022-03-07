import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import SocialHouseContextProvider from './Context';
import Routes from './Routes';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


ReactDOM.render(
		<SocialHouseContextProvider>
        <BrowserRouter>
      <Header />
			<Routes />
      <Footer />
      </BrowserRouter>

		</SocialHouseContextProvider>,
  document.getElementById('root')
);
