import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({posts: data}))
            .catch(error => console.error(`Error: ${error}`));
    }

    render() {

        const postItem = this.state.posts.map(post => (
            <>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            <hr/>
            </>
        ));

        return (
            <div>
                <h1>Posts</h1>
                { postItem }
            </div>
        )
    }
}

export default Posts;