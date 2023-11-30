import { Image } from "@mantine/core";
function Footer(){
    return(
        <div className="bg-lime-500 flex space-x-40 justify-center pt-2 border-4 rounded-xl">
            <div className="ml-0">

            <Image src="logo.png" w={100}/>
            <p>Jamii Vizuri</p>
            <p>Your health is our priority!</p>
            </div>
            
            <div className="">
            <p className="font-bold">LOCATION</p>
            <p>Plot 26</p>
            <p>Ministers Village</p>
            <p>Ntinda, Kampala.</p>

            </div>

            <div className="">
                <h1 className="font-bold">CONTACTS</h1>
                <p>PHONE NO: 0703897243</p>
                <p>PHONE NO. 0774341314</p>
                <p>Email: njagala.raymond@gmail.com</p>
                <p className="pb-4">Email: jerine89@gmail.com</p>
            </div>
                <div className="flex gap-6 flex-col">
                <p className="font-bold">ON SOCIAL MEDIA</p>
                    <a href="https://twitter.com/Initial_Rhy" target="_blank" i className="fa-brands fa-x-twitter"></a>
                    
                    <a href="https://www.linkedin.com/in/raymond-njagala-9a6309a8/" target="_blank" i className="fa-brands fa-linkedin"></a>
                    
                    <a href="https://wa.me/256703897243" target="_blank" i className="fa-brands fa-whatsapp"></a>
                    




                </div>



        </div>
    )
}
export default Footer;


// <a href="https://www.linkedin.com/in/raymond-njagala-9a6309a8/" target="_blank" i class="fa-brands fa-linkedin fa-bounce" style="color: #26df66;"></i></a></li>
//             <br>  
//             <li>
//                 <a href="https://twitter.com/Initial_Rhy" target="_blank" i class="fa-brands fa-twitter fa-beat-fade" style="color: #24d917;"></a>
//             </li>
//             <br>
//             <li>
//                 <a href="https://wa.me/256703897243" target="_blank" i class="fa-brands fa-square-whatsapp fa-beat-fade" style="color: #7cee2f;"></a></i>
//             </li>