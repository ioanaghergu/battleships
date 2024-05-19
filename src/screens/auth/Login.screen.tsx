import { NavigationProp, useNavigation } from "@react-navigation/native"
import { login } from "../../api"
import Login from "../../components/auth/Login"
import { AuthRoutesNames } from "../../router/route-names"
import { useAuth } from "../../hooks/authContext"

const LoginScreen = () => {
    const navigation = useNavigation<any>()
    const handleGoToRegister =() => {
        navigation.navigate(AuthRoutesNames.REGISTER)
    }

    const auth = useAuth()
    return <Login onSubmit={auth.login} goToRegister={handleGoToRegister}/>
}

export default LoginScreen;