import React, { Component } from "react";
import { withFetch } from "../hoc/withFetch";

class UserList extends Component {
  //   state = {
  //     isLoading: true,
  //     users: [],
  //     errorMessage: "",
  //   };
  //   componentDidMount() {
  //     fetch(`https://jsonplaceholder.typicode.com/users`)
  //       .then((res) =>
  //         res.json().then((data) => {
  //           this.setState({
  //             isLoading: false,
  //             users: data,
  //           });
  //         })
  //       )
  //       .catch((err) => {
  //         this.setState({
  //           isLoading: false,
  //           errorMessage: err.message,
  //         });
  //       });
  //   }
  render() {
    const { isLoading, data: users, errorMessage } = this.props;
    return (
      <div className="todos">
        <p>All UserList</p>;{isLoading && <div>Loading...</div>}
        {errorMessage && <div>{errorMessage}</div>}
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withFetch(
  "https://jsonplaceholder.typicode.com/users",
  [],
  UserList
);
