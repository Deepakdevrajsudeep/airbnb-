import { Controller } from "@hotwired/stimulus"
import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {


   static targets = ['dropDown','openUserMenu']

  connect () {


    this.openUserMenuTarget.addEventListener("click", (e)=> {
        openDropdown(this.dropdownTarget)

    })
  }

}
 
 function openDropdown() {
    toggle(element).then(() => {
        console.log("Enter transition complete")
    })
}
 
// remove element when close
function closeDropdown() {
    leave(this.dropdownTarget).then(() => {
        element.destroy();
    })
