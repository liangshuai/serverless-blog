import React from 'react';
import useForm from "./useForm";
import axios from 'axios'

const Form = () => {
  const { values, handleChange, handleSubmit } = useForm(login);

    async function login() {
    await axios.post('/.netlify/functions/addPost', JSON.stringify({
        title: values.title,
        author: values.author,
        tag: values.tag.split(','),
        content: values.content
    }))
    window.history.back()
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input className="input" type="text" name="title" onChange={handleChange} value={values.title} required />
                </div>
              </div>
              <div className="field">
                <label className="label">Author</label>
                <div className="control">
                  <input className="input" type="text" name="author" onChange={handleChange} value={values.author} required />
                </div>
              </div>
              <div className="field">
                <label className="label">Tag</label>
                <div className="control">
                  <input className="input" type="text" name="tag" onChange={handleChange} value={values.tag} required />
                </div>
              </div>
              <div className="field">
                <label className="label">Content</label>
                <div className="control">
                  <textarea className="textarea" name="content" onChange={handleChange} value={values.content} required />
                </div>
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Publish</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
