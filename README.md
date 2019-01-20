# react-folder-tabs

React component emulating tabs on a manila folder. Based on [Chris Coyier's CSS tabs](https://css-tricks.com/better-tabs-with-round-out-borders/)

## Examples

[folder layout variations](https://pitchdropobserver.github.io/react-folder-tabs/folders.html).

## Installation

```bash
npm i react-folder-tabs
```

## Control Props

Props you can specify to control action of the tabs:

* `tabs` - array of objects with 'value' and 'label'
* `selectedTabId` - the 'value' of the selected tab
* `onTabSelect` - callback used when a tab is clicked
* `className` - class given to the container component

## Style Props

Props you can specify to control the look of the tabs:

* `type` - layout type of tab, 'top' or 'bottom'
* `tabHeight` - height of the tab
* `tabFilletRadius` - controls roundness of the tab corners
* `tabBorderColorSelected` - border color of the selected tab
* `tabBorderColorUnselected` - border color of the un-selected tab
* `borderWidth` - border width of tabs
* `tabBgColorSelected` - background color of the selected tab
* `tabBgColorUnselected` - background color of the un-selected tab
* `fontColorSelected` - label color of selected tab
* `fontColorUnselected` - label color of un-selected tab
* `pad` - cushion space above or below top or bottom of the tabs

