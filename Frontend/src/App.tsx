import React from "react";
import logo from "./assets/images/logo.png";
import AppRoutes from "./route/AppRoutes";
import { SEO_CONFIG } from "./config/seo.config";
import { Helmet } from "react-helmet";
const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={logo} />
        <title>{SEO_CONFIG.title}</title>
      </Helmet>
      <AppRoutes />
    </>
  );
};

export default App;
