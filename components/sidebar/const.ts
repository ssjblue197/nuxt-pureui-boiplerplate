import { reactive } from 'vue';

export interface Router {
  name: string;
  query?: { [key: string]: string };
  params?: { [key: string]: string };
  path?: string;
}

export interface SidebarRouter {
  id?: string;
  name: string;
  icon?: string;
  permissions: string[];
  router?: Router;
  children?: SidebarRouter[];
  isOpen?: boolean;
}

const sidebar: SidebarRouter[] = reactive([
  {
    id: 'insight',
    name: 'Insights',
    icon: 'home-line',
    permissions: [],
    router: {
      name: 'home',
    },
    children: [
      {
        id: 'sale-report',
        name: 'Sales report',
        permissions: [],
        router: {
          name: 'sale-report',
        },
      },
      {
        id: 'fulfillment-report',
        name: 'Fulfillment report',
        permissions: [],
        router: {
          name: 'fulfillment-report',
        },
      },
    ],
  },
  {
    id: 'orders',
    name: 'Orders',
    icon: 'presentation-chart-01',
    permissions: [],
    router: {
      name: 'orders',
    },
  },
  {
    id: 'catalog',
    name: 'Catalog',
    icon: 'layers-three-01',
    permissions: [],
    router: {
      name: 'catalog',
    },
  },
  {
    id: 'payment',
    name: 'Invoice',
    icon: 'receipt-check',
    router: {
      name: 'invoices',
    },
    children: undefined,
    permissions: [],
  },
  {
    id: 'claim',
    name: 'Claim',
    icon: 'check-done-01',
    permissions: [],
    router: {
      name: 'claim',
    },
  },
  {
    id: 'api',
    name: 'API',
    icon: 'dataflow-04',
    permissions: [],
    router: {
      name: 'api',
    },
  },

  // {
  //   id: 'payment',
  //   name: 'Payment',
  //   icon: 'credit-card-02',
  //   permissions: [],
  //   router: {
  //     name: 'payment',
  //   },
  //   children: [
  //     {
  //       id: 'wallet',
  //       name: 'Wallet',
  //       permissions: [],
  //       router: {
  //         name: 'wallet',
  //       },
  //     },
  //     {
  //       id: 'receipts',
  //       name: 'Receipts',
  //       permissions: [],
  //       router: {
  //         name: 'receipts',
  //       },
  //     },
  //     {
  //       id: 'transactions',
  //       name: 'Transactions',
  //       permissions: [],
  //       router: {
  //         name: 'transactions',
  //       },
  //     },
  //   ],
  // },
]);

export default sidebar;
