import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SwapModuleBase } from "./base/swap.module.base";
import { SwapService } from "./swap.service";
import { SwapController } from "./swap.controller";
import { SwapResolver } from "./swap.resolver";

@Module({
  imports: [SwapModuleBase, forwardRef(() => AuthModule)],
  controllers: [SwapController],
  providers: [SwapService, SwapResolver],
  exports: [SwapService],
})
export class SwapModule {}
