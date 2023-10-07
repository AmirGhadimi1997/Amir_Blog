import Navbar from "../../components/navbar/Navbar"
import style from "./NotFound.module.css"
import Pic from "./../../assets/images/404 Page.png"


function NotFound(){

     return(

        <>

       <Navbar title="امیر بلاگ" />

       <div className={style.NotFound}>

        <img src= {Pic} />

       </div>

       </>

     )


}

export default NotFound

