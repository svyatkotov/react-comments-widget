import React from 'react';
import CommentsList from "../CommentsList/CommentsList";
import CommentInputForm from "../CommentInputForm/CommentInputForm";
import './Widget.css';

export default class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: window.localStorage.commentsWidget ? JSON.parse(window.localStorage.commentsWidget) : [],
      currentAuthor: '',
      currentText: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCommentDeletion = this.handleCommentDeletion.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const comments = this.state.comments;
    const date = new Date();
    comments.push({
      id: date.getTime(),
      author: this.state.currentAuthor,
      text: this.state.currentText,
      date: date.toLocaleString()
    });
    this.setState({
      comments,
      currentAuthor: '',
      currentText: ''
    });
    window.localStorage.commentsWidget = JSON.stringify(comments);
  }

  handleInputChange(event) {
    const target = event.target;
    if (target.name === 'author') {
      this.setState({
        currentAuthor: target.value
      });
    } else if (target.name === 'text') {
      this.setState({
        currentText: target.value
      });
    }
  }

  handleCommentDeletion(id) {
    const comments = this.state.comments;
    comments.forEach((comment, i) => {
      if (comment.id === id) {
        comments.splice(i, 1);
      }
    });
    this.setState({comments});
    window.localStorage.commentsWidget = JSON.stringify(comments);
  }

  render() {
    return(
      <div className='widget'>
        <CommentsList 
          comments={this.state.comments}
          onCommentDeletion={this.handleCommentDeletion}
        />
        <CommentInputForm 
          author={this.state.currentAuthor}
          text={this.state.currentText}
          onFormSubmit={this.handleFormSubmit}
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}