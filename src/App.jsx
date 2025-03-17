import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route path="/javascript" element={<Resources category="javascript" />} />
          <Route path="/react" element={<Resources category="react" />} />
          <Route path="/sanity" element={<Resources category="sanity" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
