export let cardnumHandler = (e, number, setNumber) => {
    if (e.key !== 8 && e.keyCode !== 46) {
        let newValue = e.target.value.replace(/\D/g, "");
        newValue = newValue.replace(/(.{4})/g, "$1 ");
        e.target.value = newValue;
        setNumber(number = e.target.value );
    }
    if(e.keyCode === 8) {
        setNumber(number = e.target.value );
    }
}
export let dateHandler = (e, date, setDate) => {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
        let newValue = e.target.value.replace(/[A-Za-zА-Яа-яЁё]/, '')
        e.target.value = newValue;
        setDate(date = e.target.value );
    }
    if(e.keyCode === 8) {
        setDate(date = e.target.value );
    }
}
export let cvvHandler = (e, cvv, setCvv) => {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
        let newValue = e.target.value.replace(/\D/g, "");
        setCvv(cvv = newValue);
        e.target.value = cvv;
    }
    if(e.keyCode === 8) {
        setCvv(cvv = e.target.value); 
    }

}
export let nameHandler = (e, name, setName) => {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
        let newValue = e.target.value.match(/^[a-zA-Z_ ]*$/);
        setName(name = newValue);
        e.target.value = name;
    }
    if(e.keyCode === 8) {
        setName(name = e.target.value); 
    }
}
