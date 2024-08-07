/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PoolWhereUniqueInput } from "./PoolWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PoolUpdateInput } from "./PoolUpdateInput";

@ArgsType()
class UpdatePoolArgs {
  @ApiProperty({
    required: true,
    type: () => PoolWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PoolWhereUniqueInput)
  @Field(() => PoolWhereUniqueInput, { nullable: false })
  where!: PoolWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PoolUpdateInput,
  })
  @ValidateNested()
  @Type(() => PoolUpdateInput)
  @Field(() => PoolUpdateInput, { nullable: false })
  data!: PoolUpdateInput;
}

export { UpdatePoolArgs as UpdatePoolArgs };
