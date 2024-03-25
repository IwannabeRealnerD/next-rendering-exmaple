import type { AppProps } from "next/app";

function MyApp(props: AppProps) {
  return <props.Component {...props.pageProps} />;
}

export default MyApp;
