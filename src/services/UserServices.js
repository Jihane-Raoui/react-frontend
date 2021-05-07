import axios from 'axios';

const User_API_URL="https://managingusers-app-springboot.herokuapp.com/api/user";

class UserServices{
 getUser(){
     return axios.get(User_API_URL);
 }
 createUser(user){
    return axios.post(User_API_URL, user);
}
getUserById(userId){
    return axios.get(User_API_URL + '/' + userId);
}

updateUser(user, userId){
    return axios.put(User_API_URL + '/' + userId, user);
}

deleteUser(userId){
    return axios.delete (User_API_URL + '/' + userId);
}
}
export default new UserServices()
