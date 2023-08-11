import SearchAppBar from "./components/Appbar";
import Home from "./pages/Home";
import {createBrowserRouter, Outlet} from "react-router-dom";
import Tour from "./pages/Tour";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Imagecollage from "./components/Imagecollage";

const App = () => {
  return (
    // <BrowserRouter>
    // <SearchAppBar/>
    //   <Routes>
    //     <Route path = "/" element = {<Home/>}/>
    //     <Route path = "/:id" element = {<Tour/>}/>
    //   </Routes>
    // </BrowserRouter>

    <>  
      <SearchAppBar/>
        <Outlet/>
    </>
  )}

export const appRouter = createBrowserRouter([
      {
        path:"/",
        element : <App/>,
        children : [
          {
            path : "login",
            element : <Login/>
          },
          {
            path : "signup",
            element : <Signup/>
          },
          {
            path : "home",
            element : <Home/>,
          },
          {
            path : "home/id",
            element : <Imagecollage/>
          }
        ]
      },
      
    ])


export default App;
