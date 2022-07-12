
const fetchApi = async (url)=>{
    try{
        const result = await fetch(url);
        if(!result.ok) throw("error", result)
        return result.json();
    }
    catch(error){
        throw(error)
    }
}

export default fetchApi;