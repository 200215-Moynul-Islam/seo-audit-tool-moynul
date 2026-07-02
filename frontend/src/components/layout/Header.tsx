import Container from "../ui/Container";

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            SEO Audit Tool
          </h1>

          <p className="text-sm text-neutral-500">
            Analyze websites for SEO best practices
          </p>
        </div>
      </Container>
    </header>
  );
}