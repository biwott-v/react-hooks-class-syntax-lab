import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>
          {this.props.username} is a Web Developer from {this.props.city}
        </h1>
        {this.props.bio && <p>{this.props.bio}</p>}
      </div>
    );
  }
}

export default Home;