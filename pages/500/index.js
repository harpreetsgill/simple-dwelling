import Head from "next/head";
import Error from "@/components/UI/Error";

export default function ServerErrorPage() {
  return (
    <>
      <Head>
        <title>Error 500</title>
      </Head>
      <Error code="500" />;
    </>
  );
}
