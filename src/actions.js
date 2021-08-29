export const SAVE_CARD = 'SAVE_CARD';
export const SAVE_CARD_SUCCESS = 'SAVE_CARD_SUCCESS';
export const STATUS_UPDATE = 'STATUS_UPDATE';
export const UPDATE = 'UPDATE';

export const saveCard = (pan, expire, cardholder, cvc) => ({
    type: SAVE_CARD,
    payload: {pan, expire, cardholder, cvc}
})

export const saveCardSucces = (pid) => ({
    type: SAVE_CARD_SUCCESS,
    payload: {pid},
})

export const statusUpdate = (status) => ({
    type: STATUS_UPDATE,
    payload:  {status}
})

export const update = () => ({
    type: UPDATE,
})