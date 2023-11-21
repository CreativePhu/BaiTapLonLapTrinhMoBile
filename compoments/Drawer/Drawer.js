import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import { MyFooter } from '../MyFooter';
import { FormLogin } from '../FormLogin';
import { FormRegis } from '../../FormRegis';

const Drawer = createDrawerNavigator();
export const ThemeContext = React.createContext();

export function MyDrawer() {

    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            initialRouteName='FormLogin'
        >
            <Drawer.Screen
                name="MyFooter"
                component={MyFooter}
                options={{
                    drawerItemStyle: { display: 'none' },
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="FormLogin"
                component={FormLogin}
                options={{
                    drawerItemStyle: { display: 'none' },
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="FormRegis"
                component={FormRegis}
                options={{
                    drawerItemStyle: { display: 'none' },
                    headerShown: true,
                }}
            />
        </Drawer.Navigator>
    )
}