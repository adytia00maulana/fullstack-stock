import {builder} from '../builder';

builder.prismaObject('Size', {
    fields: (t) => ({
        id: t.exposeID('id'),
        name: t.exposeString('name')
    }),
})


builder.queryField('sizes', (t) =>
    t.prismaConnection({
        type: 'Size',
        cursor: 'id',
        resolve: (query, _parent, _args, _ctx, _info) => prisma.size.findMany({...query}),
    })
)