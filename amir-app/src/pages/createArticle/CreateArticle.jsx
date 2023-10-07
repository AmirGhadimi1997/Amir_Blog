import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./CreateArticle.module.css"
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
import axios from "axios";



function CreateArticle(){

    const [article , setArticle] = useState ({
        title: "",
        date: "",
        readingTime: "",
        athor: "",
        massage: "",
        imageUrl: "",
    });

    const handelChangeArticle = (e) => {
     
      setArticle((preveState) => ({
        ...preveState,
        [e.target.name] : e.target.value,
      }));

    };


    const handelChangeArticleMassage = (e) => {
        setArticle((preveState) => ({
            ...preveState,
            massage : e.target.value,
          }));
    }


    const handelCreateNewArticle = () => {
       axios.post("http://localhost:8000/articles" , {
        id: 9,
        imageUrl: article.imageUrl,
        title: article.title,
        readingTime: article.readingTime,
        date: article.date,
        athor: article.athor,
        content: article.massage,
       })
    }

    return (

       <>
       
       <Navbar title="امیر بلاگ" />
       <div className={styled.CreateArticlePage}>
       <div className="container">
       <h1>ساخت مقاله</h1>



      <Input label="عنوان" name="title" handelChange={handelChangeArticle}/>
      <Input label="تاریخ" name="date" handelChange={handelChangeArticle}/>
      <Input label="مدت زمان خواندن" name="readingTime" handelChange={handelChangeArticle}/>
      <Input label="نویسنده" name="athor" handelChange={handelChangeArticle}/>
      <Input label="آدرس عکس" name="imageUrl" handelChange={handelChangeArticle}/>


      <Textarea label="متن" handelChange={handelChangeArticleMassage}/>


       <div className={styled.buttonWrapper}>
        <button onClick={handelCreateNewArticle}>ساخت مقاله</button>
       </div>

       </div>
       </div>
       
      
       </>

    );


}

export default CreateArticle;

