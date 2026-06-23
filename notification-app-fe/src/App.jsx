import {BrowserRouter,Routes,Route} from "react-router-dom";

import {NotificationsPage} from "./pages/NotificationsPage";
import {PriorityNotificationsPage} from "./pages/PriorityNotificationsPage";

export default function App(){

return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<NotificationsPage/>}
/>

<Route
path="/priority"
element={<PriorityNotificationsPage/>}
/>

</Routes>

</BrowserRouter>

);

}