import axios from 'axios';

const API_URI = "https://tinyurl.com/api-create.php";

const shortenUrl = async(longUrl)=>{

    try{
        const response = await axios.post(`${API_URI}`,null,{
            params:{
                url:longUrl,
            },
        });
        console.log("we are in short url",response);
        return response.data;
    } catch(error){
        console.log(error.message);
    }
}

export default shortenUrl;

