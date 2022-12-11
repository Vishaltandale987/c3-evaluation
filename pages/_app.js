import Navbar from "../compount/Navbar";
import "../styles/globals.css";
import { ChakraProvider }from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
