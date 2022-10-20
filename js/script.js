// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const hours = parseInt(document.getElementById("hours_worked").value)
  const rate = parseInt(document.getElementById("hourly_rate").value)
  // process
  const pay = (hours * rate) * (1.00 * 0.18)
  const taxes = (hours * rate) * 0.18
  // output
  document.getElementById("pay").innerHTML = "your pay is: " + pay
  document.getElementById("governmentstake").innerHTML = "the government will take " + taxes
}
