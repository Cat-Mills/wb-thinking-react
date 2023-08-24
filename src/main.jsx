import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import axios from 'axios';

//axios.get is pointing to the matching app.get in our app.js file.
axios.get('/invoice')
  .then(({data}) => {

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App initialData={data}/>
      </React.StrictMode>,
    );
  })

  .catch(err => console.log(err))



