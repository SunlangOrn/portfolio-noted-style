import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonRounded() {
  return (
    <div className="flex items-center gap-3">
      {/* Fully rounded text button */}
      <Button className="rounded-full">Get Started</Button>

      {/* Fully rounded icon button */}
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon className="size-5" />
      </Button>
    </div>
  )
}