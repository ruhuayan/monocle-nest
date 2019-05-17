import { Injectable } from '@nestjs/common';
import { Site } from '../entities/site.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class SiteService {
//   private readonly sites: Site[] = [];

  constructor(
    @InjectRepository(Site)
    private readonly siteRepository: Repository<Site>,
  ) {}

  async findAll(): Promise<Site[]> {
    return await this.siteRepository.find();
  }

  async  create(site: Site): Promise<Site> {
    return await this.siteRepository.save(site);
  }

  async update(site: Site): Promise<UpdateResult> {
    return await this.siteRepository.update(site.siteId, site);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.siteRepository.delete(id);
  }
}