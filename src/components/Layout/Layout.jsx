

// import { useState } from "react";
import Banar from "../Banar/Banar"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Task from "../Tasks/Task"
// import ModalPopup from "../Mudal/MudalPopup";


function Layout() {
  // let [openModal, setOpenModal] = useState(false);


  return (

    <div>

        <Header />
        <Banar />
        <Task  /> {/* onOpen={()=> setOpenModal(true)} */}
        <Footer />

        {/* {openModal && <ModalPopup onOpenModal={openModal} closeOpenMudal={()=> setOpenModal(false)} />} */}

    </div>




  )
}

export default Layout
