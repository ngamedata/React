import "../styles/globals.css";
import ChipUse from "./ChipUse";
import Homeme from "./Homeme";
if (process.env.NODE_ENV === "development") {
   require("./mocks");
  
}

function MyApp({ Component, pageProps }) {
  return <>
  <Homeme />
  <ChipUse/>
  </>
  
}

export default MyApp;
