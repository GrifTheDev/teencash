import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { config } from "../config"

export function getDB() {
  if (getApps().length == 0) {
    const fcfg = {
      apiKey: config.firebaseConfig.apiKey,
      authDomain: config.firebaseConfig.authDomain,
      projectId: config.firebaseConfig.projectId,
      storageBucket: config.firebaseConfig.storageBucket,
      messagingSenderId: config.firebaseConfig.messagingSenderId,
      appId: config.firebaseConfig.appId,
      measurementId: config.firebaseConfig.measurementId,
    };

    initializeApp(fcfg);
    if (config.debug == true) console.log("[DEBUG] Database connection successful.")
  }

  return { db: getFirestore() };
}
