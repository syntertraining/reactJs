import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App headerProp = "Header from props...static " contentProp = "Content from props...static"/>, document.getElementById('app'));
export default App;