interface TagBadgeProps {
  tag: string;
}

export default function TagBadge({ tag }: TagBadgeProps) {
  return (
    <li className="text-xs font-medium text-primary rounded-2xl shadow-sm px-1.5 py-0.5 bg-border-secondary border-[2px] border-border">
      {tag}
    </li>
  );
}
