// frontend/src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
      // Восстановление состояния из localStorage при загрузке страницы
      const user = localStorage.getItem("chat_user");
      return user ? JSON.parse(user) : null;
  });

  // Обновление localStorage при изменении authUser
  useEffect(() => {
      if (authUser) {
          localStorage.setItem("chat_user", JSON.stringify(authUser));
      } else {
          localStorage.removeItem("chat_user");
      }
  }, [authUser]);

  return (
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
          {children}
      </AuthContext.Provider>
  );
};

// export const AuthContextProvider = ({ children }) => {
//   const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat_user")) || null);
//     return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>;
// };
