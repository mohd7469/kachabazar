// config.js
const TRACKING_CONFIG = {
  // External tracking endpoint base (no query string)
  BASE_URL: "https://deliverypanda.me/tracking",
  
  // Your Next.js API route (the ONLY request the browser will make)
  API_ROUTE: "/api/track",
  
  // Single encoded query key for the API
  ENCODE_PARAM_KEY: "q",
  
  // UI defaults
  DEFAULT_TRACKNO: "DD109085",
  IFRAME_HEIGHT: "75vh",
  
  // Labels
  BUTTON_LABEL: "Track",
  CLOSE_LABEL: "Close",
  DRAWER_TITLE: "Track Order",
  
  // Icon styling class
  ICON_CLASS: "text-2xl text-emerald-600",
  
  // Networking
  REQUEST_TIMEOUT_MS: 25000,
};

export default TRACKING_CONFIG;
