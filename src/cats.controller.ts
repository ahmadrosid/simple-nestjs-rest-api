import { Controller, Get } from "@nestjs/common";

@Controller('cats')
export class CatsController {
    private cats = ['meou1', 'meou2'];

    @Get()
    getCats(): any[] {
        return this.cats;
    }
}
