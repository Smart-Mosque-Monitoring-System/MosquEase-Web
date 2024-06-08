import Wrapper from "@/components/wrapper";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar";

const About = () => {
    return (
        <Wrapper>
            <Navbar/>
            <div className="flex flex-col">
                <div className="flex justify-center content-center pt-16">
                    <h1 className="text-4xl font-bold">About Us</h1>
                </div>
                <div className="px-96 py-10">
                    <p className="text-justify">MosquEase adalah sebuah aplikasi yang dibuat oleh Kelompok 2 Tugas Besar Rekayasa Sistem dan Teknologi Informasi K02.
                        Aplikasi ini dimaksudkan untuk meningkatkan kenyamanan masyarakat yang beragama islam dalam beribadah. MosquEase membantu untuk
                        mencarikan masjid atau musola paling nyaman yang berada di sekitar pengguna saat ini. Dengan adanya MosquEase diharapkan masalah
                        penumpukan keramaian di masjid dapat dikurangi. Selamat beribadah!
                    </p>
                </div>
            </div>
            <Footer/>
        </Wrapper>
    );
}

export default About;