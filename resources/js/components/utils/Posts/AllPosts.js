import React, { Component } from 'react'

export default class AllPosts extends Component {
    state = {
        posts: [],
        loading: true
    }
    componentDidMount = async () => {
        const res = await fetch('http://127.0.0.1:8000/back/posts');
        const data = await res.json();
        this.setState({
            posts: data,
            loading: false
        })
    }
    render() {
        const { posts, loading } = this.state
        return (
            loading ? <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
                :
                <div className="container">
                    <h1>Posts list</h1>
                    {posts && posts.map((item, i) => {
                        return (
                            <div className="card" key={i}>
                                <div className="card-header">
                                    _{item.title}
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{item.body}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

        )
    }
}
