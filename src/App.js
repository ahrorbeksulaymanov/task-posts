import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import LoginPage from "./components/login/index";
import Header from "./components/header";
import MainPage from "./components/content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News";
import NewsContent from "./components/News/newsContent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MainPage />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/news"
            element={
              <>
                <Header />
                <News />
              </>
            }
          />
          <Route
            path="/news/:id"
            element={
              <>
                <Header />
                <NewsContent />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
