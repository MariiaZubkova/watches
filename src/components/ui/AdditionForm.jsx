import React, { useState } from 'react';
import axios from 'axios';

export default function PostForm({setRes}) {

  const [imput, setImput] = useState({title: '', type: '', img: '' })

  const changeHandler = (e) => (setImput((pref) => ({...pref, [e.target.name]: e.target.value})))

  const submiitHandler = async (event) => {
    event.preventDefault()
    try {
      const {data} = await axios.post('/api', imput)
      setRes((pref) => [data, ...pref])
      setImput({title: '', type: '', img: '' })
      
    } catch (err) {
      console.log(err);
    }
  }

  return (
<form onSubmit={submiitHandler}>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Модель часов</label>
    <div id="emailHelp" class="form-text"></div>
    <input type="text" name="type" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changeHandler}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Описание</label>
    <div id="emailHelp" class="form-text"></div>
    <input  type="text" name="title" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changeHandler}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Фото</label>
    <div id="emailHelp" class="form-text"></div>
    <input type="text" name="img" id="exampleInputPassword1" onChange={changeHandler}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={changeHandler}/>
    <label class="form-check-label" for="exampleCheck1">Запомнить</label>
  </div>
  <button type="submit" class="btn btn-primary" >Отправить</button>
</form>
);
}