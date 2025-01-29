## Routes
All routes are managed in app.tsx
- / : EquipmentsPage;
- /bookings : BooksPage;
- /profile : Account;
- /login : LoginPage; 
- \*  : EquipmentsPage;

## Authentication Controll Page
### ProtectedPage
- Description: every time the route changes it checks if the token exists, and if it is different from an empty string. If it is 'true' it returns the child component (the protected one), if it is 'false' it sets the route to '/login'.