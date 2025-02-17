import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlaneTakeoff } from "lucide-react"

export function Header() {
  return (
    <header className="bg-background py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <PlaneTakeoff className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">TravelEase</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="text-foreground hover:text-primary">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="#" className="text-foreground hover:text-primary">
                Packages
              </Link>
            </li>
            <li>
              <Link href="#" className="text-foreground hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-foreground hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button>Book Now</Button>
      </div>
    </header>
  )
}

