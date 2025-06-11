import { TextBlock } from '@/blocks'
import { CollectionConfig } from 'payload'

export const Bots: CollectionConfig = {
  slug: 'bots',
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
      type: 'text',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Forex', value: 'forex' },
        { label: 'AI-Powered', value: 'ai-powered' },
        { label: 'Gold', value: 'gold' },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'excerpt',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'summary',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
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
    {
      name: 'features',
      type: 'blocks',
      blocks: [TextBlock],
    },
    {
      name: 'suitableFor',
      type: 'blocks',
      blocks: [TextBlock],
    },
    {
      name: 'howItWorks',
      type: 'blocks',
      blocks: [TextBlock],
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
