"use client"
import Header from "@/shared/component/Header";
import Pricing from "@/shared/component/Pricing";
import config from "../../settings";
import Footer from "@/shared/component/Footer";
import ListFeatures from "@/shared/component/ListFeatures";
import FAQ from "@/shared/component/FAQ";
import Hero from "@/shared/component/Hero";

// for waitlist page in 5 mins follow shttps://www.shiply.store/docs/tutorial/waitlist-setup

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header
        navigation={[
          { title: "pricing", href: "#pricing" },
        ]}
        title="Shiply"
      />
      <Hero onClick={() => {confirm("Get Started")}} title="Unlock Your Potential with Our Innovative Solutions" description="Discover a world of possibilities with our cutting-edge products and services. We empower individuals and businesses to achieve their goals through innovation, quality, and unparalleled support. Join us on a journey to success and transform your aspirations into reality"/>
      <section className="px-10 p-10 bg-base-200">
        <ListFeatures />
      </section>
      <section>
        <Pricing paymentTemplate={config.paymentTemplate} />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        {/* if you need small footer replace <Footer /> with <FooterSmall /> */}
        <Footer />
      </section>
    </main>
  );
}

