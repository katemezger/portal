import { UserRole } from "@prisma/client";

export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata?: {
      role?: UserRole;
    };
    publicMetadata?: {
      role?: UserRole;
    };
  }
}
