import Blog from "./components/Blog";
import Header from "./components/Header";
import "@mantine/core/styles.css";
import Footer from "./components/Footer";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
       <div>
          <Header />
        </div>
        <div>
          <Blog/>
        </div>

      
      <Footer/>
    </MantineProvider>
  );
}
export default App;
