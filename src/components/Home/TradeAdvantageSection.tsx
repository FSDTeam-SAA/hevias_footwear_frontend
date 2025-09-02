import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function TradeAdvantageSection() {
  const features = [
    {
      icon: '/trade/trade1.png',
      remark: "Exclusive Focus",
      title: "Mexico-US Trade Specialization",
      description:
        "Deep expertise in the LATAM-US corridor with exclusive focus on cross-border trade facilitation and regulatory compliance",
      stat: "95% Faster customs Clearance",
      iconColor: "text-blue-600",
    },
    {
      icon: '/trade/trade2.png',
      remark: "Trede Expert",
      title: "USMCA Trade Optimization",
      description: "Expert navigation of trade agreements delivering 15-25% cost savings over traditional exports",
      stat: "Up to 25% cost reduction",
      iconColor: "text-green-600",
    },
    {
      icon: '/trade/trade3.png',
      remark: "Speed to Market",
      title: "Geographic Proximity Advantage",
      description: "3-7 day shipping vs 30-45 days from Asia-Mexico inventory costs and faster market response",
      stat: "85% faster delivery",
      iconColor: "text-purple-600",
    },
    {
      icon: '/trade/trade4.png',
      remark: "Premium Quality",
      title: "Superior Quality Standards",
      description:
        "Stricter supplier verification and quality control than global marketplaces ensure consistent excellence",
      stat: "99.2% quality rating",
      iconColor: "text-orange-600",
    },
  ]

  return (
    <section className="container mt-24">
      <div className="text-center mb-12">
        <p className="text-sm mb-2 font-medium">Why Choose FastLane Over Global Competitors</p>
        <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
          Latin America-US Trade Advantage
        </h2>
        <p className="text-primary max-w-3xl mx-auto text-balance">
          FastLane connects brands to Latin America&apos;s manufacturing excellence with unmatched speed, quality and trade
          expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="mb-5">
                <Image
                src={feature.icon}
                alt="icon.png"
                width={1000}
                height={1000}
                className="h-10 w-10 mx-auto"
                />
              </div>

              <button className="py-1 px-2 bg-[#80808023] rounded-3xl mb-4 text-sm">{feature.remark}</button>

              <h3 className="font-semibold text-lg mb-3 text-card-foreground text-balance  h-14 flex flex-col items-center justify-center truncate">{feature.title}</h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-balance h-24 flex flex-col items-center justify-center truncate">{feature.description}</p>

              <div className="text-sm font-semibold">{feature.stat}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
