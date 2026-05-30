import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdf4] text-zinc-800">
      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-16">
        {/* HERO */}
        <header className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-600 shadow-sm shadow-black/20">
              Portfolio
            </p>

            <div className="space-y-4">
              <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
                Halo, saya{" "}
                <span className="text-amber-800">Aulia Ramdani Nur</span>.
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
                Saya seorang mahasiswa Teknik Informatika di Universitas
                Padjadjaran. Lihat karya saya, kemampuan saya, dan cara
                menghubungi saya di bawah.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-600"
              >
                Lihat Karya
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-amber-700 hover:text-amber-700"
              >
                Kontak Saya
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">
              Tentang Saya
            </p>

            <h2 className="mt-6 text-2xl font-semibold text-zinc-900">
              Frontend Developer & Desainer UI
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              Saya menggabungkan kreativitas dan kode untuk membuat situs yang
              mudah digunakan, cepat, dan terlihat profesional. Saya
              berpengalaman dengan Next.js, TypeScript, Tailwind CSS, dan desain
              yang berfokus pada pengguna.
            </p>

            <ul className="mt-6 space-y-3 text-zinc-600">
              <li>• Membangun website landing page.</li>
              <li>• Mengoptimalkan performa dan aksesibilitas.</li>
              <li>• Mengubah desain menjadi pengalaman interaktif.</li>
            </ul>
          </div>
        </header>
        {/* PROJECTS */}
        <section id="projects" className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
              Proyek Unggulan
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900">
              Karya Terbaru
            </h2>

            <p className="max-w-3xl text-zinc-600">
              Beberapa proyek yang saya kembangkan:
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* PROJECT 1 */}
            <article className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:border-amber-700/30">
              <div className="relative h-64 flex gap-2 p-4 bg-[#f5efe2]">
                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/protera1.png"
                    alt="Proteksi Astera"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/protera2.png"
                    alt="Proteksi Astera"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
                  Vehicle Insurance
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-zinc-900">
                  Proteksi Astera
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Platform asuransi kendaraan dengan promo menarik dan pilihan
                  paket lengkap.
                </p>
              </div>
            </article>

            {/* PROJECT 2 */}
            <article className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:border-amber-700/30">
              <div className="relative h-64 flex gap-2 p-4 bg-[#f5efe2]">
                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/gizello1.png"
                    alt="Gizello"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/gizello3.png"
                    alt="Gizello"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
                  E-Commerce
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-zinc-900">
                  Gizello
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Platform inovatif dengan antarmuka intuitif dan fitur lengkap
                  untuk meningkatkan produktivitas bisnis Anda.
                </p>
              </div>
            </article>

            {/* PROJECT 3 */}
            <article className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:border-amber-700/30">
              <div className="relative h-64 flex gap-2 p-4 bg-[#f5efe2]">
                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/zeenb2.png"
                    alt="Zee&B"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/zeenb3.png"
                    alt="Zee&B"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
                  Food E-Commerce
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-zinc-900">
                  Zee&B
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Website untuk melakukan pemesanan melalui online.
                </p>
              </div>
            </article>
          </div>
        </section>
        {/* DESIGN SECTION */}
        <section id="design" className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-rose-700">
              Design
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900">
              Design Website
            </h2>

            <p className="max-w-3xl text-zinc-600">
              Beberapa desain website dan UI yang pernah saya buat menggunakan
              Figma.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* DESIGN 1 */}
            <article className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:border-rose-700/30">
              <div className="relative h-64 flex gap-2 p-4 bg-[#f5efe2]">
                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/FProtera1.png"
                    alt="Protera"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/FProtera2.png"
                    alt="Protera"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-rose-700">
                  Web Design
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-zinc-900">
                  Proteksi Astera
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Desain awal website Proteksi Astera dengan tampilan modern dan
                  profesional.
                </p>
              </div>
            </article>

            {/* DESIGN 2 */}
            <article className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:border-rose-700/30">
              <div className="relative h-64 flex gap-2 p-4 bg-[#f5efe2]">
                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/FRuangKu1.png"
                    alt="RuangKu"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-rose-700">
                  Education Design
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-zinc-900">
                  RuangKu
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Desain platform edukasi modern yang berfokus pada pengalaman
                  belajar yang nyaman dan interaktif.
                </p>
              </div>
            </article>

            {/* DESIGN 3 */}
            <article className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:border-rose-700/30">
              <div className="relative h-64 flex gap-2 p-4 bg-[#f5efe2]">
                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/FMyStore1.png"
                    alt="MyStore"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-rose-700">
                  E-Commerce Design
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-zinc-900">
                  MyStore
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Desain website e-commerce dengan tampilan clean dan modern.
                </p>
              </div>
            </article>
          </div>
        </section>
        {/* MODUL SECTION */}
        <section id="modules" className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
              Modul
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900">
              Project Modul & Sistem
            </h2>

            <p className="max-w-3xl text-zinc-600">
              Beberapa modul dan sistem yang pernah saya rancang dan kembangkan.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* SSD */}
            <article className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:border-amber-700/30">
              <div className="relative h-64 flex gap-2 p-4 bg-[#f5efe2]">
                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ssd1.png"
                    alt="SSD"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ssd2.png"
                    alt="SSD"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-zinc-900">SSD</h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Platform untuk guru, siswa dan orang tua untuk memantau
                  aktivitas dan pembelajaran.
                </p>
              </div>
            </article>

            {/* MYSCHOOL */}
            <article className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:border-amber-700/30">
              <div className="relative h-64 flex gap-2 p-4 bg-[#f5efe2]">
                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/myschool1.png"
                    alt="MySchool"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/myschool2.png"
                    alt="MySchool"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-zinc-900">
                  MySchool
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Platform manajemen sekolah terpadu untuk guru, siswa, dan
                  orang tua.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
              Keahlian
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900">
              Skill & Teknologi
            </h2>

            <p className="max-w-3xl text-zinc-600">
              Beberapa teknologi, tools, dan kemampuan yang saya gunakan dalam
              pengembangan website dan desain UI modern.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* FRONTEND */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900">Frontend</h3>

              <ul className="mt-5 space-y-3 text-zinc-600">
                <li>• Next.js</li>
                <li>• React.js</li>
                <li>• TypeScript</li>
                <li>• JavaScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            {/* UI UX */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900">
                UI/UX Design
              </h3>

              <ul className="mt-5 space-y-3 text-zinc-600">
                <li>• Figma</li>
                <li>• Wireframe</li>
                <li>• Prototype</li>
                <li>• Responsive Design</li>
                <li>• Design System</li>
              </ul>
            </div>

            {/* TOOLS */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900">Tools</h3>

              <ul className="mt-5 space-y-3 text-zinc-600">
                <li>• Git & GitHub</li>
                <li>• VS Code</li>
                <li>• Canva</li>
                <li>• Vercel</li>
                <li>• Postman</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
                Hubungi Saya
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-zinc-900">
                Siap untuk proyek baru?
              </h2>

              <p className="mt-4 max-w-2xl text-zinc-600 leading-7">
                Saya terbuka untuk freelance, kolaborasi project, dan peluang
                kerja sama lainnya.
              </p>
            </div>

            <a
              href="mailto:email@domain.com"
              className="inline-flex items-center justify-center rounded-full bg-amber-700 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-600"
            >
              Kirim Email
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Email",
                value: "aramdaninur@gmail.com",
              },
              {
                label: "Instagram",
                value: "@auliarn_21",
              },
              {
                label: "Lokasi",
                value: "Indonesia",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-zinc-200 bg-[#fffaf0] p-5"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">
                  {item.label}
                </p>

                <p className="mt-3 text-lg font-semibold text-zinc-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
