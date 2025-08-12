
"use client";
import * as React from "react";
import { useState, useRef } from "react";
import Image from "next/image";
import { Camera } from "@/components/icons";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { conditions, Condition } from "@/data/conditions";

type SkinResult = {
  type: 'skin';
  condition: Condition;
  confidence: number;
};

type DfuResult = {
  type: 'dfu';
  stage: string;
  infection: string;
  confidence: number;
};

type AnalysisResult = SkinResult | DfuResult;

export function AnalysisPage() {
  const [mode, setMode] = useState<'dfu' | 'skin'>('skin');
  const [file, setFile] = useState<File & { preview?: string } | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(Object.assign(selectedFile, { preview: URL.createObjectURL(selectedFile) }));
      setResult(null);
    }
  };

  const handleAnalyze = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (mode === 'skin') {
        const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
        setResult({ type: 'skin', condition: randomCondition, confidence: Math.random() * (0.95 - 0.65) + 0.65 });
      } else {
        // DFU result: random stage and infection type
        const stages = ['Superficial', 'Deep', 'Necrotic', 'Granulating'];
        const infections = ['No infection', 'Bacterial infection', 'Fungal infection', 'Mixed infection'];
        setResult({
          type: 'dfu',
          stage: stages[Math.floor(Math.random() * stages.length)],
          infection: infections[Math.floor(Math.random() * infections.length)],
          confidence: Math.random() * (0.95 - 0.65) + 0.65,
        });
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setFile(null);
    setResult(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-4 mb-2">
        <Button variant={mode === 'skin' ? 'primary' : 'secondary'} onClick={() => setMode('skin')}>Skin Disease Type</Button>
        <Button variant={mode === 'dfu' ? 'primary' : 'secondary'} onClick={() => setMode('dfu')} data-dfu-btn>DFU Check</Button>
      </div>
      <CardTitle className="text-2xl px-2">{mode === 'skin' ? 'AI-Powered Analysis' : 'DFU Analysis'}</CardTitle>
      {!result && (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="p-8 border-2 border-dashed rounded-xl text-center cursor-pointer border-gray-300 dark:border-gray-600 hover:border-blue-400"
        >
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
          <Camera className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          {file && file.preview ? (
            <div>
              <Image
                src={file.preview}
                alt="Preview"
                width={300}
                height={192}
                className="max-h-48 w-auto mx-auto rounded-lg mb-4"
              />
              <p className="font-semibold text-gray-800 dark:text-gray-200">{file.name}</p>
            </div>
          ) : (
            <div>
              <p className="text-gray-500 dark:text-gray-400">Click to select an image.</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Use clear, well-lit images for best results.</p>
            </div>
          )}
        </div>
      )}
      {file && !result && (
        <Button onClick={handleAnalyze} disabled={isLoading}>
          {isLoading ? "Analyzing..." : "Analyze Now"}
        </Button>
      )}
      {result && result.type === 'skin' && (
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={result.condition.image}
                alt={result.condition.name}
                width={500}
                height={160}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <CardDescription>Potential Condition:</CardDescription>
              <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">{result.condition.name}</CardTitle>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-500 dark:text-gray-400">Confidence Score:</span>
                <span className="font-bold text-lg">{(result.confidence * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-1">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${result.confidence * 100}%` }}></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">{result.condition.overview}</p>
            </CardContent>
          </Card>
          <div className="mt-4">
            <MedicalDisclaimer />
          </div>
          <Button onClick={handleReset} variant="secondary" className="mt-4">
            <Camera className="w-5 h-5" />Analyze Another Image
          </Button>
        </div>
      )}
      {result && result.type === 'dfu' && (
        <div>
          <Card>
            <CardHeader>
              <CardTitle>DFU Analysis Results</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/dfu.jpg"
                alt="Diabetic Foot Ulcer"
                width={500}
                height={160}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-500 dark:text-gray-400">Stage:</span>
                <span className="font-bold text-lg">{result.stage}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-gray-500 dark:text-gray-400">Infection:</span>
                <span className="font-bold text-lg">{result.infection}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-gray-500 dark:text-gray-400">Confidence Score:</span>
                <span className="font-bold text-lg">{(result.confidence * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-1">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${result.confidence * 100}%` }}></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                This is a simulated result. In a real deployment, the AI will analyze the uploaded image to determine the stage and infection type of the ulcer.
              </p>
            </CardContent>
          </Card>
          <div className="mt-4">
            <MedicalDisclaimer />
          </div>
          <Button onClick={handleReset} variant="secondary" className="mt-4">
            <Camera className="w-5 h-5" />Analyze Another Image
          </Button>
        </div>
      )}
    </div>
  );
}
