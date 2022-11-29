import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: 'AIzaSyBC6-hCA3vPZIGV4LRgvrjI5cvKfzBuPys',
    authDomain: 'rdhackaton.firebaseapp.com',
    projectId: 'rdhackaton',
    storageBucket: 'rdhackaton.appspot.com',
    messagingSenderId: '1085893779774',
    appId: '1:1085893779774:web:b886c59cdfdc705b0e4c6f',
    measurementId: 'G-4936VZJ31P',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
