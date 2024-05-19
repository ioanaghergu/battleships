import React from 'react';
import { Pressable, View } from 'react-native';
import { useAuth } from '../../hooks/authContext';
import { createGame } from '../../api';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GameRouteNames } from '../../router/route-names';
import { Image, StyleSheet, Text } from 'react-native';


type MenuProps = NativeStackScreenProps<any, typeof GameRouteNames.MENU>;

const Menu: React.FC<MenuProps> = ({ navigation }) => {
  const auth = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../images/pirate-ship.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.column}>
          <Pressable style={styles.button} onPress={async() => {
            await createGame(auth.token);
          }}>
            <Text style={styles.buttonText}>{"Create Game"}</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => {
            navigation.navigate(GameRouteNames.LOBBY);
          }}>
            <Text style={styles.buttonText}>{"Lobby"}</Text>
          </Pressable>

        </View>

        <View style={styles.column}>
          <Pressable style={styles.button} onPress={() => {
            navigation.navigate(GameRouteNames.ACCOUNT);
          }}>
            <Text style={styles.buttonText}>{"Account"}</Text>
          </Pressable>

          <Pressable style={styles.button2} onPress={auth.logout}>
            <Text style={styles.buttonText}>{"Log out"}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D2B36'
  },
  imageContainer: {
  },
  image: {
    width: 250,
    height: 250,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  column: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 150, 
    height: 50, 
    backgroundColor: '#CEDCEF',
    borderWidth: 2,
    borderColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
  },

  button2: {
    width: 150, 
    height: 50, 
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20
  },

  buttonText: {
    color: '#193153',
    fontSize: 16,
  },
});

export default Menu;