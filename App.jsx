import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.jsx/Layout';
import Dashboard from './pages/dashboad/Dashboard';
import RestaurantSetup from "./pages/resautrant/RestaurantSetup";

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/restaurantsetup" element={<RestaurantSetup/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
