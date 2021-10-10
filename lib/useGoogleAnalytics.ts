import { useEffect } from "react";
import Router from "next/router";

export const GA_TRACKING_ID = "G-SS2PNL0MB8";

export function useGoogleAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined" || !Router?.events) {
      return;
    }
    const onComplete = (url: string) => {
      if (typeof (window as any)["gtag"] !== "function") {
        return;
      }
      // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
      (window as any)["gtag"]("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };
    Router.events.on("routeChangeComplete", onComplete);
    return () => {
      Router.events.off("routeChangeComplete", onComplete);
    };
  }, [Router.events]);
}
