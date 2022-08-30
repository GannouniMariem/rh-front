import React from 'react';

import Login from './Pages/auth/Login';

import { Admin, Resource, ListGuesser,fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {authProvider,httpClient} from './auth/authProvider';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com', httpClient);
    

function App() {
  return (

     <Admin loginPage={Login} dataProvider={dataProvider} authProvider={authProvider} requireAuth>
          <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}

export default App;
