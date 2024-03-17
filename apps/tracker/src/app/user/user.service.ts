import { Role } from '@app/shared';
import { Injectable } from '@nestjs/common';
import { PrismaClient, type Prisma } from '@prisma/tracker-client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaClient) {}

  public async create(dto: Prisma.TrackerUserCreateInput) {
    await this.prisma.trackerUser.create({ data: { ...dto } });
  }

  public async getRandomAssigny() {
    const stuffUsers = await this.prisma.trackerUser.findMany({
      where: { role: Role.Staff },
    });
    return stuffUsers[Math.floor(Math.random() * (stuffUsers.length - 1))];
  }
}
