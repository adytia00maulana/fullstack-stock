import {builder} from '../builder';

builder.prismaObject('Product', {
    fields: (t) => ({
        // expose fields from the database
        id: t.exposeID('id'),
        name: t.exposeString('name'),
        price: t.exposeString('price'),
        rating: t.exposeInt('rating'),
        reviewCount: t.exposeInt('reviewCount'),
        href: t.exposeString('href'),
        imageSrc: t.exposeString('imageSrc'),
        imageAlt: t.exposeString('imageAlt'),

        // Load colors as list field.
        colors: t.relation('colors'),

        // Load sizes as list field.
        sizes: t.relation('sizes'),
    }),
})

builder.queryField('products', (t) =>
    t.prismaConnection({
        type: 'Product',
        cursor: 'id',
        resolve: (query, _parent, _args, _ctx, _info) => prisma.product.findMany({...query}),
    })
)