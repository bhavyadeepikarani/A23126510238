import {
Alert,
Badge,
Box,
CircularProgress,
Divider,
Stack,
Typography
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

import { NotificationCard } from "../components/NotificationCard";
import { NotificationFilter } from "../components/NotificationFilter";
import { useNotifications } from "../hooks/useNotifications";

export function NotificationsPage(){

const [filter,setFilter]=useState("All");

const {
notifications,
loading,
error
}=useNotifications();

const filteredNotifications =
filter==="All"
? notifications
: notifications.filter(
(item)=>item.Type===filter
);

return(

<Box sx={{maxWidth:720,mx:"auto",p:4}}>

<Stack direction="row" spacing={2}>
<Badge
badgeContent={filteredNotifications.length}
color="primary"
>
<NotificationsIcon/>
</Badge>

<Typography variant="h5">
Notifications
</Typography>

</Stack>

<Divider sx={{my:3}}/>

<Box sx={{mb:3}}>

<NotificationFilter
value={filter}
onChange={(e,newValue)=>{
if(newValue){
setFilter(newValue);
}
}}
/>

</Box>

{loading && (
<Box textAlign="center">
<CircularProgress/>
</Box>
)}

{error && (
<Alert severity="error">
{error}
</Alert>
)}

{!loading && filteredNotifications.length===0 && (
<Alert severity="info">
No notifications found
</Alert>
)}

{!loading && filteredNotifications.length>0 && (

<Stack spacing={2}>

{filteredNotifications.map((n)=>(

<NotificationCard
key={n.ID}
notification={n}
/>

))}

</Stack>

)}

</Box>

);

}