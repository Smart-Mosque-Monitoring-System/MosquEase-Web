import Wrapper from "@/components/wrapper";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaArrowRight } from 'react-icons/fa';
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center mt-36">
      <Navbar/>
      <div className="mt-8 flex w-1/2">
        <div className="w-1/2">
          <img src="/src/assets/hero.jpg" alt="placeholder" className="h-[300px] w-[300px] bg-gray-200" />
        </div>
        <div className="w-2/3 pl-3 flex flex-col justify-center">
          <h1 className="text-5xl font-bold">Ibadah di mana, ya?</h1>
          <p className="mt-4 text-lg">Dapatkan informasi masjid terdekat di MosquEase</p>
          <Button className="mt-4">Cari masjid di sekitarmu!</Button>
        </div>
      </div>
      <div className="mt-12 w-2/3">
      <Separator className="my-10 mt-20" />
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Rekomendasi masjid di dekatmu</h2>
          <Button variant="outline">See All  <FaArrowRight className="ml-2" /> </Button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-7">
          <Card className="p-4">
            <img src="/placeholder.svg" alt="placeholder" className="h-[150px] w-full bg-gray-200" />
            <h2 className="text-lg font-bold mt-2">Masjid Al-Ikhlas</h2>
            <p className ="text-sm mt-1 text-slate-400">Capacity: 8/10</p>
          </Card>
          <Card className="p-4">
            <img src="/placeholder.svg" alt="placeholder" className="h-[150px] w-full bg-gray-200" />
            <h2 className="text-lg font-bold mt-2">Masjid Al-Ikhlas</h2>
            <p className ="text-sm mt-1 text-slate-400">Capacity: 8/10</p>
          </Card>
          <Card className="p-4">
            <img src="/placeholder.svg" alt="placeholder" className="h-[150px] w-full bg-gray-200" />
            <h2 className="text-lg font-bold mt-2">Masjid Al-Ikhlas</h2>
            <p className ="text-sm mt-1 text-slate-400">Capacity: 8/10</p>
          </Card>
          <Card className="p-4">
            <img src="/placeholder.svg" alt="placeholder" className="h-[150px] w-full bg-gray-200" />
            <h2 className="text-lg font-bold mt-2">Masjid Al-Ikhlas</h2>
            <p className ="text-sm mt-1 text-slate-400">Capacity: 8/10</p>
          </Card>
          <Card className="p-4">
            <img src="/placeholder.svg" alt="placeholder" className="h-[150px] w-full bg-gray-200" />
            <h2 className="text-lg font-bold mt-2">Masjid Al-Ikhlas</h2>
            <p className ="text-sm mt-1 text-slate-400">Capacity: 8/10</p>
          </Card>
          <Card className="p-4">
            <img src="/placeholder.svg" alt="placeholder" className="h-[150px] w-full bg-gray-200" />
            <h2 className="text-lg font-bold mt-2">Masjid Al-Ikhlas</h2>
            <p className ="text-sm mt-1 text-slate-400">Capacity: 8/10</p>
          </Card>
        </div>
      </div>
      <Footer/>
    </Wrapper>
  );
};

export default Home;
