import './App.css'
import NewPost from "./pages/newPostPage/NewPost.jsx";
import Overview from "./pages/overviewPage/Overview.jsx";
import NotFound from "./pages/notFoundPage/NotFound.jsx";
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation/Navigation.jsx";
import Home from "./pages/homePage/Home.jsx";

function App() {
    return (
       <>
       <main>
           <Navigation />
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/newpost" element={<NewPost/>}/>
               <Route path="/overview" element={<Overview/>}/>
               <Route path="/notfound" element={<NotFound/>}/>
           </Routes>
       </main>
       </>
    )
}

export default App
