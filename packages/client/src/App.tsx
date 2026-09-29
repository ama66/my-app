// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

function App() {
  // const [count, setCount] = useState(0)
  const [message, setMessage] = useState('');

      useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className='p-4'>
      <p className="font-bold text-3xl">{message}</p>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
