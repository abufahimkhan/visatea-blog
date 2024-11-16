
import AboutUs from "@/components/aboutUs/AboutUs";
import BlogCard from "@/components/blog/BlogCard";
import Service from "@/components/services/ServiceCard";
import SliderBanner from "@/components/sliderBanner/SliderBanners";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between p-2">
      {/* <SearchBar /> */}
      <SliderBanner />
      <Service />
      <AboutUs />
      <BlogCard />
    </main>
  );
}
