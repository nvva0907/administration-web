import axios from "axios";
import {contains} from "../../utils/DataUtils.jsx";

const ERROR_CODES = ["401", "403"]

export const baseHeader = () => {
    return {
        "Authorization": `Bearer ${localStorage.getItem("token")}`, "Content-Type": "application/json"
    }
}
// interceptors request
axios.interceptors.request.use(function (request) {
    request = {
        ...request, headers: baseHeader(),
    }
    return request;
}, function (err) {
    return Promise.reject(err);
})
// interceptors response
axios.interceptors.response.use(function (response) {
    const data = response.data;
    const code = data.code;
    if (contains(ERROR_CODES, code)) {
        alert(data.message);
    } else {
        return data;
    }
}, function (error) {
    // error
    return Promise.reject(error);
})
// BASE API
export const get = async (url) => {
    try {
        return axios({
            method: "GET", url: url,
        });
    } catch (error) {
        console.error("Failed to GET data:", error);
        throw error;
    }
}
export const post = async (url, {obj}) => {
    try {
        return await axios({
            method: "POST",
            url: url,
            data: obj ?? {},
        });
    } catch (error) {
        console.error("Failed to POST data:", error);
        throw error;
    }
}