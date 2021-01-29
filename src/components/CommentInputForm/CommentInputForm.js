import React from 'react';
import './CommentInputForm.css';

export default class CommentInputForm extends React.Component {
  render() {
    return(
      <form className='form' onSubmit={this.props.onFormSubmit}>
        <input 
          type='text'
          name='author'
          value={this.props.author}
          onChange={this.props.onInputChange}
          placeholder='Имя'
          className='form__input'
        />
        <textarea 
          type='text'
          name='text'
          value={this.props.text}
          onChange={this.props.onInputChange}
          placeholder='Комментарий'
          className='form__input'
        />
        <input 
          type='submit'
          value='Отправить'
          className='form__submit'
        />
      </form>
    );
  }
}