"use client";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Home,
  Stethoscope,
  BookOpen,
  User,
  Camera,
  FileText,
  HeartPulse,
  BrainCircuit,
  Info,
  Zap,
  ShieldCheck,
  AlertTriangle,
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
import { conditions, Condition } from "@/data/conditions";
import { HomePage } from "@/pages/HomePage";
import { AnalysisPage } from "@/pages/AnalysisPage";
import { EducationPage } from "@/pages/EducationPage";
import { PreventionPage } from "@/pages/PreventionPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { AboutPage } from "@/pages/AboutPage";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeTab]);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) {
      return;
    }
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("User accepted the A2HS prompt");
    }
    setInstallPrompt(null);
  };

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <HomePage setActiveTab={setActiveTab} />;
      case "analysis":
        return <AnalysisPage />;
      case "prevention":
        return <PreventionPage />;
      case "education":
        return <EducationPage />;
      case "profile":
        return <ProfilePage />;
      case "about":
        return <AboutPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  const TopBar = () => (
    <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center sticky top-0 z-10">
      <span
        className="flex items-center gap-2 text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-800 to-purple-600 bg-clip-text text-transparent select-none tracking-tight"
        style={{ letterSpacing: "-0.04em" }}
      >
        <Stethoscope className="w-9 h-9 text-blue-600 dark:text-blue-400 mr-1" />
        Mystic Wound
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("about")}
          className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-1 rounded transition-colors"
        >
          About
        </button>
        <button onClick={() => setActiveTab("profile")}>
          <User className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
    </div>
  );

  const BottomNavBar = () => {
    const navItems = [
      { id: "home", icon: Home, label: "Home" },
      { id: "analysis", icon: Stethoscope, label: "Analysis" },
      { id: "prevention", icon: ShieldCheck, label: "Prevention" },
      { id: "education", icon: BookOpen, label: "Guides" },
    ];
    return (
      <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-2 flex justify-around sticky bottom-0 z-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center w-20 h-16 rounded-lg transition-colors ${activeTab === item.id ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400 hover:text-blue-500"}`}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-100 dark:bg-gray-900 flex flex-col h-screen font-sans">
      <TopBar />
      <main ref={mainContentRef} className="flex-grow overflow-y-auto pb-4">{renderPage()}</main>
      <BottomNavBar />
      {installPrompt && (
        <div className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-4 z-20">
          <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 max-w-sm mx-auto sm:mx-0">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mt-1 flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-base">Install Mystic Wound</CardTitle>
                  <CardDescription className="text-sm">
                    Add to home screen for a better experience and offline access.
                  </CardDescription>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button onClick={() => setInstallPrompt(null)} variant="secondary" className="w-full">
                  Not Now
                </Button>
                <Button onClick={handleInstallClick} variant="primary" className="w-full">Install</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}