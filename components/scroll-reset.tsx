"use client"

import { useEffect } from "react"

const PORTFOLIO_SCROLL_KEY = "portfolio-return-scroll-y"

export function ScrollReset() {
  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = "manual"

    const savedScrollY = window.sessionStorage.getItem(PORTFOLIO_SCROLL_KEY)

    requestAnimationFrame(() => {
      if (savedScrollY !== null) {
        window.scrollTo({ top: Number(savedScrollY), left: 0, behavior: "auto" })
        window.sessionStorage.removeItem(PORTFOLIO_SCROLL_KEY)
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
