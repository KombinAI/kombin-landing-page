/*
 * Firebase browser config for Kombin.
 *
 * This static landing page cannot read server-side environment variables at
 * runtime. Inject window.KOMBIN_FIREBASE_CONFIG during deploy, or replace the
 * VITE_FIREBASE_* placeholders in your hosting/build pipeline. Firebase Web
 * config values are client-side app identifiers, not service account secrets.
 */
export const firebaseConfig = window.KOMBIN_FIREBASE_CONFIG || {
  apiKey: "VITE_FIREBASE_API_KEY",
  authDomain: "VITE_FIREBASE_AUTH_DOMAIN",
  projectId: "VITE_FIREBASE_PROJECT_ID",
  appId: "VITE_FIREBASE_APP_ID",
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
