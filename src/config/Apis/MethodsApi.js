import axios from "axios"
import { Alert } from "react-native";
import { SaveDataStorage } from "../Methods";


// HIJO DE CLASE PARA MAJERAR METODOS DE API 
const StorageChild = new SaveDataStorage();

const errorMessages = {
    400: "No se pudo ejecutar la peticion",
    401: "Campos invalidos",
    403: "Forbidden",
    404: "Usuario no encontrado",
    default: "Ha ocurrido un error",
}

/*
function showToastAlert(mensaje) {
    showMessage({
        message: mensaje,
        type: "success",
    });          
}*/

// METODOS PARA MANEJAR ERRORES DE API
export async function APIError(error) {
    if (error.response) {
        const message = errorMessages[error.response.status] || errorMessages.default
        
        //Alert.alert("Error", message);
        console.log("Error", message)
        return message
    } else if (error.request) {
        console.log("Error", "Ninguna respuesta fue recibida")
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message)
    }
}


// METODOS PARA MANEJAR DATOS DE USUARIO RESPECTO AL LOGIN
export async function dataLogin(keyUser) {
    await StorageChild.storeData("keyUser", keyUser);
}

export async function dataLogout(keyUser) {
    await StorageChild.removeData(keyUser);
}

export async function getItemData(keyUser) {
    const response = await StorageChild.getData(keyUser);
    //console.log("Ha salido de la sesion.", response);
    return response;
}

