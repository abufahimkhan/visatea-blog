"use client";

import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const ClientLoader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // End loading after 2 seconds
    }, 500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default ClientLoader;
