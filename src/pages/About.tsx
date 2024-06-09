import Wrapper from "@/components/wrapper";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";

const About = () => {
    return (
        <Wrapper className="flex flex-col items-center mt-36">
            <Navbar/>
            <div className="flex flex-col w-1/2">
                <div className="flex pt-16">
                    <h1 className="text-4xl font-bold">About MosquEase</h1>
                </div>
                    <p className="text-justify mt-5 text-xl text-slate-500">Sebuah aplikasi untuk meningkatkan kenyamanan masyarakat yang beragama Islam dalam beribadah. MosquEase membantu untuk
                        mencarikan masjid atau musola paling nyaman yang berada di sekitar pengguna saat ini. Adanya MosquEase diharapkan mengurangi masalah
                        penumpukan keramaian di masjid.
                    </p>
            <Separator className="mt-20" />
            </div>
            <section className="w-full pb-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-bold">Farhan Algani Putra</h3>
                  <p className="text-gray-500 dark:text-gray-400">18221108</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-bold">Vincent Franstyo</h3>
                  <p className="text-gray-500 dark:text-gray-400">18221100</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-bold">Aditya Inas Hamidah</h3>
                  <p className="text-gray-500 dark:text-gray-400">18221172</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-bold">Rayhan Maheswara Pramanda</h3>
                  <p className="text-gray-500 dark:text-gray-400">18221130</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-bold">Marchelline Fanni Hidayat Putri</h3>
                  <p className="text-gray-500 dark:text-gray-400">18221090</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-bold">Dwiky Hared Darmawan</h3>
                  <p className="text-gray-500 dark:text-gray-400">18219048</p>
                </div>
              </div>
            </div>
          </div>
        </section>
            <Footer/>
        </Wrapper>
    );
}

export default About;