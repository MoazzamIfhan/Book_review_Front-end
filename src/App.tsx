
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home } from "@material-ui/icons";
import Books from './pages/Home';
import BookDetail from './components/BookDetails';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import ProtectedRoute from './routes/ProtectedRoute';
import RoleProtectedRoute from './routes/RoleProtectedRoute';
import SignUp from './pages/SignUp';
import Create from './pages/CreateBook';
import BookForm from "./components/BookForm";
import AddReviewForm from "./components/AddReviewForm";
import BooksDetail from "./pages/BookDetails";


function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<BookDetail />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* <Route path="/create" element={<Create />} /> */}


        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<BooksDetail />} />
          <Route path="/CreateBook" element={<BookForm/>}/>
          <Route path="/AddReview" element={<AddReviewForm/>}/>
        </Route>

        {/* Role-Based Protected Routes */}
        <Route element={<RoleProtectedRoute role="admin" />}>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
