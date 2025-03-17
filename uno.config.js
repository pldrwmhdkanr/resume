import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify() // 正确的 React 属性化语法支持
    ]
})