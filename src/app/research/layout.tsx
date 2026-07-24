import NavBar from "@/components/NavBar";

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
