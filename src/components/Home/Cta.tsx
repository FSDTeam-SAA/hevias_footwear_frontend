import React from "react"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

const Cta = () => {
    return (
        <section className="bg-btnPrimary mx-4 md:mx-20 rounded-2xl py-12 md:py-16">
            <div className="px-4 text-center text-white space-y-4 flex flex-col items-center">
                <h1 className="text-2xl md:text-[40px] font-semibold leading-snug">
                    Ready To Grow Your Business?
                </h1>
                <p className="text-base md:text-lg font-normal max-w-2xl">
                    Let’s discuss the best approach to meet your brand’s specific needs.
                </p>

                {/* Align the button perfectly center */}
                <div className="flex justify-center">
                    <Button
                        type="button"
                        className="group inline-flex h-auto items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-[#2A3037] hover:bg-gray-100 transition"
                    >
                        <span className="leading-none align-middle">Sign up</span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border  bg-btnPrimary shrink-0">
                            <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-0.5" />
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Cta
