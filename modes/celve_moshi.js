const tween = {
  linear: (t, b, c, d) => {
    return (c * t) / d + b;
  },
  easeIn: (t, b, c, d) => {
    return c * (t /= d) * t + b;
  },
  strongEaseIn: (t, b, c, d) => {
    return c * (t /= d) * t * t * t * t + b;
  },
  strongEaseOut: (t, b, c, d) => {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  sinEaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  sinEaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }
};

const Animate = function (dom) {
  this.dom = dom; // 进行运动的 dom 节点
  this.startTime = 0; // 动画开始时间
  this.startPos = 0; // 动画开始时，dom 节点的位置，即 dom 的初始位置
  this.endPos = 0; // 动画结束时，dom 节点的位置，即 dom 的目标位置
  this.propertyName = null; // dom 节点需要被改变的 css 属性名
  this.easing = null; // 缓动算法
  this.duration = null; // 动画持续时间
};

Animate.prototype.start = function (propertyName, endPos, duration, easing) {
  this.startTime = +new Date();
  this.startPos = this.dom.getBoundingClientRect()[propertyName];
  this.propertyName = propertyName;
  this.endPos = endPos;
  this.duration = duration;
  this.easing = tween[easing];

  const self = this;
  let timeId = setInterval(function () {
    if (self.step() === false) {
      clearInterval(timeId);
    }
  }, 19);
};

Animate.prototype.step = function () {
  let t = +new Date();
  if (t >= this.startTime + this.duration) {
    this.update(this.endPos);
    return false;
  }
  let pos = this.easing(
    t - this.startTime,
    this.startPos,
    this.endPos - this.startPos,
    this.duration
  );
  this.update(pos);
};

Animate.prototype.update = function (pos) {
  this.dom.style[this.propertyName] = pos + 'px';
};

const div = document.querySelector('.area');
const animate = new Animate(div);
animate.start('left', 500, 1000, 'easeIn');
