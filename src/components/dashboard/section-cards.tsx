import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

export function SectionCards() {
  return (
    <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 font-poppins">
      <Card>
        <CardHeader>
          <CardDescription>Total Products</CardDescription>
          <CardTitle className="text-2xl font-semibold">2000</CardTitle>
          <CardAction>
            <Badge variant="secondary" className="bg-slate-200">
              <TrendingUp />
              +12%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Total Categories</CardDescription>
          <CardTitle className="text-2xl font-semibold ">500</CardTitle>
          <CardAction>
            <Badge variant="secondary" className="bg-slate-200">
              <TrendingDown />
              -40%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period
          </div>
          <div className="text-muted-foreground">
            Acquisition needs attention
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="text-2xl font-semibold ">45,678</CardTitle>
          <CardAction>
            <Badge variant="secondary" className="bg-slate-200">
              <TrendingUp />
              +8%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention
          </div>
          <div className="text-muted-foreground">
            Engagement exceeds targets
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>New Categories </CardDescription>
          <CardTitle className="text-2xl font-semibold">4.5%</CardTitle>
          <CardAction>
            <Badge variant="secondary" className="bg-slate-200">
              <TrendingUp />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  );
}
