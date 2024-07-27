import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PairService } from "./pair.service";
import { PairControllerBase } from "./base/pair.controller.base";

@swagger.ApiTags("pairs")
@common.Controller("pairs")
export class PairController extends PairControllerBase {
  constructor(
    protected readonly service: PairService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
