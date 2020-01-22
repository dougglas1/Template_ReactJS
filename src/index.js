// Necessário importar o React quando utilizar HTML no JavaScript (JSX)
import React from 'react';

// Permite comuniar o React com HTML (Árvore de Elementos)
import ReactDOM from 'react-dom';

import App from './App';

// Renderizar o conteúdo do App.js dentro do ID root do HTML
ReactDOM.render(<App />, document.getElementById('root'));
