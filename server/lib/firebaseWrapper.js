const { getFirestore, collection, query, where, onSnapshot, getDocs } = require('firebase/firestore');

const Wrapper = {
    getCollections: async (collectionName, whereCondition=[]) => {
        try {
            const db = getFirestore()
            let collections;
            collections = query(collection(db, collectionName));
            if (whereCondition.length > 0) {
                console.log(`[Firebase] getCollections:: with where command ${whereCondition.toString()}`);
                collections = query(collection(db, collectionName), where(whereCondition[0], whereCondition[1], whereCondition[2]));                
            }
            const snapshots = await getDocs(collections);
            const lists = snapshots.docs.map((doc) => {
                let docdatas = doc.data()
                return {
                    id: doc.id,
                    ...docdatas
                }
            });
            return lists;
        } catch (error) {
            console.error(error.stack)
            throw error.stack
        }
    }
}

module.exports = Wrapper