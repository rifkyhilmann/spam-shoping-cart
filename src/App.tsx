import { RouterProvider } from "react-router-dom";
import Router from "./routes";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <Navbar />
      <RouterProvider router={Router} />
      <Footer />
    </div>
  );
}

export default App;
