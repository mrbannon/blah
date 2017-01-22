import Application from './application/Application';
import React from 'react';
import ReactDOM from 'react-dom';

const JSON_URL = 'https://gist.githubusercontent.com/espinet/922527b7ea1606127f7dba413a911937/raw/245370f480934a50eb3fa68891fc9476cce894e2/secondary-levels.json';
ReactDOM.render(<Application title="MARKET" url={JSON_URL}/>, document.getElementById('application'));