import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Top } from "./containers/Top";
import { Users } from "./containers/Users";
import { PrefectureUsersShow } from "./containers/PrefectureUsersShow";
import { DepartmentUsersShow } from "./containers/DepartmentUsersShow";
import { PrefectureUsersIndex } from "./containers/PrefectureUsersIndex";
import { DepartmentUsersIndex } from "./containers/DepartmentUsersIndex";
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
          <Link to="/users/prefectures">社員一覧/都道府県別</Link>
        </li>
        <li>
          <Link to="/users/departments">社員一覧/部署別</Link>
        </li>
        <li>
          <Link to="/prefectures">都道府県</Link>
        </li>
        <li>
          <Link to="/departments">部署</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/users/prefectures" element={<PrefectureUsersIndex />} />
        <Route path="/users/departments" element={<DepartmentUsersIndex />} />
        <Route
          path="/users/prefectures/:id"
          element={<PrefectureUsersShow />}
        />
        <Route
          path="/users/departments/:id"
          element={<DepartmentUsersShow />}
        />
        <Route path="/prefectures" element={<Prefectures />} />
        <Route path="/departments" element={<Departments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
