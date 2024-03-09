import React, { Component } from "react";
import { withFetch } from "../hoc/withFetch";

class PostList extends Component {
  // state = {
  //   isLoading: true,
  //   posts: [],
  //   errorMessage: "",
  // };

  // componentDidMount() {
  //   fetch(`http://jsonplaceholder.typicode.com/posts?_limit=10`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({
  //         isLoading: false,
  //         posts: data,
  //         errorMessage: "",
  //       });
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         isLoading: false,
  //         errorMessage: err.message,
  //       });
  //     });
  // }

  render() {
    const { isLoading, data: posts, errorMessage } = this.props;
    return (
      <div className="todos">
        <h1>All Posts</h1>
        {isLoading && <div>Loading...</div>}
        {errorMessage && <div>{errorMessage}</div>}
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>
              <span>{post.title}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default withFetch(
  `http://jsonplaceholder.typicode.com/posts?_limit=10`,
  [],
  PostList
);
