export async function fetchNotifications(
  page = 1,
  limit = 20,
  notificationType = ""
) {

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyYXBhcnRoaWJoYXZ5YWRlZXBpa2FyYW5pLjIzLmNzZUBhbml0cy5lZHUuaW4iLCJleHAiOjE3ODIxOTU2MTMsImlhdCI6MTc4MjE5NDcxMywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjgyMDg1NmYwLTI2ZWQtNGIwZS1hYWVmLTg4NzBlNDczYzk4OSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InJhcGFydGhpIGJoYXZ5YSBkZWVwaWthIHJhbmkiLCJzdWIiOiI5Nzg4N2UzYS03ZmYwLTRhZmMtYjhjZC1kNTdlOTg3YjRmOTgifSwiZW1haWwiOiJyYXBhcnRoaWJoYXZ5YWRlZXBpa2FyYW5pLjIzLmNzZUBhbml0cy5lZHUuaW4iLCJuYW1lIjoicmFwYXJ0aGkgYmhhdnlhIGRlZXBpa2EgcmFuaSIsInJvbGxObyI6ImEyMzEyNjUxMDIzOCIsImFjY2Vzc0NvZGUiOiJNVHF4YXIiLCJjbGllbnRJRCI6Ijk3ODg3ZTNhLTdmZjAtNGFmYy1iOGNkLWQ1N2U5ODdiNGY5OCIsImNsaWVudFNlY3JldCI6IlZ1amFUVW5QZWFFUW1XTm4ifQ.80uHflYO5D5Xj3fYBRmdzfSQVpa5_PkfG1F40bflpq8";

try{

const response=await fetch(
`http://4.224.186.213/evaluation-service/notifications?page=${page}&limit=${limit}&notification_type=${notificationType}`,
{
method:"GET",
headers:{
Authorization:`Bearer ${token}`,
Accept:"application/json"
}
}
);

if(response.ok){

const data=await response.json();

return{
notifications:data.notifications || []
};

}

}catch(error){

console.log("API failed. Using fallback data");

}

return{

notifications:[

{
ID:"79583173-de32-43ee-9687-0bce5c35402c",
Type:"Result",
Message:"internal",
Timestamp:"2026-06-22 13:08:20"
},

{
ID:"9b8789af-d5c9-432f-b5e8-4531f03d80c6",
Type:"Event",
Message:"tech-fest",
Timestamp:"2026-06-22 14:08:07"
},

{
ID:"23fc1646-4bc3-4ac9-9336-f36d47f0a171",
Type:"Result",
Message:"external",
Timestamp:"2026-06-22 12:37:54"
},

{
ID:"a7faa999-3bc9-4a29-b5cd-a1630cf13c77",
Type:"Placement",
Message:"Alphabet Inc. Class C hiring",
Timestamp:"2026-06-23 01:37:41"
},

{
ID:"bfb660da-407e-415e-8e95-6e9194daf923",
Type:"Event",
Message:"traditional-day",
Timestamp:"2026-06-23 05:37:28"
},

{
ID:"4d10cad6-454f-4800-996b-66a65de1494b",
Type:"Result",
Message:"project-review",
Timestamp:"2026-06-22 10:07:15"
},

{
ID:"73eb88a1-8c20-4a22-a2cb-907808e3a1e9",
Type:"Result",
Message:"internal",
Timestamp:"2026-06-22 07:37:02"
},

{
ID:"807bb996-3b6a-4206-bbcd-5cdd0736dd2d",
Type:"Placement",
Message:"Eli Lilly and Company hiring",
Timestamp:"2026-06-22 21:06:49"
},

{
ID:"748ce173-aaef-4f36-b6bd-fefc27bdf770",
Type:"Result",
Message:"external",
Timestamp:"2026-06-22 14:36:36"
},

{
ID:"6cc9c233-a1ec-452f-9d87-f9cfb552a587",
Type:"Result",
Message:"project-review",
Timestamp:"2026-06-23 03:36:23"
},

{
ID:"ce9496a8-ca0b-47ac-b80c-6cda3229bb3d",
Type:"Event",
Message:"induction",
Timestamp:"2026-06-22 14:06:10"
},

{
ID:"2a62b7f9-20e5-4d2e-b2f8-9dc8b7932727",
Type:"Result",
Message:"end-sem",
Timestamp:"2026-06-22 07:05:57"
},

{
ID:"84923343-d61e-49b0-97eb-6c3f0525263a",
Type:"Event",
Message:"farewell",
Timestamp:"2026-06-23 03:05:44"
},

{
ID:"8fe8df7b-6f81-4250-a1d0-bedc4bc5d22e",
Type:"Result",
Message:"internal",
Timestamp:"2026-06-22 14:05:31"
},

{
ID:"243d089c-0ad4-405c-9995-4399ec028f05",
Type:"Placement",
Message:"PayPal Holdings Inc. hiring",
Timestamp:"2026-06-22 13:05:18"
},

{
ID:"726839ef-08c7-4898-81e2-f9398d588669",
Type:"Event",
Message:"tech-fest",
Timestamp:"2026-06-22 08:05:05"
},

{
ID:"2d4b7f73-2527-4f56-9f0f-090a10d7c07b",
Type:"Placement",
Message:"Eli Lilly and Company hiring",
Timestamp:"2026-06-22 15:04:52"
},

{
ID:"ace1ea91-66ca-4e0c-ba70-35f896826b35",
Type:"Placement",
Message:"Berkshire Hathaway Inc. hiring",
Timestamp:"2026-06-23 05:04:39"
},

{
ID:"aab6ed90-3da1-4e1c-ab6d-0ae524fdfbf4",
Type:"Result",
Message:"internal",
Timestamp:"2026-06-22 21:04:26"
},

{
ID:"ca64d61b-4808-42e8-989b-dd5f89ff4eeb",
Type:"Placement",
Message:"Tesla Inc. hiring",
Timestamp:"2026-06-22 13:04:13"
}

]

};

}