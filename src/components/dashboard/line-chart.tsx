import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Line, LineChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "January", category: 186, product: 80 },
  { month: "February", category: 305, product: 200 },
  { month: "March", category: 237, product: 120 },
  { month: "April", category: 73, product: 190 },
  { month: "May", category: 209, product: 130 },
  { month: "June", category: 214, product: 140 },
];

const chartConfig = {
  category: {
    label: "Category",
    color: "#2563eb",
  },
  product: {
    label: "Product",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function DashLine() {
  return (
    <div className="">
      <Card className="font-poppins w-full h-auto ">
        <CardHeader>
          <CardTitle>Line Chart - Category & Product </CardTitle>
          <CardDescription>June - July 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{ left: 12, right: 12 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Line
                  dataKey="category"
                  type="monotone"
                  stroke="var(--color-category)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="product"
                  type="monotone"
                  stroke="var(--color-product)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
