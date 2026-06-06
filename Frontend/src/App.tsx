import React from "react";
import logo from "./assets/images/logo.png";
import AppRoutes from "./route/AppRoutes";
import { SEO_CONFIG } from "./config/seo.config";
import { Helmet } from "react-helmet";
import { useAuth } from "./context/AuthContext";
import AuthSuspense from "./components/common/AuthSuspense";
const App: React.FC = () => {
  const { isInitializing } = useAuth();
  if (isInitializing) {
    return <AuthSuspense />;
  }

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
