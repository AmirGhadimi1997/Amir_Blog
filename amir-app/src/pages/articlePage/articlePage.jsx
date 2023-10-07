import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./articlePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spiner from "../../components/spiner/Spiner";



function ArticlePage() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);
        setIsLoading(false);
      })

      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar title="امیر بلاگ" />
      <div className={styled.articleWrapper}>
        <div className="container">
          {isLoading ? (
            <Spiner />
          ) : (
            <>
              <h1>{article.title}</h1>
              <div className={styled.articleInfo}>
                <span>تاریخ :{article.date}</span>
                <span>نویسنده : {article.athor}</span>
                <span>مدت زمان خواندن : {article.readingTime} دقیقه</span>
              </div>
              <img src={article.imageUrl} />
              <p> {article.content} </p>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ArticlePage;
