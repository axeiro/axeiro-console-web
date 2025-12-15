import React from "react";
import {
  FiCheckCircle,
  FiXCircle,
  FiLoader,
  FiGitBranch,
  FiClock,
} from "react-icons/fi";

const Deployments = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#120a1f] p-8 text-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Deployments</h1>
        <p className="mt-1 text-sm text-gray-400">
          History of builds and deployments for this project
        </p>
      </div>

      {/* Deployment List */}
      <div className="space-y-4">
        <DeploymentItem
          service="api-backend"
          status="success"
          source="GitHub • main"
          duration="2m 14s"
          time="10 minutes ago"
        />
        <DeploymentItem
          service="web-frontend"
          status="running"
          source="Manual deploy"
          duration="—"
          time="Deploying now"
        />
        <DeploymentItem
          service="api-backend"
          status="failed"
          source="GitHub • main"
          duration="1m 02s"
          time="2 hours ago"
        />
      </div>
    </div>
  );
};

export default Deployments;

/* ---------------- Components ---------------- */

const DeploymentItem = ({ service, status, source, duration, time }) => {
  const statusConfig = {
    success: {
      icon: <FiCheckCircle className="text-green-400" />,
      label: "Success",
      bg: "bg-green-500/10",
    },
    failed: {
      icon: <FiXCircle className="text-red-400" />,
      label: "Failed",
      bg: "bg-red-500/10",
    },
    running: {
      icon: <FiLoader className="animate-spin text-yellow-400" />,
      label: "Deploying",
      bg: "bg-yellow-500/10",
    },
  };

  const cfg = statusConfig[status];

  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${cfg.bg}`}
        >
          {cfg.icon}
        </div>

        <div>
          <h3 className="text-sm font-medium">{service}</h3>
          <div className="mt-1 flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <FiGitBranch />
              {source}
            </span>
            <span className="flex items-center gap-1">
              <FiClock />
              {duration}
            </span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="text-right text-xs text-gray-400">
        <div className="font-medium text-gray-200">{cfg.label}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};
