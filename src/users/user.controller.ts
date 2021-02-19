import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private readonly service: UserService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.service.create(createUserDto);
    }

    @Get('/')
    async findAll() {
        return {
            data: await this.service.findAll()
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return {
            data: await this.service.findOne(id)
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string): Promise<void> {
        return this.service.remove(id);
    }

}