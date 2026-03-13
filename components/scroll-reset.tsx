"use client"

import { useEffect } from "react"

export function ScrollReset() {
  useEffect(() => {
    const { hash } = window.location
    const previousScrollRestoration = window.history.scrollRestoration

    window.history.scrollRestoration = "manual"

    if (!hash) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      })
    }

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  return null
}
