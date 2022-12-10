import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/navbar";
import Explore from "./pages/explore";
import ForgotPassword from "./pages/forgotPassword";
import Offer from "./pages/offer";
import Profile from "./pages/profile";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import PrivateRoute from "./components/privateRoute";
import Category from "./pages/category";
import CreateListing from "./pages/createListings";
import Listing from "./pages/listing";
import Contact from "./pages/contactLandlord";
import EditListing from "./pages/editListing";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />}></Route>
          <Route path="/offers" element={<Offer />}></Route>
          <Route path="/category/:categoryName" element={<Category />} />
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
          <Route path="/contact/:landlordId" element={<Contact />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route
            path="/edit-listing/:listingId"
            element={<EditListing />}
          ></Route>
          <Route path="/create-listing" element={<CreateListing />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        </Routes>
        <NavBar></NavBar>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
