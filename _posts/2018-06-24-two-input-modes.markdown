---
layout: post
title:  Two Inut Modes - Action and Puzzle
categories: jekyll update
---

Samsara's input & match checking process is most advanced and precise in match-three genre. It makes possible that game playing is super fast and simultaneous without any contradiction. But for the puzzle itself, traditional turn-based input system is preferred because users can make a complex combo by deep and logical thinking.

The 6x6 Infinite mode is designed not for ACTION but the PUZZLE itself. Drawcia, who is the world #1 6x6 player on Android, noticed me that current 6x6 Infinite mode's input system is little confused. She designs a complex combo but not all this trying success because the ghost block doesn't explode as expected occasionally. It's because current input system for 6x6 Infinite mode is Action Mode.

In ACTION mode, you can input simultaneously, and it is kept by input buffer. Match checking process runs about LANDED tiles whenever a game state is not Idle. It is possible that dropping tiles have a different landing timing and it causes a failure of the combo.

So I changed 6x6 Infinite input system from ACTION to PUZZLE mode. In PUZZLE mode, user input is restricted as a turn-based and match checking process only performs at begin of Idle state.

Thanks to Drawcia. She tested and confirmed new input system. :)