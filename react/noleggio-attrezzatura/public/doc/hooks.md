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