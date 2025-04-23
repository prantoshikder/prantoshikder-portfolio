"use client";

import Navbar from "@/components/partials/Navbar";
import Loader from "@/components/shared/Loader";
import { ConfigProvider } from "antd";
import React, { useEffect, useState } from "react";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: { fontFamily: "'Roboto', sans-serif" }
        // ...theme,
      }}
      direction="ltr"
      wave={{ disabled: true }}
    >
      {isLoading ? (
        <Loader className="h-screen" />
      ) : (
        <React.Fragment>
          <Navbar />
          {children}
        </React.Fragment>
      )}
    </ConfigProvider>
  );
};

export default PageRender;
