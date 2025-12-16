import React, { useState } from "react";
import {
  FiTerminal,
  FiTool,
  FiActivity,
} from "react-icons/fi";

const Logs = () => {
  const [tab, setTab] = useState("build");

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#120a1f] p-8 text-white">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-semibold">
            <FiTerminal />
            Logs
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            View build and runtime logs for your services
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4 flex gap-6 border-b border-white/10 text-sm">
        <Tab
          label="Build Logs"
          icon={<FiTool />}
          active={tab === "build"}
          onClick={() => setTab("build")}
        />
        <Tab
          label="Runtime Logs"
          icon={<FiActivity />}
          active={tab === "runtime"}
          onClick={() => setTab("runtime")}
        />
      </div>

      {/* Logs Container */}
      <div className="h-[70vh] overflow-auto rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-sm">
        {tab === "build" ? <BuildLogs /> : <RuntimeLogs />}
      </div>
    </div>
  );
};

export default Logs;

/* ---------------- Tabs ---------------- */

const Tab = ({ label, icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 pb-3 transition ${
      active
        ? "border-b-2 border-purple-500 text-white"
        : "text-gray-400 hover:text-white"
    }`}
  >
    {icon}
    {label}
  </button>
);

/* ---------------- Log Views ---------------- */

const BuildLogs = () => (
  <pre className="space-y-1 text-gray-300">
    <LogLine time="12:01:02" level="INFO" text="Cloning repository..." />
    <LogLine time="12:01:05" level="INFO" text="Installing dependencies" />
    <LogLine time="12:01:18" level="INFO" text="Running build command" />
    <LogLine time="12:01:42" level="WARN" text="Deprecated package detected" />
    <LogLine time="12:02:10" level="INFO" text="Build completed successfully" />
    <LogLine time="12:02:12" level="INFO" text="Pushing image to registry" />
    <LogLine time="12:02:30" level="INFO" text="Image push completed" />
  </pre>
);

const RuntimeLogs = () => (
  <pre className="space-y-1 text-gray-300">
    <LogLine time="12:10:01" level="INFO" text="Server started on port 3000" />
    <LogLine time="12:12:45" level="INFO" text="GET /health 200" />
    <LogLine time="12:14:02" level="INFO" text="POST /login 200" />
    <LogLine time="12:15:10" level="ERROR" text="Database connection timeout" />
    <LogLine time="12:15:15" level="INFO" text="Retrying database connection" />
    <LogLine time="12:15:20" level="INFO" text="Connection restored" />
  </pre>
);

/* ---------------- Log Line ---------------- */

const LogLine = ({ time, level, text }) => {
  const levelColor = {
    INFO: "text-green-400",
    WARN: "text-yellow-400",
    ERROR: "text-red-400",
  };

  return (
    <div className="flex gap-3">
      <span className="text-gray-500">{time}</span>
      <span className={`w-12 ${levelColor[level]}`}>{level}</span>
      <span className="flex-1">{text}</span>
    </div>
  );
};
