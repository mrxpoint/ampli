import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PairServiceBase } from "./base/pair.service.base";

@Injectable()
export class PairService extends PairServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
