import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './assets/Components/Header.tsx';
import Info from './assets/Components/Info.tsx';
import serviciesJudiciales from './assets/Components/ServiciosJudiciales.tsx';
import './index.css';
import ServiciosJudiciales from './assets/Components/ServiciosJudiciales.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Info />
    <ServiciosJudiciales />
  </StrictMode>
);
