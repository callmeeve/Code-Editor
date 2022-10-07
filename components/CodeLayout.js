import Head from "next/head";
import CodeHeader from "./CodeHeader";

const CodeLayout = ({ title, content, children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={content} />
        <title>{title}</title>
      </Head>

      <div className="flex flex-col w-full h-screen gap-0">
        <CodeHeader />
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
};

export default CodeLayout;
