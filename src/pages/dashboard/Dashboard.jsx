import React from "react";
import { Toaster } from "react-hot-toast";
import {
  FiActivity,
  FiCheckCircle,
  FiAlertTriangle,
  FiTrendingUp,
} from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#120a1f] p-8 text-white">
      <Toaster position="top-center" />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-400">
          Overview of your running services and usage
        </p>
      </div>

      {/* Top Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Active Services */}
        <Card title="Active Services" icon={<FiActivity />}>
          <ServiceRow
            name="api-backend"
            status="Running"
            meta="Small"
            color="green"
          />
          <ServiceRow
            name="web-frontend"
            status="Deploying"
            meta="Medium"
            color="yellow"
          />
        </Card>

        {/* Recent Activity */}
        <Card title="Recent Activity" icon={<FiTrendingUp />}>
          <ActivityRow
            icon={<FiCheckCircle className="text-green-400" />}
            text="API deployed"
            time="10m ago"
          />
          <ActivityRow
            icon={<FiCheckCircle className="text-green-400" />}
            text="Frontend build succeeded"
            time="25m ago"
          />
          <ActivityRow
            icon={<FiAlertTriangle className="text-yellow-400" />}
            text="Bandwidth usage at 80%"
            time="1h ago"
          />
        </Card>

        {/* Cost Snapshot */}
        <Card title="Cost Snapshot">
          <div className="mb-3 text-sm text-gray-400">
            This month (estimated)
          </div>

          <div className="mb-4 text-lg font-semibold">
            ₹1,240{" "}
            <span className="text-sm font-normal text-gray-400">
              / ₹3,000 limit
            </span>
          </div>

          {/* Progress bar */}
          <div className="mb-4 h-2 w-full rounded-full bg-white/10">
            <div className="h-2 w-[40%] rounded-full bg-purple-500" />
          </div>

          <CostRow label="Compute" value="₹820" />
          <CostRow label="Bandwidth" value="₹260" />
          <CostRow label="Storage" value="₹160" />
        </Card>
      </div>

      {/* Projects Section */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold">Projects</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ProjectCard name="api-backend" />
          <ProjectCard name="web-frontend" />
          <AddProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/* ---------------- Components ---------------- */

const Card = ({ title, icon, children }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
    <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-300">
      {icon}
      {title}
    </div>
    {children}
  </div>
);

const ServiceRow = ({ name, status, meta, color }) => {
  const dotColor =
    color === "green"
      ? "bg-green-400"
      : color === "yellow"
      ? "bg-yellow-400"
      : "bg-red-400";

  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-4 py-3 mb-2">
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-xs text-gray-400">{meta}</div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className={`h-2 w-2 rounded-full ${dotColor}`} />
        {status}
      </div>
    </div>
  );
};

const ActivityRow = ({ icon, text, time }) => (
  <div className="flex items-center justify-between text-sm mb-3">
    <div className="flex items-center gap-2 text-gray-300">
      {icon}
      {text}
    </div>
    <span className="text-xs text-gray-500">{time}</span>
  </div>
);

const CostRow = ({ label, value }) => (
  <div className="flex justify-between text-sm text-gray-300">
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

const ProjectCard = ({ name }) => (
  <div className="cursor-pointer rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-purple-500/40">
    <div className="font-medium">{name}</div>
    <div className="mt-1 text-xs text-gray-400">
      1 active service
    </div>
  </div>
);

const AddProjectCard = () => (
  <div className="flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 p-5 text-sm text-gray-400 transition hover:border-purple-500/40 hover:text-white">
    + Create Project
  </div>
);
