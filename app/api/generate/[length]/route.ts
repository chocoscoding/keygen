import { promisify } from "util";
import { randomBytes } from "crypto";
import { NextResponse } from "next/server";

const randomBytesAsync = promisify(randomBytes);

export async function GET(request: Request, context: { params: { length: string } }) {
  //format length and return number
  const getLength = (): number => {
    const intialLength = context.params.length;
    if (!intialLength) {
      return 32;
    }
    const newLength = parseInt(intialLength as string);
    if (newLength > 999999) {
      return 999999;
    }
    return newLength;
  };

  const length: number = getLength();

  const randomString = (await randomBytesAsync(Math.ceil(length / 2))).toString("hex").slice(0, length);
  return NextResponse.json({ key: randomString });
}
