import AuditForm from "../components/audit/AuditForm";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Container from "../components/ui/Container";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <Header />

      <main className="flex-1">
        <Container className="py-16">
          <section className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-5xl font-bold tracking-tight">
              Audit Any Website
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Analyze SEO best practices, identify issues, and receive
              actionable recommendations.
            </p>
          </section>

          <AuditForm />
        </Container>
      </main>

      <Footer />
    </div>
  );
}
