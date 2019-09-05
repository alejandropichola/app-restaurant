import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';

const SearchBarComponent = ({searchVal, onSearchChange, onSearchSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name="search"
                style={styles.icon}
                size={30} />
            <TextInput
                style={styles.inputStyle}
                placeholder="Buscar"
                value={searchVal}
                onChangeText={onSearchChange}
                onEndEditing={onSearchSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBarComponent