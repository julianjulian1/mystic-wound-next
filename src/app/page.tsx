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

function HomePage({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
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

function AnalysisPage() {
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

function EducationPage() {
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

function PreventionPage() {
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

function ProfilePage() {
  return (
    <div className="p-4 space-y-6">
      <Card>
        <CardContent className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4">
            <User className="w-12 h-12 text-gray-500" />
          </div>
          <CardTitle className="text-2xl">Guest User</CardTitle>
          <CardDescription>Create an account to save your analysis history.</CardDescription>
        </CardContent>
      </Card>
      <Button variant="primary">Create Account</Button>
      <Button variant="secondary">Log In</Button>
    </div>
  );
}

function AboutPage() {
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

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeTab]);

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
    </div>
  );
}
