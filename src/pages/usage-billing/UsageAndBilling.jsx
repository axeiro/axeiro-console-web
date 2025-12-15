import React from "react";
import {
  FiCreditCard,
  FiShield,
  FiAlertTriangle,
  FiEdit,
} from "react-icons/fi";

const UsageAndBilling = () => {
  return (
    <div className=" rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#120a1f] p-8 text-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Usage & Billing</h1>
        <p className="mt-1 text-sm text-gray-400">
          Track usage, manage spend limits, and account settings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
        {/* Account Settings */}
        <Card>
          <div className="mb-4 text-sm font-medium text-gray-300">
            Account
          </div>

          <SettingRow label="Email" value="amar@axeiro.com" />
          <SettingRow label="Password" value="********" />
          <SettingRow label="2FA" value="Coming soon" muted />

          <div className="mt-4 border-t border-white/10 pt-4 text-xs text-gray-400">
            Advanced settings give more control and responsibility.
          </div>

          <button className="mt-3 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-300 transition hover:border-purple-500/40 hover:text-white">
            Advanced Settings
          </button>
        </Card>

        {/* Spend Cap */}
        <Card>
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-300">
            <FiAlertTriangle />
            Monthly Spend Cap
          </div>

          <div className="mb-2 text-2xl font-semibold">₹3,000</div>
          <div className="mb-4 text-sm text-gray-400">
            Soft limit · services won’t stop automatically
          </div>

          <div className="mb-3 h-2 w-full rounded-full bg-white/10">
            <div className="h-2 w-[40%] rounded-full bg-purple-500" />
          </div>

          <div className="mb-4 text-sm text-gray-300">
            ₹1,240 used this month
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-300 transition hover:border-purple-500/40 hover:text-white">
            <FiEdit />
            Edit Spend Cap
          </button>
        </Card>

        {/* Usage Breakdown */}
        <Card>
          <div className="mb-4 text-sm font-medium text-gray-300">
            Usage Breakdown
          </div>

          <UsageRow label="Compute" value="₹820" />
          <UsageRow label="Bandwidth" value="₹260" />
          <UsageRow label="Storage" value="₹160" />

          <div className="mt-4 border-t border-white/10 pt-4 text-sm font-semibold">
            Total: ₹1,240
          </div>
        </Card>

        {/* Plan */}
        <Card>
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-300">
            <FiCreditCard />
            Plan
          </div>

          <div className="text-lg font-semibold">Individual</div>
          <div className="mb-2 text-sm text-gray-400">
            Platform fee
          </div>

          <div className="mb-4 text-2xl font-semibold">₹199 / month</div>

          <div className="text-xs text-gray-400">
            Infrastructure usage is billed separately based on consumption.
          </div>

          <button className="mt-4 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-300 transition hover:border-purple-500/40 hover:text-white">
            Manage Plan
          </button>
        </Card>
      </div>
    </div>
  );
};

export default UsageAndBilling;

/* ---------------- Components ---------------- */

const Card = ({ children }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
    {children}
  </div>
);

const SettingRow = ({ label, value, muted }) => (
  <div className="mb-3 flex items-center justify-between text-sm">
    <span className="text-gray-400">{label}</span>
    <span className={muted ? "text-gray-500" : "text-gray-300"}>
      {value}
    </span>
  </div>
);

const UsageRow = ({ label, value }) => (
  <div className="mb-3 flex justify-between text-sm text-gray-300">
    <span>{label}</span>
    <span>{value}</span>
  </div>
);
