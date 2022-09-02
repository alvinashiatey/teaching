import "@/client/scss/main.scss"
import log from "./ts/home";
import {calendarButtons, visibleWeekByDate, panelOneNav} from "@/client/ts/classes";


window.onload = ()=>{
    log()
    calendarButtons()
    visibleWeekByDate()
    panelOneNav()
}