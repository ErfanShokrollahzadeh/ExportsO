import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "visitors.json");

function getCount(): number {
  try {
    if (!fs.existsSync(dataFile)) return 0;
    const data = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
    return typeof data.count === "number" ? data.count : 0;
  } catch {
    return 0;
  }
}

function saveCount(count: number): void {
  const dir = path.dirname(dataFile);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(dataFile, JSON.stringify({ count }));
}

export async function GET() {
  return NextResponse.json({ count: getCount() });
}

export async function POST() {
  const newCount = getCount() + 1;
  saveCount(newCount);
  return NextResponse.json({ count: newCount });
}
