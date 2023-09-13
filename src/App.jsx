import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer" ;
import Main from "./components/Main";
import PostsHeading from "./components/PostsHeading";
import Posts from "./components/Posts";
import Guide from "./components/Guide";
import CitiesSearch from "./components/CitiesSearch";

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <PostsHeading/>
      <Posts/>
      <Guide/>
      <CitiesSearch/>
      <CitiesSearch/>
      <Footer/>
    </div>
  );
}

export default App;
