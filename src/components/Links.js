import React from "react";

class Links extends React.Component {
  render() {
    return (
      <div>
        <h3>Links</h3>
        {this.props.github && (
          <p>
            <a href={this.props.github} target="_blank" rel="noopener noreferrer">
              {this.props.github}
            </a>
          </p>
        )}
        {this.props.linkedin && (
          <p>
            <a href={this.props.linkedin} target="_blank" rel="noopener noreferrer">
              {this.props.linkedin}
            </a>
          </p>
        )}
      </div>
    );
  }
}

export default Links;