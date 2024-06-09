import React, { useEffect, useState } from 'react';
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaArrowRight } from 'react-icons/fa';
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar";
import { supabase } from "../supabaseClient";
import image1 from "/src/assets/image1.jpg";
import { useNavigate } from 'react-router-dom';

// Define the types for the mosque and person counter data
interface Mosque {
  id: number;
  name: string;
  capacity: number;
  current_count?: number;
}

interface PersonCounter {
  id: number;
  head_count: number;
}

const Home: React.FC = () => {
  const [mosques, setMosques] = useState<Mosque[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMosques = async () => {
      try {
        const { data: mosquesData, error: mosquesError } = await supabase
          .from<Mosque>('mosque')
          .select('id, name, capacity');

        if (mosquesError) {
          throw mosquesError;
        }

        const mosquesWithLatestCount: Mosque[] = [];

        for (const mosque of mosquesData) {
          const { data: personCounterData, error: counterError } = await supabase
            .from<PersonCounter>('person_counter')
            .select('id, head_count')
            .eq('mosque_id', mosque.id)
            .order('id', { ascending: false })
            .limit(1);

          if (counterError) {
            throw counterError;
          }

          mosquesWithLatestCount.push({ ...mosque, current_count: personCounterData[0]?.head_count || 0 });
        }
        setMosques(mosquesWithLatestCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMosques();
  }, []);

  return (
    <Wrapper className="flex flex-col items-center justify-center mt-36">
      <Navbar />
      <div className="mt-8 flex w-1/2">
        <div className="w-1/2">
          <img src="/src/assets/hero.jpg" alt="placeholder" className="h-[300px] w-[300px] bg-gray-200 rounded-3xl" />
        </div>
        <div className="w-2/3 pl-3 flex flex-col justify-center">
          <h1 className="text-5xl font-bold">Ibadah di mana, ya?</h1>
          <p className="mt-4 text-lg">Dapatkan informasi masjid terdekat di MosquEase</p>
          <Button className="mt-4 bg-green-900" onClick={() => navigate(`/findmosque`)}>Cari masjid di sekitarmu!</Button>
        </div>
      </div>
      <div className="mt-12 w-2/3 mb-36">
        <Separator className="my-10 mt-20" />
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Rekomendasi masjid di dekatmu</h2>
          <Button variant="outline" onClick={() => navigate(`/findmosque`)}>See All <FaArrowRight className="ml-2" /></Button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-7">
          {mosques.map((mosque) => (
            <Card key={mosque.id} className="p-4">
              <img src={image1} alt="mosque" className="h-[150px] w-full bg-gray-200" />
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold mt-2">{mosque.name}</h2>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => navigate(`/detail`)}
                >
                  Lihat detail
                </Button>
              </div>
              <p className="text-sm mt-1 text-slate-400">Capacity: {mosque.current_count}/{mosque.capacity}</p>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Home;
