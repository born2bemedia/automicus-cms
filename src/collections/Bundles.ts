import { CollectionConfig } from 'payload'

export const Bundles: CollectionConfig = {
  slug: 'bundles',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'bots',
      type: 'relationship',
      relationTo: 'bots',
      hasMany: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Mixed Strategy', value: 'mixed' },
        { label: 'High-Frequency & Scalping', value: 'high-frequency' },
        { label: 'Trend-Following & Momentum', value: 'trend-following' },
      ],
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Mixed Strategy', value: 'mixed' },
        { label: 'High-Frequency & Scalping', value: 'high-frequency' },
        { label: 'Trend-Following & Momentum', value: 'trend-following' },
      ],
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'discount',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
