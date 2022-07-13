import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-native';
import { Layout, Text, Divider, TopNavigation } from '@ui-kitten/components';

function CitiesScreen({ navigation }) {

    const cities = useSelector(store => store.citiesReducer.cities)

    return (
        <>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>Cities</Text>
            </Layout>
        </>
    )
}


export default CitiesScreen