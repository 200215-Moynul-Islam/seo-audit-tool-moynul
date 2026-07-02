import { useState } from "react";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";

interface AuditFormProps {
  loading?: boolean;
  onSubmit: (url: string) => void;
}

export default function AuditForm({
  loading = false,
  onSubmit,
}: AuditFormProps) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  function validateUrl(value: string) {
    try {
      const parsed = new URL(value);

      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = url.trim();

    if (!value) {
      setError("Website URL is required.");
      return;
    }

    if (!validateUrl(value)) {
      setError("Enter a valid URL.");
      return;
    }

    setError("");

    onSubmit(value);
  }

  return (
    <Card className="mx-auto max-w-3xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          id="website-url"
          label="Website URL"
          type="url"
          placeholder="https://example.com"
          value={url}
          error={error}
          onChange={(e) => {
            setUrl(e.target.value);

            if (error) {
              setError("");
            }
          }}
        />

        <Button type="submit" loading={loading} fullWidth>
          Start Audit
        </Button>
      </form>
    </Card>
  );
}
