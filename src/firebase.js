import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBBi5WoGeWq_e12WL5w5v1krd44Mjxdq94',
  authDomain: 'firemovies-b14e4.firebaseapp.com',
  projectId: 'firemovies-b14e4',
  storageBucket: 'firemovies-b14e4.appspot.com',
  messagingSenderId: '746555005508',
  appId: '1:746555005508:web:97b97e50f9e53236e63a11',
  measurementId: 'G-93STLWP1NW',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
