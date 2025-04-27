import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        {this.props.bio && this.props.bio.length > 1 ? (
          <p>{this.props.bio}</p>
        ) : null}
      </div>
    );
  }
}

export default About;