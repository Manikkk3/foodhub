import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Menu from "./pages/Menu";
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App(){

  return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="Menu" element={<Menu />} />
              <Route path="About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Route> 
          </Routes>
        </BrowserRouter> 
  )
}