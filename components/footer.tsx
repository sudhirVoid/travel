import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About TravelEase</h3>
          <p className="text-sm">
            We make your travel dreams come true with unforgettable experiences and personalized service.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Destinations</Link>
            </li>
            <li>
              <Link href="#">Packages</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="text-sm not-italic">
            <p>123 Travel Street</p>
            <p>Wanderlust City, EX 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@travelease.com</p>
          </address>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm">
        <p>&copy; 2023 TravelEase. All rights reserved.</p>
      </div>
    </footer>
  )
}

