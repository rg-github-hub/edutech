import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SendInquiry from './components/SendInquiry';
import Navbar from './components/Navbar';

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
