/*
 * Firebase browser config for Kombin.
 *
 * This static landing page cannot read server-side environment variables at
 * runtime. Inject window.KOMBIN_FIREBASE_CONFIG during deploy, or replace the
 * VITE_FIREBASE_* placeholders in your hosting/build pipeline. Firebase Web
 * config values are client-side app identifiers, not service account secrets.
 */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional.
export const firebaseConfig = window.KOMBIN_FIREBASE_CONFIG || {
  apiKey: "AIzaSyB4eMfidpfZoB2cFo4LwiC08gzleUups_k",
  authDomain: "stilist-cd0e8.firebaseapp.com",
  projectId: "stilist-cd0e8",
  appId: "1:405036566837:web:8caaf3a3ada6eb26d4647c",
};

export function hasFirebaseConfig(config) {
  return Boolean(
    config &&
      config.apiKey &&
      config.authDomain &&
      config.projectId &&
      config.appId &&
      !String(config.apiKey).startsWith("VITE_FIREBASE_")
  );
}

export function getFirebaseConfig(actionApiKey) {
  if (hasFirebaseConfig(firebaseConfig)) return firebaseConfig;

  if (actionApiKey) {
    return {
      apiKey: actionApiKey,
    };
  }

  return firebaseConfig;
}
