
"use client";
import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

export function PreventionPage() {
  return (
    <div className="p-4 space-y-6">
      <CardTitle className="text-2xl px-2">Prevention & Risk</CardTitle>
      <Card>
        <CardHeader>
          <CardTitle>Prevention Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold">Hygiene Practices</h4>
            <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
              <li>Wash hands regularly</li>
              <li>Keep skin clean and dry</li>
              <li>Change clothes/socks daily</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Diabetes-Specific Care</h4>
            <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
              <li>Monitor blood sugar levels</li>
              <li>Inspect feet daily for cuts</li>
              <li>Moisturize skin to prevent cracking</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Environmental Factors</h4>
            <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
              <li>Avoid walking barefoot in public areas</li>
              <li>Wear breathable, well-fitting shoes</li>
              <li>Avoid sharing personal items</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Our upcoming interactive tool will help you understand personal risk factors based on:
          </CardDescription>
          <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 mt-2">
            <li>Diabetes or pre-diabetes status</li>
            <li>Immune system health</li>
            <li>Circulation problems</li>
            <li>History of skin infections</li>
          </ul>
          <Button variant="secondary" className="mt-4" disabled={true}>
            Coming Soon
          </Button>
        </CardContent>
      </Card>
      <MedicalDisclaimer />
    </div>
  );
}
