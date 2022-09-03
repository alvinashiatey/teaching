import "@/client/scss/main.scss"
import log from "./ts/home";
import {calendarButtons, visibleWeekByDate, panelOneNav, participantRandomizer} from "@/client/ts/classes";


window.onload = ()=>{
    log()
    calendarButtons()
    visibleWeekByDate()
    panelOneNav()
    participantRandomizer()
}