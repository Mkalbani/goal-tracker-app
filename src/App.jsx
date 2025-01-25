import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from './layout/Layout'
import Home from "./pages/Home";
import HowTo from "./pages/How-to";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css'
import { NotificationProvider } from "./contexts/NotificationContext";
import { NotificationContainer } from "./components/ui/Notification";


function App() {
  return (
    <Router>
      <NotificationProvider>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-to" element={<HowTo />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
          <NotificationContainer />
        </ThemeProvider>
      </NotificationProvider>
    </Router>
  );
}

export default App;
