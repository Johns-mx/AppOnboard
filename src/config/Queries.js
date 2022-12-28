import { View, Text, Alert } from "react-native"
import React, { useState, useEffect } from "react"
import axios from "axios"


export const qGetSections = async (appConnect, keyUser) => {
    console.log("Loading sections...");
    const response = await axios.post("https://account.ypw.com.do/api/v1/account/getSections", {
        appConnect: appConnect,
        keyUser: keyUser
    });

    if (!response.statusText) {
        console.log("Error code: 401");
    }
    
    Alert.alert("Sections", response.status);
}



export async function qYPWSections(appConnect, keyUser) {
    const axios = require('axios').default;
    
    const config = {
        method: 'POST',
        url: "https://account.ypw.com.do/api/v1/account/getSections", 
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            appConnect: appConnect,
            keyUser: keyUser
        }
    };
    
    try {
        const response = await axios(config)

        if (response.status === 200) {
            console.log("Datos login", response.data.message);
            Alert.alert("Secciones", response.data.results);
        }

    } catch (error) { 
        //400: la operación no fue completada, error.
        if (error.response.status === 400) {
            console.log("Error code: 400");
        }
        //401: 
        if (error.response.status === 401) {
            console.log("Error code: 401");
        }
    }
};


class HandleStatusCode {
    constructor(error) {
        this.error = error;
    }
}


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