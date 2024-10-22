import { jwtVerify } from "jose";

export default async function verifyToken(token: string): Promise<boolean> {
  try {
    // if (!token) return false;
    // await jwtVerify(token, new TextEncoder().encode("Chave da API"), {
    //   algorithms: ["HS256"],
    // });
    return true;
  } catch (error) {
    return false;
  }
}
