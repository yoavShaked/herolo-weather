import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store";
import Main from './Main';

const App = () => {
   return (
       <Provider store={configureStore()}>
           <Main />
       </Provider>
   );
};

export default App;
