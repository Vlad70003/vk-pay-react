const url = 'http://localhost:2050';


export const serverSaveCard = async (pan, expire, cardholder, cvc) => {

    return fetch(`${url}/api`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                jsonrpc:"2.0",
                id: "63671a5a-21d1-406d-b6b4",
                method:"pay",
                params:{
                    'pan': pan,
                    'expire': expire,
                    'cardholder': cardholder.join(','),
                    'cvc': cvc,
       }
    
            })
            }).then(response => response.json()).then(json => json.result.pid)
}

export const getStatus = async (pid) => {
    return fetch(`${url}/pay/check/${pid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    }).then(res => res.json()).then(json => json.status)
}

