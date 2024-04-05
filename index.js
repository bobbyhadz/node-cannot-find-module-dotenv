// Cannot find module 'dotenv' error in Node.js

// Make sure to create your .env file and add it to .gitignore
import 'dotenv/config';

console.log(process.env.DB_USER); // 👉️ "james_doe"
console.log(process.env.ENV); // 👉️ "dev"
console.log(process.env.DB_PORT); // 👉️ "1234"
