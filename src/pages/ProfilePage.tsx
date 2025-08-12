
"use client";
import * as React from "react";
import { User } from "@/components/icons";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ProfilePage() {
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
