import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import FormForgotPass from "./pages/newPass"; 

const App = () => {
  const myRouter = createBrowserRouter([
     {
      path: "/",
      element: <div>Halaman Utama</div>,
    },
    {
      path: "/login",
      element: <SignInPage/>,
    },
    {
      path:"/register",
      element:<SignUpPage/>
    },
    {
      path:"/forgotpass",
      element:<FormForgotPass/>
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
