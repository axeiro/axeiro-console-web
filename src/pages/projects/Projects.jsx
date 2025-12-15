import React from "react";
import { FiPlus, FiFolder, FiActivity } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#120a1f] p-8 text-white">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Projects</h1>
          <p className="mt-1 text-sm text-gray-400">
            Each project contains one or more services
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium transition hover:bg-purple-700">
          <FiPlus />
          Create Project
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          name="api-backend"
          env="production"
          services={1}
          cost="₹1,240"
          status="healthy"
        />
        <ProjectCard
          name="web-frontend"
          env="production"
          services={1}
          cost="₹860"
          status="deploying"
        />
        <ProjectCard
          name="staging-api"
          env="staging"
          services={2}
          cost="₹420"
          status="warning"
        />
      </div>
    </div>
  );
};

export default Projects;

/* ---------------- Components ---------------- */

const ProjectCard = ({ name, env, services, cost, status }) => {
  const statusStyles = {
    healthy: "bg-green-500/10 text-green-400",
    deploying: "bg-yellow-500/10 text-yellow-400",
    warning: "bg-red-500/10 text-red-400",
  };

  return (
    <div className="cursor-pointer rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-purple-500/40 hover:bg-white/10">
      {/* Title */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-medium">
          <FiFolder />
          {name}
        </h2>
        <span
          className={`rounded-full px-3 py-1 text-xs ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      {/* Meta */}
      <div className="space-y-2 text-sm text-gray-400">
        <div className="flex justify-between">
          <span>Environment</span>
          <span className="text-gray-200">{env}</span>
        </div>
        <div className="flex justify-between">
          <span>Services</span>
          <span className="text-gray-200">{services}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Cost</span>
          <span className="text-gray-200">{cost} / month</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
        <FiActivity />
        Click to manage project
      </div>
    </div>
  );
};
