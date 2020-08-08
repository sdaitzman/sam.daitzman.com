---
title: Open 3D Printer Config
date: 2020-08-08
description:
    All-open-source 3D printing upgrades across hardware, firmware, slicing and networking.
layout: Post
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
draft: true
---

# Open 3D Printer Config

Around the beginning of quarantine, I decided to get a new 3D printer to replace my aging 2012-era Solidoodle 2. I chose the Creality Ender 3 Pro, a ~$200 completely open-source printer. Choosing a 3D printer this inexpensive has a couple downsides, so I decided to strategically update the most important components.

- Upgraded the control board to BigTreeTech's [SKR Mini E3 DIP](https://github.com/bigtreetech/BIGTREETECH-SKR-E3-DIP-V1.0)
- Slotted [TMC2209](https://github.com/bigtreetech/BIGTREETECH-TMC2209-V1.2) stepper drivers into the SKR board, which increased print quality while drastically cutting noise
- Added a Raspberry Pi with a live camera feed through [Octoprint](https://octoprint.org/)
- Replaced the bowden tube with an upgraded [Capricorn tube](https://www.captubes.com/shop/#!/1-Meter-XS-Low-Friction-1-75mm-Bowden-Tubing/p/82190682/category=23214267)
- Added a [BLTouch automatic bed leveling probe](https://www.antclabs.com/bltouch-v3)
- Printed some upgrade parts: [vibration dampers](https://www.thingiverse.com/thing:3481865), [Z stabilizer](https://www.thingiverse.com/thing:3370355) and [knob](https://www.thingiverse.com/thing:3179667), and an [extruder knob](https://www.thingiverse.com/thing:3544547)

Of course, the software makes as large a difference as the hardware. With some careful configuration tweaks, I've made the printer significantly more useful.

- Enabling the BLTouch, which required patching the board support files to correct the pinout of the E3 DIP
- Switching to sensorless homing, and optimizing the homing procedure to reduce strain on the timing belts (including tuning the homing sensitivity)
- Patching the build configuration to use the hidden extra 256k of flash storage on the SKR Mini E3 DIP
- Switching to software PWM to reduce fan noise
- Switching to an improved Z-leveling interface, which greatly simplifies bed leveling
- Removing arc support, an unused GCODE feature only rarely relevant for other CNC machines. This frees up flash storage for more important things, like...
- Enabling several onscreen games hidden inside the menus
- Restoring powerloss recovery, which required patching a malformed ternary operator in Marlin
- Increasing the max allowed acceleration (since vibration is less of an issue with TMC2209 drivers)
- Switching to S-curve acceleration, which allows higher print speeds with the same print quality
- Silencing all beeps
- Improving pause behavior, and linking the onscreen controls to the networked Octoprint interface
- Parsing print ETA and time to completion from GCode files and displaying live stats, accurate to within seconds
- Adding support for individual-object cancellation (when printing many objects and one fails, this allows you to cancel just that object in realtime)
- Enabling USB SD support (so you can browse the printer's internal SD card as a USB mass storage device)
- As a consequence of this, enabling completely wireless firmware flashing over the local network
- Modifying the automatic bed leveling to leave room for clips at the edge of the build plate
- Significantly improving the speed and reliability of the automatic bed leveling


```js
let testFunction = (name) => {
    window.alert(name)
    window.console.info(name)
}
```