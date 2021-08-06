import React from 'react';
import IssueDetailsView from './IssueDetails.view';

const IssueDetailsScreen = props => {
  const data = props?.route?.params.issue;

  return (
    <IssueDetailsView
      title={data.title}
      number={data.number}
      date={data.created_at}
      user={data.user?.login}
      body={data.body}
      labels={data.labels}
    />
  );
};

export default IssueDetailsScreen;
