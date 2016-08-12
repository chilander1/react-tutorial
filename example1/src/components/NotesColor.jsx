var React = require('react');
// require('./NoteColor.css');

var NoteColor = React.createClass({
    childContextTypes:{
        color: React.PropTypes.string
    },
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

        // this.props.callbackParent(newState);
    },
    getChildContext(){
        // console.log(this.state.selectedOption);
        return {
            color: this.state.selectedOption
        }
    },
  /*  componentDidUpdate: function (pr) {
        console.log(this.state.selectedOption);


    },*/
    render: function (i, props) {
        return (
            <div className="colorB">
                <input type="radio" value="red"
                       checked={this.state.selectedOption === 'red'} onChange={this.handleOptionChange}/>
                <input type="radio" value="blue"
                       checked={this.state.selectedOption === 'blue'} onChange={this.handleOptionChange}/>
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