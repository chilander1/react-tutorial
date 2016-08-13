var React = require('react');
var NoteColor = require('./NotesColor.jsx');
require('./NoteEditor.css');


var NoteEditor = React.createClass({
    getInitialState: function () {
        return {
            text: '',
            selectedOption: '#FF8A80'
        };
    },

    handleTextChange: function (event) {
        this.setState({text: event.target.value});
    },
    onChildChanged: function(newState) {
        // if newState is true, it means a checkbox has been checked.
        this.setState({ selectedOption: newState });

        console.log(newState)
    },
    handleNoteAdd: function () {
        var newNote = {
            text: this.state.text,
            color: this.state.selectedOption,
            id: Date.now()
        };
        console.log(NoteColor.this)


        this.props.onNoteAdd(newNote);
        this.setState({text: ''});
    },

    render: function () {
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <NoteColor callbackParent={this.onChildChanged} />
                <button className="add-button" onClick={this.handleNoteAdd} callbackParent={this.onChildChanged} >Add</button>
            </div>
        );
    }
});

module.exports = NoteEditor;