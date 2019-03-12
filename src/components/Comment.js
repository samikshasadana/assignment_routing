import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Comment extends Component {
        state={
            comment: [ ]
        }
        componentDidMount(){
            console.log(this.props);
            let id = this.props.match.params.comment_id;
            axios.get('https://jsonplaceholder.typicode.com/comments/' + id).then(res =>{
             this.setState({
                 comment: res.data
             })
//                console.log(this.state);
            })
        }
    
    render() {
        const comment = this.state.comment ? (
            <div className='comment card'>
                <div className='center card-title'>{this.state.comment.name} </div>
                 {this.state.comment.id % 2===0 ? <img className="image1" src="https://cbsnews3.cbsistatic.com/hub/i/r/2010/12/03/79ed9c0e-a644-11e2-a3f0-029118418759/resize/620x465/94b66abc1317bbbd3581ad4f2c4bc7a7/365073.jpg" alt="oops! not found!" /> : <img className="image1" src="https://previews.123rf.com/images/komodopublishing/komodopublishing1209/komodopublishing120900016/15242100-whimsical-cute-cartoon-star-in-santa-hat.jpg" alt="oops! not found!" />}
                <ul className='center'>
                    <li>{this.state.comment.id}</li>
                    <li>{this.state.comment.email}</li>
                    <li>{this.state.comment.body}</li>
                   
                </ul>
                
            </div>
        ) : ( <p> Loading comments.........</p> )
             
        return(
            <div className='container'>
                {comment}
            </div>
        )
    }
}
export default Comment;