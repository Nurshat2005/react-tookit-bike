import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Bicycels from "./components/Bicycels";
import BicyclesDetails from "./components/Bicycels/BicyclesDetails";
import Favorite from "./components/Favorite";
import Basket from "./components/Basket";
import BicycelsCreate from "./components/BicycelsCreate";
import Order from "./components/Order";
import { useAuth } from "./components/context/AuthContext";
import SignIn from "./components/SignIn";

const App = () => {
  const {register}=useAuth()
  let routes = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 2,
      link: "/create",
      element: <BicycelsCreate />,
    },
    {
      id: 3,
      link: "/bicycels",
      element: <Bicycels />,
    },
    {
      id: 4,
      link: "/details/:id",
      element: <BicyclesDetails />,
    },
    {
      id: 5,
      link: "/favorite",
      element: <Favorite />,
    },
    {
      id: 6,
      link: "/basket",
      element: <Basket />,
    },
    {
      id: 7,
      link: "/order",
      element: <Order />,
    },
  ];
  return (
    <>
    {
      register?(
     <>
     <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
     </>
      ):(
       <>
        <SignIn/>

       </>
      )
    }
    
    </>
  );
};

export default App;
