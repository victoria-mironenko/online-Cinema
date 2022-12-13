import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "online-cinema-3ace5.firebaseapp.com",
      projectId: "online-cinema-3ace5",
      storageBucket: "online-cinema-3ace5.appspot.com",
      messagingSenderId: "626397831515",
      appId: process.env.APP_ID
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
