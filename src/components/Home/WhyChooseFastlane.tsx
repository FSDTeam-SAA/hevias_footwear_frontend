import { Card, CardContent } from "@/components/ui/card"
import { Brain, ChartNoAxesCombined, ChartSpline, CircleCheck, ClockAlert, DollarSign } from "lucide-react"

export function WhyChooseFastlane() {
    const features = [
        {
            icon: ClockAlert,
            persentage: "85%",
            title: "Direct Sourcing",
            description: "14-30 days vs. 60-90 days from Asia",
            textColor: "#3B82F6",
        },
        {
            icon: DollarSign,
            persentage: "25%",
            title: "Cost Savings",
            description: "Through USMCA trade benefits",
            textColor: "#22C55E",
        },
        {
            icon: CircleCheck,
            persentage: "99.2%",
            title: "Quality Rating",
            description: "Verified supplier standards",
            textColor: "#6366F1",
        },
        {
            icon: ChartNoAxesCombined,
            persentage: "$250K+",
            title: "Annual Savings",
            description: "Average for $1M import volume",
            textColor: "#A855F7",
        },
        {
            icon: Brain,
            persentage: "3x",
            title: "Better Recommendations",
            description: "AI accuracy vs traditional matching",
            textColor: "#EF4444",
        },
        {
            icon: ChartSpline,
            persentage: "60%",
            title: "Faster Response Times",
            description: "Supplier communication efficiency",
            textColor: "#EAB308",
        },

    ]

    return (
        <section className="container mt-24">
            <div className="text-center mb-12">
                <p className="text-sm mb-2 font-medium">
                    Why Choose FastLane Over Global Competitors
                </p>
                <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
                    Latin America-US Trade Advantage
                </h2>
                <p className="text-primary max-w-3xl mx-auto text-balance">
                    FastLane connects brands to Latin America&apos;s manufacturing
                    excellence with unmatched speed, quality and trade expertise
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        className="bg-card shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <CardContent className="p-6 text-center">
                            <div className="mb-5  flex justify-center">
                                <feature.icon
                                    className="h-10 w-10"
                                    style={{ color: feature.textColor }}
                                />
                            </div>
                            <p >{feature.persentage}</p>

                            <h3 className="font-semibold text-lg   text-card-foreground text-balance h-14 flex items-center justify-center truncate">
                                {feature.title}
                            </h3>

                            <p className="text-sm text-muted-foreground  pb-5 leading-relaxed text-balance flex items-center justify-center truncate">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
