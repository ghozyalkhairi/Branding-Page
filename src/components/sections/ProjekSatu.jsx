import projekSatu from "../images/project.png";

function ProjekSatu() {
  return (
    <section className="flex flex-col gap-6 items-center">
      <img src={projekSatu} alt="projek1" />
      <h3 className="text-xl font-semibold">
        Tiket.in - Aplikasi Pemesanan Tiket Bus dan Informasi UMKM
      </h3>
    </section>
  );
}

export default ProjekSatu;
