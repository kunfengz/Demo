import Axios from 'axios';

const instance = Axios.create({
    baseURL:"http://192.168.124.9:8082",
    transformResponse:(res) => {
        // const {data} = JSON.parse(res)
        // console.log(JSON.parse(res));
        const {data} = JSON.parse(res)
        // console.log(data);
        return data;
    },
    timeout:15000
})



export default instance;