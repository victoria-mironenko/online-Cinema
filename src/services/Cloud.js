import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "online-cinema-52ff2.firebaseapp.com",
      projectId: "online-cinema-52ff2",
      storageBucket: "online-cinema-52ff2.appspot.com",
      messagingSenderId: "284171025466",
      appId: process.env.APP_ID,
      measurementId: "G-8H50WMGL3R",
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
