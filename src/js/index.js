import slider from "./modules/slider";
slider();

import serviceItemCost from "./modules/service-item-price";
serviceItemCost();

import road from "./modules/road";
road();

import hoverImg from "./modules/hover-img";
hoverImg();

import feedback from "./modules/feedback";
feedback();

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('#date', {
    inline: true
})