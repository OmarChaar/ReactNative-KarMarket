import { useCallback, useLayoutEffect, useState } from 'react';

import AddPlaceForm from "../components/UX/AddPlaceForm";
import { insert } from '../util/database';

function AddPlace({navigation}) {
 
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new Place',
            headerTitleAlign: 'left',
            headerBackTitleVisible: false,
        })
    }, [navigation]);

    async function createItemHandler(item) {
        await insert(item);
        navigation.navigate('Home')
    }

    return (
        <AddPlaceForm onCreate={createItemHandler}/>
    )
}

export default AddPlace;
