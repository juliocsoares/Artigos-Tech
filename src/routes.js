import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/menu"
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./paginas/Post";
import NaoEncontrada from "./paginas/NaoEncontrada";
import Artigos from "./paginas/Artigos";
import ScrollToTop from './componentes/ScrollToTop/ScrollToTop';

function AppRoutes() {
  return (
    
    <BrowserRouter>
      <Menu />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
        </Route>
        <Route path="sobremim" element={<SobreMim />} />
        <Route path="artigos" element={<Artigos />} />
        <Route path='post/:id' element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />

      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
