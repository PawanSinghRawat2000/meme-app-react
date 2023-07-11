export const getAllMemes = async()=>{
    const url='https://api.imgflip.com/get_memes';
    const response=await fetch(url);
    return await response.json();
};