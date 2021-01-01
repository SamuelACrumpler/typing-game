//displays scores
//Load from database, read into object array for the proper

//selects word bank and displays description also name entry

// need to map the scores out.
// Type needs to be scored in local storage, then cleared after the values have been downloaded
import React, { Component } from 'react';


class score extends Component {
    constructor(props) {
		super(props);

		this.state = {
            word : '',
            input : '',
            scores : [],
            bname : '',
            bank : ['English', 'Spanish', 'Danish']
		}

	
    }

    componentDidMount() {
        if(!localStorage.getItem("bankID")){
            this.setState({bname : "!Invalid Bank!"})
        }
        else{
            this.setState({bname : this.state.bank[localStorage.getItem("bankId")]})
        }
        localStorage.removeItem("bankID");       
	}

    onConfirm() {


        this.props.history.push("/");

    }


render() {
        return (
            <div className="container p-2 rounded bg-light">
                <div className="text-center">
                    <h3>Top Scores For {this.state.bname}</h3>
				</div>
                <div className="">
                    <h2>Table Goes Here</h2>
                </div>
                <div>
                    <button class="btn btn-primary w-100" onClick={() => this.onConfirm()}>Return</button>
                </div>
            </div>

        );
    }
}

export default score;
