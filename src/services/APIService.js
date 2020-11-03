import axios from "axios";
axios.defaults.baseURL = 'http://issadu.com/web/client/';
axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const APIService = {
    async getCloth(typeOfCloth) {
       let response = await axios.get(`cloth/index?type=%22${typeOfCloth}%22`);
       return response.data.data.cloths
    },
    async getBestSellers() {
        let response = await axios.get(`cloth/bet-seller`);
        return response.data.data
     }
}

export default APIService