import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PairList } from "./pair/PairList";
import { PairCreate } from "./pair/PairCreate";
import { PairEdit } from "./pair/PairEdit";
import { PairShow } from "./pair/PairShow";
import { SwapList } from "./swap/SwapList";
import { SwapCreate } from "./swap/SwapCreate";
import { SwapEdit } from "./swap/SwapEdit";
import { SwapShow } from "./swap/SwapShow";
import { PoolList } from "./pool/PoolList";
import { PoolCreate } from "./pool/PoolCreate";
import { PoolEdit } from "./pool/PoolEdit";
import { PoolShow } from "./pool/PoolShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DEXService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Pair"
          list={PairList}
          edit={PairEdit}
          create={PairCreate}
          show={PairShow}
        />
        <Resource
          name="Swap"
          list={SwapList}
          edit={SwapEdit}
          create={SwapCreate}
          show={SwapShow}
        />
        <Resource
          name="Pool"
          list={PoolList}
          edit={PoolEdit}
          create={PoolCreate}
          show={PoolShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
