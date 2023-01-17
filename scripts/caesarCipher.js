function caesarCipher(string, key)  {

    const letterCodes = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let newString = "";

    for(let i = 0; i < string.length; i++) {

        //  Finds the index of the current letter in the string
        let currentLetter = string[i].toLowerCase();
        let currentIndex = letterCodes.indexOf(currentLetter);

        //  Handles non-char characters
        if(letterCodes.indexOf(currentLetter) === -1) newString += string[i];

        else    {

            //  Finds new index
            let newIndex = currentIndex + key;

            //  Handles wrapping of index if past the index of z
            while(newIndex > 25)  {
                newIndex -= 26;
            }

            //  Handles uppercase letters
            if(string[i] === string[i].toUpperCase()) newString += letterCodes[newIndex].toUpperCase();

            
            else newString += letterCodes[newIndex];
        }
    }
    return newString;
}

export { caesarCipher };