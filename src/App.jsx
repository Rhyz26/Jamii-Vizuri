import Home from "./components/Home";
import Header from "./components/Header";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
       <div>
          <Header />
        </div>

        <h1 className="text-6xl">Welcome to Jamii Vizuri Community Health Services </h1>

      <div className="flex justify-center gap-8 pb-8 pt-4">
        <Image src="https://images.pexels.com/photos/159935/pexels-photo-159935.jpeg?auto=compress&cs=tinysrgb&w=800" w={500}/>
        <Image src="https://news.mit.edu/sites/default/files/images/202304/Uganda-Vaccination-Campaign-cover.jpg" w={500}/>
      </div>


<div className="flex justify-center space-x-16 pb-4">

      <div className="flex flex-col w-60 bg-lime-700 rounded-2xl">
        <Image src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_1280.png"w={100}/>
        <h1 className="text-lg font-bold flex-wrap">I am i Eligible</h1>
        <p>I would love to become a patient</p>
      </div>

      <div className="flex flex-col bg-yellow-300 w-60 rounded-2xl">
        <Image src="https://cdn.pixabay.com/photo/2020/10/20/19/12/elderly-5671352_1280.png" w={100}/>
        <h1 className="font-bold text-lg">Volunteer</h1>
        <p>I would love to get involved</p>
      </div>

      <div className="flex flex-col bg-fuchsia-800 w-60 rounded-2xl">
        <Image src="https://mymbchc.org/wp-content/uploads/2021/02/banner-image-1-1-1.png" w={100}/>
        <h1 className="text-lg font-bold">Patient Resources</h1>
        <p>I am looking for health Information</p>
      </div>
</div>


      <div>
       
        <Home />
      </div>
    </MantineProvider>
  );
}
export default App;
