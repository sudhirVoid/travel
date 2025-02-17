import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Umbrella, Camera } from "lucide-react"

const tips = [
  {
    title: "Research Your Destination",
    description: "Learn about local customs and attractions before you go.",
    icon: Lightbulb,
  },
  { title: "Pack Smart", description: "Bring versatile clothing and essential items for your trip.", icon: Umbrella },
  { title: "Capture Memories", description: "Don't forget to take photos and keep a travel journal.", icon: Camera },
]

export function TravelTips() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <Card key={tip.title}>
              <CardHeader>
                <tip.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tip.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

