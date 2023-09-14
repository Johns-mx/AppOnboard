import AsyncStorage from '@react-native-async-storage/async-storage';

// CLASE PARA GUARDAR Y OBTENER LA DATA EN EL ASYNC STORAGE
export class SaveDataStorage {

    async storeData(key, value) {
        try {2
            await AsyncStorage.setItem('@'+key, value)
        } catch (e) {
          // saving error
        }
    }

    async removeData(key) {
        try {
            await AsyncStorage.removeItem('@'+key)
        } catch (e) {
          // saving error
        }
    }

    async storeDataObject(key, value) {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@'+key, jsonValue)
        } catch (e) {
            // saving error
        }
    }

    async getData(key) {
        try {
            const value = await AsyncStorage.getItem('@'+key)
            if(value !== null) {
                return value;
            }
        } catch(e) {
          // error: sesion no iniciada/ no encontrada
        }
    }

    async getDataObject(key) {
        try {
            const jsonValue = await AsyncStorage.getItem('@'+key)
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          // error reading value
        }
    }

}
