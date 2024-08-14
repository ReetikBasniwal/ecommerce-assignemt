import axios from "axios";

/**
 * @author Ravi Sankar
 * @param endpoint
 * @param method
 * @param headers
 * @param payload
 * API request handler
 */
export async function api_request(endpoint, method, payload={}, headers={}) {
    // Handle GET Requests
    if(method.toLowerCase() === "get"){
        if(Object.keys(headers).length !== 0){
            var response = await axios.get(endpoint, {"headers": headers})
            return response
        }else{
            var response = await axios.get(endpoint)
            return response
        }
       
    }
    // Handle POST Requests
    else if(method.toLowerCase() === "post"){
        if(Object.keys(headers).length !== 0){
            var response = await axios.post(endpoint, payload, {"headers": headers});
            return response
        }else{
            var response = await axios.post(endpoint, payload);
            return response
        }
        
    }
    // Handle DELETE Requests
    else if(method.toLowerCase() === "delete"){
        if(Object.keys(headers).length !== 0){
            var response = await axios.delete(endpoint, {"headers": headers});
            return response
        }else{
            var response = await axios.delete(endpoint);
            return response
        }
        
    }
}