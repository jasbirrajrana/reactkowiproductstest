import AxiosRequests from "../AxiosRequests";

class AuthServices {
  signUp(userInfo) {
    return AxiosRequests.post("/regreact/", userInfo);
  }
  signIn(loginInfo) {
    return AxiosRequests.post("/loginreact/", loginInfo);
  }
}

export default new AuthServices();
