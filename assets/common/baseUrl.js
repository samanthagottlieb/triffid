import { Platform } from "react-native";

let baseURL = "";

{
  Platform.OS == "android"
    ? (baseURL = "http://10.0.2.2:3000/")
    : (baseURL = "http://localhost:3000/");
}

export default baseURL;
