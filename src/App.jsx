import React, { useState } from 'react';
import CardProduto from './componentes/CardProduto';

// função do componente Card

function App() {
  const [adicionado, setAdicionado] = useState(false);

  const handleAdicionar = () => {
    setAdicionado(!adicionado);
  };

  // div de centralização do Card
  return (
    <div style= {{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
     }}>
      <CardProduto
      nome="Camisa Juras que Park?"
      preco={89.90}
      adicionado={adicionado}
      onClick={handleAdicionar}
      />
    </div>
  );
};

export default App;