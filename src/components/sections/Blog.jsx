import BlogItem from "./BlogItem";

function Blog() {
  return (
    <section className="flex flex-col gap-[3rem] ">
      <div className="flex flex-col items-center gap-[2rem] font-semibold">
        <h2 className="text-4xl text-[#3281FF]">Blogs</h2>
        <h3 className="text-[#B3CEF8] text-2xl">
          Tips dan Trik dari saya untuk Anda
        </h3>
      </div>
      <div className="flex justify-between gap-2 ">
        <BlogItem
          primary
          tanggal="4 Desember 2021 - 20:21"
          judul="Hal yang Harus Diperhatikan dalam Membuat Website"
          isi="Berikut merupakan hal-hal yang harus diperhatikan dalam membuat
            website, agar tidak menyesal dikemudian hari..."
        />
        <BlogItem
          tanggal="4 Desember 2021 - 20:21"
          judul="Hal yang Harus Diperhatikan dalam Membuat Website"
          isi="Berikut merupakan hal-hal yang harus diperhatikan dalam membuat
            website, agar tidak menyesal dikemudian hari..."
        />
        <BlogItem
          tanggal="4 Desember 2021 - 20:21"
          judul="Hal yang Harus Diperhatikan dalam Membuat Website"
          isi="Berikut merupakan hal-hal yang harus diperhatikan dalam membuat
            website, agar tidak menyesal dikemudian hari..."
        />
      </div>
    </section>
  );
}

export default Blog;
