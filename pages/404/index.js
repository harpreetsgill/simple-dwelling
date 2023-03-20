import Head from "next/head";
import Error from "@/components/UI/Error";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Error 404</title>
      </Head>
      <Error code="404" />
    </>
  );
}
