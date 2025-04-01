import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectItem } from "@/components/ui/select";

export default function CarpenterScheduleApp() {
  const [selectedMonth, setSelectedMonth] = useState("March 2025");

  return (
    <div className="flex h-screen bg-[#0e1628] text-white">
      {/* Sidebar */}
      <aside className="w-72 p-4 space-y-4 border-r border-gray-700">
        <h1 className="text-xl font-bold text-white">📅 Carpenter Schedule</h1>

        {[
          "Visit Sites",
          "Estimations",
          "Quotations",
          "Approved Projects",
          "Pending Projects",
          "Projects in Design",
          "Current Projects",
          "Carpenters",
        ].map((title) => (
          <Card key={title} className="bg-[#1c2335]">
            <CardContent className="p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-sm">{title} (0)</span>
                <button className="text-sm text-gray-400">Collapse</button>
              </div>
              <div className="flex items-center space-x-2">
                <Input placeholder={title.includes("Project") ? "Project name" : "Name"} className="text-black text-sm" />
                <Input type="number" defaultValue={1} className="w-12 text-black text-sm" />
                <Button size="sm">+</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">👥 Schedule</h2>
          <div className="flex items-center space-x-2">
            <select
              className="bg-[#1c2335] text-white border border-gray-600 rounded px-2 py-1"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option>March 2025</option>
              <option>April 2025</option>
              <option>May 2025</option>
            </select>
            <Button variant="ghost">⟲</Button>
            <Button variant="default">📤 Export PDF</Button>
          </div>
        </div>

        {/* Schedule Bar */}
        <div className="bg-[#1c2335] rounded p-3">
          <div className="grid grid-cols-8 text-sm text-center font-medium text-gray-300">
            <div>CARPENTER</div>
            <div className="text-red-400">SAT 01/03</div>
            <div className="text-red-400">SUN 02/03</div>
            <div>MON 03/03</div>
            <div>TUE 04/03</div>
            <div>WED 05/03</div>
            <div>THU 06/03</div>
            <div>…</div>
          </div>
          <div className="mt-2 h-6 bg-gray-700 rounded w-1/2"></div>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="w-60 p-4 border-l border-gray-700">
        <Card className="bg-[#1c2335]">
          <CardContent className="p-3">
            <h3 className="font-semibold text-sm">📊 Assignments & Hours</h3>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
