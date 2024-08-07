/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Pair as PrismaPair, User as PrismaUser } from "@prisma/client";

export class PairServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PairCountArgs, "select">): Promise<number> {
    return this.prisma.pair.count(args);
  }

  async pairs(args: Prisma.PairFindManyArgs): Promise<PrismaPair[]> {
    return this.prisma.pair.findMany(args);
  }
  async pair(args: Prisma.PairFindUniqueArgs): Promise<PrismaPair | null> {
    return this.prisma.pair.findUnique(args);
  }
  async createPair(args: Prisma.PairCreateArgs): Promise<PrismaPair> {
    return this.prisma.pair.create(args);
  }
  async updatePair(args: Prisma.PairUpdateArgs): Promise<PrismaPair> {
    return this.prisma.pair.update(args);
  }
  async deletePair(args: Prisma.PairDeleteArgs): Promise<PrismaPair> {
    return this.prisma.pair.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.pair
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
