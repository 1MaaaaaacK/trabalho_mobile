import 'styled-components/native'
import { theme } from './styles/theme'

declare module 'styled-components' {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType {}
}