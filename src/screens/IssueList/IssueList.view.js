import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../../common/colors';
import {STRINGS} from '../../common/strings';
import {humanized_time_span} from '../../common/utils';

const createBottomText = (issueNumber, date, author) =>
  `#${issueNumber} opened ${humanized_time_span(date)} by ${author}`;

const renderIssue = (title, issueNumber, date, author, onIssuePress) => (
  <TouchableOpacity style={styles.issue} onPress={onIssuePress}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.infoText}>
      {createBottomText(issueNumber, date, author)}
    </Text>
  </TouchableOpacity>
);

const IssueListView = props => {
  const {searchTerm, setSearchTerm, issueList, onIssuePress, loading} = props;

  return (
    <View style={styles.mainContainer}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size={60} color={'blue'}></ActivityIndicator>
        </View>
      )}
      <View style={styles.spacerOne} />
      <Text style={styles.issuesText}>Issues</Text>
      <View style={styles.spacerOne} />
      <Text style={styles.labelText}>{STRINGS.searchByTitle}</Text>
      <View style={styles.spacerOne} />
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchContainer}
      />
      <View style={styles.spacerTwo} />
      <FlatList
        data={issueList}
        keyExtractor={data => data.id}
        renderItem={({item}) =>
          renderIssue(
            item.title,
            item.number,
            item.created_at,
            item.user?.login,
            () => onIssuePress(item),
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 8,
    backgroundColor: COLORS.FAFBFC,
    fontSize: 14,
  },
  issue: {
    padding: 12,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
  title: {
    fontSize: 18,
    color: COLORS.textColor,
    fontWeight: 'bold',
  },
  spacerOne: {
    height: 8,
  },
  infoText: {
    fontSize: 12,
    color: COLORS.smallTextColor,
  },
  issuesText: {
    fontSize: 22,
    color: COLORS.blue,
    fontWeight: 'bold',
  },
  spacerTwo: {
    height: 24,
  },
  labelText: {
    fontSize: 14,
    color: COLORS.smallTextColor,
  },
  loader: {position: 'absolute', top: '50%', left: '45%'},
});

export default IssueListView;
