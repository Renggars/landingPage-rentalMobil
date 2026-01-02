import Image from "next/image";

const About = () => {
  return (
    <section id="tentang-kami" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Bagian Kiri: Visual/Image dengan Dekorasi */}
        <div className="flex-1 relative w-full group">
          <div className="relative z-10 w-full h-[350px] sm:h-[450px]">
            <Image
              src="/images/mitsubishi-xpander.png" // Ganti dengan path gambar Xpander Anda
              alt="Rentcar Mitsubishi Xpander"
              fill
              className="object-contain z-20 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Elemen Dekoratif Lingkaran (Mirip Gambar) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-blue-50 rounded-full -z-0"></div>
          <div className="absolute top-10 left-10 w-24 h-24 bg-blue-100/50 rounded-full blur-2xl"></div>
        </div>

        {/* Bagian Kanan: Konten Teks */}
        <div className="flex-1">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-primary-blue text-sm font-bold tracking-wider uppercase">
              Rental Mobil No. 1 di Surabaya
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6 truncate">
            Rentcar: Solusi Transportasi <br />
            <span className="text-primary-blue">Andal & Terpercaya</span>
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            Rentcar adalah penyedia layanan jasa persewaan mobil profesional
            yang berfokus pada kenyamanan dan keamanan pelanggan. Kami
            berkomitmen untuk memberikan pelayanan terbaik melalui berbagai
            pilihan kendaraan yang siap menemani mobilitas Anda — baik untuk
            keperluan harian, perjalanan dinas, hingga liburan keluarga.
          </p>

          <p className="text-slate-600 leading-relaxed mb-8">
            Dengan armada yang selalu terawat, sopir profesional (opsional),
            serta harga yang kompetitif, kami hadir sebagai solusi transportasi
            yang fleksibel dan transparan tanpa biaya tersembunyi.
          </p>

          {/* Kartu Keunggulan (Gaya Modern) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-slate-900">Tarif Terjangkau</h4>
              <p className="text-xs text-slate-500 mt-1">
                Harga kompetitif dengan layanan premium.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-slate-900">Berpengalaman</h4>
              <p className="text-xs text-slate-500 mt-1">
                Lebih dari 10 tahun melayani pelanggan.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-slate-900">Terpercaya</h4>
              <p className="text-xs text-slate-500 mt-1">
                Proses booking aman dan transparan.
              </p>
            </div>
          </div>

          <a
            href={"#armada"}
            className="bg-primary-blue text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
          >
            Booking Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
