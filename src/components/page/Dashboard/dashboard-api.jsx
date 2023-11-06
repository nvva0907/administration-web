import {baseURL, getAllUser} from "../../../configuration/axios/project-url.jsx";
import {get} from "../../../configuration/axios/config-axios.jsx";

export const getListAllUser = async (page, size, query) => {
    var url = `${baseURL}${getAllUser}${query == null ? "" : query !== "" ? `${query}&pageNum=${page}&pageSize=${size}` : `?pageNum=${page}&pageSize=${size}`}`;
    return await get(url);
};