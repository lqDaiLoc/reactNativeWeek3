import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {CHOICES} from '../constants';

function PlayerChoice(props){
    return(
        <View style={styles.location}>
            <Text>Player: {props.namePlayer}</Text>
            <Image
                source = {{
                    uri : props.playerChoiceeeeee.uri
                }}
                resizeMode="contain"
                style={styles.choiceImage}
            />
            <Text>{props.playerChoiceeeeee.name}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    location: {
        justifyContent: 'center',
        alignItems: "center",
        margin : 20
        
    },
    choiceImage: {
        width: 100, 
        height: 100,
    }
})
export default PlayerChoice;