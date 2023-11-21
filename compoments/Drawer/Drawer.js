import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import { MyFooter } from '../MyFooter';
import { FormLogin } from '../FormLogin';

const Drawer = createDrawerNavigator();
export const ThemeContext = React.createContext();

export function MyDrawer() {

    const [myUser, setMyUser] = React.useState({})

    return (
        <ThemeContext.Provider value={{ myUser: myUser, setMyUser }}>
            <Drawer.Navigator
                drawerContent={(props) => <DrawerContent {...props} />}
                initialRouteName='FormLogin'
            >
                <Drawer.Screen
                    name="FormLogin"
                    component={FormLogin}
                    options={{
                        drawerItemStyle: { display: 'none' },
                        headerShown: false,
                    }}
                />
                <Drawer.Screen
                    name="MyFooter"
                    component={MyFooter}
                    options={{
                        drawerItemStyle: { display: 'none' },
                        headerShown: false,
                    }}
                />
            </Drawer.Navigator>
        </ThemeContext.Provider>
    )
}