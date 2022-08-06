import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import DeliveryInformation from '../Projects/DeliveryInformation';
import { useContext } from 'react';
import { RepositoryContext } from './RepositoryContext';

export default function ProjectsRoutes() {

  const { repository, repoDeliveryInformation } = useContext(RepositoryContext)

  return (
      <BrowserRouter>
        <Routes>
          <Route 
            path = {`${repository}`} 
            element = {<Home/>}/>
          <Route 
            path = {`${repoDeliveryInformation}/*`} 
            element = {<DeliveryInformation/>}/>
          <Route path = '*' element = {<h1 style={{color: 'rgba(255,255,255,1)'}}>Página não encontrada</h1>}/>
        </Routes>
      </BrowserRouter>
  );  
}