import axios from 'axios'
const url="http://localhost:4545/api/project/";

export const postNewProject=(object)=>{
    return axios.post(url+'add-project',object,{

    }).then((res)=>{
        console.log(res.data);
    })
}
