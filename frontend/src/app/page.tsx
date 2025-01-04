import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/jsm2025.svg"
          alt="Jeffrey Scott Martin Logo"
          width={60}
          height={60}
          priority
        />
        <h1 className="text-4xl font-bold text-center">
          Jeffrey Scott Martin</h1>
        <h2 className="text-2xl font-semibold text-center">
          Creative Engineer</h2>
        <p className="text-lg">
          <strong>Coming Soon</strong><br />
        Motivated and results-driven Full Stack Developer seeking a full-time position to contribute extensive experience in designing and developing scalable web applications. Proficient in front-end and back-end development, database management, and creating seamless user experiences. With a proven track record of delivering high-quality solutions across SaaS platforms, learning management systems, and interactive web projects, I aim to leverage my skills to drive innovation and exceed business objectives within a collaborative team environment.
        </p>
        </main>
    </div>
  );
}
