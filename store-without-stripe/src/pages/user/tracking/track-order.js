import axios from "axios";
import React, {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import {LiaShippingFastSolid} from "react-icons/lia";

import NProgress from "nprogress";
import TRACKING_CONFIG from "@pages/user/tracking/config";

const TrackOrder = ({
  buttonLabel = "Order Tracking",
  className = "",
}) => {
  const [setDrawer, setDrawerOpen] = useState(false);
  
  const [trackInput, setTrackInput] = useState(TRACKING_CONFIG.DEFAULT_TRACKNO);
  const [errMsg, setErrMsg] = useState(null);
  const [html, setHtml] = useState(null);

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
 
    e.preventDefault();
    setErrMsg(null);
    setHtml(null);
   
    if (!trackInput.trim()) {
      setErrMsg("Please enter a tracking number.");
      return;
    }
    
    NProgress.start();
    
    try {
      const trackingNumber = trackInput.trim();
      if (!trackingNumber) throw new Error("tracking number is required");
      
      const url = `${TRACKING_CONFIG.BASE_URL}?trackno=${encodeURIComponent(trackingNumber)}`;
      console.log("url:", url);
      
      const { data } = await axios.get(url, { responseType: "text" });
      console.log("data:", data);
      
      setHtml(data);
    } catch (err) {
      setErrMsg("Failed to load tracking page.");
    } finally {
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
        className={`fixed right-0 top-0 z-[99] h-transform bg-white shadow-2xl ring-1 ring-black/5 transition-transform duration-300 w-[100vw] sm:w-[28rem] md:w-[28rem]
        ${setDrawer ? "translate-x-0" : "translate-x-full"} ${className}`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center justify-between text-lg">
            <h2 className="font-serif text-black me-2">Track Order</h2>
            <LiaShippingFastSolid
              className={`text-2xl ${setDrawer ? 'animate__animated animate__fadeOutRight animate__delay-1s' : ''}`}/>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="inline-flex size-9 items-center justify-center rounded-md text-gray-600 bg-gray-100"
            aria-label="Close drawer"
          >
            ✕
          </button>
        </div>
        
        <div className="h-[calc(100dvh-57px)] overflow-y-auto p-4 space-y-3">
          <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-2">
            <input
              value={trackInput}
              onChange={(e) => setTrackInput(e.target.value)}
              placeholder="Enter tracking number"
              className="flex-1 min-w-56 border rounded-lg px-3 py-2"
            />
            <button
              type="submit"
              disabled={NProgress?.status}
              className="rounded-lg bg-emerald-600 text-white px-4 py-2 disabled:opacity-60"
            >
              {!NProgress?.status ? TRACKING_CONFIG.BUTTON_LABEL : "Loading.."}
            </button>
          </form>
          
          <div className="border rounded-lg overflow-hidden mt-4">
            {html ? (
              <iframe
                title={`Tracking ${trackInput || ""}`}
                className="w-full"
                style={{ height: TRACKING_CONFIG.IFRAME_HEIGHT }}
                srcDoc={html}
              />
            ) : (
              <div className="p-6 text-sm text-center">
                {errMsg ? (
                  <div className={"text-red-500"}>{errMsg}.</div>
                ) : (
                  <div className={"text-gray-500"}>Enter a tracking number and press {TRACKING_CONFIG.BUTTON_LABEL}.</div>
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
