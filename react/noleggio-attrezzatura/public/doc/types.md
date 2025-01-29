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