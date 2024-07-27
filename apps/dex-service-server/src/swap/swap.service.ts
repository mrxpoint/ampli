import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SwapServiceBase } from "./base/swap.service.base";

@Injectable()
export class SwapService extends SwapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
