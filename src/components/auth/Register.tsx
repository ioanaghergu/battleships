import React, { useState } from "react";
import styled from "styled-components/native";
import { Text} from "react-native";

const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    backgroundColor: #28282B;
`

const Email = styled.TextInput`
    width: 100%;
    height: 50px;
    border: 1px solid white;   
    margin-bottom: 10px;
    border-radius: 25px;
    text-align: center;
    backgroundColor: white;
`

const Password = styled.TextInput`
    width: 100%;
    height: 50px;
    border: 1px solid white;
    margin-bottom: 10px;
    border-radius: 25px;
    text-align: center;
    backgroundColor: white;
`

const Button = styled.TouchableOpacity`
    width: 40%;
    height: 45px;
    border: 1px solid white;
    background-color: #1a557d;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export interface ILogin {
    onSubmit: (email: string, password: string) => void
}

const Register: React.FC<ILogin> = ({onSubmit}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log(email, password);
        onSubmit(email, password);
    }
    


    return (
        <Container>
            <Email 
                keyboardType="email-address" 
                onChangeText={setEmail} 
                placeholder="Enter your email"
            />

            <Password 
                secureTextEntry 
                onChangeText={setPassword} 
                placeholder="Enter your password"
            />

            <Button onPress={handleSubmit}>
                <Text style={{color: 'white'}}>Register</Text>
            </Button>
            
        </Container>
    )
}

export default Register;