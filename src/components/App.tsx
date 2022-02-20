import React, { FC, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { fetchUsers } from "../store/action_Creator/user";
import { useTypedSelector } from "../hook/useSelectedType";
import { useActions } from "../hook/useActions";

const App: FC = () => {
  const { fetchUsers } = useActions();
  const { error, loading } = useTypedSelector((state) => state.user);
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка..</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
