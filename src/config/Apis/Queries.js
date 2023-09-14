import { View, Text, Alert } from "react-native"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { APIError } from "./MethodsApi"


export async function qYPWLogin(username, password, appConnect) {
    const axios = require('axios').default;
    
    const config = {
        method: 'POST',
        url: "https://account.ypw.com.do/api/v1/account/login", 
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            username: username,
            password: password,
            appConnect: appConnect
        }
    };
    
    try {
        const response = await axios(config)

        if (response.status === 200) {
            console.log("Datos login", response.data.message);
        }

    } catch (error) {
        APIError(error);
    }
};



//Funcion para LOGIN
async function qYPWCerrarSession(appConnect, keyUser) {
    const axios = require('axios').default;

    
    const config = {
        method: 'POST',
        url: "https://account.ypw.com.do/api/v1/account/logout", 
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            appConnect: appConnect,
            keyUser: keyUser,
        }
    };
    
    try {
        const response = await axios(config)

        if (response.status === 200) {
            console.log("Datos login", response.data.message);
            showToastAlert("Inicio de sesion correctamente")
            navigation.replace("Dashboard")
        }

    } catch (error) {
        APIError(error);
    }
};


export async function qPosts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
    
    return (
        <View>
            {loading ? <Text>Loading...</Text> : (
                data.map((post, index) => (
                    <View key={index}>
                        <Text>{post.title}</Text>
                          <Text>{post.body}</Text>
                    </View>
                ))
                )}
        </View>
    )
};


export async function qConsultarUsers() {
    const axios = require('axios').default;
    
    const config = {
        method: 'GET',
        url: "https://randomuser.me/api/?results=10", 
        headers: {
            'Content-Type': 'application/json'
        },
    };
    
    await axios(config)
        .then(function (response) {
            // handle success
            Alert.alert("Clima", JSON.stringify(response.data.results[0]));
        })
        .catch(function (error) {
            // handle error
            Alert.alert("Error", error);
        })
};