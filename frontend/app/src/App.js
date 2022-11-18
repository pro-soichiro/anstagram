import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Top } from "./containers/Top";
import { Users } from "./containers/Users";
import { PrefectureUsers } from "./containers/PrefectureUsers";
import { DepartmentUsers } from "./containers/DepartmentUsers";
import { User } from "./containers/User";
import { Prefectures } from "./containers/Prefectures";
import { Departments } from "./containers/Departments";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/users">社員一覧</Link>
        </li>
        <li>
          <Link to="/prefectures">都道府県別</Link>
        </li>
        <li>
          <Link to="/departments">部署別</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/users/prefectures/:id" element={<PrefectureUsers />} />
        <Route path="/users/departments/:id" element={<DepartmentUsers />} />
        <Route path="/prefectures" element={<Prefectures />} />
        <Route path="/departments" element={<Departments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
