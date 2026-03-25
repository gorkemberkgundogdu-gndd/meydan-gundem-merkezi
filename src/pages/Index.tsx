import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import QuickAgenda from "@/components/home/QuickAgenda";
import SiyasetSection from "@/components/home/SiyasetSection";
import EkonomiWidget from "@/components/home/EkonomiWidget";
import PerspektifSection from "@/components/home/PerspektifSection";
import WritersSection from "@/components/home/WritersSection";
import Sidebar from "@/components/home/Sidebar";
import VideoSection from "@/components/home/VideoSection";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-6 lg:py-8">
        <HeroSection />
        <QuickAgenda />
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <SiyasetSection />
            <EkonomiWidget />
            <PerspektifSection />
            <WritersSection />
          </div>
          <Sidebar />
        </div>
      </div>
      <VideoSection />
    </Layout>
  );
};

export default Index;
