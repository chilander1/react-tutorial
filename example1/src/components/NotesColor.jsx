var React = require('react');
// require('./NoteColor.css');

var NoteColor = React.createClass({
    getInitialState: function () {
        return {
            selectedOption: '#FF8A80'
        };
    },
    handleOptionChange: function (changeEvent) {
        var newState = changeEvent.target.value;
        this.setState({
            selectedOption: newState,
        });
        this.props.callbackParent(newState);
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

module.exports = NoteColor;