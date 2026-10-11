import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Catalog from "./components/Catalog";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Catalog />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
