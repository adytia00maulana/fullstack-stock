import SchemaBuilder from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import prisma from "../libs/prisma";
import relayPlugin from "@pothos/plugin-relay";

// 2.
export const builder = new SchemaBuilder<{
    // 3.
    PrismaTypes: PrismaTypes
}>({
    // 4.
    plugins: [PrismaPlugin, relayPlugin],
    relay: {},
    prisma: {
        client: prisma,
    }
})

// 5.
builder.queryType({
    fields: (t) => ({
        ok: t.boolean({
            resolve: () => true,
        }),
    }),
});