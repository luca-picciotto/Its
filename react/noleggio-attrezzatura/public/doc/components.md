## Components

### Login
- Description: login and register forms component;
- Form login 
    - onSubmit: call login({username, password});
- Form register: 
    - onSubmit: call register({username, password});

### EquipmentList
- Description: for each equipment contained in result it generates an equipment component;

### Equipment
- Description: component that shows equipment information;
- Actions: shows a modal where you can enter the duration of the booking, calculating the estimated price;
- Modal onClick: bookEquipment(id, duration, token); 

### BookList
- Description: for each equipment contained in result it generates an booking component;

### Book 
- Description: component that shows booking information;

### Navbar
- Description: Internal navigation menu using routes.
- Link: 
    - / -> equipments page;
    - /profile -> user area;
    - /bookings -> bookings page;