const DEFAULT_API_LOCALHOST = "http://localhost:3001/api/v1";

export const usersIndex = `${DEFAULT_API_LOCALHOST}/users`;
export const usersShow = (userId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}`;
export const prefectureUsersIndex = (prefectureId) =>
  `${DEFAULT_API_LOCALHOST}/users/prefectures/${prefectureId}`;
export const departmentUsersIndex = (departmentId) =>
  `${DEFAULT_API_LOCALHOST}/users/departments/${departmentId}`;
export const prefecturesIndex = `${DEFAULT_API_LOCALHOST}/prefectures`;
export const departmentsIndex = `${DEFAULT_API_LOCALHOST}/departments`;