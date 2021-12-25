import ProjekSatu from "./ProjekSatu";

function SectionTiga() {
  return (
    <section className="flex flex-col gap-[3rem] items-center pb-[6rem]">
      <div className="flex flex-col gap-6 font-semibold items-center">
        <h2 className="text-4xl text-[#3281FF]">Projects</h2>
        <h3 className="text-[#B3CEF8] text-2xl">
          Project yang pernah saya garap
        </h3>
      </div>
      <ProjekSatu />
      <ProjekSatu />
      <ProjekSatu />
    </section>
  );
}

export default SectionTiga;
