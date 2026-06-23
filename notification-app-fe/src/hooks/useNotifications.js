import {useEffect,useState} from "react";
import {fetchNotifications} from "../api/notifications";

export function useNotifications(){

const [notifications,setNotifications]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState("");

useEffect(()=>{

const loadData=async()=>{

try{

setLoading(true);

const data=await fetchNotifications(
1,
20,
""
);

setNotifications(data.notifications);

}catch(error){

setError("Failed to fetch");

}

setLoading(false);

};

loadData();

},[]);

return{
notifications,
loading,
error
};

}