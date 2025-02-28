import PopularBrand from "@/components/Design/Brand";
import Category from "@/components/Design/Category";
import Features from "@/components/Design/Features";
import HeroSection from "@/components/Design/Hero";
import Footer from "@/components/Footer";
import config from "@/config/config";




export default function Home() {
  const appName = config.apiUrl;
  console.log(appName);
  return (
    <section className='dark:bg-gray-800'>

      <div className='min-h-svh max-w-screen-2xl py-8 mt-3 dark:bg-gray-800'>

        <HeroSection />


      </div>
      <div className="flex flex-col gap-12">
        <div className="px-10 py-4 bg-slate-100 dark:bg-gray-800  gap-4">

          <Category />
        </div>
        <div className=' max-w-screen-2xl    dark:bg-gray-800'>
          <Features />

        </div>
        <div className=' max-w-screen-2xl  min-h-[150svh]  dark:bg-gray-800'>
          <PopularBrand />
        </div>
      </div>



      <Footer />
    </section>
  );
}
