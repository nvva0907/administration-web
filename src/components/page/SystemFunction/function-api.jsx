import {baseURL, getAllFunction} from "../../../configuration/axios/project-url.jsx";
import {get} from "../../../configuration/axios/config-axios.jsx";

export const getListFunction = async () => {
    const url = `${baseURL}${getAllFunction}`;
    return await get(url);
};