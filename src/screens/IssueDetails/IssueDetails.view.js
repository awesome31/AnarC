import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {COLORS} from '../../common/colors';
import {humanized_time_span} from '../../common/utils';

const renderLabel = (title, color) => (
  <View style={{...styles.label, backgroundColor: `#${color}`}}>
    <Text style={{...styles.infoTextWhite}}>{title}</Text>
  </View>
);

const IssueDetailsView = props => {
  const {title, number, date, user, body, labels} = props;

  return (
    <ScrollView style={styles.mainContainer}>
      <Text>
        <Text style={styles.mainText}>{title} </Text>
        <Text style={styles.issueText}>#{number}</Text>
      </Text>
      <Text>
        <Text style={styles.infoTextBold}>{user} </Text>
        <Text style={styles.infoText}>
          opened this issue {humanized_time_span(date)}
        </Text>
      </Text>
      <View style={styles.spacerOne} />
      <Text style={styles.bodyText}>{`${body}`}</Text>
      <View style={styles.spacerTwo} />
      <View style={styles.labelContainer}>
        {labels.map(label => (
          <View key={label.id} style={styles.labelContainer}>
            {renderLabel(label.name, label.color)}
          </View>
        ))}
      </View>
      <View style={styles.spacerTwo} />
      <View style={styles.spacerTwo} />
      <View style={styles.spacerTwo} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  mainText: {
    fontSize: 24,
    color: COLORS.textColor,
    fontWeight: 'bold',
  },
  issueText: {
    fontSize: 22,
    color: COLORS.smallTextColor,
    fontWeight: 'bold',
  },
  infoTextBold: {
    fontSize: 14,
    color: COLORS.smallTextColor,
    fontWeight: 'bold',
  },

  infoText: {
    fontSize: 14,
    color: COLORS.smallTextColor,
  },
  spacerOne: {
    height: 24,
  },
  bodyText: {
    fontSize: 14,
    color: COLORS.textColor,
  },
  spacerTwo: {
    height: 16,
  },
  label: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 8,
  },
  infoTextWhite: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default IssueDetailsView;
