
import Contacts from "./components/Contacts";
import Blog from "./components/Blog";
import Header from "./components/Header";
import "@mantine/core/styles.css";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Home from "./components/Home";
import { MantineProvider } from "@mantine/core";

function App() {
  return(
    <MantineProvider>
    <div>
      <Header/>
      <Blog />
      <Home />
      <Services/>
      <Contacts />
      <Footer />
    </div>
    </MantineProvider>

  )
}

export default App;
