import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="lg:pt-36 pt-28">
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
