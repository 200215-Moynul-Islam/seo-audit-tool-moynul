import Container from "../ui/Container";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-neutral-200">
      <Container className="flex h-16 items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">SEO Audit Tool</h1>

          <p className="text-sm text-neutral-500">
            Analyze websites for SEO best practices
          </p>
        </div>
      </Container>
    </header>
  );
}
