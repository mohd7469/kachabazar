import axios from "axios";
import React, {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import {LiaShippingFastSolid} from "react-icons/lia";
import { notifyError, notifySuccess } from "../../../utils/toast";
import NProgress from "nprogress";
import TRACKING_CONFIG from "./config.json";
import Shipper from "./shipper";

const shippers = [
  { label: "Panda", value: "panda", shipperUrl: "https://deliverypanda.me/tracking" },
  { label: "Benex", value: "benex", shipperUrl: "https://benex.com/tracking" },
];

const TrackOrder = ({
  buttonLabel = "Order Tracking",
  className = "",
}) => {
  const [setDrawer, setDrawerOpen] = useState(false);

  const [shipperSelectBox, setShipperSelectBox] = useState(shippers[0].value);
  const [shipperInputBox, setShipperInputBox] = useState(TRACKING_CONFIG.DEFAULT_TRACKNO);

  const [errMsg, setErrMsg] = useState(null);
  const [html, setHtml] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Close on Esc (SSR-safe)
  useEffect(() => {
    if (!setDrawer) return;
    const onKey = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [setDrawer]);
  // Lock background scroll when setDrawer
  useEffect(() => {
    if (!setDrawer || typeof document === "undefined") return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [setDrawer]);
  
  async function handleSubmit(e) {
    console.log("handleSubmit:", e);
    
    if (loading) return;
    
    TRACKING_CONFIG.DRAWER_WIDTH_CLASS = "sm:w-[28rem] md:w-[28rem] lg:w-[28rem]"
 
    e.preventDefault();
    setErrMsg(null);
    setHtml(null);
    
    const trackingNumber = shipperInputBox.trim();
    if (!trackingNumber) {
      setErrMsg("Please enter a tracking number.");
      return throw new Error("tracking number is required");
    }
    
    setLoading(true);
    NProgress.start();
    
    try {
      const selectedShipper = shippers.find(s => s.value === shipperSelectBox);
      switch (selectedShipper?.value) {
        case 'panda' : {
          const target = `${selectedShipper.shipperUrl}?trackno=${encodeURIComponent(trackingNumber)}`;
          const proxy = `https://api.allorigins.win/get?charset=ISO-8859-1&url=${encodeURIComponent(target)}`;
          
          const { data, headers } = await axios.get(proxy, { responseType: "text" });
          let result;
          try {
            if (typeof data === "string" && headers["content-type"]?.includes("application/json")) {
              result = JSON.parse(data)?.contents ?? "";
            } else if (typeof data === "string") {
              result = data; // raw html
            } else if (data && typeof data === "object" && "contents" in data) {
              result = data.contents;
            }
          } catch (e) {
            console.error("Parse error:", e);
          }
          
          const parser = new DOMParser();
          const doc = parser.parseFromString(result, "text/html");
          
          const style = doc.createElement("style");
          style.textContent = `
            body { pointer-events: none !important; }
            #sticky { display: none !important; }
            .heading_sec h2 { margin: 0 !important;}
            .track { padding: 0px !important; }
            .container { width: 100% !important; margin: 0px auto !important; }
            .footer_info { display: none !important; }
          `;
          doc.head.appendChild(style);
          
          const html = doc.documentElement.outerHTML;
          
          await new Promise((resolve) => {
            setTimeout(() => {
              NProgress.done();
              TRACKING_CONFIG.DRAWER_WIDTH_CLASS = "sm:w-[28rem] md:w-[50rem] lg:w-[70rem]"
              setLoading(false);
              setHtml(html);
              resolve(true);
            }, 500);
          });
          break;
        }
        case 'benex' : {
          return notifyError("This can't be use at the moment!!");
        }
        case 'aramex' : {
          return notifyError("This can't be use at the moment!!");
        }
      }
    } catch (err) {
      setErrMsg("Failed to load tracking page");
    } finally {
      setLoading(false);
      NProgress.done();
    }
  }
  
  return (
    <>
      <div onClick={(e) => {
        e.preventDefault();
        setDrawerOpen(true);
        NProgress.done();
      }}>
        {buttonLabel ? (
          <Link
            href=""
            className={`flex justify-between items-center font-medium ${buttonLabel ? "hover:text-emerald-600" : ""}`}
          >
            {buttonLabel}
          </Link>
        ) : (
          <button
            className="h-9 w-9 relative whitespace-nowrap inline-flex items-center justify-center text-white text-lg">
            <LiaShippingFastSolid className={`text-2xl`}/>
          </button>
        )}
      </div>
      
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${
          setDrawer ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      
      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed right-0 top-0 z-[99] h-transform bg-white shadow-2xl ring-1 ring-black/5 shadow-lg
        transition-all ease-in-out duration-300
        w-[100vw] ${TRACKING_CONFIG.DRAWER_WIDTH_CLASS}
        ${setDrawer ? "translate-x-0" : "translate-x-full"} ${className}`}
      >
        <div className="w-full flex justify-between items-center relative px-5 py-4 bg-emerald-700">
          <div className="flex items-center justify-between text-lg">
            <h2 className="text-white text-lg m-0 text-heading flex items-center">
              <span className="text-xl mr-2">
                {loading ? (
                  <img
                    src="/loader/spinner.gif"
                    alt="Loading"
                    width={30}
                    height={30}
                  />
                ) : (
                  <i className="fa-solid fa-clock"></i>
                )}
              </span>
              Track Order
            </h2>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="inline-flex text-base items-center justify-center text-white p-2 focus:outline-none transition-opacity rounded-lg bg-emerald-600 hover:bg-emerald-500"
          >
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        
        <div className="h-[calc(100dvh-57px)] overflow-y-auto p-4 space-y-3">
          <form onSubmit={handleSubmit} className="">
            <Shipper
              options={shippers}
              loading={loading}
              shipperSelectBox={shipperSelectBox}
              onChangeShipperSelectBox={setShipperSelectBox}
              shipperInputBox={shipperInputBox}
              onChangeShipperInputBox={setShipperInputBox}
            />
          </form>
          
          <div className="border rounded-lg overflow-hidden mt-4">
            {html ? (
              <div className={"animate__animated animate__zoomInUp"}>
                <iframe
                  title={`Tracking ${shipperInputBox || ""}`}
                  className="w-full"
                  style={{ height: TRACKING_CONFIG.IFRAME_HEIGHT }}
                  srcDoc={html}
                />
              </div>
            ) : (
              <div className="p-6 text-sm text-center bg-white">
                {errMsg ? (
                  <div className={"text-red-500"}><i className="fa-solid fa-circle-info"></i> {errMsg}</div>
                ) : (
                  <div className={"text-gray-500"}> { loading ? 'Please wait..' : 'Please Enter Order Tracking Number'}</div>
                )}
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

export default TrackOrder;
