import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: {},
      authors: authors,
      filterAuthors: authors
    };
    this.selectAuthor = this.selectAuthor.bind(this);
    this.resetPage = this.resetPage.bind(this);
    this.filterAuthors = this.filterAuthors.bind(this);
  }
  selectAuthor(author) {
    this.setState({ currentAuthor: author });
  }

  viewPage() {
    if (this.state.currentAuthor.first_name) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          filterAuthors={this.filterAuthors}
          selectAuthor={this.selectAuthor}
          authors={this.state.filterAuthors}
        />
      );
    }
  }
  resetPage() {
    this.setState({ currentAuthor: {} });
  }
  filterAuthors(query = query.toLowerCase()) {
    // query = query.toLowerCase();
    const filteredAuthors = this.state.authors.filter(author =>
      `${author.first_name} ${author.last_name}`.toLowerCase().includes(query)
    );
    this.setState({ filterAuthors: filteredAuthors });
  }
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar reset={this.resetPage} />
          </div>
          <div className="content col-10">{this.viewPage()}</div>
        </div>
      </div>
    );
  }
}

export default App;
