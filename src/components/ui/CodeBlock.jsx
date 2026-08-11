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
    <div className="my-4 rounded-md border border-[#20251F] bg-[#20251F] overflow-hidden shadow-xs text-left">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#181C17] border-b border-[#2D332C] text-xs font-mono text-[#EFE9DD]">
          <span className="font-semibold text-[#FFFCF5]">{title}</span>
          <span className="text-[#C88719] uppercase tracking-wider text-[10px] font-bold">{language}</span>
        </div>
      )}
      <div className="relative group">
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 px-2 py-1 rounded bg-[#2D332C] hover:bg-[#394238] text-[#EFE9DD] border border-[#394238] transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#526B52]" />
              <span className="text-[#526B52] font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#C88719]" />
              <span>Copy</span>
            </>
          )}
        </button>
        <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-[#F5F1E8] selection:bg-[#C88719] selection:text-white">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
