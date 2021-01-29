import React from 'react';
import './Comment.css';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.handleCommentDeletion = this.handleCommentDeletion.bind(this);
  }

  handleCommentDeletion() {
    this.props.onCommentDeletion(this.props.id);
  }

  render() {
    return(
      <li className='comment'>
        <span className='comment__author'>{this.props.author}: </span>{this.props.text}
        <div className='comment__footer'>
          <span className='comment__date'>{this.props.date}</span>
          <span className='comment__delete' onClick={this.handleCommentDeletion}>x</span>
        </div>
      </li>
    );
  }
}