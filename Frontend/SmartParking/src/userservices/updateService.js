const BASE_URL = "https://smart-parking-slot-render.onrender.com/user";
const token = localStorage.getItem("token");

export async function fetchCurrentUser() {
  const res = await fetch(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

export async function updateProfile(field, value) {
 

  const res = await fetch(`${BASE_URL}/update-profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ [field]: value }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Update failed");
  }

  return res.json();
}


export async function updatePassword(passwords) {
  const res = await fetch(`${BASE_URL}/update-password`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(passwords),
  });
  return res.text(); // plain text response
}
