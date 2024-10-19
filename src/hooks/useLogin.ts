const LOGIN_URL = "http://localhost:8000/api/login";

export const useLogin = async (username: string, password: string) => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed!");
    }

    const data = await response.json();
    return data.token;
  } catch (error: any) {
    /* TODO: Can be handled in better way */
    throw new Error("Login failed! Error.");
  }
};
