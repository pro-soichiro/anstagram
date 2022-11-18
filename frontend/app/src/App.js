import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Top } from "./containers/Top";
import { Users } from "./containers/Users";
// import { User } from "./containers/User";
import { Prefectures } from "./containers/Prefectures";
import { Departments } from "./containers/Departments";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/prefectures">Prefectures</Link>
        </li>
        <li>
          <Link to="/departments">Departments</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/users" element={<Users />} >
          <Route path=":id" element={<User />} />
        </Route> */}
        <Route path="/prefectures" element={<Prefectures />} />
        <Route path="/departments" element={<Departments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
