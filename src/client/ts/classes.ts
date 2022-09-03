// noinspection SpellCheckingInspection
interface IPanelButtons {
    buttonClass: string
    detailClass: string
}

const calendarButtons = () => {
    const btns: IPanelButtons[] = [
        {
            buttonClass: ".cal__btn",
            detailClass: ".cal_detail"
        },
        {
            buttonClass: ".proj__btn",
            detailClass: ".proj__detail"
        }]
    for (const bn of btns) {
        const btn = document.querySelectorAll(bn.buttonClass) as NodeListOf<HTMLAnchorElement> | null
        if (!btn) return
        btn.forEach(b => {
            b.addEventListener('click', (e) => {
                const el = e.target as HTMLAnchorElement | null
                if (!el) return
                const detail = el?.parentNode?.querySelector(bn.detailClass)
                if (!detail) return;
                detail.toggleAttribute("hidden")
            })
        })
    }
}

const isDateInThisWeek = (date: Date): boolean => {
    const today = new Date()
    const tDate = today.getDate()
    const tDay = today.getDay()

    const firstDayOfWeek = new Date(today.setDate(tDate - tDay))
    const lastDayOfWeek = new Date(firstDayOfWeek)
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6)

    return date >= firstDayOfWeek && date <= lastDayOfWeek
}

const visibleWeekByDate = () => {
    const weeks = document.querySelectorAll(".cal") as NodeListOf<HTMLDivElement> | null
    if (!weeks) return;
    weeks.forEach(w => {
        const date = w.querySelector(".schedule .date")
        if (!date) return
        const classDate = new Date(date!.innerHTML)
        if (isDateInThisWeek(classDate)) {
            const detail = w.querySelector((".cal_detail")) as HTMLDivElement | null
            if (!detail) return;
            detail.removeAttribute("hidden")
        }
    })
}

interface IPanelNav {
    buttonID: string,
    containerID: string
}

const panelOneNav = () => {
    const panelElememtObject: IPanelNav[] = [
        {
            buttonID: "syllabus",
            containerID: "syllabus__content"
        },
        {
            buttonID: "calendar",
            containerID: "calendar__content"
        },
        {
            buttonID: "projects",
            containerID: "projects__content"
        },
        {
            buttonID: "participants",
            containerID: "participants__content"
        },
        {
            buttonID: "resources",
            containerID: "resources__content"
        }
    ]

    panelElememtObject.forEach(el => {
        const btn = document.getElementById(el.buttonID) as HTMLDivElement | null
        const ctns = document.querySelector(".panel_two__wrapper") as HTMLDivElement | null
        btn?.addEventListener("click", () => {
            const ch = Array.from(ctns!.children)
            ch.forEach((ctn) => {
                const element = <HTMLDivElement>ctn
                if (element.id === el.containerID) {
                    element.removeAttribute("hidden")
                } else {
                    element.setAttribute("hidden", "")
                }
            })
        })
    })
}

const participantRandomizer = () => {
    const picker = document.getElementById("collab__picker") as HTMLDivElement
    const participants = document.querySelectorAll(".collaborator") as NodeListOf<HTMLUListElement>
    const pNumArray = [...Array(participants!.length).keys()]
    picker!.addEventListener("click", function () {
        if (pNumArray.length === 0 ) {
            participants?.forEach(el => {
                el.classList.remove("selected")
            })
            pNumArray.push(...Array(participants!.length).keys())
            return
        }
        const randomIndex = Math.floor(Math.random() * pNumArray.length)
        participants[pNumArray[randomIndex]]?.classList.add('selected')
        pNumArray.splice(randomIndex, 1)
    })
}


export {calendarButtons, visibleWeekByDate, panelOneNav,  participantRandomizer}