import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
new AirDatepicker('#date', {
    inline: true,
    onSelect({date, formattedDate, datepicker}) {
        let input = document.querySelector("#date");
        let icon = input.parentElement.querySelector(".form-feedback__calendar-icon");
        let clue = input.parentElement.querySelector(".form-feedback__error-clue");
        if (input.value != "") {
            icon.classList.remove("icon-error");
            icon.addEventListener("mouseenter", function() {
                clue.classList.remove("clue-error");
            })
        }
    }
})
new AirDatepicker('#date-form', {
    inline: true,
    onSelect({date, formattedDate, datepicker}) {
        let input = document.querySelector("#date-form");
        let icon = input.parentElement.querySelector(".form-feedback__calendar-icon");
        let clue = input.parentElement.querySelector(".form-feedback__error-clue");
        if (input.value != "") {
            icon.classList.remove("icon-error");
            icon.addEventListener("mouseenter", function() {
                clue.classList.remove("clue-error");
            })
        }
    }
})

import animImg from "./modules/anim-img";
animImg();

import slider from "./modules/slider";
slider();

import popUpToggle from "./modules/open-pop-up";
popUpToggle();

import validation from "./modules/validation-form";
validation();

import feedback from "./modules/feedback";
feedback();

import serviceItemCost from "./modules/service-item-price";
serviceItemCost();

import road from "./modules/road";
road();

import hoverImg from "./modules/hover-img";
hoverImg();

import changeForm from "./modules/main-form";
changeForm();

import spollers from "./modules/spollers";
spollers();