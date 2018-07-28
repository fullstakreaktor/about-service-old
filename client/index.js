import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import GOOGLE_MAP_KEY from './config/GoogleMap.js';

ReactDOM.render(<App id='86' listingId='56' API_KEY={GOOGLE_MAP_KEY}/>,document.getElementById('app'));
