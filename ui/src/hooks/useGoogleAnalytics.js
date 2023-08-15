import React from "react";
import { useLocation } from "react-router-dom";
import { init, sendPageview } from "./analytics";

const useGoogleAnalytics = () => {
  const location = useLocation();

  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {
    const currentPath = location.pathname + location.search;
    sendPageview(currentPath);
  }, [location]);

  return {};
};

export default useGoogleAnalytics;