import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
new AirDatepicker('#date', {
    inline: true
})
new AirDatepicker('#date-form', {
    inline: true
})

import animImg from "./modules/anim-img";
animImg();

import slider from "./modules/slider";
slider();

import popUpToggle from "./modules/open-pop-up";
popUpToggle();

import serviceItemCost from "./modules/service-item-price";
serviceItemCost();

import road from "./modules/road";
road();

import hoverImg from "./modules/hover-img";
hoverImg();

import feedback from "./modules/feedback";
feedback();

import changeForm from "./modules/main-form";
changeForm();

import spollers from "./modules/spollers";
spollers();