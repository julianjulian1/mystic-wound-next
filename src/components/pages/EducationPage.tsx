
"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { Info, AlertTriangle } from "@/components/icons";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { conditions, Condition } from "@/data/conditions";

export function EducationPage() {
  const [selected, setSelected] = useState<Condition | null>(null);
  
  const DetailSection = ({ title, items }: { title: string; items: string[] }) => (
    <div>
      <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">{title}</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  if (selected) {
    const content = conditions.find((c) => c.id === selected.id)!;
    return (
      <div className="p-4">
        <Button onClick={() => setSelected(null)} variant="secondary" className="mb-4 w-auto px-4 py-2 text-sm">
          &larr; Back to Guides
        </Button>
        <Card>
          <Image
            src={content.image}
            alt={content.name}
            width={500}
            height={192}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <CardHeader>
            <CardTitle className="text-2xl">{content.name}</CardTitle>
            <CardDescription>{content.type}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">Overview</h4>
              <p className="text-gray-600 dark:text-gray-400">{content.overview}</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">Symptoms</h4>
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Common Signs:</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {content.symptoms.common.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
                {content.symptoms.additional.length > 0 && (
                  <>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 pt-2">Additional Symptoms:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {content.symptoms.additional.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
            <DetailSection title="Causes" items={content.causes} />
            <DetailSection title="Risk Factors" items={content.riskFactors} />
            <DetailSection title="Treatment Options" items={content.treatment} />
            <DetailSection title="Prevention" items={content.prevention} />
            <Card className="bg-red-50 border-red-300 dark:bg-red-900/20 dark:border-red-700/50">
              <CardContent className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="text-red-800 dark:text-red-300">Seek Immediate Medical Attention If:</CardTitle>
                  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-400 mt-2">
                    {content.urgentCare.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <CardTitle className="text-2xl px-2">Educational Guides</CardTitle>
      <div>
        <h3 className="text-xl font-bold px-2 mb-2">Condition Guides</h3>
        <CardDescription className="px-2 mb-4">
          Learn about the 8 skin conditions our AI can detect, including symptoms, causes, and treatment options.
        </CardDescription>
        <div className="space-y-2">
          {conditions.map((condition) => (
            <Card key={condition.id} onClick={() => setSelected(condition)}>
              <CardContent className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">{condition.name}</CardTitle>
                  <CardDescription>{condition.type}</CardDescription>
                </div>
                <Info className="w-5 h-5 text-gray-400" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
