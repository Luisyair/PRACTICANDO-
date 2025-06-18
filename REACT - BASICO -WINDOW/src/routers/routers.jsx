// Para  que funcione el enrutador 
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { UseEffectPage } from "../pages/UseEffectPage";
import { ImagenesPage } from "../pages/ImagenesPage";



export const MyRoutes = () => (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/UseEffectPage" element={<UseEffectPage />} />

      <Route path="/ImagenesPage" element={<ImagenesPage/>} />


      <Route path="/Page404" element={<Page404 />} />

    </Routes>
  </BrowserRouter>



)

