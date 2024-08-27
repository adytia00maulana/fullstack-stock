import {builder} from '../builder';

builder.prismaObject('Color', {
    fields: (t) => ({
        id: t.exposeID('id'),
        name: t.exposeString('name'),
        class: t.exposeString('class'),
        selectedClass: t.exposeString('selectedClass')
    }),
})


builder.queryField('colors', (t) =>
    t.prismaConnection({
        type: 'Color',
        cursor: 'id',
        resolve: (query, _parent, _args, _ctx, _info) => prisma.color.findMany({...query}),
    })
)