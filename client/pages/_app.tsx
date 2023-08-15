// @ts-nocheck 

import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";
import { Router } from "next/router";


function MyApp({ Component, pageProps }: AppProps) {

//   initRouterListeners();

//   function initRouterListeners() {
  
//      console.log("Init router listeners");
  
//      const routes:any = [];
  
//      Router.events.on('routeChangeStart', (url) => {
//         pushCurrentRouteInfo();
//      });
  
//      Router.events.on('routeChangeComplete', (url) => {
//         fixScrollPosition();
//      });
  
//      // Hack to set scrollTop because of this issue:
//      // - https://github.com/zeit/next.js/issues/1309
//      // - https://github.com/zeit/next.js/issues/3303
  
//      function pushCurrentRouteInfo() {
//         routes.push({
//            pathname: Router.pathname,
//            scrollY: window.scrollY
//         });
//      }
  
//      // TODO: We guess we're going back, but there must be a better way
//      // https://github.com/zeit/next.js/issues/1309#issuecomment-435057091
//      function isBack() {
//         return routes.length >= 2 && Router.pathname === routes[routes.length - 2].pathname;
//      }
  
//      function fixScrollPosition() {
  
//         let scrollY = 0;
  
//         if (isBack()) {
//            routes.pop(); // route where we come from
//            const targetRoute = routes.pop(); // route where we return
//            scrollY = targetRoute.scrollY; // scrollY we had before
//         }
  
//         window.requestAnimationFrame(() => window.scrollTo(0, scrollY));
//      }
//   }

  return (
    <>
      <Header />
         <Component {...pageProps} />
      <Footer />
    </>
  );
}


export default MyApp;

