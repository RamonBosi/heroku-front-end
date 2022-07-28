import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import DeliveryInformation from '../Projects/DeliveryInformation';

export default function ProjectsRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/deliveryInformation/*' element = {<DeliveryInformation/>}/>
        <Route path = '*' element = {<h1 style={{color: 'rgba(255,255,255,1)'}}>Página não encontrada</h1>}/>
      </Routes>
    </BrowserRouter>
  );  
}