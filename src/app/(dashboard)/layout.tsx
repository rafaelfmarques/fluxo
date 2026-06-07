import { SideNavBar } from "@/components/layout/SideNavBar";
import { Header } from "@/components/layout/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideNavBar />
      <main className="md:ml-64 flex flex-col min-h-screen">
        <Header />
        <div className="p-10 space-y-8 max-w-[1200px] mx-auto w-full">
          {children}
        </div>
      </main>
    </>
  );
}
