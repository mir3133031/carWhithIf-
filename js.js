//malibu
let car = `malibu`
let chgine = 1.6
let color = `color`
let hasluc = Boolean
let isBlack = Boolean
let prays = 30000
//gentra
let car_tw = ` gentra`
let chgine_tw = 1.5
let color_tw = `color`
let hasluc_tw = Boolean
let isBlack_tw = Boolean
let prays_tw = 16000

let getCar = prompt(`выбери машину  malibu  или gentra`)
if (getCar == `malibu`) {
    let getcolor = prompt(`какой цвет хочешь дорогой ?`)
    if (getcolor ) {
      color =  getcolor
        prays = prays * 25 / 100 + prays
        let gethasluc = confirm(`хочешь люк`)
        if (gethasluc === true) {
            hasluc = true
            prays = prays * 15 / 100 + prays
            let getIsBlack = confirm(`хочешь танировку`)
            if (getIsBlack === true) {
                isBlack = true
                prays = prays * 5 / 100 + prays
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            } else if (getIsBlack === false) {
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            }
        } else if (gethasluc === false) {
            let getIsBlack = confirm(`хочешь танировку`)
            if (getIsBlack === true) {
                isBlack = true
                prays = prays * 5 / 100 + prays
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            } else if (getIsBlackTwo === false) {
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            }
        }
    } else if (getcolor === false) {
        let gethasluc = confirm(`хочешь люк`)
        if (gethasluc === true) {
            hasluc = true
            prays = prays * 15 / 100 + prays
            let getIsBlack = confirm(`хочешь танировку`)
            if (getIsBlack === true) {
                isBlack = true
                prays = prays * 5 / 100 + prays
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            } else if (getIsBlack === false) {
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)

            }
        } else if (gethasluc === false) {
            let getIsBlack = confirm(`хочешь танировку`)
            if (getIsBlack === true) {
                gisBlack = true
                prays = prays * 5 / 100 + prays
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            } else if (getIsBlackTwo === false) {
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            }
        }
    }

} else if (getCar == `gentra`) {
    let getcolor = prompt(`какой цвет хочешь дорогой ?`)
    if (getcolor = color_tw) {
        prays_tw = prays_tw * 25 / 100 + prays_tw
        let gethasluc = confirm(`хочешь люк`)
        if (gethasluc === true) {
            hasluc_tw = true
            prays_tw = prays_tw * 15 / 100 + prays_tw
            let getIsBlack = confirm(`хочешь танировку`)
            if (getIsBlack === true) {
                getIsBlack = true
                prays_tw = prays_tw * 5 / 100 + prays_tw
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            } else if (getIsBlack === false) {
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            }
        } else if (gethasluc === false) {
            let getIsBlack = confirm(`хочешь танировку`)
            if (getIsBlack === true) {
                isBlack_tw = true
                prays_tw = prays_tw * 5 / 100 + prays_tw
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            } else if (getIsBlackTwo === false) {
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            }
        }
    } else if (getcolor === false) {
        let gethasluc = confirm(`хочешь люк`)
        if (gethasluc === true) {
            hasluc_tw = true
            prays_tw = prays_tw * 15 / 100 + prays_tw
            let getIsBlack = confirm(`хочешь танировку`)
            if (getIsBlack === true) {
                isBlack_tw = true
                prays_tw = prays_tw * 5 / 100 + prays_tw
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            } else if (getIsBlack === false) {
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)

            }
        } else if (gethasluc === false) {
            let getIsBlack = confirm(`хочешь танировку`)
            if (getIsBlack === true) {
                isBlack_tw = true
                prays_tw = prays_tw * 5 / 100 + prays_tw
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            } else if (getIsBlackTwo === false) {
                alert(`вот твоя машина ${car} матор ${chgine} цвет ${color} люк ${hasluc} танировка ${ isBlack} и также цена ${prays}`)
            }
        }
    }
}

