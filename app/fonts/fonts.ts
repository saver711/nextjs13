import { Roboto } from "next/font/google"
import localFont from "next/font/local"

export const futur = localFont({
    src: "./futur.ttf",
    variable: "--futur"
})
export const futurbold = localFont({
    src: "./Futura_Extra_Black_font.ttf",
    variable: "--futur-bold"
})

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', "700"]
})