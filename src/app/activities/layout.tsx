import NavBar from "@/components/NavBar";

export default function ActivitiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
