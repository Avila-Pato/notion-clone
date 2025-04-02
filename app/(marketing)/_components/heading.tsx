"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const Heading = () => {
    return (
        <div className="max-w-3xl space-x-4">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                    Tus Ideas, Documentos & Planes. Unidos. bienvenido a 
                    <span className="underline"> NotionCraft</span>
                </h1>
                <h3 className="text-base sm:text-xl md:text-2xl">
                NotionCraft es un espacio de trabajo optimizado donde <br />
                la rapidez y la eficiencia fluyen naturalmente.
                </h3>
                <Button>
                    Ver demo
                    <ArrowRight className="h-4 w-4 ml-2"/>
                </Button>
        </div>
    )
}