import Button from "../shared/Button";
import gambarHero from "../images/hero.png";

function SectionSatu() {
  return (
    <div className="flex pt-[4rem]">
      <div className="flex flex-col justify-center  gap-6">
        <h1 className="text-2xl font-semibold">
          Hai, nama saya Zaid seorang Web Developer
        </h1>
        <h2 className="text-4xl text-[#3281FF] font-semibold leading-relaxed">
          Saya Bisa Membantu Anda Membuat Sebuah Website Sesuai Kebutuhan Anda
        </h2>
        <p className="text-xl leading-relaxed">
          Anda memiliki perusahaan yang membutuhkan sistem untuk mempermudah
          pekerjaan atau UMKM yang membutuhkan wadah promosi produk? Kami bisa
          membantunya, hubungi kami sekarang.
        </p>
        <div className="flex">
          <Button large teks="Hubungi Saya" />
        </div>
      </div>
      <div>
        <img src={gambarHero} alt="hero" width="1000px" />
      </div>
    </div>
  );
}

export default SectionSatu;
