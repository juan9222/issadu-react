import axios from "axios";
axios.defaults.baseURL = 'https://issadu.com/web/client/';
axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"

const APIService = {
    async getCloth(typeOfCloth) {
       let response = await axios.get(`cloth/index?type=%22${typeOfCloth}%22`);
       return response.data.data.cloths
    },
    async getBestSellers() {
        let response = await axios.get(`cloth/bet-seller`);
        let bestSwimsuits = response.data.data
        // eslint-disable-next-line
        bestSwimsuits.map(element => {
          if (element.cloth_two === null) {
              element.cloth_two = " "
          }
          if (element.color_two === null) {
            element.color_two = " "
        }
        })
        return response.data.data
    },
    async postUser(userInformation) {       
       if (userInformation) {
         const userInformationURLEncoded = this.jsonToURLEncoded(userInformation)
         return axios.post(`auth/register`, userInformationURLEncoded)
       }
       return axios.post(`auth/register`)
    },
    async postShipping(shippingInformation) {
      /*
      shippingInformation = {
         address: "Calle Falsa 123",
         city: "Cali"
         province: "Valle del Cauca",
         country: "Colombia"
      }
      */
     if (shippingInformation) {
      const shippingInformationURLEncoded = this.jsonToURLEncoded(shippingInformation)
      return axios.post(`shipping/create`, shippingInformationURLEncoded)
      }
    return axios.post(`shipping/create`)
   },
   async getShippingPrices () {
    let response = await axios.get(`shipping/prices`);
    return response.data.data
   },
   async postInvoice(invoiceInformation) {
     if (invoiceInformation) {
      const invoiceInformationURLEncoded = this.jsonToURLEncoded(invoiceInformation)
      return axios.post(`invoice/create`, invoiceInformationURLEncoded)
      }
    return axios.post(`invoice/create`)
   },
   jsonToURLEncoded(jsonString) {
      return Object.keys(jsonString)
        .map(function(key) {
          return (
            encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key])
          )
        })
        .join('&')
    }
}

export default APIService