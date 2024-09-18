import React from 'react';
import UserProfile from './UserProfile';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', margin: '0rem 20rem 20rem 20rem'}}>
      <h1>Componente para perfil de usuário</h1>
      <UserProfile
        name="Fabio"
        email="Fabio@fabio.com"
        bio="Oi, eu sou o Futuro TI expert"
      />
    </div>
  );
}

export default App;