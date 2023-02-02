import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SendInquiry from './components/SendInquiry';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home></Home>
      ),
    },
    {
      path: "/getintouch",
      element: <SendInquiry/>,
    },
    {
      path: "/login",
      element: <LoginForm/>,
    },
  ]);
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
  return (
    <div>
      {/* <Home></Home> */}
      {/* <LoginForm></LoginForm> */}
    </div>
  );
}

export default App;
