const APIauth = "https://nanourl.onrender.com/users"

export async function handleSignup(payload) {
  const res = await fetch(`${APIauth}/signup`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function handleLogin(payload) {
  const res = await fetch(`${APIauth}/login`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function handleForget(payload) {
  const response = await fetch(`${APIauth}/forget`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}

export async function handleReset(payload) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const token = urlSearchParams.get("token");

  

  const response = await fetch(`${APIauth}/reset/${token}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}