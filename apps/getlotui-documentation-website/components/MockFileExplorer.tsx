import {
  Folder,
  FileJson,
  FileCode,
  ChevronRight,
  FileText,
} from "lucide-react";

const FileRow = ({ line }: { line: string }) => {
  // Clean up the tree branch characters
  const depth = (line.match(/│|├|└/g) || []).length;
  const cleanLabel = line.replace(/[│├└─\s]/g, "");

  if (!cleanLabel) return null;

  const isFolder = cleanLabel.endsWith("/") || !cleanLabel.includes(".");
  const fileName = cleanLabel.replace("/", "");

  return (
    <div
      className="flex items-center py-1 px-2 hover:bg-white/5 rounded-sm cursor-default transition-colors group"
      style={{ paddingLeft: `${(depth + 1) * 12}px` }}
    >
      {isFolder ? (
        <>
          <ChevronRight className="w-3 h-3 text-white/40 mr-1 group-hover:text-white/70" />
          <Folder className="w-4 h-4 text-blue-400 mr-2 fill-blue-400/20" />
        </>
      ) : (
        <>
          <div className="w-4 mr-1" /> {/* Spacer for chevron */}
          {fileName.endsWith(".json") ? (
            <FileJson className="w-4 h-4 text-amber-400 mr-2" />
          ) : fileName.endsWith(".ts") ||
            fileName.endsWith(".dart") ||
            fileName.endsWith(".swift") ? (
            <FileCode className="w-4 h-4 text-blue-300 mr-2" />
          ) : (
            <FileText className="w-4 h-4 text-gray-400 mr-2" />
          )}
        </>
      )}
      <span
        className={`text-sm ${isFolder ? "text-gray-200" : "text-gray-400"}`}
      >
        {fileName}
      </span>
      {fileName === "ui" && (
        <span className="ml-2 text-[10px] bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded border border-emerald-500/20">
          Components inside
        </span>
      )}
    </div>
  );
};

export function MockFileExplorer({ structure }: { structure: string }) {
  const lines = structure.split("\n").filter((line) => line.trim() !== "");

  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border border-white/10 bg-[#0d1117] shadow-2xl">
      {/* Header Bar */}
      <div className="flex items-center justify-between bg-[#161b22] px-4 py-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="ml-4 text-xs font-medium text-gray-400 font-mono">
            Project Structure
          </span>
        </div>
      </div>

      {/* Explorer Content */}
      <div className="p-4 bg-[#0d1117] font-mono">
        {lines.map((line, index) => (
          <FileRow key={index} line={line} />
        ))}
      </div>
    </div>
  );
}
