import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="w-48 h-44 overflow-hidden">
        <Image
          src="/profile.png"
          alt="Phromsawat Phoolprom"
          width={200}
          height={280}
          className="object-cover object-top w-full h-auto"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold">Portfolio</h1>
      <p className="text-lg text-gray-600">Coming soon...</p>
    </main>
  );
}
