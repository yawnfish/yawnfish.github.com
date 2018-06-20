---
layout: post
title:  "Samsara for HTML5 is ready!"
categories: jekyll update
---

Thanks to [Phaser][phaser], [Kotlin][kotlin] and [kotlin-phaser][kotlin-phaser], I could finish hard work porting Samsara for HTML5. Kotlin's crosspiling is an awesome feature you should experience!

As I've been developing Samsara using libGDX that can publish a project for Android, iOS, Desktop, and HTML5, I thought to port for HTML5 is a piece of cake. When I started the work, I realized libGDX doesn't support Kotlin for HTML5! Only support JAVA project.

After some research, I found Kotlin's javascript crosspiling and [kotlin-phaser][kotlin-phaser] project. But it seems there's no developer who uses kotlin-phaser, so it looked very risky.
But hiperbou, developer of kotlin-phaser, had done to port every example of Phaser, I could make a decision.
Thank you hiperbou. You've done a great work!

[phaser]: http://phaser.io/
[kotlin]: http://kotlinlang.org/
[kotlin-phaser]: https://github.com/hiperbou/kotlin-phaser
