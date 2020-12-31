import React, { Component } from 'react';

//the game game
/*
Needs parser
Needs to display word
needs timer
needs score
Score is equal to length of word.
Ideally the game should mark which parts of the words/sentence are wrong.

*/


//selects word bank and displays description also name entry


class game extends Component {
    constructor(props) {
		super(props);

		this.state = {
            name : '',
            desc : '',
            curWord : 'temp',
            input : '',
            wordBank: [],
            score : 0,
            seconds : 10,
            bank : 0
		}
    
        this.onChange = this.onChange.bind(this);
        this.countDown = this.countDown.bind(this);
    
	
    }

    componentDidMount() {
        this.timer = setInterval(this.countDown, 1000);
    }
    
    countDown() {
        // Remove one second, set state so a re-render happens.
        let s = this.state.seconds - 1;
        this.setState({seconds : s})
        
        // Check if we're at zero.
        if (this.state.seconds == 0) { 
          clearInterval(this.timer);
            this.props.history.push("/scores")

        }
      }


    onChange(event) {
		const state = this.state
		state[event.target.name] = event.target.value;
        this.setState(state);
        
        //compare check if length are the same.
    }

render() {
        return (
            <div className="container p-2 rounded bg-light">
                <div className="row">
                    <div className="col-6">
                        <h3>Score: {this.state.score}</h3>
                    </div>
                    <div className="col-6">
                        <h3 className="text-right">Time: {this.state.seconds}</h3>
                    </div>
				</div>
                <div className="text-center mb-4">
                    <h1>{this.state.curWord}</h1>
                </div>
                <div>
                    <input type="text" name="name" value={this.state.input} onChange={this.onChange} className="form-control" />
                </div>
            </div>

        );
    }
}

export default game;
