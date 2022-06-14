import { useCallback, useLayoutEffect, useState } from 'react';

import AddPlaceForm from "../components/Items/AddPlaceForm";

function AddPlace({navigation}) {
 
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new Place',
            headerTitleAlign: 'left',
            headerBackTitleVisible: false,
        })
    }, [navigation]);

    function createItemHandler(item) {
        navigation.navigate('Home', {item: item})
    }

    return (
        <AddPlaceForm onCreate={createItemHandler}/>
    )
}

export default AddPlace;
