const API_BASE_URL = "http://127.0.0.1:8000/api"; // Corrected Django API URL

export const signUp = async (userData: {
  fname: string;
  lname: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/signup/`, { // Correct endpoint
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return response.json();
};

export const signIn = async (credentials: { email: string; password: string }) => {
  const response = await fetch(`${API_BASE_URL}/signin/`, { // Correct endpoint
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  return response.json();
};
