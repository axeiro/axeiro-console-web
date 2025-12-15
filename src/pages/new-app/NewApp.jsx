import React, { useState } from "react";
import {
  FiGithub,
  FiGitlab,
  FiBox,
  FiCpu,
  FiDollarSign,
} from "react-icons/fi";

const NewApp = () => {
  const [appType, setAppType] = useState("backend");
  const [size, setSize] = useState("small");

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#120a1f] p-8 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Deploy New App</h1>
        <p className="mt-1 text-sm text-gray-400">
          Configure your application and deploy on Axeiro-managed infrastructure
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* App Type */}
          <section className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-sm font-medium text-gray-300">
              App Type
            </h2>
            <div className="flex gap-4">
              {["backend", "frontend"].map((type) => (
                <button
                  key={type}
                  onClick={() => setAppType(type)}
                  className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition ${
                    appType === type
                      ? "border-purple-500 bg-purple-500/20 text-white"
                      : "border-white/10 bg-black/20 text-gray-400 hover:border-purple-500/40"
                  }`}
                >
                  {type === "backend" ? "Backend" : "Frontend"}
                </button>
              ))}
            </div>
          </section>

          {/* Source */}
          <section className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-sm font-medium text-gray-300">
              Source
            </h2>
            <div className="space-y-3">
              <SourceButton icon={<FiGithub />} label="Connect GitHub" />
              <SourceButton icon={<FiGitlab />} label="Connect GitLab" />
              <SourceButton icon={<FiBox />} label="Docker Image" />
            </div>
          </section>

          {/* Runtime */}
          <section className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-2 text-sm font-medium text-gray-300">
              Runtime
            </h2>
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-4 py-3">
              <span className="text-sm">Detected: Node.js 18</span>
              <button className="text-sm text-purple-400 hover:text-purple-300">
                Edit
              </button>
            </div>
          </section>

          {/* Compute Size */}
          <section className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-sm font-medium text-gray-300">
              Compute Size
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <ComputeCard
                active={size === "small"}
                onClick={() => setSize("small")}
                title="Small"
                meta="1 vCPU · 1GB RAM"
                price="₹820 / month"
              />
              <ComputeCard
                active={size === "medium"}
                onClick={() => setSize("medium")}
                title="Medium"
                meta="2 vCPU · 4GB RAM"
                price="₹1,640 / month"
              />
              <ComputeCard
                active={size === "large"}
                onClick={() => setSize("large")}
                title="Large"
                meta="4 vCPU · 8GB RAM"
                price="₹3,280 / month"
              />
            </div>
          </section>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Cost Preview */}
          <section className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-300">
              <FiDollarSign />
              Cost Preview
            </h2>

            <div className="space-y-2 text-sm">
              <CostRow label="Compute" value="₹820" />
              <CostRow label="Bandwidth" value="₹260" />
              <CostRow label="Storage" value="₹160" />
            </div>

            <div className="mt-4 border-t border-white/10 pt-4 text-lg font-semibold">
              ₹1,240 / month
            </div>
          </section>

          {/* Spend Cap */}
          <section className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-2 text-sm font-medium text-gray-300">
              Spend Cap
            </h2>
            <input
              type="number"
              placeholder="₹3,000"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-sm outline-none focus:border-purple-500"
            />
            <p className="mt-2 text-xs text-gray-400">
              Soft limit — we alert you, not stop your app.
            </p>
          </section>

          {/* Deploy */}
          <button className="w-full rounded-xl bg-purple-600 py-3 text-sm font-semibold transition hover:bg-purple-700">
            Deploy App
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewApp;

/* ---------- Sub Components ---------- */

const SourceButton = ({ icon, label }) => (
  <button className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-gray-300 transition hover:border-purple-500/40 hover:text-white">
    {icon}
    {label}
  </button>
);

const ComputeCard = ({ active, onClick, title, meta, price }) => (
  <button
    onClick={onClick}
    className={`rounded-xl border p-4 text-left transition ${
      active
        ? "border-purple-500 bg-purple-500/20"
        : "border-white/10 bg-black/30 hover:border-purple-500/40"
    }`}
  >
    <div className="flex items-center gap-2 font-medium">
      <FiCpu />
      {title}
    </div>
    <div className="mt-1 text-xs text-gray-400">{meta}</div>
    <div className="mt-3 text-sm font-semibold">{price}</div>
  </button>
);

const CostRow = ({ label, value }) => (
  <div className="flex justify-between text-gray-300">
    <span>{label}</span>
    <span>{value}</span>
  </div>
);
