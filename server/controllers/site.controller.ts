import { Controller, Get, Post,Put, Delete, Body, Param } from '@nestjs/common';
import { SiteService } from '../services/site.service';
import { Site } from '../entities/site.entity';

@Controller('sites')
export class SiteController {
    constructor(private readonly siteService: SiteService) {}

    @Get()
    async findAll(): Promise<Site[]> {
      return this.siteService.findAll();
    }

    @Post()
    async create(@Body() siteData: Site): Promise<Site> {
      return this.siteService.create(siteData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() siteData: Site): Promise<any> {
        siteData.id = Number(id);
        return this.siteService.update(siteData);
    }  

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.siteService.delete(id);
    }  
}