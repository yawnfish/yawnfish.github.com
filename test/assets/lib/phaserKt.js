if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'phaserKt'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'phaserKt'.");
}
if (typeof Phaser === 'undefined') {
  throw new Error("Error loading module 'phaserKt'. Its dependency 'Phaser' was not found. Please, check whether 'Phaser' is loaded prior to 'phaserKt'.");
}
var phaserKt = function (_, Kotlin, $module$Phaser) {
  'use strict';
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var kPI2;
  var kPI;
  function sin($receiver, value) {
    return Math.sin(value);
  }
  function cos($receiver, value) {
    return Math.cos(value);
  }
  function get_PI2($receiver) {
    return kPI2;
  }
  function get_PI($receiver) {
    return kPI;
  }
  function round($receiver, value) {
    return Math.round(value);
  }
  function floor($receiver, value) {
    return Math.floor(value);
  }
  function atan2($receiver, x, y) {
    return Math.atan2(x, y);
  }
  function sqrt($receiver, value) {
    return Math.sqrt(value);
  }
  function abs($receiver, value) {
    return Math.abs(value);
  }
  function random($receiver) {
    return Math.random();
  }
  function random_0($receiver, min, max) {
    return random($receiver) * (max - min | 0) + min | 0;
  }
  function crop($receiver, rect, copy) {
    if (copy === void 0)
      copy = null;
    $receiver.crop(rect, copy);
  }
  function destroy($receiver, destroyChildren, unknown) {
    if (destroyChildren === void 0)
      destroyChildren = null;
    if (unknown === void 0)
      unknown = null;
    $receiver.destroy(destroyChildren, unknown);
  }
  function revive($receiver, health) {
    if (health === void 0)
      health = 100;
    return $receiver.revive(health);
  }
  function reset($receiver, x, y, health) {
    if (x === void 0)
      x = null;
    if (y === void 0)
      y = null;
    if (health === void 0)
      health = null;
    return $receiver.reset(x, y, health);
  }
  function setScaleMinMax($receiver, minX, minY, maxX, maxY) {
    if (minX === void 0)
      minX = null;
    if (minY === void 0)
      minY = null;
    if (maxX === void 0)
      maxX = null;
    if (maxY === void 0)
      maxY = null;
    $receiver.setScaleMinMax(minX, minY, maxX, maxY);
  }
  function setTexture($receiver, texture) {
    $receiver.setTexture(texture, undefined);
  }
  function setTexture_0($receiver, texture) {
    $receiver.setTexture(texture, undefined);
  }
  function setTexture_1($receiver, texture, destroyBase) {
    $receiver.setTexture(texture, destroyBase);
  }
  function setTexture_2($receiver, texture, destroyBase) {
    $receiver.setTexture(texture, destroyBase);
  }
  function getBounds($receiver) {
    return $receiver.getBounds(null);
  }
  function getBounds_0($receiver, targetCoordinateSpace) {
    return $receiver.getBounds(targetCoordinateSpace);
  }
  function getBounds_1($receiver, targetCoordinateSpace) {
    return $receiver.getBounds(targetCoordinateSpace);
  }
  function alignTo($receiver, container, position, offsetX, offsetY) {
    if (position === void 0)
      position = null;
    if (offsetX === void 0)
      offsetX = null;
    if (offsetY === void 0)
      offsetY = null;
    return $receiver.alignTo(container, position, offsetX, offsetY);
  }
  function enable($receiver, spr, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(spr, children);
  }
  function enable_0($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function enable_1($receiver, spr, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(spr, children);
  }
  function enable_2($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function enable_3($receiver, spr, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(spr, children);
  }
  function enable_4($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function enable_5($receiver, group, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(group, children);
  }
  function enable_6($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function enable_7($receiver, spr, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(spr, children);
  }
  function enable_8($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function Asset(name, url) {
    this.name = name;
    this.url = url;
  }
  Asset.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Asset',
    interfaces: []
  };
  Asset.prototype.component1 = function () {
    return this.name;
  };
  Asset.prototype.component2 = function () {
    return this.url;
  };
  Asset.prototype.copy_puj7f4$ = function (name, url) {
    return new Asset(name === void 0 ? this.name : name, url === void 0 ? this.url : url);
  };
  Asset.prototype.toString = function () {
    return 'Asset(name=' + Kotlin.toString(this.name) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  Asset.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  Asset.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.url, other.url)))));
  };
  function start($receiver, state, clearWorld, clearCache, args) {
    if (clearWorld === void 0)
      clearWorld = null;
    if (clearCache === void 0)
      clearCache = null;
    var stateID = get_js(Kotlin.getKClassFromExpression(state)).name;
    $receiver.add(stateID, state, false);
    $receiver.start(stateID);
  }
  function GameStateType(name) {
    var tmp$;
    return Kotlin.isType(tmp$ = name, Object) ? tmp$ : Kotlin.throwCCE();
  }
  function GameState(game) {
  }
  GameState.prototype.preload = function () {
  };
  GameState.prototype.create = function () {
  };
  GameState.prototype.update = function () {
  };
  GameState.prototype.render = function () {
  };
  GameState.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GameState',
    interfaces: []
  };
  function Game_0(config) {
    return new $module$Phaser.Game(config.width, config.height, config.renderer, config.parent, config.state, config.transparent, config.antialias, config.physicsConfig);
  }
  function TextStyle(font, fontStyle, fontVariant, fontWeight, fontSize, backgroundColor, fill, align, boundsAlignH, boundsAlignV, stroke, strokeThickness, wordWrap, wordWrapWidth, tabs) {
    if (font === void 0)
      font = null;
    if (fontStyle === void 0)
      fontStyle = null;
    if (fontVariant === void 0)
      fontVariant = null;
    if (fontWeight === void 0)
      fontWeight = null;
    if (fontSize === void 0)
      fontSize = null;
    if (backgroundColor === void 0)
      backgroundColor = null;
    if (fill === void 0)
      fill = null;
    if (align === void 0)
      align = null;
    if (boundsAlignH === void 0)
      boundsAlignH = null;
    if (boundsAlignV === void 0)
      boundsAlignV = null;
    if (stroke === void 0)
      stroke = null;
    if (strokeThickness === void 0)
      strokeThickness = null;
    if (wordWrap === void 0)
      wordWrap = null;
    if (wordWrapWidth === void 0)
      wordWrapWidth = null;
    if (tabs === void 0)
      tabs = null;
    var out = {};
    if (font != null)
      out.font = font;
    if (fontStyle != null)
      out.fontStyle = fontStyle;
    if (fontVariant != null)
      out.fontVariant = fontVariant;
    if (fontWeight != null)
      out.fontWeight = fontWeight;
    if (fontSize != null)
      out.fontSize = fontSize;
    if (backgroundColor != null)
      out.backgroundColor = backgroundColor;
    if (fill != null)
      out.fill = fill;
    if (align != null)
      out.align = align;
    if (boundsAlignH != null)
      out.boundsAlignH = boundsAlignH;
    if (boundsAlignV != null)
      out.boundsAlignV = boundsAlignV;
    if (stroke != null)
      out.stroke = stroke;
    if (strokeThickness != null)
      out.strokeThickness = strokeThickness;
    if (wordWrap != null)
      out.wordWrap = wordWrap;
    if (wordWrapWidth != null)
      out.wordWrapWidth = wordWrapWidth;
    if (tabs != null)
      out.tabs = tabs;
    return out;
  }
  function GameConfig(enableDebug, width, height, renderer, parent, transparent, antialias, resolution, physicsConfig, state) {
    if (enableDebug === void 0)
      enableDebug = null;
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    if (renderer === void 0)
      renderer = null;
    if (parent === void 0)
      parent = null;
    if (transparent === void 0)
      transparent = null;
    if (antialias === void 0)
      antialias = null;
    if (resolution === void 0)
      resolution = null;
    if (physicsConfig === void 0)
      physicsConfig = null;
    if (state === void 0)
      state = null;
    var out = {};
    if (enableDebug != null)
      out.enableDebug = enableDebug;
    if (width != null)
      out.width = width;
    if (height != null)
      out.height = height;
    if (renderer != null)
      out.renderer = renderer;
    if (parent != null)
      out.parent = parent;
    if (transparent != null)
      out.transparent = transparent;
    if (antialias != null)
      out.antialias = antialias;
    if (resolution != null)
      out.resolution = resolution;
    if (physicsConfig != null)
      out.physicsConfig = physicsConfig;
    if (state != null)
      out.state = state;
    return out;
  }
  function IGameConfig() {
  }
  IGameConfig.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IGameConfig',
    interfaces: []
  };
  function ContactMaterialOptions(friction, restitution, stiffness, relaxation, frictionStiffness, frictionRelaxation, surfaceVelocity) {
    if (friction === void 0)
      friction = null;
    if (restitution === void 0)
      restitution = null;
    if (stiffness === void 0)
      stiffness = null;
    if (relaxation === void 0)
      relaxation = null;
    if (frictionStiffness === void 0)
      frictionStiffness = null;
    if (frictionRelaxation === void 0)
      frictionRelaxation = null;
    if (surfaceVelocity === void 0)
      surfaceVelocity = null;
    var out = {};
    if (friction != null)
      out.friction = friction;
    if (restitution != null)
      out.restitution = restitution;
    if (stiffness != null)
      out.stiffness = stiffness;
    if (relaxation != null)
      out.relaxation = relaxation;
    if (frictionStiffness != null)
      out.frictionStiffness = frictionStiffness;
    if (frictionRelaxation != null)
      out.frictionRelaxation = frictionRelaxation;
    if (surfaceVelocity != null)
      out.surfaceVelocity = surfaceVelocity;
    return out;
  }
  function IContactMaterialOptions() {
  }
  IContactMaterialOptions.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IContactMaterialOptions',
    interfaces: []
  };
  function image($receiver, asset) {
    return $receiver.image(asset.name, asset.url);
  }
  function images($receiver, assets) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== assets.length; ++tmp$) {
      var element = assets[tmp$];
      $receiver.image(element.name, element.url);
    }
  }
  function images_0($receiver, assets) {
    var tmp$;
    tmp$ = assets.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.image(element.name, element.url);
    }
  }
  function sound($receiver, asset) {
    return $receiver.audio(asset.name, asset.url);
  }
  function sounds($receiver, assets) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== assets.length; ++tmp$) {
      var element = assets[tmp$];
      $receiver.audio(element.name, element.url);
    }
  }
  function sounds_0($receiver, assets) {
    var tmp$;
    tmp$ = assets.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.audio(element.name, element.url);
    }
  }
  function DirectionObj() {
  }
  DirectionObj.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'DirectionObj',
    interfaces: []
  };
  var package$Phaser = _.Phaser || (_.Phaser = {});
  Object.defineProperty(package$Phaser, 'kPI2', {
    get: function () {
      return kPI2;
    }
  });
  Object.defineProperty(package$Phaser, 'kPI', {
    get: function () {
      return kPI;
    }
  });
  package$Phaser.sin_uhitxw$ = sin;
  package$Phaser.cos_uhitxw$ = cos;
  package$Phaser.get_PI2_akwgk2$ = get_PI2;
  package$Phaser.get_PI_akwgk2$ = get_PI;
  package$Phaser.round_pnwyho$ = round;
  package$Phaser.floor_pnwyho$ = floor;
  package$Phaser.atan2_kerio2$ = atan2;
  package$Phaser.sqrt_uhitxw$ = sqrt;
  package$Phaser.abs_uhitxw$ = abs;
  package$Phaser.random_akwgk2$ = random;
  package$Phaser.random_e9h2e2$ = random_0;
  package$Phaser.cropKt = crop;
  package$Phaser.destroyKt = destroy;
  package$Phaser.reviveKt = revive;
  package$Phaser.resetKt = reset;
  package$Phaser.setScaleMinMaxKt = setScaleMinMax;
  package$Phaser.setTextureKt = setTexture;
  package$Phaser.setTextureKt2 = setTexture_0;
  package$Phaser.setTextureKt3 = setTexture_1;
  package$Phaser.setTextureKt4 = setTexture_2;
  package$Phaser.getBoundsKt = getBounds;
  package$Phaser.getBoundsKt1 = getBounds_0;
  package$Phaser.getBoundsKt2 = getBounds_1;
  package$Phaser.alignKt = alignTo;
  package$Phaser.enableKt = enable;
  package$Phaser.enableKt2 = enable_0;
  package$Phaser.enableKt3 = enable_1;
  package$Phaser.enableKt4 = enable_2;
  package$Phaser.enableKt5 = enable_3;
  package$Phaser.enableKt6 = enable_4;
  package$Phaser.enableKt7 = enable_5;
  package$Phaser.enableKt8 = enable_6;
  package$Phaser.enableKt9 = enable_7;
  package$Phaser.enableKt10 = enable_8;
  package$Phaser.Asset = Asset;
  package$Phaser.start_ba683k$ = start;
  package$Phaser.GameStateType_61zpoe$ = GameStateType;
  package$Phaser.GameState = GameState;
  package$Phaser.Game_lcgo3e$ = Game_0;
  package$Phaser.TextStyle_5jhq38$ = TextStyle;
  package$Phaser.GameConfig_a28mr1$ = GameConfig;
  package$Phaser.IGameConfig = IGameConfig;
  package$Phaser.ContactMaterialOptions_il8t7t$ = ContactMaterialOptions;
  package$Phaser.IContactMaterialOptions = IContactMaterialOptions;
  package$Phaser.image_7nddz2$ = image;
  package$Phaser.images_wjla1x$ = images;
  package$Phaser.images_kx076x$ = images_0;
  package$Phaser.sound_7nddz2$ = sound;
  package$Phaser.sounds_wjla1x$ = sounds;
  package$Phaser.sounds_kx076x$ = sounds_0;
  package$Phaser.DirectionObj = DirectionObj;
  kPI2 = Math.PI * 2;
  kPI = Math.PI;
  Kotlin.defineModule('phaserKt', _);
  return _;
}(typeof phaserKt === 'undefined' ? {} : phaserKt, kotlin, Phaser);
