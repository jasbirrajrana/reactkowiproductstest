import AxiosRequests from "../AxiosRequests";

class AuthServices {
  signUp(userInfo) {
    const formData = new FormData();
    formData.append("pic", userInfo.pic[0]);
    formData.append("name", userInfo.name);
    formData.append("email", userInfo.email);
    formData.append("gender", userInfo.gender);
    formData.append("mobno", userInfo.mobno);
    formData.append("password", userInfo.password);
    const json = JSON.stringify(userInfo);
    console.log("formdata", formData);
    const blob = new Blob([json], {
      type: "application/json",
    });
    formData.append("document", blob);
    return AxiosRequests.post("/regreact/", formData);
  }
  signIn(loginInfo) {
    return AxiosRequests.post("/loginreact/", loginInfo);
  }
}

export default new AuthServices();
