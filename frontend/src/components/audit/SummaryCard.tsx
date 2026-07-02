import Card from "../ui/Card";

interface SummaryCardProps {
  title: string;
  value: string | number;
  color?: string;
}

export default function SummaryCard({
  title,
  value,
  color = "text-black",
}: SummaryCardProps) {
  return (
    <Card>
      <p className="text-sm text-neutral-500">{title}</p>

      <h2 className={`mt-3 text-3xl font-bold ${color}`}>{value}</h2>
    </Card>
  );
}
