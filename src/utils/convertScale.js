 export const toFahrenheit = (celsius)=>{
    return (celsius * 9 / 5) + 32;
  }

  export const toCelsius = (fahrenheit)=> {
    return (fahrenheit - 32) * 5 / 9;
  }

 export const numToTwoChar = (num)=>{
    const str = "" + num;
    if(num<10){
        return str.padStart(2,'0') ;
    }
    return str
}