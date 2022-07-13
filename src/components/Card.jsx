import { useEffect } from 'react';

import cardStyles from '../styles/cardStyles';

function Card({ city }) {


    return (
        <>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>Cities</Text>
            </Layout>
        </>
    )
}


export default Card