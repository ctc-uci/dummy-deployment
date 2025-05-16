
import DummyPage from "@/components/dummy/DummyPage";

import { BackendProvider } from "@/contexts/BackendContext";

import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <BackendProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<DummyPage />}
          />
        </Routes>
      </Router>
    </BackendProvider>
  );
};

export default App;
