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
                Hello, I'm{" "}
                <span className="text-amber-800">Aulia Ramdani Nur</span>.
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
                I'm an Informatics Engineering student at Padjadjaran
                University. See my work, my skills, and how to contact me below.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-amber-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-800 active:bg-amber-800"
              >
                View Works
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-amber-800 bg-white px-6 py-3 text-sm font-semibold text-amber-800 transition hover:bg-amber-800 hover:text-white active:bg-amber-800"
              >
                My Contacts
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">
              About Me
            </p>

            <h2 className="mt-6 text-2xl font-semibold text-zinc-900">
              Frontend Developer & Desainer UI
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              I combine creativity and code to create easy-to-use, fast, and
              professional-looking websites. I'm experienced with Next.js,
              TypeScript, Tailwind CSS, ans user-centric design.
            </p>

            <ul className="mt-6 space-y-3 text-zinc-600">
              <li>• Building a landing page website</li>
              <li>• Optimize performance and accessibility</li>
              <li>• Turning designs into interactive experiences</li>
            </ul>
          </div>
        </header>
        {/* PROJECTS */}
        <section id="projects" className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
              Featured Projects
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900">
              Latest Work
            </h2>

            <p className="max-w-3xl text-zinc-600">
              Some projects I developed:
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
                  Vehicle insurance platform with attractive promotions and a
                  complete selection of packages.
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
                  An innovative platform with an intuitive interface and
                  comprehensive features to increase your business productivity.
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
                  Website for making online orders.
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
              Some of the website and UI designs I have created using Figma.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* DESIGN 1 */}
            <article className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:border-amber-700/30">
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
                <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
                  Web Design
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-zinc-900">
                  Proteksi Astera
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  The initial design of the Astera Protection website with a
                  modern and professional appearance.
                </p>
              </div>
            </article>

            {/* DESIGN 2 */}
            <article className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:border-amber-700/30">
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
                <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
                  Education Design
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-zinc-900">
                  RuangKu
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Modern educational platform design that focuses on a
                  comfortable and interactive learning experience.
                </p>
              </div>
            </article>

            {/* DESIGN 3 */}
            <article className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:border-amber-700/30">
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
                <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
                  E-Commerce Design
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-zinc-900">
                  MyStore
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  E-commerce website design with a clean and modern look.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* MODUL SECTION */}
        <section id="modules" className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
              Module
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900">
              Project Module & System
            </h2>

            <p className="max-w-3xl text-zinc-600">
              Project Module & System Several modules and systems that I have
              designed and developed.
            </p>
          </div>

          {/* MYSCHOOL */}
          <article className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:border-amber-700/30">
            <div className="relative h-64 flex gap-2 p-4 bg-[#f5efe2]">
              <div className="relative flex-1 rounded-2xl overflow-hidden">
                <Image
                  src="/images/nc1.png"
                  alt="neutroncode"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative flex-1 rounded-2xl overflow-hidden">
                <Image
                  src="/images/nc2.png"
                  alt="neutroncode"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-zinc-900">
                Nutroncodes
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Compiling and designing modules for teaching materials and
                exercises for students taking part in training
              </p>
            </div>
          </article>

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
                  Platform for teachers, students and parents to monitor
                  activities and learning.
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
                  An integrated school management platform for teachers,
                  students and parents.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-700">
              Skill
            </p>

            <h2 className="text-3xl font-semibold text-zinc-900">
              Skills & Technology
            </h2>

            <p className="max-w-3xl text-zinc-600">
              Some of the technologies, tools, and skills I use in modern
              website development and UI design.
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
                <li>• WordPress</li>
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
                Contact Me
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-zinc-900">
                Ready for a new project?
              </h2>

              <p className="mt-4 max-w-2xl text-zinc-600 leading-7">
                I am open to freelance, project collaborations, and other
                collaboration opportunities.
              </p>
            </div>

            <a
              href="mailto:aramdaninur@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-amber-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              Send Email
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
                label: "Location",
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

                <p className="mt-3 text-lg font-semibold text-zinc-900 break-words">
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
