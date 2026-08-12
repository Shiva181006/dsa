import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function CodeBlock({ code, language = 'javascript', title }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-md border border-[#1E293B] bg-[#0F172A] overflow-hidden shadow-xs text-left">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#0B0F19] border-b border-[#1E293B] text-xs font-mono text-[#94A3B8]">
          <span className="font-semibold text-[#F8FAFC]">{title}</span>
          <span className="text-[#3B82F6] uppercase tracking-wider text-[10px] font-bold">{language}</span>
        </div>
      )}
      <div className="relative group">
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 px-2 py-1 rounded bg-[#1E293B] hover:bg-[#334155] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#334155] transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#10B981]" />
              <span className="text-[#10B981] font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Copy</span>
            </>
          )}
        </button>
        <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-[#E2E8F0] selection:bg-[#2563EB] selection:text-white">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
