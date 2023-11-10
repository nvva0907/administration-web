import {baseURL, getAllUser} from "../../../configuration/axios/project-url.jsx";
import {get} from "../../../configuration/axios/config-axios.jsx";

export const getListAllUser = async (page, size, query) => {
    const url = `${baseURL}${getAllUser}?pageNum=${page}&pageSize=${size}`;
    return await get(url);
};