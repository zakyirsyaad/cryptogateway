import * as crypto from "crypto";

function atob(str: string) {
  return Buffer.from(str, "base64").toString("binary");
}

export function createSignature(
  method: string,
  url: string,
  body: any,
  timestamp: string,
  secretKey: string
): string {
  const bodyBuffer = Buffer.from(JSON.stringify(body));
  const secret = atob(secretKey);
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(timestamp);
  hmac.update(method);
  hmac.update(url);
  if (bodyBuffer != null) {
    hmac.update(bodyBuffer);
  }
  const hash = hmac.digest();
  const signature = hash.toString("base64url");
  return signature;
}
