import React from   'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {CHOICES} from '../constants';

function ButtonGroup(props){
    return CHOICES.map( item => {
        return(
        <TouchableOpacity             
            key={item.name}
            style = {styles.button}
            onPress={() => props.onPressButton(item.name)} >
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
        );
    });
}
const styles = StyleSheet.create({
    itemText: {
        width: 100,
        height: 40,
        backgroundColor: '#89F0E9',
        borderRadius: 10,
        marginTop: 10,
        fontWeight: '300',
        fontSize: 25,
    },
    button: {
        flexDirection: 'row'
    }
})

export default ButtonGroup;