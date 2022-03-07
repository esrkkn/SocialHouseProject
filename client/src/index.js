import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import SocialHouseContextProvider from './Context';
import Routes from './Routes';


ReactDOM.render(
		<SocialHouseContextProvider>
        <BrowserRouter>

			<Routes />
      </BrowserRouter>

		</SocialHouseContextProvider>,
  document.getElementById('root')
);
