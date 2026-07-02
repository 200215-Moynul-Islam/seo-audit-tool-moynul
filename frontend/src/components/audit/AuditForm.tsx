import { useState } from "react";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";

export default function AuditForm() {
  const [url, setUrl] = useState("");
  const [loading] = useState(false);
  const [error, setError] = useState("");

  function validateUrl(value: string) {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!url.trim()) {
      setError("Website URL is required.");
      return;
    }

    if (!validateUrl(url)) {
      setError("Enter a valid URL.");
      return;
    }

    setError("");

    console.log(url);
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
