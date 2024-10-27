// @see https://github.com/nuxt/nuxt/issues/15462

// Middleware проверяет, если путь (to.path) не является корневым (/) и заканчивается на /.
// Затем он удаляет завершающий / у пути с помощью регулярного выражения и сохраняет обновлённый путь (nextPath).
// На основе нового пути, а также текущих query-параметров и хеша, создаётся новый маршрут (nextRoute).
// В конце вызывается navigateTo с nextRoute и указанием redirectCode: 301, чтобы перенаправить пользователя на очищенный URL.

export default defineNuxtRouteMiddleware((to: any) => {
  if (to.path !== '/' && to.path.endsWith('/')) {
    const { path, query, hash } = to
    const nextPath = path.replace(/\/+$/, '') || '/'
    const nextRoute = { path: nextPath, query, hash }
    return navigateTo(nextRoute, { redirectCode: 301 })
  }
})
