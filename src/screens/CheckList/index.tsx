import React, {useState} from 'react';
import styles from './styles';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import BackButton from '../../components/BackButton';
import PageTitle from '../../components/PageTitle';
import Counter from '../../components/Counter';
import CheckListTabs from '../../components/CheckListTabs';

import {counterNum} from '../../components/CheckListTabs';

const CheckList: React.FC = () => {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <BackButton title={'Back'} />
      <View style={styles.innerContainer}>
        <View style={styles.title}>
          <PageTitle title={'Check Lists'} />
          <Counter count={counterNum} />
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder={'Add Item...'}
            value={text}
            onChangeText={onChangeText}
            placeholderTextColor="rgba(256,256,256,0.6)"
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => console.log('pressed')}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkListContainer}>
          <CheckListTabs />
        </View>
      </View>
    </View>
  );
};

export default CheckList;
