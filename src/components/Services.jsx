function Services() {
  return (
    // h-screen w-screen
    
    <div className="bg-green-800  bg-sky-600 ">
      <div className="flex justify-center gap-4 pt-1.5 pb-5 py-5">
        <p>
          At Jamii Vizuri Community Health, We provide the same high-quality
          health care as the area’s leading hospitals and medical centers –
          because our volunteers come from the same settings. Patients can
          expect to develop an ongoing relationship with their medical workers
          as we work to ensure they have the support and information needed to
          get healthy and stay healthy.
        </p>
        <img
          src="https://media.istockphoto.com/id/1365436734/photo/group-of-business-persons-talking-in-the-office.jpg?s=612x612&w=0&k=20&c=HMfrS47_CcQK8UTUegQNKlzmoenMLTPdm17uuJoNUw4="
          width="800px"
          alt="ladies helping out"
        ></img>
      </div>

      <h1 className="text-center text-3xl pb-3.5">SERVICES</h1>

      <div className="text-center">
        <h1>JAMII VIZURI SERVICES </h1>
        <br></br>

        <div className="flex gap-8 justify-center">
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex gap-4">
              <img
                src="https://images.prismic.io/medallia/71cab8bd-2b73-4049-8058-79018a994b1e_Icon-1.png?auto=compress,format"
                width="150px"
              ></img>
              <p> Primary care </p>
            </div>

            <div className="flex gap-4">
              <img
                src="https://images.pexels.com/photos/1722196/pexels-photo-1722196.jpeg?auto=compress&cs=tinysrgb&w=800"
                width="150px"
              />
              <p> Sexual and Reproductive Health Services</p>
            </div>
            <div className="flex gap-4">
              <img
                src="https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=800"
                width="150px"
              ></img>
              <p> Medication </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 ">
            <div className="flex gap-4 pt-9">
              <img
                src="https://images.pexels.com/photos/7667731/pexels-photo-7667731.jpeg?auto=compress&cs=tinysrgb&w=800"
                width="150px"
              />
              <p className=""> Drug Abuse and Awareness </p>
            </div>

          <div className="flex gap-4">
            <img
              src="https://images.pexels.com/photos/2471301/pexels-photo-2471301.jpeg?auto=compress&cs=tinysrgb&w=800"
              width="150px"
              />
            <p> Mental Health Services </p>
          
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
