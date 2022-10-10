import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const URL = 'https://api.jokes.one/jod'

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        const joke = response.data.contents.jokes[0].joke;
        setTitle(joke.title);
        setText(joke.text);
      }).catch (error => {
        console.log(error)
        alert("Retvieving joke failed")
      })
  }, [])


  return (
    <div>
      <h3>Joke of the day</h3>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default App;
