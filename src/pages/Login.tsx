import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Card className="w-full max-w-sm margin-auto">
      <CardHeader className="font-poppins">
        <CardTitle className="text-xl ">Welcome Back</CardTitle>
        <CardDescription className="text-xs">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6 font-poppins">
            <div className="grid gap-2">
              <Label>Username</Label>
              <Input id="username" />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div>
              <Button asChild type="submit" className="w-full">
                <Link to="/admin/dashboard"> Login </Link>
              </Button>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs">
              <span>Don't have an account yet?</span>
              <Link to="/register" className="underline underline-offset-4">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
