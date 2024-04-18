import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Post from "./pages/Post.jsx";
import Error from "./pages/Error.jsx";
import Testimonials from "./components/Testimonials.jsx";
import LoginForm from "./pages/LoginForm.jsx";
import RegisterForm from "./pages/RegisterForm.jsx";
import BagItem from "./pages/BagItem.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/Aquaharmony/Home" element={<Home />} />
          <Route path="Aquaharmony/about" element={<About />} />
          <Route path="Aquaharmony/products" element={<Products />} />
          <Route path="Aquaharmony/products/:productId" element={<SingleProduct />} />
          <Route path="Aquaharmony/posts" element={<Post />} />
          <Route path="Aquaharmony/cart" element={<BagItem />} />
          <Route path="*" element={<Error />} />
          <Route path="/Aquaharmony/login" element={<LoginForm />} />
          <Route path="/Aquaharmony/register" element={<RegisterForm />} />
        </Routes>

        <section>
          <Testimonials />
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
