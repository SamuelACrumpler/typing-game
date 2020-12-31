//selects word bank and displays description also name entry
import React, { Component } from 'react';
import usa from '../files/usa.txt';


class main extends Component {
    constructor(props) {
		super(props);

		this.state = {
            name : '',
            desc : '',
            bank : ['English', 'Spanish', 'Danish'],
            bname: '',
            index: 0
        }
        
        this.onChange = this.onChange.bind(this);

	
    }

    componentDidMount() {
        this.doesNameExist();
        console.log(this.state.bank)
        console.log(this.state.bank[0])
        this.setState({bname : this.state.bank[0]})

        console.log(usa);
        let text = '';
        //Get banks and their description from the database
        fetch(usa)
            .then(r => r.text())
            .then(text => {
                console.log('text decoded:', text.length);
            });
        
	}

    doesNameExist() {
		if (localStorage.getItem("name") !== "") { 
			this.setState({name: localStorage.getItem("name")}) 
		}
	}


    onChange(event) {
		const state = this.state
		state[event.target.name] = event.target.value;
		this.setState(state);
    }

    changeIndex(val){
        //Check if index is at zero, if so, set index to length -1
        //IF index is at length -1, set to zero
        //Else add the value to index
        if(this.state.index === 0 && val < 0){
            this.setState({index : this.state.bank.length - 1})
        } else if(this.state.index === this.state.bank.length -1 && val > 0){
            this.setState({index : 0})
        } else{
            this.setState({index : this.state.index + val})
        }
        console.log(this.state.index)
        this.setState({bname : this.state.bank[this.state.index]})
    }
    
    onConfirm() {

        if(this.state.name === ""){
            return;
        }
		localStorage.setItem("name", this.state.name);
        localStorage.setItem("bankID", this.state.bank);
        this.props.history.push("/game");

    }


render() {
        return (
            <div className="container p-2 rounded bg-light">
                <div className="row">
                    <div className="col mb-3">
				    	<input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.onChange} className="form-control" />

                    </div>
				</div>
                <div className="row col mb-3">

                    <div className="col-1 p-0">
                        <button className="btn btn-lg btn-primary btn-block" onClick={() => this.changeIndex(-1)}>Prv</button>
                    </div>

                    <div className="col-10 text-center">
                        <h1>{this.state.bname}</h1>
                    </div>

                    <div className="col-1 p-0">
                       <button className="btn btn-lg btn-primary btn-block float-right" onClick={() => this.changeIndex(1)}>Nxt</button>
                    </div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <button class="btn btn-primary w-100" onClick={() => this.onConfirm()}> Submit</button>
            </div>

        );
    }
}

export default main;