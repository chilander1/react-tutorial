var React = require('react');
var NoteColor = require('./NotesColor.jsx');
require('./NoteEditor.css');

var NoteEditor = React.createClass({
    contextTypes:{
        color: React.PropTypes.string
    },
    getInitialState: function () {
        return {
            text: '',
            selectedOption: '#FF8A80',
            color1: this.context.color
        };
    },

    handleTextChange: function (event) {
        this.setState({text: event.target.value});

    },
    onChildChanged: function (newState) {
        // if newState is true, it means a checkbox has been checked.
        this.setState({selectedOption: newState});

    },
    handleNoteAdd: function () {
        var newNote = {
            text: this.state.text,
            color: this.state.color1,
            id: Date.now()
        };
        console.log(this.props.children)
        console.log(this.props)
        console.log(this.context)
        console.log(this.state.color1)
        this.props.onNoteAdd(newNote);
        this.setState({text: ''});
    },

    render: function () {

        return (
            console.log(this.context.color),
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <NoteColor onChange={this.onChildChanged}/>
                <button className="add-button" onClick={this.handleNoteAdd} >Add
                </button>
            </div>
        );
    }
});

module.exports = NoteEditor;