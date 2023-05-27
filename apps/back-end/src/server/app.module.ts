import { Module } from "@nestjs/common";
import { AppGateway } from "./app.server";


@Module({
    imports: [],
    providers: [AppGateway],
})
export class AppGatewayModule { }