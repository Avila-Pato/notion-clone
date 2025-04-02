"use client"

import { Spinner } from "@/components/spinner"
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()

    return (
        <div className="max-w-3xl space-x-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Tus Ideas, Documentos & Planes. Unidos. bienvenido a
                <span className="underline"> NotionCraft</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl pb-3">
                NotionCraft es un espacio de trabajo optimizado donde <br />
                la rapidez y la eficiencia fluyen naturalmente.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
        {/* La propiedad asChild en el componente <Button> indica que el botón no renderizará un botón HTML (<button>) por sí mismo, sino que pasará todos sus estilos y comportamientos al componente hijo que contiene. por lo tanto  trasnfiere el comportamiento a la etiqueta Link util para
            redireccionar sin recargar la pagina  */}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href="/documents">
                        Entrar a NotionCraft
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                </Button>
            )}

            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Obten NotionCraft Gratis
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        </div>
    )
}