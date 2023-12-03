import Home from "./components/Home";
import Header from "./components/Header";
import "@mantine/core/styles.css";
import Footer from "./components/Footer";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <div>
        <Header />

        <Home />
      <Footer />
      </div>
    </MantineProvider>
  );
}
export default App;
