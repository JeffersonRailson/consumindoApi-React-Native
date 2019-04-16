import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import principal from './paginas/principal';
import detalhes from './paginas/detalhes'


const Routes = createAppContainer(
    createSwitchNavigator({
        principal,
        detalhes,
    }),
);
export default Routes;