export const titleCase = (str) => {
    const words = str.split(' ');
    
    ///Maintains diacritics
    const titleCasedWords = words.map(word => {
        if (word.length === 0) return '';
        const firstChar = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();
        return firstChar + restOfWord;
    });
    const titleCasedStr = titleCasedWords.join(' ');
    
    //(_, -> 1st parameter isn't used
    const titleCasedWithHyphen = titleCasedStr.replace(/-(\w)/g, (_, letter) => {
        return '-' + letter.toUpperCase();
    });
    return titleCasedWithHyphen;
};
//Regular expression -> '\s*' 0 o blanc spaces. if 1st() => 2nd() //g=global
export const capitalizeSentences = (str) => {
    return str.replace(/(^|[.¡!¿?]\s*)([a-z])/g, (match) => match.toUpperCase());
};
