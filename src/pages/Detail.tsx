import Wrapper from "@/components/wrapper";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { supabase } from "../supabaseClient";

import image1 from "/src/assets/image1.jpg";
import image2 from "/src/assets/image2.jpg";
import image3 from "/src/assets/image3.jpg";

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface LiveUpdateData {
    imgSrc: string;
}

interface MosqueData {
    id?: number;
    name?: string;
    latitude?: number;
    longitude?: number;
    capacity?: number;
    current_count?: number;
    address?: string;
    facilities?: string[];
}

interface BmeData {
    humidity?: number;
    temperature?: number;
}

const haversineDistance = (coords1: Coordinates, coords2: Coordinates): number => {
    const toRad = (angle: number): number => (angle * Math.PI) / 180;

    const R = 6371e3; 
    const dLat = toRad(coords2.latitude - coords1.latitude);
    const dLon = toRad(coords2.longitude - coords1.longitude);
    const lat1 = toRad(coords1.latitude);
    const lat2 = toRad(coords2.latitude);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; 
    return distance;
};

const Detail = () => {
    const [liveUpdate, setLiveUpdate] = useState<LiveUpdateData>({});
    const [mosqueData, setMosqueData] = useState<MosqueData>({});
    const [bmeData, setBmeData] = useState<BmeData>({});
    const [distance, setDistance] = useState<number | null>(null);
    const carouselImages = [image1, image2, image3];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: liveUpdateData, error: liveUpdateError } = await supabase
                    .from('person_counter')
                    .select('img_string_base64, head_count')
                    .order('id', { ascending: false })
                    .limit(1);

                if (liveUpdateError) {
                    throw liveUpdateError;
                }

                const imgData = liveUpdateData[0]?.img_string_base64;
                if (imgData) {
                    const imgSrc = `data:image/png;base64,${imgData}`;
                    setLiveUpdate({ imgSrc });
                }

                const { data: mosqueData, error: mosqueError } = await supabase
                    .from('mosque')
                    .select('*')
                    .single();

                if (mosqueError) {
                    throw mosqueError;
                }

                const { data: personCounterData, error: counterError } = await supabase
                    .from('person_counter')
                    .select('id, head_count')
                    .eq('mosque_id', mosqueData.id)
                    .order('id', { ascending: false })
                    .limit(1);
        
                if (counterError) {
                    throw counterError;
                }
                
                const updatedMosqueData = { ...mosqueData, current_count: personCounterData[0]?.head_count };
                setMosqueData(updatedMosqueData);

                const { data: bmeData, error: bmeError } = await supabase
                    .from('bme280')
                    .select('*')
                    .eq('mosque_id', mosqueData.id)
                    .order('id', { ascending: false })
                    .limit(1);
                if (bmeError) {
                    throw bmeError;
                }

                setBmeData(bmeData[0] || {});

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const userLocation = {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                            };
                            const mosqueLocation = {
                                latitude: updatedMosqueData.latitude,
                                longitude: updatedMosqueData.longitude,
                            };
                            const dist = haversineDistance(userLocation, mosqueLocation);
                            setDistance(dist);
                            console.log(userLocation)
                        },
                        (error) => {
                            console.error("Error getting user location:", error);
                        }
                    );
                } else {
                    console.error("Geolocation is not supported.");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Wrapper>
            <Navbar/>
            <div className="mosque-info mt-20 py-10 px-40">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">{mosqueData.name || '--'}</h1>
                    <p className="flex justify-between items-center">
                        <FaMapMarkerAlt className="mr-2"/> 
                        {distance !== null ? `${(distance / 1000).toFixed(2)} kilometers from you` : 'Calculating distance...'}
                    </p>
                </div>
                <Separator className="mt-4" />
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <CardHeader className="flex flex-row justify-between">
                            <CardTitle className="text-lg">LIVE UPDATE</CardTitle>
                            <span className="text-sm text-gray-500">Updated 1 mins ago</span>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-row justify-center items-center">
                                <img src={liveUpdate.imgSrc} alt="live-update" className="w-1/2 object-cover rounded-lg mb-10" />
                            </div> 
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <p className="text-2xl font-bold">{bmeData.humidity || '--'}</p>
                                    <p className="text-sm text-gray-500">% RH</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">{bmeData.temperature || '--'}</p>
                                    <p className="text-sm text-gray-500">°Celsius</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">{mosqueData.current_count || '--'}</p>
                                    <p className="text-sm text-gray-500">/{mosqueData.capacity || '--'}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row justify-between">
                            <CardTitle className="text-lg">PICTURES</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="px-20">
                                <Carousel className="w-full">
                                    <CarouselContent>
                                        {carouselImages.map((image, index) => (
                                            <CarouselItem key={index}>
                                                <div className="p-1">
                                                    <Card>
                                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                                            <img src={image} alt={`carousel-${index}`} className="w-full h-full object-cover" />
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Separator className="mt-10" />
                <div className="facilities mt-4 mb-20">
                    <h2 className="text-xl font-bold">FACILITIES</h2>
                    <p>{mosqueData.address || '--'}</p>
                    <div className="facility-list mt-2">
                        <ul className="list-none">
                            {mosqueData.facilities ? mosqueData.facilities.map((facility, index) => (
                                <li key={index} className="flex items-center">
                                    <FaCircleCheck className="mr-2" /> {facility}
                                </li>
                            )) : <li>No facilities available</li>}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </Wrapper>
    );
}

export default Detail;
