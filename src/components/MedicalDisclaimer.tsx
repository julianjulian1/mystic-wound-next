import { Card } from "./ui/Card";
import { CardContent, CardTitle, CardDescription } from "./ui/Card";
import { ShieldAlert } from "./icons";

export function MedicalDisclaimer() {
  return (
    <Card className="bg-yellow-50 border-yellow-300 dark:bg-yellow-900/20 dark:border-yellow-700/50">
      <CardContent className="flex items-start gap-4">
        <ShieldAlert className="w-8 h-8 text-yellow-500 mt-1 flex-shrink-0" />
        <div>
          <CardTitle className="text-yellow-800 dark:text-yellow-300">Medical Disclaimer</CardTitle>
          <CardDescription className="text-yellow-700 dark:text-yellow-400">
            This tool provides preliminary screening for informational purposes only and is not a substitute for professional medical advice. Results may be inaccurate. Always consult a qualified healthcare provider for any medical concerns.
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
} 