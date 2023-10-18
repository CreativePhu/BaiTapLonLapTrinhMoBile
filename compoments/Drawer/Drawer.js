import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import { MyFooter } from '../MyFooter';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="MyFooter"
                component={MyFooter}
                options={{
                    drawerItemStyle: { display: 'none' },
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    )
}