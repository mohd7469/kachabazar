import axios from "axios";

/* ================================
   CONFIG (edit only here)
   ================================ */
export const DELIVERY_PANDA_BASE = "https://deliverypanda.me/tracking";
export const API_ROUTE = "/api/track";
/* ================================ */

/** Build the external DeliveryPanda URL (server-friendly). */
export function buildTrackingUrl({ trackNo, keys = {} }) {
  if (!trackNo) throw new Error("trackNo is required");
  const u = new URL(DELIVERY_PANDA_BASE);
  u.searchParams.set("trackno", trackNo);
  Object.entries(keys).forEach(([k, v]) => {
    if (v !== undefined && v !== null) u.searchParams.set(k, String(v));
  });
  return u.toString();
}

/** Build the local proxy URL (client-friendly, avoids CORS/X-Frame-Options). */
export function buildProxyUrl({ trackNo, keys = {} }) {
  if (!trackNo) throw new Error("trackNo is required");
  const u = new URL(API_ROUTE, "http://local"); // base ignored by browser
  u.searchParams.set("trackno", trackNo);
  Object.entries(keys).forEach(([k, v]) => {
    if (v !== undefined && v !== null) u.searchParams.set(k, String(v));
  });
  return u.pathname + u.search; // e.g. "/api/track?trackno=DD109085"
}

/** Server-side: fetch upstream HTML directly from DeliveryPanda. */
export async function fetchUpstreamHtml(trackNo, keys = {}) {
  const url = buildTrackingUrl({ trackNo, keys });
  const { data } = await axios.get(url, {
    headers: { "User-Agent": "Mozilla/5.0 (Next.js Proxy)" },
    responseType: "text",
  });
  return data; // raw HTML string
}

/** Client-side: fetch HTML via your proxy API (safe in browsers). */
export async function fetchHtmlViaProxy(trackNo, keys = {}) {
  const { data } = await axios.get(API_ROUTE, {
    params: { trackno: trackNo, ...keys },
    responseType: "text",
  });
  return data; // raw HTML string
}
