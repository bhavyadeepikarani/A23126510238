import {
Card,
CardContent,
Typography
} from "@mui/material";

export function NotificationCard({
notification
}){

const viewed=
localStorage.getItem(
notification.ID
);

const handleClick=()=>{

localStorage.setItem(
notification.ID,
"true"
);

window.location.reload();

};

return(

<Card
onClick={handleClick}
sx={{
cursor:"pointer",
mb:2,
backgroundColor:
viewed
? "#f5f5f5"
: "#e3f2fd"
}}
>

<CardContent>

<Typography variant="h6">
{notification.Type}
</Typography>

<Typography>
{notification.Message}
</Typography>

<Typography variant="body2">
{notification.Timestamp}
</Typography>

</CardContent>

</Card>

);

}