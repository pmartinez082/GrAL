const VERSION = "v1";
const CACHE_NAME = `froga-bertsio-${VERSION}`;
const APP_STATIC_RESOURCES = [
    "/",
    "/froga/html/index.html",
    "/froga/css/style.css",
    "/app.js",
    "/froga/pwa/manifest.json",
    
  ];

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(
      (registration) => {
        console.log("Service worker registration successful:", registration);
      },
      (error) => {
        console.error(`Service worker registration failed: ${error}`);
      },
    );
  } else {
    console.error("Service workers are not supported.");
  }
  
  