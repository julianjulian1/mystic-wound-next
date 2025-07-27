import * as React from "react";

export const Icon = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>{children}</svg>
);

export const Home = (props: { className?: string }) => (
  <Icon {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></Icon>
);
export const Stethoscope = (props: { className?: string }) => (
  <Icon {...props}><path d="M4.8 2.3A.3.3 0 1 0 5.4 2a.3.3 0 0 0-.6.3" /><path d="M8 16v-4.1a2 2 0 0 1 1-1.7l2-1.2a2 2 0 0 0-2-3.5H7" /><path d="M8 16a2 2 0 0 0 2 2h4" /><path d="M12 6v10" /><circle cx={17} cy={8} r={2} /><path d="M17 10v10" /></Icon>
);
export const BookOpen = (props: { className?: string }) => (
  <Icon {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></Icon>
);
export const User = (props: { className?: string }) => (
  <Icon {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></Icon>
);
export const Camera = (props: { className?: string }) => (
  <Icon {...props}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx={12} cy={13} r={3} /></Icon>
);
export const ShieldAlert = (props: { className?: string }) => (
  <Icon {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></Icon>
);
export const FileText = (props: { className?: string }) => (
  <Icon {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><line x1={10} y1={9} x2={8} y2={9} /></Icon>
);
export const HeartPulse = (props: { className?: string }) => (
  <Icon {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" /></Icon>
);
export const BrainCircuit = (props: { className?: string }) => (
  <Icon {...props}><path d="M12 5a3 3 0 1 0-5.993.25" /><path d="M18.67 6.51A3 3 0 1 0 13 5.5" /><path d="M13 8.5a3 3 0 1 0 5.66 1.49" /><path d="M12 15.5a3 3 0 1 0-5.993.25" /><path d="M18.67 16.51A3 3 0 1 0 13 15.5" /><path d="M13 18.5a3 3 0 1 0 5.66 1.49" /><path d="M6 8.5h1" /><path d="M11 18.5h2" /><path d="M17 8.5h1" /><path d="M6 15.5h1" /><path d="M2.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><path d="M21.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><path d="M12 2.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" /><path d="M12 21.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" /></Icon>
);
export const Info = (props: { className?: string }) => (
  <Icon {...props}><circle cx={12} cy={12} r={10} /><line x1={12} y1={16} x2={12} y2={12} /><line x1={12} y1={8} x2={12.01} y2={8} /></Icon>
);
export const Zap = (props: { className?: string }) => (
  <Icon {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></Icon>
);
export const ShieldCheck = (props: { className?: string }) => (
  <Icon {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></Icon>
);
export const AlertTriangle = (props: { className?: string }) => (
  <Icon {...props}><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></Icon>
); 