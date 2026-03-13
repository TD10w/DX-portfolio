"use client"

import { useEffect } from "react"

const PORTFOLIO_SCROLL_KEY = "portfolio-return-scroll-y"
const RETURN_PROJECT_KEY = "portfolio-return-project-slug"
const RETURN_HIGHLIGHT_KEY = "portfolio-highlight-project-slug"

export function ScrollReset() {
  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = "manual"

    const savedScrollY = window.sessionStorage.getItem(PORTFOLIO_SCROLL_KEY)

    requestAnimationFrame(() => {
      if (savedScrollY !== null) {
        const savedProjectSlug = window.sessionStorage.getItem(RETURN_PROJECT_KEY)

        window.scrollTo({ top: Number(savedScrollY), left: 0, behavior: "auto" })
        window.sessionStorage.removeItem(PORTFOLIO_SCROLL_KEY)

        if (savedProjectSlug) {
          window.sessionStorage.setItem(RETURN_HIGHLIGHT_KEY, savedProjectSlug)
          window.sessionStorage.removeItem(RETURN_PROJECT_KEY)
        }

        return
      }

      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      }
    })

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  return null
}
