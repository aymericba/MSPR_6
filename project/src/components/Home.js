import React from 'react';

const Home = ({ onLogin, onRegister }) => {
  return (
    <div>
      <h1>Bienvenue sur A'rosa-je</h1>
      <p>Connectez-vous ou inscrivez-vous pour prendre soin de vos plantes!</p>
      <button onClick={onLogin}>Se connecter</button>
      <br />
      <button onClick={onRegister}>S'inscrire</button>
    </div>
  );
};

export default Home;
