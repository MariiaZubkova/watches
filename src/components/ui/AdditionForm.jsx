import React, { useState } from 'react';
import axios from 'axios';

export default function PostForm({ setRes }) {
  const [imput, setImput] = useState({ title: '', type: '', img: '' });

  const changeHandler = (e) => (setImput((pref) => ({ ...pref, [e.target.name]: e.target.value })));

  const submiitHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/api', imput);
      setRes((pref) => [data, ...pref]);
      setImput({ title: '', type: '', img: '' });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={submiitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Модель часов
          <div id="emailHelp" className="form-text" />
          <input type="text" name="type" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changeHandler} />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Описание
          <div id="emailHelp" className="form-text" />
          <input type="text" name="title" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changeHandler} />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Фото
          <div id="emailHelp" className="form-text" />
          <input type="text" name="img" id="exampleInputPassword1" onChange={changeHandler} />
        </label>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={changeHandler} />
        <label className="form-check-label" htmlFor="exampleCheck1">Запомнить</label>
      </div>
      <button type="submit" className="btn btn-primary">Отправить</button>
    </form>
  );
}
