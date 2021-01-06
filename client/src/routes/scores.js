//displays scores
//Load from database, read into object array for the proper

//selects word bank and displays description also name entry

// need to map the scores out.
// Type needs to be scored in local storage, then cleared after the values have been downloaded
import React, { Component } from 'react';
import axios from 'axios';



class score extends Component {
    constructor(props) {
		super(props);
        let url = window.location.href
        let arr = url.split("/");
        let result = arr[0] + "//" + arr[2]
		this.state = {
            word : '',
            input : '',
            scores : [{name : "butt", score: 12345, words: 24}],
            bid : 0,
            bname : '',
            count : 0,
            bank : ['English', 'Spanish', 'Danish'],
            path: result
		}

	
    }

    componentDidMount() {
        console.log(this.state.path + "/api/");
        this.setState({bid : localStorage.getItem("bankID")})
        if(!localStorage.getItem("bankID")){
            this.setState({bname : "!Invalid Bank!"})
            //force user to return to the home page
            //this.props.history.push("/");

        }
        else{
            this.setState({bname : this.state.bank[localStorage.getItem("bankID")]})
            this.saveScore()
        }
        //localStorage.removeItem("bankID");     remove at a later point due to it making other parts of the script fail
    }
    
    saveScore(){
        const bid = localStorage.getItem("bankID");
        const name = localStorage.getItem("name");
        const score = localStorage.getItem("score");
        const words = localStorage.getItem("words");
        console.log("nametest: "+name);

        axios.get(this.state.path + '/api/score/count/' + bid)
            .then(res => {
                this.setState({ count: res.data})
                console.log(this.state.count)
            }).finally(() =>
            {
                if(this.state.count > 30){
                    this.getScores();
                    let s = this.state.scores;
                    console.log(s);
                    s.sort(function (a,b){
                        return a.value - b.value;
                    });

                    let breakcheck = false;

                    for(var i = 0; i <= 30; i++ ){
                        console.log(i)
                        console.log(s)
                        if (breakcheck === true){return;}

                        if(localStorage.getItem("bankID") > s[i].score){ //if player makes the high score.
                            breakcheck = true;
                            axios.put(this.state.path + '/api/score/' + s[s.length - 1]._id)
                                .then(()=>{
                                    let ns = {}
                                    ns.bid = bid;
                                    ns.score = score;
                                    ns.words = words;
                                    s.splice(s.length-1,1)//remove last value in high score board
                                    s.push(ns) //add the value to the index
                                    s.sort(function (a,b){ //resort
                                        return a.value - b.value;
                                    });
                                    this.setState({scores : s})
                                    axios.get(this.state.path + '/', {bid, name, score, words}) //add new score to database.
                                })

                        }
                    }

                    //get all scores with the current bankID
                    //Sort
                    //Get ID of value to replace
                    //Update @ ID
                } else {
                    //Simply add value
                    axios.post(this.state.path + '/api/score/', {bid, name, score, words})
                        .finally(()=>{
                            this.getScores()
                        }) 
                        

                }
            })
        /*
            Get All Scores
            If score count is greater than 30 (or whatever number), instead update the value where it fits
                Find a way to sort by score, then if possible store by updating where the ID should be swapped
            if not add score with name to the database.
        */

    }

    getScores(){
        //Pulls down all scores for the bank id.
        axios.get(this.state.path + '/api/score/board/' + this.state.bid)
            .then(res => {
                this.setState({scores : res.data})
            })
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
                    <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">Score</th>
                        <th scope="col">Words</th>
                    </tr>
                    </thead>
                    {
                        this.state.scores.map((data, index) => (
                        <tr> 
                            <th key={index}>{index+1}</th>   
                            <td>{data.name}</td>
                            <td>{data.score}</td>
                            <td>{data.words}</td>
                        </tr>
                            )
                        )

                    }
                    </table>
                </div>
                <div>
                    <button class="btn btn-primary w-100" onClick={() => this.onConfirm()}>Return</button>
                </div>
            </div>

        );
    }
}

export default score;
