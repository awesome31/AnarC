import axios from 'axios';
import React, {useEffect, useState} from 'react';
import IssueListView from './IssueList.view';

const getIssueList = async (setIssues, setLoading) => {
  setLoading(true);
  const response = await axios.get(
    'https://api.github.com/repos/facebook/react/issues',
  );

  setIssues(response.data);

  setLoading(false);
};

const filterIssues = (searchTerm, issues) =>
  issues.filter(issue => issue.title?.includes(searchTerm));

const IssueListScreen = props => {
  const [search, setSearch] = useState('');
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getIssueList(setIssues, setLoading);
  }, []);

  const onIssuePress = issue =>
    props?.navigation?.navigate('IssueDetails', {issue});

  return (
    <IssueListView
      searchTerm={search}
      setSearchTerm={setSearch}
      issueList={filterIssues(search, issues)}
      onIssuePress={onIssuePress}
      loading={loading}
    />
  );
};

export default IssueListScreen;
