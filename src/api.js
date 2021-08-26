const url = 'http://localhost:2050';

export const serverSaveCard = async (pan, expire, cardholder, cvc) => {

    return fetch(`${url}/api`, {
        method: 'POST',
        
        body: JSON.stringify({
            jsonrpc:"2.0",
            id: "63671a5a-21d1-406d-b6b4",
            method:"pay",
            params:{
                'pan': pan,
                'expire': expire,
                'cardholder': cardholder,
                'cvc': cvc
   }

        })
    }).then(res => res.json())
}
