import storage from ".";

const authToken = "auth_token";
const refreshToken = "refresh_token";

export const getAuthToken = (): string => {
  return storage.get<string>(authToken) || "";
};

export const getRefreshToken = (): string => {
  return storage.get<string>(refreshToken) || "";
};

export const setAuthentication = (
  auth: string | null,
  refresh?: string | null
) => {
  if (auth) {
    storage.set(authToken, auth);
  }
  if (refresh) {
    storage.set(refreshToken, refresh);
  }
};
