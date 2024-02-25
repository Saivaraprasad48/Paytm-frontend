const hostname = "http://localhost:5000/api/v1";

export const endpoints = {
  login: `${hostname}/user/signin`,
  signup: `${hostname}/user/signup`,
  getsearchusers: `${hostname}/user/bulk`,
  getusers: `${hostname}/user/user-details`,
  updateuser: `${hostname}/user/update-user`,
  deleteuser: `${hostname}/user/delete`,
  currentuserbalance: `${hostname}/account/balance`,
  getbalance: `${hostname}/account/specific/balance`,
  transferbalance: `${hostname}/account/transfer`,
};
