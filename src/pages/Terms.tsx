import Wrapper from "@/components/wrapper";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
    return (
        <Wrapper>
            <Navbar/>
            <div className="flex flex-col">
                <div className="flex justify-center content-center pt-16">
                    <h1 className="text-4xl font-bold mt-10 -mb-5">Terms of Services</h1>
                </div>
                <div className="px-96 pt-10 pb-24">
                    <p className="text-justify">
                        <p className="text-center text-md text-slate-500">MosquEase ini menyediakan layanan untuk mencari masjid terdekat di sekitar lokasi pengguna serta memberikan informasi real-time mengenai kapasitas, suhu, dan kelembaban masjid. Dengan menggunakan website ini, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan berikut ini.</p>
                        <Separator className="my-10" />
                        <p><strong>1. Penerimaan Syarat</strong></p>

                        <p>Dengan mengakses atau menggunakan website kami, Anda menyetujui syarat dan ketentuan ini. Syarat dan ketentuan ini dapat diubah oleh MakKauHijau dari waktu ke waktu, dan penggunaan website yang berkelanjutan setelah perubahan tersebut berarti Anda menerima syarat yang telah diubah.</p>

                        <p><strong>2. Penggunaan Layanan</strong></p>

                        <p>a. <strong>Layanan Utama</strong>: website ini dirancang untuk membantu pengguna menemukan masjid terdekat berdasarkan lokasi saat ini dan menyediakan informasi real-time tentang kapasitas, suhu, dan kelembaban di masjid tersebut.</p>
                        <p>b. <strong>Akses Lokasi</strong>: Untuk memberikan layanan yang akurat, website ini membutuhkan akses ke lokasi Anda. Dengan menggunakan website ini, Anda memberi izin kepada kami untuk mengakses dan menggunakan informasi lokasi Anda.</p>
                        <p>c. <strong>Data Real-Time</strong>: Informasi tentang kapasitas, suhu, dan kelembaban disediakan secara real-time. Kami berusaha untuk memberikan data yang akurat, tetapi kami tidak dapat menjamin keakuratan dan keterkinian data setiap saat.</p>

                        <p><strong>3. Kewajiban Pengguna</strong></p>

                        <p>a. <strong>Informasi Akurat</strong>: Anda setuju untuk memberikan informasi yang akurat dan terbaru tentang diri Anda saat menggunakan website ini.</p>
                        <p>b. <strong>Penggunaan yang Diizinkan</strong>: Anda hanya boleh menggunakan website ini untuk tujuan yang sah dan sesuai dengan semua hukum dan peraturan yang berlaku.</p>
                        <p>c. <strong>Larangan Penyalahgunaan</strong>: Anda dilarang menggunakan website ini untuk tujuan yang melanggar hukum atau merusak, termasuk namun tidak terbatas pada, menyebarkan malware, melakukan hacking, atau merusak integritas website.</p>

                        <p><strong>4. Batasan Tanggung Jawab</strong></p>

                        <p>a. <strong>Ketidakakuratan Data</strong>: Kami tidak bertanggung jawab atas ketidakakuratan data tentang kapasitas, suhu, dan kelembaban yang disediakan oleh website ini.</p>
                        <p>b. <strong>Kerugian</strong>: Kami tidak bertanggung jawab atas kerugian atau kerusakan apa pun yang timbul dari penggunaan atau ketidakmampuan menggunakan website ini.</p>

                        <p><strong>5. Hak Kekayaan Intelektual</strong></p>

                        <p>Semua hak cipta, merek dagang, dan hak kekayaan intelektual lainnya dalam website ini dan kontennya dimiliki oleh MakKauHijau atau pemberi lisensinya. Anda tidak diperbolehkan untuk menyalin, memodifikasi, mendistribusikan, atau menggunakan konten website ini tanpa izin tertulis dari pemilik hak cipta.</p>

                        <p><strong>6. Privasi</strong></p>

                        <p>Penggunaan informasi pribadi Anda diatur oleh kebijakan privasi kami, yang dapat diakses melalui ini. Dengan menggunakan website ini, Anda menyetujui pengumpulan dan penggunaan informasi pribadi Anda sebagaimana diuraikan dalam kebijakan privasi tersebut.</p>

                        <p><strong>7. Pengakhiran</strong></p>

                        <p>Kami berhak untuk menghentikan atau menangguhkan akses Anda ke website ini setiap saat tanpa pemberitahuan sebelumnya jika Anda melanggar syarat dan ketentuan ini atau jika kami memutuskan untuk menghentikan layanan website ini.</p>

                        <p><strong>8. Hukum yang Berlaku</strong></p>

                        <p>Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di Indonesia. Setiap sengketa yang timbul dari atau sehubungan dengan syarat dan ketentuan ini akan diselesaikan di pengadilan yang berwenang di Indonesia.</p>
                    </p>
                </div>
            </div>
            <Footer/>
        </Wrapper>
    );
}

export default Terms;