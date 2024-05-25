import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import Beranda from "../pages/beranda/beranda";
import Makanan from "../pages/makanan/makanan";
import Dashboard from "../pages/admin/dashboard/dashboard";
import AddJajanan from "../pages/admin/addJajanan/AddJajanan";
import AddMakanan from "../pages/admin/addMakanan/AddMakanan";
import EditJajanan from "../pages/admin/editJajanan.jsx/EditJajanan";
import EditMakanan from "../pages/admin/editMakanan/EditMakanan";
import ListJajanan from "../pages/admin/listJajanan/ListJajanan";
import ListMakanan from "../pages/admin/listMakanan/ListMakanan";
import Jajanan from "../pages/jajanan/jajanan";
import DetailMakanan from "../pages/detailMakanan/detailMakanan";
import DetailJajanan from "../pages/detailJajanan/detailJajanan";
import AddAdmin from "../pages/admin/addAdmin/AddAdmin";

const AppRoutes = () =>
{

  return (
    <Router>
      <Routes>
        {/*** General Route ***/ }

        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Beranda /> } />
        <Route path="/makanan" element={ <Makanan /> } />
        <Route path="/jajanan" element={ <Jajanan /> } />
        <Route path="/detail/makanan/:id" element={ <DetailMakanan /> } />
        <Route path="/detail/jajanan/:id" element={ <DetailJajanan /> } />

        {/* Admin Route */ }
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/dashboard/addjajanan" element={ <AddJajanan/> } />
        <Route path="/dashboard/addmakanan" element={ <AddMakanan/> } />
        <Route path="/dashboard/editjajanan/:id" element={ <EditJajanan/> } />
        <Route path="/dashboard/editmakanan/:id" element={ <EditMakanan/> } />
        <Route path="/dashboard/listjajanan" element={ <ListJajanan/> } />
        <Route path="/dashboard/listmakanan" element={ <ListMakanan/> } />
        <Route path="/dashboard/addadmin" element={ <AddAdmin/> } />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
