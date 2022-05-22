import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Purchase from "./pages/Purchase";



function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route pathname='/' element={<Home></Home>}></Route>
          <Route pathname='/home' element={<Home></Home>}></Route>
          <Route pathname='/purchase' element={<Purchase></Purchase>}></Route>
          <Route pathname='/about' element={<About></About>}></Route>
          <Route pathname='/blog' element={<Blog></Blog>}></Route>
          <Route pathname='/contact' element={<Contact></Contact>}></Route>
          <Route pathname='/login' element={<Login></Login>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
