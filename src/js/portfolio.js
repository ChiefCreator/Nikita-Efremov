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

import select from "./modules/select";
select();

import popUpToggle from "./modules/open-pop-up";
popUpToggle();

import serviceItemCost from "./modules/service-item-price";
serviceItemCost();

import changeForm from "./modules/main-form";
changeForm();

import validation from "./modules/validation-form";
validation();

import feedback from "./modules/feedback";
feedback();

import spollers from "./modules/spollers";
spollers();