import tailwindConfig from '@devstdo/design/configs/tailwind.extendedapp.config'

export default defineNuxtConfig({
  imports: {
    dirs: [
      '../../packages/services/composables',
      '../../packages/services/utils',
      'entities/**/model',                   // для сущностей
      'features/**/model',                   // для фич
    ],
  },
  modules: [
    [
      '@devstdo/design/nuxt.ts',
      { app: 'extendedapp' },
    ],
    [
      '@devstdo/modules/nuxt-app-module-config/module.ts',
      {
        app: 'extendedapp',
        tailwind: tailwindConfig,
        // image: {},
        i18n: {
          baseUrl: `http://example.com`,
          locales: (runtimeConfig: any) => runtimeConfig.i18n.locales,
          defaultLocale: (runtimeConfig: any) => runtimeConfig.i18n.defaultLocale,
        },
        asyncRuntimeConfig: async () => await import(('./shared/lib/i18n/extendedapp.ts')),
      },
    ],
    '@pinia/nuxt',
  ],
  extends: [
    '../webapp',
  ],
})
