import React from "react";
import {
  FiSettings,
  FiEye,
  FiEyeOff,
  FiTrash2,
  FiAlertTriangle,
} from "react-icons/fi";

const ProjectSettings = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#120a1f] p-8 text-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <FiSettings />
          Project Settings
        </h1>
        <p className="mt-1 text-sm text-gray-400">
          Configure project behavior and environment
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Basic Settings */}
        <Card title="Basic Settings">
          <Input label="Project Name" value="api-backend" />
          <Select label="Environment" options={["production", "staging"]} />
          <Input label="Region" value="Auto (AWS)" disabled />
          <Toggle label="Auto deploy on git push" enabled />
        </Card>

        {/* Environment Variables */}
        <Card title="Environment Variables">
          <EnvVarRow name="DATABASE_URL" masked />
          <EnvVarRow name="JWT_SECRET" masked />
          <EnvVarRow name="NODE_ENV" value="production" />

          <button className="mt-3 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-300 transition hover:border-purple-500/40 hover:text-white">
            + Add Variable
          </button>

          <p className="mt-3 text-xs text-gray-500">
            Changes require redeploy to take effect
          </p>
        </Card>

        {/* Advanced Settings */}
        <Card title="Advanced Settings (Optional)">
          <Input label="Custom Domain" placeholder="api.example.com" />
          <Input label="Health Check Path" value="/health" />
          <Select
            label="Scaling Mode"
            options={["Auto (recommended)", "Manual"]}
          />

          <div className="mt-3 rounded-lg border border-white/10 bg-black/30 p-3 text-xs text-gray-400">
            BYOC coming soon · advanced responsibility
          </div>
        </Card>

        {/* Danger Zone */}
        <Card danger title="Danger Zone">
          <DangerButton label="Pause Project" />
          <DangerButton label="Delete Project" destructive />
        </Card>
      </div>
    </div>
  );
};

export default ProjectSettings;

/* ---------------- Components ---------------- */

const Card = ({ title, children, danger }) => (
  <div
    className={`rounded-xl border p-6 ${
      danger
        ? "border-red-500/30 bg-red-500/5"
        : "border-white/10 bg-white/5"
    }`}
  >
    <div
      className={`mb-4 text-sm font-medium ${
        danger ? "text-red-400" : "text-gray-300"
      }`}
    >
      {title}
    </div>
    {children}
  </div>
);

const Input = ({ label, value, placeholder, disabled }) => (
  <div className="mb-4">
    <label className="mb-1 block text-xs text-gray-400">{label}</label>
    <input
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none disabled:opacity-50"
    />
  </div>
);

const Select = ({ label, options }) => (
  <div className="mb-4">
    <label className="mb-1 block text-xs text-gray-400">{label}</label>
    <select className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none">
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);

const Toggle = ({ label, enabled }) => (
  <div className="mb-4 flex items-center justify-between text-sm">
    <span className="text-gray-300">{label}</span>
    <div
      className={`h-5 w-10 rounded-full ${
        enabled ? "bg-purple-500" : "bg-white/20"
      }`}
    />
  </div>
);

const EnvVarRow = ({ name, value, masked }) => (
  <div className="mb-2 flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm">
    <span className="text-gray-300">{name}</span>
    <span className="flex items-center gap-2 text-gray-400">
      {masked ? "••••••••" : value}
      {masked ? <FiEyeOff /> : <FiEye />}
    </span>
  </div>
);

const DangerButton = ({ label, destructive }) => (
  <button
    className={`mb-3 flex w-full items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
      destructive
        ? "border-red-500/40 bg-red-500/10 text-red-400 hover:bg-red-500/20"
        : "border-white/10 bg-black/30 text-gray-300 hover:border-purple-500/40 hover:text-white"
    }`}
  >
    {destructive && <FiTrash2 />}
    {!destructive && <FiAlertTriangle />}
    {label}
  </button>
);
