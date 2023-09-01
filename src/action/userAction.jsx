
export const registerUser = (userData) => {
  const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
  const updatedUsers = [...existingUsers, userData];
  localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

  return {
    type: 'REGISTER_USER',
    payload: userData,
  };
};

export const loginUser = (user) => {
    return {
      type: "LOGIN_USER",
      payload: user,
    };
  };