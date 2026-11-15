import React from 'react'
import {io} from 'socket.io-client'

const App = () => {
const socket = io('http://localhost:3000')

useEffect(() => {

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
}, [])
  return (
    <div>App</div>
  )
}

export default App
