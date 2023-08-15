import Head from "next/head";
// import Hero from "../components/home/Hero/Hero";
import HeroClassic from "../components/home/HeroClassic/HeroClassic";
import Blog from "../components/home/Blog/Blog";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Treatment from "../components/Treatment/Treatment";

export default function Home() {
  return (
    <div>
      <Head>
        <title>להב - טיפול הוליסטי</title>
        <meta
          name="description"
          content="מימוש עצמי איזון רגשי אורח חיים בריא"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <Hero /> */}
        <HeroClassic />
        <Treatment />
        <Blog />
        <About />
        <Contact background="#fff" />
      </div>
    </div>
  );
}