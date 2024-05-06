import Loading from "@/app/loading";
import { auth } from "@/auth";
import { Suspense } from "react";

const { default: ReduxProvider } = require("@/provider");

async function CommonLayout({ children }) {
  const getSession = await auth();

  return (
    <ReduxProvider getSession={getSession}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ReduxProvider>
  );
}

export default CommonLayout;
