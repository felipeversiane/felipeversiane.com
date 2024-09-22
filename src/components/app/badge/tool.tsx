interface ToolBadgeProps {
  tool: string;
}

export default function ToolBadge({ tool }: ToolBadgeProps) {
  return (
    <li className="text-primary-foreground text-xs border border-border rounded-md px-2 py-1 flex items-center justify-center">
      {tool}
    </li>
  );
}
