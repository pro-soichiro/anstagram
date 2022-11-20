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
import { DepartmentEdit } from "./containers/DepartmentEdit";

// chakra ui
import {
  ChakraProvider,
  Tabs,
  TabList,
  Tab,
  Container,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Tabs>
          <TabList>
            <Link to="/">
              <Tab>Top</Tab>
            </Link>
            <Link to="/users">
              <Tab>社員一覧</Tab>
            </Link>
            <Link to="/users/prefectures">
              <Tab>社員一覧/都道府県別</Tab>
            </Link>
            <Link to="/users/departments">
              <Tab>社員一覧/部署別</Tab>
            </Link>
            <Link to="/prefectures">
              <Tab>都道府県</Tab>
            </Link>
            <Link to="/departments">
              <Tab>部署</Tab>
            </Link>
          </TabList>
        </Tabs>
        <Container mb={14}>
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
            <Route
              path="/users/prefectures"
              element={<PrefectureUsersIndex />}
            />
            <Route
              path="/users/departments"
              element={<DepartmentUsersIndex />}
            />
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
            <Route
              path="/departments/:id"
              element={<DepartmentEdit />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
