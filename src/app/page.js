import MainNav from "@/components/main-navbar/mainNav";

export default function Home() {
  return (
    <main>
      <MainNav />
      <section className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-6xl">Next.js & ShadcnUI Starter Template</h2>
      </section>
    </main>
  );
}
