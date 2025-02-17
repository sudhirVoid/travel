import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const destinations = [
  { name: "Paris", description: "The City of Light", image: "/placeholder.svg?height=200&width=300" },
  { name: "Tokyo", description: "A blend of tradition and modernity", image: "/placeholder.svg?height=200&width=300" },
  { name: "New York", description: "The Big Apple", image: "/placeholder.svg?height=200&width=300" },
]

export function PopularDestinations() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.name}>
              <CardHeader>
                <CardTitle>{destination.name}</CardTitle>
                <CardDescription>{destination.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  width={300}
                  height={200}
                  className="rounded-md"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

