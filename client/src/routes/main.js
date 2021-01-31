//selects word bank and displays description also name entry
import React, { Component } from 'react';
import banks from "../files/banks.json"



class main extends Component {
    constructor(props) {
		super(props);

		this.state = {
            name : '',
            desc : banks.desc,
            bank : ['English', 'Spanish', 'Danish'],
            bankDesc : [banks.engDesc, banks.espDesc, banks.danDesc],
            bdesc: '',
            bname: '',
            index: 0
        }
        
        this.onChange = this.onChange.bind(this);

	
    }

    componentDidMount() {
        this.doesNameExist();
        this.setState({bname : this.state.bank[0]})
        this.setState({bdesc : this.state.bankDesc[this.state.index]})
       

        
	}

    doesNameExist() {
		if (localStorage.getItem("name") !== "" || localStorage.getItem("name") !== null) { 
			this.setState({name: localStorage.getItem("name")}) 
		}
	}


    onChange(event) {
		const state = this.state
		state[event.target.name] = event.target.value;
		this.setState(state);
    }

    changeIndex(val){
        if(this.state.index === 0 && val < 0){  //zero and value is being lower. Reset index to highest value
            this.setState({index : this.state.bank.length - 1}, () => {//Arrow function will wait until the state is set to proceed with the other actions.
                this.setState({bname : this.state.bank[this.state.index]})
                this.setState({bdesc : this.state.bankDesc[this.state.index]})
            })
        } else if(this.state.index === this.state.bank.length -1 && val > 0){ //if index value is at max, reset index to 0
            this.setState({index : 0}, () => {
                this.setState({bname : this.state.bank[this.state.index]})
                this.setState({bdesc : this.state.bankDesc[this.state.index]})
            })
        } else{
            this.setState({index : this.state.index + val}, () => { //otherwise add value to the index
                this.setState({bname : this.state.bank[this.state.index]})
                this.setState({bdesc : this.state.bankDesc[this.state.index]})
            })
        }
    }
    
    onConfirm() {

        if(this.state.name === ""){
            return;
        }
		localStorage.setItem("name", this.state.name);
        localStorage.setItem("bankID", this.state.index);
        this.props.history.push("/game");

    }


render() {
        return (
            <div className="container p-2 rounded shadow bg-light">
                <div className="row">
                    <div className="col mb-3">
				    	<input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.onChange} className="form-control" />
                    </div>
				</div>
                <div className="row col mb-3 m-0 p-0">

                    <div className="col-1 p-0">
                        <button className="btn btn-lg btn-primary btn-block" onClick={() => this.changeIndex(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </button>
                    </div>

                    <div className="col-10 text-center">
                        <h1>{this.state.bname}</h1>
                    </div>

                    <div className="col-1 p-0">
                       <button className="btn btn-lg btn-primary btn-block float-right" onClick={() => this.changeIndex(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="text-center">
                    <p>{this.state.bdesc}</p>
                    <hr />
                    <p>{this.state.desc}</p>
                </div>
                <button class="btn btn-primary w-100" onClick={() => this.onConfirm()}> Submit</button>
            </div>

        );
    }
}

export default main;