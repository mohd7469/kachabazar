import axios from "axios";
import TRACKING_CONFIG from "./config";

const getTrackingHtml = async (trackNo) => {
  if (!trackNo) throw new Error("tracking number is required");
  const url = `${TRACKING_CONFIG.BASE_URL}?trackno=${encodeURIComponent(trackNo)}`;
  console.log('url: ', url);
  const { data } = await axios.get(url);
  console.log('data: ', data);
  return data;
}

export default getTrackingHtml;
