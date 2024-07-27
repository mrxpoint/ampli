import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PairModuleBase } from "./base/pair.module.base";
import { PairService } from "./pair.service";
import { PairController } from "./pair.controller";
import { PairResolver } from "./pair.resolver";

@Module({
  imports: [PairModuleBase, forwardRef(() => AuthModule)],
  controllers: [PairController],
  providers: [PairService, PairResolver],
  exports: [PairService],
})
export class PairModule {}
