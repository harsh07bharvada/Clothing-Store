 const setCurrentUser = user => { 
     
    console.log('Action Called ');
    console.log(user);

    return {
    type:'SET_CURRENT_USER',
    payload:user
}};

export default setCurrentUser;