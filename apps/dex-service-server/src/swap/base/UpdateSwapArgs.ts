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
import { SwapWhereUniqueInput } from "./SwapWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SwapUpdateInput } from "./SwapUpdateInput";

@ArgsType()
class UpdateSwapArgs {
  @ApiProperty({
    required: true,
    type: () => SwapWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SwapWhereUniqueInput)
  @Field(() => SwapWhereUniqueInput, { nullable: false })
  where!: SwapWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SwapUpdateInput,
  })
  @ValidateNested()
  @Type(() => SwapUpdateInput)
  @Field(() => SwapUpdateInput, { nullable: false })
  data!: SwapUpdateInput;
}

export { UpdateSwapArgs as UpdateSwapArgs };
