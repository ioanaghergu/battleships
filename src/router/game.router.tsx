import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameRouteNames } from './route-names';
import { Text } from 'react-native'
import LobbyScreen from '../screens/game/Lobby.screen';
import TableScreen from '../screens/game/Table.screen';
import Menu from '../screens/game/Menu';
import userDetails from '../screens/user/UserDetails.screen';

const GameStack = createNativeStackNavigator()

const gameRoutes = (
    <GameStack.Navigator>
        <GameStack.Screen name={GameRouteNames.MENU} component={Menu}></GameStack.Screen> 
        <GameStack.Screen name={GameRouteNames.ACCOUNT} component={userDetails}></GameStack.Screen>
        <GameStack.Screen name={GameRouteNames.LOBBY} component={LobbyScreen} options={{
            header: () => null,
        }}/>
        <GameStack.Screen name={GameRouteNames.TABLE} component={TableScreen} options={{
            headerTitle: (props) => <Text {...props}>Game</Text>
        }}/>
    </GameStack.Navigator>
)

export default gameRoutes;