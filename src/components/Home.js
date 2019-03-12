import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
    state ={
        comments: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then( res => {
            //console.log('Response from API',res);
            this.setState({
                comments: res.data.slice(0, 10)
            })
            //console.log('Our home state',this.state.posts);
        })
    }
    
    render() {
        const { comments } = this.state;
        const commentList = comments.length ? (
            comments.map(comment => {
                return (
                    <div className='comment card '  key={comment.id}>
                        
                        <div className='card-content c'>
                            <Link to = {'/' + comment.id} >
                                <span className='card-title'>{comment.name}</span>
                            </Link>
                            {comment.id % 2===0 ? <img className="image1" src="https://cbsnews3.cbsistatic.com/hub/i/r/2010/12/03/79ed9c0e-a644-11e2-a3f0-029118418759/resize/620x465/94b66abc1317bbbd3581ad4f2c4bc7a7/365073.jpg" alt="oops! not found!" /> : <img className="image1" src="https://previews.123rf.com/images/komodopublishing/komodopublishing1209/komodopublishing120900016/15242100-whimsical-cute-cartoon-star-in-santa-hat.jpg" alt="oops! not found!" />}
                            <ul>
                                <li>{comment.id}</li>
                                <li>{comment.email}</li>
                                <li>{comment.body}</li>
                            </ul>
                        </div>
                    </div>
                )
            })
        ) : (
            <p className='center'> No comments yet </p>
        )
        
        return(
            <div className='center abc'>
                <br />    
                <h4 className='container'>Homepage</h4><br />
                { commentList }
            </div>
        )
    }
}

export default Home;

