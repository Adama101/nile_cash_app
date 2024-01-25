import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LoanHistory from './pages/LoanHistory';
const RequestLoan = React.lazy(() => import("pages/RequestLoan"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/requestloan" element={<RequestLoan />} />
          <Route path="/loan-history" element={<LoanHistory />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;