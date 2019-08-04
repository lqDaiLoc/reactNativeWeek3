import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ButtonGroup, PlayerChoice} from './components';
import {CHOICES} from './constants';
import { getRoundOutcome, randomComputerChoise, countGame } from './utility';

//////////////////////////////////////////////////////////////////////////////////
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerChoice: {},
      computerChoice: {},
      result : '',
      countPlay : 0,
      countWin: 0,
      countLoser: 0,
      countTie : 0,
      percentageWin: '',
      percentageLoser: '',
      percentageTie: '',
    }
  }
  onPressButtonn = (choiceOfPlayer) => {
    const found = CHOICES.find(item => item.name === choiceOfPlayer);
    const computer = randomComputerChoise();
    const resultText = getRoundOutcome(found.name, computer.name);
    const [countPlay1, countWin1, countLoser1, countTie1 ] = countGame (resultText, 0, 0, 0, 0);
    
    //this.setState({
      //playerChoice : found,
      //computerChoice : computer,
     // result : resultText,
      //countPlay : this.state.countPlay + countPlay1,
      //countWin: this.state.countWin + countWin1,
      //countLoser: this.state.countLoser + countLoser1,
      //countTie: this.state.countPlay - this.state.countWin - this.state.countLoser,
      //countTie: this.state.countTie + countTie1,

    //})
    this.setState((state, props) => ({
      playerChoice : found,
      computerChoice : computer,
      result : resultText,
      countPlay : state.countPlay + countPlay1,
      countWin: state.countWin + countWin1,
      countLoser: state.countLoser + countLoser1,
      //countTie: this.state.countPlay - this.state.countWin - this.state.countLoser,
      countTie: state.countTie + countTie1,
      
      percentageWin: state.countWin * 100 / state.countPlay,
    }));
    this.setState(function(state, props) {
      return {
        percentageWin: state.countWin * 100 / state.countPlay,
        percentageLoser: state.countLoser * 100 / state.countPlay,
        percentageTie: state.countTie * 100 / state.countPlay,
      };
    });
  }
  render(){
  return (
    <View style={styles.container}>
    <View style={styles.headerWrapper}>
      <Text style={styles.resuflText}>{this.state.result}</Text>
    </View>
    <View style={styles.playerWrapper}>
        <PlayerChoice namePlayer = "Loc" 
        playerChoiceeeeee = {this.state.playerChoice} />
        <PlayerChoice namePlayer = "Computer" 
        playerChoiceeeeee = {this.state.computerChoice} />
    </View>
    <View style={styles.chooseWrapper}>
      <View style={styles.option}>
        <Text>Số lần Chơi: {this.state.countPlay} </Text>
        <Text>Số lần thắng: {this.state.countWin} ( {this.state.percentageWin} % )</Text>
        <Text>Số lần thua: {this.state.countLoser} ( {this.state.percentageLoser} % )</Text>
        <Text>Số lần hòa: {this.state.countTie} ( {this.state.percentageTie} % )</Text>
      </View>
      <View style={styles.itemButtonGroup}>
        <ButtonGroup onPressButton = {this.onPressButtonn}/>
      </View>
    </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerWrapper:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: 'center',
  },
  resuflText: {
    fontWeight: "300",
    fontSize: 30,
  },
  playerWrapper: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemButtonGroup: {
    flex : 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  option: {
    flex : 0.5,
  },
});
