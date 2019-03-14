import axios from "axios";

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjN2IwOTEwNzhjMDgzNGZmZDc1NmEyOSIsImlhdCI6MTU1MTU3MDU5MCwiZXhwIjoxNTUyMTc1MzkwfQ.JDcvaX42hcHWV8rpDk2JIJeMzbhQPpGW-N6BDQvjfaw';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const apiUrlGet = 'https://polar-chamber-59654.herokuapp.com/api/users';
const apiUrlPost = 'https://polar-chamber-59654.herokuapp.com/api/users';

export const fetchUsers = () => {
    return (dispatch) => {
        axios(`${apiUrlGet}`)
            .then(response => {
                dispatch(fetchUsersSuccess(response.data));
            });
    }
};

export const createUser = newUser => {
    return (dispatch) => {
        axios.post(`${apiUrlPost}`, newUser)
            .then(response => {
                dispatch(createUserSuccess(response.data));
            });
    }
};

export const deleteUser = userId => dispatch => {
    axios.delete(`${apiUrlGet}/${userId}`)
        .then(() => dispatch(deleteUserSuccess(userId)) );
};

const fetchUsersSuccess = users => ({type: "FETCH_USERS_SUCCESS", payload: users});
const createUserSuccess = user => ({ type: "CREATE_USER_SUCCESS", payload: user });
const deleteUserSuccess = userId => ({ type: "DELETE_USER_SUCCESS", payload: userId });
