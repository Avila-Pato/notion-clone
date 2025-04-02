import { useEffect, useState } from "react";

export const useScrollTop = (threshold = 10) => {
    //threshold es un parametro que recive un valor de 10 que representa el numero de pixeles
    // de desplazamiento desde la parte superior para que se active el estado 
    const [scrollTop, setScrollTop] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > threshold) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll); // window detecta el listener que detecta el scroll y ejecuta la función
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);


    return scrollTop // Retornael estado
}