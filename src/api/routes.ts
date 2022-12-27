import { http } from '@/utils/http'

export const getAsyncRoutes = () => {
	return http.request<GlobalResult<any>>('get', '/getAsyncRoutes')
}
