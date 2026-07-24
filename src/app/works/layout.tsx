import NavBar from "@/components/NavBar";

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
