import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={
        {
            fontSize: '2em'
        }
      }>About</h1>
      <p>Escreva abaixo as suas dúvidas:</p>
      <textarea style={
        {
            height:'30vh',
            width:'30vh',
            backgroundColor:'white',
            color:'black'
        }
      } name="" id=""></textarea>
    </div>
  );
};

export default About;
