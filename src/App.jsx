import "@mantine/core/styles.css";
import Header from "./components/Header";

import Services from "./components/Services";
import { MantineProvider } from "@mantine/core";
function App() {
  return(
    <MantineProvider>

    <div>
      <Header/>
   
      <Services/>
    </div>
    </MantineProvider>
  )
}
export default App;
