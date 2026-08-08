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
    <div className="my-4 rounded-xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-xl text-left">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-slate-700/60 text-xs font-mono text-slate-300">
          <span className="font-semibold text-slate-200">{title}</span>
          <span className="text-slate-400 uppercase tracking-wider">{language}</span>
        </div>
      )}
      <div className="relative group">
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 p-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 transition-all opacity-80 group-hover:opacity-100 flex items-center gap-1.5 text-xs font-sans"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
        <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-slate-200 selection:bg-indigo-600 selection:text-white">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
