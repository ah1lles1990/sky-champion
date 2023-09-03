import './style.css'
import { setupControl } from './setupControl.ts'

const root = document.querySelector<HTMLDivElement>('#app')

if (root) {
  root.innerHTML = `
    <div class="wrapper">
    <span class="info"></span>
      <div class="control-holder">
        <div class="control-circle"></div>
        </div>
    </div>
  `

  setupControl(document.querySelector<HTMLDivElement>('.control-holder'))
}
