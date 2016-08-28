import React from 'react';
import BenchIndex from './bench_index.jsx';
import BenchMap from './bench_map.jsx';


const Search = ({ benches, requestBenches }) => (
  <div>
    <BenchMap benches={benches} />
    <BenchIndex benches={benches} requestBenches={requestBenches}/>
  </div>

);

export default Search;
