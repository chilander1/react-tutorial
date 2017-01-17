const ReactDOM = require('react-dom');
const React = require('react');
const NotesApp = require('./components/NotesApp.jsx');

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
);