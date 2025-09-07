import axios from "axios";
import TRACKING_CONFIG from "./config";

export async function getTrackingHtml(trackNo) {
  if (!trackNo) throw new Error("tracking number is required");
  const url = `${TRACKING_CONFIG.BASE_URL}?trackno=${encodeURIComponent(trackNo)}`;
  console.log('url: ', url);
  const { data } = await axios.get(url);
  console.log('data: ', data);
  return data;
}