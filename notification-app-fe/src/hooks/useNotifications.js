import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications() {

const [notifications,setNotifications]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(null);

useEffect(()=>{

const load=async()=>{

try{

setLoading(true);

const data=await fetchNotifications();

const weights={
Placement:3,
Result:2,
Event:1
};

const top10=(data.notifications || [])
.sort((a,b)=>{

if(weights[a.Type]!==weights[b.Type]){

return weights[b.Type]
-
weights[a.Type];

}

return new Date(b.Timestamp)
-
new Date(a.Timestamp);

})
.slice(0,10);

setNotifications(top10);

}
catch(err){

console.log(err);
setError(err.message);

}
finally{

setLoading(false);

}

};

load();

},[]);

return{
notifications,
totalPages:1,
loading,
error
};

}