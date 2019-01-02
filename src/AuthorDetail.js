import React, { Component } from "react";
import BookRow from "./BookRow";

class AuthorDetail extends Component {
  render() {
    const author = this.props.author;
    const bookRows = author.books.map(book => (
      <BookRow bookProp={book} author={author} />
    ));
    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {author.first_name} {author.last_name}
          </h3>
          <img src={author.imageUrl} className="img-thumbnail" />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{bookRows}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
