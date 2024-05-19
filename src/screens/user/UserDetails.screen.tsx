import React, { useEffect, useState } from "react"
import { useAuth } from "../../hooks/authContext";
import { getUserEmail, getUserId } from "../../api";
import { View, StyleSheet, Text } from "react-native";
import styled from "styled-components";

const UserDetails = () => {
    const [email, setEmail] = useState('');
    const [id, setId] = useState(0);

    const auth = useAuth();

    useEffect(() => {
        getUserEmail(auth.token).then(email => {
            console.log("User email", email);
            setEmail(email);
        })
        .catch(error => {
            console.log(error);
        });
    });

    useEffect(() => {
        getUserId(auth.token).then(id => {
            console.log("User id", id);
            setId(id);
        })
        .catch(error => {
            console.log(error);
        });
    });

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email: {email}</Text>
        </View>
    );

    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#28282B',
        alignContent:'center'
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
        alignContent: 'center',
        justifyContent:'center'
      },
      

});

export default UserDetails;