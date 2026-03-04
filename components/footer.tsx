export function Footer() {
  return (
    <footer className="py-12 bg-background border-t-2 border-foreground/10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center">
              <span className="text-xs font-bold font-sans text-foreground">{"P"}</span>
            </div>
            <span className="font-sans text-sm text-muted-foreground">
              {"Built with care. All rights reserved."}
            </span>
          </div>
          <span className="font-sans text-xs text-muted-foreground">
            {"Designed & developed by me."}
          </span>
        </div>
      </div>
    </footer>
  )
}
