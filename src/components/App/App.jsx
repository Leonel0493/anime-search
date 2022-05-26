import React from 'react'
import Container from '../Container/Container';
import Header from '../header/Header'

const App = () => {
  return (
    <div id='main-container' className='w-screen bg-gray-200'>
      <Header />
      <Container />
    </div>
  );
}

export default App;
