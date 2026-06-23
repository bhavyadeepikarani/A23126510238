import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const filters = ["All", "Placement", "Result", "Event"];

export function NotificationFilter({ value, onChange }) {

return (

<ToggleButtonGroup
value={value}
exclusive
onChange={onChange}
size="small"
sx={{
display:"flex",
gap:1,
flexWrap:"wrap"
}}
>

{filters.map((type)=>(

<ToggleButton
key={type}
value={type}
sx={{
textTransform:"none"
}}
>
{type}
</ToggleButton>

))}

</ToggleButtonGroup>

);

}