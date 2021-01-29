import React from 'react';
import Comment from "../Comment/Comment";
import './CommentsList.css';

export default class CommentsList extends React.Component {
  render() {
    const comments = this.props.comments;
    return(
      <ul className='comments-list'>
        {comments.map(comment => 
          <Comment
            key={String(comment.id)}
            id={comment.id}
            author={comment.author}
            date={comment.date}
            text={comment.text}
            onCommentDeletion={this.props.onCommentDeletion}
          />
        )}
      </ul>
    );
  }
}