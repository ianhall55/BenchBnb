import React from 'react';
import SearchContainer from './search_container';
import { Provider } from 'react-redux';


const Root = ({store}) => (
  <Provider store={store}>
    <SearchContainer/>
  </Provider>
);

export default Root;
