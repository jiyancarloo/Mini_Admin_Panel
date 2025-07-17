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

export default function Register() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="font-poppins">
        <CardTitle className="text-xl">Sign Up Now</CardTitle>
        <CardDescription className="text-xs">
          Enter Credentials to create your account now!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6 font-poppins">
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input type="name" />
            </div>
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label>Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div>
              <Button asChild type="submit" className="w-full">
                <Link to="/login">Register</Link>
              </Button>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs">
              <span>Already have an Account?</span>
              <Link to="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
