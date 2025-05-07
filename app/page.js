


import { getMetadataForPage } from "./lib/metadata";
import HomeClient from "./components/HomeClient";

export const metadata = getMetadataForPage({
  title: "Accueil | Pause Réflexologie",
  description: "Réflexologie & Shiatsu assis.",
  keywords: [
    "Shiatsu",
    "Réflexologie",
    "saint gervais les bains",
    "chamonix",
    "megeve",
    "saint nicolas de veroce",
    "val montjoie",
    "val d'arley",
    "pays du mont blanc",
    "vallee de l'arve",
    "bien etre",
    "relaxation",
    "stress",
    "tension",
    "fatigue",
    "soulager",
    "detente",
    "haute-savoie",
  ],
  openGraph: {
    title: "Accueil | Pause Réflexologie",
    description: "Réflexologie & Shiatsu assis.",
    url: "https://www.pausereflexo.fr",
    siteName: "Pause Réflexo",
    images: [
      {
        url: "https://www.pausereflexo.fr/images/fond.webp",
        width: 1200,
        height: 630,
        alt: "Réflexologie & Shiatsu assis.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accueil | Pause Réflexologie",
    description: "Réflexologie & Shiatsu assis.",
    image: "https://www.pausereflexo.fr/images/fond.webp",
  },
});

export default function HomePage() {
  return <HomeClient />;
}