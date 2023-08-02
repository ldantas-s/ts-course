import { useState } from 'react';

import { useGetRepoByTermQuery } from '../state';

import RepoList from './RepoList';
import SearchTerm from './SearchTerm';

const App = () => {
  const [term, setTerm] = useState('');
  const [skip, setSkip] = useState(true);
  const { data, isLoading, isSuccess } = useGetRepoByTermQuery(term, {
    skip,
  });

  return (
    <>
      <h1>Search for a Package</h1>
      <SearchTerm {...{ term, setSkip, setTerm, disableButton: isLoading }} />
      <RepoList {...{ data, isLoading, isSuccess }} />
    </>
  );
};

export default App;
