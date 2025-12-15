import React from "react";
import {
  FiUser,
  FiShield,
  FiBell,
  FiCreditCard,
  FiLogOut,
  FiTrash2,
} from "react-icons/fi";

const AccountSettings = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#120a1f] p-8 text-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <FiUser />
          Account Settings
        </h1>
        <p className="mt-1 text-sm text-gray-400">
          Manage your personal account preferences
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Profile */}
        <Card title="Profile">
          <Input label="Full Name" value="Amar Jha" />
          <Input label="Email" value="amar@axeiro.com" disabled />
        </Card>

        {/* Security */}
        <Card title="Security">
          <Button label="Change Password" />
          <InfoBadge text="2FA coming soon (recommended)" />
          <Button label="View Active Sessions" />
        </Card>

        {/* Preferences */}
        <Card title="Preferences">
          <Toggle label="Deployment failure alerts" enabled />
          <Toggle label="Cost threshold alerts" enabled />
          <InfoBadge text="Dark theme only · Cloud-focused UX" />
        </Card>

        {/* Billing */}
        <Card title="Billing Summary">
          <Stat label="Plan" value="Individual" />
          <Stat label="Platform Fee" value="₹199 / month" />
          <Button label="Open Billing & Usage" />
        </Card>

        {/* Danger Zone */}
        <Card danger title="Danger Zone">
          <DangerButton label="Logout from all devices" />
          <DangerButton label="Delete Account" destructive />
        </Card>
      </div>
    </div>
  );
};

export default AccountSettings;

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

const Input = ({ label, value, disabled }) => (
  <div className="mb-4">
    <label className="mb-1 block text-xs text-gray-400">{label}</label>
    <input
      value={value}
      disabled={disabled}
      className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none disabled:opacity-50"
    />
  </div>
);

const Toggle = ({ label, enabled }) => (
  <div className="mb-3 flex items-center justify-between text-sm">
    <span className="text-gray-300">{label}</span>
    <div
      className={`h-5 w-10 rounded-full ${
        enabled ? "bg-purple-500" : "bg-white/20"
      }`}
    />
  </div>
);

const Button = ({ label }) => (
  <button className="mb-3 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-300 transition hover:border-purple-500/40 hover:text-white">
    {label}
  </button>
);

const Stat = ({ label, value }) => (
  <div className="mb-2 flex justify-between text-sm">
    <span className="text-gray-400">{label}</span>
    <span className="text-gray-200">{value}</span>
  </div>
);

const InfoBadge = ({ text }) => (
  <div className="mb-3 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-gray-400">
    {text}
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
    {destructive ? <FiTrash2 /> : <FiLogOut />}
    {label}
  </button>
);
