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
      localized: true,
    },
    {
      name: 'description',
      type: 'text',
      localized: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Forex', value: 'forex' },
        { label: 'AI-Powered', value: 'ai-powered' },
        { label: 'Scalping', value: 'scalping' },
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
      localized: true,
    },
    {
      name: 'summary',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      localized: true,
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
      localized: true,
    },
    {
      name: 'suitableFor',
      type: 'blocks',
      blocks: [TextBlock],
      localized: true,
    },
    {
      name: 'howItWorks',
      type: 'blocks',
      blocks: [TextBlock],
      localized: true,
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'pin',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
      },
      defaultValue: false,
      required: false,
    },
  ],
}
