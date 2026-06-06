import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/">
          <Route index element={<>Home</>} />
          <Route path="dashboard" element={<>Home</>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
