import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
        <p className="text-xl mb-8">
          Explore breathtaking destinations and create unforgettable memories with TravelEase.
        </p>
        <Button size="lg">Start Planning</Button>
      </div>
    </section>
  )
}

