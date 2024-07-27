import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SwapService } from "./swap.service";
import { SwapControllerBase } from "./base/swap.controller.base";

@swagger.ApiTags("swaps")
@common.Controller("swaps")
export class SwapController extends SwapControllerBase {
  constructor(
    protected readonly service: SwapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
