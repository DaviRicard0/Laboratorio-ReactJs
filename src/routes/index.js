import { DateCurrent } from "../pages/dateCurrent";
import { Sign } from "../pages/sign";

export function Routes({route}){
    switch (route) {
        case 'date-current':
            return <DateCurrent/>;
        case 'sign':
            return <Sign/>;
        default:
            return <h1>404</h1>;
    }
}