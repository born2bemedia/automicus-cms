import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderNumber',
  },
  access: {
    read: () => true,
    create: () => true,
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      label: 'Order Number',
      required: true,
      unique: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: false,
    },
    {
      name: 'items',
      type: 'relationship',
      label: 'Ordered Items',
      relationTo: 'bots',
      hasMany: true,
    },
    {
      name: 'total',
      type: 'number',
      label: 'Total Amount',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Completed', value: 'completed' },
        { label: 'Failed', value: 'failed' },
      ],
      defaultValue: 'pending',
      required: true,
    },
    {
      name: 'billingAddress',
      type: 'group',
      fields: [
        { name: 'firstName', type: 'text', required: false },
        { name: 'lastName', type: 'text', required: false },
        { name: 'email', type: 'email', required: false },
        { name: 'phone', type: 'text', required: false },
        { name: 'addressLine1', type: 'text', required: false },
        { name: 'addressLine2', type: 'text', required: false },
        { name: 'city', type: 'text', required: false },
        { name: 'country', type: 'text', required: false },
        { name: 'zip', type: 'text', required: false },
      ],
    },
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'documents',
      type: 'upload',
      relationTo: 'media',
      label: 'Documents',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'invoice',
      type: 'upload',
      relationTo: 'media',
      label: 'Invoice',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

export default Orders
