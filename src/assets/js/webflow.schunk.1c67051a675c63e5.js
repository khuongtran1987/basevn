(self.webpackChunk = self.webpackChunk || []).push([
  ['812'],
  {
    5487: function () {
      'use strict';
      window.tram = (function (e) {
        function t(e, t) {
          return new w.Bare().init(e, t);
        }
        function a(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function n(e, t, a) {
          return '#' + (0x1000000 | (e << 16) | (t << 8) | a).toString(16).slice(1);
        }
        function i() {}
        function l(e, t, a) {
          if ((void 0 !== t && (a = t), void 0 === e)) return a;
          var n = a;
          return (
            q.test(e) || !$.test(e)
              ? (n = parseInt(e, 10))
              : $.test(e) && (n = 1e3 * parseFloat(e)),
            0 > n && (n = 0),
            n == n ? n : a
          );
        }
        function o(e) {
          W.debug && window && window.console.warn(e);
        }
        var d,
          c,
          s,
          r = (function (e, t, a) {
            function n(e) {
              return 'object' == typeof e;
            }
            function i(e) {
              return 'function' == typeof e;
            }
            function l() {}
            return function o(d, c) {
              function s() {
                var e = new r();
                return i(e.init) && e.init.apply(e, arguments), e;
              }
              function r() {}
              c === a && ((c = d), (d = Object)), (s.Bare = r);
              var f,
                u = (l[e] = d[e]),
                p = (r[e] = s[e] = new l());
              return (
                (p.constructor = s),
                (s.mixin = function (t) {
                  return (r[e] = s[e] = o(s, t)[e]), s;
                }),
                (s.open = function (e) {
                  if (((f = {}), i(e) ? (f = e.call(s, p, u, s, d)) : n(e) && (f = e), n(f)))
                    for (var a in f) t.call(f, a) && (p[a] = f[a]);
                  return i(p.init) || (p.init = d), s;
                }),
                s.open(c)
              );
            };
          })('prototype', {}.hasOwnProperty),
          f = {
            ease: [
              'ease',
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  l = i * e;
                return t + a * (-2.75 * l * i + 11 * i * i + -15.5 * l + 8 * i + 0.25 * e);
              },
            ],
            'ease-in': [
              'ease-in',
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  l = i * e;
                return t + a * (-1 * l * i + 3 * i * i + -3 * l + 2 * i);
              },
            ],
            'ease-out': [
              'ease-out',
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  l = i * e;
                return t + a * (0.3 * l * i + -1.6 * i * i + 2.2 * l + -1.8 * i + 1.9 * e);
              },
            ],
            'ease-in-out': [
              'ease-in-out',
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  l = i * e;
                return t + a * (2 * l * i + -5 * i * i + 2 * l + 2 * i);
              },
            ],
            linear: [
              'linear',
              function (e, t, a, n) {
                return (a * e) / n + t;
              },
            ],
            'ease-in-quad': [
              'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
              function (e, t, a, n) {
                return a * (e /= n) * e + t;
              },
            ],
            'ease-out-quad': [
              'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
              function (e, t, a, n) {
                return -a * (e /= n) * (e - 2) + t;
              },
            ],
            'ease-in-out-quad': [
              'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
              function (e, t, a, n) {
                return (e /= n / 2) < 1 ? (a / 2) * e * e + t : (-a / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            'ease-in-cubic': [
              'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
              function (e, t, a, n) {
                return a * (e /= n) * e * e + t;
              },
            ],
            'ease-out-cubic': [
              'cubic-bezier(0.215, 0.610, 0.355, 1)',
              function (e, t, a, n) {
                return a * ((e = e / n - 1) * e * e + 1) + t;
              },
            ],
            'ease-in-out-cubic': [
              'cubic-bezier(0.645, 0.045, 0.355, 1)',
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e + t
                  : (a / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            'ease-in-quart': [
              'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
              function (e, t, a, n) {
                return a * (e /= n) * e * e * e + t;
              },
            ],
            'ease-out-quart': [
              'cubic-bezier(0.165, 0.840, 0.440, 1)',
              function (e, t, a, n) {
                return -a * ((e = e / n - 1) * e * e * e - 1) + t;
              },
            ],
            'ease-in-out-quart': [
              'cubic-bezier(0.770, 0, 0.175, 1)',
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e * e + t
                  : (-a / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            'ease-in-quint': [
              'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
              function (e, t, a, n) {
                return a * (e /= n) * e * e * e * e + t;
              },
            ],
            'ease-out-quint': [
              'cubic-bezier(0.230, 1, 0.320, 1)',
              function (e, t, a, n) {
                return a * ((e = e / n - 1) * e * e * e * e + 1) + t;
              },
            ],
            'ease-in-out-quint': [
              'cubic-bezier(0.860, 0, 0.070, 1)',
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e * e * e + t
                  : (a / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            'ease-in-sine': [
              'cubic-bezier(0.470, 0, 0.745, 0.715)',
              function (e, t, a, n) {
                return -a * Math.cos((e / n) * (Math.PI / 2)) + a + t;
              },
            ],
            'ease-out-sine': [
              'cubic-bezier(0.390, 0.575, 0.565, 1)',
              function (e, t, a, n) {
                return a * Math.sin((e / n) * (Math.PI / 2)) + t;
              },
            ],
            'ease-in-out-sine': [
              'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
              function (e, t, a, n) {
                return (-a / 2) * (Math.cos((Math.PI * e) / n) - 1) + t;
              },
            ],
            'ease-in-expo': [
              'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
              function (e, t, a, n) {
                return 0 === e ? t : a * Math.pow(2, 10 * (e / n - 1)) + t;
              },
            ],
            'ease-out-expo': [
              'cubic-bezier(0.190, 1, 0.220, 1)',
              function (e, t, a, n) {
                return e === n ? t + a : a * (-Math.pow(2, (-10 * e) / n) + 1) + t;
              },
            ],
            'ease-in-out-expo': [
              'cubic-bezier(1, 0, 0, 1)',
              function (e, t, a, n) {
                return 0 === e
                  ? t
                  : e === n
                  ? t + a
                  : (e /= n / 2) < 1
                  ? (a / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (a / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            'ease-in-circ': [
              'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
              function (e, t, a, n) {
                return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + t;
              },
            ],
            'ease-out-circ': [
              'cubic-bezier(0.075, 0.820, 0.165, 1)',
              function (e, t, a, n) {
                return a * Math.sqrt(1 - (e = e / n - 1) * e) + t;
              },
            ],
            'ease-in-out-circ': [
              'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (-a / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (a / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            'ease-in-back': [
              'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
              function (e, t, a, n, i) {
                return void 0 === i && (i = 1.70158), a * (e /= n) * e * ((i + 1) * e - i) + t;
              },
            ],
            'ease-out-back': [
              'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            'ease-in-out-back': [
              'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= n / 2) < 1
                    ? (a / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (a / 2) * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                );
              },
            ],
          },
          u = {
            'ease-in-back': 'cubic-bezier(0.600, 0, 0.735, 0.045)',
            'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1)',
            'ease-in-out-back': 'cubic-bezier(0.680, 0, 0.265, 1)',
          },
          p = window,
          I = 'bkwld-tram',
          E = /[\-\.0-9]/g,
          T = /[A-Z]/,
          y = 'number',
          m = /^(rgb|#)/,
          g = /(em|cm|mm|in|pt|pc|px)$/,
          b = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = 'unitless',
          L = /(all|none) 0s ease 0s/,
          _ = /^(width|height)$/,
          R = document.createElement('a'),
          N = ['Webkit', 'Moz', 'O', 'ms'],
          S = ['-webkit-', '-moz-', '-o-', '-ms-'],
          A = function (e) {
            if (e in R.style) return { dom: e, css: e };
            var t,
              a,
              n = '',
              i = e.split('-');
            for (t = 0; t < i.length; t++) n += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < N.length; t++)
              if ((a = N[t] + n) in R.style) return { dom: a, css: S[t] + e };
          },
          C = (t.support = {
            bind: Function.prototype.bind,
            transform: A('transform'),
            transition: A('transition'),
            backface: A('backface-visibility'),
            timing: A('transition-timing-function'),
          });
        if (C.transition) {
          var h = C.timing.dom;
          if (((R.style[h] = f['ease-in-back'][0]), !R.style[h])) for (var M in u) f[M][0] = u[M];
        }
        var k = (t.frame =
            (d =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && C.bind
              ? d.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          V = (t.now =
            (s = (c = p.performance) && (c.now || c.webkitNow || c.msNow || c.mozNow)) && C.bind
              ? s.bind(c)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          U = r(function (t) {
            function a(e, t) {
              var a = (function (e) {
                  for (var t = -1, a = e ? e.length : 0, n = []; ++t < a; ) {
                    var i = e[t];
                    i && n.push(i);
                  }
                  return n;
                })(('' + e).split(' ')),
                n = a[0];
              t = t || {};
              var i = j[n];
              if (!i) return o('Unsupported property: ' + n);
              if (!t.weak || !this.props[n]) {
                var l = i[0],
                  d = this.props[n];
                return d || (d = this.props[n] = new l.Bare()), d.init(this.$el, a, i, t), d;
              }
            }
            function n(e, t, n) {
              if (e) {
                var o = typeof e;
                if (
                  (t || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)),
                  'number' == o && t)
                )
                  return (
                    (this.timer = new P({ duration: e, context: this, complete: i })),
                    void (this.active = !0)
                  );
                if ('string' == o && t) {
                  switch (e) {
                    case 'hide':
                      c.call(this);
                      break;
                    case 'stop':
                      d.call(this);
                      break;
                    case 'redraw':
                      s.call(this);
                      break;
                    default:
                      a.call(this, e, n && n[1]);
                  }
                  return i.call(this);
                }
                if ('function' == o) return void e.call(this, this);
                if ('object' == o) {
                  var u = 0;
                  f.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > u && (u = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      'wait' in e && (u = l(e.wait, 0));
                    }
                  ),
                    r.call(this),
                    u > 0 &&
                      ((this.timer = new P({ duration: u, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i));
                  var p = this,
                    I = !1,
                    E = {};
                  k(function () {
                    f.call(p, e, function (e) {
                      e.active && ((I = !0), (E[e.name] = e.nextStyle));
                    }),
                      I && p.$el.css(E);
                  });
                }
              }
            }
            function i() {
              if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
                var e = this.queue.shift();
                n.call(this, e.options, !0, e.args);
              }
            }
            function d(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                'string' == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = 'object' == typeof e && null != e ? e : this.props),
                f.call(this, t, u),
                r.call(this);
            }
            function c() {
              d.call(this), (this.el.style.display = 'none');
            }
            function s() {
              this.el.offsetHeight;
            }
            function r() {
              var e,
                t,
                a = [];
              for (e in (this.upstream && a.push(this.upstream), this.props))
                (t = this.props[e]).active && a.push(t.string);
              (a = a.join(',')),
                this.style !== a && ((this.style = a), (this.el.style[C.transition.dom] = a));
            }
            function f(e, t, n) {
              var i,
                l,
                o,
                d,
                c = t !== u,
                s = {};
              for (i in e)
                (o = e[i]),
                  i in z
                    ? (s.transform || (s.transform = {}), (s.transform[i] = o))
                    : (T.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return '-' + e.toLowerCase();
                        })),
                      i in j ? (s[i] = o) : (d || (d = {}), (d[i] = o)));
              for (i in s) {
                if (((o = s[i]), !(l = this.props[i]))) {
                  if (!c) continue;
                  l = a.call(this, i);
                }
                t.call(this, l, o);
              }
              n && d && n.call(this, d);
            }
            function u(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function E(e) {
              this.$el.css(e);
            }
            function y(e, a) {
              t[e] = function () {
                return this.children
                  ? m.call(this, a, arguments)
                  : (this.el && a.apply(this, arguments), this);
              };
            }
            function m(e, t) {
              var a,
                n = this.children.length;
              for (a = 0; n > a; a++) e.apply(this.children[a], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ''),
                (this.active = !1),
                W.keepInherited && !W.fallback)
              ) {
                var a = H(this.el, 'transition');
                a && !L.test(a) && (this.upstream = a);
              }
              C.backface && W.hideBackface && X(this.el, C.backface.css, 'hidden');
            }),
              y('add', a),
              y('start', n),
              y('wait', function (e) {
                (e = l(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new P({ duration: e, context: this, complete: i })),
                      (this.active = !0));
              }),
              y('then', function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : o('No active transition timer. Use start() or wait() before then().');
              }),
              y('next', i),
              y('stop', d),
              y('set', function (e) {
                d.call(this, e), f.call(this, e, p, E);
              }),
              y('show', function (e) {
                'string' != typeof e && (e = 'block'), (this.el.style.display = e);
              }),
              y('hide', c),
              y('redraw', s),
              y('destroy', function () {
                d.call(this), e.removeData(this.el, I), (this.$el = this.el = null);
              });
          }),
          w = r(U, function (t) {
            function a(t, a) {
              var n = e.data(t, I) || e.data(t, I, new U.Bare());
              return n.el || n.init(t), a ? n.start(a) : n;
            }
            t.init = function (t, n) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return a(i[0], n);
              var l = [];
              return (
                i.each(function (e, t) {
                  l.push(a(t, n));
                }),
                (this.children = l),
                this
              );
            };
          }),
          x = r(function (e) {
            function t() {
              var e = this.get();
              this.update('auto');
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, a, n) {
              (this.$el = e), (this.el = e[0]);
              var i,
                o,
                d,
                c = t[0];
              a[2] && (c = a[2]),
                Y[c] && (c = Y[c]),
                (this.name = c),
                (this.type = a[1]),
                (this.duration = l(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (o = this.ease),
                  (d = 'ease'),
                  void 0 !== o && (d = o),
                  i in f ? i : d)),
                (this.delay = l(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = _.test(this.name)),
                (this.unit = n.unit || this.unit || W.defaultUnit),
                (this.angle = n.angle || this.angle || W.defaultAngle),
                W.fallback || n.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      ' ' +
                      this.duration +
                      'ms' +
                      ('ease' != this.ease ? ' ' + f[this.ease][0] : '') +
                      (this.delay ? ' ' + this.delay + 'ms' : '')));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ('auto' == this.el.style[this.name] && (this.update(this.get()), this.redraw()),
                    'auto' == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var a = this.el.style[this.name] || this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ('auto' == a && (a = this.convert(this.get(), this.type)),
                    'auto' == e && (e = t.call(this))),
                  (this.tween = new D({
                    from: a,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return H(this.el, this.name);
              }),
              (e.update = function (e) {
                X(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1), (this.nextStyle = null), X(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ('auto' == e && this.auto) return e;
                var a,
                  i,
                  l = 'number' == typeof e,
                  d = 'string' == typeof e;
                switch (t) {
                  case y:
                    if (l) return e;
                    if (d && '' === e.replace(E, '')) return +e;
                    i = 'number(unitless)';
                    break;
                  case m:
                    if (d) {
                      if ('' === e && this.original) return this.original;
                      if (t.test(e))
                        return '#' == e.charAt(0) && 7 == e.length
                          ? e
                          : ((a = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? n(a[1], a[2], a[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, '#$1$1$2$2$3$3');
                    }
                    i = 'hex or rgb string';
                    break;
                  case g:
                    if (l) return e + this.unit;
                    if (d && t.test(e)) return e;
                    i = 'number(px) or string(unit)';
                    break;
                  case b:
                    if (l) return e + this.unit;
                    if (d && t.test(e)) return e;
                    i = 'number(px) or string(unit or %)';
                    break;
                  case O:
                    if (l) return e + this.angle;
                    if (d && t.test(e)) return e;
                    i = 'number(deg) or string(angle)';
                    break;
                  case v:
                    if (l || (d && b.test(e))) return e;
                    i = 'number(unitless) or string(unit or %)';
                }
                return o('Type warning: Expected: [' + i + '] Got: [' + typeof e + '] ' + e), e;
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          B = r(x, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), m));
            };
          }),
          G = r(x, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          F = r(x, function (e, t) {
            function a(e, t) {
              var a, n, i, l, o;
              for (a in e)
                (i = (l = z[a])[0]),
                  (n = l[1] || a),
                  (o = this.convert(e[a], i)),
                  t.call(this, n, o, i);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  z.perspective &&
                    W.perspective &&
                    ((this.current.perspective = W.perspective),
                    X(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                a.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  X(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new Q({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var a,
                  n = {};
                for (a in this.current) n[a] = a in t ? t[a] : this.current[a];
                (this.active = !0), (this.nextStyle = this.style(n));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new Q({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                X(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  a = '';
                for (t in e) a += t + '(' + e[t] + ') ';
                return a;
              }),
              (e.values = function (e) {
                var t,
                  n = {};
                return (
                  a.call(this, e, function (e, a, i) {
                    (n[e] = a),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf('scale') && (t = 1),
                        (this.current[e] = this.convert(t, i)));
                  }),
                  n
                );
              });
          }),
          D = r(function (t) {
            function l() {
              var e,
                t,
                a,
                n = c.length;
              if (n) for (k(l), t = V(), e = n; e--; ) (a = c[e]) && a.render(t);
            }
            var d = { ease: f.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || d.ease;
              f[t] && (t = f[t][1]),
                'function' != typeof t && (t = d.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name);
              var a = e.from,
                n = e.to;
              void 0 === a && (a = d.from),
                void 0 === n && (n = d.to),
                (this.unit = e.unit || ''),
                'number' == typeof a && 'number' == typeof n
                  ? ((this.begin = a), (this.change = n - a))
                  : this.format(n, a),
                (this.value = this.begin + this.unit),
                (this.start = V()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = V()),
                  (this.active = !0),
                  1 === c.push(this) && k(l));
              }),
              (t.stop = function () {
                var t, a;
                this.active &&
                  ((this.active = !1),
                  (a = e.inArray(this, c)) >= 0 &&
                    ((t = c.slice(a + 1)), (c.length = a), t.length && (c = c.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  a = e - this.start;
                if (this.delay) {
                  if (a <= this.delay) return;
                  a -= this.delay;
                }
                if (a < this.duration) {
                  var i,
                    l,
                    o = this.ease(a, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (l = this.endRGB),
                        n(
                          i[0] + o * (l[0] - i[0]),
                          i[1] + o * (l[1] - i[1]),
                          i[2] + o * (l[2] - i[2])
                        ))
                      : Math.round((this.begin + o * this.change) * s) / s),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ''), '#' == (e += '').charAt(0)))
                  return (
                    (this.startRGB = a(t)),
                    (this.endRGB = a(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var n = t.replace(E, '');
                  n !== e.replace(E, '') && o('Units do not match [tween]: ' + t + ', ' + e),
                    (this.unit = n);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(), (this.context = null), (this.ease = this.update = this.complete = i);
              });
            var c = [],
              s = 1e3;
          }),
          P = r(D, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          Q = r(D, function (e, t) {
            (e.init = function (e) {
              var t, a;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (a = e.values[t]),
                  this.current[t] !== a &&
                    this.tweens.push(
                      new D({
                        name: t,
                        from: this.current[t],
                        to: a,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  a,
                  n = this.tweens.length,
                  i = !1;
                for (t = n; t--; )
                  (a = this.tweens[t]).context &&
                    (a.render(e), (this.current[a.name] = a.value), (i = !0));
                return i ? void (this.update && this.update.call(this.context)) : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          W = (t.config = {
            debug: !1,
            defaultUnit: 'px',
            defaultAngle: 'deg',
            keepInherited: !1,
            hideBackface: !1,
            perspective: '',
            fallback: !C.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!C.transition) return (W.fallback = !0);
          W.agentTests.push('(' + e + ')');
          var t = RegExp(W.agentTests.join('|'), 'i');
          W.fallback = t.test(navigator.userAgent);
        }),
          t.fallback('6.0.[2-5] Safari'),
          (t.tween = function (e) {
            return new D(e);
          }),
          (t.delay = function (e, t, a) {
            return new P({ complete: t, duration: e, context: a });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var X = e.style,
          H = e.css,
          Y = { transform: C.transform && C.transform.css },
          j = {
            color: [B, m],
            background: [B, m, 'background-color'],
            'outline-color': [B, m],
            'border-color': [B, m],
            'border-top-color': [B, m],
            'border-right-color': [B, m],
            'border-bottom-color': [B, m],
            'border-left-color': [B, m],
            'border-width': [x, g],
            'border-top-width': [x, g],
            'border-right-width': [x, g],
            'border-bottom-width': [x, g],
            'border-left-width': [x, g],
            'border-spacing': [x, g],
            'letter-spacing': [x, g],
            margin: [x, g],
            'margin-top': [x, g],
            'margin-right': [x, g],
            'margin-bottom': [x, g],
            'margin-left': [x, g],
            padding: [x, g],
            'padding-top': [x, g],
            'padding-right': [x, g],
            'padding-bottom': [x, g],
            'padding-left': [x, g],
            'outline-width': [x, g],
            opacity: [x, y],
            top: [x, b],
            right: [x, b],
            bottom: [x, b],
            left: [x, b],
            'font-size': [x, b],
            'text-indent': [x, b],
            'word-spacing': [x, b],
            width: [x, b],
            'min-width': [x, b],
            'max-width': [x, b],
            height: [x, b],
            'min-height': [x, b],
            'max-height': [x, b],
            'line-height': [x, v],
            'scroll-top': [G, y, 'scrollTop'],
            'scroll-left': [G, y, 'scrollLeft'],
          },
          z = {};
        C.transform &&
          ((j.transform = [F]),
          (z = {
            x: [b, 'translateX'],
            y: [b, 'translateY'],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [y],
            scaleX: [y],
            scaleY: [y],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          C.transform &&
            C.backface &&
            ((z.z = [b, 'translateZ']), (z.rotateZ = [O]), (z.scaleZ = [y]), (z.perspective = [g]));
        var q = /ms/,
          $ = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, a) {
      'use strict';
      var n,
        i,
        l,
        o,
        d,
        c,
        s,
        r,
        f,
        u,
        p,
        I,
        E,
        T,
        y,
        m,
        g,
        b,
        O,
        v,
        L = window.$,
        _ = a(5487) && L.tram;
      ((n = {}).VERSION = '1.6.0-Webflow'),
        (i = {}),
        (l = Array.prototype),
        (o = Object.prototype),
        (d = Function.prototype),
        l.push,
        (c = l.slice),
        l.concat,
        o.toString,
        (s = o.hasOwnProperty),
        (r = l.forEach),
        (f = l.map),
        l.reduce,
        l.reduceRight,
        (u = l.filter),
        l.every,
        (p = l.some),
        (I = l.indexOf),
        l.lastIndexOf,
        (E = Object.keys),
        d.bind,
        (T =
          n.each =
          n.forEach =
            function (e, t, a) {
              if (null == e) return e;
              if (r && e.forEach === r) e.forEach(t, a);
              else if (e.length === +e.length) {
                for (var l = 0, o = e.length; l < o; l++) if (t.call(a, e[l], l, e) === i) return;
              } else
                for (var d = n.keys(e), l = 0, o = d.length; l < o; l++)
                  if (t.call(a, e[d[l]], d[l], e) === i) return;
              return e;
            }),
        (n.map = n.collect =
          function (e, t, a) {
            var n = [];
            return null == e
              ? n
              : f && e.map === f
              ? e.map(t, a)
              : (T(e, function (e, i, l) {
                  n.push(t.call(a, e, i, l));
                }),
                n);
          }),
        (n.find = n.detect =
          function (e, t, a) {
            var n;
            return (
              y(e, function (e, i, l) {
                if (t.call(a, e, i, l)) return (n = e), !0;
              }),
              n
            );
          }),
        (n.filter = n.select =
          function (e, t, a) {
            var n = [];
            return null == e
              ? n
              : u && e.filter === u
              ? e.filter(t, a)
              : (T(e, function (e, i, l) {
                  t.call(a, e, i, l) && n.push(e);
                }),
                n);
          }),
        (y =
          n.some =
          n.any =
            function (e, t, a) {
              t || (t = n.identity);
              var l = !1;
              return null == e
                ? l
                : p && e.some === p
                ? e.some(t, a)
                : (T(e, function (e, n, o) {
                    if (l || (l = t.call(a, e, n, o))) return i;
                  }),
                  !!l);
            }),
        (n.contains = n.include =
          function (e, t) {
            return (
              null != e &&
              (I && e.indexOf === I
                ? -1 != e.indexOf(t)
                : y(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (n.delay = function (e, t) {
          var a = c.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, a);
          }, t);
        }),
        (n.defer = function (e) {
          return n.delay.apply(n, [e, 1].concat(c.call(arguments, 1)));
        }),
        (n.throttle = function (e) {
          var t, a, n;
          return function () {
            t ||
              ((t = !0),
              (a = arguments),
              (n = this),
              _.frame(function () {
                (t = !1), e.apply(n, a);
              }));
          };
        }),
        (n.debounce = function (e, t, a) {
          var i,
            l,
            o,
            d,
            c,
            s = function () {
              var r = n.now() - d;
              r < t
                ? (i = setTimeout(s, t - r))
                : ((i = null), a || ((c = e.apply(o, l)), (o = l = null)));
            };
          return function () {
            (o = this), (l = arguments), (d = n.now());
            var r = a && !i;
            return i || (i = setTimeout(s, t)), r && ((c = e.apply(o, l)), (o = l = null)), c;
          };
        }),
        (n.defaults = function (e) {
          if (!n.isObject(e)) return e;
          for (var t = 1, a = arguments.length; t < a; t++) {
            var i = arguments[t];
            for (var l in i) void 0 === e[l] && (e[l] = i[l]);
          }
          return e;
        }),
        (n.keys = function (e) {
          if (!n.isObject(e)) return [];
          if (E) return E(e);
          var t = [];
          for (var a in e) n.has(e, a) && t.push(a);
          return t;
        }),
        (n.has = function (e, t) {
          return s.call(e, t);
        }),
        (n.isObject = function (e) {
          return e === Object(e);
        }),
        (n.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (n.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (m = /(.)^/),
        (g = { "'": "'", '\\': '\\', '\r': 'r', '\n': 'n', '\u2028': 'u2028', '\u2029': 'u2029' }),
        (b = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return '\\' + g[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (n.template = function (e, t, a) {
          !t && a && (t = a);
          var i,
            l = RegExp(
              [
                ((t = n.defaults({}, t, n.templateSettings)).escape || m).source,
                (t.interpolate || m).source,
                (t.evaluate || m).source,
              ].join('|') + '|$',
              'g'
            ),
            o = 0,
            d = "__p+='";
          e.replace(l, function (t, a, n, i, l) {
            return (
              (d += e.slice(o, l).replace(b, O)),
              (o = l + t.length),
              a
                ? (d += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'")
                : n
                ? (d += "'+\n((__t=(" + n + "))==null?'':__t)+\n'")
                : i && (d += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (d += "';\n");
          var c = t.variable;
          if (c) {
            if (!v.test(c)) throw Error('variable is not a bare identifier: ' + c);
          } else (d = 'with(obj||{}){\n' + d + '}\n'), (c = 'obj');
          d =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            d +
            'return __p;\n';
          try {
            i = Function(t.variable || 'obj', '_', d);
          } catch (e) {
            throw ((e.source = d), e);
          }
          var s = function (e) {
            return i.call(this, e, n);
          };
          return (s.source = 'function(' + c + '){\n' + d + '}'), s;
        }),
        (e.exports = n);
    },
    9461: function (e, t, a) {
      'use strict';
      var n = a(3949);
      n.define(
        'brand',
        (e.exports = function (e) {
          var t,
            a = {},
            i = document,
            l = e('html'),
            o = e('body'),
            d = window.location,
            c = /PhantomJS/i.test(navigator.userAgent),
            s = 'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange';
          function r() {
            var a =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr('style', a ? 'display: none !important;' : '');
          }
          function f() {
            var e = o.children('.w-webflow-badge'),
              a = e.length && e.get(0) === t,
              i = n.env('editor');
            if (a) {
              i && e.remove();
              return;
            }
            e.length && e.remove(), i || o.append(t);
          }
          return (
            (a.ready = function () {
              var a,
                n,
                o,
                u = l.attr('data-wf-status'),
                p = l.attr('data-wf-domain') || '';
              /\.webflow\.io$/i.test(p) && d.hostname !== p && (u = !0),
                u &&
                  !c &&
                  ((t =
                    t ||
                    ((a = e('<a class="w-webflow-badge"></a>').attr(
                      'href',
                      'https://webflow.com?utm_campaign=brandjs'
                    )),
                    (n = e('<img>')
                      .attr(
                        'src',
                        'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg'
                      )
                      .attr('alt', '')
                      .css({ marginRight: '4px', width: '26px' })),
                    (o = e('<img>')
                      .attr(
                        'src',
                        'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg'
                      )
                      .attr('alt', 'Made in Webflow')),
                    a.append(n, o),
                    a[0])),
                  f(),
                  setTimeout(f, 500),
                  e(i).off(s, r).on(s, r));
            }),
            a
          );
        })
      );
    },
    322: function (e, t, a) {
      'use strict';
      var n = a(3949);
      n.define(
        'edit',
        (e.exports = function (e, t, a) {
          if (
            ((a = a || {}),
            (n.env('test') || n.env('frame')) &&
              !a.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            l = e(window),
            o = e(document.documentElement),
            d = document.location,
            c = 'hashchange',
            s =
              a.load ||
              function () {
                var t, a, n;
                (i = !0),
                  (window.WebflowEditor = !0),
                  l.off(c, f),
                  (t = function (t) {
                    var a;
                    e.ajax({
                      url: p('https://editor-api.webflow.com/api/editor/view'),
                      data: { siteId: o.attr('data-wf-site') },
                      xhrFields: { withCredentials: !0 },
                      dataType: 'json',
                      crossDomain: !0,
                      success:
                        ((a = t),
                        function (t) {
                          var n, i, l;
                          if (!t) return void console.error('Could not load editor data');
                          (t.thirdPartyCookiesSupported = a),
                            (i =
                              (n = t.scriptPath).indexOf('//') >= 0
                                ? n
                                : p('https://editor-api.webflow.com' + n)),
                            (l = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({ type: 'GET', url: i, dataType: 'script', cache: !0 })
                              .then(l, u);
                        }),
                    });
                  }),
                  ((a = window.document.createElement('iframe')).src =
                    'https://webflow.com/site/third-party-cookie-check.html'),
                  (a.style.display = 'none'),
                  (a.sandbox = 'allow-scripts allow-same-origin'),
                  (n = function (e) {
                    'WF_third_party_cookies_unsupported' === e.data
                      ? (I(a, n), t(!1))
                      : 'WF_third_party_cookies_supported' === e.data && (I(a, n), t(!0));
                  }),
                  (a.onerror = function () {
                    I(a, n), t(!1);
                  }),
                  window.addEventListener('message', n, !1),
                  window.document.body.appendChild(a);
              },
            r = !1;
          try {
            r = localStorage && localStorage.getItem && localStorage.getItem('WebflowEditor');
          } catch (e) {}
          function f() {
            !i && /\?edit/.test(d.hash) && s();
          }
          function u(e, t, a) {
            throw (console.error('Could not load editor script: ' + t), a);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, '$1/');
          }
          function I(e, t) {
            window.removeEventListener('message', t, !1), e.remove();
          }
          return (
            /[?&](update)(?:[=&?]|$)/.test(d.search) || /\?update$/.test(d.href)
              ? (function () {
                  var e = document.documentElement,
                    t = e.getAttribute('data-wf-site'),
                    a = e.getAttribute('data-wf-page'),
                    n = e.getAttribute('data-wf-item-slug'),
                    i = e.getAttribute('data-wf-collection'),
                    l = e.getAttribute('data-wf-domain');
                  if (t && a) {
                    var o = 'pageId=' + a + '&mode=edit';
                    (o += '&simulateRole=editor'),
                      n &&
                        i &&
                        l &&
                        (o +=
                          '&domain=' +
                          encodeURIComponent(l) +
                          '&itemSlug=' +
                          encodeURIComponent(n) +
                          '&collectionId=' +
                          i),
                      (window.location.href =
                        'https://webflow.com/external/designer/' + t + '?' + o);
                  }
                })()
              : r
              ? s()
              : d.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(d.search) || /\?edit$/.test(d.href)) && s()
              : l.on(c, f).triggerHandler(c),
            {}
          );
        })
      );
    },
    2338: function (e, t, a) {
      'use strict';
      a(3949).define(
        'focus-visible',
        (e.exports = function () {
          return {
            ready: function () {
              if ('undefined' != typeof document)
                try {
                  document.querySelector(':focus-visible');
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      a = !1,
                      n = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        'datetime-local': !0,
                      };
                    function l(e) {
                      return (
                        !!e &&
                        e !== document &&
                        'HTML' !== e.nodeName &&
                        'BODY' !== e.nodeName &&
                        'classList' in e &&
                        'contains' in e.classList
                      );
                    }
                    function o(e) {
                      e.getAttribute('data-wf-focus-visible') ||
                        e.setAttribute('data-wf-focus-visible', 'true');
                    }
                    function d() {
                      t = !1;
                    }
                    function c() {
                      document.addEventListener('mousemove', s),
                        document.addEventListener('mousedown', s),
                        document.addEventListener('mouseup', s),
                        document.addEventListener('pointermove', s),
                        document.addEventListener('pointerdown', s),
                        document.addEventListener('pointerup', s),
                        document.addEventListener('touchmove', s),
                        document.addEventListener('touchstart', s),
                        document.addEventListener('touchend', s);
                    }
                    function s(e) {
                      (e.target.nodeName && 'html' === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener('mousemove', s),
                        document.removeEventListener('mousedown', s),
                        document.removeEventListener('mouseup', s),
                        document.removeEventListener('pointermove', s),
                        document.removeEventListener('pointerdown', s),
                        document.removeEventListener('pointerup', s),
                        document.removeEventListener('touchmove', s),
                        document.removeEventListener('touchstart', s),
                        document.removeEventListener('touchend', s));
                    }
                    document.addEventListener(
                      'keydown',
                      function (a) {
                        a.metaKey ||
                          a.altKey ||
                          a.ctrlKey ||
                          (l(e.activeElement) && o(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener('mousedown', d, !0),
                      document.addEventListener('pointerdown', d, !0),
                      document.addEventListener('touchstart', d, !0),
                      document.addEventListener(
                        'visibilitychange',
                        function () {
                          'hidden' === document.visibilityState && (a && (t = !0), c());
                        },
                        !0
                      ),
                      c(),
                      e.addEventListener(
                        'focus',
                        function (e) {
                          if (l(e.target)) {
                            var a, n, d;
                            (t ||
                              ((n = (a = e.target).type),
                              ('INPUT' === (d = a.tagName) && i[n] && !a.readOnly) ||
                                ('TEXTAREA' === d && !a.readOnly) ||
                                a.isContentEditable ||
                                0)) &&
                              o(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        'blur',
                        function (e) {
                          if (l(e.target) && e.target.hasAttribute('data-wf-focus-visible')) {
                            var t;
                            (a = !0),
                              window.clearTimeout(n),
                              (n = window.setTimeout(function () {
                                a = !1;
                              }, 100)),
                              (t = e.target).getAttribute('data-wf-focus-visible') &&
                                t.removeAttribute('data-wf-focus-visible');
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, a) {
      'use strict';
      var n = a(3949);
      n.define(
        'focus',
        (e.exports = function () {
          var e = [],
            t = !1;
          function a(a) {
            t &&
              (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a));
          }
          function i(a) {
            var n, i;
            (i = (n = a.target).tagName),
              ((/^a$/i.test(i) && null != n.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== n.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(n.type) &&
                  !n.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(n.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === n.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, a.target.focus(); e.length > 0; ) {
                    var n = e.pop();
                    n.target.dispatchEvent(new MouseEvent(n.type, n));
                  }
                }, 0));
          }
          return {
            ready: function () {
              'undefined' != typeof document &&
                document.body.hasAttribute('data-wf-focus-within') &&
                n.env.safari &&
                (document.addEventListener('mousedown', i, !0),
                document.addEventListener('mouseup', a, !0),
                document.addEventListener('click', a, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      'use strict';
      var t = window.jQuery,
        a = {},
        n = [],
        i = '.w-ix',
        l = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, n) {
            n.__wf_intro || ((n.__wf_intro = !0), t(n).triggerHandler(a.types.INTRO));
          },
          outro: function (e, n) {
            n.__wf_intro && ((n.__wf_intro = null), t(n).triggerHandler(a.types.OUTRO));
          },
        };
      (a.triggers = {}),
        (a.types = { INTRO: 'w-ix-intro' + i, OUTRO: 'w-ix-outro' + i }),
        (a.init = function () {
          for (var e = n.length, i = 0; i < e; i++) {
            var o = n[i];
            o[0](0, o[1]);
          }
          (n = []), t.extend(a.triggers, l);
        }),
        (a.async = function () {
          for (var e in l) {
            var t = l[e];
            l.hasOwnProperty(e) &&
              (a.triggers[e] = function (e, a) {
                n.push([t, a]);
              });
          }
        }),
        a.async(),
        (e.exports = a);
    },
    5134: function (e, t, a) {
      'use strict';
      var n = a(7199);
      function i(e, t) {
        var a = document.createEvent('CustomEvent');
        a.initCustomEvent(t, !0, !0, null), e.dispatchEvent(a);
      }
      var l = window.jQuery,
        o = {},
        d = '.w-ix';
      (o.triggers = {}),
        (o.types = { INTRO: 'w-ix-intro' + d, OUTRO: 'w-ix-outro' + d }),
        l.extend(o.triggers, {
          reset: function (e, t) {
            n.triggers.reset(e, t);
          },
          intro: function (e, t) {
            n.triggers.intro(e, t), i(t, 'COMPONENT_ACTIVE');
          },
          outro: function (e, t) {
            n.triggers.outro(e, t), i(t, 'COMPONENT_INACTIVE');
          },
        }),
        (e.exports = o);
    },
    941: function (e, t, a) {
      'use strict';
      var n = a(3949),
        i = a(6011);
      i.setEnv(n.env),
        n.define(
          'ix2',
          (e.exports = function () {
            return i;
          })
        );
    },
    3949: function (e, t, a) {
      'use strict';
      var n,
        i,
        l = {},
        o = {},
        d = [],
        c = window.Webflow || [],
        s = window.jQuery,
        r = s(window),
        f = s(document),
        u = s.isFunction,
        p = (l._ = a(5756)),
        I = (l.tram = a(5487) && s.tram),
        E = !1,
        T = !1;
      function y(e) {
        l.env() &&
          (u(e.design) && r.on('__wf_design', e.design),
          u(e.preview) && r.on('__wf_preview', e.preview)),
          u(e.destroy) && r.on('__wf_destroy', e.destroy),
          e.ready &&
            u(e.ready) &&
            (function (e) {
              if (E) return e.ready();
              p.contains(d, e.ready) || d.push(e.ready);
            })(e);
      }
      function m(e) {
        var t;
        u(e.design) && r.off('__wf_design', e.design),
          u(e.preview) && r.off('__wf_preview', e.preview),
          u(e.destroy) && r.off('__wf_destroy', e.destroy),
          e.ready &&
            u(e.ready) &&
            ((t = e),
            (d = p.filter(d, function (e) {
              return e !== t.ready;
            })));
      }
      (I.config.hideBackface = !1),
        (I.config.keepInherited = !0),
        (l.define = function (e, t, a) {
          o[e] && m(o[e]);
          var n = (o[e] = t(s, p, a) || {});
          return y(n), n;
        }),
        (l.require = function (e) {
          return o[e];
        }),
        (l.push = function (e) {
          if (E) {
            u(e) && e();
            return;
          }
          c.push(e);
        }),
        (l.env = function (e) {
          var t = window.__wf_design,
            a = void 0 !== t;
          return e
            ? 'design' === e
              ? a && t
              : 'preview' === e
              ? a && !t
              : 'slug' === e
              ? a && window.__wf_slug
              : 'editor' === e
              ? window.WebflowEditor
              : 'test' === e
              ? window.__wf_test
              : 'frame' === e
              ? window !== window.top
              : void 0
            : a;
        });
      var g = navigator.userAgent.toLowerCase(),
        b = (l.env.touch =
          'ontouchstart' in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (l.env.chrome =
          /chrome/.test(g) &&
          /Google/.test(navigator.vendor) &&
          parseInt(g.match(/chrome\/(\d+)\./)[1], 10)),
        v = (l.env.ios = /(ipod|iphone|ipad)/.test(g));
      (l.env.safari = /safari/.test(g) && !O && !v),
        b &&
          f.on('touchstart mousedown', function (e) {
            n = e.target;
          }),
        (l.validClick = b
          ? function (e) {
              return e === n || s.contains(e, n);
            }
          : function () {
              return !0;
            });
      var L = 'resize.webflow orientationchange.webflow load.webflow',
        _ = 'scroll.webflow ' + L;
      function R(e, t) {
        var a = [],
          n = {};
        return (
          (n.up = p.throttle(function (e) {
            p.each(a, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, n.up),
          (n.on = function (e) {
            'function' == typeof e && (p.contains(a, e) || a.push(e));
          }),
          (n.off = function (e) {
            if (!arguments.length) {
              a = [];
              return;
            }
            a = p.filter(a, function (t) {
              return t !== e;
            });
          }),
          n
        );
      }
      function N(e) {
        u(e) && e();
      }
      function S() {
        i && (i.reject(), r.off('load', i.resolve)),
          (i = new s.Deferred()),
          r.on('load', i.resolve);
      }
      (l.resize = R(r, L)),
        (l.scroll = R(r, _)),
        (l.redraw = R()),
        (l.location = function (e) {
          window.location = e;
        }),
        l.env() && (l.location = function () {}),
        (l.ready = function () {
          (E = !0), T ? ((T = !1), p.each(o, y)) : p.each(d, N), p.each(c, N), l.resize.up();
        }),
        (l.load = function (e) {
          i.then(e);
        }),
        (l.destroy = function (e) {
          (e = e || {}),
            (T = !0),
            r.triggerHandler('__wf_destroy'),
            null != e.domready && (E = e.domready),
            p.each(o, m),
            l.resize.off(),
            l.scroll.off(),
            l.redraw.off(),
            (d = []),
            (c = []),
            'pending' === i.state() && S();
        }),
        s(l.ready),
        S(),
        (e.exports = window.Webflow = l);
    },
    7624: function (e, t, a) {
      'use strict';
      var n = a(3949);
      n.define(
        'links',
        (e.exports = function (e, t) {
          var a,
            i,
            l,
            o = {},
            d = e(window),
            c = n.env(),
            s = window.location,
            r = document.createElement('a'),
            f = 'w--current',
            u = /index\.(html|php)$/,
            p = /\/$/;
          function I() {
            var e = d.scrollTop(),
              a = d.height();
            t.each(i, function (t) {
              if (!t.link.attr('hreflang')) {
                var n = t.link,
                  i = t.sec,
                  l = i.offset().top,
                  o = i.outerHeight(),
                  d = 0.5 * a,
                  c = i.is(':visible') && l + o - d >= e && l + d <= e + a;
                t.active !== c && ((t.active = c), E(n, f, c));
              }
            });
          }
          function E(e, t, a) {
            var n = e.hasClass(t);
            (!a || !n) && (a || n) && (a ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  (a = c && n.env('design')),
                    (l = n.env('slug') || s.pathname || ''),
                    n.scroll.off(I),
                    (i = []);
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute('hreflang')) {
                        var n = (a && t.getAttribute('href-disabled')) || t.getAttribute('href');
                        if (((r.href = n), !(n.indexOf(':') >= 0))) {
                          var o = e(t);
                          if (r.hash.length > 1 && r.host + r.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(r.hash)) return;
                            var d = e(r.hash);
                            d.length && i.push({ link: o, sec: d, active: !1 });
                            return;
                          }
                          '#' !== n &&
                            '' !== n &&
                            E(
                              o,
                              f,
                              (!c && r.href === s.href) || n === l || (u.test(n) && p.test(l))
                            );
                        }
                      }
                    })(t[o]);
                  i.length && (n.scroll.on(I), I());
                }),
            o
          );
        })
      );
    },
    286: function (e, t, a) {
      'use strict';
      var n = a(3949);
      n.define(
        'scroll',
        (e.exports = function (e) {
          var t = { WF_CLICK_EMPTY: 'click.wf-empty-link', WF_CLICK_SCROLL: 'click.wf-scroll' },
            a = window.location,
            i = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            l = e(window),
            o = e(document),
            d = e(document.body),
            c =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            s = n.env('editor') ? '.w-editor-body' : 'body',
            r = 'header, ' + s + ' > .header, ' + s + ' > .w-nav:not([data-no-scroll])',
            f = 'a[href="#"]',
            u = 'a[href*="#"]:not(.w-tab-link):not(' + f + ')',
            p = document.createElement('style');
          p.appendChild(
            document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}')
          );
          var I = /^#[a-zA-Z0-9][\w:.-]*$/;
          let E =
            'function' == typeof window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)');
          function T(e, t) {
            var a;
            switch (t) {
              case 'add':
                (a = e.attr('tabindex'))
                  ? e.attr('data-wf-tabindex-swap', a)
                  : e.attr('tabindex', '-1');
                break;
              case 'remove':
                (a = e.attr('data-wf-tabindex-swap'))
                  ? (e.attr('tabindex', a), e.removeAttr('data-wf-tabindex-swap'))
                  : e.removeAttr('tabindex');
            }
            e.toggleClass('wf-force-outline-none', 'add' === t);
          }
          function y(t) {
            var o = t.currentTarget;
            if (
              !(n.env('design') || (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className)))
            ) {
              var s = I.test(o.hash) && o.host + o.pathname === a.host + a.pathname ? o.hash : '';
              if ('' !== s) {
                var f,
                  u = e(s);
                u.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (f = s),
                  a.hash !== f &&
                    i &&
                    i.pushState &&
                    !(n.env.chrome && 'file:' === a.protocol) &&
                    (i.state && i.state.hash) !== f &&
                    i.pushState({ hash: f }, '', f),
                  window.setTimeout(function () {
                    !(function (t, a) {
                      var n = l.scrollTop(),
                        i = (function (t) {
                          var a = e(r),
                            n = 'fixed' === a.css('position') ? a.outerHeight() : 0,
                            i = t.offset().top - n;
                          if ('mid' === t.data('scroll')) {
                            var o = l.height() - n,
                              d = t.outerHeight();
                            d < o && (i -= Math.round((o - d) / 2));
                          }
                          return i;
                        })(t);
                      if (n !== i) {
                        var o = (function (e, t, a) {
                            if (
                              'none' === document.body.getAttribute('data-wf-scroll-motion') ||
                              E.matches
                            )
                              return 0;
                            var n = 1;
                            return (
                              d.add(e).each(function (e, t) {
                                var a = parseFloat(t.getAttribute('data-scroll-time'));
                                !isNaN(a) && a >= 0 && (n = a);
                              }),
                              (472.143 * Math.log(Math.abs(t - a) + 125) - 2e3) * n
                            );
                          })(t, n, i),
                          s = Date.now(),
                          f = function () {
                            var e,
                              t,
                              l,
                              d,
                              r,
                              u = Date.now() - s;
                            window.scroll(
                              0,
                              ((e = n),
                              (t = i),
                              (l = u) > (d = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((r = l / d) < 0.5
                                      ? 4 * r * r * r
                                      : (r - 1) * (2 * r - 2) * (2 * r - 2) + 1))
                            ),
                              u <= o ? c(f) : 'function' == typeof a && a();
                          };
                        c(f);
                      }
                    })(u, function () {
                      T(u, 'add'), u.get(0).focus({ preventScroll: !0 }), T(u, 'remove');
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: a } = t;
              o.on(a, u, y),
                o.on(e, f, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, a) {
      'use strict';
      a(3949).define(
        'touch',
        (e.exports = function (e) {
          var t = {},
            a = window.getSelection;
          function n(t) {
            var n,
              i,
              l = !1,
              o = !1,
              d = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function c(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((l = !0), t ? ((o = !0), (n = t[0].clientX)) : (n = e.clientX), (i = n));
            }
            function s(t) {
              if (l) {
                if (o && 'mousemove' === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var n,
                  c,
                  s,
                  r,
                  u = t.touches,
                  p = u ? u[0].clientX : t.clientX,
                  I = p - i;
                (i = p),
                  Math.abs(I) > d &&
                    a &&
                    '' === String(a()) &&
                    ((n = 'swipe'),
                    (c = t),
                    (s = { direction: I > 0 ? 'right' : 'left' }),
                    (r = e.Event(n, { originalEvent: c })),
                    e(c.target).trigger(r, s),
                    f());
              }
            }
            function r(e) {
              if (l && ((l = !1), o && 'mouseup' === e.type)) {
                e.preventDefault(), e.stopPropagation(), (o = !1);
                return;
              }
            }
            function f() {
              l = !1;
            }
            t.addEventListener('touchstart', c, !1),
              t.addEventListener('touchmove', s, !1),
              t.addEventListener('touchend', r, !1),
              t.addEventListener('touchcancel', f, !1),
              t.addEventListener('mousedown', c, !1),
              t.addEventListener('mousemove', s, !1),
              t.addEventListener('mouseup', r, !1),
              t.addEventListener('mouseout', f, !1),
              (this.destroy = function () {
                t.removeEventListener('touchstart', c, !1),
                  t.removeEventListener('touchmove', s, !1),
                  t.removeEventListener('touchend', r, !1),
                  t.removeEventListener('touchcancel', f, !1),
                  t.removeEventListener('mousedown', c, !1),
                  t.removeEventListener('mousemove', s, !1),
                  t.removeEventListener('mouseup', r, !1),
                  t.removeEventListener('mouseout', f, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = { bindType: 'click', delegateType: 'click' }),
            (t.init = function (t) {
              return (t = 'string' == typeof t ? e(t).get(0) : t) ? new n(t) : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    9858: function (e, t, a) {
      'use strict';
      var n = a(3949),
        i = a(5134);
      let l = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        },
        o = /^#[a-zA-Z0-9\-_]+$/;
      n.define(
        'dropdown',
        (e.exports = function (e, t) {
          var a,
            d,
            c = t.debounce,
            s = {},
            r = n.env(),
            f = !1,
            u = n.env.touch,
            p = '.w-dropdown',
            I = 'w--open',
            E = i.triggers,
            T = 'focusout' + p,
            y = 'keydown' + p,
            m = 'mouseenter' + p,
            g = 'mousemove' + p,
            b = 'mouseleave' + p,
            O = (u ? 'click' : 'mouseup') + p,
            v = 'w-close' + p,
            L = 'setting' + p,
            _ = e(document);
          function R() {
            (a = r && n.env('design')), (d = _.find(p)).each(N);
          }
          function N(t, i) {
            var d,
              s,
              f,
              u,
              E,
              g,
              b,
              R,
              N,
              k,
              V = e(i),
              U = e.data(i, p);
            U || (U = e.data(i, p, { open: !1, el: V, config: {}, selectedIdx: -1 })),
              (U.toggle = U.el.children('.w-dropdown-toggle')),
              (U.list = U.el.children('.w-dropdown-list')),
              (U.links = U.list.find('a:not(.w-dropdown .w-dropdown a)')),
              (U.complete =
                ((d = U),
                function () {
                  d.list.removeClass(I),
                    d.toggle.removeClass(I),
                    d.manageZ && d.el.css('z-index', '');
                })),
              (U.mouseLeave =
                ((s = U),
                function () {
                  (s.hovering = !1), s.links.is(':focus') || h(s);
                })),
              (U.mouseUpOutside =
                ((f = U).mouseUpOutside && _.off(O, f.mouseUpOutside),
                c(function (t) {
                  if (f.open) {
                    var a = e(t.target);
                    if (!a.closest('.w-dropdown-toggle').length) {
                      var i = -1 === e.inArray(f.el[0], a.parents(p)),
                        l = n.env('editor');
                      if (i) {
                        if (l) {
                          var o = 1 === a.parents().length && 1 === a.parents('svg').length,
                            d = a.parents('.w-editor-bem-EditorHoverControls').length;
                          if (o || d) return;
                        }
                        h(f);
                      }
                    }
                  }
                }))),
              (U.mouseMoveOutside =
                ((u = U),
                c(function (t) {
                  if (u.open) {
                    var a = e(t.target);
                    if (-1 === e.inArray(u.el[0], a.parents(p))) {
                      var n = a.parents('.w-editor-bem-EditorHoverControls').length,
                        i = a.parents('.w-editor-bem-RTToolbar').length,
                        l = e('.w-editor-bem-EditorOverlay'),
                        o =
                          l.find('.w-editor-edit-outline').length ||
                          l.find('.w-editor-bem-RTToolbar').length;
                      if (n || i || o) return;
                      (u.hovering = !1), h(u);
                    }
                  }
                }))),
              S(U);
            var w = U.toggle.attr('id'),
              x = U.list.attr('id');
            w || (w = 'w-dropdown-toggle-' + t),
              x || (x = 'w-dropdown-list-' + t),
              U.toggle.attr('id', w),
              U.toggle.attr('aria-controls', x),
              U.toggle.attr('aria-haspopup', 'menu'),
              U.toggle.attr('aria-expanded', 'false'),
              U.toggle.find('.w-icon-dropdown-toggle').attr('aria-hidden', 'true'),
              'BUTTON' !== U.toggle.prop('tagName') &&
                (U.toggle.attr('role', 'button'),
                U.toggle.attr('tabindex') || U.toggle.attr('tabindex', '0')),
              U.list.attr('id', x),
              U.list.attr('aria-labelledby', w),
              U.links.each(function (e, t) {
                t.hasAttribute('tabindex') || t.setAttribute('tabindex', '0'),
                  o.test(t.hash) && t.addEventListener('click', h.bind(null, U));
              }),
              U.el.off(p),
              U.toggle.off(p),
              U.nav && U.nav.off(p);
            var B = A(U, !0);
            a &&
              U.el.on(
                L,
                ((E = U),
                function (e, t) {
                  (t = t || {}),
                    S(E),
                    !0 === t.open && C(E),
                    !1 === t.open && h(E, { immediate: !0 });
                })
              ),
              a ||
                (r && ((U.hovering = !1), h(U)),
                U.config.hover &&
                  U.toggle.on(
                    m,
                    ((g = U),
                    function () {
                      (g.hovering = !0), C(g);
                    })
                  ),
                U.el.on(v, B),
                U.el.on(
                  y,
                  ((b = U),
                  function (e) {
                    if (!a && b.open)
                      switch (
                        ((b.selectedIdx = b.links.index(document.activeElement)), e.keyCode)
                      ) {
                        case l.HOME:
                          if (!b.open) return;
                          return (b.selectedIdx = 0), M(b), e.preventDefault();
                        case l.END:
                          if (!b.open) return;
                          return (b.selectedIdx = b.links.length - 1), M(b), e.preventDefault();
                        case l.ESCAPE:
                          return h(b), b.toggle.focus(), e.stopPropagation();
                        case l.ARROW_RIGHT:
                        case l.ARROW_DOWN:
                          return (
                            (b.selectedIdx = Math.min(b.links.length - 1, b.selectedIdx + 1)),
                            M(b),
                            e.preventDefault()
                          );
                        case l.ARROW_LEFT:
                        case l.ARROW_UP:
                          return (
                            (b.selectedIdx = Math.max(-1, b.selectedIdx - 1)),
                            M(b),
                            e.preventDefault()
                          );
                      }
                  })
                ),
                U.el.on(
                  T,
                  ((R = U),
                  c(function (e) {
                    var { relatedTarget: t, target: a } = e,
                      n = R.el[0];
                    return n.contains(t) || n.contains(a) || h(R), e.stopPropagation();
                  }))
                ),
                U.toggle.on(O, B),
                U.toggle.on(
                  y,
                  ((k = A((N = U), !0)),
                  function (e) {
                    if (!a) {
                      if (!N.open)
                        switch (e.keyCode) {
                          case l.ARROW_UP:
                          case l.ARROW_DOWN:
                            return e.stopPropagation();
                        }
                      switch (e.keyCode) {
                        case l.SPACE:
                        case l.ENTER:
                          return k(), e.stopPropagation(), e.preventDefault();
                      }
                    }
                  })
                ),
                (U.nav = U.el.closest('.w-nav')),
                U.nav.on(v, B));
          }
          function S(e) {
            var t = Number(e.el.css('z-index'));
            (e.manageZ = 900 === t || 901 === t),
              (e.config = {
                hover: 'true' === e.el.attr('data-hover') && !u,
                delay: e.el.attr('data-delay'),
              });
          }
          function A(e, t) {
            return c(function (a) {
              if (e.open || (a && 'w-close' === a.type)) return h(e, { forceClose: t });
              C(e);
            });
          }
          function C(t) {
            if (!t.open) {
              (i = t.el[0]),
                d.each(function (t, a) {
                  var n = e(a);
                  n.is(i) || n.has(i).length || n.triggerHandler(v);
                }),
                (t.open = !0),
                t.list.addClass(I),
                t.toggle.addClass(I),
                t.toggle.attr('aria-expanded', 'true'),
                E.intro(0, t.el[0]),
                n.redraw.up(),
                t.manageZ && t.el.css('z-index', 901);
              var i,
                l = n.env('editor');
              a || _.on(O, t.mouseUpOutside),
                t.hovering && !l && t.el.on(b, t.mouseLeave),
                t.hovering && l && _.on(g, t.mouseMoveOutside),
                window.clearTimeout(t.delayId);
            }
          }
          function h(e, { immediate: t, forceClose: a } = {}) {
            if (e.open && (!e.config.hover || !e.hovering || a)) {
              e.toggle.attr('aria-expanded', 'false'), (e.open = !1);
              var n = e.config;
              if (
                (E.outro(0, e.el[0]),
                _.off(O, e.mouseUpOutside),
                _.off(g, e.mouseMoveOutside),
                e.el.off(b, e.mouseLeave),
                window.clearTimeout(e.delayId),
                !n.delay || t)
              )
                return e.complete();
              e.delayId = window.setTimeout(e.complete, n.delay);
            }
          }
          function M(e) {
            e.links[e.selectedIdx] && e.links[e.selectedIdx].focus();
          }
          return (
            (s.ready = R),
            (s.design = function () {
              f &&
                _.find(p).each(function (t, a) {
                  e(a).triggerHandler(v);
                }),
                (f = !1),
                R();
            }),
            (s.preview = function () {
              (f = !0), R();
            }),
            s
          );
        })
      );
    },
    6524: function (e, t) {
      'use strict';
      function a(e, t, a, n, i, l, o, d, c, s, r, f, u) {
        return function (p) {
          e(p);
          var I = p.form,
            E = {
              name: I.attr('data-name') || I.attr('name') || 'Untitled Form',
              pageId: I.attr('data-wf-page-id') || '',
              elementId: I.attr('data-wf-element-id') || '',
              domain: f('html').attr('data-wf-domain') || null,
              source: t.href,
              test: a.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(I.html()),
              trackingCookies: n(),
            };
          let T = I.attr('data-wf-flow');
          T && (E.wfFlow = T);
          let y = I.attr('data-wf-locale-id');
          y && (E.localeId = y), i(p);
          var m = l(I, E.fields);
          return m
            ? o(m)
            : ((E.fileUploads = d(I)), c(p), s)
            ? void f
                .ajax({ url: u, type: 'POST', data: E, dataType: 'json', crossDomain: !0 })
                .done(function (e) {
                  e && 200 === e.code && (p.success = !0), r(p);
                })
                .fail(function () {
                  r(p);
                })
            : void r(p);
        };
      }
      Object.defineProperty(t, 'default', {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    },
    7527: function (e, t, a) {
      'use strict';
      var n = a(3949);
      let i = (e, t, a, n) => {
        let i = document.createElement('div');
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (e) {
              a(e);
            },
            'error-callback': function () {
              n();
            },
          });
      };
      n.define(
        'forms',
        (e.exports = function (e, t) {
          let l,
            o = 'TURNSTILE_LOADED';
          var d,
            c,
            s,
            r,
            f,
            u = {},
            p = e(document),
            I = window.location,
            E = window.XDomainRequest && !window.atob,
            T = '.w-form',
            y = /e(-)?mail/i,
            m = /^\S+@\S+$/,
            g = window.alert,
            b = n.env();
          let O = p.find('[data-turnstile-sitekey]').data('turnstile-sitekey');
          var v = /list-manage[1-9]?.com/i,
            L = t.debounce(function () {
              console.warn(
                'Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.'
              );
            }, 100);
          function _(t, l) {
            var d = e(l),
              s = e.data(l, T);
            s || (s = e.data(l, T, { form: d })), R(s);
            var u = d.closest('div.w-form');
            (s.done = u.find('> .w-form-done')),
              (s.fail = u.find('> .w-form-fail')),
              (s.fileUploads = u.find('.w-file-upload')),
              s.fileUploads.each(function (t) {
                !(function (t, a) {
                  if (a.fileUploads && a.fileUploads[t]) {
                    var n,
                      i = e(a.fileUploads[t]),
                      l = i.find('> .w-file-upload-default'),
                      o = i.find('> .w-file-upload-uploading'),
                      d = i.find('> .w-file-upload-success'),
                      c = i.find('> .w-file-upload-error'),
                      s = l.find('.w-file-upload-input'),
                      r = l.find('.w-file-upload-label'),
                      u = r.children(),
                      p = c.find('.w-file-upload-error-msg'),
                      I = d.find('.w-file-upload-file'),
                      E = d.find('.w-file-remove-link'),
                      T = I.find('.w-file-upload-file-name'),
                      y = p.attr('data-w-size-error'),
                      m = p.attr('data-w-type-error'),
                      g = p.attr('data-w-generic-error');
                    if (
                      (b ||
                        r.on('click keydown', function (e) {
                          ('keydown' !== e.type || 13 === e.which || 32 === e.which) &&
                            (e.preventDefault(), s.click());
                        }),
                      r.find('.w-icon-file-upload-icon').attr('aria-hidden', 'true'),
                      E.find('.w-icon-file-upload-remove').attr('aria-hidden', 'true'),
                      b)
                    )
                      s.on('click', function (e) {
                        e.preventDefault();
                      }),
                        r.on('click', function (e) {
                          e.preventDefault();
                        }),
                        u.on('click', function (e) {
                          e.preventDefault();
                        });
                    else {
                      E.on('click keydown', function (e) {
                        if ('keydown' === e.type) {
                          if (13 !== e.which && 32 !== e.which) return;
                          e.preventDefault();
                        }
                        s.removeAttr('data-value'),
                          s.val(''),
                          T.html(''),
                          l.toggle(!0),
                          d.toggle(!1),
                          r.focus();
                      }),
                        s.on('change', function (i) {
                          var d, s, r;
                          (n = i.target && i.target.files && i.target.files[0]) &&
                            (l.toggle(!1),
                            c.toggle(!1),
                            o.toggle(!0),
                            o.focus(),
                            T.text(n.name),
                            S() || N(a),
                            (a.fileUploads[t].uploading = !0),
                            (d = n),
                            (s = L),
                            (r = new URLSearchParams({ name: d.name, size: d.size })),
                            e
                              .ajax({ type: 'GET', url: `${f}?${r}`, crossDomain: !0 })
                              .done(function (e) {
                                s(null, e);
                              })
                              .fail(function (e) {
                                s(e);
                              }));
                        });
                      var O = r.outerHeight();
                      s.height(O), s.width(1);
                    }
                  }
                  function v(e) {
                    var n = e.responseJSON && e.responseJSON.msg,
                      i = g;
                    'string' == typeof n && 0 === n.indexOf('InvalidFileTypeError')
                      ? (i = m)
                      : 'string' == typeof n && 0 === n.indexOf('MaxFileSizeError') && (i = y),
                      p.text(i),
                      s.removeAttr('data-value'),
                      s.val(''),
                      o.toggle(!1),
                      l.toggle(!0),
                      c.toggle(!0),
                      c.focus(),
                      (a.fileUploads[t].uploading = !1),
                      S() || R(a);
                  }
                  function L(t, a) {
                    if (t) return v(t);
                    var i = a.fileName,
                      l = a.postData,
                      o = a.fileId,
                      d = a.s3Url;
                    s.attr('data-value', o),
                      (function (t, a, n, i, l) {
                        var o = new FormData();
                        for (var d in a) o.append(d, a[d]);
                        o.append('file', n, i),
                          e
                            .ajax({
                              type: 'POST',
                              url: t,
                              data: o,
                              processData: !1,
                              contentType: !1,
                            })
                            .done(function () {
                              l(null);
                            })
                            .fail(function (e) {
                              l(e);
                            });
                      })(d, l, n, i, _);
                  }
                  function _(e) {
                    if (e) return v(e);
                    o.toggle(!1),
                      d.css('display', 'inline-block'),
                      d.focus(),
                      (a.fileUploads[t].uploading = !1),
                      S() || R(a);
                  }
                  function S() {
                    return ((a.fileUploads && a.fileUploads.toArray()) || []).some(function (e) {
                      return e.uploading;
                    });
                  }
                })(t, s);
              }),
              O &&
                ((function (e) {
                  let t = e.btn || e.form.find(':input[type="submit"]');
                  e.btn || (e.btn = t), t.prop('disabled', !0), t.addClass('w-form-loading');
                })(s),
                S(d, !0),
                p.on('undefined' != typeof turnstile ? 'ready' : o, function () {
                  i(
                    O,
                    l,
                    (e) => {
                      (s.turnstileToken = e), R(s), S(d, !1);
                    },
                    () => {
                      R(s), s.btn && s.btn.prop('disabled', !0), S(d, !1);
                    }
                  );
                }));
            var E = s.form.attr('aria-label') || s.form.attr('data-name') || 'Form';
            s.done.attr('aria-label') || s.form.attr('aria-label', E),
              s.done.attr('tabindex', '-1'),
              s.done.attr('role', 'region'),
              s.done.attr('aria-label') || s.done.attr('aria-label', E + ' success'),
              s.fail.attr('tabindex', '-1'),
              s.fail.attr('role', 'region'),
              s.fail.attr('aria-label') || s.fail.attr('aria-label', E + ' failure');
            var y = (s.action = d.attr('action'));
            if (((s.handler = null), (s.redirect = d.attr('data-redirect')), v.test(y))) {
              s.handler = k;
              return;
            }
            if (!y) {
              if (c) {
                s.handler = (0, a(6524).default)(R, I, n, M, U, A, g, C, N, c, V, e, r);
                return;
              }
              L();
            }
          }
          function R(e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'));
            (e.wait = e.btn.attr('data-wait') || null), (e.success = !1);
            let a = !!(O && !e.turnstileToken);
            t.prop('disabled', a), t.removeClass('w-form-loading'), e.label && t.val(e.label);
          }
          function N(e) {
            var t = e.btn,
              a = e.wait;
            t.prop('disabled', !0), a && ((e.label = t.val()), t.val(a));
          }
          function S(e, t) {
            let a = e.closest('.w-form');
            t ? a.addClass('w-form-loading') : a.removeClass('w-form-loading');
          }
          function A(t, a) {
            var n = null;
            return (
              (a = a || {}),
              t
                .find(':input:not([type="submit"]):not([type="file"]):not([type="button"])')
                .each(function (i, l) {
                  var o,
                    d,
                    c,
                    s,
                    r,
                    f = e(l),
                    u = f.attr('type'),
                    p = f.attr('data-name') || f.attr('name') || 'Field ' + (i + 1);
                  p = encodeURIComponent(p);
                  var I = f.val();
                  if ('checkbox' === u) I = f.is(':checked');
                  else if ('radio' === u) {
                    if (null === a[p] || 'string' == typeof a[p]) return;
                    I = t.find('input[name="' + f.attr('name') + '"]:checked').val() || null;
                  }
                  'string' == typeof I && (I = e.trim(I)),
                    (a[p] = I),
                    (n =
                      n ||
                      ((o = f),
                      (d = u),
                      (c = p),
                      (s = I),
                      (r = null),
                      'password' === d
                        ? (r = 'Passwords cannot be submitted.')
                        : o.attr('required')
                        ? s
                          ? y.test(o.attr('type')) &&
                            !m.test(s) &&
                            (r = 'Please enter a valid email address for: ' + c)
                          : (r = 'Please fill out the required field: ' + c)
                        : 'g-recaptcha-response' !== c ||
                          s ||
                          (r = "Please confirm you're not a robot."),
                      r));
                }),
              n
            );
          }
          function C(t) {
            var a = {};
            return (
              t.find(':input[type="file"]').each(function (t, n) {
                var i = e(n),
                  l = i.attr('data-name') || i.attr('name') || 'File ' + (t + 1),
                  o = i.attr('data-value');
                'string' == typeof o && (o = e.trim(o)), (a[l] = o);
              }),
              a
            );
          }
          u.ready =
            u.design =
            u.preview =
              function () {
                O &&
                  (((l = document.createElement('script')).src =
                    'https://challenges.cloudflare.com/turnstile/v0/api.js'),
                  document.head.appendChild(l),
                  (l.onload = () => {
                    p.trigger(o);
                  })),
                  (r = 'https://webflow.com/api/v1/form/' + (c = e('html').attr('data-wf-site'))),
                  E &&
                    r.indexOf('https://webflow.com') >= 0 &&
                    (r = r.replace('https://webflow.com', 'https://formdata.webflow.com')),
                  (f = `${r}/signFile`),
                  (d = e(T + ' form')).length && d.each(_),
                  (!b || n.env('preview')) &&
                    !s &&
                    (function () {
                      (s = !0),
                        p.on('submit', T + ' form', function (t) {
                          var a = e.data(this, T);
                          a.handler && ((a.evt = t), a.handler(a));
                        });
                      let t = '.w-checkbox-input',
                        a = '.w-radio-input',
                        n = 'w--redirected-checked',
                        i = 'w--redirected-focus',
                        l = 'w--redirected-focus-visible',
                        o = [
                          ['checkbox', t],
                          ['radio', a],
                        ];
                      p.on('change', T + ' form input[type="checkbox"]:not(' + t + ')', (a) => {
                        e(a.target).siblings(t).toggleClass(n);
                      }),
                        p.on('change', T + ' form input[type="radio"]', (i) => {
                          e(`input[name="${i.target.name}"]:not(${t})`).map((t, i) =>
                            e(i).siblings(a).removeClass(n)
                          );
                          let l = e(i.target);
                          l.hasClass('w-radio-input') || l.siblings(a).addClass(n);
                        }),
                        o.forEach(([t, a]) => {
                          p.on('focus', T + ` form input[type="${t}"]:not(` + a + ')', (t) => {
                            e(t.target).siblings(a).addClass(i),
                              e(t.target)
                                .filter(':focus-visible, [data-wf-focus-visible]')
                                .siblings(a)
                                .addClass(l);
                          }),
                            p.on('blur', T + ` form input[type="${t}"]:not(` + a + ')', (t) => {
                              e(t.target).siblings(a).removeClass(`${i} ${l}`);
                            });
                        });
                    })();
              };
          let h = { _mkto_trk: 'marketo' };
          function M() {
            return document.cookie.split('; ').reduce(function (e, t) {
              let a = t.split('='),
                n = a[0];
              if (n in h) {
                let t = h[n],
                  i = a.slice(1).join('=');
                e[t] = i;
              }
              return e;
            }, {});
          }
          function k(a) {
            R(a);
            var n,
              i = a.form,
              l = {};
            if (/^https/.test(I.href) && !/^https/.test(a.action))
              return void i.attr('method', 'post');
            U(a);
            var o = A(i, l);
            if (o) return g(o);
            N(a),
              t.each(l, function (e, t) {
                y.test(t) && (l.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (n = e),
                  /^(first[ _-]?name)$/i.test(t) && (l.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (l.LNAME = e);
              }),
              n && !l.FNAME && ((l.FNAME = (n = n.split(' '))[0]), (l.LNAME = l.LNAME || n[1]));
            var d = a.action.replace('/post?', '/post-json?') + '&c=?',
              c = d.indexOf('u=') + 2;
            c = d.substring(c, d.indexOf('&', c));
            var s = d.indexOf('id=') + 3;
            (l['b_' + c + '_' + (s = d.substring(s, d.indexOf('&', s)))] = ''),
              e
                .ajax({ url: d, data: l, dataType: 'jsonp' })
                .done(function (e) {
                  (a.success = 'success' === e.result || /already/.test(e.msg)),
                    a.success || console.info('MailChimp error: ' + e.msg),
                    V(a);
                })
                .fail(function () {
                  V(a);
                });
          }
          function V(e) {
            var t = e.form,
              a = e.redirect,
              i = e.success;
            if (i && a) return void n.location(a);
            e.done.toggle(i),
              e.fail.toggle(!i),
              i ? e.done.focus() : e.fail.focus(),
              t.toggle(!i),
              R(e);
          }
          function U(e) {
            e.evt && e.evt.preventDefault(), (e.evt = null);
          }
          return u;
        })
      );
    },
    1655: function (e, t, a) {
      'use strict';
      var n = a(3949),
        i = a(5134);
      let l = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      n.define(
        'navbar',
        (e.exports = function (e, t) {
          var a,
            o,
            d,
            c,
            s = {},
            r = e.tram,
            f = e(window),
            u = e(document),
            p = t.debounce,
            I = n.env(),
            E = '.w-nav',
            T = 'w--open',
            y = 'w--nav-dropdown-open',
            m = 'w--nav-dropdown-toggle-open',
            g = 'w--nav-dropdown-list-open',
            b = 'w--nav-link-open',
            O = i.triggers,
            v = e();
          function L() {
            n.resize.off(_);
          }
          function _() {
            o.each(U);
          }
          function R(a, n) {
            var i,
              o,
              s,
              r,
              p,
              I = e(n),
              T = e.data(n, E);
            T || (T = e.data(n, E, { open: !1, el: I, config: {}, selectedIdx: -1 })),
              (T.menu = I.find('.w-nav-menu')),
              (T.links = T.menu.find('.w-nav-link')),
              (T.dropdowns = T.menu.find('.w-dropdown')),
              (T.dropdownToggle = T.menu.find('.w-dropdown-toggle')),
              (T.dropdownList = T.menu.find('.w-dropdown-list')),
              (T.button = I.find('.w-nav-button')),
              (T.container = I.find('.w-container')),
              (T.overlayContainerId = 'w-nav-overlay-' + a),
              (T.outside =
                ((i = T).outside && u.off('click' + E, i.outside),
                function (t) {
                  var a = e(t.target);
                  (c && a.closest('.w-editor-bem-EditorOverlay').length) || V(i, a);
                }));
            var y = I.find('.w-nav-brand');
            y &&
              '/' === y.attr('href') &&
              null == y.attr('aria-label') &&
              y.attr('aria-label', 'home'),
              T.button.attr('style', '-webkit-user-select: text;'),
              null == T.button.attr('aria-label') && T.button.attr('aria-label', 'menu'),
              T.button.attr('role', 'button'),
              T.button.attr('tabindex', '0'),
              T.button.attr('aria-controls', T.overlayContainerId),
              T.button.attr('aria-haspopup', 'menu'),
              T.button.attr('aria-expanded', 'false'),
              T.el.off(E),
              T.button.off(E),
              T.menu.off(E),
              A(T),
              d
                ? (S(T),
                  T.el.on(
                    'setting' + E,
                    ((o = T),
                    function (e, a) {
                      a = a || {};
                      var n = f.width();
                      A(o),
                        !0 === a.open && G(o, !0),
                        !1 === a.open && D(o, !0),
                        o.open &&
                          t.defer(function () {
                            n !== f.width() && h(o);
                          });
                    })
                  ))
                : ((s = T).overlay ||
                    ((s.overlay = e('<div class="w-nav-overlay" data-wf-ignore />').appendTo(s.el)),
                    s.overlay.attr('id', s.overlayContainerId),
                    (s.parent = s.menu.parent()),
                    D(s, !0)),
                  T.button.on('click' + E, M(T)),
                  T.menu.on('click' + E, 'a', k(T)),
                  T.button.on(
                    'keydown' + E,
                    ((r = T),
                    function (e) {
                      switch (e.keyCode) {
                        case l.SPACE:
                        case l.ENTER:
                          return M(r)(), e.preventDefault(), e.stopPropagation();
                        case l.ESCAPE:
                          return D(r), e.preventDefault(), e.stopPropagation();
                        case l.ARROW_RIGHT:
                        case l.ARROW_DOWN:
                        case l.HOME:
                        case l.END:
                          if (!r.open) return e.preventDefault(), e.stopPropagation();
                          return (
                            e.keyCode === l.END
                              ? (r.selectedIdx = r.links.length - 1)
                              : (r.selectedIdx = 0),
                            C(r),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    })
                  ),
                  T.el.on(
                    'keydown' + E,
                    ((p = T),
                    function (e) {
                      if (p.open)
                        switch (
                          ((p.selectedIdx = p.links.index(document.activeElement)), e.keyCode)
                        ) {
                          case l.HOME:
                          case l.END:
                            return (
                              e.keyCode === l.END
                                ? (p.selectedIdx = p.links.length - 1)
                                : (p.selectedIdx = 0),
                              C(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case l.ESCAPE:
                            return D(p), p.button.focus(), e.preventDefault(), e.stopPropagation();
                          case l.ARROW_LEFT:
                          case l.ARROW_UP:
                            return (
                              (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                              C(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case l.ARROW_RIGHT:
                          case l.ARROW_DOWN:
                            return (
                              (p.selectedIdx = Math.min(p.links.length - 1, p.selectedIdx + 1)),
                              C(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    })
                  )),
              U(a, n);
          }
          function N(t, a) {
            var n = e.data(a, E);
            n && (S(n), e.removeData(a, E));
          }
          function S(e) {
            e.overlay && (D(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function A(e) {
            var a = {},
              n = e.config || {},
              i = (a.animation = e.el.attr('data-animation') || 'default');
            (a.animOver = /^over/.test(i)),
              (a.animDirect = /left$/.test(i) ? -1 : 1),
              n.animation !== i && e.open && t.defer(h, e),
              (a.easing = e.el.attr('data-easing') || 'ease'),
              (a.easing2 = e.el.attr('data-easing2') || 'ease');
            var l = e.el.attr('data-duration');
            (a.duration = null != l ? Number(l) : 400),
              (a.docHeight = e.el.attr('data-doc-height')),
              (e.config = a);
          }
          function C(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), k(t);
            }
          }
          function h(e) {
            e.open && (D(e, !0), G(e, !0));
          }
          function M(e) {
            return p(function () {
              e.open ? D(e) : G(e);
            });
          }
          function k(t) {
            return function (a) {
              var i = e(this).attr('href');
              if (!n.validClick(a.currentTarget)) return void a.preventDefault();
              i && 0 === i.indexOf('#') && t.open && D(t);
            };
          }
          (s.ready =
            s.design =
            s.preview =
              function () {
                (d = I && n.env('design')),
                  (c = n.env('editor')),
                  (a = e(document.body)),
                  (o = u.find(E)).length && (o.each(R), L(), n.resize.on(_));
              }),
            (s.destroy = function () {
              (v = e()), L(), o && o.length && o.each(N);
            });
          var V = p(function (e, t) {
            if (e.open) {
              var a = t.closest('.w-nav-menu');
              e.menu.is(a) || D(e);
            }
          });
          function U(t, a) {
            var n = e.data(a, E),
              i = (n.collapsed = 'none' !== n.button.css('display'));
            if ((!n.open || i || d || D(n, !0), n.container.length)) {
              var l,
                o =
                  ('none' === (l = n.container.css(w)) && (l = ''),
                  function (t, a) {
                    (a = e(a)).css(w, ''), 'none' === a.css(w) && a.css(w, l);
                  });
              n.links.each(o), n.dropdowns.each(o);
            }
            n.open && F(n);
          }
          var w = 'max-width';
          function x(e, t) {
            t.setAttribute('data-nav-menu-open', '');
          }
          function B(e, t) {
            t.removeAttribute('data-nav-menu-open');
          }
          function G(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(x),
                e.links.addClass(b),
                e.dropdowns.addClass(y),
                e.dropdownToggle.addClass(m),
                e.dropdownList.addClass(g),
                e.button.addClass(T);
              var a = e.config;
              ('none' === a.animation || !r.support.transform || a.duration <= 0) && (t = !0);
              var i = F(e),
                l = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                c = e.el.height(),
                s = e.el[0];
              if ((U(0, s), O.intro(0, s), n.redraw.up(), d || u.on('click' + E, e.outside), t))
                return void p();
              var f = 'transform ' + a.duration + 'ms ' + a.easing;
              if (
                (e.overlay && ((v = e.menu.prev()), e.overlay.show().append(e.menu)), a.animOver)
              ) {
                r(e.menu)
                  .add(f)
                  .set({ x: a.animDirect * o, height: i })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(o);
                return;
              }
              r(e.menu)
                .add(f)
                .set({ y: -(c + l) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr('aria-expanded', 'true');
            }
          }
          function F(e) {
            var t = e.config,
              n = t.docHeight ? u.height() : a.height();
            return (
              t.animOver
                ? e.menu.height(n)
                : 'fixed' !== e.el.css('position') && (n -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(n),
              n
            );
          }
          function D(e, t) {
            if (e.open) {
              (e.open = !1), e.button.removeClass(T);
              var a = e.config;
              if (
                (('none' === a.animation || !r.support.transform || a.duration <= 0) && (t = !0),
                O.outro(0, e.el[0]),
                u.off('click' + E, e.outside),
                t)
              ) {
                r(e.menu).stop(), d();
                return;
              }
              var n = 'transform ' + a.duration + 'ms ' + a.easing2,
                i = e.menu.outerHeight(!0),
                l = e.menu.outerWidth(!0),
                o = e.el.height();
              if (a.animOver)
                return void r(e.menu)
                  .add(n)
                  .start({ x: l * a.animDirect })
                  .then(d);
              r(e.menu)
                .add(n)
                .start({ y: -(o + i) })
                .then(d);
            }
            function d() {
              e.menu.height(''),
                r(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(B),
                e.links.removeClass(b),
                e.dropdowns.removeClass(y),
                e.dropdownToggle.removeClass(m),
                e.dropdownList.removeClass(g),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length ? e.menu.insertAfter(v) : e.menu.prependTo(e.parent),
                  e.overlay.attr('style', '').hide()),
                e.el.triggerHandler('w-close'),
                e.button.attr('aria-expanded', 'false');
            }
          }
          return s;
        })
      );
    },
    4345: function (e, t, a) {
      'use strict';
      var n = a(3949),
        i = a(5134);
      let l = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        },
        o =
          'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
      n.define(
        'slider',
        (e.exports = function (e, t) {
          var a,
            d,
            c,
            s = {},
            r = e.tram,
            f = e(document),
            u = n.env(),
            p = '.w-slider',
            I = 'w-slider-force-show',
            E = i.triggers,
            T = !1;
          function y() {
            (a = f.find(p)).length &&
              (a.each(b), c || (m(), n.resize.on(g), n.redraw.on(s.redraw)));
          }
          function m() {
            n.resize.off(g), n.redraw.off(s.redraw);
          }
          function g() {
            a.filter(':visible').each(k);
          }
          function b(t, a) {
            var n = e(a),
              i = e.data(a, p);
            i ||
              (i = e.data(a, p, {
                index: 0,
                depth: 1,
                hasFocus: { keyboard: !1, mouse: !1 },
                el: n,
                config: {},
              })),
              (i.mask = n.children('.w-slider-mask')),
              (i.left = n.children('.w-slider-arrow-left')),
              (i.right = n.children('.w-slider-arrow-right')),
              (i.nav = n.children('.w-slider-nav')),
              (i.slides = i.mask.children('.w-slide')),
              i.slides.each(E.reset),
              T && (i.maskWidth = 0),
              void 0 === n.attr('role') && n.attr('role', 'region'),
              void 0 === n.attr('aria-label') && n.attr('aria-label', 'carousel');
            var l = i.mask.attr('id');
            if (
              (l || ((l = 'w-slider-mask-' + t), i.mask.attr('id', l)),
              d ||
                i.ariaLiveLabel ||
                (i.ariaLiveLabel = e(
                  '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />'
                ).appendTo(i.mask)),
              i.left.attr('role', 'button'),
              i.left.attr('tabindex', '0'),
              i.left.attr('aria-controls', l),
              void 0 === i.left.attr('aria-label') && i.left.attr('aria-label', 'previous slide'),
              i.right.attr('role', 'button'),
              i.right.attr('tabindex', '0'),
              i.right.attr('aria-controls', l),
              void 0 === i.right.attr('aria-label') && i.right.attr('aria-label', 'next slide'),
              !r.support.transform)
            ) {
              i.left.hide(), i.right.hide(), i.nav.hide(), (c = !0);
              return;
            }
            i.el.off(p),
              i.left.off(p),
              i.right.off(p),
              i.nav.off(p),
              O(i),
              d
                ? (i.el.on('setting' + p, C(i)), A(i), (i.hasTimer = !1))
                : (i.el.on('swipe' + p, C(i)),
                  i.left.on('click' + p, R(i)),
                  i.right.on('click' + p, N(i)),
                  i.left.on('keydown' + p, _(i, R)),
                  i.right.on('keydown' + p, _(i, N)),
                  i.nav.on('keydown' + p, '> div', C(i)),
                  i.config.autoplay && !i.hasTimer && ((i.hasTimer = !0), (i.timerCount = 1), S(i)),
                  i.el.on('mouseenter' + p, L(i, !0, 'mouse')),
                  i.el.on('focusin' + p, L(i, !0, 'keyboard')),
                  i.el.on('mouseleave' + p, L(i, !1, 'mouse')),
                  i.el.on('focusout' + p, L(i, !1, 'keyboard'))),
              i.nav.on('click' + p, '> div', C(i)),
              u ||
                i.mask
                  .contents()
                  .filter(function () {
                    return 3 === this.nodeType;
                  })
                  .remove();
            var o = n.filter(':hidden');
            o.addClass(I);
            var s = n.parents(':hidden');
            s.addClass(I), T || k(t, a), o.removeClass(I), s.removeClass(I);
          }
          function O(e) {
            var t = {};
            (t.crossOver = 0),
              (t.animation = e.el.attr('data-animation') || 'slide'),
              'outin' === t.animation && ((t.animation = 'cross'), (t.crossOver = 0.5)),
              (t.easing = e.el.attr('data-easing') || 'ease');
            var a = e.el.attr('data-duration');
            if (
              ((t.duration = null != a ? parseInt(a, 10) : 500),
              v(e.el.attr('data-infinite')) && (t.infinite = !0),
              v(e.el.attr('data-disable-swipe')) && (t.disableSwipe = !0),
              v(e.el.attr('data-hide-arrows'))
                ? (t.hideArrows = !0)
                : e.config.hideArrows && (e.left.show(), e.right.show()),
              v(e.el.attr('data-autoplay')))
            ) {
              (t.autoplay = !0),
                (t.delay = parseInt(e.el.attr('data-delay'), 10) || 2e3),
                (t.timerMax = parseInt(e.el.attr('data-autoplay-limit'), 10));
              var n = 'mousedown' + p + ' touchstart' + p;
              d ||
                e.el.off(n).one(n, function () {
                  A(e);
                });
            }
            var i = e.right.width();
            (t.edge = i ? i + 40 : 100), (e.config = t);
          }
          function v(e) {
            return '1' === e || 'true' === e;
          }
          function L(t, a, n) {
            return function (i) {
              if (a) t.hasFocus[n] = a;
              else if (
                e.contains(t.el.get(0), i.relatedTarget) ||
                ((t.hasFocus[n] = a),
                (t.hasFocus.mouse && 'keyboard' === n) || (t.hasFocus.keyboard && 'mouse' === n))
              )
                return;
              a
                ? (t.ariaLiveLabel.attr('aria-live', 'polite'), t.hasTimer && A(t))
                : (t.ariaLiveLabel.attr('aria-live', 'off'), t.hasTimer && S(t));
            };
          }
          function _(e, t) {
            return function (a) {
              switch (a.keyCode) {
                case l.SPACE:
                case l.ENTER:
                  return t(e)(), a.preventDefault(), a.stopPropagation();
              }
            };
          }
          function R(e) {
            return function () {
              M(e, { index: e.index - 1, vector: -1 });
            };
          }
          function N(e) {
            return function () {
              M(e, { index: e.index + 1, vector: 1 });
            };
          }
          function S(e) {
            A(e);
            var t = e.config,
              a = t.timerMax;
            (a && e.timerCount++ > a) ||
              (e.timerId = window.setTimeout(function () {
                null == e.timerId || d || (N(e)(), S(e));
              }, t.delay));
          }
          function A(e) {
            window.clearTimeout(e.timerId), (e.timerId = null);
          }
          function C(a) {
            return function (i, o) {
              o = o || {};
              var c,
                s,
                r = a.config;
              if (d && 'setting' === i.type) {
                if ('prev' === o.select) return R(a)();
                if ('next' === o.select) return N(a)();
                if ((O(a), V(a), null == o.select)) return;
                return (
                  (c = o.select),
                  (s = null),
                  c === a.slides.length && (y(), V(a)),
                  t.each(a.anchors, function (t, a) {
                    e(t.els).each(function (t, n) {
                      e(n).index() === c && (s = a);
                    });
                  }),
                  void (null != s && M(a, { index: s, immediate: !0 }))
                );
              }
              if ('swipe' === i.type)
                return r.disableSwipe || n.env('editor')
                  ? void 0
                  : 'left' === o.direction
                  ? N(a)()
                  : 'right' === o.direction
                  ? R(a)()
                  : void 0;
              if (a.nav.has(i.target).length) {
                var f = e(i.target).index();
                if (('click' === i.type && M(a, { index: f }), 'keydown' === i.type))
                  switch (i.keyCode) {
                    case l.ENTER:
                    case l.SPACE:
                      M(a, { index: f }), i.preventDefault();
                      break;
                    case l.ARROW_LEFT:
                    case l.ARROW_UP:
                      h(a.nav, Math.max(f - 1, 0)), i.preventDefault();
                      break;
                    case l.ARROW_RIGHT:
                    case l.ARROW_DOWN:
                      h(a.nav, Math.min(f + 1, a.pages)), i.preventDefault();
                      break;
                    case l.HOME:
                      h(a.nav, 0), i.preventDefault();
                      break;
                    case l.END:
                      h(a.nav, a.pages), i.preventDefault();
                      break;
                    default:
                      return;
                  }
              }
            };
          }
          function h(e, t) {
            var a = e.children().eq(t).focus();
            e.children().not(a);
          }
          function M(t, a) {
            a = a || {};
            var n = t.config,
              i = t.anchors;
            t.previous = t.index;
            var l = a.index,
              c = {};
            l < 0
              ? ((l = i.length - 1),
                n.infinite && ((c.x = -t.endX), (c.from = 0), (c.to = i[0].width)))
              : l >= i.length &&
                ((l = 0),
                n.infinite &&
                  ((c.x = i[i.length - 1].width),
                  (c.from = -i[i.length - 1].x),
                  (c.to = c.from - c.x))),
              (t.index = l);
            var s = t.nav
              .children()
              .eq(l)
              .addClass('w-active')
              .attr('aria-pressed', 'true')
              .attr('tabindex', '0');
            t.nav
              .children()
              .not(s)
              .removeClass('w-active')
              .attr('aria-pressed', 'false')
              .attr('tabindex', '-1'),
              n.hideArrows &&
                (t.index === i.length - 1 ? t.right.hide() : t.right.show(),
                0 === t.index ? t.left.hide() : t.left.show());
            var f = t.offsetX || 0,
              u = (t.offsetX = -i[t.index].x),
              p = { x: u, opacity: 1, visibility: '' },
              I = e(i[t.index].els),
              y = e(i[t.previous] && i[t.previous].els),
              m = t.slides.not(I),
              g = n.animation,
              b = n.easing,
              O = Math.round(n.duration),
              v = a.vector || (t.index > t.previous ? 1 : -1),
              L = 'opacity ' + O + 'ms ' + b,
              _ = 'transform ' + O + 'ms ' + b;
            if (
              (I.find(o).removeAttr('tabindex'),
              I.removeAttr('aria-hidden'),
              I.find('*').removeAttr('aria-hidden'),
              m.find(o).attr('tabindex', '-1'),
              m.attr('aria-hidden', 'true'),
              m.find('*').attr('aria-hidden', 'true'),
              d || (I.each(E.intro), m.each(E.outro)),
              a.immediate && !T)
            ) {
              r(I).set(p), S();
              return;
            }
            if (t.index !== t.previous) {
              if ((d || t.ariaLiveLabel.text(`Slide ${l + 1} of ${i.length}.`), 'cross' === g)) {
                var R = Math.round(O - O * n.crossOver),
                  N = Math.round(O - R);
                (L = 'opacity ' + R + 'ms ' + b),
                  r(y).set({ visibility: '' }).add(L).start({ opacity: 0 }),
                  r(I)
                    .set({ visibility: '', x: u, opacity: 0, zIndex: t.depth++ })
                    .add(L)
                    .wait(N)
                    .then({ opacity: 1 })
                    .then(S);
                return;
              }
              if ('fade' === g) {
                r(y).set({ visibility: '' }).stop(),
                  r(I)
                    .set({ visibility: '', x: u, opacity: 0, zIndex: t.depth++ })
                    .add(L)
                    .start({ opacity: 1 })
                    .then(S);
                return;
              }
              if ('over' === g) {
                (p = { x: t.endX }),
                  r(y).set({ visibility: '' }).stop(),
                  r(I)
                    .set({ visibility: '', zIndex: t.depth++, x: u + i[t.index].width * v })
                    .add(_)
                    .start({ x: u })
                    .then(S);
                return;
              }
              n.infinite && c.x
                ? (r(t.slides.not(y)).set({ visibility: '', x: c.x }).add(_).start({ x: u }),
                  r(y).set({ visibility: '', x: c.from }).add(_).start({ x: c.to }),
                  (t.shifted = y))
                : (n.infinite &&
                    t.shifted &&
                    (r(t.shifted).set({ visibility: '', x: f }), (t.shifted = null)),
                  r(t.slides).set({ visibility: '' }).add(_).start({ x: u }));
            }
            function S() {
              (I = e(i[t.index].els)),
                (m = t.slides.not(I)),
                'slide' !== g && (p.visibility = 'hidden'),
                r(m).set(p);
            }
          }
          function k(t, a) {
            var n,
              i,
              l,
              o,
              c = e.data(a, p);
            if (c) {
              if (((i = (n = c).mask.width()), n.maskWidth !== i && ((n.maskWidth = i), 1)))
                return V(c);
              d &&
                ((o = 0),
                (l = c).slides.each(function (t, a) {
                  o += e(a).outerWidth(!0);
                }),
                l.slidesWidth !== o && ((l.slidesWidth = o), 1)) &&
                V(c);
            }
          }
          function V(t) {
            var a = 1,
              n = 0,
              i = 0,
              l = 0,
              o = t.maskWidth,
              c = o - t.config.edge;
            c < 0 && (c = 0),
              (t.anchors = [{ els: [], x: 0, width: 0 }]),
              t.slides.each(function (d, s) {
                i - n > c && (a++, (n += o), (t.anchors[a - 1] = { els: [], x: i, width: 0 })),
                  (l = e(s).outerWidth(!0)),
                  (i += l),
                  (t.anchors[a - 1].width += l),
                  t.anchors[a - 1].els.push(s);
                var r = d + 1 + ' of ' + t.slides.length;
                e(s).attr('aria-label', r), e(s).attr('role', 'group');
              }),
              (t.endX = i),
              d && (t.pages = null),
              t.nav.length &&
                t.pages !== a &&
                ((t.pages = a),
                (function (t) {
                  var a,
                    n = [],
                    i = t.el.attr('data-nav-spacing');
                  i && (i = parseFloat(i) + 'px');
                  for (var l = 0, o = t.pages; l < o; l++)
                    (a = e('<div class="w-slider-dot" data-wf-ignore />'))
                      .attr('aria-label', 'Show slide ' + (l + 1) + ' of ' + o)
                      .attr('aria-pressed', 'false')
                      .attr('role', 'button')
                      .attr('tabindex', '-1'),
                      t.nav.hasClass('w-num') && a.text(l + 1),
                      null != i && a.css({ 'margin-left': i, 'margin-right': i }),
                      n.push(a);
                  t.nav.empty().append(n);
                })(t));
            var s = t.index;
            s >= a && (s = a - 1), M(t, { immediate: !0, index: s });
          }
          return (
            (s.ready = function () {
              (d = n.env('design')), y();
            }),
            (s.design = function () {
              (d = !0), setTimeout(y, 1e3);
            }),
            (s.preview = function () {
              (d = !1), y();
            }),
            (s.redraw = function () {
              (T = !0), y(), (T = !1);
            }),
            (s.destroy = m),
            s
          );
        })
      );
    },
    3946: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = {
        actionListPlaybackChanged: function () {
          return H;
        },
        animationFrameChanged: function () {
          return F;
        },
        clearRequested: function () {
          return w;
        },
        elementStateChanged: function () {
          return X;
        },
        eventListenerAdded: function () {
          return x;
        },
        eventStateChanged: function () {
          return G;
        },
        instanceAdded: function () {
          return P;
        },
        instanceRemoved: function () {
          return W;
        },
        instanceStarted: function () {
          return Q;
        },
        mediaQueriesDefined: function () {
          return j;
        },
        parameterChanged: function () {
          return D;
        },
        playbackRequested: function () {
          return V;
        },
        previewRequested: function () {
          return k;
        },
        rawDataImported: function () {
          return A;
        },
        sessionInitialized: function () {
          return C;
        },
        sessionStarted: function () {
          return h;
        },
        sessionStopped: function () {
          return M;
        },
        stopRequested: function () {
          return U;
        },
        testFrameRendered: function () {
          return B;
        },
        viewportWidthChanged: function () {
          return Y;
        },
      };
      for (var i in n) Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let l = a(7087),
        o = a(9468),
        {
          IX2_RAW_DATA_IMPORTED: d,
          IX2_SESSION_INITIALIZED: c,
          IX2_SESSION_STARTED: s,
          IX2_SESSION_STOPPED: r,
          IX2_PREVIEW_REQUESTED: f,
          IX2_PLAYBACK_REQUESTED: u,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: I,
          IX2_EVENT_LISTENER_ADDED: E,
          IX2_TEST_FRAME_RENDERED: T,
          IX2_EVENT_STATE_CHANGED: y,
          IX2_ANIMATION_FRAME_CHANGED: m,
          IX2_PARAMETER_CHANGED: g,
          IX2_INSTANCE_ADDED: b,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: L,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
          IX2_VIEWPORT_WIDTH_CHANGED: R,
          IX2_MEDIA_QUERIES_DEFINED: N,
        } = l.IX2EngineActionTypes,
        { reifyState: S } = o.IX2VanillaUtils,
        A = (e) => ({ type: d, payload: { ...S(e) } }),
        C = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: c,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        h = () => ({ type: s }),
        M = () => ({ type: r }),
        k = ({ rawData: e, defer: t }) => ({ type: f, payload: { defer: t, rawData: e } }),
        V = ({
          actionTypeId: e = l.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: a,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: d,
          verbose: c,
          rawData: s,
        }) => ({
          type: u,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: a,
            testManual: d,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: c,
            rawData: s,
          },
        }),
        U = (e) => ({ type: p, payload: { actionListId: e } }),
        w = () => ({ type: I }),
        x = (e, t) => ({ type: E, payload: { target: e, listenerParams: t } }),
        B = (e = 1) => ({ type: T, payload: { step: e } }),
        G = (e, t) => ({ type: y, payload: { stateKey: e, newState: t } }),
        F = (e, t) => ({ type: m, payload: { now: e, parameters: t } }),
        D = (e, t) => ({ type: g, payload: { key: e, value: t } }),
        P = (e) => ({ type: b, payload: { ...e } }),
        Q = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        W = (e) => ({ type: v, payload: { instanceId: e } }),
        X = (e, t, a, n) => ({
          type: L,
          payload: { elementId: e, actionTypeId: t, current: a, actionItem: n },
        }),
        H = ({ actionListId: e, isPlaying: t }) => ({
          type: _,
          payload: { actionListId: e, isPlaying: t },
        }),
        Y = ({ width: e, mediaQueries: t }) => ({
          type: R,
          payload: { width: e, mediaQueries: t },
        }),
        j = () => ({ type: N });
    },
    6011: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n,
        i = {
          actions: function () {
            return s;
          },
          destroy: function () {
            return I;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return u;
          },
          store: function () {
            return f;
          },
        };
      for (var l in i) Object.defineProperty(t, l, { enumerable: !0, get: i[l] });
      let o = a(9516),
        d = (n = a(7243)) && n.__esModule ? n : { default: n },
        c = a(1970),
        s = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
          var a = r(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ('default' !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
              o && (o.get || o.set) ? Object.defineProperty(n, l, o) : (n[l] = e[l]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(3946));
      function r(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (r = function (e) {
          return e ? a : t;
        })(e);
      }
      let f = (0, o.createStore)(d.default);
      function u(e) {
        e() && (0, c.observeRequests)(f);
      }
      function p(e) {
        I(), (0, c.startEngine)({ store: f, rawData: e, allowEvents: !0 });
      }
      function I() {
        (0, c.stopEngine)(f);
      }
    },
    5012: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = {
        elementContains: function () {
          return g;
        },
        getChildElements: function () {
          return O;
        },
        getClosestElement: function () {
          return L;
        },
        getProperty: function () {
          return I;
        },
        getQuerySelector: function () {
          return T;
        },
        getRefType: function () {
          return _;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return y;
        },
        isSiblingNode: function () {
          return b;
        },
        matchSelector: function () {
          return E;
        },
        queryDocument: function () {
          return m;
        },
        setStyle: function () {
          return u;
        },
      };
      for (var i in n) Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let l = a(9468),
        o = a(7087),
        { ELEMENT_MATCHES: d } = l.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: c,
          HTML_ELEMENT: s,
          PLAIN_OBJECT: r,
          WF_PAGE: f,
        } = o.IX2EngineConstants;
      function u(e, t, a) {
        e.style[t] = a;
      }
      function p(e, t) {
        return t.startsWith('--')
          ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function I(e, t) {
        return e[t];
      }
      function E(e) {
        return (t) => t[d](e);
      }
      function T({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(c)) {
            let a = e.split(c),
              n = a[0];
            if (((t = a[1]), n !== document.documentElement.getAttribute(f))) return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function y(e) {
        return null == e || e === document.documentElement.getAttribute(f) ? document : null;
      }
      function m(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + ' ' + t : e));
      }
      function g(e, t) {
        return e.contains(t);
      }
      function b(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function O(e) {
        let t = [];
        for (let a = 0, { length: n } = e || []; a < n; a++) {
          let { children: n } = e[a],
            { length: i } = n;
          if (i) for (let e = 0; e < i; e++) t.push(n[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          a = [];
        for (let n = 0, { length: i } = e; n < i; n++) {
          let { parentNode: i } = e[n];
          if (!i || !i.children || !i.children.length || -1 !== a.indexOf(i)) continue;
          a.push(i);
          let l = i.firstElementChild;
          for (; null != l; ) -1 === e.indexOf(l) && t.push(l), (l = l.nextElementSibling);
        }
        return t;
      }
      let L = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let a = e;
            do {
              if (a[d] && a[d](t)) return a;
              a = a.parentNode;
            } while (null != a);
            return null;
          };
      function _(e) {
        return null != e && 'object' == typeof e ? (e instanceof Element ? s : r) : null;
      }
    },
    1970: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eI;
        },
        startEngine: function () {
          return en;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return eu;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in n) Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let l = m(a(9777)),
        o = m(a(4738)),
        d = m(a(4659)),
        c = m(a(3452)),
        s = m(a(6633)),
        r = m(a(3729)),
        f = m(a(2397)),
        u = m(a(5082)),
        p = a(7087),
        I = a(9468),
        E = a(3946),
        T = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
          var a = g(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ('default' !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
              o && (o.get || o.set) ? Object.defineProperty(n, l, o) : (n[l] = e[l]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(5012)),
        y = m(a(8955));
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function g(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (g = function (e) {
          return e ? a : t;
        })(e);
      }
      let b = Object.keys(p.QuickEffectIds),
        O = (e) => b.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: L,
          HTML_ELEMENT: _,
          RENDER_GENERAL: R,
          W_MOD_IX: N,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: S,
          getElementId: A,
          getDestinationValues: C,
          observeStore: h,
          getInstanceId: M,
          renderHTMLElement: k,
          clearAllStyles: V,
          getMaxDurationItemIndex: U,
          getComputedStyle: w,
          getInstanceOrigin: x,
          reduceListToGroup: B,
          shouldNamespaceEventParameter: G,
          getNamespacedParameterId: F,
          shouldAllowMediaQuery: D,
          cleanupHTMLElement: P,
          clearObjectCache: Q,
          stringifyTarget: W,
          mediaQueriesEqual: X,
          shallowEqual: H,
        } = I.IX2VanillaUtils,
        { isPluginType: Y, createPluginInstance: j, getPluginDuration: z } = I.IX2VanillaPlugins,
        q = navigator.userAgent,
        $ = q.match(/iPad/i) || q.match(/iPhone/);
      function K(e) {
        h({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          h({ store: e, select: ({ ixRequest: e }) => e.playback, onChange: ee }),
          h({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          h({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: ea });
      }
      function Z({ rawData: e, defer: t }, a) {
        let n = () => {
          en({ store: a, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(n, 0) : n();
      }
      function J() {
        document.dispatchEvent(new CustomEvent('IX2_PAGE_UPDATE'));
      }
      function ee(e, t) {
        let {
            actionTypeId: a,
            actionListId: n,
            actionItemId: i,
            eventId: l,
            allowEvents: o,
            immediate: d,
            testManual: c,
            verbose: s = !0,
          } = e,
          { rawData: r } = e;
        if (n && i && r && d) {
          let e = r.actionLists[n];
          e && (r = B({ actionList: e, actionItemId: i, rawData: r }));
        }
        if (
          (en({ store: t, rawData: r, allowEvents: o, testManual: c }),
          (n && a === p.ActionTypeConsts.GENERAL_START_ACTION) || O(a))
        ) {
          ep({ store: t, actionListId: n }), ef({ store: t, actionListId: n, eventId: l });
          let e = eI({ store: t, eventId: l, actionListId: n, immediate: d, verbose: s });
          s &&
            e &&
            t.dispatch((0, E.actionListPlaybackChanged)({ actionListId: n, isPlaying: !d }));
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : eu({ store: t }), ei(t);
      }
      function ea(e, t) {
        ei(t), V({ store: t, elementApi: T });
      }
      function en({ store: e, rawData: t, allowEvents: a, testManual: n }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, E.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, E.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(L),
              reducedMotion:
                document.body.hasAttribute('data-wf-ix-vacation') &&
                window.matchMedia('(prefers-reduced-motion)').matches,
            })
          ),
          a) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: a } = t;
              ed(e),
                (0, f.default)(a, (t, a) => {
                  let n = y.default[a];
                  if (!n) return void console.warn(`IX2 event type not configured: ${a}`);
                  !(function ({ logic: e, store: t, events: a }) {
                    !(function (e) {
                      if (!$) return;
                      let t = {},
                        a = '';
                      for (let n in e) {
                        let { eventTypeId: i, target: l } = e[n],
                          o = T.getQuerySelector(l);
                        t[o] ||
                          ((i === p.EventTypeConsts.MOUSE_CLICK ||
                            i === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (a += o + '{cursor: pointer;touch-action: manipulation;}')));
                      }
                      if (a) {
                        let e = document.createElement('style');
                        (e.textContent = a), document.body.appendChild(e);
                      }
                    })(a);
                    let { types: n, handler: i } = e,
                      { ixData: c } = t.getState(),
                      { actionLists: s } = c,
                      r = ec(a, er);
                    if (!(0, d.default)(r)) return;
                    (0, f.default)(r, (e, n) => {
                      let i = a[n],
                        { action: d, id: r, mediaQueries: f = c.mediaQueryKeys } = i,
                        { actionListId: u } = d.config;
                      X(f, c.mediaQueryKeys) || t.dispatch((0, E.mediaQueriesDefined)()),
                        d.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config) ? i.config : [i.config]).forEach((a) => {
                            let { continuousParameterGroupId: n } = a,
                              i = (0, o.default)(s, `${u}.continuousParameterGroups`, []),
                              d = (0, l.default)(i, ({ id: e }) => e === n),
                              c = (a.smoothing || 0) / 100,
                              f = (a.restingState || 0) / 100;
                            d &&
                              e.forEach((e, n) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: a,
                                  eventId: n,
                                  eventConfig: i,
                                  actionListId: l,
                                  parameterGroup: d,
                                  smoothing: c,
                                  restingValue: s,
                                }) {
                                  let { ixData: r, ixSession: f } = e.getState(),
                                    { events: u } = r,
                                    I = u[n],
                                    { eventTypeId: E } = I,
                                    y = {},
                                    m = {},
                                    g = [],
                                    { continuousActionGroups: b } = d,
                                    { id: O } = d;
                                  G(E, i) && (O = F(t, O));
                                  let _ =
                                    f.hasBoundaryNodes && a ? T.getClosestElement(a, L) : null;
                                  b.forEach((e) => {
                                    let { keyframe: t, actionItems: n } = e;
                                    n.forEach((e) => {
                                      let { actionTypeId: n } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let l = i.boundaryMode ? _ : null,
                                        o = W(i) + v + n;
                                      if (
                                        ((m[o] = (function (e = [], t, a) {
                                          let n,
                                            i = [...e];
                                          return (
                                            i.some((e, a) => e.keyframe === t && ((n = a), !0)),
                                            null == n &&
                                              ((n = i.length),
                                              i.push({ keyframe: t, actionItems: [] })),
                                            i[n].actionItems.push(a),
                                            i
                                          );
                                        })(m[o], t, e)),
                                        !y[o])
                                      ) {
                                        y[o] = !0;
                                        let { config: t } = e;
                                        S({
                                          config: t,
                                          event: I,
                                          eventTarget: a,
                                          elementRoot: l,
                                          elementApi: T,
                                        }).forEach((e) => {
                                          g.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    g.forEach(({ element: t, key: a }) => {
                                      let i = m[a],
                                        d = (0, o.default)(i, '[0].actionItems[0]', {}),
                                        { actionTypeId: r } = d,
                                        f = (
                                          r === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 === (d.config?.target?.selectorGuids || []).length
                                            : Y(r)
                                        )
                                          ? j(r)?.(t, d)
                                          : null,
                                        u = C({ element: t, actionItem: d, elementApi: T }, f);
                                      eE({
                                        store: e,
                                        element: t,
                                        eventId: n,
                                        actionListId: l,
                                        actionItem: d,
                                        destination: u,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: i,
                                        smoothing: c,
                                        restingValue: s,
                                        pluginInstance: f,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: r + v + n,
                                  eventTarget: e,
                                  eventId: r,
                                  eventConfig: a,
                                  actionListId: u,
                                  parameterGroup: d,
                                  smoothing: c,
                                  restingValue: f,
                                });
                              });
                          }),
                        (d.actionTypeId === p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(d.actionTypeId)) &&
                          ef({ store: t, actionListId: u, eventId: r });
                    });
                    let I = (e) => {
                        let { ixSession: n } = t.getState();
                        es(r, (l, o, d) => {
                          let s = a[o],
                            r = n.eventState[d],
                            { action: f, mediaQueries: u = c.mediaQueryKeys } = s;
                          if (!D(u, n.mediaQueryKey)) return;
                          let I = (a = {}) => {
                            let n = i(
                              {
                                store: t,
                                element: l,
                                event: s,
                                eventConfig: a,
                                nativeEvent: e,
                                eventStateKey: d,
                              },
                              r
                            );
                            H(n, r) || t.dispatch((0, E.eventStateChanged)(d, n));
                          };
                          f.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(s.config) ? s.config : [s.config]).forEach(I)
                            : I();
                        });
                      },
                      y = (0, u.default)(I, 12),
                      m = ({ target: e = document, types: a, throttle: n }) => {
                        a.split(' ')
                          .filter(Boolean)
                          .forEach((a) => {
                            let i = n ? y : I;
                            e.addEventListener(a, i),
                              t.dispatch((0, E.eventListenerAdded)(e, [a, i]));
                          });
                      };
                    Array.isArray(n) ? n.forEach(m) : 'string' == typeof n && m(e);
                  })({ logic: n, store: e, events: t });
                });
              let { ixSession: n } = e.getState();
              n.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    ed(e);
                  };
                  eo.forEach((a) => {
                    window.addEventListener(a, t),
                      e.dispatch((0, E.eventListenerAdded)(window, [a, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(N) && (e.className += ` ${N}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              h({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ei(e), V({ store: e, elementApi: T }), en({ store: e, allowEvents: !0 }), J();
                },
              }));
          e.dispatch((0, E.sessionStarted)()),
            (function (e, t) {
              let a = (n) => {
                let { ixSession: i, ixParameters: l } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, E.animationFrameChanged)(n, l)), t)) {
                    let t = h({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        a(e), t();
                      },
                    });
                  } else requestAnimationFrame(a);
              };
              a(window.performance.now());
            })(e, n);
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: a } = t;
          a.forEach(el), Q(), e.dispatch((0, E.sessionStopped)());
        }
      }
      function el({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let eo = ['resize', 'orientationchange'];
      function ed(e) {
        let { ixSession: t, ixData: a } = e.getState(),
          n = window.innerWidth;
        if (n !== t.viewportWidth) {
          let { mediaQueries: t } = a;
          e.dispatch((0, E.viewportWidthChanged)({ width: n, mediaQueries: t }));
        }
      }
      let ec = (e, t) => (0, c.default)((0, r.default)(e, t), s.default),
        es = (e, t) => {
          (0, f.default)(e, (e, a) => {
            e.forEach((e, n) => {
              t(e, a, a + v + n);
            });
          });
        },
        er = (e) => S({ config: { target: e.target, targets: e.targets }, elementApi: T });
      function ef({ store: e, actionListId: t, eventId: a }) {
        let { ixData: n, ixSession: i } = e.getState(),
          { actionLists: l, events: d } = n,
          c = d[a],
          s = l[t];
        if (s && s.useFirstGroupAsInitialState) {
          let l = (0, o.default)(s, 'actionItemGroups[0].actionItems', []);
          if (!D((0, o.default)(c, 'mediaQueries', n.mediaQueryKeys), i.mediaQueryKey)) return;
          l.forEach((n) => {
            let { config: i, actionTypeId: l } = n,
              o = S({
                config:
                  i?.target?.useEventTarget === !0 && i?.target?.objectId == null
                    ? { target: c.target, targets: c.targets }
                    : i,
                event: c,
                elementApi: T,
              }),
              d = Y(l);
            o.forEach((i) => {
              let o = d ? j(l)?.(i, n) : null;
              eE({
                destination: C({ element: i, actionItem: n, elementApi: T }, o),
                immediate: !0,
                store: e,
                element: i,
                eventId: a,
                actionItem: n,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function eu({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, f.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: a, verbose: n } = t;
            eT(t, e),
              n && e.dispatch((0, E.actionListPlaybackChanged)({ actionListId: a, isPlaying: !1 }));
          }
        });
      }
      function ep({ store: e, eventId: t, eventTarget: a, eventStateKey: n, actionListId: i }) {
        let { ixInstances: l, ixSession: d } = e.getState(),
          c = d.hasBoundaryNodes && a ? T.getClosestElement(a, L) : null;
        (0, f.default)(l, (a) => {
          let l = (0, o.default)(a, 'actionItem.config.target.boundaryMode'),
            d = !n || a.eventStateKey === n;
          if (a.actionListId === i && a.eventId === t && d) {
            if (c && l && !T.elementContains(c, a.element)) return;
            eT(a, e),
              a.verbose &&
                e.dispatch((0, E.actionListPlaybackChanged)({ actionListId: i, isPlaying: !1 }));
          }
        });
      }
      function eI({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: i,
        groupIndex: l = 0,
        immediate: d,
        verbose: c,
      }) {
        let { ixData: s, ixSession: r } = e.getState(),
          { events: f } = s,
          u = f[t] || {},
          { mediaQueries: p = s.mediaQueryKeys } = u,
          { actionItemGroups: I, useFirstGroupAsInitialState: E } = (0, o.default)(
            s,
            `actionLists.${i}`,
            {}
          );
        if (!I || !I.length) return !1;
        l >= I.length && (0, o.default)(u, 'config.loop') && (l = 0), 0 === l && E && l++;
        let y = (0 === l || (1 === l && E)) && O(u.action?.actionTypeId) ? u.config.delay : void 0,
          m = (0, o.default)(I, [l, 'actionItems'], []);
        if (!m.length || !D(p, r.mediaQueryKey)) return !1;
        let g = r.hasBoundaryNodes && a ? T.getClosestElement(a, L) : null,
          b = U(m),
          v = !1;
        return (
          m.forEach((o, s) => {
            let { config: r, actionTypeId: f } = o,
              p = Y(f),
              { target: I } = r;
            I &&
              S({
                config: r,
                event: u,
                eventTarget: a,
                elementRoot: I.boundaryMode ? g : null,
                elementApi: T,
              }).forEach((r, u) => {
                let I = p ? j(f)?.(r, o) : null,
                  E = p ? z(f)(r, o) : null;
                v = !0;
                let m = w({ element: r, actionItem: o }),
                  g = C({ element: r, actionItem: o, elementApi: T }, I);
                eE({
                  store: e,
                  element: r,
                  actionItem: o,
                  eventId: t,
                  eventTarget: a,
                  eventStateKey: n,
                  actionListId: i,
                  groupIndex: l,
                  isCarrier: b === s && 0 === u,
                  computedStyle: m,
                  destination: g,
                  immediate: d,
                  verbose: c,
                  pluginInstance: I,
                  pluginDuration: E,
                  instanceDelay: y,
                });
              });
          }),
          v
        );
      }
      function eE(e) {
        let t,
          { store: a, computedStyle: n, ...i } = e,
          {
            element: l,
            actionItem: o,
            immediate: d,
            pluginInstance: c,
            continuous: s,
            restingValue: r,
            eventId: f,
          } = i,
          u = M(),
          { ixElements: I, ixSession: y, ixData: m } = a.getState(),
          g = A(I, l),
          { refState: b } = I[g] || {},
          O = T.getRefType(l),
          v = y.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (v && s)
          switch (m.events[f]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = r;
              break;
            default:
              t = 0.5;
          }
        let L = x(l, b, n, o, T, c);
        if (
          (a.dispatch(
            (0, E.instanceAdded)({
              instanceId: u,
              elementId: g,
              origin: L,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i,
            })
          ),
          ey(document.body, 'ix2-animation-started', u),
          d)
        )
          return void (function (e, t) {
            let { ixParameters: a } = e.getState();
            e.dispatch((0, E.instanceStarted)(t, 0)),
              e.dispatch((0, E.animationFrameChanged)(performance.now(), a));
            let { ixInstances: n } = e.getState();
            em(n[t], e);
          })(a, u);
        h({ store: a, select: ({ ixInstances: e }) => e[u], onChange: em }),
          s || a.dispatch((0, E.instanceStarted)(u, y.tick));
      }
      function eT(e, t) {
        ey(document.body, 'ix2-animation-stopping', { instanceId: e.id, state: t.getState() });
        let { elementId: a, actionItem: n } = e,
          { ixElements: i } = t.getState(),
          { ref: l, refType: o } = i[a] || {};
        o === _ && P(l, n, T), t.dispatch((0, E.instanceRemoved)(e.id));
      }
      function ey(e, t, a) {
        let n = document.createEvent('CustomEvent');
        n.initCustomEvent(t, !0, !0, a), e.dispatchEvent(n);
      }
      function em(e, t) {
        let {
            active: a,
            continuous: n,
            complete: i,
            elementId: l,
            actionItem: o,
            actionTypeId: d,
            renderType: c,
            current: s,
            groupIndex: r,
            eventId: f,
            eventTarget: u,
            eventStateKey: p,
            actionListId: I,
            isCarrier: y,
            styleProp: m,
            verbose: g,
            pluginInstance: b,
          } = e,
          { ixData: O, ixSession: v } = t.getState(),
          { events: L } = O,
          { mediaQueries: N = O.mediaQueryKeys } = L && L[f] ? L[f] : {};
        if (D(N, v.mediaQueryKey) && (n || a || i)) {
          if (s || (c === R && i)) {
            t.dispatch((0, E.elementStateChanged)(l, d, s, o));
            let { ixElements: e } = t.getState(),
              { ref: a, refType: n, refState: i } = e[l] || {},
              r = i && i[d];
            (n === _ || Y(d)) && k(a, i, r, f, o, m, T, c, b);
          }
          if (i) {
            if (y) {
              let e = eI({
                store: t,
                eventId: f,
                eventTarget: u,
                eventStateKey: p,
                actionListId: I,
                groupIndex: r + 1,
                verbose: g,
              });
              g &&
                !e &&
                t.dispatch((0, E.actionListPlaybackChanged)({ actionListId: I, isPlaying: !1 }));
            }
            eT(e, t);
          }
        }
      }
    },
    8955: function (e, t, a) {
      'use strict';
      let n;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let i = f(a(5801)),
        l = f(a(4738)),
        o = f(a(3789)),
        d = a(7087),
        c = a(1970),
        s = a(3946),
        r = a(9468);
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: u,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: I,
          MOUSE_UP: E,
          MOUSE_OVER: T,
          MOUSE_OUT: y,
          DROPDOWN_CLOSE: m,
          DROPDOWN_OPEN: g,
          SLIDER_ACTIVE: b,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: v,
          TAB_INACTIVE: L,
          NAVBAR_CLOSE: _,
          NAVBAR_OPEN: R,
          MOUSE_MOVE: N,
          PAGE_SCROLL_DOWN: S,
          SCROLL_INTO_VIEW: A,
          SCROLL_OUT_OF_VIEW: C,
          PAGE_SCROLL_UP: h,
          SCROLLING_IN_VIEW: M,
          PAGE_FINISH: k,
          ECOMMERCE_CART_CLOSE: V,
          ECOMMERCE_CART_OPEN: U,
          PAGE_START: w,
          PAGE_SCROLL: x,
        } = d.EventTypeConsts,
        B = 'COMPONENT_ACTIVE',
        G = 'COMPONENT_INACTIVE',
        { COLON_DELIMITER: F } = d.IX2EngineConstants,
        { getNamespacedParameterId: D } = r.IX2VanillaUtils,
        P = (e) => (t) => !!('object' == typeof t && e(t)) || t,
        Q = P(({ element: e, nativeEvent: t }) => e === t.target),
        W = P(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        X = (0, i.default)([Q, W]),
        H = (e, t) => {
          if (t) {
            let { ixData: a } = e.getState(),
              { events: n } = a,
              i = n[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        Y = ({ store: e, event: t }) => {
          let { action: a } = t,
            { autoStopEventId: n } = a.config;
          return !!H(e, n);
        },
        j = ({ store: e, event: t, element: a, eventStateKey: n }, i) => {
          let { action: o, id: d } = t,
            { actionListId: s, autoStopEventId: r } = o.config,
            f = H(e, r);
          return (
            f &&
              (0, c.stopActionGroup)({
                store: e,
                eventId: r,
                eventTarget: a,
                eventStateKey: r + F + n.split(F)[1],
                actionListId: (0, l.default)(f, 'action.config.actionListId'),
              }),
            (0, c.stopActionGroup)({
              store: e,
              eventId: d,
              eventTarget: a,
              eventStateKey: n,
              actionListId: s,
            }),
            (0, c.startActionGroup)({
              store: e,
              eventId: d,
              eventTarget: a,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        },
        z = (e, t) => (a, n) => !0 === e(a, n) ? t(a, n) : n,
        q = { handler: z(X, j) },
        $ = { ...q, types: [B, G].join(' ') },
        K = [
          { target: window, types: 'resize orientationchange', throttle: !0 },
          {
            target: document,
            types: 'scroll wheel readystatechange IX2_PAGE_UPDATE',
            throttle: !0,
          },
        ],
        Z = 'mouseover mouseout',
        J = { types: K },
        ee = { PAGE_START: w, PAGE_FINISH: k },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t = 'CSS1Compat' === document.compatMode ? document.documentElement : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        ea = (e, t) =>
          !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        en = ({ element: e, nativeEvent: t }) => {
          let { type: a, target: n, relatedTarget: i } = t,
            l = e.contains(n);
          if ('mouseover' === a && l) return !0;
          let o = e.contains(i);
          return 'mouseout' === a && !!l && !!o;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: a },
            } = e,
            { clientWidth: n, clientHeight: i } = et(),
            l = a.scrollOffsetValue,
            o = 'PX' === a.scrollOffsetUnit ? l : (i * (l || 0)) / 100;
          return ea(t.getBoundingClientRect(), { left: 0, top: o, right: n, bottom: i - o });
        },
        el = (e) => (t, a) => {
          let { type: n } = t.nativeEvent,
            i = -1 !== [B, G].indexOf(n) ? n === B : a.isActive,
            l = { ...a, isActive: i };
          return ((!a || l.isActive !== a.isActive) && e(t, l)) || l;
        },
        eo = (e) => (t, a) => {
          let n = { elementHovered: en(t) };
          return ((a ? n.elementHovered !== a.elementHovered : n.elementHovered) && e(t, n)) || n;
        },
        ed =
          (e) =>
          (t, a = {}) => {
            let n,
              i,
              { stiffScrollTop: l, scrollHeight: o, innerHeight: d } = et(),
              {
                event: { config: c, eventTypeId: s },
              } = t,
              { scrollOffsetValue: r, scrollOffsetUnit: f } = c,
              u = o - d,
              p = Number((l / u).toFixed(2));
            if (a && a.percentTop === p) return a;
            let I = ('PX' === f ? r : (d * (r || 0)) / 100) / u,
              E = 0;
            a && ((n = p > a.percentTop), (E = (i = a.scrollingDown !== n) ? p : a.anchorTop));
            let T = s === S ? p >= E + I : p <= E - I,
              y = { ...a, percentTop: p, inBounds: T, anchorTop: E, scrollingDown: n };
            return (a && T && (i || y.inBounds !== a.inBounds) && e(t, y)) || y;
          },
        ec = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        es =
          (e) =>
          (t, a = { clickCount: 0 }) => {
            let n = { clickCount: (a.clickCount % 2) + 1 };
            return (n.clickCount !== a.clickCount && e(t, n)) || n;
          },
        er = (e = !0) => ({
          ...$,
          handler: z(
            e ? X : Q,
            el((e, t) => (t.isActive ? q.handler(e, t) : t))
          ),
        }),
        ef = (e = !0) => ({
          ...$,
          handler: z(
            e ? X : Q,
            el((e, t) => (t.isActive ? t : q.handler(e, t)))
          ),
        }),
        eu = {
          ...J,
          handler:
            ((n = (e, t) => {
              let { elementVisible: a } = t,
                { event: n, store: i } = e,
                { ixData: l } = i.getState(),
                { events: o } = l;
              return !o[n.action.config.autoStopEventId] && t.triggered
                ? t
                : (n.eventTypeId === A) === a
                ? (j(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let a = { ...t, elementVisible: ei(e) };
              return (
                ((t ? a.elementVisible !== t.elementVisible : a.elementVisible) && n(e, a)) || a
              );
            }),
        },
        ep = {
          [b]: er(),
          [O]: ef(),
          [g]: er(),
          [m]: ef(),
          [R]: er(!1),
          [_]: ef(!1),
          [v]: er(),
          [L]: ef(),
          [U]: { types: 'ecommerce-cart-open', handler: z(X, j) },
          [V]: { types: 'ecommerce-cart-close', handler: z(X, j) },
          [u]: {
            types: 'click',
            handler: z(
              X,
              es((e, { clickCount: t }) => {
                Y(e) ? 1 === t && j(e) : j(e);
              })
            ),
          },
          [p]: {
            types: 'click',
            handler: z(
              X,
              es((e, { clickCount: t }) => {
                2 === t && j(e);
              })
            ),
          },
          [I]: { ...q, types: 'mousedown' },
          [E]: { ...q, types: 'mouseup' },
          [T]: {
            types: Z,
            handler: z(
              X,
              eo((e, t) => {
                t.elementHovered && j(e);
              })
            ),
          },
          [y]: {
            types: Z,
            handler: z(
              X,
              eo((e, t) => {
                t.elementHovered || j(e);
              })
            ),
          },
          [N]: {
            types: 'mousemove mouseout scroll',
            handler: (
              { store: e, element: t, eventConfig: a, nativeEvent: n, eventStateKey: i },
              l = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: c,
                  continuousParameterGroupId: r,
                  reverse: f,
                  restingState: u = 0,
                } = a,
                {
                  clientX: p = l.clientX,
                  clientY: I = l.clientY,
                  pageX: E = l.pageX,
                  pageY: T = l.pageY,
                } = n,
                y = 'X_AXIS' === c,
                m = 'mouseout' === n.type,
                g = u / 100,
                b = r,
                O = !1;
              switch (o) {
                case d.EventBasedOn.VIEWPORT:
                  g = y
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(I, window.innerHeight) / window.innerHeight;
                  break;
                case d.EventBasedOn.PAGE: {
                  let { scrollLeft: e, scrollTop: t, scrollWidth: a, scrollHeight: n } = et();
                  g = y ? Math.min(e + E, a) / a : Math.min(t + T, n) / n;
                  break;
                }
                case d.EventBasedOn.ELEMENT:
                default: {
                  b = D(i, r);
                  let e = 0 === n.type.indexOf('mouse');
                  if (e && !0 !== X({ element: t, nativeEvent: n })) break;
                  let a = t.getBoundingClientRect(),
                    { left: l, top: o, width: d, height: c } = a;
                  if (!e && !ec({ left: p, top: I }, a)) break;
                  (O = !0), (g = y ? (p - l) / d : (I - o) / c);
                }
              }
              return (
                m && (g > 0.95 || g < 0.05) && (g = Math.round(g)),
                (o !== d.EventBasedOn.ELEMENT || O || O !== l.elementHovered) &&
                  ((g = f ? 1 - g : g), e.dispatch((0, s.parameterChanged)(b, g))),
                { elementHovered: O, clientX: p, clientY: I, pageX: E, pageY: T }
              );
            },
          },
          [x]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: a, reverse: n } = t,
                { scrollTop: i, scrollHeight: l, clientHeight: o } = et(),
                d = i / (l - o);
              (d = n ? 1 - d : d), e.dispatch((0, s.parameterChanged)(a, d));
            },
          },
          [M]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: a, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: l,
                  scrollTop: o,
                  scrollWidth: c,
                  scrollHeight: r,
                  clientHeight: f,
                } = et(),
                {
                  basedOn: u,
                  selectedAxis: p,
                  continuousParameterGroupId: I,
                  startsEntering: E,
                  startsExiting: T,
                  addEndOffset: y,
                  addStartOffset: m,
                  addOffsetValue: g = 0,
                  endOffsetValue: b = 0,
                } = a;
              if (u === d.EventBasedOn.VIEWPORT) {
                let e = 'X_AXIS' === p ? l / c : o / r;
                return (
                  e !== i.scrollPercent && t.dispatch((0, s.parameterChanged)(I, e)),
                  { scrollPercent: e }
                );
              }
              {
                let a = D(n, I),
                  l = e.getBoundingClientRect(),
                  o = (m ? g : 0) / 100,
                  d = (y ? b : 0) / 100;
                (o = E ? o : 1 - o), (d = T ? d : 1 - d);
                let c = l.top + Math.min(l.height * o, f),
                  u = Math.min(f + (l.top + l.height * d - c), r),
                  p = Math.min(Math.max(0, f - c), u) / u;
                return (
                  p !== i.scrollPercent && t.dispatch((0, s.parameterChanged)(a, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [A]: eu,
          [C]: eu,
          [S]: {
            ...J,
            handler: ed((e, t) => {
              t.scrollingDown && j(e);
            }),
          },
          [h]: {
            ...J,
            handler: ed((e, t) => {
              t.scrollingDown || j(e);
            }),
          },
          [k]: {
            types: 'readystatechange IX2_PAGE_UPDATE',
            handler: z(Q, (e, t) => {
              let a = { finished: 'complete' === document.readyState };
              return a.finished && !(t && t.finshed) && j(e), a;
            }),
          },
          [w]: {
            types: 'readystatechange IX2_PAGE_UPDATE',
            handler: z(Q, (e, t) => (t || j(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ixData', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: n } = a(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === n ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ixInstances', {
          enumerable: !0,
          get: function () {
            return O;
          },
        });
      let n = a(7087),
        i = a(9468),
        l = a(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: d,
          IX2_INSTANCE_ADDED: c,
          IX2_INSTANCE_STARTED: s,
          IX2_INSTANCE_REMOVED: r,
          IX2_ANIMATION_FRAME_CHANGED: f,
        } = n.IX2EngineActionTypes,
        { optimizeFloat: u, applyEasing: p, createBezierEasing: I } = i.IX2EasingUtils,
        { RENDER_GENERAL: E } = n.IX2EngineConstants,
        { getItemConfigByKey: T, getRenderType: y, getStyleProp: m } = i.IX2VanillaUtils,
        g = (e, t) => {
          let a,
            n,
            i,
            o,
            {
              position: d,
              parameterId: c,
              actionGroups: s,
              destinationKeys: r,
              smoothing: f,
              restingValue: I,
              actionTypeId: E,
              customEasingFn: y,
              skipMotion: m,
              skipToValue: g,
            } = e,
            { parameters: b } = t.payload,
            O = Math.max(1 - f, 0.01),
            v = b[c];
          null == v && ((O = 1), (v = I));
          let L = u((Math.max(v, 0) || 0) - d),
            _ = m ? g : u(d + L * O),
            R = 100 * _;
          if (_ === d && e.current) return e;
          for (let e = 0, { length: t } = s; e < t; e++) {
            let { keyframe: t, actionItems: l } = s[e];
            if ((0 === e && (a = l[0]), R >= t)) {
              a = l[0];
              let d = s[e + 1],
                c = d && R !== t;
              (n = c ? d.actionItems[0] : null), c && ((i = t / 100), (o = (d.keyframe - t) / 100));
            }
          }
          let N = {};
          if (a && !n)
            for (let e = 0, { length: t } = r; e < t; e++) {
              let t = r[e];
              N[t] = T(E, t, a.config);
            }
          else if (a && n && void 0 !== i && void 0 !== o) {
            let e = (_ - i) / o,
              t = p(a.config.easing, e, y);
            for (let e = 0, { length: i } = r; e < i; e++) {
              let i = r[e],
                l = T(E, i, a.config),
                o = (T(E, i, n.config) - l) * t + l;
              N[i] = o;
            }
          }
          return (0, l.merge)(e, { position: _, current: N });
        },
        b = (e, t) => {
          let {
              active: a,
              origin: n,
              start: i,
              immediate: o,
              renderType: d,
              verbose: c,
              actionItem: s,
              destination: r,
              destinationKeys: f,
              pluginDuration: I,
              instanceDelay: T,
              customEasingFn: y,
              skipMotion: m,
            } = e,
            g = s.config.easing,
            { duration: b, delay: O } = s.config;
          null != I && (b = I),
            (O = null != T ? T : O),
            d === E ? (b = 0) : (o || m) && (b = O = 0);
          let { now: v } = t.payload;
          if (a && n) {
            let t = v - (i + O);
            if (c) {
              let t = b + O,
                a = u(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, l.set)(e, 'verboseTimeElapsed', t * a);
            }
            if (t < 0) return e;
            let a = u(Math.min(Math.max(0, t / b), 1)),
              o = p(g, a, y),
              d = {},
              s = null;
            return (
              f.length &&
                (s = f.reduce((e, t) => {
                  let a = r[t],
                    i = parseFloat(n[t]) || 0,
                    l = parseFloat(a) - i;
                  return (e[t] = l * o + i), e;
                }, {})),
              (d.current = s),
              (d.position = a),
              1 === a && ((d.active = !1), (d.complete = !0)),
              (0, l.merge)(e, d)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case d:
              return Object.freeze({});
            case c: {
              let {
                  instanceId: a,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: d,
                  eventStateKey: c,
                  actionListId: s,
                  groupIndex: r,
                  isCarrier: f,
                  origin: u,
                  destination: p,
                  immediate: E,
                  verbose: T,
                  continuous: g,
                  parameterId: b,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: L,
                  pluginInstance: _,
                  pluginDuration: R,
                  instanceDelay: N,
                  skipMotion: S,
                  skipToValue: A,
                } = t.payload,
                { actionTypeId: C } = i,
                h = y(C),
                M = m(h, C),
                k = Object.keys(p).filter((e) => null != p[e] && 'string' != typeof p[e]),
                { easing: V } = i.config;
              return (0, l.set)(e, a, {
                id: a,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: u,
                destination: p,
                destinationKeys: k,
                immediate: E,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: C,
                eventId: o,
                eventTarget: d,
                eventStateKey: c,
                actionListId: s,
                groupIndex: r,
                renderType: h,
                isCarrier: f,
                styleProp: M,
                continuous: g,
                parameterId: b,
                actionGroups: O,
                smoothing: v,
                restingValue: L,
                pluginInstance: _,
                pluginDuration: R,
                instanceDelay: N,
                skipMotion: S,
                skipToValue: A,
                customEasingFn: Array.isArray(V) && 4 === V.length ? I(V) : void 0,
              });
            }
            case s: {
              let { instanceId: a, time: n } = t.payload;
              return (0, l.mergeIn)(e, [a], { active: !0, complete: !1, start: n });
            }
            case r: {
              let { instanceId: a } = t.payload;
              if (!e[a]) return e;
              let n = {},
                i = Object.keys(e),
                { length: l } = i;
              for (let t = 0; t < l; t++) {
                let l = i[t];
                l !== a && (n[l] = e[l]);
              }
              return n;
            }
            case f: {
              let a = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let i = n[o],
                  d = e[i],
                  c = d.continuous ? g : b;
                a = (0, l.set)(a, i, c(d, t));
              }
              return a;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ixParameters', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: n,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: l,
        } = a(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case n:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case l: {
              let { key: a, value: n } = t.payload;
              return (e[a] = n), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let n = a(9516),
        i = a(4609),
        l = a(628),
        o = a(5862),
        d = a(9468),
        c = a(7718),
        s = a(1540),
        { ixElements: r } = d.IX2ElementsReducer,
        f = (0, n.combineReducers)({
          ixData: i.ixData,
          ixRequest: l.ixRequest,
          ixSession: o.ixSession,
          ixElements: r,
          ixInstances: c.ixInstances,
          ixParameters: s.ixParameters,
        });
    },
    628: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ixRequest', {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let n = a(7087),
        i = a(1185),
        {
          IX2_PREVIEW_REQUESTED: l,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: d,
          IX2_CLEAR_REQUESTED: c,
        } = n.IX2EngineActionTypes,
        s = { preview: {}, playback: {}, stop: {}, clear: {} },
        r = Object.create(null, {
          [l]: { value: 'preview' },
          [o]: { value: 'playback' },
          [d]: { value: 'stop' },
          [c]: { value: 'clear' },
        }),
        f = (e = s, t) => {
          if (t.type in r) {
            let a = [r[t.type]];
            return (0, i.setIn)(e, [a], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ixSession', {
          enumerable: !0,
          get: function () {
            return T;
          },
        });
      let n = a(7087),
        i = a(1185),
        {
          IX2_SESSION_INITIALIZED: l,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: d,
          IX2_SESSION_STOPPED: c,
          IX2_EVENT_LISTENER_ADDED: s,
          IX2_EVENT_STATE_CHANGED: r,
          IX2_ANIMATION_FRAME_CHANGED: f,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: u,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: I,
        } = n.IX2EngineActionTypes,
        E = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        T = (e = E, t) => {
          switch (t.type) {
            case l: {
              let { hasBoundaryNodes: a, reducedMotion: n } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: a, reducedMotion: n });
            }
            case o:
              return (0, i.set)(e, 'active', !0);
            case d: {
              let {
                payload: { step: a = 20 },
              } = t;
              return (0, i.set)(e, 'tick', e.tick + a);
            }
            case c:
              return E;
            case f: {
              let {
                payload: { now: a },
              } = t;
              return (0, i.set)(e, 'tick', a);
            }
            case s: {
              let a = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, 'eventListeners', a);
            }
            case r: {
              let { stateKey: a, newState: n } = t.payload;
              return (0, i.setIn)(e, ['eventState', a], n);
            }
            case u: {
              let { actionListId: a, isPlaying: n } = t.payload;
              return (0, i.setIn)(e, ['playbackState', a], n);
            }
            case p: {
              let { width: a, mediaQueries: n } = t.payload,
                l = n.length,
                o = null;
              for (let e = 0; e < l; e++) {
                let { key: t, min: i, max: l } = n[e];
                if (a >= i && a <= l) {
                  o = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: a, mediaQueryKey: o });
            }
            case I:
              return (0, i.set)(e, 'hasDefinedMediaQueries', !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = {
        clearPlugin: function () {
          return r;
        },
        createPluginInstance: function () {
          return c;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return s;
        },
      };
      for (var n in a) Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = (e) => e.value,
        l = (e, t) => {
          if ('auto' !== t.config.duration) return null;
          let a = parseFloat(e.getAttribute('data-duration'));
          return a > 0 ? 1e3 * a : 1e3 * parseFloat(e.getAttribute('data-default-duration'));
        },
        o = (e) => e || { value: 0 },
        d = (e) => ({ value: e.value }),
        c = (e) => {
          let t = window.Webflow.require('lottie');
          if (!t) return null;
          let a = t.createInstance(e);
          return a.stop(), a.setSubframe(!0), a;
        },
        s = (e, t, a) => {
          if (!e) return;
          let n = t[a.actionTypeId].value / 100;
          e.goToFrame(e.frames * n);
        },
        r = (e) => {
          let t = window.Webflow.require('lottie');
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = {
        clearPlugin: function () {
          return I;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var n in a) Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = '--wf-rive-fit',
        l = '--wf-rive-alignment',
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        d = () => window.Webflow.require('rive'),
        c = (e, t) => e.value.inputs[t],
        s = () => null,
        r = (e, t) => {
          if (e) return e;
          let a = {},
            { inputs: n = {} } = t.config.value;
          for (let e in n) null == n[e] && (a[e] = 0);
          return a;
        },
        f = (e) => e.value.inputs ?? {},
        u = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let a = t?.config?.target?.pluginElement;
          return a ? o(a) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, a) => {
          let n = d();
          if (!n) return;
          let o = n.getInstance(e),
            c = n.rive.StateMachineInputType,
            { name: s, inputs: r = {} } = a.config.value || {};
          function f(e) {
            if (e.loaded) a();
            else {
              let t = () => {
                a(), e?.off('load', t);
              };
              e?.on('load', t);
            }
            function a() {
              let a = e.stateMachineInputs(s);
              if (null != a) {
                if ((e.isPlaying || e.play(s, !1), i in r || l in r)) {
                  let t = e.layout,
                    a = r[i] ?? t.fit,
                    n = r[l] ?? t.alignment;
                  (a !== t.fit || n !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: a, alignment: n }));
                }
                for (let e in r) {
                  if (e === i || e === l) continue;
                  let n = a.find((t) => t.name === e);
                  if (null != n)
                    switch (n.type) {
                      case c.Boolean:
                        null != r[e] && (n.value = !!r[e]);
                        break;
                      case c.Number: {
                        let a = t[e];
                        null != a && (n.value = a);
                        break;
                      }
                      case c.Trigger:
                        r[e] && n.fire();
                    }
                }
              }
            }
          }
          o?.rive ? f(o.rive) : n.setLoadHandler(e, f);
        },
        I = (e, t) => null;
    },
    2866: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = {
        clearPlugin: function () {
          return I;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return d;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var n in a) Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        l = () => window.Webflow.require('spline'),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        d = (e, t) => e.value[t],
        c = () => null,
        s = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        r = (e, t) => {
          let a = Object.keys(t.config.value);
          if (e) {
            let t = o(a, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = s[t]), e), e) : e;
          }
          return a.reduce((e, t) => ((e[t] = s[t]), e), {});
        },
        f = (e) => e.value,
        u = (e, t) => {
          let a = t?.config?.target?.pluginElement;
          return a ? i(a) : null;
        },
        p = (e, t, a) => {
          let n = l();
          if (!n) return;
          let i = n.getInstance(e),
            o = a.config.target.objectId,
            d = (e) => {
              if (!e) throw Error('Invalid spline app passed to renderSpline');
              let a = o && e.findObjectById(o);
              if (!a) return;
              let { PLUGIN_SPLINE: n } = t;
              null != n.positionX && (a.position.x = n.positionX),
                null != n.positionY && (a.position.y = n.positionY),
                null != n.positionZ && (a.position.z = n.positionZ),
                null != n.rotationX && (a.rotation.x = n.rotationX),
                null != n.rotationY && (a.rotation.y = n.rotationY),
                null != n.rotationZ && (a.rotation.z = n.rotationZ),
                null != n.scaleX && (a.scale.x = n.scaleX),
                null != n.scaleY && (a.scale.y = n.scaleY),
                null != n.scaleZ && (a.scale.z = n.scaleZ);
            };
          i ? d(i.spline) : n.setLoadHandler(e, d);
        },
        I = () => null;
    },
    1407: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return r;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return c;
        },
        renderPlugin: function () {
          return u;
        },
      };
      for (var i in n) Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let l = a(380),
        o = (e, t) => e.value[t],
        d = () => null,
        c = (e, t) => {
          if (e) return e;
          let a = t.config.value,
            n = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(n);
          return null != a.size
            ? { size: parseInt(i, 10) }
            : '%' === a.unit || '-' === a.unit
            ? { size: parseFloat(i) }
            : null != a.red && null != a.green && null != a.blue
            ? (0, l.normalizeColor)(i)
            : void 0;
        },
        s = (e) => e.value,
        r = () => null,
        f = {
          color: {
            match: ({ red: e, green: t, blue: a, alpha: n }) =>
              [e, t, a, n].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: a, alpha: n }) => `rgba(${e}, ${t}, ${a}, ${n})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ('-' === t ? e : `${e}${t}`),
          },
        },
        u = (e, t, a) => {
          let {
              target: { objectId: n },
              value: { unit: i },
            } = a.config,
            l = t.PLUGIN_VARIABLE,
            o = Object.values(f).find((e) => e.match(l, i));
          o && document.documentElement.style.setProperty(n, o.getValue(l, i));
        },
        p = (e, t) => {
          let a = t.config.target.objectId;
          document.documentElement.style.removeProperty(a);
        };
    },
    3690: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'pluginMethodMap', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = a(7087),
        i = s(a(7377)),
        l = s(a(2866)),
        o = s(a(2570)),
        d = s(a(1407));
      function c(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (c = function (e) {
          return e ? a : t;
        })(e);
      }
      function s(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
        var a = c(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var l in e)
          if ('default' !== l && Object.prototype.hasOwnProperty.call(e, l)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
            o && (o.get || o.set) ? Object.defineProperty(n, l, o) : (n[l] = e[l]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
      let r = new Map([
        [n.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [n.ActionTypeConsts.PLUGIN_SPLINE, { ...l }],
        [n.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [n.ActionTypeConsts.PLUGIN_VARIABLE, { ...d }],
      ]);
    },
    8023: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return b;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return I;
        },
        IX2_CLEAR_REQUESTED: function () {
          return f;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return g;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return u;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return T;
        },
        IX2_INSTANCE_REMOVED: function () {
          return m;
        },
        IX2_INSTANCE_STARTED: function () {
          return y;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return E;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return s;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return c;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return l;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return d;
        },
        IX2_STOP_REQUESTED: function () {
          return r;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return L;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O;
        },
      };
      for (var n in a) Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = 'IX2_RAW_DATA_IMPORTED',
        l = 'IX2_SESSION_INITIALIZED',
        o = 'IX2_SESSION_STARTED',
        d = 'IX2_SESSION_STOPPED',
        c = 'IX2_PREVIEW_REQUESTED',
        s = 'IX2_PLAYBACK_REQUESTED',
        r = 'IX2_STOP_REQUESTED',
        f = 'IX2_CLEAR_REQUESTED',
        u = 'IX2_EVENT_LISTENER_ADDED',
        p = 'IX2_EVENT_STATE_CHANGED',
        I = 'IX2_ANIMATION_FRAME_CHANGED',
        E = 'IX2_PARAMETER_CHANGED',
        T = 'IX2_INSTANCE_ADDED',
        y = 'IX2_INSTANCE_STARTED',
        m = 'IX2_INSTANCE_REMOVED',
        g = 'IX2_ELEMENT_STATE_CHANGED',
        b = 'IX2_ACTION_LIST_PLAYBACK_CHANGED',
        O = 'IX2_VIEWPORT_WIDTH_CHANGED',
        v = 'IX2_MEDIA_QUERIES_DEFINED',
        L = 'IX2_TEST_FRAME_RENDERED';
    },
    2686: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return X;
        },
        BACKGROUND: function () {
          return G;
        },
        BACKGROUND_COLOR: function () {
          return B;
        },
        BAR_DELIMITER: function () {
          return j;
        },
        BORDER_COLOR: function () {
          return F;
        },
        BOUNDARY_SELECTOR: function () {
          return c;
        },
        CHILDREN: function () {
          return z;
        },
        COLON_DELIMITER: function () {
          return Y;
        },
        COLOR: function () {
          return D;
        },
        COMMA_DELIMITER: function () {
          return H;
        },
        CONFIG_UNIT: function () {
          return T;
        },
        CONFIG_VALUE: function () {
          return u;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return s;
        },
        CONFIG_Y_UNIT: function () {
          return I;
        },
        CONFIG_Y_VALUE: function () {
          return r;
        },
        CONFIG_Z_UNIT: function () {
          return E;
        },
        CONFIG_Z_VALUE: function () {
          return f;
        },
        DISPLAY: function () {
          return P;
        },
        FILTER: function () {
          return V;
        },
        FLEX: function () {
          return Q;
        },
        FONT_VARIATION_SETTINGS: function () {
          return U;
        },
        HEIGHT: function () {
          return x;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return q;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return k;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return en;
        },
        RENDER_PLUGIN: function () {
          return el;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return ea;
        },
        ROTATE_X: function () {
          return N;
        },
        ROTATE_Y: function () {
          return S;
        },
        ROTATE_Z: function () {
          return A;
        },
        SCALE_3D: function () {
          return R;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return L;
        },
        SCALE_Z: function () {
          return _;
        },
        SIBLINGS: function () {
          return $;
        },
        SKEW: function () {
          return C;
        },
        SKEW_X: function () {
          return h;
        },
        SKEW_Y: function () {
          return M;
        },
        TRANSFORM: function () {
          return y;
        },
        TRANSLATE_3D: function () {
          return O;
        },
        TRANSLATE_X: function () {
          return m;
        },
        TRANSLATE_Y: function () {
          return g;
        },
        TRANSLATE_Z: function () {
          return b;
        },
        WF_PAGE: function () {
          return l;
        },
        WIDTH: function () {
          return w;
        },
        WILL_CHANGE: function () {
          return W;
        },
        W_MOD_IX: function () {
          return d;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var n in a) Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = '|',
        l = 'data-wf-page',
        o = 'w-mod-js',
        d = 'w-mod-ix',
        c = '.w-dyn-item',
        s = 'xValue',
        r = 'yValue',
        f = 'zValue',
        u = 'value',
        p = 'xUnit',
        I = 'yUnit',
        E = 'zUnit',
        T = 'unit',
        y = 'transform',
        m = 'translateX',
        g = 'translateY',
        b = 'translateZ',
        O = 'translate3d',
        v = 'scaleX',
        L = 'scaleY',
        _ = 'scaleZ',
        R = 'scale3d',
        N = 'rotateX',
        S = 'rotateY',
        A = 'rotateZ',
        C = 'skew',
        h = 'skewX',
        M = 'skewY',
        k = 'opacity',
        V = 'filter',
        U = 'font-variation-settings',
        w = 'width',
        x = 'height',
        B = 'backgroundColor',
        G = 'background',
        F = 'borderColor',
        D = 'color',
        P = 'display',
        Q = 'flex',
        W = 'willChange',
        X = 'AUTO',
        H = ',',
        Y = ':',
        j = '|',
        z = 'CHILDREN',
        q = 'IMMEDIATE_CHILDREN',
        $ = 'SIBLINGS',
        K = 'PARENT',
        Z = 'preserve-3d',
        J = 'HTML_ELEMENT',
        ee = 'PLAIN_OBJECT',
        et = 'ABSTRACT_NODE',
        ea = 'RENDER_TRANSFORM',
        en = 'RENDER_GENERAL',
        ei = 'RENDER_STYLE',
        el = 'RENDER_PLUGIN';
    },
    262: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = {
        ActionAppliesTo: function () {
          return l;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var n in a) Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = {
          TRANSFORM_MOVE: 'TRANSFORM_MOVE',
          TRANSFORM_SCALE: 'TRANSFORM_SCALE',
          TRANSFORM_ROTATE: 'TRANSFORM_ROTATE',
          TRANSFORM_SKEW: 'TRANSFORM_SKEW',
          STYLE_OPACITY: 'STYLE_OPACITY',
          STYLE_SIZE: 'STYLE_SIZE',
          STYLE_FILTER: 'STYLE_FILTER',
          STYLE_FONT_VARIATION: 'STYLE_FONT_VARIATION',
          STYLE_BACKGROUND_COLOR: 'STYLE_BACKGROUND_COLOR',
          STYLE_BORDER: 'STYLE_BORDER',
          STYLE_TEXT_COLOR: 'STYLE_TEXT_COLOR',
          OBJECT_VALUE: 'OBJECT_VALUE',
          PLUGIN_LOTTIE: 'PLUGIN_LOTTIE',
          PLUGIN_SPLINE: 'PLUGIN_SPLINE',
          PLUGIN_RIVE: 'PLUGIN_RIVE',
          PLUGIN_VARIABLE: 'PLUGIN_VARIABLE',
          GENERAL_DISPLAY: 'GENERAL_DISPLAY',
          GENERAL_START_ACTION: 'GENERAL_START_ACTION',
          GENERAL_CONTINUOUS_ACTION: 'GENERAL_CONTINUOUS_ACTION',
          GENERAL_COMBO_CLASS: 'GENERAL_COMBO_CLASS',
          GENERAL_STOP_ACTION: 'GENERAL_STOP_ACTION',
          GENERAL_LOOP: 'GENERAL_LOOP',
          STYLE_BOX_SHADOW: 'STYLE_BOX_SHADOW',
        },
        l = {
          ELEMENT: 'ELEMENT',
          ELEMENT_CLASS: 'ELEMENT_CLASS',
          TRIGGER_ELEMENT: 'TRIGGER_ELEMENT',
        };
    },
    7087: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return d;
        },
        IX2EngineConstants: function () {
          return c;
        },
        QuickEffectIds: function () {
          return l.QuickEffectIds;
        },
      };
      for (var i in n) Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let l = s(a(1833), t),
        o = s(a(262), t);
      s(a(8704), t), s(a(3213), t);
      let d = f(a(8023)),
        c = f(a(2686));
      function s(e, t) {
        return (
          Object.keys(e).forEach(function (a) {
            'default' === a ||
              Object.prototype.hasOwnProperty.call(t, a) ||
              Object.defineProperty(t, a, {
                enumerable: !0,
                get: function () {
                  return e[a];
                },
              });
          }),
          e
        );
      }
      function r(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (r = function (e) {
          return e ? a : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
        var a = r(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var l in e)
          if ('default' !== l && Object.prototype.hasOwnProperty.call(e, l)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
            o && (o.get || o.set) ? Object.defineProperty(n, l, o) : (n[l] = e[l]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
    },
    3213: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ReducedMotionTypes', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let {
          TRANSFORM_MOVE: n,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: l,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: d,
          STYLE_FILTER: c,
          STYLE_FONT_VARIATION: s,
        } = a(262).ActionTypeConsts,
        r = { [n]: !0, [i]: !0, [l]: !0, [o]: !0, [d]: !0, [c]: !0, [s]: !0 };
    },
    1833: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = {
        EventAppliesTo: function () {
          return l;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return d;
        },
        EventLimitAffectedElements: function () {
          return c;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return r;
        },
        QuickEffectIds: function () {
          return s;
        },
      };
      for (var n in a) Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = {
          NAVBAR_OPEN: 'NAVBAR_OPEN',
          NAVBAR_CLOSE: 'NAVBAR_CLOSE',
          TAB_ACTIVE: 'TAB_ACTIVE',
          TAB_INACTIVE: 'TAB_INACTIVE',
          SLIDER_ACTIVE: 'SLIDER_ACTIVE',
          SLIDER_INACTIVE: 'SLIDER_INACTIVE',
          DROPDOWN_OPEN: 'DROPDOWN_OPEN',
          DROPDOWN_CLOSE: 'DROPDOWN_CLOSE',
          MOUSE_CLICK: 'MOUSE_CLICK',
          MOUSE_SECOND_CLICK: 'MOUSE_SECOND_CLICK',
          MOUSE_DOWN: 'MOUSE_DOWN',
          MOUSE_UP: 'MOUSE_UP',
          MOUSE_OVER: 'MOUSE_OVER',
          MOUSE_OUT: 'MOUSE_OUT',
          MOUSE_MOVE: 'MOUSE_MOVE',
          MOUSE_MOVE_IN_VIEWPORT: 'MOUSE_MOVE_IN_VIEWPORT',
          SCROLL_INTO_VIEW: 'SCROLL_INTO_VIEW',
          SCROLL_OUT_OF_VIEW: 'SCROLL_OUT_OF_VIEW',
          SCROLLING_IN_VIEW: 'SCROLLING_IN_VIEW',
          ECOMMERCE_CART_OPEN: 'ECOMMERCE_CART_OPEN',
          ECOMMERCE_CART_CLOSE: 'ECOMMERCE_CART_CLOSE',
          PAGE_START: 'PAGE_START',
          PAGE_FINISH: 'PAGE_FINISH',
          PAGE_SCROLL_UP: 'PAGE_SCROLL_UP',
          PAGE_SCROLL_DOWN: 'PAGE_SCROLL_DOWN',
          PAGE_SCROLL: 'PAGE_SCROLL',
        },
        l = { ELEMENT: 'ELEMENT', CLASS: 'CLASS', PAGE: 'PAGE' },
        o = { ELEMENT: 'ELEMENT', VIEWPORT: 'VIEWPORT' },
        d = { X_AXIS: 'X_AXIS', Y_AXIS: 'Y_AXIS' },
        c = {
          CHILDREN: 'CHILDREN',
          SIBLINGS: 'SIBLINGS',
          IMMEDIATE_CHILDREN: 'IMMEDIATE_CHILDREN',
        },
        s = {
          FADE_EFFECT: 'FADE_EFFECT',
          SLIDE_EFFECT: 'SLIDE_EFFECT',
          GROW_EFFECT: 'GROW_EFFECT',
          SHRINK_EFFECT: 'SHRINK_EFFECT',
          SPIN_EFFECT: 'SPIN_EFFECT',
          FLY_EFFECT: 'FLY_EFFECT',
          POP_EFFECT: 'POP_EFFECT',
          FLIP_EFFECT: 'FLIP_EFFECT',
          JIGGLE_EFFECT: 'JIGGLE_EFFECT',
          PULSE_EFFECT: 'PULSE_EFFECT',
          DROP_EFFECT: 'DROP_EFFECT',
          BLINK_EFFECT: 'BLINK_EFFECT',
          BOUNCE_EFFECT: 'BOUNCE_EFFECT',
          FLIP_LEFT_TO_RIGHT_EFFECT: 'FLIP_LEFT_TO_RIGHT_EFFECT',
          FLIP_RIGHT_TO_LEFT_EFFECT: 'FLIP_RIGHT_TO_LEFT_EFFECT',
          RUBBER_BAND_EFFECT: 'RUBBER_BAND_EFFECT',
          JELLO_EFFECT: 'JELLO_EFFECT',
          GROW_BIG_EFFECT: 'GROW_BIG_EFFECT',
          SHRINK_BIG_EFFECT: 'SHRINK_BIG_EFFECT',
          PLUGIN_LOTTIE_EFFECT: 'PLUGIN_LOTTIE_EFFECT',
        },
        r = {
          LEFT: 'LEFT',
          RIGHT: 'RIGHT',
          BOTTOM: 'BOTTOM',
          TOP: 'TOP',
          BOTTOM_LEFT: 'BOTTOM_LEFT',
          BOTTOM_RIGHT: 'BOTTOM_RIGHT',
          TOP_RIGHT: 'TOP_RIGHT',
          TOP_LEFT: 'TOP_LEFT',
          CLOCKWISE: 'CLOCKWISE',
          COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE',
        };
    },
    8704: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'InteractionTypeConsts', {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = {
        MOUSE_CLICK_INTERACTION: 'MOUSE_CLICK_INTERACTION',
        MOUSE_HOVER_INTERACTION: 'MOUSE_HOVER_INTERACTION',
        MOUSE_MOVE_INTERACTION: 'MOUSE_MOVE_INTERACTION',
        SCROLL_INTO_VIEW_INTERACTION: 'SCROLL_INTO_VIEW_INTERACTION',
        SCROLLING_IN_VIEW_INTERACTION: 'SCROLLING_IN_VIEW_INTERACTION',
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: 'MOUSE_MOVE_IN_VIEWPORT_INTERACTION',
        PAGE_IS_SCROLLING_INTERACTION: 'PAGE_IS_SCROLLING_INTERACTION',
        PAGE_LOAD_INTERACTION: 'PAGE_LOAD_INTERACTION',
        PAGE_SCROLLED_INTERACTION: 'PAGE_SCROLLED_INTERACTION',
        NAVBAR_INTERACTION: 'NAVBAR_INTERACTION',
        DROPDOWN_INTERACTION: 'DROPDOWN_INTERACTION',
        ECOMMERCE_CART_INTERACTION: 'ECOMMERCE_CART_INTERACTION',
        TAB_INTERACTION: 'TAB_INTERACTION',
        SLIDER_INTERACTION: 'SLIDER_INTERACTION',
      };
    },
    380: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'normalizeColor', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let a = {
        aliceblue: '#F0F8FF',
        antiquewhite: '#FAEBD7',
        aqua: '#00FFFF',
        aquamarine: '#7FFFD4',
        azure: '#F0FFFF',
        beige: '#F5F5DC',
        bisque: '#FFE4C4',
        black: '#000000',
        blanchedalmond: '#FFEBCD',
        blue: '#0000FF',
        blueviolet: '#8A2BE2',
        brown: '#A52A2A',
        burlywood: '#DEB887',
        cadetblue: '#5F9EA0',
        chartreuse: '#7FFF00',
        chocolate: '#D2691E',
        coral: '#FF7F50',
        cornflowerblue: '#6495ED',
        cornsilk: '#FFF8DC',
        crimson: '#DC143C',
        cyan: '#00FFFF',
        darkblue: '#00008B',
        darkcyan: '#008B8B',
        darkgoldenrod: '#B8860B',
        darkgray: '#A9A9A9',
        darkgreen: '#006400',
        darkgrey: '#A9A9A9',
        darkkhaki: '#BDB76B',
        darkmagenta: '#8B008B',
        darkolivegreen: '#556B2F',
        darkorange: '#FF8C00',
        darkorchid: '#9932CC',
        darkred: '#8B0000',
        darksalmon: '#E9967A',
        darkseagreen: '#8FBC8F',
        darkslateblue: '#483D8B',
        darkslategray: '#2F4F4F',
        darkslategrey: '#2F4F4F',
        darkturquoise: '#00CED1',
        darkviolet: '#9400D3',
        deeppink: '#FF1493',
        deepskyblue: '#00BFFF',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1E90FF',
        firebrick: '#B22222',
        floralwhite: '#FFFAF0',
        forestgreen: '#228B22',
        fuchsia: '#FF00FF',
        gainsboro: '#DCDCDC',
        ghostwhite: '#F8F8FF',
        gold: '#FFD700',
        goldenrod: '#DAA520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#ADFF2F',
        grey: '#808080',
        honeydew: '#F0FFF0',
        hotpink: '#FF69B4',
        indianred: '#CD5C5C',
        indigo: '#4B0082',
        ivory: '#FFFFF0',
        khaki: '#F0E68C',
        lavender: '#E6E6FA',
        lavenderblush: '#FFF0F5',
        lawngreen: '#7CFC00',
        lemonchiffon: '#FFFACD',
        lightblue: '#ADD8E6',
        lightcoral: '#F08080',
        lightcyan: '#E0FFFF',
        lightgoldenrodyellow: '#FAFAD2',
        lightgray: '#D3D3D3',
        lightgreen: '#90EE90',
        lightgrey: '#D3D3D3',
        lightpink: '#FFB6C1',
        lightsalmon: '#FFA07A',
        lightseagreen: '#20B2AA',
        lightskyblue: '#87CEFA',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#B0C4DE',
        lightyellow: '#FFFFE0',
        lime: '#00FF00',
        limegreen: '#32CD32',
        linen: '#FAF0E6',
        magenta: '#FF00FF',
        maroon: '#800000',
        mediumaquamarine: '#66CDAA',
        mediumblue: '#0000CD',
        mediumorchid: '#BA55D3',
        mediumpurple: '#9370DB',
        mediumseagreen: '#3CB371',
        mediumslateblue: '#7B68EE',
        mediumspringgreen: '#00FA9A',
        mediumturquoise: '#48D1CC',
        mediumvioletred: '#C71585',
        midnightblue: '#191970',
        mintcream: '#F5FFFA',
        mistyrose: '#FFE4E1',
        moccasin: '#FFE4B5',
        navajowhite: '#FFDEAD',
        navy: '#000080',
        oldlace: '#FDF5E6',
        olive: '#808000',
        olivedrab: '#6B8E23',
        orange: '#FFA500',
        orangered: '#FF4500',
        orchid: '#DA70D6',
        palegoldenrod: '#EEE8AA',
        palegreen: '#98FB98',
        paleturquoise: '#AFEEEE',
        palevioletred: '#DB7093',
        papayawhip: '#FFEFD5',
        peachpuff: '#FFDAB9',
        peru: '#CD853F',
        pink: '#FFC0CB',
        plum: '#DDA0DD',
        powderblue: '#B0E0E6',
        purple: '#800080',
        rebeccapurple: '#663399',
        red: '#FF0000',
        rosybrown: '#BC8F8F',
        royalblue: '#4169E1',
        saddlebrown: '#8B4513',
        salmon: '#FA8072',
        sandybrown: '#F4A460',
        seagreen: '#2E8B57',
        seashell: '#FFF5EE',
        sienna: '#A0522D',
        silver: '#C0C0C0',
        skyblue: '#87CEEB',
        slateblue: '#6A5ACD',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#FFFAFA',
        springgreen: '#00FF7F',
        steelblue: '#4682B4',
        tan: '#D2B48C',
        teal: '#008080',
        thistle: '#D8BFD8',
        tomato: '#FF6347',
        turquoise: '#40E0D0',
        violet: '#EE82EE',
        wheat: '#F5DEB3',
        white: '#FFFFFF',
        whitesmoke: '#F5F5F5',
        yellow: '#FFFF00',
        yellowgreen: '#9ACD32',
      };
      function n(e) {
        let t,
          n,
          i,
          l = 1,
          o = e.replace(/\s/g, '').toLowerCase(),
          d = ('string' == typeof a[o] ? a[o].toLowerCase() : null) || o;
        if (d.startsWith('#')) {
          let e = d.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (n = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (l = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (n = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (l = parseInt(e.substring(6, 8), 16) / 255));
        } else if (d.startsWith('rgba')) {
          let e = d.match(/rgba\(([^)]+)\)/)[1].split(',');
          (t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (l = parseFloat(e[3]));
        } else if (d.startsWith('rgb')) {
          let e = d.match(/rgb\(([^)]+)\)/)[1].split(',');
          (t = parseInt(e[0], 10)), (n = parseInt(e[1], 10)), (i = parseInt(e[2], 10));
        } else if (d.startsWith('hsla')) {
          let e,
            a,
            o,
            c = d.match(/hsla\(([^)]+)\)/)[1].split(','),
            s = parseFloat(c[0]),
            r = parseFloat(c[1].replace('%', '')) / 100,
            f = parseFloat(c[2].replace('%', '')) / 100;
          l = parseFloat(c[3]);
          let u = (1 - Math.abs(2 * f - 1)) * r,
            p = u * (1 - Math.abs(((s / 60) % 2) - 1)),
            I = f - u / 2;
          s >= 0 && s < 60
            ? ((e = u), (a = p), (o = 0))
            : s >= 60 && s < 120
            ? ((e = p), (a = u), (o = 0))
            : s >= 120 && s < 180
            ? ((e = 0), (a = u), (o = p))
            : s >= 180 && s < 240
            ? ((e = 0), (a = p), (o = u))
            : s >= 240 && s < 300
            ? ((e = p), (a = 0), (o = u))
            : ((e = u), (a = 0), (o = p)),
            (t = Math.round((e + I) * 255)),
            (n = Math.round((a + I) * 255)),
            (i = Math.round((o + I) * 255));
        } else if (d.startsWith('hsl')) {
          let e,
            a,
            l,
            o = d.match(/hsl\(([^)]+)\)/)[1].split(','),
            c = parseFloat(o[0]),
            s = parseFloat(o[1].replace('%', '')) / 100,
            r = parseFloat(o[2].replace('%', '')) / 100,
            f = (1 - Math.abs(2 * r - 1)) * s,
            u = f * (1 - Math.abs(((c / 60) % 2) - 1)),
            p = r - f / 2;
          c >= 0 && c < 60
            ? ((e = f), (a = u), (l = 0))
            : c >= 60 && c < 120
            ? ((e = u), (a = f), (l = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (a = f), (l = u))
            : c >= 180 && c < 240
            ? ((e = 0), (a = u), (l = f))
            : c >= 240 && c < 300
            ? ((e = u), (a = 0), (l = f))
            : ((e = f), (a = 0), (l = u)),
            (t = Math.round((e + p) * 255)),
            (n = Math.round((a + p) * 255)),
            (i = Math.round((l + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(i))
          throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
        return { red: t, green: n, blue: i, alpha: l };
      }
    },
    9468: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = {
        IX2BrowserSupport: function () {
          return l;
        },
        IX2EasingUtils: function () {
          return d;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return c;
        },
        IX2VanillaPlugins: function () {
          return s;
        },
        IX2VanillaUtils: function () {
          return r;
        },
      };
      for (var i in n) Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let l = u(a(2662)),
        o = u(a(8686)),
        d = u(a(3767)),
        c = u(a(5861)),
        s = u(a(1799)),
        r = u(a(4124));
      function f(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (f = function (e) {
          return e ? a : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
        var a = f(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var l in e)
          if ('default' !== l && Object.prototype.hasOwnProperty.call(e, l)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
            o && (o.get || o.set) ? Object.defineProperty(n, l, o) : (n[l] = e[l]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
    },
    2662: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n,
        i = {
          ELEMENT_MATCHES: function () {
            return s;
          },
          FLEX_PREFIXED: function () {
            return r;
          },
          IS_BROWSER_ENV: function () {
            return d;
          },
          TRANSFORM_PREFIXED: function () {
            return f;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return c;
          },
        };
      for (var l in i) Object.defineProperty(t, l, { enumerable: !0, get: i[l] });
      let o = (n = a(9777)) && n.__esModule ? n : { default: n },
        d = 'undefined' != typeof window,
        c = (e, t) => (d ? e() : t),
        s = c(() =>
          (0, o.default)(
            [
              'matches',
              'matchesSelector',
              'mozMatchesSelector',
              'msMatchesSelector',
              'oMatchesSelector',
              'webkitMatchesSelector',
            ],
            (e) => e in Element.prototype
          )
        ),
        r = c(() => {
          let e = document.createElement('i'),
            t = ['flex', '-webkit-flex', '-ms-flexbox', '-moz-box', '-webkit-box'];
          try {
            let { length: a } = t;
            for (let n = 0; n < a; n++) {
              let a = t[n];
              if (((e.style.display = a), e.style.display === a)) return a;
            }
            return '';
          } catch (e) {
            return '';
          }
        }, 'flex'),
        f = c(() => {
          let e = document.createElement('i');
          if (null == e.style.transform) {
            let t = ['Webkit', 'Moz', 'ms'],
              { length: a } = t;
            for (let n = 0; n < a; n++) {
              let a = t[n] + 'Transform';
              if (void 0 !== e.style[a]) return a;
            }
          }
          return 'transform';
        }, 'transform'),
        u = f.split('transform')[0],
        p = u ? u + 'TransformStyle' : 'transformStyle';
    },
    3767: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n,
        i = {
          applyEasing: function () {
            return f;
          },
          createBezierEasing: function () {
            return r;
          },
          optimizeFloat: function () {
            return s;
          },
        };
      for (var l in i) Object.defineProperty(t, l, { enumerable: !0, get: i[l] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
          var a = c(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ('default' !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
              o && (o.get || o.set) ? Object.defineProperty(n, l, o) : (n[l] = e[l]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(8686)),
        d = (n = a(1361)) && n.__esModule ? n : { default: n };
      function c(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (c = function (e) {
          return e ? a : t;
        })(e);
      }
      function s(e, t = 5, a = 10) {
        let n = Math.pow(a, t),
          i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function r(e) {
        return (0, d.default)(...e);
      }
      function f(e, t, a) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : a
          ? s(t > 0 ? a(t) : t)
          : s(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n,
        i = {
          bounce: function () {
            return Q;
          },
          bouncePast: function () {
            return W;
          },
          ease: function () {
            return d;
          },
          easeIn: function () {
            return c;
          },
          easeInOut: function () {
            return r;
          },
          easeOut: function () {
            return s;
          },
          inBack: function () {
            return V;
          },
          inCirc: function () {
            return C;
          },
          inCubic: function () {
            return I;
          },
          inElastic: function () {
            return x;
          },
          inExpo: function () {
            return N;
          },
          inOutBack: function () {
            return w;
          },
          inOutCirc: function () {
            return M;
          },
          inOutCubic: function () {
            return T;
          },
          inOutElastic: function () {
            return G;
          },
          inOutExpo: function () {
            return A;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return g;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return R;
          },
          inQuad: function () {
            return f;
          },
          inQuart: function () {
            return y;
          },
          inQuint: function () {
            return b;
          },
          inSine: function () {
            return L;
          },
          outBack: function () {
            return U;
          },
          outBounce: function () {
            return k;
          },
          outCirc: function () {
            return h;
          },
          outCubic: function () {
            return E;
          },
          outElastic: function () {
            return B;
          },
          outExpo: function () {
            return S;
          },
          outQuad: function () {
            return u;
          },
          outQuart: function () {
            return m;
          },
          outQuint: function () {
            return O;
          },
          outSine: function () {
            return _;
          },
          swingFrom: function () {
            return D;
          },
          swingFromTo: function () {
            return F;
          },
          swingTo: function () {
            return P;
          },
        };
      for (var l in i) Object.defineProperty(t, l, { enumerable: !0, get: i[l] });
      let o = (n = a(1361)) && n.__esModule ? n : { default: n },
        d = (0, o.default)(0.25, 0.1, 0.25, 1),
        c = (0, o.default)(0.42, 0, 1, 1),
        s = (0, o.default)(0, 0, 0.58, 1),
        r = (0, o.default)(0.42, 0, 0.58, 1);
      function f(e) {
        return Math.pow(e, 2);
      }
      function u(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
      }
      function I(e) {
        return Math.pow(e, 3);
      }
      function E(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function T(e) {
        return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function y(e) {
        return Math.pow(e, 4);
      }
      function m(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function g(e) {
        return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function b(e) {
        return Math.pow(e, 5);
      }
      function O(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function L(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function _(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function R(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function N(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function S(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function A(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function C(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function h(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function M(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function k(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function V(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function U(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function w(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function x(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (a || (a = 0.3),
            n < 1 ? ((n = 1), (t = a / 4)) : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * Math.PI * (e - t)) / a)));
      }
      function B(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (a || (a = 0.3),
            n < 1 ? ((n = 1), (t = a / 4)) : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            n * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / a) + 1);
      }
      function G(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (a || (a = 0.3 * 1.5),
            n < 1 ? ((n = 1), (t = a / 4)) : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            e < 1)
          ? -0.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * Math.PI * (e - t)) / a))
          : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((2 * Math.PI * (e - t)) / a) * 0.5 + 1;
      }
      function F(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function D(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function P(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function Q(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function W(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return s;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return f;
        },
        getPluginOrigin: function () {
          return r;
        },
        isPluginType: function () {
          return d;
        },
        renderPlugin: function () {
          return I;
        },
      };
      for (var i in n) Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let l = a(2662),
        o = a(3690);
      function d(e) {
        return o.pluginMethodMap.has(e);
      }
      let c = (e) => (t) => {
          if (!l.IS_BROWSER_ENV) return () => null;
          let a = o.pluginMethodMap.get(t);
          if (!a) throw Error(`IX2 no plugin configured for: ${t}`);
          let n = a[e];
          if (!n) throw Error(`IX2 invalid plugin method: ${e}`);
          return n;
        },
        s = c('getPluginConfig'),
        r = c('getPluginOrigin'),
        f = c('getPluginDuration'),
        u = c('getPluginDestination'),
        p = c('createPluginInstance'),
        I = c('renderPlugin'),
        E = c('clearPlugin');
    },
    4124: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = {
        cleanupHTMLElement: function () {
          return eH;
        },
        clearAllStyles: function () {
          return eQ;
        },
        clearObjectCache: function () {
          return ef;
        },
        getActionListProgress: function () {
          return eq;
        },
        getAffectedElements: function () {
          return eb;
        },
        getComputedStyle: function () {
          return eO;
        },
        getDestinationValues: function () {
          return eC;
        },
        getElementId: function () {
          return eE;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eR;
        },
        getItemConfigByKey: function () {
          return eA;
        },
        getMaxDurationItemIndex: function () {
          return ez;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eh;
        },
        getStyleProp: function () {
          return eM;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return em;
        },
        reduceListToGroup: function () {
          return e$;
        },
        reifyState: function () {
          return eT;
        },
        renderHTMLElement: function () {
          return ek;
        },
        shallowEqual: function () {
          return r.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in n) Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let l = E(a(4075)),
        o = E(a(1455)),
        d = E(a(5720)),
        c = a(1185),
        s = a(7087),
        r = E(a(7164)),
        f = a(3767),
        u = a(380),
        p = a(1799),
        I = a(2662);
      function E(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: T,
          TRANSFORM: y,
          TRANSLATE_3D: m,
          SCALE_3D: g,
          ROTATE_X: b,
          ROTATE_Y: O,
          ROTATE_Z: v,
          SKEW: L,
          PRESERVE_3D: _,
          FLEX: R,
          OPACITY: N,
          FILTER: S,
          FONT_VARIATION_SETTINGS: A,
          WIDTH: C,
          HEIGHT: h,
          BACKGROUND_COLOR: M,
          BORDER_COLOR: k,
          COLOR: V,
          CHILDREN: U,
          IMMEDIATE_CHILDREN: w,
          SIBLINGS: x,
          PARENT: B,
          DISPLAY: G,
          WILL_CHANGE: F,
          AUTO: D,
          COMMA_DELIMITER: P,
          COLON_DELIMITER: Q,
          BAR_DELIMITER: W,
          RENDER_TRANSFORM: X,
          RENDER_GENERAL: H,
          RENDER_STYLE: Y,
          RENDER_PLUGIN: j,
        } = s.IX2EngineConstants,
        {
          TRANSFORM_MOVE: z,
          TRANSFORM_SCALE: q,
          TRANSFORM_ROTATE: $,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: ea,
          STYLE_BORDER: en,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: el,
          OBJECT_VALUE: eo,
        } = s.ActionTypeConsts,
        ed = (e) => e.trim(),
        ec = Object.freeze({ [ea]: M, [en]: k, [ei]: V }),
        es = Object.freeze({
          [I.TRANSFORM_PREFIXED]: y,
          [M]: T,
          [N]: N,
          [S]: S,
          [C]: C,
          [h]: h,
          [A]: A,
        }),
        er = new Map();
      function ef() {
        er.clear();
      }
      let eu = 1;
      function ep() {
        return 'i' + eu++;
      }
      let eI = 1;
      function eE(e, t) {
        for (let a in e) {
          let n = e[a];
          if (n && n.ref === t) return n.id;
        }
        return 'e' + eI++;
      }
      function eT({ events: e, actionLists: t, site: a } = {}) {
        let n = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: a } = t;
              return e[a] || (e[a] = {}), (e[a][t.id] = t), e;
            },
            {}
          ),
          i = a && a.mediaQueries,
          l = [];
        return (
          i
            ? (l = i.map((e) => e.key))
            : ((i = []), console.warn('IX2 missing mediaQueries in site data')),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: n,
              mediaQueries: i,
              mediaQueryKeys: l,
            },
          }
        );
      }
      let ey = (e, t) => e === t;
      function em({ store: e, select: t, onChange: a, comparator: n = ey }) {
        let { getState: i, subscribe: l } = e,
          o = l(function () {
            let l = t(i());
            if (null == l) return void o();
            n(l, d) || a((d = l), e);
          }),
          d = t(i());
        return o;
      }
      function eg(e) {
        let t = typeof e;
        if ('string' === t) return { id: e };
        if (null != e && 'object' === t) {
          let {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: l,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: l,
            useEventTarget: o,
          };
        }
        return {};
      }
      function eb({ config: e, event: t, eventTarget: a, elementRoot: n, elementApi: i }) {
        let l, o, d;
        if (!i) throw Error('IX2 missing elementApi');
        let { targets: c } = e;
        if (Array.isArray(c) && c.length > 0)
          return c.reduce(
            (e, l) =>
              e.concat(
                eb({
                  config: { target: l },
                  event: t,
                  eventTarget: a,
                  elementRoot: n,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: r,
            getQuerySelector: f,
            queryDocument: u,
            getChildElements: p,
            getSiblingElements: E,
            matchSelector: T,
            elementContains: y,
            isSiblingNode: m,
          } = i,
          { target: g } = e;
        if (!g) return [];
        let {
          id: b,
          objectId: O,
          selector: v,
          selectorGuids: L,
          appliesTo: _,
          useEventTarget: R,
        } = eg(g);
        if (O) return [er.has(O) ? er.get(O) : er.set(O, {}).get(O)];
        if (_ === s.EventAppliesTo.PAGE) {
          let e = r(b);
          return e ? [e] : [];
        }
        let N = (t?.action?.config?.affectedElements ?? {})[b || v] || {},
          S = !!(N.id || N.selector),
          A = t && f(eg(t.target));
        if (
          (S
            ? ((l = N.limitAffectedElements), (o = A), (d = f(N)))
            : (o = d = f({ id: b, selector: v, selectorGuids: L })),
          t && R)
        ) {
          let e = a && (d || !0 === R) ? [a] : u(A);
          if (d) {
            if (R === B) return u(d).filter((t) => e.some((e) => y(t, e)));
            if (R === U) return u(d).filter((t) => e.some((e) => y(e, t)));
            if (R === x) return u(d).filter((t) => e.some((e) => m(e, t)));
          }
          return e;
        }
        return null == o || null == d
          ? []
          : I.IS_BROWSER_ENV && n
          ? u(d).filter((e) => n.contains(e))
          : l === U
          ? u(o, d)
          : l === w
          ? p(u(o)).filter(T(d))
          : l === x
          ? E(u(o)).filter(T(d))
          : u(d);
      }
      function eO({ element: e, actionItem: t }) {
        if (!I.IS_BROWSER_ENV) return {};
        let { actionTypeId: a } = t;
        switch (a) {
          case et:
          case ea:
          case en:
          case ei:
          case el:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let ev = /px/,
        eL = (e, t) =>
          t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eU[t.type]), e), e || {}),
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = ew[t.type] || t.defaultValue || 0), e),
            e || {}
          );
      function eR(e, t = {}, a = {}, n, i) {
        let { getStyle: o } = i,
          { actionTypeId: d } = n;
        if ((0, p.isPluginType)(d)) return (0, p.getPluginOrigin)(d)(t[d], n);
        switch (n.actionTypeId) {
          case z:
          case q:
          case $:
          case K:
            return t[n.actionTypeId] || eV[n.actionTypeId];
          case J:
            return eL(t[n.actionTypeId], n.config.filters);
          case ee:
            return e_(t[n.actionTypeId], n.config.fontVariations);
          case Z:
            return { value: (0, l.default)(parseFloat(o(e, N)), 1) };
          case et: {
            let t,
              i = o(e, C),
              d = o(e, h);
            return {
              widthValue:
                n.config.widthUnit === D
                  ? ev.test(i)
                    ? parseFloat(i)
                    : parseFloat(a.width)
                  : (0, l.default)(parseFloat(i), parseFloat(a.width)),
              heightValue:
                n.config.heightUnit === D
                  ? ev.test(d)
                    ? parseFloat(d)
                    : parseFloat(a.height)
                  : (0, l.default)(parseFloat(d), parseFloat(a.height)),
            };
          }
          case ea:
          case en:
          case ei:
            return (function ({ element: e, actionTypeId: t, computedStyle: a, getStyle: n }) {
              let i = ec[t],
                o = n(e, i),
                d = (function (e, t) {
                  let a = e.exec(t);
                  return a ? a[1] : '';
                })(eF, eG.test(o) ? o : a[i]).split(P);
              return {
                rValue: (0, l.default)(parseInt(d[0], 10), 255),
                gValue: (0, l.default)(parseInt(d[1], 10), 255),
                bValue: (0, l.default)(parseInt(d[2], 10), 255),
                aValue: (0, l.default)(parseFloat(d[3]), 1),
              };
            })({ element: e, actionTypeId: n.actionTypeId, computedStyle: a, getStyle: o });
          case el:
            return { value: (0, l.default)(o(e, G), a.display) };
          case eo:
            return t[n.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eA = (e, t, a) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(a, t);
          switch (e) {
            case J: {
              let e = (0, d.default)(a.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, d.default)(a.fontVariations, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            default:
              return a[t];
          }
        };
      function eC({ element: e, actionItem: t, elementApi: a }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case z:
          case q:
          case $:
          case K: {
            let { xValue: e, yValue: a, zValue: n } = t.config;
            return { xValue: e, yValue: a, zValue: n };
          }
          case et: {
            let { getStyle: n, setStyle: i, getProperty: l } = a,
              { widthUnit: o, heightUnit: d } = t.config,
              { widthValue: c, heightValue: s } = t.config;
            if (!I.IS_BROWSER_ENV) return { widthValue: c, heightValue: s };
            if (o === D) {
              let t = n(e, C);
              i(e, C, ''), (c = l(e, 'offsetWidth')), i(e, C, t);
            }
            if (d === D) {
              let t = n(e, h);
              i(e, h, ''), (s = l(e, 'offsetHeight')), i(e, h, t);
            }
            return { widthValue: c, heightValue: s };
          }
          case ea:
          case en:
          case ei: {
            let { rValue: n, gValue: i, bValue: l, aValue: o, globalSwatchId: d } = t.config;
            if (d && d.startsWith('--')) {
              let { getStyle: t } = a,
                n = t(e, d),
                i = (0, u.normalizeColor)(n);
              return { rValue: i.red, gValue: i.green, bValue: i.blue, aValue: i.alpha };
            }
            return { rValue: n, gValue: i, bValue: l, aValue: o };
          }
          case J:
            return t.config.filters.reduce(eN, {});
          case ee:
            return t.config.fontVariations.reduce(eS, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eh(e) {
        return /^TRANSFORM_/.test(e)
          ? X
          : /^STYLE_/.test(e)
          ? Y
          : /^GENERAL_/.test(e)
          ? H
          : /^PLUGIN_/.test(e)
          ? j
          : void 0;
      }
      function eM(e, t) {
        return e === Y ? t.replace('STYLE_', '').toLowerCase() : null;
      }
      function ek(e, t, a, n, i, l, d, c, s) {
        switch (c) {
          case X:
            var r = e,
              f = t,
              u = a,
              E = i,
              T = d;
            let y = eB
                .map((e) => {
                  let t = eV[e],
                    {
                      xValue: a = t.xValue,
                      yValue: n = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: l = '',
                      yUnit: o = '',
                      zUnit: d = '',
                    } = f[e] || {};
                  switch (e) {
                    case z:
                      return `${m}(${a}${l}, ${n}${o}, ${i}${d})`;
                    case q:
                      return `${g}(${a}${l}, ${n}${o}, ${i}${d})`;
                    case $:
                      return `${b}(${a}${l}) ${O}(${n}${o}) ${v}(${i}${d})`;
                    case K:
                      return `${L}(${a}${l}, ${n}${o})`;
                    default:
                      return '';
                  }
                })
                .join(' '),
              { setStyle: N } = T;
            eD(r, I.TRANSFORM_PREFIXED, T),
              N(r, I.TRANSFORM_PREFIXED, y),
              (function ({ actionTypeId: e }, { xValue: t, yValue: a, zValue: n }) {
                return (
                  (e === z && void 0 !== n) ||
                  (e === q && void 0 !== n) ||
                  (e === $ && (void 0 !== t || void 0 !== a))
                );
              })(E, u) && N(r, I.TRANSFORM_STYLE_PREFIXED, _);
            return;
          case Y:
            return (function (e, t, a, n, i, l) {
              let { setStyle: d } = l;
              switch (n.actionTypeId) {
                case et: {
                  let { widthUnit: t = '', heightUnit: i = '' } = n.config,
                    { widthValue: o, heightValue: c } = a;
                  void 0 !== o && (t === D && (t = 'px'), eD(e, C, l), d(e, C, o + t)),
                    void 0 !== c && (i === D && (i = 'px'), eD(e, h, l), d(e, h, c + i));
                  break;
                }
                case J:
                  var c = n.config;
                  let s = (0, o.default)(a, (e, t, a) => `${e} ${a}(${t}${ex(a, c)})`, ''),
                    { setStyle: r } = l;
                  eD(e, S, l), r(e, S, s);
                  break;
                case ee:
                  n.config;
                  let f = (0, o.default)(a, (e, t, a) => (e.push(`"${a}" ${t}`), e), []).join(', '),
                    { setStyle: u } = l;
                  eD(e, A, l), u(e, A, f);
                  break;
                case ea:
                case en:
                case ei: {
                  let t = ec[n.actionTypeId],
                    i = Math.round(a.rValue),
                    o = Math.round(a.gValue),
                    c = Math.round(a.bValue),
                    s = a.aValue;
                  eD(e, t, l),
                    d(e, t, s >= 1 ? `rgb(${i},${o},${c})` : `rgba(${i},${o},${c},${s})`);
                  break;
                }
                default: {
                  let { unit: t = '' } = n.config;
                  eD(e, i, l), d(e, i, a.value + t);
                }
              }
            })(e, 0, a, i, l, d);
          case H:
            var M = e,
              k = i,
              V = d;
            let { setStyle: U } = V;
            if (k.actionTypeId === el) {
              let { value: e } = k.config;
              U(M, G, e === R && I.IS_BROWSER_ENV ? I.FLEX_PREFIXED : e);
            }
            return;
          case j: {
            let { actionTypeId: e } = i;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(s, t, i);
          }
        }
      }
      let eV = {
          [z]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [q]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [$]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eU = Object.freeze({
          blur: 0,
          'hue-rotate': 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        ew = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        ex = (e, t) => {
          let a = (0, d.default)(t.filters, ({ type: t }) => t === e);
          if (a && a.unit) return a.unit;
          switch (e) {
            case 'blur':
              return 'px';
            case 'hue-rotate':
              return 'deg';
            default:
              return '%';
          }
        },
        eB = Object.keys(eV),
        eG = /^rgb/,
        eF = RegExp('rgba?\\(([^)]+)\\)');
      function eD(e, t, a) {
        if (!I.IS_BROWSER_ENV) return;
        let n = es[t];
        if (!n) return;
        let { getStyle: i, setStyle: l } = a,
          o = i(e, F);
        if (!o) return void l(e, F, n);
        let d = o.split(P).map(ed);
        -1 === d.indexOf(n) && l(e, F, d.concat(n).join(P));
      }
      function eP(e, t, a) {
        if (!I.IS_BROWSER_ENV) return;
        let n = es[t];
        if (!n) return;
        let { getStyle: i, setStyle: l } = a,
          o = i(e, F);
        o &&
          -1 !== o.indexOf(n) &&
          l(
            e,
            F,
            o
              .split(P)
              .map(ed)
              .filter((e) => e !== n)
              .join(P)
          );
      }
      function eQ({ store: e, elementApi: t }) {
        let { ixData: a } = e.getState(),
          { events: n = {}, actionLists: i = {} } = a;
        Object.keys(n).forEach((e) => {
          let a = n[e],
            { config: l } = a.action,
            { actionListId: o } = l,
            d = i[o];
          d && eW({ actionList: d, event: a, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eW({ actionList: i[e], elementApi: t });
          });
      }
      function eW({ actionList: e = {}, event: t, elementApi: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e;
        n &&
          n.forEach((e) => {
            eX({ actionGroup: e, event: t, elementApi: a });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: n } = e;
              n.forEach((e) => {
                eX({ actionGroup: e, event: t, elementApi: a });
              });
            });
      }
      function eX({ actionGroup: e, event: t, elementApi: a }) {
        let { actionItems: n } = e;
        n.forEach((e) => {
          let n,
            { actionTypeId: i, config: l } = e;
          (n = (0, p.isPluginType)(i)
            ? (t) => (0, p.clearPlugin)(i)(t, e)
            : eY({ effect: ej, actionTypeId: i, elementApi: a })),
            eb({ config: l, event: t, elementApi: a }).forEach(n);
        });
      }
      function eH(e, t, a) {
        let { setStyle: n, getStyle: i } = a,
          { actionTypeId: l } = t;
        if (l === et) {
          let { config: a } = t;
          a.widthUnit === D && n(e, C, ''), a.heightUnit === D && n(e, h, '');
        }
        i(e, F) && eY({ effect: eP, actionTypeId: l, elementApi: a })(e);
      }
      let eY =
        ({ effect: e, actionTypeId: t, elementApi: a }) =>
        (n) => {
          switch (t) {
            case z:
            case q:
            case $:
            case K:
              e(n, I.TRANSFORM_PREFIXED, a);
              break;
            case J:
              e(n, S, a);
              break;
            case ee:
              e(n, A, a);
              break;
            case Z:
              e(n, N, a);
              break;
            case et:
              e(n, C, a), e(n, h, a);
              break;
            case ea:
            case en:
            case ei:
              e(n, ec[t], a);
              break;
            case el:
              e(n, G, a);
          }
        };
      function ej(e, t, a) {
        let { setStyle: n } = a;
        eP(e, t, a),
          n(e, t, ''),
          t === I.TRANSFORM_PREFIXED && n(e, I.TRANSFORM_STYLE_PREFIXED, '');
      }
      function ez(e) {
        let t = 0,
          a = 0;
        return (
          e.forEach((e, n) => {
            let { config: i } = e,
              l = i.delay + i.duration;
            l >= t && ((t = l), (a = n));
          }),
          a
        );
      }
      function eq(e, t) {
        let { actionItemGroups: a, useFirstGroupAsInitialState: n } = e,
          { actionItem: i, verboseTimeElapsed: l = 0 } = t,
          o = 0,
          d = 0;
        return (
          a.forEach((e, t) => {
            if (n && 0 === t) return;
            let { actionItems: a } = e,
              c = a[ez(a)],
              { config: s, actionTypeId: r } = c;
            i.id === c.id && (d = o + l);
            let f = eh(r) === H ? 0 : s.duration;
            o += s.delay + f;
          }),
          o > 0 ? (0, f.optimizeFloat)(d / o) : 0
        );
      }
      function e$({ actionList: e, actionItemId: t, rawData: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e,
          l = [],
          o = (e) => (l.push((0, c.mergeIn)(e, ['config'], { delay: 0, duration: 0 })), e.id === t);
        return (
          n && n.some(({ actionItems: e }) => e.some(o)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, c.setIn)(a, ['actionLists'], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: l }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === s.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === s.EventBasedOn.ELEMENT || null == t)) ||
          (e === s.EventTypeConsts.MOUSE_MOVE && t === s.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + Q + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, r.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ('string' == typeof e) return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + W + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = '', selector: a = '', useEventTarget: n = '' } = e;
        return t + W + a + W + n;
      }
    },
    7164: function (e, t) {
      'use strict';
      function a(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = function (e, t) {
        if (a(e, t)) return !0;
        if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
        let n = Object.keys(e),
          i = Object.keys(t);
        if (n.length !== i.length) return !1;
        for (let i = 0; i < n.length; i++)
          if (!Object.hasOwn(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = {
        createElementState: function () {
          return L;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return _;
        },
      };
      for (var i in n) Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let l = a(1185),
        o = a(7087),
        {
          HTML_ELEMENT: d,
          PLAIN_OBJECT: c,
          ABSTRACT_NODE: s,
          CONFIG_X_VALUE: r,
          CONFIG_Y_VALUE: f,
          CONFIG_Z_VALUE: u,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: I,
          CONFIG_Y_UNIT: E,
          CONFIG_Z_UNIT: T,
          CONFIG_UNIT: y,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: m,
          IX2_INSTANCE_ADDED: g,
          IX2_ELEMENT_STATE_CHANGED: b,
        } = o.IX2EngineActionTypes,
        O = {},
        v = (e = O, t = {}) => {
          switch (t.type) {
            case m:
              return O;
            case g: {
              let { elementId: a, element: n, origin: i, actionItem: o, refType: d } = t.payload,
                { actionTypeId: c } = o,
                s = e;
              return (0, l.getIn)(s, [a, n]) !== n && (s = L(s, n, d, a, o)), _(s, a, c, i, o);
            }
            case b: {
              let { elementId: a, actionTypeId: n, current: i, actionItem: l } = t.payload;
              return _(e, a, n, i, l);
            }
            default:
              return e;
          }
        };
      function L(e, t, a, n, i) {
        let o = a === c ? (0, l.getIn)(i, ['config', 'target', 'objectId']) : null;
        return (0, l.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: a });
      }
      function _(e, t, a, n, i) {
        let o = (function (e) {
          let { config: t } = e;
          return R.reduce((e, a) => {
            let n = a[0],
              i = a[1],
              l = t[n],
              o = t[i];
            return null != l && null != o && (e[i] = o), e;
          }, {});
        })(i);
        return (0, l.mergeIn)(e, [t, 'refState', a], n, o);
      }
      let R = [
        [r, I],
        [f, E],
        [u, T],
        [p, y],
      ];
    },
    9275: function () {
      Webflow.require('ix2').init({
        events: {
          e: {
            id: 'e',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-982',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|3db44792-19c7-8a89-72b5-eca7b5da2406',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|3db44792-19c7-8a89-72b5-eca7b5da2406',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19715f5b1cb,
          },
          'e-60': {
            id: 'e-60',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-63' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '2cc10bd0-4259-6e1e-5887-d68b4d4a0c06',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '2cc10bd0-4259-6e1e-5887-d68b4d4a0c06',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 360,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x1970de5f95f,
          },
          'e-158': {
            id: 'e-158',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1989' },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.dark_text_regular.max-width-large',
              originalId: '6825ae0ac11a1a7d6a345f09|57382348-32a8-ff74-0358-45dadde11eca',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.dark_text_regular.max-width-large',
                originalId: '6825ae0ac11a1a7d6a345f09|57382348-32a8-ff74-0358-45dadde11eca',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19720245437,
          },
          'e-160': {
            id: 'e-160',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-14',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-354',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.button.darkmode.linear-stroke',
              originalId: 'c6e8a84c-0888-6bc4-55ac-a0bac0d5de1e',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.button.darkmode.linear-stroke',
                originalId: 'c6e8a84c-0888-6bc4-55ac-a0bac0d5de1e',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197204276f0,
          },
          'e-161': {
            id: 'e-161',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-15',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-353',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.button.darkmode.linear-stroke',
              originalId: 'c6e8a84c-0888-6bc4-55ac-a0bac0d5de1e',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.button.darkmode.linear-stroke',
                originalId: 'c6e8a84c-0888-6bc4-55ac-a0bac0d5de1e',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197204276f1,
          },
          'e-321': {
            id: 'e-321',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-322' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|d982cea0-1a52-6774-acef-bb7baabe1b29',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|d982cea0-1a52-6774-acef-bb7baabe1b29',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 50,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1972ba39984,
          },
          'e-323': {
            id: 'e-323',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-324' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|d982cea0-1a52-6774-acef-bb7baabe1b2b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|d982cea0-1a52-6774-acef-bb7baabe1b2b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 20,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1972ba39984,
          },
          'e-325': {
            id: 'e-325',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-326' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|d982cea0-1a52-6774-acef-bb7baabe1b31',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|d982cea0-1a52-6774-acef-bb7baabe1b31',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 250,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x1972ba39984,
          },
          'e-353': {
            id: 'e-353',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-14',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-354',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.button-3.darkmode.linear-stroke',
              originalId: 'c6e8a84c-0888-6bc4-55ac-a0bac0d5de1e',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.button-3.darkmode.linear-stroke',
                originalId: 'c6e8a84c-0888-6bc4-55ac-a0bac0d5de1e',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197204276f0,
          },
          'e-354': {
            id: 'e-354',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-15',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-353',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.button-3.darkmode.linear-stroke',
              originalId: 'c6e8a84c-0888-6bc4-55ac-a0bac0d5de1e',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.button-3.darkmode.linear-stroke',
                originalId: 'c6e8a84c-0888-6bc4-55ac-a0bac0d5de1e',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197204276f1,
          },
          'e-355': {
            id: 'e-355',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-14',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-356',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.button-3.darkmode.linear-stroke',
              originalId: '6825ae0ac11a1a7d6a345f09|c6e8a84c-0888-6bc4-55ac-a0bac0d5de23',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.button-3.darkmode.linear-stroke',
                originalId: '6825ae0ac11a1a7d6a345f09|c6e8a84c-0888-6bc4-55ac-a0bac0d5de23',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197204c0f0c,
          },
          'e-356': {
            id: 'e-356',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-15',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-355',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.button-3.darkmode.linear-stroke',
              originalId: '6825ae0ac11a1a7d6a345f09|c6e8a84c-0888-6bc4-55ac-a0bac0d5de23',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.button-3.darkmode.linear-stroke',
                originalId: '6825ae0ac11a1a7d6a345f09|c6e8a84c-0888-6bc4-55ac-a0bac0d5de23',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197204c0f0c,
          },
          'e-363': {
            id: 'e-363',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-83',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-364',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.tab_content_layout',
              originalId: '6825ae0ac11a1a7d6a345f09|9552db71-8576-b815-fb5b-34b92ee6007a',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.tab_content_layout',
                originalId: '6825ae0ac11a1a7d6a345f09|9552db71-8576-b815-fb5b-34b92ee6007a',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197313a518b,
          },
          'e-364': {
            id: 'e-364',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-84',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-363',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.tab_content_layout',
              originalId: '6825ae0ac11a1a7d6a345f09|9552db71-8576-b815-fb5b-34b92ee6007a',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.tab_content_layout',
                originalId: '6825ae0ac11a1a7d6a345f09|9552db71-8576-b815-fb5b-34b92ee6007a',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197313a518c,
          },
          'e-365': {
            id: 'e-365',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_MOVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
              config: { actionListId: 'a-82', affectedElements: {}, duration: 0 },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.tab_content_layout',
              originalId: '6825ae0ac11a1a7d6a345f09|9552db71-8576-b815-fb5b-34b92ee6007a',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.tab_content_layout',
                originalId: '6825ae0ac11a1a7d6a345f09|9552db71-8576-b815-fb5b-34b92ee6007a',
                appliesTo: 'CLASS',
              },
            ],
            config: [
              {
                continuousParameterGroupId: 'a-82-p',
                selectedAxis: 'X_AXIS',
                basedOn: 'ELEMENT',
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
              {
                continuousParameterGroupId: 'a-82-p-2',
                selectedAxis: 'Y_AXIS',
                basedOn: 'ELEMENT',
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
            ],
            createdOn: 0x197313b4e75,
          },
          'e-504': {
            id: 'e-504',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-23',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-505',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|17745de7-933a-1f74-bce6-e75159724422',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|17745de7-933a-1f74-bce6-e75159724422',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19734edc880,
          },
          'e-505': {
            id: 'e-505',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-24',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-504',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|17745de7-933a-1f74-bce6-e75159724422',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|17745de7-933a-1f74-bce6-e75159724422',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19734edc881,
          },
          'e-506': {
            id: 'e-506',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-23',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-507',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|c6193660-1b92-31cd-4759-9c842fb5174f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|c6193660-1b92-31cd-4759-9c842fb5174f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19734f212f3,
          },
          'e-507': {
            id: 'e-507',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-24',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-506',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|c6193660-1b92-31cd-4759-9c842fb5174f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|c6193660-1b92-31cd-4759-9c842fb5174f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19734f212f5,
          },
          'e-537': {
            id: 'e-537',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-23',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1725',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '058da3e3-bc4f-50ec-81a3-74d316744e82',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '058da3e3-bc4f-50ec-81a3-74d316744e82',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973a1d1cf3,
          },
          'e-538': {
            id: 'e-538',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-24',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1749',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '058da3e3-bc4f-50ec-81a3-74d316744e82',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '058da3e3-bc4f-50ec-81a3-74d316744e82',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973a1d1cf3,
          },
          'e-539': {
            id: 'e-539',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-23',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1672',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '058da3e3-bc4f-50ec-81a3-74d316744e86',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '058da3e3-bc4f-50ec-81a3-74d316744e86',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973a1d1cf3,
          },
          'e-540': {
            id: 'e-540',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-24',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1734',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '058da3e3-bc4f-50ec-81a3-74d316744e86',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '058da3e3-bc4f-50ec-81a3-74d316744e86',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973a1d1cf3,
          },
          'e-583': {
            id: 'e-583',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-584' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|6a76f4d4-a5bf-314c-e760-41ff16f0a6bb',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|6a76f4d4-a5bf-314c-e760-41ff16f0a6bb',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 360,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x1973f6210ac,
          },
          'e-585': {
            id: 'e-585',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-58',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-586',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.faq-dropdown',
              originalId: '6825ae0ac11a1a7d6a345f09|3b418dd0-edef-472c-2d93-bd91c3caa574',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.faq-dropdown',
                originalId: '6825ae0ac11a1a7d6a345f09|3b418dd0-edef-472c-2d93-bd91c3caa574',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973f6210ac,
          },
          'e-586': {
            id: 'e-586',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-57',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-585',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.faq-dropdown',
              originalId: '6825ae0ac11a1a7d6a345f09|3b418dd0-edef-472c-2d93-bd91c3caa574',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.faq-dropdown',
                originalId: '6825ae0ac11a1a7d6a345f09|3b418dd0-edef-472c-2d93-bd91c3caa574',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973f6210ac,
          },
          'e-587': {
            id: 'e-587',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-59',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-588',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.faq-dropdown',
              originalId: '6825ae0ac11a1a7d6a345f09|6a76f4d4-a5bf-314c-e760-41ff16f0a6bc',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.faq-dropdown',
                originalId: '6825ae0ac11a1a7d6a345f09|6a76f4d4-a5bf-314c-e760-41ff16f0a6bc',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973f6f860c,
          },
          'e-588': {
            id: 'e-588',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-60',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-587',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.faq-dropdown',
              originalId: '6825ae0ac11a1a7d6a345f09|6a76f4d4-a5bf-314c-e760-41ff16f0a6bc',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.faq-dropdown',
                originalId: '6825ae0ac11a1a7d6a345f09|6a76f4d4-a5bf-314c-e760-41ff16f0a6bc',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973f6f860d,
          },
          'e-612': {
            id: 'e-612',
            name: '',
            animationType: 'preset',
            eventTypeId: 'NAVBAR_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-31',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-613',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '4060d783-80ba-d591-2f7c-9ff0ad498d59',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '4060d783-80ba-d591-2f7c-9ff0ad498d59',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197432b0d66,
          },
          'e-616': {
            id: 'e-616',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-49',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-617',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '4060d783-80ba-d591-2f7c-9ff0ad498d61',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '4060d783-80ba-d591-2f7c-9ff0ad498d61',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197432b0d66,
          },
          'e-617': {
            id: 'e-617',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-50',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-616',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '4060d783-80ba-d591-2f7c-9ff0ad498d61',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '4060d783-80ba-d591-2f7c-9ff0ad498d61',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197432b0d66,
          },
          'e-618': {
            id: 'e-618',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-49',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-619',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '4060d783-80ba-d591-2f7c-9ff0ad498f02',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '4060d783-80ba-d591-2f7c-9ff0ad498f02',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197432b0d66,
          },
          'e-619': {
            id: 'e-619',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-50',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-618',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '4060d783-80ba-d591-2f7c-9ff0ad498f02',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '4060d783-80ba-d591-2f7c-9ff0ad498f02',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197432b0d66,
          },
          'e-622': {
            id: 'e-622',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-49',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-623',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '4060d783-80ba-d591-2f7c-9ff0ad498f30',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '4060d783-80ba-d591-2f7c-9ff0ad498f30',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197432b0d66,
          },
          'e-623': {
            id: 'e-623',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-50',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-622',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '4060d783-80ba-d591-2f7c-9ff0ad498f30',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '4060d783-80ba-d591-2f7c-9ff0ad498f30',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197432b0d66,
          },
          'e-628': {
            id: 'e-628',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-49',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-629',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '4060d783-80ba-d591-2f7c-9ff0ad498f8f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '4060d783-80ba-d591-2f7c-9ff0ad498f8f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197432b0d66,
          },
          'e-629': {
            id: 'e-629',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-50',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-628',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '4060d783-80ba-d591-2f7c-9ff0ad498f8f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '4060d783-80ba-d591-2f7c-9ff0ad498f8f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197432b0d66,
          },
          'e-634': {
            id: 'e-634',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-150',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-635',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|cda688bb-8db3-d373-fb73-ed3f1b239d0b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|cda688bb-8db3-d373-fb73-ed3f1b239d0b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19743d683d7,
          },
          'e-642': {
            id: 'e-642',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-643' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|a91d52bd-f171-ea52-3a57-f21affe9eb74',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|a91d52bd-f171-ea52-3a57-f21affe9eb74',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 360,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x197451ffa53,
          },
          'e-644': {
            id: 'e-644',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-645' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|3b418dd0-edef-472c-2d93-bd91c3caa573',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|3b418dd0-edef-472c-2d93-bd91c3caa573',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 360,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19745214b76,
          },
          'e-646': {
            id: 'e-646',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-647',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683d1964f99222bf19f21d7b|a3d6144f-3a3e-516a-9441-a01dba45e28d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683d1964f99222bf19f21d7b|a3d6144f-3a3e-516a-9441-a01dba45e28d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974554881c,
          },
          'e-648': {
            id: 'e-648',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-649',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683d1964f99222bf19f21d7b|20a249e8-fc00-5be3-41ab-3c6d4d53510d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683d1964f99222bf19f21d7b|20a249e8-fc00-5be3-41ab-3c6d4d53510d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974556a7e0,
          },
          'e-652': {
            id: 'e-652',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-653' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.dark_text_medium.max-width-large',
              originalId: '6825ae0ac11a1a7d6a345f09|5a9a2e35-37f7-1aa2-7006-b079a4a91c94',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.dark_text_medium.max-width-large',
                originalId: '6825ae0ac11a1a7d6a345f09|5a9a2e35-37f7-1aa2-7006-b079a4a91c94',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x1974620a3ab,
          },
          'e-654': {
            id: 'e-654',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-655' },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.button-group.hero',
              originalId: '6825ae0ac11a1a7d6a345f09|7f50ad5a-040b-2057-c705-acab21df33ec',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.button-group.hero',
                originalId: '6825ae0ac11a1a7d6a345f09|7f50ad5a-040b-2057-c705-acab21df33ec',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 300,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x1974620d256,
          },
          'e-656': {
            id: 'e-656',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-657' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|3b474aab-9fce-bdb0-40f8-d653152fc7f0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|3b474aab-9fce-bdb0-40f8-d653152fc7f0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x197462d0828,
          },
          'e-658': {
            id: 'e-658',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-659' },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.heading-style-h2',
              originalId: '683ff68e92c04cbc1aa1c7ba|e8965c77-858a-fc39-df54-c93edfbb42a4',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.heading-style-h2',
                originalId: '683ff68e92c04cbc1aa1c7ba|e8965c77-858a-fc39-df54-c93edfbb42a4',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x197462d5cb3,
          },
          'e-660': {
            id: 'e-660',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-661' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.max-width-large.text-color-secondary',
              originalId: '683ff68e92c04cbc1aa1c7ba|b6ababe0-4c2c-ab23-6c55-f58eb84bdb23',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.max-width-large.text-color-secondary',
                originalId: '683ff68e92c04cbc1aa1c7ba|b6ababe0-4c2c-ab23-6c55-f58eb84bdb23',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x197462d9021,
          },
          'e-662': {
            id: 'e-662',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-663' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|6bba8c8d-f08e-7064-78da-75436e0bc9f4',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|6bba8c8d-f08e-7064-78da-75436e0bc9f4',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19752e919b4,
          },
          'e-672': {
            id: 'e-672',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-673' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '8d9529ab-e59b-ff05-783a-d5cbef968989',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '8d9529ab-e59b-ff05-783a-d5cbef968989',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19752eaadd4,
          },
          'e-674': {
            id: 'e-674',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-675' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|d693c65b-a99c-6071-0886-f057f607e911',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|d693c65b-a99c-6071-0886-f057f607e911',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19752eae596,
          },
          'e-676': {
            id: 'e-676',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-677' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|938d8c78-6749-e493-6a6a-f4d215a120c1',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|938d8c78-6749-e493-6a6a-f4d215a120c1',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19752eb7afc,
          },
          'e-678': {
            id: 'e-678',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-679' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|f4b065ad-eab0-0f2e-1c77-c77922720ca3',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|f4b065ad-eab0-0f2e-1c77-c77922720ca3',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19752eba222,
          },
          'e-680': {
            id: 'e-680',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-681' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|c0662259-4162-445c-915a-84a1d1254f8f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|c0662259-4162-445c-915a-84a1d1254f8f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x19752ebe399,
          },
          'e-684': {
            id: 'e-684',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-685' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|1b9e2ac1-d008-4283-6033-32b92a8247be',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|1b9e2ac1-d008-4283-6033-32b92a8247be',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19752ec3271,
          },
          'e-686': {
            id: 'e-686',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-687' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|186dbe76-5374-86fd-d991-4872f4ca86eb',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|186dbe76-5374-86fd-d991-4872f4ca86eb',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 380,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19752ec5aae,
          },
          'e-688': {
            id: 'e-688',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-689' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|475ec56d-3cd6-03e4-ba56-5b5362289a64',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|475ec56d-3cd6-03e4-ba56-5b5362289a64',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 420,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19752ec7d5c,
          },
          'e-692': {
            id: 'e-692',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-693' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|40312fb1-4165-15a3-56dc-cebb04c9c692',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|40312fb1-4165-15a3-56dc-cebb04c9c692',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 240,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x19752ed35a8,
          },
          'e-694': {
            id: 'e-694',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-695' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|a2c3ba80-9612-ac64-aa32-ea1b78627c93',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|a2c3ba80-9612-ac64-aa32-ea1b78627c93',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 440,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19752ed80ae,
          },
          'e-704': {
            id: 'e-704',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-705' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.dark_text_regular.max-width-medium',
              originalId: '6825ae0ac11a1a7d6a345f09|46bf6f91-b83f-3b16-08e0-12e5b28d36a9',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.dark_text_regular.max-width-medium',
                originalId: '6825ae0ac11a1a7d6a345f09|46bf6f91-b83f-3b16-08e0-12e5b28d36a9',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19752f5459c,
          },
          'e-706': {
            id: 'e-706',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-707' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|18ef643c-c999-be23-21fb-16a690752979',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|18ef643c-c999-be23-21fb-16a690752979',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19752f57e5d,
          },
          'e-708': {
            id: 'e-708',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-709' },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.industry_text_layout.text-align-left',
              originalId: '6825ae0ac11a1a7d6a345f09|6310426f-55b1-b672-f887-c1887fb25818',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.industry_text_layout.text-align-left',
                originalId: '6825ae0ac11a1a7d6a345f09|6310426f-55b1-b672-f887-c1887fb25818',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x19752f5a818,
          },
          'e-713': {
            id: 'e-713',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-714' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|7405f531-b5a4-3680-8b77-50d31f0b8bc0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|7405f531-b5a4-3680-8b77-50d31f0b8bc0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19752fb8891,
          },
          'e-715': {
            id: 'e-715',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-716' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|7405f531-b5a4-3680-8b77-50d31f0b8bc4',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|7405f531-b5a4-3680-8b77-50d31f0b8bc4',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19752fbba22,
          },
          'e-717': {
            id: 'e-717',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-718' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|7405f531-b5a4-3680-8b77-50d31f0b8c56',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|7405f531-b5a4-3680-8b77-50d31f0b8c56',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19752fcc29b,
          },
          'e-719': {
            id: 'e-719',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-720' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|591d4cab-b8d1-1986-eef6-3010f7feb4b3',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|591d4cab-b8d1-1986-eef6-3010f7feb4b3',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19752fd0607,
          },
          'e-721': {
            id: 'e-721',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-722' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|eb15a0a4-42d5-19e5-949d-f8ddd2865e94',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|eb15a0a4-42d5-19e5-949d-f8ddd2865e94',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 300,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19752fd5131,
          },
          'e-723': {
            id: 'e-723',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-724' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|6a76f4d4-a5bf-314c-e760-41ff16f0a6b5',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|6a76f4d4-a5bf-314c-e760-41ff16f0a6b5',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19752fd8e77,
          },
          'e-725': {
            id: 'e-725',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-726' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|6a76f4d4-a5bf-314c-e760-41ff16f0a6e9',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|6a76f4d4-a5bf-314c-e760-41ff16f0a6e9',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19752fdc208,
          },
          'e-727': {
            id: 'e-727',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-728' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683d1964f99222bf19f21d7b|7bfd2eab-eeb0-d347-4255-3d5457eae29c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683d1964f99222bf19f21d7b|7bfd2eab-eeb0-d347-4255-3d5457eae29c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x19752fed8e4,
          },
          'e-729': {
            id: 'e-729',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-730' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683d1964f99222bf19f21d7b|bef4760c-251f-2094-4cf5-7943740b4a99',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683d1964f99222bf19f21d7b|bef4760c-251f-2094-4cf5-7943740b4a99',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x19752fef7bf,
          },
          'e-731': {
            id: 'e-731',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-732' },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.heading-style-h1',
              originalId: '683dd02ae30fa355be2dff01|8bb55ec2-4a14-0937-d4b5-6c2c7a56c8fb',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.heading-style-h1',
                originalId: '683dd02ae30fa355be2dff01|8bb55ec2-4a14-0937-d4b5-6c2c7a56c8fb',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x197530109a8,
          },
          'e-733': {
            id: 'e-733',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-734' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|8bb55ec2-4a14-0937-d4b5-6c2c7a56c8fd',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|8bb55ec2-4a14-0937-d4b5-6c2c7a56c8fd',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 100,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1975301400d,
          },
          'e-735': {
            id: 'e-735',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-736' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|274883e4-6192-ad58-df75-637df64b179a',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|274883e4-6192-ad58-df75-637df64b179a',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 180,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19753016379,
          },
          'e-737': {
            id: 'e-737',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-738' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|8bb55ec2-4a14-0937-d4b5-6c2c7a56c900',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|8bb55ec2-4a14-0937-d4b5-6c2c7a56c900',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x197530192cb,
          },
          'e-751': {
            id: 'e-751',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-752' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|cda688bb-8db3-d373-fb73-ed3f1b239d08',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|cda688bb-8db3-d373-fb73-ed3f1b239d08',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x197530392aa,
          },
          'e-753': {
            id: 'e-753',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-1698' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.section-name',
              originalId: '683dd02ae30fa355be2dff01|8d9529ab-e59b-ff05-783a-d5cbef96898c',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.section-name',
                originalId: '683dd02ae30fa355be2dff01|8d9529ab-e59b-ff05-783a-d5cbef96898c',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1975303d068,
          },
          'e-755': {
            id: 'e-755',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-756' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.button.is-icon.is-link',
              originalId: '683dd02ae30fa355be2dff01|c0fc5164-f7b3-2162-d5c2-2b9b30c41718',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.button.is-icon.is-link',
                originalId: '683dd02ae30fa355be2dff01|c0fc5164-f7b3-2162-d5c2-2b9b30c41718',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1975303f4f8,
          },
          'e-761': {
            id: 'e-761',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-762' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.section-name-2',
              originalId: '683dd02ae30fa355be2dff01|be08c25d-445b-ee0c-63a3-7ff858a3f0a0',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.section-name-2',
                originalId: '683dd02ae30fa355be2dff01|be08c25d-445b-ee0c-63a3-7ff858a3f0a0',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1975304bc72,
          },
          'e-763': {
            id: 'e-763',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-764' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|91f7b909-be4b-a6f1-45df-2a9a8e36b410',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|91f7b909-be4b-a6f1-45df-2a9a8e36b410',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 120,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1975304e4a6,
          },
          'e-765': {
            id: 'e-765',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-766' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|d03901fb-d6ef-cced-0cd2-253692f1d75a',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|d03901fb-d6ef-cced-0cd2-253692f1d75a',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x197530523ef,
          },
          'e-767': {
            id: 'e-767',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-768' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.event-card',
              originalId: '683dd02ae30fa355be2dff01|23e5bc0a-1bf6-f742-cb0f-f35bb37ab150',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.event-card',
                originalId: '683dd02ae30fa355be2dff01|23e5bc0a-1bf6-f742-cb0f-f35bb37ab150',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1975305d2e0,
          },
          'e-769': {
            id: 'e-769',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-770' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|6ccab173-1ff8-ea6e-8d3e-65c884293bcf',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|6ccab173-1ff8-ea6e-8d3e-65c884293bcf',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19753065248,
          },
          'e-771': {
            id: 'e-771',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-772' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|13ec4c8a-81d4-3462-6c4f-7114ac56f511',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|13ec4c8a-81d4-3462-6c4f-7114ac56f511',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 120,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19753066b21,
          },
          'e-773': {
            id: 'e-773',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-774' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|2a5ed905-22ed-82a8-2b54-7a918dc8c14d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|2a5ed905-22ed-82a8-2b54-7a918dc8c14d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19753068a53,
          },
          'e-775': {
            id: 'e-775',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-776' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|c8e2e57b-e5a2-0918-451b-4345bf33758c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|c8e2e57b-e5a2-0918-451b-4345bf33758c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 250,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x1975306bae9,
          },
          'e-777': {
            id: 'e-777',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-778' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|304638e7-0247-e5a2-fdb8-46c209ef7326',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|304638e7-0247-e5a2-fdb8-46c209ef7326',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 120,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1975306efef,
          },
          'e-779': {
            id: 'e-779',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-780' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|e1d90e7c-f90a-7b84-7325-cd91c646b254',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|e1d90e7c-f90a-7b84-7325-cd91c646b254',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19753074bfe,
          },
          'e-783': {
            id: 'e-783',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-784' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|dbc69db2-441c-1b9b-211c-697e7b3c4532',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|dbc69db2-441c-1b9b-211c-697e7b3c4532',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 120,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1975308d14a,
          },
          'e-785': {
            id: 'e-785',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-786' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|4139e0da-dea4-511a-e9f9-ae379f9553e2',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|4139e0da-dea4-511a-e9f9-ae379f9553e2',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 180,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1975308f88e,
          },
          'e-787': {
            id: 'e-787',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-788' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|1293e616-36df-9ebc-139e-b187a8b65ac3',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|1293e616-36df-9ebc-139e-b187a8b65ac3',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x197535a4479,
          },
          'e-789': {
            id: 'e-789',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-790' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|e14c4183-0470-2399-999c-01a56f873e37',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|e14c4183-0470-2399-999c-01a56f873e37',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x197535a64f3,
          },
          'e-791': {
            id: 'e-791',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-792' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|d972cc33-580f-3afc-2695-d075f6768da0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|d972cc33-580f-3afc-2695-d075f6768da0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x197535a98e5,
          },
          'e-793': {
            id: 'e-793',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-794' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|d972cc33-580f-3afc-2695-d075f6768d9f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|d972cc33-580f-3afc-2695-d075f6768d9f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x197535ad8bf,
          },
          'e-797': {
            id: 'e-797',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-798' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|ee7997e0-486e-df4c-2760-81436abd10af',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|ee7997e0-486e-df4c-2760-81436abd10af',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x197535bca99,
          },
          'e-801': {
            id: 'e-801',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-802' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: 'f4bd3f22-3dfe-67d1-13f0-83f7e98f3ae5',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: 'f4bd3f22-3dfe-67d1-13f0-83f7e98f3ae5',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x197535df0c6,
          },
          'e-803': {
            id: 'e-803',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-804' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|21d871fe-c533-22e8-16dc-5e0019ae836e',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|21d871fe-c533-22e8-16dc-5e0019ae836e',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 360,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19754b27040,
          },
          'e-805': {
            id: 'e-805',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-806' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|ed2c74fa-da73-0564-3f02-dfc2f5cb9218',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|ed2c74fa-da73-0564-3f02-dfc2f5cb9218',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19754b4fdbd,
          },
          'e-829': {
            id: 'e-829',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-70',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-830',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b33a',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b33a',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19757a681ea,
          },
          'e-830': {
            id: 'e-830',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-71',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-829',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b33a',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b33a',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19757a681ea,
          },
          'e-831': {
            id: 'e-831',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-70',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-832',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b3e0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b3e0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19757a681ea,
          },
          'e-832': {
            id: 'e-832',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-71',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-831',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b3e0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b3e0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19757a681ea,
          },
          'e-835': {
            id: 'e-835',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-70',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-836',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b40e',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b40e',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19757a681ea,
          },
          'e-836': {
            id: 'e-836',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-71',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-835',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b40e',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b40e',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19757a681ea,
          },
          'e-841': {
            id: 'e-841',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-70',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-842',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b46d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b46d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19757a681ea,
          },
          'e-842': {
            id: 'e-842',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-71',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-841',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b46d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|a025b458-8877-a622-29f2-65b831c4b46d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19757a681ea,
          },
          'e-844': {
            id: 'e-844',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_OUT_OF_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-54',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-843',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|0560ea31-da35-5b48-d7a7-45bbe8d922b7',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|0560ea31-da35-5b48-d7a7-45bbe8d922b7',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197587f446b,
          },
          'e-845': {
            id: 'e-845',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-72',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-846',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|f168d2a5-051c-d6f8-4e5d-40f4a6ba51a2',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|f168d2a5-051c-d6f8-4e5d-40f4a6ba51a2',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19758aa17ea,
          },
          'e-847': {
            id: 'e-847',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-73',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-848',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|54249474-5e29-10d8-d294-69e27cf4979b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|54249474-5e29-10d8-d294-69e27cf4979b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19758abf893,
          },
          'e-849': {
            id: 'e-849',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-73',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-850',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|f3caf89a-f569-30ff-b21f-3acf403efc9f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|f3caf89a-f569-30ff-b21f-3acf403efc9f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19758aef2e5,
          },
          'e-851': {
            id: 'e-851',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-6',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-852',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.client_logo_wrapper',
              originalId: '6825ae0ac11a1a7d6a345f09|7405f531-b5a4-3680-8b77-50d31f0b8bc5',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.client_logo_wrapper',
                originalId: '6825ae0ac11a1a7d6a345f09|7405f531-b5a4-3680-8b77-50d31f0b8bc5',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19758bebf5a,
          },
          'e-852': {
            id: 'e-852',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-7',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-851',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.client_logo_wrapper',
              originalId: '6825ae0ac11a1a7d6a345f09|7405f531-b5a4-3680-8b77-50d31f0b8bc5',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.client_logo_wrapper',
                originalId: '6825ae0ac11a1a7d6a345f09|7405f531-b5a4-3680-8b77-50d31f0b8bc5',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19758bebf5d,
          },
          'e-853': {
            id: 'e-853',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-854' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|8a15b72e-342b-9405-8c1e-cb000f7003a1',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|8a15b72e-342b-9405-8c1e-cb000f7003a1',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x19759626bc3,
          },
          'e-855': {
            id: 'e-855',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-856' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|9552db71-8576-b815-fb5b-34b92ee6007b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|9552db71-8576-b815-fb5b-34b92ee6007b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 120,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x1975962ac52,
          },
          'e-857': {
            id: 'e-857',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-858' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|8a15b72e-342b-9405-8c1e-cb000f700396',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|8a15b72e-342b-9405-8c1e-cb000f700396',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 120,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x19759678df9,
          },
          'e-859': {
            id: 'e-859',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-860' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|6bf9d8b2-a7fb-8a96-f94c-06beafe79e0c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|6bf9d8b2-a7fb-8a96-f94c-06beafe79e0c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 120,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x1975967b5bf,
          },
          'e-861': {
            id: 'e-861',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-862' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|6bf9d8b2-a7fb-8a96-f94c-06beafe79e19',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|6bf9d8b2-a7fb-8a96-f94c-06beafe79e19',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x1975967d5c4,
          },
          'e-863': {
            id: 'e-863',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-864' },
            },
            mediaQueries: ['main'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|900e03a1-c564-0582-be3c-58a55c9dbf47',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|900e03a1-c564-0582-be3c-58a55c9dbf47',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 120,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x19759680a25,
          },
          'e-865': {
            id: 'e-865',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-866' },
            },
            mediaQueries: ['main'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|900e03a1-c564-0582-be3c-58a55c9dbf54',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|900e03a1-c564-0582-be3c-58a55c9dbf54',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x19759682a23,
          },
          'e-867': {
            id: 'e-867',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-868' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|9552db71-8576-b815-fb5b-34b92ee60088',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|9552db71-8576-b815-fb5b-34b92ee60088',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x197596888a8,
          },
          'e-920': {
            id: 'e-920',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-73',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-921',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683dd02ae30fa355be2dff01|0ff4778c-00fe-6a2f-828e-4320a5985141',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683dd02ae30fa355be2dff01|0ff4778c-00fe-6a2f-828e-4320a5985141',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1976271dff9,
          },
          'e-923': {
            id: 'e-923',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_MOVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
              config: { actionListId: 'a-82', affectedElements: {}, duration: 0 },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.base_products_card',
              originalId: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca6702',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.base_products_card',
                originalId: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca6702',
                appliesTo: 'CLASS',
              },
            ],
            config: [
              {
                continuousParameterGroupId: 'a-82-p',
                selectedAxis: 'X_AXIS',
                basedOn: 'ELEMENT',
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
              {
                continuousParameterGroupId: 'a-82-p-2',
                selectedAxis: 'Y_AXIS',
                basedOn: 'ELEMENT',
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
            ],
            createdOn: 0x197206c496c,
          },
          'e-924': {
            id: 'e-924',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-83',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-925',
              },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.base_products_card',
              originalId: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca6702',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.base_products_card',
                originalId: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca6702',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1972070242d,
          },
          'e-925': {
            id: 'e-925',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-84',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-924',
              },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.base_products_card',
              originalId: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca6702',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.base_products_card',
                originalId: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca6702',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1972070242e,
          },
          'e-926': {
            id: 'e-926',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-927' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '9df04178-e38f-18a4-2762-7277c22b954d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '9df04178-e38f-18a4-2762-7277c22b954d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1976752951d,
          },
          'e-964': {
            id: 'e-964',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-76',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-965',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|cb4c3f50-c092-8026-e174-775aa047a5f5',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|cb4c3f50-c092-8026-e174-775aa047a5f5',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197678953f1,
          },
          'e-965': {
            id: 'e-965',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_OUT_OF_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-85',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-964',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|cb4c3f50-c092-8026-e174-775aa047a5f5',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|cb4c3f50-c092-8026-e174-775aa047a5f5',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197678953f4,
          },
          'e-968': {
            id: 'e-968',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-969' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.base_products_right-2',
              originalId: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca6737',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.base_products_right-2',
                originalId: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca6737',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x197679cfe84,
          },
          'e-978': {
            id: 'e-978',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-988',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.base_ai_question.combo-2',
              originalId: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfab7',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.base_ai_question.combo-2',
                originalId: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfab7',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971d1fbb97,
          },
          'e-979': {
            id: 'e-979',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-989',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfacb',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfacb',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19743c9da1e,
          },
          'e-981': {
            id: 'e-981',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-986',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfac1',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfac1',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971d1fb828,
          },
          'e-982': {
            id: 'e-982',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-990',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfabc',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfabc',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971d1fba18,
          },
          'e-984': {
            id: 'e-984',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-992',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfad0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfad0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19743c9d744,
          },
          'e-985': {
            id: 'e-985',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-993',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfab1',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfab1',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971d19802e,
          },
          'e-986': {
            id: 'e-986',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-981',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfac1',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfac1',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971d1fb828,
          },
          'e-987': {
            id: 'e-987',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-995',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfac6',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfac6',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971d1ff40d,
          },
          'e-988': {
            id: 'e-988',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-978',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.base_ai_question.combo-2',
              originalId: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfab7',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.base_ai_question.combo-2',
                originalId: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfab7',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971d1fbb97,
          },
          'e-989': {
            id: 'e-989',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-979',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfacb',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfacb',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19743c9da1e,
          },
          'e-990': {
            id: 'e-990',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-982',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfabc',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfabc',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971d1fba18,
          },
          'e-992': {
            id: 'e-992',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-984',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfad0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfad0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19743c9d744,
          },
          'e-993': {
            id: 'e-993',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-985',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfab1',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfab1',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971d198030,
          },
          'e-995': {
            id: 'e-995',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-987',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfac6',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|a4710e8d-ba98-725e-a29d-e443798bfac6',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1971d1ff40d,
          },
          'e-996': {
            id: 'e-996',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-88',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-997',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca671a',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca671a',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19768ccdd02,
          },
          'e-998': {
            id: 'e-998',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-88',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-999',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|b15e68a3-ccb1-c9ae-87ee-0d89c182528c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|b15e68a3-ccb1-c9ae-87ee-0d89c182528c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19768ce167d,
          },
          'e-1000': {
            id: 'e-1000',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-88',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1001',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca678c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca678c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197690197fb,
          },
          'e-1002': {
            id: 'e-1002',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-88',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1003',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca67c5',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca67c5',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19769021cda,
          },
          'e-1004': {
            id: 'e-1004',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-88',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1005',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca67fe',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|e944b363-b4be-19c9-d750-170373ca67fe',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19769024d27,
          },
          'e-1006': {
            id: 'e-1006',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1007' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|5f58470b-4992-bbef-588b-048591948faa',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|5f58470b-4992-bbef-588b-048591948faa',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19776c09145,
          },
          'e-1008': {
            id: 'e-1008',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-1009' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|8a62c19d-f8df-f83c-986a-7ce948cff7b2',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|8a62c19d-f8df-f83c-986a-7ce948cff7b2',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 300,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x19776c0e87f,
          },
          'e-1010': {
            id: 'e-1010',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-1011' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|ef008631-8c9a-a248-4aa7-27b06ff07289',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|ef008631-8c9a-a248-4aa7-27b06ff07289',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 450,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x19776c10ad7,
          },
          'e-1012': {
            id: 'e-1012',
            name: '',
            animationType: 'custom',
            eventTypeId: 'TAB_ACTIVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-89',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1013',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.company_tab_link',
              originalId: '684fbcf62c9ad3364be9810c|d7e6924d-e38c-524f-759c-f74dc14c1310',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.company_tab_link',
                originalId: '684fbcf62c9ad3364be9810c|d7e6924d-e38c-524f-759c-f74dc14c1310',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19777a9d881,
          },
          'e-1013': {
            id: 'e-1013',
            name: '',
            animationType: 'custom',
            eventTypeId: 'TAB_INACTIVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-90',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1012',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.company_tab_link',
              originalId: '684fbcf62c9ad3364be9810c|d7e6924d-e38c-524f-759c-f74dc14c1310',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.company_tab_link',
                originalId: '684fbcf62c9ad3364be9810c|d7e6924d-e38c-524f-759c-f74dc14c1310',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19777a9d884,
          },
          'e-1052': {
            id: 'e-1052',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-70',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1700',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '7dabcb24-415d-3b13-f3c4-ed9365537e99',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '7dabcb24-415d-3b13-f3c4-ed9365537e99',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979e2accb2,
          },
          'e-1053': {
            id: 'e-1053',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-71',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1703',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '7dabcb24-415d-3b13-f3c4-ed9365537e99',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '7dabcb24-415d-3b13-f3c4-ed9365537e99',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979e2accb2,
          },
          'e-1062': {
            id: 'e-1062',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-70',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1755',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '7dabcb24-415d-3b13-f3c4-ed9365537f4e',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '7dabcb24-415d-3b13-f3c4-ed9365537f4e',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979e2accb2,
          },
          'e-1063': {
            id: 'e-1063',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-71',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1666',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '7dabcb24-415d-3b13-f3c4-ed9365537f4e',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '7dabcb24-415d-3b13-f3c4-ed9365537f4e',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979e2accb2,
          },
          'e-1068': {
            id: 'e-1068',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-88',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1069',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|c9d98404-39aa-9fa5-3efe-5cd8e6190d20',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|c9d98404-39aa-9fa5-3efe-5cd8e6190d20',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197a16e38c8,
          },
          'e-1070': {
            id: 'e-1070',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-88',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1071',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|e2e139d8-8a43-e6d1-3b48-72ab08d24086',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|e2e139d8-8a43-e6d1-3b48-72ab08d24086',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197a174cf18,
          },
          'e-1072': {
            id: 'e-1072',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-88',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1073',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|465e3721-2625-d2b6-2297-2b2a62d6f5de',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|465e3721-2625-d2b6-2297-2b2a62d6f5de',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197a17a387b,
          },
          'e-1074': {
            id: 'e-1074',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-88',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1075',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|5b05cdbd-47be-7c56-c8c4-e89d4c4a962a',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|5b05cdbd-47be-7c56-c8c4-e89d4c4a962a',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197a17c1857,
          },
          'e-1076': {
            id: 'e-1076',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-88',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1077',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|5fcda48b-7537-8655-3a2a-9b895f030bad',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|5fcda48b-7537-8655-3a2a-9b895f030bad',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197a17ecfef,
          },
          'e-1080': {
            id: 'e-1080',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-1081' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|02e2db29-b99f-1b65-2fff-a89b0a924a5f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|02e2db29-b99f-1b65-2fff-a89b0a924a5f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x197afb32fe3,
          },
          'e-1086': {
            id: 'e-1086',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-88',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1087',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.marquee_apps_logo',
              originalId: '6825ae0ac11a1a7d6a345f09|0725fe44-34e0-5971-c6f8-1bdc509ea806',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.marquee_apps_logo',
                originalId: '6825ae0ac11a1a7d6a345f09|0725fe44-34e0-5971-c6f8-1bdc509ea806',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197beda4842,
          },
          'e-1095': {
            id: 'e-1095',
            name: '',
            animationType: 'custom',
            eventTypeId: 'PAGE_SCROLL_DOWN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-167',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1094',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: { id: '683bd31a5c5945e5b0c369f2', appliesTo: 'PAGE', styleBlockIds: [] },
            targets: [{ id: '683bd31a5c5945e5b0c369f2', appliesTo: 'PAGE', styleBlockIds: [] }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ee765970,
          },
          'e-1174': {
            id: 'e-1174',
            name: '',
            animationType: 'custom',
            eventTypeId: 'PAGE_SCROLL_UP',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-167',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1175',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: { id: '683ff68e92c04cbc1aa1c7ba', appliesTo: 'PAGE', styleBlockIds: [] },
            targets: [{ id: '683ff68e92c04cbc1aa1c7ba', appliesTo: 'PAGE', styleBlockIds: [] }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197f37ceaf7,
          },
          'e-1175': {
            id: 'e-1175',
            name: '',
            animationType: 'custom',
            eventTypeId: 'PAGE_SCROLL_DOWN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-167',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1174',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: { id: '683ff68e92c04cbc1aa1c7ba', appliesTo: 'PAGE', styleBlockIds: [] },
            targets: [{ id: '683ff68e92c04cbc1aa1c7ba', appliesTo: 'PAGE', styleBlockIds: [] }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197f37ceaf9,
          },
          'e-1177': {
            id: 'e-1177',
            name: '',
            animationType: 'custom',
            eventTypeId: 'PAGE_SCROLL_DOWN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-167',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1176',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: { id: '683dd02ae30fa355be2dff01', appliesTo: 'PAGE', styleBlockIds: [] },
            targets: [{ id: '683dd02ae30fa355be2dff01', appliesTo: 'PAGE', styleBlockIds: [] }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197f38db93d,
          },
          'e-1178': {
            id: 'e-1178',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1179',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: 'f64f63d8-ae17-4d06-348f-ccea2de49392',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: 'f64f63d8-ae17-4d06-348f-ccea2de49392',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197f3feea93,
          },
          'e-1190': {
            id: 'e-1190',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-1191' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|23e18552-6132-6165-83fb-0661d60c531c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|23e18552-6132-6165-83fb-0661d60c531c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19812ba46ef,
          },
          'e-1248': {
            id: 'e-1248',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1249' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6879c1184a51cf0249b68db9|3b474aab-9fce-bdb0-40f8-d653152fc7f0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6879c1184a51cf0249b68db9|3b474aab-9fce-bdb0-40f8-d653152fc7f0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x1981b9a3973,
          },
          'e-1275': {
            id: 'e-1275',
            name: '',
            animationType: 'preset',
            eventTypeId: 'PAGE_SCROLL_DOWN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-167',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1274',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: { id: '6879c1184a51cf0249b68db9', appliesTo: 'PAGE', styleBlockIds: [] },
            targets: [{ id: '6879c1184a51cf0249b68db9', appliesTo: 'PAGE', styleBlockIds: [] }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1981b9a3973,
          },
          'e-1276': {
            id: 'e-1276',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-1277' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683ff68e92c04cbc1aa1c7ba|020b42f8-7f93-6db0-7ed3-34c6236ba992',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683ff68e92c04cbc1aa1c7ba|020b42f8-7f93-6db0-7ed3-34c6236ba992',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1981cb5a3fb,
          },
          'e-1278': {
            id: 'e-1278',
            name: '',
            animationType: 'custom',
            eventTypeId: 'TAB_ACTIVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-126',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1279',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.industry_tab_link',
              originalId: '6825ae0ac11a1a7d6a345f09|18ef643c-c999-be23-21fb-16a69075297a',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.industry_tab_link',
                originalId: '6825ae0ac11a1a7d6a345f09|18ef643c-c999-be23-21fb-16a69075297a',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1981d0160e8,
          },
          'e-1279': {
            id: 'e-1279',
            name: '',
            animationType: 'custom',
            eventTypeId: 'TAB_INACTIVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-127',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1278',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.industry_tab_link',
              originalId: '6825ae0ac11a1a7d6a345f09|18ef643c-c999-be23-21fb-16a69075297a',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.industry_tab_link',
                originalId: '6825ae0ac11a1a7d6a345f09|18ef643c-c999-be23-21fb-16a69075297a',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1981d0160ea,
          },
          'e-1328': {
            id: 'e-1328',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-128',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1329',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.prize-card',
              originalId: '6825ae0ac11a1a7d6a345f09|ff3d4079-9163-9658-7aca-b41a9bac839c',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.prize-card',
                originalId: '6825ae0ac11a1a7d6a345f09|ff3d4079-9163-9658-7aca-b41a9bac839c',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1982404d1f4,
          },
          'e-1329': {
            id: 'e-1329',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-129',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1328',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.prize-card',
              originalId: '6825ae0ac11a1a7d6a345f09|ff3d4079-9163-9658-7aca-b41a9bac839c',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.prize-card',
                originalId: '6825ae0ac11a1a7d6a345f09|ff3d4079-9163-9658-7aca-b41a9bac839c',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1982404d1f9,
          },
          'e-1330': {
            id: 'e-1330',
            name: '',
            animationType: 'custom',
            eventTypeId: 'PAGE_START',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1331',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: { id: '6825ae0ac11a1a7d6a345f09', appliesTo: 'PAGE', styleBlockIds: [] },
            targets: [{ id: '6825ae0ac11a1a7d6a345f09', appliesTo: 'PAGE', styleBlockIds: [] }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1982bd14df1,
          },
          'e-1334': {
            id: 'e-1334',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-83',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1335',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.base_products_card-tablet',
              originalId: '6825ae0ac11a1a7d6a345f09|c9d98404-39aa-9fa5-3efe-5cd8e6190d0a',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.base_products_card-tablet',
                originalId: '6825ae0ac11a1a7d6a345f09|c9d98404-39aa-9fa5-3efe-5cd8e6190d0a',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983106184b,
          },
          'e-1335': {
            id: 'e-1335',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-84',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1334',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.base_products_card-tablet',
              originalId: '6825ae0ac11a1a7d6a345f09|c9d98404-39aa-9fa5-3efe-5cd8e6190d0a',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.base_products_card-tablet',
                originalId: '6825ae0ac11a1a7d6a345f09|c9d98404-39aa-9fa5-3efe-5cd8e6190d0a',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983106184c,
          },
          'e-1336': {
            id: 'e-1336',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_MOVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
              config: { actionListId: 'a-82', affectedElements: {}, duration: 0 },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.base_products_card-tablet',
              originalId: '6825ae0ac11a1a7d6a345f09|c9d98404-39aa-9fa5-3efe-5cd8e6190d0a',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.base_products_card-tablet',
                originalId: '6825ae0ac11a1a7d6a345f09|c9d98404-39aa-9fa5-3efe-5cd8e6190d0a',
                appliesTo: 'CLASS',
              },
            ],
            config: [
              {
                continuousParameterGroupId: 'a-82-p',
                selectedAxis: 'X_AXIS',
                basedOn: 'ELEMENT',
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
              {
                continuousParameterGroupId: 'a-82-p-2',
                selectedAxis: 'Y_AXIS',
                basedOn: 'ELEMENT',
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
            ],
            createdOn: 0x198310713c6,
          },
          'e-1340': {
            id: 'e-1340',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-1341' },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.industry_tab_image_wrapper',
              originalId: '6825ae0ac11a1a7d6a345f09|395f734d-0dd5-c79a-3b67-f58b099e47fc',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.industry_tab_image_wrapper',
                originalId: '6825ae0ac11a1a7d6a345f09|395f734d-0dd5-c79a-3b67-f58b099e47fc',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x1983110de27,
          },
          'e-1342': {
            id: 'e-1342',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInTopRight', autoStopEventId: 'e-1343' },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.industry_card_image-left',
              originalId: '6825ae0ac11a1a7d6a345f09|395f734d-0dd5-c79a-3b67-f58b099e4800',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.industry_card_image-left',
                originalId: '6825ae0ac11a1a7d6a345f09|395f734d-0dd5-c79a-3b67-f58b099e4800',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'TOP_RIGHT',
              effectIn: !0,
            },
            createdOn: 0x19831112b0e,
          },
          'e-1344': {
            id: 'e-1344',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInTopLeft', autoStopEventId: 'e-1345' },
            },
            mediaQueries: ['main'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|395f734d-0dd5-c79a-3b67-f58b099e4803',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|395f734d-0dd5-c79a-3b67-f58b099e4803',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 300,
              direction: 'TOP_LEFT',
              effectIn: !0,
            },
            createdOn: 0x19831119fc7,
          },
          'e-1346': {
            id: 'e-1346',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-83',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1347',
              },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.testimonial_slide_content',
              originalId: '6825ae0ac11a1a7d6a345f09|8f868f51-a13c-4470-b9d5-d7c74dfff32c',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.testimonial_slide_content',
                originalId: '6825ae0ac11a1a7d6a345f09|8f868f51-a13c-4470-b9d5-d7c74dfff32c',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198360bc7d6,
          },
          'e-1347': {
            id: 'e-1347',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-84',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1346',
              },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.testimonial_slide_content',
              originalId: '6825ae0ac11a1a7d6a345f09|8f868f51-a13c-4470-b9d5-d7c74dfff32c',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.testimonial_slide_content',
                originalId: '6825ae0ac11a1a7d6a345f09|8f868f51-a13c-4470-b9d5-d7c74dfff32c',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198360bc7d8,
          },
          'e-1348': {
            id: 'e-1348',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_MOVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
              config: { actionListId: 'a-82', affectedElements: {}, duration: 0 },
            },
            mediaQueries: ['main'],
            target: {
              selector: '.testimonial_slide_content',
              originalId: '6825ae0ac11a1a7d6a345f09|8f868f51-a13c-4470-b9d5-d7c74dfff32c',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.testimonial_slide_content',
                originalId: '6825ae0ac11a1a7d6a345f09|8f868f51-a13c-4470-b9d5-d7c74dfff32c',
                appliesTo: 'CLASS',
              },
            ],
            config: [
              {
                continuousParameterGroupId: 'a-82-p',
                selectedAxis: 'X_AXIS',
                basedOn: 'ELEMENT',
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
              {
                continuousParameterGroupId: 'a-82-p-2',
                selectedAxis: 'Y_AXIS',
                basedOn: 'ELEMENT',
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
            ],
            createdOn: 0x198360c61d7,
          },
          'e-1375': {
            id: 'e-1375',
            name: '',
            animationType: 'custom',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-133',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1735',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.navbar_menu-dropdown',
              originalId: '7dabcb24-415d-3b13-f3c4-ed9365537f2e',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.navbar_menu-dropdown',
                originalId: '7dabcb24-415d-3b13-f3c4-ed9365537f2e',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19836e55c64,
          },
          'e-1376': {
            id: 'e-1376',
            name: '',
            animationType: 'custom',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-134',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1730',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.navbar_menu-dropdown',
              originalId: '7dabcb24-415d-3b13-f3c4-ed9365537f2e',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.navbar_menu-dropdown',
                originalId: '7dabcb24-415d-3b13-f3c4-ed9365537f2e',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19836e55c68,
          },
          'e-1377': {
            id: 'e-1377',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-135',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1378',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|4139e0da-dea4-511a-e9f9-ae379f9553e2',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|4139e0da-dea4-511a-e9f9-ae379f9553e2',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983b406a63,
          },
          'e-1378': {
            id: 'e-1378',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-136',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1377',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|4139e0da-dea4-511a-e9f9-ae379f9553e2',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|4139e0da-dea4-511a-e9f9-ae379f9553e2',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983b406a65,
          },
          'e-1405': {
            id: 'e-1405',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-1716' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|6dd9bb13-6c81-a1bb-70e5-dba660321b1e',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|6dd9bb13-6c81-a1bb-70e5-dba660321b1e',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1983c096c39,
          },
          'e-1407': {
            id: 'e-1407',
            name: '',
            animationType: 'custom',
            eventTypeId: 'TAB_ACTIVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-137',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1676',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.solution_tab_link',
              originalId: '68820573d735f685c968d848|26114a57-11c5-a620-2566-00bce99ff59e',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.solution_tab_link',
                originalId: '68820573d735f685c968d848|26114a57-11c5-a620-2566-00bce99ff59e',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983cff5d73,
          },
          'e-1408': {
            id: 'e-1408',
            name: '',
            animationType: 'custom',
            eventTypeId: 'TAB_INACTIVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-138',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1677',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.solution_tab_link',
              originalId: '68820573d735f685c968d848|26114a57-11c5-a620-2566-00bce99ff59e',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.solution_tab_link',
                originalId: '68820573d735f685c968d848|26114a57-11c5-a620-2566-00bce99ff59e',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983cff5d75,
          },
          'e-1415': {
            id: 'e-1415',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLLING_IN_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
              config: { actionListId: 'a-141', affectedElements: {}, duration: 0 },
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '683bc343034dacf2e7740990|546a2fc4-984f-1e32-7288-fccee7a70588',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|546a2fc4-984f-1e32-7288-fccee7a70588',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: 'a-141-p',
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1983dcf3c50,
          },
          'e-1444': {
            id: 'e-1444',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-31',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1445',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '4060d783-80ba-d591-2f7c-9ff0ad498fbe',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '4060d783-80ba-d591-2f7c-9ff0ad498fbe',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198421efdab,
          },
          'e-1445': {
            id: 'e-1445',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-32',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1444',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '4060d783-80ba-d591-2f7c-9ff0ad498fbe',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '4060d783-80ba-d591-2f7c-9ff0ad498fbe',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198421efdad,
          },
          'e-1446': {
            id: 'e-1446',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-1447' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|f45fd7d0-db9d-c09a-a2cb-86fdb6c3a40b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|f45fd7d0-db9d-c09a-a2cb-86fdb6c3a40b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x19845873c55,
          },
          'e-1448': {
            id: 'e-1448',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-1449' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|f45fd7d0-db9d-c09a-a2cb-86fdb6c3a41a',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|f45fd7d0-db9d-c09a-a2cb-86fdb6c3a41a',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x198458799d1,
          },
          'e-1455': {
            id: 'e-1455',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLLING_IN_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
              config: { actionListId: 'a-149', affectedElements: {}, duration: 0 },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.pricing_comparision_wrapper',
              originalId: '68820573d735f685c968d848|9136d0cc-7408-a833-457c-eddd09036ecb',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.pricing_comparision_wrapper',
                originalId: '68820573d735f685c968d848|9136d0cc-7408-a833-457c-eddd09036ecb',
                appliesTo: 'CLASS',
              },
            ],
            config: [
              {
                continuousParameterGroupId: 'a-149-p',
                smoothing: 50,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1984fe23103,
          },
          'e-1456': {
            id: 'e-1456',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-146',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1719',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.pricing_dropdown_toggle',
              originalId: '68820573d735f685c968d848|7a34988e-5785-e62c-29f1-22b2c4b014cb',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.pricing_dropdown_toggle',
                originalId: '68820573d735f685c968d848|7a34988e-5785-e62c-29f1-22b2c4b014cb',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1984ff2ff9f,
          },
          'e-1457': {
            id: 'e-1457',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1717',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.pricing_dropdown_toggle',
              originalId: '68820573d735f685c968d848|7a34988e-5785-e62c-29f1-22b2c4b014cb',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.pricing_dropdown_toggle',
                originalId: '68820573d735f685c968d848|7a34988e-5785-e62c-29f1-22b2c4b014cb',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1984ff2ff9f,
          },
          'e-1530': {
            id: 'e-1530',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-151',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1531',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68873bced3739e3afca280aa|9136d0cc-7408-a833-457c-eddd09036e27',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68873bced3739e3afca280aa|9136d0cc-7408-a833-457c-eddd09036e27',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19850ad98b1,
          },
          'e-1531': {
            id: 'e-1531',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_OUT_OF_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-153',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1530',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68873bced3739e3afca280aa|9136d0cc-7408-a833-457c-eddd09036e27',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68873bced3739e3afca280aa|9136d0cc-7408-a833-457c-eddd09036e27',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19850ad98b3,
          },
          'e-1590': {
            id: 'e-1590',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1591',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|e8cd07a8-c5e2-680d-aaea-6d7ee5ed996d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|e8cd07a8-c5e2-680d-aaea-6d7ee5ed996d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19856180f8f,
          },
          'e-1592': {
            id: 'e-1592',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1593',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|0b791bb4-6519-e527-a670-903805cac868',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|0b791bb4-6519-e527-a670-903805cac868',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19856190900,
          },
          'e-1594': {
            id: 'e-1594',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1595',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|cdd90a51-78bd-feea-c721-a0138c8312f1',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|cdd90a51-78bd-feea-c721-a0138c8312f1',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561ae607,
          },
          'e-1596': {
            id: 'e-1596',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1597',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.marquee_logo_item',
              originalId: '6825ae0ac11a1a7d6a345f09|9a5b2bb0-9a4b-c869-4883-ffc8a2175fb8',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.marquee_logo_item',
                originalId: '6825ae0ac11a1a7d6a345f09|9a5b2bb0-9a4b-c869-4883-ffc8a2175fb8',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561ae6c0,
          },
          'e-1597': {
            id: 'e-1597',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-156',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1596',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.marquee_logo_item',
              originalId: '6825ae0ac11a1a7d6a345f09|9a5b2bb0-9a4b-c869-4883-ffc8a2175fb8',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.marquee_logo_item',
                originalId: '6825ae0ac11a1a7d6a345f09|9a5b2bb0-9a4b-c869-4883-ffc8a2175fb8',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561ae6c0,
          },
          'e-1598': {
            id: 'e-1598',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1599',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|371a1b55-7d74-7572-416b-35f7ff5c1e44',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|371a1b55-7d74-7572-416b-35f7ff5c1e44',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561ae746,
          },
          'e-1600': {
            id: 'e-1600',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1601',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|8e3f8c5d-d5c0-ab59-5859-8315456315c5',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|8e3f8c5d-d5c0-ab59-5859-8315456315c5',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561ae814,
          },
          'e-1602': {
            id: 'e-1602',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1603',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|8a3a34e4-2d9f-75d4-70d3-4613a95bcafd',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|8a3a34e4-2d9f-75d4-70d3-4613a95bcafd',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561ae899,
          },
          'e-1604': {
            id: 'e-1604',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1605',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|edf33f17-0e12-9c1d-ddb7-3302128b4bf5',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|edf33f17-0e12-9c1d-ddb7-3302128b4bf5',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561ae970,
          },
          'e-1606': {
            id: 'e-1606',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1607',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|5850dce4-23d4-3512-d751-aba7887f7e2f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|5850dce4-23d4-3512-d751-aba7887f7e2f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561e39fb,
          },
          'e-1608': {
            id: 'e-1608',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1609',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|15e00f72-41bf-8c75-5d2d-b3f952c8c75f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|15e00f72-41bf-8c75-5d2d-b3f952c8c75f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561e3c73,
          },
          'e-1610': {
            id: 'e-1610',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1611',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|37113783-f433-8814-cf97-8fb4134ac4c5',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|37113783-f433-8814-cf97-8fb4134ac4c5',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561e3ea4,
          },
          'e-1612': {
            id: 'e-1612',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1613',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|06fd21dc-5931-f6ff-093e-9da08ee3a5a4',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|06fd21dc-5931-f6ff-093e-9da08ee3a5a4',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561e40f0,
          },
          'e-1614': {
            id: 'e-1614',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1615',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|6fcaa6c8-17c0-d1bf-1eb1-76d6724c28a0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|6fcaa6c8-17c0-d1bf-1eb1-76d6724c28a0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561e42e5,
          },
          'e-1616': {
            id: 'e-1616',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1617',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|19594690-5e8d-d8dc-f132-4b64c5431bc4',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|19594690-5e8d-d8dc-f132-4b64c5431bc4',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198561e44da,
          },
          'e-1618': {
            id: 'e-1618',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1619' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|00eaab9a-9a5c-99e3-966d-150a1da36376',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|00eaab9a-9a5c-99e3-966d-150a1da36376',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x198562efbcb,
          },
          'e-1620': {
            id: 'e-1620',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-1621' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|00eaab9a-9a5c-99e3-966d-150a1da36377',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|00eaab9a-9a5c-99e3-966d-150a1da36377',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 300,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x198562efbcb,
          },
          'e-1622': {
            id: 'e-1622',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-1623' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|00eaab9a-9a5c-99e3-966d-150a1da36378',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|00eaab9a-9a5c-99e3-966d-150a1da36378',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 450,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x198562efbcb,
          },
          'e-1624': {
            id: 'e-1624',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1625' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|3b474aab-9fce-bdb0-40f8-d653152fc7f0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|3b474aab-9fce-bdb0-40f8-d653152fc7f0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x1985a0ad210,
          },
          'e-1627': {
            id: 'e-1627',
            name: '',
            animationType: 'preset',
            eventTypeId: 'PAGE_SCROLL_DOWN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-167',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1626',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: { id: '6889bd1fdcbc254c432f01d6', appliesTo: 'PAGE', styleBlockIds: [] },
            targets: [{ id: '6889bd1fdcbc254c432f01d6', appliesTo: 'PAGE', styleBlockIds: [] }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985a0ad210,
          },
          'e-1628': {
            id: 'e-1628',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-1629' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|6dd9bb13-6c81-a1bb-70e5-dba660321b1e',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|6dd9bb13-6c81-a1bb-70e5-dba660321b1e',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1985a0ad210,
          },
          'e-1630': {
            id: 'e-1630',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-142',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1631',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|34b3ccb6-f891-21ba-69c4-e037663ded56',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|34b3ccb6-f891-21ba-69c4-e037663ded56',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985a0ad210,
          },
          'e-1631': {
            id: 'e-1631',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-143',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1630',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|34b3ccb6-f891-21ba-69c4-e037663ded56',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|34b3ccb6-f891-21ba-69c4-e037663ded56',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985a0ad210,
          },
          'e-1634': {
            id: 'e-1634',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-142',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1635',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|53cde827-02a3-8b9a-4851-033b09c5654f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|53cde827-02a3-8b9a-4851-033b09c5654f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985a0ad210,
          },
          'e-1635': {
            id: 'e-1635',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-143',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1634',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|53cde827-02a3-8b9a-4851-033b09c5654f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|53cde827-02a3-8b9a-4851-033b09c5654f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985a0ad210,
          },
          'e-1636': {
            id: 'e-1636',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-142',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1637',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|fe305fa2-f55f-5dff-9d0a-fa24a560475c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|fe305fa2-f55f-5dff-9d0a-fa24a560475c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985a0ad210,
          },
          'e-1637': {
            id: 'e-1637',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-143',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1636',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|fe305fa2-f55f-5dff-9d0a-fa24a560475c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|fe305fa2-f55f-5dff-9d0a-fa24a560475c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985a0ad210,
          },
          'e-1640': {
            id: 'e-1640',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1724',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae16a6',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae16a6',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19840dfe29f,
          },
          'e-1641': {
            id: 'e-1641',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1742',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae19b4',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae19b4',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198548a6d31,
          },
          'e-1643': {
            id: 'e-1643',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1721',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae15e2',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae15e2',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19840dfe580,
          },
          'e-1645': {
            id: 'e-1645',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1678',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1971',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1971',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198548a6d31,
          },
          'e-1646': {
            id: 'e-1646',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-14',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-354',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.button-5.darkmode.linear-stroke',
              originalId: 'c6e8a84c-0888-6bc4-55ac-a0bac0d5de1e',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.button-5.darkmode.linear-stroke',
                originalId: 'c6e8a84c-0888-6bc4-55ac-a0bac0d5de1e',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197204276f0,
          },
          'e-1648': {
            id: 'e-1648',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1747',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae17db',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae17db',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985000d8bc,
          },
          'e-1651': {
            id: 'e-1651',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1754',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1570',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1570',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19840bcc084,
          },
          'e-1652': {
            id: 'e-1652',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-157',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1711',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1298',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1298',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983fef9292,
          },
          'e-1654': {
            id: 'e-1654',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-139',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1658',
              },
            },
            mediaQueries: ['main'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1382',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1382',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198406bd6d5,
          },
          'e-1657': {
            id: 'e-1657',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-146',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1715',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1644',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1644',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19840dfe3e1,
          },
          'e-1665': {
            id: 'e-1665',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-15',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-353',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.button-5.darkmode.linear-stroke',
              originalId: 'c6e8a84c-0888-6bc4-55ac-a0bac0d5de1e',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.button-5.darkmode.linear-stroke',
                originalId: 'c6e8a84c-0888-6bc4-55ac-a0bac0d5de1e',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197204276f1,
          },
          'e-1667': {
            id: 'e-1667',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-1716' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae119c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae119c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1983c096c39,
          },
          'e-1669': {
            id: 'e-1669',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-144',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1671',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1414',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1414',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198406f04ef,
          },
          'e-1670': {
            id: 'e-1670',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1722' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1186',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1186',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x1983be55066,
          },
          'e-1672': {
            id: 'e-1672',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-24',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1734',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1afc',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1afc',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973a1d1cf3,
          },
          'e-1674': {
            id: 'e-1674',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-161',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1759',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae128d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae128d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983fef93f8,
          },
          'e-1676': {
            id: 'e-1676',
            name: '',
            animationType: 'custom',
            eventTypeId: 'TAB_INACTIVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-163',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1677',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.solution_tab_link',
              originalId: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1254',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.solution_tab_link',
                originalId: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1254',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983cff5d75,
          },
          'e-1677': {
            id: 'e-1677',
            name: '',
            animationType: 'custom',
            eventTypeId: 'TAB_ACTIVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-159',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1676',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.solution_tab_link',
              originalId: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1254',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.solution_tab_link',
                originalId: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1254',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983cff5d73,
          },
          'e-1680': {
            id: 'e-1680',
            name: '',
            animationType: 'custom',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-157',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1741',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1282',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1282',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983fecf735,
          },
          'e-1691': {
            id: 'e-1691',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1656',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1755',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1755',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985000f621,
          },
          'e-1697': {
            id: 'e-1697',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1682',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1798',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1798',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985000f3bb,
          },
          'e-1702': {
            id: 'e-1702',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-1698' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.section-name-3',
              originalId: '6889a7cfd299864707456ca1|8d9529ab-e59b-ff05-783a-d5cbef96898c',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.section-name-3',
                originalId: '6889a7cfd299864707456ca1|8d9529ab-e59b-ff05-783a-d5cbef96898c',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1975303d068,
          },
          'e-1704': {
            id: 'e-1704',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-145',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1750',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae13cb',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae13cb',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198406c1f6b,
          },
          'e-1711': {
            id: 'e-1711',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-161',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1652',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1298',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1298',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983fef9292,
          },
          'e-1713': {
            id: 'e-1713',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-139',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1696',
              },
            },
            mediaQueries: ['main'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1414',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1414',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983d45ca6f,
          },
          'e-1715': {
            id: 'e-1715',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1657',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1644',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1644',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19840dfe3e1,
          },
          'e-1717': {
            id: 'e-1717',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-146',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1719',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.pricing_dropdown_toggle-2',
              originalId: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1707',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.pricing_dropdown_toggle-2',
                originalId: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1707',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1984ff2ff9f,
          },
          'e-1718': {
            id: 'e-1718',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1701',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae18a6',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae18a6',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198548a63ea,
          },
          'e-1719': {
            id: 'e-1719',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1717',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.pricing_dropdown_toggle-2',
              originalId: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1707',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.pricing_dropdown_toggle-2',
                originalId: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1707',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1984ff2ff9f,
          },
          'e-1720': {
            id: 'e-1720',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1714',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae18e9',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae18e9',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198548a63ea,
          },
          'e-1721': {
            id: 'e-1721',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-146',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1643',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae15e2',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae15e2',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19840dfe580,
          },
          'e-1723': {
            id: 'e-1723',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-161',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1736',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae12a3',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae12a3',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983fef90e6,
          },
          'e-1724': {
            id: 'e-1724',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-146',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1640',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae16a6',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae16a6',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19840dfe29f,
          },
          'e-1725': {
            id: 'e-1725',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-24',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1749',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1af8',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1af8',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973a1d1cf3,
          },
          'e-1729': {
            id: 'e-1729',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_OUT_OF_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-164',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1738',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae154b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae154b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19850259a82,
          },
          'e-1730': {
            id: 'e-1730',
            name: '',
            animationType: 'custom',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-158',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1735',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.navbar_menu-dropdown',
              originalId: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1b81',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.navbar_menu-dropdown',
                originalId: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1b81',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19836e55c64,
          },
          'e-1732': {
            id: 'e-1732',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1737',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1863',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1863',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198548a63ea,
          },
          'e-1734': {
            id: 'e-1734',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-23',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1672',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1afc',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1afc',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973a1d1cf3,
          },
          'e-1735': {
            id: 'e-1735',
            name: '',
            animationType: 'custom',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-160',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1730',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              selector: '.navbar_menu-dropdown',
              originalId: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1b81',
              appliesTo: 'CLASS',
            },
            targets: [
              {
                selector: '.navbar_menu-dropdown',
                originalId: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1b81',
                appliesTo: 'CLASS',
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19836e55c68,
          },
          'e-1736': {
            id: 'e-1736',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-157',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1723',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae12a3',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae12a3',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983fef90e6,
          },
          'e-1738': {
            id: 'e-1738',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-162',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1729',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae154b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae154b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19850259a80,
          },
          'e-1741': {
            id: 'e-1741',
            name: '',
            animationType: 'custom',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-161',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1680',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1282',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1282',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983fecf734,
          },
          'e-1745': {
            id: 'e-1745',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-144',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1728',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1382',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1382',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983d45a301,
          },
          'e-1749': {
            id: 'e-1749',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-23',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1725',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1af8',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1af8',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973a1d1cf3,
          },
          'e-1758': {
            id: 'e-1758',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-140',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1675',
              },
            },
            mediaQueries: ['main'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae13cb',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae13cb',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983d41de3b,
          },
          'e-1759': {
            id: 'e-1759',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-157',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1674',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae128d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae128d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1983fef93f8,
          },
          'e-1760': {
            id: 'e-1760',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-147',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1662',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae19f7',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae19f7',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198548a6d31,
          },
          'e-1767': {
            id: 'e-1767',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-72',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1768',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|bf604a31-3a03-ac09-4746-a961e1f2b9be',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|bf604a31-3a03-ac09-4746-a961e1f2b9be',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985a28d958,
          },
          'e-1775': {
            id: 'e-1775',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-165',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1776',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|fd1ceb75-ea3a-f01f-78a7-d65025f6b62b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|fd1ceb75-ea3a-f01f-78a7-d65025f6b62b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985a9b2545,
          },
          'e-1804': {
            id: 'e-1804',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1805' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|f1300f70-d020-a701-d06a-b908700e884b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|f1300f70-d020-a701-d06a-b908700e884b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x1985aa2893e,
          },
          'e-1806': {
            id: 'e-1806',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-151',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1807',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889e9ad06f609f86293dc01|9136d0cc-7408-a833-457c-eddd09036e27',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|9136d0cc-7408-a833-457c-eddd09036e27',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985ab97f0c,
          },
          'e-1807': {
            id: 'e-1807',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_OUT_OF_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-153',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1806',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889e9ad06f609f86293dc01|9136d0cc-7408-a833-457c-eddd09036e27',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|9136d0cc-7408-a833-457c-eddd09036e27',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985ab97f0c,
          },
          'e-1822': {
            id: 'e-1822',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-150',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1823',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae119f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae119f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985b3ee54e,
          },
          'e-1824': {
            id: 'e-1824',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-1825' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5a7d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5a7d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 120,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x1985c1e4802,
          },
          'e-1826': {
            id: 'e-1826',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-1827' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5a8a',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5a8a',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x1985c1e4802,
          },
          'e-1828': {
            id: 'e-1828',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-1829' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5a90',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5a90',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 120,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x1985c1e4802,
          },
          'e-1830': {
            id: 'e-1830',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-1831' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5a9d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5a9d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x1985c1e4802,
          },
          'e-1832': {
            id: 'e-1832',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-1833' },
            },
            mediaQueries: ['main'],
            target: {
              id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5aa3',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5aa3',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 120,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x1985c1e4802,
          },
          'e-1834': {
            id: 'e-1834',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-1835' },
            },
            mediaQueries: ['main'],
            target: {
              id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5ab0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5ab0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x1985c1e4802,
          },
          'e-1836': {
            id: 'e-1836',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-1837' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5ab6',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5ab6',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 120,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x1985c1e4802,
          },
          'e-1838': {
            id: 'e-1838',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-1839' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5ac3',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|32bb08a5-64a4-61aa-3982-07de755b5ac3',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x1985c1e4802,
          },
          'e-1840': {
            id: 'e-1840',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-139',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1841',
              },
            },
            mediaQueries: ['main'],
            target: {
              id: '6889e9ad06f609f86293dc01|08afc492-1235-9319-8717-487f236f00b9',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|08afc492-1235-9319-8717-487f236f00b9',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e98989a,
          },
          'e-1842': {
            id: 'e-1842',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-144',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1843',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '6889e9ad06f609f86293dc01|08afc492-1235-9319-8717-487f236f00b9',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|08afc492-1235-9319-8717-487f236f00b9',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e98989a,
          },
          'e-1844': {
            id: 'e-1844',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-140',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1845',
              },
            },
            mediaQueries: ['main'],
            target: {
              id: '6889e9ad06f609f86293dc01|08afc492-1235-9319-8717-487f236f00f4',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|08afc492-1235-9319-8717-487f236f00f4',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e98989a,
          },
          'e-1846': {
            id: 'e-1846',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-145',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1847',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '6889e9ad06f609f86293dc01|08afc492-1235-9319-8717-487f236f00f4',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|08afc492-1235-9319-8717-487f236f00f4',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e98989a,
          },
          'e-1848': {
            id: 'e-1848',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-139',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1849',
              },
            },
            mediaQueries: ['main'],
            target: {
              id: '6889e9ad06f609f86293dc01|08afc492-1235-9319-8717-487f236f0137',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|08afc492-1235-9319-8717-487f236f0137',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e98989a,
          },
          'e-1850': {
            id: 'e-1850',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-144',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1851',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '6889e9ad06f609f86293dc01|08afc492-1235-9319-8717-487f236f0137',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889e9ad06f609f86293dc01|08afc492-1235-9319-8717-487f236f0137',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e98989a,
          },
          'e-1852': {
            id: 'e-1852',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-144',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1853',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '68873bced3739e3afca280aa|4362a4ed-6b87-2550-c61a-a8f379666e69',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68873bced3739e3afca280aa|4362a4ed-6b87-2550-c61a-a8f379666e69',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e992560,
          },
          'e-1854': {
            id: 'e-1854',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-139',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1855',
              },
            },
            mediaQueries: ['main'],
            target: {
              id: '68873bced3739e3afca280aa|4362a4ed-6b87-2550-c61a-a8f379666e69',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68873bced3739e3afca280aa|4362a4ed-6b87-2550-c61a-a8f379666e69',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e992560,
          },
          'e-1856': {
            id: 'e-1856',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-145',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1857',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '68873bced3739e3afca280aa|4362a4ed-6b87-2550-c61a-a8f379666ea4',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68873bced3739e3afca280aa|4362a4ed-6b87-2550-c61a-a8f379666ea4',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e992560,
          },
          'e-1858': {
            id: 'e-1858',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-140',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1859',
              },
            },
            mediaQueries: ['main'],
            target: {
              id: '68873bced3739e3afca280aa|4362a4ed-6b87-2550-c61a-a8f379666ea4',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68873bced3739e3afca280aa|4362a4ed-6b87-2550-c61a-a8f379666ea4',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e992560,
          },
          'e-1860': {
            id: 'e-1860',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-144',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1861',
              },
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '68873bced3739e3afca280aa|4362a4ed-6b87-2550-c61a-a8f379666ee7',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68873bced3739e3afca280aa|4362a4ed-6b87-2550-c61a-a8f379666ee7',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e992560,
          },
          'e-1862': {
            id: 'e-1862',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-139',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1863',
              },
            },
            mediaQueries: ['main'],
            target: {
              id: '68873bced3739e3afca280aa|4362a4ed-6b87-2550-c61a-a8f379666ee7',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68873bced3739e3afca280aa|4362a4ed-6b87-2550-c61a-a8f379666ee7',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e992560,
          },
          'e-1864': {
            id: 'e-1864',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1865' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|9e6b89cd-8c89-3413-f326-7f987d0e718d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|9e6b89cd-8c89-3413-f326-7f987d0e718d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x197ee0d8967,
          },
          'e-1866': {
            id: 'e-1866',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-1867' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|9e6b89cd-8c89-3413-f326-7f987d0e718e',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|9e6b89cd-8c89-3413-f326-7f987d0e718e',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 300,
              direction: 'LEFT',
              effectIn: !0,
            },
            createdOn: 0x197ee0d8967,
          },
          'e-1868': {
            id: 'e-1868',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-1869' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bd31a5c5945e5b0c369f2|9e6b89cd-8c89-3413-f326-7f987d0e718f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bd31a5c5945e5b0c369f2|9e6b89cd-8c89-3413-f326-7f987d0e718f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 450,
              direction: 'RIGHT',
              effectIn: !0,
            },
            createdOn: 0x197ee0d8967,
          },
          'e-1870': {
            id: 'e-1870',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-1871' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '06e3b4cd-feaa-7655-bf7e-7acb98e87a93',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '06e3b4cd-feaa-7655-bf7e-7acb98e87a93',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 50,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19863c32adb,
          },
          'e-1872': {
            id: 'e-1872',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-1873' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '06e3b4cd-feaa-7655-bf7e-7acb98e87a95',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '06e3b4cd-feaa-7655-bf7e-7acb98e87a95',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 20,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19863c32adb,
          },
          'e-1874': {
            id: 'e-1874',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1875' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '06e3b4cd-feaa-7655-bf7e-7acb98e87a9b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '06e3b4cd-feaa-7655-bf7e-7acb98e87a9b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 250,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19863c32adb,
          },
          'e-1876': {
            id: 'e-1876',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-72',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1877',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '06e3b4cd-feaa-7655-bf7e-7acb98e87aa2',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '06e3b4cd-feaa-7655-bf7e-7acb98e87aa2',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19863def12b,
          },
          'e-1878': {
            id: 'e-1878',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-165',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1879',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '06e3b4cd-feaa-7655-bf7e-7acb98e87aa6',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '06e3b4cd-feaa-7655-bf7e-7acb98e87aa6',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19863df6b25,
          },
          'e-1880': {
            id: 'e-1880',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1881' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|3b474aab-9fce-bdb0-40f8-d653152fc7f0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|3b474aab-9fce-bdb0-40f8-d653152fc7f0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19863e4e4e4,
          },
          'e-1883': {
            id: 'e-1883',
            name: '',
            animationType: 'preset',
            eventTypeId: 'PAGE_SCROLL_DOWN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-167',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1882',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: { id: '688c42c9f2c798b4cb8b4bf4', appliesTo: 'PAGE', styleBlockIds: [] },
            targets: [{ id: '688c42c9f2c798b4cb8b4bf4', appliesTo: 'PAGE', styleBlockIds: [] }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19863e4e4e4,
          },
          'e-1884': {
            id: 'e-1884',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-1885' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|6dd9bb13-6c81-a1bb-70e5-dba660321b1e',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|6dd9bb13-6c81-a1bb-70e5-dba660321b1e',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19863e4e4e4,
          },
          'e-1886': {
            id: 'e-1886',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-142',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1887',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|34b3ccb6-f891-21ba-69c4-e037663ded56',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|34b3ccb6-f891-21ba-69c4-e037663ded56',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19863e4e4e4,
          },
          'e-1887': {
            id: 'e-1887',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-143',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1886',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|34b3ccb6-f891-21ba-69c4-e037663ded56',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|34b3ccb6-f891-21ba-69c4-e037663ded56',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19863e4e4e4,
          },
          'e-1888': {
            id: 'e-1888',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-142',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1889',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|417c0a99-332e-5f50-1253-f974d6ebe972',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|417c0a99-332e-5f50-1253-f974d6ebe972',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19863e4e4e4,
          },
          'e-1889': {
            id: 'e-1889',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-143',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1888',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|417c0a99-332e-5f50-1253-f974d6ebe972',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|417c0a99-332e-5f50-1253-f974d6ebe972',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19863e4e4e4,
          },
          'e-1890': {
            id: 'e-1890',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-142',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1891',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|53cde827-02a3-8b9a-4851-033b09c5654f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|53cde827-02a3-8b9a-4851-033b09c5654f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19863e4e4e4,
          },
          'e-1891': {
            id: 'e-1891',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-143',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1890',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|53cde827-02a3-8b9a-4851-033b09c5654f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|53cde827-02a3-8b9a-4851-033b09c5654f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19863e4e4e4,
          },
          'e-1892': {
            id: 'e-1892',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-142',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1893',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|fe305fa2-f55f-5dff-9d0a-fa24a560475c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|fe305fa2-f55f-5dff-9d0a-fa24a560475c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19863e4e4e4,
          },
          'e-1893': {
            id: 'e-1893',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-143',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1892',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|fe305fa2-f55f-5dff-9d0a-fa24a560475c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|fe305fa2-f55f-5dff-9d0a-fa24a560475c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19863e4e4e4,
          },
          'e-1907': {
            id: 'e-1907',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1908' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|f1300f70-d020-a701-d06a-b908700e884b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|f1300f70-d020-a701-d06a-b908700e884b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x19863e4e4e4,
          },
          'e-1921': {
            id: 'e-1921',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-72',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1922',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|f0c2dab2-dee4-2c58-130e-5011a7e0d0a9',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|f0c2dab2-dee4-2c58-130e-5011a7e0d0a9',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198642ca944,
          },
          'e-1923': {
            id: 'e-1923',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-72',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1924',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|b9c724ce-23db-9cfb-870f-0df846ba6404',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|b9c724ce-23db-9cfb-870f-0df846ba6404',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198642cad18,
          },
          'e-1925': {
            id: 'e-1925',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-72',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1926',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|5f8108ab-61fe-e7ad-bb54-8951e452e77e',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|5f8108ab-61fe-e7ad-bb54-8951e452e77e',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1986439329d,
          },
          'e-1927': {
            id: 'e-1927',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-165',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1928',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|b1cc851b-f039-aa64-aac2-7dc390830bbc',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|b1cc851b-f039-aa64-aac2-7dc390830bbc',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198644f48d2,
          },
          'e-1929': {
            id: 'e-1929',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1930' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|3b474aab-9fce-bdb0-40f8-d653152fc7f0',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|3b474aab-9fce-bdb0-40f8-d653152fc7f0',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x1986459dcf7,
          },
          'e-1933': {
            id: 'e-1933',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-1934' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|6dd9bb13-6c81-a1bb-70e5-dba660321b1e',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|6dd9bb13-6c81-a1bb-70e5-dba660321b1e',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1986459dcf7,
          },
          'e-1935': {
            id: 'e-1935',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-142',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1936',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|34b3ccb6-f891-21ba-69c4-e037663ded56',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|34b3ccb6-f891-21ba-69c4-e037663ded56',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1986459dcf7,
          },
          'e-1936': {
            id: 'e-1936',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-143',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1935',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|34b3ccb6-f891-21ba-69c4-e037663ded56',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|34b3ccb6-f891-21ba-69c4-e037663ded56',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1986459dcf7,
          },
          'e-1937': {
            id: 'e-1937',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-142',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1938',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|417c0a99-332e-5f50-1253-f974d6ebe972',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|417c0a99-332e-5f50-1253-f974d6ebe972',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1986459dcf7,
          },
          'e-1938': {
            id: 'e-1938',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-143',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1937',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|417c0a99-332e-5f50-1253-f974d6ebe972',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|417c0a99-332e-5f50-1253-f974d6ebe972',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1986459dcf7,
          },
          'e-1939': {
            id: 'e-1939',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-142',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1940',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|53cde827-02a3-8b9a-4851-033b09c5654f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|53cde827-02a3-8b9a-4851-033b09c5654f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1986459dcf7,
          },
          'e-1940': {
            id: 'e-1940',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-143',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1939',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|53cde827-02a3-8b9a-4851-033b09c5654f',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|53cde827-02a3-8b9a-4851-033b09c5654f',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1986459dcf7,
          },
          'e-1941': {
            id: 'e-1941',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_OPEN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-142',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1942',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|fe305fa2-f55f-5dff-9d0a-fa24a560475c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|fe305fa2-f55f-5dff-9d0a-fa24a560475c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1986459dcf7,
          },
          'e-1942': {
            id: 'e-1942',
            name: '',
            animationType: 'preset',
            eventTypeId: 'DROPDOWN_CLOSE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-143',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1941',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|fe305fa2-f55f-5dff-9d0a-fa24a560475c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|fe305fa2-f55f-5dff-9d0a-fa24a560475c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1986459dcf7,
          },
          'e-1956': {
            id: 'e-1956',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1957' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|f1300f70-d020-a701-d06a-b908700e884b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|f1300f70-d020-a701-d06a-b908700e884b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x1986459dcf7,
          },
          'e-1968': {
            id: 'e-1968',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-72',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1969',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|b3605565-e697-2c8d-ec34-56e8c153f317',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|b3605565-e697-2c8d-ec34-56e8c153f317',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19864718c17,
          },
          'e-1970': {
            id: 'e-1970',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-72',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1971',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|8903a58a-3506-3193-52b1-70bdd65cef73',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|8903a58a-3506-3193-52b1-70bdd65cef73',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198647f30a2,
          },
          'e-1972': {
            id: 'e-1972',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-165',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1973',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|8903a58a-3506-3193-52b1-70bdd65cef73',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|8903a58a-3506-3193-52b1-70bdd65cef73',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19864976d5b,
          },
          'e-1982': {
            id: 'e-1982',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1983' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68820573d735f685c968d848|173fe58e-eb19-4f3d-d87e-92327a1364be',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '68820573d735f685c968d848|173fe58e-eb19-4f3d-d87e-92327a1364be',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0,
            },
            createdOn: 0x198652154fa,
          },
          'e-1984': {
            id: 'e-1984',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-72',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1985',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|8903a58a-3506-3193-52b1-70bdd65cef73',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|8903a58a-3506-3193-52b1-70bdd65cef73',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198658c552e,
          },
          'e-1986': {
            id: 'e-1986',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-165',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-1987',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|a54a6449-4aa1-9094-29e4-2e474c5fb2f7',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|a54a6449-4aa1-9094-29e4-2e474c5fb2f7',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198658d1e37,
          },
          'e-2020': {
            id: 'e-2020',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-73',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2021',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|3c0584af-4425-b50a-f169-d0414925e65c',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|3c0584af-4425-b50a-f169-d0414925e65c',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19866349cda,
          },
          'e-2022': {
            id: 'e-2022',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-73',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2023',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|3c0584af-4425-b50a-f169-d0414925e65e',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|3c0584af-4425-b50a-f169-d0414925e65e',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19866349cda,
          },
          'e-2024': {
            id: 'e-2024',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-166',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2025',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|3c0584af-4425-b50a-f169-d0414925e6c7',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|3c0584af-4425-b50a-f169-d0414925e6c7',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19866349cda,
          },
          'e-2026': {
            id: 'e-2026',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-166',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2027',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6889bd1fdcbc254c432f01d6|3c0584af-4425-b50a-f169-d0414925e6c9',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6889bd1fdcbc254c432f01d6|3c0584af-4425-b50a-f169-d0414925e6c9',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19866349cda,
          },
          'e-2028': {
            id: 'e-2028',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2029',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7bd',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7bd',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2030': {
            id: 'e-2030',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2031',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7c4',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7c4',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2032': {
            id: 'e-2032',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2033',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7cb',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7cb',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2034': {
            id: 'e-2034',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2035',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7d2',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7d2',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2036': {
            id: 'e-2036',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2037',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7d9',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7d9',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2038': {
            id: 'e-2038',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2039',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7e7',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7e7',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2040': {
            id: 'e-2040',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2041',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7ee',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7ee',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2042': {
            id: 'e-2042',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2043',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7f5',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7f5',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2044': {
            id: 'e-2044',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2045',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7fc',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f7fc',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2046': {
            id: 'e-2046',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2047',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f803',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f803',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2048': {
            id: 'e-2048',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2049',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f80a',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f80a',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2050': {
            id: 'e-2050',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2051',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f811',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f811',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2052': {
            id: 'e-2052',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-155',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2053',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f818',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|f480700f-3b3c-769c-49d5-bc87ec71f818',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19872febed5,
          },
          'e-2054': {
            id: 'e-2054',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-73',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2055',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|2fd0615a-6e03-f3cf-4a7d-4151fbb63107',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|2fd0615a-6e03-f3cf-4a7d-4151fbb63107',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198742d2940,
          },
          'e-2056': {
            id: 'e-2056',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-73',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2057',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|2fd0615a-6e03-f3cf-4a7d-4151fbb63109',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|2fd0615a-6e03-f3cf-4a7d-4151fbb63109',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198742d2940,
          },
          'e-2058': {
            id: 'e-2058',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-166',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2059',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|2fd0615a-6e03-f3cf-4a7d-4151fbb63178',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|2fd0615a-6e03-f3cf-4a7d-4151fbb63178',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198742d2940,
          },
          'e-2060': {
            id: 'e-2060',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-166',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2061',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c60ba375024bdbc6d9a49|2fd0615a-6e03-f3cf-4a7d-4151fbb6317a',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c60ba375024bdbc6d9a49|2fd0615a-6e03-f3cf-4a7d-4151fbb6317a',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198742d2940,
          },
          'e-2062': {
            id: 'e-2062',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-73',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2063',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|1be40d75-da7f-c2ca-722b-3672063675fa',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|1be40d75-da7f-c2ca-722b-3672063675fa',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198742d9330,
          },
          'e-2064': {
            id: 'e-2064',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-73',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2065',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|1be40d75-da7f-c2ca-722b-3672063675fc',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|1be40d75-da7f-c2ca-722b-3672063675fc',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198742d9330,
          },
          'e-2066': {
            id: 'e-2066',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-166',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2067',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|1be40d75-da7f-c2ca-722b-36720636766b',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|1be40d75-da7f-c2ca-722b-36720636766b',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198742d9330,
          },
          'e-2068': {
            id: 'e-2068',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-166',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2069',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '688c42c9f2c798b4cb8b4bf4|1be40d75-da7f-c2ca-722b-36720636766d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '688c42c9f2c798b4cb8b4bf4|1be40d75-da7f-c2ca-722b-36720636766d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198742d9330,
          },
          'e-2070': {
            id: 'e-2070',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-2071' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|816bad17-5a20-0bb9-9906-e6f9458bc1a8',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|816bad17-5a20-0bb9-9906-e6f9458bc1a8',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x198791b2bab,
          },
          'e-2072': {
            id: 'e-2072',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-2073' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|d4513efb-7de6-fff3-705c-5e71893d17fc',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|d4513efb-7de6-fff3-705c-5e71893d17fc',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x198791c1046,
          },
          'e-2074': {
            id: 'e-2074',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-2075' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|aaa19baa-201d-6599-8d52-33c3478d5461',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|aaa19baa-201d-6599-8d52-33c3478d5461',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x198791c3d9e,
          },
          'e-2076': {
            id: 'e-2076',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FADE_EFFECT',
              instant: !1,
              config: { actionListId: 'fadeIn', autoStopEventId: 'e-2077' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '6825ae0ac11a1a7d6a345f09|ef424706-a75e-06ed-760e-c37adf3b3b02',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '6825ae0ac11a1a7d6a345f09|ef424706-a75e-06ed-760e-c37adf3b3b02',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 300,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x198791ca220,
          },
          'e-2091': {
            id: 'e-2091',
            name: '',
            animationType: 'custom',
            eventTypeId: 'PAGE_SCROLL_DOWN',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-167',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2090',
              },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: { id: '688c60ba375024bdbc6d9a49', appliesTo: 'PAGE', styleBlockIds: [] },
            targets: [{ id: '688c60ba375024bdbc6d9a49', appliesTo: 'PAGE', styleBlockIds: [] }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19883cd5f37,
          },
          'e-2126': {
            id: 'e-2126',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-2127' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '689ae6743f2769c839d1982d|236288db-4a6a-ec62-bc4e-d52eb8a7fc73',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '689ae6743f2769c839d1982d|236288db-4a6a-ec62-bc4e-d52eb8a7fc73',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 200,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1989d7129a3,
          },
          'e-2128': {
            id: 'e-2128',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_BIG_EFFECT',
              instant: !1,
              config: { actionListId: 'growBigIn', autoStopEventId: 'e-2129' },
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '683bc343034dacf2e7740990|900aa8af-91c7-4418-4e3f-bb6c28b63a1d',
              appliesTo: 'ELEMENT',
              styleBlockIds: [],
            },
            targets: [
              {
                id: '683bc343034dacf2e7740990|900aa8af-91c7-4418-4e3f-bb6c28b63a1d',
                appliesTo: 'ELEMENT',
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19840136709,
          },
        },
        actionLists: {
          a: {
            id: 'a',
            title: 'Marquee Logo [Scroll into View]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 4e4,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.marquee_logo_contain',
                        selectorGuids: ['575acd8c-a381-22c5-b5d7-c1a440716f21'],
                      },
                      xValue: -100,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.marquee_logo_contain',
                        selectorGuids: ['575acd8c-a381-22c5-b5d7-c1a440716f21'],
                      },
                      xValue: 0,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196e25fc9ae,
          },
          'a-14': {
            id: 'a-14',
            title: 'Dark Mode Button Light [Hover In]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-14-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.button_hover_light',
                        selectorGuids: ['04a2bfb6-3f8d-02a8-b4f6-e2c3d3cdcbd4'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-14-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.button_hover_light',
                        selectorGuids: ['04a2bfb6-3f8d-02a8-b4f6-e2c3d3cdcbd4'],
                      },
                      value: 1,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19720428216,
          },
          'a-15': {
            id: 'a-15',
            title: 'Dark Mode Button Light [Hover Out]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-15-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 200,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.button_hover_light',
                        selectorGuids: ['04a2bfb6-3f8d-02a8-b4f6-e2c3d3cdcbd4'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19720428216,
          },
          'a-83': {
            id: 'a-83',
            title: 'Stacking  Card Light Appear [Hover In]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-83-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.base_products_light',
                        selectorGuids: ['a27762f8-c063-ecca-1a94-434f87a287ce'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-83-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 100,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.base_products_light',
                        selectorGuids: ['a27762f8-c063-ecca-1a94-434f87a287ce'],
                      },
                      value: 0.5,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19720702eac,
          },
          'a-84': {
            id: 'a-84',
            title: 'Stacking Card Light Hide [Hover Out]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-84-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.base_products_light',
                        selectorGuids: ['a27762f8-c063-ecca-1a94-434f87a287ce'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19720702eac,
          },
          'a-82': {
            id: 'a-82',
            title: 'Stacking Products Card [Mouse Movement]',
            continuousParameterGroups: [
              {
                id: 'a-82-p',
                type: 'MOUSE_X',
                parameterLabel: 'Mouse X',
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: 'a-82-n',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.base_products_light',
                            selectorGuids: ['a27762f8-c063-ecca-1a94-434f87a287ce'],
                          },
                          xValue: -60,
                          xUnit: '%',
                          yUnit: 'PX',
                          zUnit: 'PX',
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: 'a-82-n-2',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.base_products_light',
                            selectorGuids: ['a27762f8-c063-ecca-1a94-434f87a287ce'],
                          },
                          xValue: 62,
                          xUnit: '%',
                          yUnit: 'PX',
                          zUnit: 'PX',
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: 'a-82-p-2',
                type: 'MOUSE_Y',
                parameterLabel: 'Mouse Y',
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: 'a-82-n-3',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.base_products_light',
                            selectorGuids: ['a27762f8-c063-ecca-1a94-434f87a287ce'],
                          },
                          yValue: -20,
                          xUnit: 'PX',
                          yUnit: '%',
                          zUnit: 'PX',
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: 'a-82-n-4',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.base_products_light',
                            selectorGuids: ['a27762f8-c063-ecca-1a94-434f87a287ce'],
                          },
                          yValue: 30,
                          xUnit: 'PX',
                          yUnit: '%',
                          zUnit: 'PX',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x197206ca2d4,
          },
          'a-23': {
            id: 'a-23',
            title: 'Call Button  Light  [Hover In]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-23-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.call_button_light',
                        selectorGuids: ['b6b486b4-0925-22d5-d592-73d6cdff7619'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-23-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.call_button_light',
                        selectorGuids: ['b6b486b4-0925-22d5-d592-73d6cdff7619'],
                      },
                      value: 1,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19734edd43d,
          },
          'a-24': {
            id: 'a-24',
            title: 'Call Button Light Fade [Hover Out}',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-24-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.call_button_light',
                        selectorGuids: ['b6b486b4-0925-22d5-d592-73d6cdff7619'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19734edd43d,
          },
          'a-58': {
            id: 'a-58',
            title: 'faq-open',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-58-n',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.faq-answer',
                        selectorGuids: ['dd0d41fb-10e4-249d-55f0-e3d7dc3553b4'],
                      },
                      heightValue: 0,
                      widthUnit: 'PX',
                      heightUnit: 'px',
                      locked: !1,
                    },
                  },
                  {
                    id: 'a-58-n-2',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.faq-icon',
                        selectorGuids: ['dd0d41fb-10e4-249d-55f0-e3d7dc3553aa'],
                      },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-58-n-4',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.faq-answer',
                        selectorGuids: ['dd0d41fb-10e4-249d-55f0-e3d7dc3553b4'],
                      },
                      widthUnit: 'PX',
                      heightUnit: 'AUTO',
                      locked: !1,
                    },
                  },
                  {
                    id: 'a-58-n-5',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.faq-icon',
                        selectorGuids: ['dd0d41fb-10e4-249d-55f0-e3d7dc3553aa'],
                      },
                      zValue: 180,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196d8a4cdec,
          },
          'a-57': {
            id: 'a-57',
            title: 'faq-close',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-57-n',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.faq-answer',
                        selectorGuids: ['dd0d41fb-10e4-249d-55f0-e3d7dc3553b4'],
                      },
                      heightValue: 0,
                      widthUnit: 'PX',
                      heightUnit: 'px',
                      locked: !1,
                    },
                  },
                  {
                    id: 'a-57-n-2',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.faq-icon',
                        selectorGuids: ['dd0d41fb-10e4-249d-55f0-e3d7dc3553aa'],
                      },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196d8a4cdec,
          },
          'a-59': {
            id: 'a-59',
            title: 'FAQ Light Show [Hover In]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-59-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.faq_blur_light',
                        selectorGuids: ['dd0d41fb-10e4-249d-55f0-e3d7dc3553b2'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-59-n-3',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.faq_blur_light',
                        selectorGuids: ['dd0d41fb-10e4-249d-55f0-e3d7dc3553b2'],
                      },
                      value: 1,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1973f6f941e,
          },
          'a-60': {
            id: 'a-60',
            title: 'FAQ Light Hide [Hover Out]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-60-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.faq_blur_light',
                        selectorGuids: ['dd0d41fb-10e4-249d-55f0-e3d7dc3553b2'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1973f6f941e,
          },
          'a-31': {
            id: 'a-31',
            title: 'Navbar menu -> OPEN',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-31-n',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'inOutQuint',
                      duration: 200,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.menu-icon_line-middle',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2da3'],
                      },
                      widthValue: 0,
                      widthUnit: 'px',
                      heightUnit: 'PX',
                      locked: !1,
                    },
                  },
                  {
                    id: 'a-31-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'inOutQuint',
                      duration: 400,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.menu-icon_line-bottom',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2da2'],
                      },
                      yValue: -8,
                      xUnit: 'PX',
                      yUnit: 'px',
                      zUnit: 'PX',
                    },
                  },
                  {
                    id: 'a-31-n-3',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'inOutQuint',
                      duration: 400,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.menu-icon_line-top',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2da4'],
                      },
                      yValue: 8,
                      xUnit: 'PX',
                      yUnit: 'px',
                      zUnit: 'PX',
                    },
                  },
                  {
                    id: 'a-31-n-4',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: 'inOutQuint',
                      duration: 600,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.menu-icon_line-top',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2da4'],
                      },
                      zValue: -45,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                  {
                    id: 'a-31-n-5',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: 'inOutQuint',
                      duration: 600,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.menu-icon_line-bottom',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2da2'],
                      },
                      zValue: 45,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9f3042c6,
          },
          'a-49': {
            id: 'a-49',
            title: 'Navbar02 dropdown (tablet) -> OPEN',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-49-n',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 200,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.navbar_dropdown-list',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2dbb'],
                      },
                      heightValue: 0,
                      widthUnit: 'PX',
                      heightUnit: 'px',
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-49-n-2',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.navbar_dropdown-list',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2dbb'],
                      },
                      widthUnit: 'PX',
                      heightUnit: 'AUTO',
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17aa3a2434d,
          },
          'a-50': {
            id: 'a-50',
            title: 'Navbar02 dropdown (tablet) -> CLOSE',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-50-n',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.navbar_dropdown-list',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2dbb'],
                      },
                      heightValue: 0,
                      widthUnit: 'PX',
                      heightUnit: 'px',
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-50-n-2',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.dropdown-icon',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2d9d'],
                      },
                      yValue: null,
                      zValue: null,
                      xUnit: 'DEG',
                      yUnit: 'deg',
                      zUnit: 'deg',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa3a2434d,
          },
          'a-150': {
            id: 'a-150',
            title: 'Industry Marquee Logo [Scroll into View]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-150-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 24e3,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.marquee_logo_contain',
                        selectorGuids: ['575acd8c-a381-22c5-b5d7-c1a440716f21'],
                      },
                      xValue: -100,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-150-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.marquee_logo_contain',
                        selectorGuids: ['575acd8c-a381-22c5-b5d7-c1a440716f21'],
                      },
                      xValue: 0,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196e25fc9ae,
          },
          'a-70': {
            id: 'a-70',
            title: 'Navbar02 dropdown (tablet) -> OPEN 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-70-n',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 200,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.navbar_dropdown-list',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2dbb'],
                      },
                      heightValue: 0,
                      widthUnit: 'PX',
                      heightUnit: 'px',
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-70-n-2',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.navbar_dropdown-list',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2dbb'],
                      },
                      widthUnit: 'PX',
                      heightUnit: 'AUTO',
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17aa3a2434d,
          },
          'a-71': {
            id: 'a-71',
            title: 'Navbar02 dropdown (tablet) -> CLOSE 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-71-n',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.navbar_dropdown-list',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2dbb'],
                      },
                      heightValue: 0,
                      widthUnit: 'PX',
                      heightUnit: 'px',
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa3a2434d,
          },
          'a-54': {
            id: 'a-54',
            title: 'nav-trigger -> OUT',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-54-n',
                    actionTypeId: 'STYLE_BACKGROUND_COLOR',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 250,
                      target: {
                        selector: '.navbar_component',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2db3'],
                      },
                      globalSwatchId: '',
                      rValue: 5,
                      bValue: 19,
                      gValue: 5,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1973e7274c6,
          },
          'a-72': {
            id: 'a-72',
            title: 'Ebook Modal Show Up [1st Click]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-72-n',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.modal_overlay_affiliate',
                        selectorGuids: ['a2180497-d74c-102a-f868-ec6da09c3e11'],
                      },
                      value: 'flex',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19758aa291c,
          },
          'a-73': {
            id: 'a-73',
            title: 'Ebook Modal Hide [2nd Click]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-73-n',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.modal_overlay_affiliate',
                        selectorGuids: ['a2180497-d74c-102a-f868-ec6da09c3e11'],
                      },
                      value: 'none',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19758aa291c,
          },
          'a-6': {
            id: 'a-6',
            title: 'Client Logos BG Image Show [Hover In]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-6-n-6',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.client_logos_back',
                        selectorGuids: ['1bd99012-4ac6-f607-b03d-ff414a3c1e7f'],
                      },
                      value: 'none',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-6-n-4',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.client_logos_back',
                        selectorGuids: ['1bd99012-4ac6-f607-b03d-ff414a3c1e7f'],
                      },
                      value: 'inline-flex',
                    },
                  },
                  {
                    id: 'a-6-n-5',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.client_logos_front',
                        selectorGuids: ['41097198-1014-930f-3dee-8a030472bc62'],
                      },
                      value: 'none',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1971b1aa2f5,
          },
          'a-7': {
            id: 'a-7',
            title: 'Client Logos Hide [Hover Out]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-7-n-3',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.client_logos_back',
                        selectorGuids: ['1bd99012-4ac6-f607-b03d-ff414a3c1e7f'],
                      },
                      value: 'none',
                    },
                  },
                  {
                    id: 'a-7-n-4',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.client_logos_front',
                        selectorGuids: ['41097198-1014-930f-3dee-8a030472bc62'],
                      },
                      value: 'flex',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1971b1aa2f5,
          },
          'a-76': {
            id: 'a-76',
            title: 'Rive animation [Scroll into View]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-76-n',
                    actionTypeId: 'PLUGIN_RIVE',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        pluginElement: 'cb4c3f50-c092-8026-e174-775aa047a5f7',
                        id: '6825ae0ac11a1a7d6a345f09|cb4c3f50-c092-8026-e174-775aa047a5f7',
                      },
                      value: {
                        name: 'State Machine 1',
                        inputs: { scroll_section_1: !0, scroll_section_2: !1 },
                      },
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-76-n-2',
                    actionTypeId: 'PLUGIN_RIVE',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 1200,
                      target: {
                        pluginElement: 'cb4c3f50-c092-8026-e174-775aa047a5f7',
                        id: '6825ae0ac11a1a7d6a345f09|cb4c3f50-c092-8026-e174-775aa047a5f7',
                      },
                      value: {
                        name: 'State Machine 1',
                        inputs: {
                          scroll_section_1: !1,
                          'scroll_section_1.5': !0,
                          scroll_section_2: !0,
                          'scroll_section_2.5': !1,
                          scroll_section_3: !1,
                        },
                      },
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-76-n-4',
                    actionTypeId: 'PLUGIN_RIVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        pluginElement: 'cb4c3f50-c092-8026-e174-775aa047a5f7',
                        id: '6825ae0ac11a1a7d6a345f09|cb4c3f50-c092-8026-e174-775aa047a5f7',
                      },
                      value: {
                        name: 'State Machine 1',
                        inputs: { 'scroll_section_2.5': !0, scroll_section_3: !0 },
                      },
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1975d717712,
          },
          'a-85': {
            id: 'a-85',
            title: 'Rive animation [Scroll out of view]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-85-n',
                    actionTypeId: 'PLUGIN_RIVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        pluginElement: 'cb4c3f50-c092-8026-e174-775aa047a5f7',
                        id: '6825ae0ac11a1a7d6a345f09|cb4c3f50-c092-8026-e174-775aa047a5f7',
                      },
                      value: { name: 'State Machine 1', inputs: {} },
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19767783927,
          },
          'a-10': {
            id: 'a-10',
            title: 'AI Question Card [Hover In]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-10-n-3',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.faq_blur_light.base_ai',
                        selectorGuids: [
                          'dd0d41fb-10e4-249d-55f0-e3d7dc3553b2',
                          '7c098e81-936f-10b5-2e1b-9398ceafe944',
                        ],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-10-n-4',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.faq_blur_light.base_ai',
                        selectorGuids: [
                          'dd0d41fb-10e4-249d-55f0-e3d7dc3553b2',
                          '7c098e81-936f-10b5-2e1b-9398ceafe944',
                        ],
                      },
                      value: 1,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1971d1988f2,
          },
          'a-11': {
            id: 'a-11',
            title: 'AI Question Card [Hover Out]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-11-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.faq_blur_light.base_ai',
                        selectorGuids: [
                          'dd0d41fb-10e4-249d-55f0-e3d7dc3553b2',
                          '7c098e81-936f-10b5-2e1b-9398ceafe944',
                        ],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1971d1988f2,
          },
          'a-88': {
            id: 'a-88',
            title: "App's Logo Marquee",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-88-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 2e4,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.marquee_app_contain',
                        selectorGuids: ['2387d495-2975-fce5-feb8-a16653ac1843'],
                      },
                      xValue: -100,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-88-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.marquee_app_contain',
                        selectorGuids: ['2387d495-2975-fce5-feb8-a16653ac1843'],
                      },
                      xValue: 0,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19768cd0706,
          },
          'a-89': {
            id: 'a-89',
            title: 'Company Tab Active',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-89-n-2',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 500,
                      target: {},
                      widthValue: 0,
                      widthUnit: 'rem',
                      heightUnit: 'PX',
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-89-n-3',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {},
                      widthValue: 3,
                      widthUnit: 'rem',
                      heightUnit: 'PX',
                      locked: !1,
                    },
                  },
                  {
                    id: 'a-89-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {},
                      value: 1,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19777a9e4b3,
          },
          'a-90': {
            id: 'a-90',
            title: 'Company Tab Deactive',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-90-n',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {},
                      widthValue: 0,
                      widthUnit: 'rem',
                      heightUnit: 'PX',
                      locked: !1,
                    },
                  },
                  {
                    id: 'a-90-n-3',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {},
                      value: 0.4,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19777a9e4b3,
          },
          'a-167': {
            id: 'a-167',
            title: 'Nav BG Change [Scroll Down}',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-167-n',
                    actionTypeId: 'STYLE_BACKGROUND_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 250,
                      target: {
                        selector: '.navbar_component',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2db3'],
                      },
                      globalSwatchId: '',
                      rValue: 5,
                      bValue: 19,
                      gValue: 5,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19883c7c6aa,
          },
          'a-126': {
            id: 'a-126',
            title: 'Industry Tab Light Show Up',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-126-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.industry_tab_light',
                        selectorGuids: ['d7808301-0aa1-62f6-f6c8-6dc5a1b5014f'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-126-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 200,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.industry_tab_light',
                        selectorGuids: ['d7808301-0aa1-62f6-f6c8-6dc5a1b5014f'],
                      },
                      value: 0.6,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1981d017d78,
          },
          'a-127': {
            id: 'a-127',
            title: 'Industry Tab Light Disappear',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-127-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 200,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.industry_tab_light',
                        selectorGuids: ['d7808301-0aa1-62f6-f6c8-6dc5a1b5014f'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1981d017d78,
          },
          'a-128': {
            id: 'a-128',
            title: 'Prize Card [In]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-128-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.prize-card-content',
                        selectorGuids: ['3e5ee095-d2b3-4f94-689b-6b74a9fa84db'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-128-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.prize-card-content',
                        selectorGuids: ['3e5ee095-d2b3-4f94-689b-6b74a9fa84db'],
                      },
                      value: 1,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1982404f161,
          },
          'a-129': {
            id: 'a-129',
            title: 'Prize Card [Out]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-129-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'ease',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.prize-card-content',
                        selectorGuids: ['3e5ee095-d2b3-4f94-689b-6b74a9fa84db'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1982404f161,
          },
          'a-133': {
            id: 'a-133',
            title: 'Dropdown Icon Rotate [Open]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-133-n',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.dropdown-icon',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2d9d'],
                      },
                      zValue: 180,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19836e56735,
          },
          'a-134': {
            id: 'a-134',
            title: 'Dropdown Icon Rotate [Close]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-134-n',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.dropdown-icon',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2d9d'],
                      },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19836e56735,
          },
          'a-135': {
            id: 'a-135',
            title: 'CMS Button Move [Hover In]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-135-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 300,
                      target: {
                        useEventTarget: !0,
                        id: '683bd31a5c5945e5b0c369f2|4139e0da-dea4-511a-e9f9-ae379f9553e2',
                      },
                      yValue: -4,
                      xUnit: 'PX',
                      yUnit: 'px',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1983b407f06,
          },
          'a-136': {
            id: 'a-136',
            title: 'CMS Button Move [Hover Out]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-136-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 300,
                      target: {
                        useEventTarget: !0,
                        id: '683bd31a5c5945e5b0c369f2|4139e0da-dea4-511a-e9f9-ae379f9553e2',
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'px',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1983b407f06,
          },
          'a-137': {
            id: 'a-137',
            title: 'Solution Tab [Active]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-137-n-4',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.text-size-small',
                        selectorGuids: ['07815991-952a-8d98-0e00-e4c25af27132'],
                      },
                      value: 'none',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-137-n-2',
                    actionTypeId: 'STYLE_BACKGROUND_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: '68820573d735f685c968d848|26114a57-11c5-a620-2566-00bce99ff59e',
                      },
                      globalSwatchId: '',
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0.5,
                    },
                  },
                  {
                    id: 'a-137-n-3',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.solution_tab_header',
                        selectorGuids: ['7e59ba10-96e2-68da-4cea-098c8a7a6361'],
                      },
                      globalSwatchId: '--base-color-brand--blue',
                      rValue: 30,
                      bValue: 229,
                      gValue: 136,
                      aValue: 1,
                    },
                  },
                  {
                    id: 'a-137-n-5',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.text-size-small',
                        selectorGuids: ['07815991-952a-8d98-0e00-e4c25af27132'],
                      },
                      value: 'block',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1983cff67cd,
          },
          'a-138': {
            id: 'a-138',
            title: 'Solution Tab [DeActive]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-138-n-2',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.text-size-small',
                        selectorGuids: ['07815991-952a-8d98-0e00-e4c25af27132'],
                      },
                      value: 'none',
                    },
                  },
                  {
                    id: 'a-138-n',
                    actionTypeId: 'STYLE_BACKGROUND_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: '68820573d735f685c968d848|26114a57-11c5-a620-2566-00bce99ff59e',
                      },
                      globalSwatchId: '',
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0,
                    },
                  },
                  {
                    id: 'a-138-n-3',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.solution_tab_header',
                        selectorGuids: ['7e59ba10-96e2-68da-4cea-098c8a7a6361'],
                      },
                      globalSwatchId: '--text-color--text-secondary',
                      rValue: 102,
                      bValue: 102,
                      gValue: 102,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1983cff67cd,
          },
          'a-141': {
            id: 'a-141',
            title: 'lego-scroll',
            continuousParameterGroups: [
              {
                id: 'a-141-p',
                type: 'SCROLL_PROGRESS',
                parameterLabel: 'Scroll',
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: 'a-141-n',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: 'ease',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._1',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '2354a7b5-f332-263c-b255-95bb9e7de3b0',
                            ],
                          },
                          yValue: 100,
                          xUnit: 'PX',
                          yUnit: '%',
                          zUnit: 'PX',
                        },
                      },
                      {
                        id: 'a-141-n-2',
                        actionTypeId: 'STYLE_OPACITY',
                        config: {
                          delay: 0,
                          easing: 'ease',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._1',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '2354a7b5-f332-263c-b255-95bb9e7de3b0',
                            ],
                          },
                          value: 0,
                          unit: '',
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 15,
                    actionItems: [
                      {
                        id: 'a-141-n-5',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: 'ease',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._1',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '2354a7b5-f332-263c-b255-95bb9e7de3b0',
                            ],
                          },
                          yValue: 100,
                          xUnit: 'PX',
                          yUnit: '%',
                          zUnit: 'PX',
                        },
                      },
                      {
                        id: 'a-141-n-6',
                        actionTypeId: 'STYLE_OPACITY',
                        config: {
                          delay: 0,
                          easing: 'ease',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._1',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '2354a7b5-f332-263c-b255-95bb9e7de3b0',
                            ],
                          },
                          value: 0,
                          unit: '',
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 20,
                    actionItems: [
                      {
                        id: 'a-141-n-3',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: 'ease',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._1',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '2354a7b5-f332-263c-b255-95bb9e7de3b0',
                            ],
                          },
                          yValue: 0,
                          xUnit: 'PX',
                          yUnit: '%',
                          zUnit: 'PX',
                        },
                      },
                      {
                        id: 'a-141-n-4',
                        actionTypeId: 'STYLE_OPACITY',
                        config: {
                          delay: 0,
                          easing: 'ease',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._1',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '2354a7b5-f332-263c-b255-95bb9e7de3b0',
                            ],
                          },
                          value: 1,
                          unit: '',
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 35,
                    actionItems: [
                      {
                        id: 'a-141-n-9',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._2',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '52144501-2563-faa0-8143-9b20e90d7aee',
                            ],
                          },
                          yValue: 100,
                          xUnit: 'PX',
                          yUnit: '%',
                          zUnit: 'PX',
                        },
                      },
                      {
                        id: 'a-141-n-10',
                        actionTypeId: 'STYLE_OPACITY',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._2',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '52144501-2563-faa0-8143-9b20e90d7aee',
                            ],
                          },
                          value: 0,
                          unit: '',
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: 'a-141-n-7',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._2',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '52144501-2563-faa0-8143-9b20e90d7aee',
                            ],
                          },
                          yValue: 0,
                          xUnit: 'PX',
                          yUnit: '%',
                          zUnit: 'PX',
                        },
                      },
                      {
                        id: 'a-141-n-8',
                        actionTypeId: 'STYLE_OPACITY',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._2',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '52144501-2563-faa0-8143-9b20e90d7aee',
                            ],
                          },
                          value: 1,
                          unit: '',
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 55,
                    actionItems: [
                      {
                        id: 'a-141-n-11',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._3',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '1fb244a7-8004-80e0-4cf8-7dc6bb2ce7bb',
                            ],
                          },
                          yValue: 100,
                          xUnit: 'PX',
                          yUnit: '%',
                          zUnit: 'PX',
                        },
                      },
                      {
                        id: 'a-141-n-12',
                        actionTypeId: 'STYLE_OPACITY',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._3',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '1fb244a7-8004-80e0-4cf8-7dc6bb2ce7bb',
                            ],
                          },
                          value: 0,
                          unit: '',
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: 'a-141-n-13',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._3',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '1fb244a7-8004-80e0-4cf8-7dc6bb2ce7bb',
                            ],
                          },
                          yValue: 0,
                          xUnit: 'PX',
                          yUnit: '%',
                          zUnit: 'PX',
                        },
                      },
                      {
                        id: 'a-141-n-14',
                        actionTypeId: 'STYLE_OPACITY',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.lego-card._3',
                            selectorGuids: [
                              'bafb4e5a-1c34-bddf-4d21-833ba34ace7a',
                              '1fb244a7-8004-80e0-4cf8-7dc6bb2ce7bb',
                            ],
                          },
                          value: 1,
                          unit: '',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1983dcfaaaa,
          },
          'a-32': {
            id: 'a-32',
            title: 'Navbar menu -> CLOSE',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-32-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'inOutQuint',
                      duration: 600,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.menu-icon_line-bottom',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2da2'],
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'px',
                      zUnit: 'PX',
                    },
                  },
                  {
                    id: 'a-32-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'inOutQuint',
                      duration: 600,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.menu-icon_line-top',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2da4'],
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'px',
                      zUnit: 'PX',
                    },
                  },
                  {
                    id: 'a-32-n-3',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: 'inOutQuint',
                      duration: 400,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.menu-icon_line-bottom',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2da2'],
                      },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                  {
                    id: 'a-32-n-4',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: 'inOutQuint',
                      duration: 400,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.menu-icon_line-top',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2da4'],
                      },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                  {
                    id: 'a-32-n-5',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 400,
                      easing: 'inOutQuint',
                      duration: 200,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.menu-icon_line-middle',
                        selectorGuids: ['ea9100ea-a671-52fd-783d-38dd522e2da3'],
                      },
                      widthValue: 24,
                      widthUnit: 'px',
                      heightUnit: 'PX',
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9f363110,
          },
          'a-149': {
            id: 'a-149',
            title: 'Pricing White BG Change',
            continuousParameterGroups: [
              {
                id: 'a-149-p',
                type: 'SCROLL_PROGRESS',
                parameterLabel: 'Scroll',
                continuousActionGroups: [
                  {
                    keyframe: 1.4999999,
                    actionItems: [
                      {
                        id: 'a-149-n-3',
                        actionTypeId: 'STYLE_BACKGROUND_COLOR',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.pricing_comparision_header',
                            selectorGuids: ['8dcde1d4-fa51-1cab-c25d-7e766b238e06'],
                          },
                          globalSwatchId: '',
                          rValue: 0,
                          bValue: 0,
                          gValue: 0,
                          aValue: 0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 1.5,
                    actionItems: [
                      {
                        id: 'a-149-n',
                        actionTypeId: 'STYLE_BACKGROUND_COLOR',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.pricing_comparision_header',
                            selectorGuids: ['8dcde1d4-fa51-1cab-c25d-7e766b238e06'],
                          },
                          globalSwatchId: '',
                          rValue: 255,
                          bValue: 255,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1984fe25245,
          },
          'a-146': {
            id: 'a-146',
            title: 'Pricing Dropdown Open [1st Clicked]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-146-n',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'SIBLINGS',
                        selector: '.pricing_dropdown_list',
                        selectorGuids: ['b76d50ef-990d-3a5d-4397-c807576cecbd'],
                      },
                      heightValue: 0,
                      widthUnit: '%',
                      heightUnit: 'px',
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-146-n-2',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 200,
                      target: {
                        useEventTarget: 'SIBLINGS',
                        selector: '.pricing_dropdown_list',
                        selectorGuids: ['b76d50ef-990d-3a5d-4397-c807576cecbd'],
                      },
                      widthUnit: 'AUTO',
                      heightUnit: 'AUTO',
                      locked: !1,
                    },
                  },
                  {
                    id: 'a-146-n-3',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.pricing_dropdown_arrow',
                        selectorGuids: ['a51f1bf8-a729-564b-e37d-d183d1b0e2e5'],
                      },
                      zValue: 180,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19840bd0ab6,
          },
          'a-147': {
            id: 'a-147',
            title: 'Pricing Dropdown Close [2nd Clicked]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-147-n',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 200,
                      target: {
                        useEventTarget: 'SIBLINGS',
                        selector: '.pricing_dropdown_list',
                        selectorGuids: ['b76d50ef-990d-3a5d-4397-c807576cecbd'],
                      },
                      heightValue: 0,
                      widthUnit: '%',
                      heightUnit: 'px',
                      locked: !1,
                    },
                  },
                  {
                    id: 'a-147-n-3',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 200,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.pricing_dropdown_arrow',
                        selectorGuids: ['a51f1bf8-a729-564b-e37d-d183d1b0e2e5'],
                      },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19840bd0ab6,
          },
          'a-151': {
            id: 'a-151',
            title: 'Solution Banner Show [Scroll into View]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-151-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        selector: '.sticky_banner.padding-global',
                        selectorGuids: [
                          '4c1bc11c-942c-05f5-63e5-358b9cf15124',
                          'ad255bae-04e2-90c5-95fd-525c76930579',
                        ],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-151-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        selector: '.sticky_banner.padding-global',
                        selectorGuids: [
                          '4c1bc11c-942c-05f5-63e5-358b9cf15124',
                          'ad255bae-04e2-90c5-95fd-525c76930579',
                        ],
                      },
                      value: 1,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19850237c23,
          },
          'a-153': {
            id: 'a-153',
            title: 'Solution Banner Hide [Scroll into View]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-153-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        selector: '.sticky_banner.padding-global',
                        selectorGuids: [
                          '4c1bc11c-942c-05f5-63e5-358b9cf15124',
                          'ad255bae-04e2-90c5-95fd-525c76930579',
                        ],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19850237c23,
          },
          'a-155': {
            id: 'a-155',
            title: 'Home Logo Marquee Show [Hover In]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-155-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.marquee_logo_back',
                        selectorGuids: ['65c8b6e9-33e7-affe-f413-d2470f27a703'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-155-n-3',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.marquee_logo_back',
                        selectorGuids: ['65c8b6e9-33e7-affe-f413-d2470f27a703'],
                      },
                      value: 1,
                      unit: '',
                    },
                  },
                  {
                    id: 'a-155-n-4',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.marquee_logo_front',
                        selectorGuids: ['73a92cdf-5ccc-b6be-9bed-4028d4f7d43a'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19856181888,
          },
          'a-156': {
            id: 'a-156',
            title: 'Home Logo Marquee Show [Hove Out]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-156-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.marquee_logo_back',
                        selectorGuids: ['65c8b6e9-33e7-affe-f413-d2470f27a703'],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                  {
                    id: 'a-156-n-3',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.marquee_logo_front',
                        selectorGuids: ['73a92cdf-5ccc-b6be-9bed-4028d4f7d43a'],
                      },
                      value: 1,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19856181888,
          },
          'a-142': {
            id: 'a-142',
            title: 'Solution Tab Tablet [Active]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-142-n',
                    actionTypeId: 'STYLE_BACKGROUND_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: '68820573d735f685c968d848|34b3ccb6-f891-21ba-69c4-e037663ded56',
                      },
                      globalSwatchId: '',
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0.5,
                    },
                  },
                  {
                    id: 'a-142-n-2',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 200,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.solution_tab_header',
                        selectorGuids: ['7e59ba10-96e2-68da-4cea-098c8a7a6361'],
                      },
                      globalSwatchId: '--base-color-brand--blue',
                      rValue: 30,
                      bValue: 229,
                      gValue: 136,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1983fed04dd,
          },
          'a-143': {
            id: 'a-143',
            title: 'Solution Dropdown Tablet [Close]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-143-n',
                    actionTypeId: 'STYLE_BACKGROUND_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: '68820573d735f685c968d848|34b3ccb6-f891-21ba-69c4-e037663ded56',
                      },
                      globalSwatchId: '',
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0,
                    },
                  },
                  {
                    id: 'a-143-n-2',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 200,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.solution_tab_header',
                        selectorGuids: ['7e59ba10-96e2-68da-4cea-098c8a7a6361'],
                      },
                      globalSwatchId: '--text-color--text-secondary',
                      rValue: 102,
                      bValue: 102,
                      gValue: 102,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1983fed04dd,
          },
          'a-157': {
            id: 'a-157',
            title: 'Solution Dropdown Tablet [Close] 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-157-n',
                    actionTypeId: 'STYLE_BACKGROUND_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1282',
                      },
                      globalSwatchId: '',
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0,
                    },
                  },
                  {
                    id: 'a-157-n-2',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 200,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.solution_tab_header-2',
                        selectorGuids: ['3abf405f-8afd-f95b-f4ef-4f114cee1964'],
                      },
                      globalSwatchId: '--text-color--text-secondary',
                      rValue: 102,
                      bValue: 102,
                      gValue: 102,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1983fed04dd,
          },
          'a-139': {
            id: 'a-139',
            title: 'Solution Marquee Up [Scroll into View]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-139-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 2e4,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.digitalization_marque_container',
                        selectorGuids: ['e060d46a-05db-faf1-6afb-f22266162514'],
                      },
                      yValue: -100,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-139-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.digitalization_marque_container',
                        selectorGuids: ['e060d46a-05db-faf1-6afb-f22266162514'],
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1983d41e778,
          },
          'a-144': {
            id: 'a-144',
            title: 'Solution Marquee Left [Scroll into View]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-144-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 2e4,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.digitalization_marque_container',
                        selectorGuids: ['e060d46a-05db-faf1-6afb-f22266162514'],
                      },
                      xValue: -100,
                      yValue: null,
                      xUnit: '%',
                      yUnit: '%',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-144-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.digitalization_marque_container',
                        selectorGuids: ['e060d46a-05db-faf1-6afb-f22266162514'],
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: '%',
                      yUnit: '%',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1983d41e778,
          },
          'a-161': {
            id: 'a-161',
            title: 'Solution Tab Tablet [Active] 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-161-n',
                    actionTypeId: 'STYLE_BACKGROUND_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1282',
                      },
                      globalSwatchId: '',
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0.5,
                    },
                  },
                  {
                    id: 'a-161-n-2',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 200,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.solution_tab_header-2',
                        selectorGuids: ['3abf405f-8afd-f95b-f4ef-4f114cee1964'],
                      },
                      globalSwatchId: '--base-color-brand--blue',
                      rValue: 30,
                      bValue: 229,
                      gValue: 136,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1983fed04dd,
          },
          'a-163': {
            id: 'a-163',
            title: 'Solution Tab [DeActive] 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-163-n',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.text-size-small',
                        selectorGuids: ['07815991-952a-8d98-0e00-e4c25af27132'],
                      },
                      value: 'none',
                    },
                  },
                  {
                    id: 'a-163-n-2',
                    actionTypeId: 'STYLE_BACKGROUND_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1254',
                      },
                      globalSwatchId: '',
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0,
                    },
                  },
                  {
                    id: 'a-163-n-3',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.solution_tab_header-2',
                        selectorGuids: ['3abf405f-8afd-f95b-f4ef-4f114cee1964'],
                      },
                      globalSwatchId: '--text-color--text-secondary',
                      rValue: 102,
                      bValue: 102,
                      gValue: 102,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1983cff67cd,
          },
          'a-159': {
            id: 'a-159',
            title: 'Solution Tab [Active] 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-159-n',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.text-size-small',
                        selectorGuids: ['07815991-952a-8d98-0e00-e4c25af27132'],
                      },
                      value: 'none',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-159-n-2',
                    actionTypeId: 'STYLE_BACKGROUND_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: '68820573d735f685c968d848|85d1e24d-847b-e658-a49f-ee9fc0ae1254',
                      },
                      globalSwatchId: '',
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0.5,
                    },
                  },
                  {
                    id: 'a-159-n-3',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.solution_tab_header-2',
                        selectorGuids: ['3abf405f-8afd-f95b-f4ef-4f114cee1964'],
                      },
                      globalSwatchId: '--base-color-brand--blue',
                      rValue: 30,
                      bValue: 229,
                      gValue: 136,
                      aValue: 1,
                    },
                  },
                  {
                    id: 'a-159-n-4',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.text-size-small',
                        selectorGuids: ['07815991-952a-8d98-0e00-e4c25af27132'],
                      },
                      value: 'block',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1983cff67cd,
          },
          'a-145': {
            id: 'a-145',
            title: 'Solution Marquee Right [Scroll into View]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-145-n-3',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 2e4,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.digitalization_marque_container',
                        selectorGuids: ['e060d46a-05db-faf1-6afb-f22266162514'],
                      },
                      xValue: -100,
                      yValue: null,
                      xUnit: '%',
                      yUnit: '%',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-145-n-5',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 2e4,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.digitalization_marque_container',
                        selectorGuids: ['e060d46a-05db-faf1-6afb-f22266162514'],
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: '%',
                      yUnit: '%',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-145-n-4',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.digitalization_marque_container',
                        selectorGuids: ['e060d46a-05db-faf1-6afb-f22266162514'],
                      },
                      xValue: -100,
                      yValue: null,
                      xUnit: '%',
                      yUnit: '%',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1983d41e778,
          },
          'a-164': {
            id: 'a-164',
            title: 'Solution Banner Hide [Scroll into View] 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-164-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        selector: '.sticky_banner.padding-global',
                        selectorGuids: [
                          '4c1bc11c-942c-05f5-63e5-358b9cf15124',
                          '3abf405f-8afd-f95b-f4ef-4f114cee199e',
                        ],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19850237c23,
          },
          'a-158': {
            id: 'a-158',
            title: 'Dropdown Icon Rotate [Open] 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-158-n',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 300,
                      target: {},
                      zValue: 180,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19836e56735,
          },
          'a-160': {
            id: 'a-160',
            title: 'Dropdown Icon Rotate [Close] 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-160-n',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: 'easeInOut',
                      duration: 300,
                      target: {},
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19836e56735,
          },
          'a-162': {
            id: 'a-162',
            title: 'Solution Banner Show [Scroll into View] 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-162-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        selector: '.sticky_banner.padding-global',
                        selectorGuids: [
                          '4c1bc11c-942c-05f5-63e5-358b9cf15124',
                          '3abf405f-8afd-f95b-f4ef-4f114cee199e',
                        ],
                      },
                      value: 0,
                      unit: '',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-162-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'easeIn',
                      duration: 300,
                      target: {
                        selector: '.sticky_banner.padding-global',
                        selectorGuids: [
                          '4c1bc11c-942c-05f5-63e5-358b9cf15124',
                          '3abf405f-8afd-f95b-f4ef-4f114cee199e',
                        ],
                      },
                      value: 1,
                      unit: '',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19850237c23,
          },
          'a-140': {
            id: 'a-140',
            title: 'Solution Marquee Down [Scroll into View] 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-140-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 2e4,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.digitalization_marque_container',
                        selectorGuids: ['e060d46a-05db-faf1-6afb-f22266162514'],
                      },
                      yValue: -100,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-140-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 2e4,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.digitalization_marque_container',
                        selectorGuids: ['e060d46a-05db-faf1-6afb-f22266162514'],
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: 'a-140-n-3',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.digitalization_marque_container',
                        selectorGuids: ['e060d46a-05db-faf1-6afb-f22266162514'],
                      },
                      yValue: -100,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1983d41e778,
          },
          'a-165': {
            id: 'a-165',
            title: 'Solution Partner  Modal Show Up [1st Click]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-165-n',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.modal_overlay_solution',
                        selectorGuids: ['912d569b-4c15-6318-6252-6b5fd6728c06'],
                      },
                      value: 'flex',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19758aa291c,
          },
          'a-166': {
            id: 'a-166',
            title: 'Solution Partner Modal Hide [2nd Click]',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-166-n',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'PARENT',
                        selector: '.modal_overlay_solution',
                        selectorGuids: ['912d569b-4c15-6318-6252-6b5fd6728c06'],
                      },
                      value: 'none',
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19758aa291c,
          },
          slideInBottom: {
            id: 'slideInBottom',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: 0,
                      yValue: 100,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: 0,
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          fadeIn: {
            id: 'fadeIn',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          growIn: {
            id: 'growIn',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: 0.7500000000000001,
                      yValue: 0.7500000000000001,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: 1,
                      yValue: 1,
                    },
                  },
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          slideInLeft: {
            id: 'slideInLeft',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: -100,
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 1,
                    },
                  },
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: 0,
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
          },
          slideInRight: {
            id: 'slideInRight',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: 100,
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 1,
                    },
                  },
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: 0,
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
          },
          slideInTopRight: {
            id: 'slideInTopRight',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: 100,
                      yValue: -100,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 1,
                    },
                  },
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: 0,
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
          },
          slideInTopLeft: {
            id: 'slideInTopLeft',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: -100,
                      yValue: -100,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 1,
                    },
                  },
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: 0,
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX',
                    },
                  },
                ],
              },
            ],
          },
          growBigIn: {
            id: 'growBigIn',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: 0,
                      yValue: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      xValue: 1,
                      yValue: 1,
                    },
                  },
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: 'main', min: 992, max: 1e4 },
            { key: 'medium', min: 768, max: 991 },
            { key: 'small', min: 480, max: 767 },
            { key: 'tiny', min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
