import React from "react";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center bg-slate-100 justify-center">
      {children}
    </div>
  );
};

export default ClerkLayout;
