import axiosClient from "./axiosClient";

const forecastApi = {
    get: (params) => {
        const url = '/onecall';
        return axiosClient.get(url, { params });
    }
}

export default forecastApi;