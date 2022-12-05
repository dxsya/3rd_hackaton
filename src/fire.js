import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBZAWeNfdn8XsdX1YpJV0Mx0uTm5n1qi2E',
    authDomain: 'hackaton-4693f.firebaseapp.com',
    projectId: 'hackaton-4693f',
    storageBucket: 'hackaton-4693f.appspot.com',
    messagingSenderId: '325717234822',
    appId: '1:325717234822:web:de84520758aaa30ab46d07',
    measurementId: 'G-RY0V3KE0TB',
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
