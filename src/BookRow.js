import React, { Component } from "react";

class BookRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.bookProp.title}</td>
        <td>
          {this.props.author.first_name} {this.props.author.last_name}
        </td>
        <td>
          <button
            className="btn"
            style={{ backgroundColor: this.props.bookProp.color }}
          />
        </td>
      </tr>
    );
  }
}

export default BookRow;
