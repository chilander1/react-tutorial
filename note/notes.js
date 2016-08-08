var Note = React.createClass({
    render: function () {
        var style = {backgroundColor: this.props.color};
        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}> × </span>
                {this.props.children}
            </div>
        );
    }
});
var color1;
var NoteColor = React.createClass({
    getInitialState: function () {
        return {
            selectedOption: '#FF8A80'
        };
    },
    handleOptionChange: function (changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value,
        });
        color1 = changeEvent.target.value;
    },

    render: function (i, props) {
        return (
            <div className="colorB">
                <input type="radio" value="#FF8A80"
                       checked={this.state.selectedOption === '#FF8A80'} onChange={this.handleOptionChange}/>
                <input type="radio" value="#FFD180"
                       checked={this.state.selectedOption === '#FFD180'} onChange={this.handleOptionChange}/>
                <input type="radio" value="#FFFF8D"
                       checked={this.state.selectedOption === '#FFFF8D'} onChange={this.handleOptionChange}/>
                <input type="radio" value="#CFD8DC"
                       checked={this.state.selectedOption === '#CFD8DC'} onChange={this.handleOptionChange}/>
                <input type="radio" value="#80D8FF"
                       checked={this.state.selectedOption === '#80D8FF'} onChange={this.handleOptionChange}/>
                <input type="radio" value="#A7FFEB"
                       checked={this.state.selectedOption === '#A7FFEB'} onChange={this.handleOptionChange}/>
                <input type="radio" value="#CCFF90"
                       checked={this.state.selectedOption === '#CCFF90'} onChange={this.handleOptionChange}/>
            </div>
        )
    }
});
var NoteEditor = React.createClass({
    getInitialState: function () {
        return {
            text: '',
        };
    },

    handleTextChange: function (event) {
        this.setState({text: event.target.value});
    },

    handleNoteAdd: function () {
        var newNote = {
            text: this.state.text,
            color: color1,
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
                <NoteColor/>
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
});

var NotesGrid = React.createClass({
    componentDidMount: function () {
        var grid = this.refs.grid;
        this.msnry = new Masonry(grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    },

    componentDidUpdate: function (prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

    render: function () {
        var onNoteDelete = this.props.onNoteDelete;

        return (
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map(function (note) {
                        return (
                            <Note
                                key={note.id}
                                onDelete={onNoteDelete.bind(null, note)}
                                color={note.color}>
                                {note.text}
                            </Note>
                        );
                    })
                }
            </div>
        );
    }
});

var NotesApp = React.createClass({
    getInitialState: function () {
        return {
            notes: []
        };
    },

    componentDidMount: function () {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({notes: localNotes});
        }
    },

    componentDidUpdate: function () {
        this._updateLocalStorage();
    },

    handleNoteDelete: function (note) {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function (note) {
            return note.id !== noteId;
        });
        this.setState({notes: newNotes});
    },

    handleNoteAdd: function (newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes: newNotes});
    },

    render: function () {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>

            </div>
        );
    },

    _updateLocalStorage: function () {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
);

/*
 getDefaultProps - метод, який відповідає за значення параметрів за замовчуванням. Викликається один раз при ініціалізації класа.

 getInitialState - відповідає за початкове значення стану компонента.

 componentWillMount - визивається перед першим рендером компонента, в методі відбувається підготовка до рендерінга компонента.

 render -

 componentDidmount - в момент виклику компонент вже є в DOM (onchange, onclick, браузерні події)

 */

/*
 Методи при зміні стану

 shouldComponentUpdate
 |
 componentWillUpdate
 |
 render
 |
 componentDidUpdate

 */

/*

 Демонтаж компонента(unmount)

 componentWillUnmount - викликається перед видалення компонента з DOM(очищення подій, ссилок, clearInterval)
 */
