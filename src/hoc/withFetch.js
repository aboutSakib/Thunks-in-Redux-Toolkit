import { Component } from "react";

export const withFetch = (url, initState, WrappedComponent) => {
  class WrapperComponent extends Component {
    state = {
      isLoading: true,
      posts: [],
      errorMessage: "",
    };

    componentDidMount() {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            isLoading: false,
            data: result,
            errorMessage: "",
          });
        })
        .catch((err) => {
          this.setState({
            isLoading: false,
            data: initState,
            errorMessage: err.message,
          });
        });
    }
    render() {
      return (
        <WrappedComponent
          isLoading={this.state.isLoading}
          data={this.state.data}
          errorMessage={this.state.errorMessage}
        />
      );
    }
  }
  return WrapperComponent;
};
