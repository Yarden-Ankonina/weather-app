export const isEnglishOnly = (word)=>{
    const res = /^[a-zA-Z]+$/.test(word);
    return res;
  }