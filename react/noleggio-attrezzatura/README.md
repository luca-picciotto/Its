# Documentation
Ddetailed project documentation

## Structure of project
  ```
  src/
  ├── components/ # Reusable components (e.g. modals, buttons, cards)
  ├── services/ # API calls and interactions with the backend
  ├── hooks/ # Custom hooks (e.g. state management or data fetch)
  ├── pages/ # Main app screens
  ├── types/ # Definition of TypeScript interfaces and types
  ├── App.tsx # Main entry point of the app
  └── index.tsx # Mount the React app in the DOM
  ```

## Services

### loginApi
- endpoint: https://d3660g9kardf5b.cloudfront.net/api/login ;
- method: POST;
- body: username, password;
- return: authentification token of error;

### registerApiPost
- endpoint: https://d3660g9kardf5b.cloudfront.net/api/register ;
- method: POST;
- body: username, password;
- return: 'User create' or error;

### equipmentApiGet
- endpoint: https://d3660g9kardf5b.cloudfront.net/api/equipment ;
- method: GET;
- return: list of equipment or error;

### bookingApiGet
- endpoint: https://d3660g9kardf5b.cloudfront.net/api/equipment-bookings ;
- method: GET;
- return: list of bookings or error;

### bookingApiPost 
- endpoint: https://d3660g9kardf5b.cloudfront.net/api/equipment/${id}/book ;
- method: POST;
- body: duration of booking;
- return: ok messagge or error;

## Hooks

### useLoginApi
- Called service: loginApi;
- login(userRequest): object it contains username and password; 
- Return: 
    - result: auth tokem;
    - error;
    - loading;
    - login: method that calls the API

### useRegisterApi
- Called service: registerApiPost:
- register(userRequest): object it contains username and password;
- Return: 
    - result: 'User Create';
    - error;
    - loading;
    - register: method that calls the API;

### useEquipmentApi
- Called service: equipmentApiGet;
- Return: 
    - result: equipment's list;
    - error;
    - loading;

### useBookingApi
- Called service: bookingApiGet;
- Return: 
    - result: booking's list;
    - error;
    - loading;

### useBookEquipmentApi
- Called service: bookingApiPost;
- bookEquipment(id, durationRequest, token);
- result: 
    - ok messagge;
    - error;
    - loading;
    - bookEquipment: method that calls the API;

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

## Custom Types

For each API we manage the typing of responses and sends (if it is POST) with custom types.
- UserRequest: 
    ```ts
    export interface UserRequest {
        username: string;
        password: string;
    }

    export default UserRequest;
    ```
- LoginResponce: 

    ```ts
    export interface LoginResponse {
        token: string ;
    }

    export default LoginResponse;   
    ```
- EquipmantBookingRequest: 

    ```ts
    export interface EquipmentBookingRequest {
	    duration: number;
    }

    export default EquipmentBookingRequest;        
    ```
 
- EquipmentModel:
   ```js
    export interface EquipmentModel {
        id: string ;
        name: string | undefined;
        claim: string | undefined;
        image: string | undefined;
        icon: string | undefined;
        pricePerMinute: number | undefined;
    }
    export default EquipmentModel;
   ```
- BookingModel: 
    ```js
    export interface BookingModel {
        id: number ;
        equipment_id: number | null;
        start_date: string | null;
        end_date: string | null;
        
    }

    export default BookingModel;
    ```