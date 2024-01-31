// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAz1krtLlm23H8kanoCcubWtNjJPQk02Jk',
  authDomain: 'donbosco-app.firebaseapp.com',
  projectId: 'donbosco-app',
  storageBucket: 'donbosco-app.appspot.com',
  messagingSenderId: '397253393450',
  appId: '1:397253393450:web:b1a23b625d84e26e759753',
  measurementId: 'G-2TWX73L0ZM',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
