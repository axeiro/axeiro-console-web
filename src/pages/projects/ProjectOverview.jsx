import React from "react";
import {
  FiRefreshCw,
  FiPauseCircle,
  FiRotateCcw,
  FiCpu,
  FiActivity,
  FiExternalLink,
} from "react-icons/fi";

const ProjectOverview = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#120a1f] p-8 text-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">api-backend</h1>
        <p className="mt-1 text-sm text-gray-400">
          Project overview and service health
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex gap-6 border-b border-white/10 text-sm">
        <Tab active label="Overview" />
        <Tab label="Services" />
        <Tab label="Deployments" />
        <Tab label="Settings" />
      </div>

      {/* Service Card */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Service Info */}
          <Card>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="font-medium">Running</span>
                </div>

                <div className="mt-2 text-sm text-gray-400">
                  Compute: <span className="text-white">Small</span>
                </div>
                <div className="text-sm text-gray-400">
                  Region: <span className="text-white">Auto</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <ActionButton icon={<FiRefreshCw />} label="Redeploy" />
                <ActionButton icon={<FiRotateCcw />} label="Restart" />
                <ActionButton icon={<FiPauseCircle />} label="Pause" />
              </div>
            </div>
          </Card>

          {/* Resource Usage */}
          <Card>
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-300">
              <FiActivity />
              Resource Usage
            </div>

            <UsageRow label="CPU" value="45%" />
            <UsageRow label="Memory" value="62%" />
            <UsageRow label="Outbound" value="18 GB / month" />
          </Card>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* Runtime Info */}
          <Card>
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-300">
              <FiCpu />
              Runtime Info
            </div>

            <InfoRow
              label="URL"
              value="https://api.myapp.axeiro.app"
              link
            />
            <InfoRow label="Uptime" value="3d 4h" />
            <InfoRow label="Last Deploy" value="12 min ago" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;

/* ---------------- Components ---------------- */

const Tab = ({ label, active }) => (
  <button
    className={`pb-3 transition ${
      active
        ? "border-b-2 border-purple-500 text-white"
        : "text-gray-400 hover:text-white"
    }`}
  >
    {label}
  </button>
);

const Card = ({ children }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
    {children}
  </div>
);

const ActionButton = ({ icon, label }) => (
  <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-300 transition hover:border-purple-500/40 hover:text-white">
    {icon}
    {label}
  </button>
);

const UsageRow = ({ label, value }) => (
  <div className="mb-3 flex items-center justify-between text-sm text-gray-300">
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

const InfoRow = ({ label, value, link }) => (
  <div className="mb-3 flex items-center justify-between text-sm text-gray-300">
    <span>{label}</span>
    {link ? (
      <a
        href={value}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1 text-purple-400 hover:underline"
      >
        {value}
        <FiExternalLink />
      </a>
    ) : (
      <span>{value}</span>
    )}
  </div>
);
