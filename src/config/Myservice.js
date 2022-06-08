import { APIURL } from "./URL";
import axios from "axios";
function getCourses(){
    return axios.get(APIURL)
}

function addEnquiry(data,id){
    return axios.post(APIURL+id+"/enquires", data)
}

function getEnquiries(id){
    return axios.get(APIURL+id+"/enquires")
}

export {getCourses,addEnquiry,getEnquiries}