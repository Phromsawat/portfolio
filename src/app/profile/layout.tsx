import NavBar from "@/components/NavBar";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <NavBar />
      {children}
    </div>
  );
}
