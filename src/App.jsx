import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import FormForgotPass from "./pages/newPass"; 
import ErrorRoute from "./pages/errorRoute";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/expenses";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorRoute/>
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
    },
    {
      path: "/balance",
      element: <BalancePage />
    },
    {
      path: "/expenses",
      element: <ExpensesPage />
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
