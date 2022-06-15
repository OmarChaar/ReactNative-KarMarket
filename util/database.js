import * as SQLite from 'expo-sqlite';
import Item from '../models/item';

const database = SQLite.openDatabase('items.db');

// Sets up database structure
export function init() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS items (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    image TEXT NOT NULL,
                    address TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL
                )`,
                [],
                () => {
                    resolve();
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
   
    return promise;
}

export function insert(item) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO items (title, image, address, lat, lng) VALUES (?, ?, ?, ?, ?)`, 
                [item.title, item.image, item.address, item.location.lat, item.location.lng],
                (_, result) => {
                    resolve(result);
                },
                (_, error) => {
                    reject(error);
                }
            );
        })
    });

    return promise;
}

export function fetch() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM items`, 
                [],
                (_, result) => {
                    const items = [];
                    for(const dp of result.rows._array) {
                        items.push(
                            new Item(
                                dp.title, 
                                dp.image, 
                                {
                                    address: dp.address,
                                    lat: dp.lat, 
                                    lng: dp.lng,
                                },
                                dp.id
                            )
                        );
                    }
                    resolve(items);
                },
                (_, error) => {
                    reject(error);
                }
            );
        })
    });

    return promise;
}

export function fetchItem(id) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM items WHERE id = ?`, 
                [id],
                (_, result) => {
                    const fetched = result.rows._array[0];
                    const item = new Item(
                        fetched.title, 
                        fetched.image, 
                        {
                            address: fetched.address, 
                            lat: fetched.lat,
                            lng: fetched.lng
                        },
                        fetched.id
                    );
                    resolve(item);
                },
                (_, error) => {
                    reject(error);
                }
            );
        })
    });

    return promise;
}