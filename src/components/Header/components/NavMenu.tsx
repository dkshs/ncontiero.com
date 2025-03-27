import type { SectionsTypes } from "@/utils/types";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavMenuProps {
  readonly sections: SectionsTypes;
}

export function NavMenu({ sections }: NavMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" size="icon" variant="ghost" radius="full">
          <Menu size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-border/60 bg-background/60 shadow-xl shadow-secondary/10 backdrop-blur-md dark:bg-background/80 md:w-48">
        {Object.entries(sections).map(([key, value], i) => (
          <DropdownMenuItem
            key={key}
            asChild
            className="p-2 text-base capitalize"
          >
            <Link href={i === 0 ? "/" : `/#${value.id}`}>{value.id}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
