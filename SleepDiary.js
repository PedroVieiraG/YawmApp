import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


const SleepScreen = ({navigation}) => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  const handleStartTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || startTime;
    setShowStartTimePicker(false);
    setStartTime(currentTime);
  };

  const handleEndTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || endTime;
    setShowEndTimePicker(false);  
    setEndTime(currentTime);
  };

  return (
    <View style={styles.container}>
      <Text onPress={()=> navigation.navigate('SleepScreen')} style={{ fontSize: 26, fontWeight: 'bold', color:'#777'}}></Text>
      <Text style={styles.title}>Diário de Sono</Text>
      <View style={styles.lines}>
        <Text style={styles.timeText}>Hora de dormir: </Text>
        <Button color='#7b68ee' title={moment(startTime).format('h:mm A')} onPress={() => setShowStartTimePicker(true)} />
        {showStartTimePicker && (
          <DateTimePicker value={startTime} mode="time" is24Hour={false} display="default" onChange={handleStartTimeChange} />
        )}
      </View>
      <View style={styles.lines}>
        <Text style={styles.timeText}>Hora que acordei: </Text>
        <Button color='#7b68ee' title={moment(endTime).format('h:mm A')} onPress={() => setShowEndTimePicker(true)} />
        {showEndTimePicker && (
          <DateTimePicker value={endTime} mode="time" is24Hour={false} display="default" onChange={handleEndTimeChange} />
        )}
      </View>
      <Text style={styles.timeText}>Tempo de descanso: {moment.duration(moment(endTime).diff(moment(startTime))).asHours().toFixed(2)} horas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#373737',
  },
  
  buttonColoror:{
    color: '#7b68ee',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#b0c4de',
  },
  lines: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#b0c4de',
  },
});

export default SleepScreen;