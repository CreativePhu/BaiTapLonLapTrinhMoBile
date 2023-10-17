import { createDrawerNavigator } from '@react-navigation/drawer';
import { DoanChat } from './DoanChat/DoanChat';
import { CuocGoi } from './CuocGoi/CuocGoi';
import { DanhBa } from './DanhBa/DanhBa';
import { Tin } from './Tin/Tin';
const Drawer = createDrawerNavigator();

export function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={DoanChat} options={{ headerShown: false }} />
            <Drawer.Screen name="Feed1" component={CuocGoi} options={{ headerShown: false }} />
            <Drawer.Screen name="Feed2" component={DanhBa} options={{ headerShown: false }} />
            <Drawer.Screen name="Feed3" component={Tin} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}