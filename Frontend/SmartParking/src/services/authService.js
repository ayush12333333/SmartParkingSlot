const BASE_URL = "http://localhost:8083/auth";

export async function loginUser(email, password) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok){
   const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  } 
  return response.json();
}

export async function signupUser({ name, email, password, phoneNumber }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, phoneNumber ,role:"USER"}),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Signup failed");
  }

  return response.json();
}
