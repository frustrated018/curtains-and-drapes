import Sidebar from "@/components/dashboard/sidebar";

const AdimnDashboardLayout = ({ children }) => {
  return (
    <section className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="h-full w-full">{children}</div>
    </section>
  );
};

export default AdimnDashboardLayout;
