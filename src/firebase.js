import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmxtX94kn3zEI4LaDQSfM3j6VkdHR7KuM",
    authDomain: "newproject-abe93.firebaseapp.com",
    databaseURL: "https://newproject-abe93.firebaseio.com",
    projectId: "newproject-abe93",
    storageBucket: "newproject-abe93.appspot.com",
    messagingSenderId: "104222094620"
}; 

app.initializeApp(config);

export default app;