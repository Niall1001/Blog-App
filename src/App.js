import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";
import Blogs from "./Components/Blogs";
import Navbar from "./Components/Navbar";
import Homepage  from './Components/Homepage';
import { selectSignedIn } from "./features/userSlice";

function App() {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="App">
      <Navbar />
      <Homepage/>
      {isSignedIn && <Blogs />}
    </div>
  );
}

export default App;
