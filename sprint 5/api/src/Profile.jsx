import React from 'react';

const Profile = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={
        {
            fontSize: '2em'
        }
      }>Conta</h1>
      <div>
        <p>Nome do Cliente:</p>
        <input type="text" />
      </div>
      <div>
        <p>Nome do Responsável:</p>
        <input type="text" />
      </div>
      <div>
        <p>E-mail do Responsável:</p>
        <input type="text" />
      </div>
      <div>
        <p>Telefone do Responsável:</p>
        <input type="text" />
      </div>
    </div>
  );
};

export default Profile;
