import { Box, Stack, Typography } from "@mui/material";
import { useNotifications } from "../hooks/useNotifications";
import { NotificationCard } from "../components/NotificationCard";

export function PriorityNotificationsPage(){

const {notifications}=useNotifications();

const priority=notifications.slice(0,10);

return(
<Box sx={{maxWidth:720,mx:"auto",p:4}}>

<Typography variant="h5" mb={3}>
Priority Notifications
</Typography>

<Stack spacing={2}>
{priority.map((n)=>(
<NotificationCard
key={n.ID}
notification={n}
/>
))}
</Stack>

</Box>
);
}