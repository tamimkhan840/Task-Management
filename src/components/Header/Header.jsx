import { MdOutlineLightMode } from "react-icons/md";
import Container from "../Container";
import { useEffect, useState } from "react";
import logo from "../images/logo-02.png"

function Header() {

    let [theme ,setTheme] = useState(localStorage.getItem('themeMode') || 'light');

    useEffect(() =>{
          if (theme == 'dark') {
            document.documentElement.classList.add('dark')
          }else{
            document.documentElement.classList.remove('dark')

          }

          localStorage.setItem('themeMode', theme);


    },[theme])

    const themeHandler = () => {
      setTheme((prevTheme) => (prevTheme == 'light' ? 'dark' : 'light'))
    }

  return (
    <div className="py-3 border-b dark:border-b-[#666]">
       <Container className="flex justify-between items-center">
        <img className="w-[10%]" src={logo} alt="" />
            {/* <h1 className="text-5xl text-red-500 dark:text-yellow-300">KHAN</h1> */}
            <MdOutlineLightMode onClick={themeHandler} className={`text-2xl cursor-pointer dark:text-white ${theme == 'dark' && 'text-white'}`} />
       </Container>

    </div>
  )
}

export default Header
