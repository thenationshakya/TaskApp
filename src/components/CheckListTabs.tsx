import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

//packages
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CheckBox from '@react-native-community/checkbox';
import themeStyle from '../global/theme.style';
const Tab = createMaterialTopTabNavigator();

interface Props {}

const CHECK_DATA = [
  {
    key: 0,
    check: 'Running',
  },
  {
    key: 1,
    check: 'Swimming',
  },
  {
    key: 2,
    check: 'Homework',
  },
];

// const COMPLETED_DATA = [];
// const RUNNING_DATA = [];

function AllSection() {
  const [isSelected, setSelection] = useState(
    new Array(CHECK_DATA.length).fill(false),
  );

  const handleOnChange = position => {
    const updatedSelection = isSelected.map((item, index) =>
      index === position ? !item : item,
    );

    setSelection(updatedSelection);
  };

  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={CHECK_DATA}
        renderItem={({item}) => {
          return (
            <View style={styles.checkContainer}>
              <CheckBox
                value={isSelected[item.key]}
                onValueChange={() => handleOnChange(item.key)}
              />
              <Text style={styles.label}>{item.check}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

function CompletedSection() {
  return (
    <View style={styles.tabContainer}>
      <Text>Completed Section</Text>
    </View>
  );
}

function RunningSection() {
  return (
    <View style={styles.tabContainer}>
      <Text>Running Section</Text>
    </View>
  );
}

const CheckListTabs: React.FC<Props> = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="All" component={AllSection} />
        <Tab.Screen name="Completed" component={CompletedSection} />
        <Tab.Screen name="Running" component={RunningSection} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    padding: 20,
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 4,
    color: themeStyle.GREEN,
  },
});

export default CheckListTabs;
