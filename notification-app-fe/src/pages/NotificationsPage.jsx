import {
  Alert,
  Badge,
  Box,
  CircularProgress,
  Divider,
  Stack,
  Typography,
  Pagination
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

import { NotificationCard } from "../components/NotificationCard";
import { NotificationFilter } from "../components/NotificationFilter";
import { useNotifications } from "../hooks/useNotifications";

import { useState } from "react";

export function NotificationsPage() {

const [filter,setFilter]=useState("All");
const [page,setPage]=useState(1);

const {
notifications,
loading,
error
}=useNotifications();

const filteredNotifications=
filter==="All"
? notifications
: notifications.filter(
(item)=>item.Type===filter
);

return(

<Box sx={{
maxWidth:720,
mx:"auto",
p:4
}}>

<Stack
direction="row"
spacing={2}
alignItems="center"
>

<Badge
badgeContent={notifications.length}
color="primary"
>
<NotificationsIcon/>
</Badge>

<Typography
variant="h5"
fontWeight={700}
>
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

<Box
textAlign="center"
py={4}
>

<CircularProgress/>

</Box>

)}

{error && (

<Alert severity="error">

{error}

</Alert>

)}

{!loading &&
!error &&
filteredNotifications.length===0 && (

<Alert severity="info">

No notifications found

</Alert>

)}

{!loading &&
!error &&
filteredNotifications.length>0 && (

<Stack spacing={2}>

{filteredNotifications.map((n)=>(

<NotificationCard
key={n.ID}
notification={n}
/>

))}

</Stack>

)}

<Box
display="flex"
justifyContent="center"
mt={4}
>

<Pagination
count={1}
page={page}
onChange={(e,value)=>
setPage(value)
}
/>

</Box>

</Box>

);

}