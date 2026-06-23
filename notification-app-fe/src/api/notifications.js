export async function fetchNotifications() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyYXBhcnRoaWJoYXZ5YWRlZXBpa2FyYW5pLjIzLmNzZUBhbml0cy5lZHUuaW4iLCJleHAiOjE3ODIxOTU2MTMsImlhdCI6MTc4MjE5NDcxMywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjgyMDg1NmYwLTI2ZWQtNGIwZS1hYWVmLTg4NzBlNDczYzk4OSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InJhcGFydGhpIGJoYXZ5YSBkZWVwaWthIHJhbmkiLCJzdWIiOiI5Nzg4N2UzYS03ZmYwLTRhZmMtYjhjZC1kNTdlOTg3YjRmOTgifSwiZW1haWwiOiJyYXBhcnRoaWJoYXZ5YWRlZXBpa2FyYW5pLjIzLmNzZUBhbml0cy5lZHUuaW4iLCJuYW1lIjoicmFwYXJ0aGkgYmhhdnlhIGRlZXBpa2EgcmFuaSIsInJvbGxObyI6ImEyMzEyNjUxMDIzOCIsImFjY2Vzc0NvZGUiOiJNVHF4YXIiLCJjbGllbnRJRCI6Ijk3ODg3ZTNhLTdmZjAtNGFmYy1iOGNkLWQ1N2U5ODdiNGY5OCIsImNsaWVudFNlY3JldCI6IlZ1amFUVW5QZWFFUW1XTm4ifQ.80uHflYO5D5Xj3fYBRmdzfSQVpa5_PkfG1F40bflpq8";

  const response = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  return await response.json();
}