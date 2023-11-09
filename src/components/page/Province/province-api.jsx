import {baseURL, getAllProvince} from "../../../configuration/axios/project-url.jsx";
import {get, post} from "../../../configuration/axios/config-axios.jsx";

export const getListProvinces = async (page, size, body) => {
    const url = `${baseURL}${getAllProvince}?pageNum=${page}&pageSize=${size}`;
    return await post(url, {obj: body});
};