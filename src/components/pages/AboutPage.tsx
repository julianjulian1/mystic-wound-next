
"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";

export function AboutPage() {
  return (
    <div className="p-4 space-y-6">
      <Card>
        <CardContent>
          <CardTitle className="text-2xl mb-2">About Mystic-Wound</CardTitle>
          <CardDescription>
            Mystic-Wound: An Artificial Intelligence-Based Diabetic Wound Analysis Platform for Early Detection and Monitoring
          </CardDescription>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p><strong>Researchers:</strong> M. Fakhrizal Gathfan Putra Adinata, Muhammad Rifansyah Rasendriya Juno</p>
            <p><strong>Institution:</strong> SMA TARUNA NUSANTARA, Jalan Raya Purworejo KM. 5, Magelang Regency, Central Java, Indonesia</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
