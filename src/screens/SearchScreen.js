import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBarComponent from './../components/SearchBarComponent'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
const SearchScreen = () => {
    const [search, setSearch] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <View style={{flex: 1}}>
            <SearchBarComponent
                searchVal={search}
                onSearchChange={setSearch}
                onSearchSubmit={() => searchApi(search)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                results={filterResultsByPrice('$')} title={"prueba 1"} />
                <ResultsList 
                results={filterResultsByPrice('$$')} title={"prueba 2"} />
                <ResultsList 
                results={filterResultsByPrice('$$$')} title={"prueba 3"} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen