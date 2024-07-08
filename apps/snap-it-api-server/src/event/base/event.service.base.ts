/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Event as PrismaEvent,
  Photo as PrismaPhoto,
  User as PrismaUser,
} from "@prisma/client";
import { EventCreateInput } from "./EventCreateInput";
import { Event } from "./Event";
import { DeleteEventArgs } from "./DeleteEventArgs";
import { EventFindManyArgs } from "./EventFindManyArgs";
import { EventUpdateInput } from "./EventUpdateInput";

export class EventServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.EventCountArgs, "select">): Promise<number> {
    return this.prisma.event.count(args);
  }

  async events(args: Prisma.EventFindManyArgs): Promise<PrismaEvent[]> {
    return this.prisma.event.findMany(args);
  }
  async event(args: Prisma.EventFindUniqueArgs): Promise<PrismaEvent | null> {
    return this.prisma.event.findUnique(args);
  }
  async createEvent(args: Prisma.EventCreateArgs): Promise<PrismaEvent> {
    return this.prisma.event.create(args);
  }
  async updateEvent(args: Prisma.EventUpdateArgs): Promise<PrismaEvent> {
    return this.prisma.event.update(args);
  }
  async deleteEvent(args: Prisma.EventDeleteArgs): Promise<PrismaEvent> {
    return this.prisma.event.delete(args);
  }

  async findPhotos(
    parentId: string,
    args: Prisma.PhotoFindManyArgs
  ): Promise<PrismaPhoto[]> {
    return this.prisma.event
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .photos(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.event
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
  async CreateEvent(args: EventCreateInput): Promise<Event> {
    throw new Error("Not implemented");
  }
  async DeleteEvent(args: DeleteEventArgs): Promise<Event> {
    throw new Error("Not implemented");
  }
  async GetEvents(args: EventFindManyArgs): Promise<Event[]> {
    throw new Error("Not implemented");
  }
  async UpdateEvent(args: EventUpdateInput): Promise<Event> {
    throw new Error("Not implemented");
  }
}
