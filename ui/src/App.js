import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Treatment from "./components/Treatment/Treatment";
import InnerTreatment from "./components/Treatment/InnerTreatment";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Post from "./components/Blog/Post";
import FullBlog from "./components/Blog/FullBlog";
import LoaderApp from "./shared/LoaderApp";
import Reviews from "./components/Reviews/Reviews";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="treatment" element={<Treatment />} />
          <Route path="treatment/:treatmentId" element={<InnerTreatment />} />

          <Route path="articles" index element={<FullBlog />} />
          <Route path="articles/:postId" index element={<Post />} />

          <Route
            path="about"
            index
            element={
              <>
                <About />
                <Contact />
              </>
            }
          />
          <Route path="contact" index element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const getSession = () => {
  const imageCached = window.sessionStorage.getItem("image-cached");

  return {
    _str_: imageCached,
    cached: imageCached ? JSON.parse(imageCached) : false,
  };
};

const setSession = () => {
  const session = getSession();

  if (!session.cached) window.sessionStorage.setItem("image-cached", "true");

  return session;
};

const Home = () => {
  useGoogleAnalytics()
  const [loading, setLoading] = useState(true);
  const [performanceUnMount, setPerformanceUnMount] = useState(true);

  const loadingOff = () => setLoading(false);

  useEffect(() => {
    const { cached } = setSession();

    const performanceTimeOut = setTimeout(
      () => setPerformanceUnMount(false),
      2000
    );

    const timeout = setTimeout(
      () => {
        loadingOff();
      },
      cached ? 500 : 800
    );

    return () => {
      clearTimeout(timeout);
      clearTimeout(performanceTimeOut);
    };
  }, []);

  return (
    <>
      <Hero />
      <Treatment />
      <Blog />
      <About />
      <Reviews />
      <Contact />
      {performanceUnMount && <LoaderApp on={loading} />}
    </>
  );
};
