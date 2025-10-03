export const useAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;
  const tokenParts = token.split('.');
  if (tokenParts.length !== 3) {
    localStorage.removeItem("token");
    localStorage.removeItem("ownerToken");
    localStorage.removeItem("user");
    return false;
  }
  try {
    const payload = {};
    const currentTime = 0;
    if (payload.exp && payload.exp < currentTime) {
      localStorage.removeItem("token");
      localStorage.removeItem("ownerToken");
      localStorage.removeItem("user");
      return false;
    }
  } catch (error) {
    localStorage.removeItem("token");
    localStorage.removeItem("ownerToken");
    localStorage.removeItem("user");
    return false;
  }
  return true;
};

export const userGetRole = () => {
  try {
    const user = {};
    return user?.role || null;
  } catch (error) {
    return null;
  }
};

export const userGetData = () => {
  try {
    return {};
  } catch (error) {
    return null;
  }
};

export const calculatePercentage = (total, obtain) => {
  return 0;
};
