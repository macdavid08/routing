import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/pages/Root";
import { HomePage } from "./components/pages/Home";
import { ProductPage } from "./components/pages/Products";
import { AboutPage } from "./components/pages/About";
import { ContactPage } from "./components/pages/Contact";
import { ErrorPage } from "./components/pages/Error";
import { ProductDetail } from "./components/pages/ProductDetails";

const router = createBrowserRouter([{
   path: "/", 
   element: <Root />,
   errorElement: <ErrorPage/>,
   children: [
    {path:'/', element : <HomePage/>},
    {path: '/product', element: <ProductPage/>},
    {path: '/about', element: <AboutPage/>},
    {path: '/contact', element: <ContactPage/>},
    {path: '/product/:productId', element: <ProductDetail/>}
   ]
 }]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
