import { mockAuth } from '@/auth/mock/auth.mock';
import { hashDataEq } from '@/utils/utils';
import { Token } from '@prisma/client';

export const getMockToken = (expiresAt: bigint, token: string): Token => {
  return {
    id: 1,
    token: hashDataEq(token),
    authId: mockAuth.id,
    expiresAt,
  };
};
