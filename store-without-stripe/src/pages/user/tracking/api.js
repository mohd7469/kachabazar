import axios from "axios";
import TRACKING_CONFIG from "./config.js";

/** Base64URL encode a UTF-8 string */
function toBase64Url(str) {
  const b64 = typeof window === "undefined"
    ? Buffer.from(str, "utf8").toString("base64")
    : btoa(unescape(encodeURIComponent(str)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

/** Build the single-param proxy URL: /api/track?q=<base64url(JSON)> */
function buildEncodedProxyUrl(trackNo) {
  if (!trackNo) throw new Error("trackNo is required");
  const payload = { trackno: trackNo }; // add more fields later if needed
  const q = toBase64Url(JSON.stringify(payload));
  const u = new URL(
    TRACKING_CONFIG.API_ROUTE,
    typeof window === "undefined" ? "http://local" : window.location.origin
  );
  u.searchParams.set(TRACKING_CONFIG.ENCODE_PARAM_KEY, q);
  return u.toString();
}

/** Fetch tracking HTML from your single-param API */
export async function getTrackingHtml(trackNo) {
  const url = buildEncodedProxyUrl(trackNo);
  const { data } = await axios.get(url, {
    responseType: "text",
    timeout: TRACKING_CONFIG.REQUEST_TIMEOUT_MS,
    headers: { Accept: "text/html,application/xhtml+xml" },
  });
  return data; // raw HTML
}

export { buildEncodedProxyUrl }; // exported in case you want to inspect it
