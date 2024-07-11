// // 1.Email Address
// // Expected pattern: [any characters]@[any characters].[2-4 letters]
// const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/;

// // 2.Phone Number
// // Expected pattern: [optional + or country code] [digits, possibly separated by dashes or spaces
// const phoneRegex = /^\+?[\d\s-]+$/;

// // 3.Password
// // Expected pattern: [at least 8 characters, including at least one uppercase letter, one lowercase 
// // letter, one digit, and one special character]
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=-*[\W_]).{8,}$/;

// // 4.URL
// // Expected pattern: [protocol]://[domain].[top-level domain]/[optional path]?[optional query 
// // string]#[optional fragment]
// const urlRegex = /^(https?:\/\/)?[\w.-]+\.[a-aZ-Z]{2,}(\/.*)?(\?.*)?(#.*)?$/;




// Email validation
const emailRegex = /[q-zA-Z]+@\w+\.(com|it|org|net)$/i;