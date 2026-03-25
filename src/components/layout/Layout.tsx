import { ReactNode } from "react";
import UtilityBar from "./UtilityBar";
import Header from "./Header";
import BreakingNewsBand from "./BreakingNewsBand";
import Footer from "./Footer";
import BottomNav from "./BottomNav";

interface LayoutProps {
  children: ReactNode;
  showBreaking?: boolean;
}

const Layout = ({ children, showBreaking = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <UtilityBar />
      <Header />
      {showBreaking && <BreakingNewsBand />}
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Layout;
