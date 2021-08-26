export const SAVE_CARD = 'SAVE_CARD';
export const SAVE_CARD_SUCCESS = 'SAVE_CARD_SUCCESS';

export const saveCard = (pan, expire, cardholder, cvc) => ({
    type: SAVE_CARD,
    payload: {pan, expire, cardholder, cvc}
})

export const saveCardSucces = () => ({
    type: SAVE_CARD_SUCCESS,
})