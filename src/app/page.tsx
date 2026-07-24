import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <Image
        src="/profile.png"
        alt="Phromsawat Phoolprom"
        width={200}
        height={250}
        priority
      />
      <h1 className="text-4xl font-bold">Portfolio</h1>
      <p className="text-lg text-gray-600">Coming soon...</p>
    </main>
  );
}
