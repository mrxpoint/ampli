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
import { PairWhereUniqueInput } from "./PairWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PairUpdateInput } from "./PairUpdateInput";

@ArgsType()
class UpdatePairArgs {
  @ApiProperty({
    required: true,
    type: () => PairWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PairWhereUniqueInput)
  @Field(() => PairWhereUniqueInput, { nullable: false })
  where!: PairWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PairUpdateInput,
  })
  @ValidateNested()
  @Type(() => PairUpdateInput)
  @Field(() => PairUpdateInput, { nullable: false })
  data!: PairUpdateInput;
}

export { UpdatePairArgs as UpdatePairArgs };
