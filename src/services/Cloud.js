import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "online-cinema-fb342.firebaseapp.com",
      projectId: "online-cinema-fb342",
      storageBucket: "online-cinema-fb342.appspot.com",
      messagingSenderId: "1006611980075",
      appId: process.env.APP_ID
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
