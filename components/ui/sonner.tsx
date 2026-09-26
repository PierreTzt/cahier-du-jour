"use client"

import { Toaster as Sonner, type ToasterProps } from "sonner"

/**
 * Les notifications des adultes : « Séance déplacée à jeudi — Annuler ».
 *
 * Le composant de shadcn/ui, sans `next-themes` ni icônes : un seul thème,
 * clair (« un seul look, assumé »), et une notification dit ce qui s'est
 * passé en une phrase — pas besoin d'une coche verte ou d'un triangle pour
 * ça. En bas de l'écran, sous le pouce, au-dessus de la barre du téléphone.
 */
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      position="bottom-center"
      /* Six secondes : le temps de lire la phrase et d'atteindre « Annuler »
         au pouce. Les quatre par défaut s'éteignaient sous le doigt. */
      duration={6000}
      offset={16}
      mobileOffset={{ bottom: "max(16px, env(safe-area-inset-bottom))" }}
      className="toaster group"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "flex w-full items-center gap-3 rounded-feuille bg-encre py-2 pl-4 pr-2 font-sans text-[0.9375rem] leading-snug text-papier shadow-[0_18px_40px_-18px_rgba(29,40,54,0.7)]",
          title: "flex-1",
          actionButton:
            "inline-flex min-h-11 shrink-0 items-center rounded-full bg-papier px-4 text-[0.875rem] font-bold text-encre transition-colors hover:bg-carte",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
