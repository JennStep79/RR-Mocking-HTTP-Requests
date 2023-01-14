import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [gitHubName, setGitHubName] = useState('')
  const [gitHubUrl, setGitHubUrl] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/JennStep79')
    .then(res => res.json())
    .then(data => {
        setGitHubName(data.type)
        setGitHubUrl(data.html_url)
    })
}, [])
  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{gitHubName}</h2>
      <a href={gitHubUrl}>Go to Profile</a>
    </div>
  );
}

export default App;
