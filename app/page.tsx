"use client";

import dynamic from 'next/dynamic';
import { navItems } from "@/data";

import Hero from "@/components/Hero";
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
import Footer from "@/components/Footer";
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
import Approach from "@/components/Approach";
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
