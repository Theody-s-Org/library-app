import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Landing from "./pages/Landing";
import Books from "./pages/Books";
import SingleBook from "./pages/SingleBook";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<Books />} />
        <Route path="/single-book" element={<SingleBook />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route
          path="/add-books
        "
          element={<AddBook />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
