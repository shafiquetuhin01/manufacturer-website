import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AddReview from "./pages/Dashboard/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/Login/SignUp";
import MyPortfolio from "./pages/MyPortfolio";
import NotFound from "./pages/NotFound";
import Purchase from "./pages/Purchase";
import Tools from "./pages/Tools";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="purchase/:purchaseId"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }>
             <Route index element={<MyProfile />} /> 
             <Route path="orders" element={<MyOrders />} />
             <Route path="review" element={<AddReview />} />
            </Route>
         
          <Route path="purchase" element={<Tools />} />
          <Route path="portfolio" element={<MyPortfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
