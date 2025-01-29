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