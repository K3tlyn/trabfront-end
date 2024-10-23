import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <>
      <h1>C&P</h1>
      <Header
        texto="creamy"
        imagem="https://images.tcdn.com.br/img/img_prod/465124/kit_creamy_skincare_emulsao_de_limpeza_protetor_solar_fps_60_tranexamico_3_produtos_33471_1_52068eb16da603b800eb3a1758f4a9ed.jpg"
        preco="R$199,90"
      />

      <Header
        texto="serúm e esponja"
        imagem="https://revistaanamaria.com.br/media/_versions/legacy/2020/07/31/confira-itens-para-usar-antes-da-maquiagem-1256448_widelg.jpg"
        preco="R$50,00"
      />

      <Header
        texto="hidratante"
        imagem="https://www.rbsdirect.com.br/imagesrc/25455892.jpg?w=300"
        preco="R$35,90"
      />
    </>
  );
}

export default App;
