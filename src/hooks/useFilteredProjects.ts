
import { useMemo, useState } from "react";
import type { Project } from "../entities/model/types";

export function useFilteredProjects(list: Project[]) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<"all" | string>("all");

  const tags = useMemo(() => {
    const s = new Set<string>();
    list.forEach(p => p.tags.forEach(t => s.add(t)));
    return ["all", ...Array.from(s)];
  }, [list]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return list.filter(p => {
      const matchesText = !term
        || p.title.toLowerCase().includes(term)
        || p.subtitle.toLowerCase().includes(term)
        || p.description.toLowerCase().includes(term)
        || p.stack.join(" ").toLowerCase().includes(term);
      const matchesTag = tag === "all" || p.tags.includes(tag);
      return matchesText && matchesTag;
    });
  }, [list, q, tag]);

  return { q, setQ, tag, setTag, tags, filtered };
}
