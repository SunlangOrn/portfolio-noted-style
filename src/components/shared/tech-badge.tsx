import { Badge } from "@/components/ui/badge";
import type { TechIcon } from "@/config/tech-stack";

type TechBadgeProps = {
  name: string;
  icon?: TechIcon; // optional ដើម្បីឲ្យ ProjectCard នៅតែប្រើបាន
  color?: string;
};

export function TechBadge({ name, icon: Icon, color }: TechBadgeProps) {
  return (
    <Badge variant="secondary" className="gap-1.5 px-2.5 py-1 text-xs font-normal">
      {Icon && (
        <Icon
          className="size-3.5 shrink-0"
          style={color ? { color } : undefined}
        />
      )}
      <span>{name}</span>
    </Badge>
  );
}