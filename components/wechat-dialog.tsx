"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import wechatQr from "@/img/WechatIMG289.jpg"

interface WeChatDialogProps {
  children: React.ReactNode
}

export function WeChatDialog({ children }: WeChatDialogProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("Dx_27u")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogTitle className="text-center">扫码添加微信</DialogTitle>
        <div className="flex flex-col items-center gap-6 p-4">
          <div className="relative w-64 h-64 rounded-lg overflow-hidden border border-border/10 shadow-sm">
            <Image
              src={wechatQr}
              alt="WeChat QR Code"
              fill
              className="object-contain"
            />
          </div>
          
          <div className="flex items-center gap-3 px-4 py-2.5 bg-secondary/50 rounded-lg border border-border/50 w-full max-w-[240px] justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">微信号</span>
              <span className="text-sm font-bold text-foreground select-all font-mono">Dx_27u</span>
            </div>
            <button
              onClick={handleCopy}
              className="p-1.5 hover:bg-background rounded-md transition-all text-muted-foreground hover:text-foreground active:scale-95"
              title="Copy WeChat ID"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
