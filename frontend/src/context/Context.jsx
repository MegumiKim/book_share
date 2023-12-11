import React, { createContext, useState } from "react";

export const SearchResultContext = createContext();
export const UserLoggedInContext = createContext();

export const Context = ({ children }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <SearchResultContext.Provider value={{ searchResult, setSearchResult }}>
      <UserLoggedInContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
        {children}
      </UserLoggedInContext.Provider>
    </SearchResultContext.Provider>
  );
};

// export const useSearchResult = () => {
//   return useContext(SearchResultContext);
// };
