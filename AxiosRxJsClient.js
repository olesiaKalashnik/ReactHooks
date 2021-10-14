import axios from 'axios';
import { from } from 'rxjs';

const AxiosRxJsClient = {
    httpGet: ({ url }) => {
        return from(axios.get(url));
    },

    httpPut: ({ url, data }) => {
        return from(axios.put(url, data));
    },
};

export default AxiosRxJsClient;
