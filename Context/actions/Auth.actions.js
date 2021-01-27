import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";
import baseURL from "../../assets/common/baseUrl";
import Toast from "react-native-toast-message";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const loginUser = (user, dispatch) => {
    fetch(`${baseURL}users/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.json(), 
        Toast.show({
              topOffset: 60,
              type: "success",
              text1: "Login successful",
              text2: "Welcome to Triffid"
            }))
    .then((data) => {
        if (data) {
            const token = data.token;
            AsyncStorage.setItem("jwt", token)
            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded, user))
        } else {
            logoutUser(dispatch)
        }
    })
    .catch((err) => {
        Toast.show({
              topOffset: 60,
              type: "error",
              text1: "Something went wrong 🙅",
              text2: "Please try again"
            })
        logoutUser(dispatch)
    });
};

export const getUserProfile = (id) => {
    fetch(`${baseURL}users/${id}`, {
        method: "GET",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export const logoutUser = (dispatch) => {
    AsyncStorage.removeItem("jwt");
    dispatch(setCurrentUser({}))
    Toast.show({
              topOffset: 60,
              type: "success",
              text1: "Bye bye 👋",
              text2: "You've been logged out"
            })
}

export const setCurrentUser = (decoded, user) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
        userProfile: user
    }
}