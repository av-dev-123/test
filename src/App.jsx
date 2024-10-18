import Header from "./components/Header";
import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer";
function App() {

  return (
    <>
      <Router>
      <Header/>
      <main className="max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
