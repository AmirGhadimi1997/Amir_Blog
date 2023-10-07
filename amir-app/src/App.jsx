// import Footer from "./components/footer/Footer";
// import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlePage/articlePage";
import CreateArticle from "./pages/createArticle/CreateArticle";
import NotFound from "./pages/notFound/NotFound";




function App() {
  return (
    <>

     <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/article/:id"  element={<ArticlePage />} />
      <Route path="/create-article" element={<CreateArticle />} />




     </Routes>


    </>
  );
}





export default App;
