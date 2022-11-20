const DEFAULT_API_LOCALHOST = "http://localhost:3001/api/v1";

// ユーザー一覧
export const usersIndex = `${DEFAULT_API_LOCALHOST}/users`;
// ユーザー詳細
export const usersShow = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}`;

// カテゴリ別の一覧
export const prefectureUsersIndex = `${DEFAULT_API_LOCALHOST}/users/prefectures`;
export const departmentUsersIndex = `${DEFAULT_API_LOCALHOST}/users/departments`;

// カテゴリ別の一覧からの詳細
export const prefectureUsersShow = (prefectureId) =>
  `${DEFAULT_API_LOCALHOST}/users/prefectures/${prefectureId}`;
export const departmentUsersShow = (departmentId) =>
  `${DEFAULT_API_LOCALHOST}/users/departments/${departmentId}`;

// カテゴリ一覧
export const prefecturesIndex = `${DEFAULT_API_LOCALHOST}/prefectures`;
export const departmentsIndex = `${DEFAULT_API_LOCALHOST}/departments`;

// カテゴリID
export const departmentsShow = (departmentId) =>
  `${DEFAULT_API_LOCALHOST}/departments/${departmentId}`;
