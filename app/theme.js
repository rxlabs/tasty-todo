import lightTheme from 'material-ui/lib/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'

const fontFamily = [
  "'Noto Sans'",
  'Roboto',
  "'Open Sans'",
  'Helvetica',
  'sans-serif'
]

const Theme = getMuiTheme(lightTheme, {
  fontFamily: fontFamily.join(', ')
})

export default Theme
