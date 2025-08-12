
"use client";
import * as React from "react";
import Image from "next/image";
import {
  Stethoscope,
  Camera,
  FileText,
  HeartPulse,
  BrainCircuit,
  Zap,
  ShieldCheck,
} from "@/components/icons";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

export function HomePage({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <div className="p-4 space-y-6">
      <Card className="bg-gradient-to-r from-yellow-100 to-red-100 dark:from-yellow-900/30 dark:to-red-900/30 border-yellow-300 dark:border-yellow-700/50">
        <CardContent className="flex flex-col md:flex-row items-center gap-4">
          <Image
            src="/dfu.jpg"
            alt="Diabetic Foot Ulcer"
            width={112}
            height={80}
            className="object-cover rounded-lg border border-yellow-300 dark:border-yellow-700/50"
          />
          <div className="flex-1">
            <CardTitle className="text-xl text-yellow-800 dark:text-yellow-300">Diabetic Foot Ulcer (DFU) Analysis</CardTitle>
            <CardDescription className="text-yellow-700 dark:text-yellow-400 mb-2">
              Early detection and monitoring of diabetic foot ulcers is critical to prevent complications. Use our AI-powered DFU Check to assess ulcer stage and infection risk.
            </CardDescription>
            <Button
              variant="primary"
              className="mt-4 flex items-center justify-center w-full"
              onClick={() => {
                setActiveTab("analysis");
                setTimeout(() => {
                  const dfuBtn = document.querySelector('[data-dfu-btn]') as HTMLButtonElement;
                  if (dfuBtn) dfuBtn.click();
                }, 100);
              }}
            >
              Go to DFU Check
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardTitle className="text-2xl">Preliminary Wound Detection</CardTitle>
          <CardDescription className="mt-2">
            Advanced AI skin condition analysis for preliminary screening. Our system detects 8 common conditions across bacterial, fungal, parasitic, and viral categories.
          </CardDescription>
          <Button onClick={() => setActiveTab("analysis")} className="mt-4">
            <Stethoscope className="w-5 h-5" />Start Analysis
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
              <Camera className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold">1. Upload Image</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Upload a clear, well-lit photo of the skin condition.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
              <BrainCircuit className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold">2. AI Analysis</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Our trained model analyzes the image using advanced algorithms.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold">3. Get Results</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Receive preliminary results with confidence scores and info.</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Platform Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-4">
            <Zap className="w-5 h-5 text-blue-500 mt-1" />
            <p className="text-sm"><span className="font-semibold">AI Technology:</span> Models trained on 10,000+ images to identify 8 conditions with high accuracy.</p>
          </div>
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-5 h-5 text-green-500 mt-1" />
            <p className="text-sm"><span className="font-semibold">Prevention Tools:</span> Comprehensive guidelines and risk assessment to help you maintain healthy skin.</p>
          </div>
          <div className="flex items-start gap-4">
            <HeartPulse className="w-5 h-5 text-red-500 mt-1" />
            <p className="text-sm"><span className="font-semibold">Medical Advisory:</span> Developed in collaboration with dermatologists for clinical relevance.</p>
          </div>
        </CardContent>
      </Card>
      <MedicalDisclaimer />
    </div>
  );
}
