
const fetchApi = async (url)=>{
    try{
        const result = await fetch(url);
        if(!result.ok) throw("error", result)
        return result.json();
    }
    catch(error){
        console.log(error)
        return null;
    }
   
}

export default fetchApi;