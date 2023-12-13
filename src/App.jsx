import Contacts from "./components/Contacts";
import Blog from "./components/Blog";
import Header from "./components/Header";
import "@mantine/core/styles.css";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Home from "./components/Home";
import SignUp from "./components/Sign";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom"; import RequestAppointment from "./components/RequestAppointment";
import Register from "./components/Register";
import Volunteer from "./components/Volunteer";
import Sexual from "./components/sexual";
import Drug from "./components/Drug";
import Mental from "./components/Mental";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/requestappointment" element={<RequestAppointment />} />

        <Route path="/register" element={<Register/>} />
        <Route path="/sexual" element={<Sexual/>} />

        <Route path="/drug" element={<Drug/>} />
        <Route path="/mental" element={<Mental/>} />




      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


















