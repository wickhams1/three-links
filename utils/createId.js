const characterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const createId = (length) => {
    let result = '';

    while (result.length < length) {
        //Add a random character to the current string
        result += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return result;
}

export default createId;