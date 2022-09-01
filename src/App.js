import React from 'react';
import { Admin, Resource, ListGuesser,fetchUtils } from 'react-admin';


import authProvider from './auth/authProvider';
import myDataProvider from './auth/dataProvider';

import Login from './Pages/auth/Login';
import jsonServerProvider from 'ra-data-json-server';



const dataProvider = myDataProvider('https://jsonplaceholder.typicode.com');
    

function App() {
  return (

     <Admin dataProvider={dataProvider} authProvider={authProvider} requireAuth>
          <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}

export default App;
