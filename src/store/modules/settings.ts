import { defineStore } from 'pinia'
import { store } from '@/store'
import { setType } from './types'
import { getConfig } from '@/config'

export const useSettingStore = defineStore({
	id: 'pure-setting',
	state: (): setType => ({
		title: getConfig().Title,
		fixedHeader: getConfig().FixedHeader,
		hiddenSideBar: getConfig().HiddenSideBar
	}),
	getters: {
		getTitle(): string {
			return this.title
		},
		getFixedHeader(): boolean {
			return this.fixedHeader
		},
		getHiddenSideBar(): boolean {
			return this.hiddenSideBar
		}
	},
	actions: {
		CHANGE_SETTING({ key, value }) {
			// eslint-disable-next-line no-prototype-builtins
			if (this.hasOwnProperty(key)) {
				this[key] = value
			}
		},
		changeSetting(data) {
			this.CHANGE_SETTING(data)
		}
	}
})

export function useSettingStoreHook() {
	return useSettingStore(store)
}
