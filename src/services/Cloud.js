import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: "AIzaSyCHXodDUg3HOQr_44pZKfQZQpuMo-0LiUo",
      authDomain: "online-cinema-52ff2.firebaseapp.com",
      projectId: "online-cinema-52ff2",
      storageBucket: "online-cinema-52ff2.appspot.com",
      messagingSenderId: "284171025466",
      appId: "1:284171025466:web:8451aff6d7c0f1b46c0903",
      measurementId: "G-8H50WMGL3R",
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
