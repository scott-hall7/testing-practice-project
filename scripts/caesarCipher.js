function caesarCipher(string, key)  {

    const letterCodes = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let newString = "";

    for(let i = 0; i < string.length; i++) {
        let currentLetter = string[i];
        let currentIndex = letterCodes.indexOf(currentLetter);
        newString += letterCodes[currentIndex + key];
    }
    return newString;
}
