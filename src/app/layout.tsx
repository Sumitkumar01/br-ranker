// "use client"
import AppProvider from "@/contextApi/AppProvider";
import ReduxProvider from "@/redux/provider";
import Script from "next/script";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "../style/index.scss";
import "./globals.css";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Chef Kenzo - Catering Services",
  description: "We know you&#39;re here for the food shots??🤤",
  keywords: "Catering, Catering Service, Catering Booking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   const redirectBasedOnLocation = async () => {
  //     try {
  //       const response = await fetch("https://ipinfo.io/json?token=1d36f6ebb6b724");
  //       const data = await response.json();
  //       const country = data.country;

  //       if (country !== "IN") {
  //         window.location.href = "https://singapore.brtutors.com";
  //       }
  //     } catch (err) {
  //       console.error("Error fetching location:", err);
  //     }
  //   };
  //   redirectBasedOnLocation();
  // }, []);
  return (
    <>
      <html lang="en">
        <head>
          {/* <title>Online Tutoring Services | Online Tution Classes - BR Tutors</title> */}
          {/* <meta httpEquiv="x-ua-compatible" content="ie=edge" /> */}
          {/* <meta name="description" content="BR Tutors is offering personalized online tutoring services. Join our online tuition classes for expert guidance and improve your academic performance." /> */}
          {/* <meta name="robots" content="noindex, follow" /> */}
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          /> */}
          {/* <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link> */}

          <Script id="clarity-script" strategy="afterInteractive">
            {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "n8to6c2bl4");
          `}
          </Script>

        </head>

        <body>
          <ReduxProvider>
            <AppProvider>{children}</AppProvider>
            <ToastContainer />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
