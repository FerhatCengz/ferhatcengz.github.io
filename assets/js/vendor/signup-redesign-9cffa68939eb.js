"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["signup-redesign"], {
        59753: (e, t, n) => {
            function i() {
                if (!(this instanceof i)) return new i;
                this.size = 0, this.uid = 0, this.selectors = [], this.selectorObjects = {}, this.indexes = Object.create(this.indexes), this.activeIndexes = []
            }
            n.d(t, {
                f: () => T,
                S: () => L,
                on: () => k
            });
            var r, o = window.document.documentElement,
                a = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector;
            i.prototype.matchesSelector = function(e, t) {
                return a.call(e, t)
            }, i.prototype.querySelectorAll = function(e, t) {
                return t.querySelectorAll(e)
            }, i.prototype.indexes = [];
            var s = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            i.prototype.indexes.push({
                name: "ID",
                selector: function(e) {
                    var t;
                    if (t = e.match(s)) return t[0].slice(1)
                },
                element: function(e) {
                    if (e.id) return [e.id]
                }
            });
            var c = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            i.prototype.indexes.push({
                name: "CLASS",
                selector: function(e) {
                    var t;
                    if (t = e.match(c)) return t[0].slice(1)
                },
                element: function(e) {
                    var t = e.className;
                    if (t) {
                        if ("string" == typeof t) return t.split(/\s/);
                        if ("object" == typeof t && "baseVal" in t) return t.baseVal.split(/\s/)
                    }
                }
            });
            var u = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            i.prototype.indexes.push({
                name: "TAG",
                selector: function(e) {
                    var t;
                    if (t = e.match(u)) return t[0].toUpperCase()
                },
                element: function(e) {
                    return [e.nodeName.toUpperCase()]
                }
            }), i.prototype.indexes.default = {
                name: "UNIVERSAL",
                selector: function() {
                    return !0
                },
                element: function() {
                    return [!0]
                }
            }, r = "function" == typeof window.Map ? window.Map : function() {
                function e() {
                    this.map = {}
                }
                return e.prototype.get = function(e) {
                    return this.map[e + " "]
                }, e.prototype.set = function(e, t) {
                    this.map[e + " "] = t
                }, e
            }();
            var l = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

            function d(e, t) {
                var n, i, r, o, a, s, c = (e = e.slice(0).concat(e.default)).length,
                    u = t,
                    d = [];
                do
                    if (l.exec(""), (r = l.exec(u)) && (u = r[3], r[2] || !u)) {
                        for (n = 0; n < c; n++)
                            if (a = (s = e[n]).selector(r[1])) {
                                for (i = d.length, o = !1; i--;)
                                    if (d[i].index === s && d[i].key === a) {
                                        o = !0;
                                        break
                                    } o || d.push({
                                    index: s,
                                    key: a
                                });
                                break
                            }
                    } while (r) return d
            }

            function f(e, t) {
                return e.id - t.id
            }
            i.prototype.logDefaultIndexUsed = function() {}, i.prototype.add = function(e, t) {
                var n, i, o, a, s, c, u, l, f = this.activeIndexes,
                    p = this.selectors,
                    m = this.selectorObjects;
                if ("string" == typeof e) {
                    for (i = 0, m[(n = {
                            id: this.uid++,
                            selector: e,
                            data: t
                        }).id] = n, u = d(this.indexes, e); i < u.length; i++) a = (l = u[i]).key, (s = function(e, t) {
                        var n, i, r;
                        for (n = 0, i = e.length; n < i; n++)
                            if (r = e[n], t.isPrototypeOf(r)) return r
                    }(f, o = l.index)) || ((s = Object.create(o)).map = new r, f.push(s)), o === this.indexes.default && this.logDefaultIndexUsed(n), (c = s.map.get(a)) || (c = [], s.map.set(a, c)), c.push(n);
                    this.size++, p.push(e)
                }
            }, i.prototype.remove = function(e, t) {
                if ("string" == typeof e) {
                    var n, i, r, o, a, s, c, u, l = this.activeIndexes,
                        f = this.selectors = [],
                        p = this.selectorObjects,
                        m = {},
                        h = 1 == arguments.length;
                    for (r = 0, n = d(this.indexes, e); r < n.length; r++)
                        for (i = n[r], o = l.length; o--;)
                            if (s = l[o], i.index.isPrototypeOf(s)) {
                                if (c = s.map.get(i.key))
                                    for (a = c.length; a--;)(u = c[a]).selector === e && (h || u.data === t) && (c.splice(a, 1), m[u.id] = !0);
                                break
                            } for (r in m) delete p[r], this.size--;
                    for (r in p) f.push(p[r].selector)
                }
            }, i.prototype.queryAll = function(e) {
                if (!this.selectors.length) return [];
                var t, n, i, r, o, a, s, c, u = {},
                    l = [],
                    d = this.querySelectorAll(this.selectors.join(", "), e);
                for (t = 0, i = d.length; t < i; t++)
                    for (n = 0, o = d[t], r = (a = this.matches(o)).length; n < r; n++) u[(c = a[n]).id] ? s = u[c.id] : (s = {
                        id: c.id,
                        selector: c.selector,
                        data: c.data,
                        elements: []
                    }, u[c.id] = s, l.push(s)), s.elements.push(o);
                return l.sort(f)
            }, i.prototype.matches = function(e) {
                if (!e) return [];
                var t, n, i, r, o, a, s, c, u, l, d, p = this.activeIndexes,
                    m = {},
                    h = [];
                for (t = 0, r = p.length; t < r; t++)
                    if (c = (s = p[t]).element(e)) {
                        for (n = 0, o = c.length; n < o; n++)
                            if (u = s.map.get(c[n]))
                                for (i = 0, a = u.length; i < a; i++) !m[d = (l = u[i]).id] && this.matchesSelector(e, l.selector) && (m[d] = !0, h.push(l))
                    } return h.sort(f)
            };
            var p = {},
                m = {},
                h = new WeakMap,
                v = new WeakMap,
                g = new WeakMap,
                y = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

            function b(e, t, n) {
                var i = e[t];
                return e[t] = function() {
                    return n.apply(e, arguments), i.apply(e, arguments)
                }, e
            }

            function w() {
                h.set(this, !0)
            }

            function q() {
                h.set(this, !0), v.set(this, !0)
            }

            function j() {
                return g.get(this) || null
            }

            function E(e, t) {
                y && Object.defineProperty(e, "currentTarget", {
                    configurable: !0,
                    enumerable: !0,
                    get: t || y.get
                })
            }

            function S(e) {
                if (function(e) {
                        try {
                            return e.eventPhase, !0
                        } catch (e) {
                            return !1
                        }
                    }(e)) {
                    var t = (1 === e.eventPhase ? m : p)[e.type];
                    if (t) {
                        var n = function(e, t, n) {
                            var i = [],
                                r = t;
                            do {
                                if (1 !== r.nodeType) break;
                                var o = e.matches(r);
                                if (o.length) {
                                    var a = {
                                        node: r,
                                        observers: o
                                    };
                                    n ? i.unshift(a) : i.push(a)
                                }
                            } while (r = r.parentElement) return i
                        }(t, e.target, 1 === e.eventPhase);
                        if (n.length) {
                            b(e, "stopPropagation", w), b(e, "stopImmediatePropagation", q), E(e, j);
                            for (var i = 0, r = n.length; i < r && !h.get(e); i++) {
                                var o = n[i];
                                g.set(e, o.node);
                                for (var a = 0, s = o.observers.length; a < s && !v.get(e); a++) o.observers[a].data.call(o.node, e)
                            }
                            g.delete(e), E(e)
                        }
                    }
                }
            }

            function k(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = !!r.capture,
                    a = o ? m : p,
                    s = a[e];
                s || (s = new i, a[e] = s, document.addEventListener(e, S, o)), s.add(t, n)
            }

            function L(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    r = !!i.capture,
                    o = r ? m : p,
                    a = o[e];
                a && (a.remove(t, n), a.size || (delete o[e], document.removeEventListener(e, S, r)))
            }

            function T(e, t, n) {
                return e.dispatchEvent(new CustomEvent(t, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            }
        },
        81775: (e, t, n) => {
            n.d(t, {
                G: () => c
            });
            var i = n(254),
                r = n(36071),
                o = n(59753);

            function a(e) {
                let t = e.getAttribute("data-required-value"),
                    n = e.getAttribute("data-required-value-prefix");
                if (e.value === t) e.setCustomValidity("");
                else {
                    let i = t;
                    n && (i = n + i), e.setCustomValidity(i)
                }
            }(0, i.q6)("[data-required-value]", function(e) {
                let t = e.currentTarget;
                a(t)
            }), (0, o.on)("change", "[data-required-value]", function(e) {
                let t = e.currentTarget;
                a(t), c(t.form)
            }), (0, i.q6)("[data-required-trimmed]", function(e) {
                let t = e.currentTarget;
                "" === t.value.trim() ? t.setCustomValidity(t.getAttribute("data-required-trimmed")) : t.setCustomValidity("")
            }), (0, o.on)("change", "[data-required-trimmed]", function(e) {
                let t = e.currentTarget;
                "" === t.value.trim() ? t.setCustomValidity(t.getAttribute("data-required-trimmed")) : t.setCustomValidity(""), c(t.form)
            }), (0, i.ZG)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]", e => {
                let t = e.checkValidity();

                function n() {
                    let n = e.checkValidity();
                    n !== t && e.form && c(e.form), t = n
                }
                e.addEventListener("input", n), e.addEventListener("blur", function t() {
                    e.removeEventListener("input", n), e.removeEventListener("blur", t)
                })
            });
            let s = new WeakMap;

            function c(e) {
                let t = e.checkValidity();
                for (let n of e.querySelectorAll("button[data-disable-invalid]")) n.disabled = !t
            }(0, r.N7)("button[data-disable-invalid]", {
                constructor: HTMLButtonElement,
                initialize(e) {
                    let t = e.form;
                    t && (s.get(t) || (t.addEventListener("change", () => c(t)), s.set(t, !0)), e.disabled = !t.checkValidity())
                }
            }), (0, r.N7)("input[data-required-change], textarea[data-required-change]", function(e) {
                let t = "radio" === e.type && e.form ? e.form.elements.namedItem(e.name).value : null;

                function n(n) {
                    let i = e.form;
                    if (n && "radio" === e.type && i && t)
                        for (let n of i.elements.namedItem(e.name)) n instanceof HTMLInputElement && n.setCustomValidity(e.value === t ? "unchanged" : "");
                    else e.setCustomValidity(e.value === (t || e.defaultValue) ? "unchanged" : "")
                }
                e.addEventListener("input", n), e.addEventListener("change", n), n(), e.form && c(e.form)
            }), document.addEventListener("reset", function(e) {
                if (e.target instanceof HTMLFormElement) {
                    let t = e.target;
                    setTimeout(() => c(t))
                }
            })
        },
        254: (e, t, n) => {
            n.d(t, {
                ZG: () => s,
                q6: () => u,
                w4: () => c
            });
            var i = n(8439);
            let r = !1,
                o = new i.Z;

            function a(e) {
                let t = e.target;
                if (t instanceof HTMLElement && t.nodeType !== Node.DOCUMENT_NODE)
                    for (let e of o.matches(t)) e.data.call(null, t)
            }

            function s(e, t) {
                r || (r = !0, document.addEventListener("focus", a, !0)), o.add(e, t), document.activeElement instanceof HTMLElement && document.activeElement.matches(e) && t(document.activeElement)
            }

            function c(e, t, n) {
                function i(t) {
                    let r = t.currentTarget;
                    r && (r.removeEventListener(e, n), r.removeEventListener("blur", i))
                }
                s(t, function(t) {
                    t.addEventListener(e, n), t.addEventListener("blur", i)
                })
            }

            function u(e, t) {
                function n(e) {
                    let {
                        currentTarget: i
                    } = e;
                    i && (i.removeEventListener("input", t), i.removeEventListener("blur", n))
                }
                s(e, function(e) {
                    e.addEventListener("input", t), e.addEventListener("blur", n)
                })
            }
        },
        35653: (e, t, n) => {
            let i;
            var r = n(36071),
                o = n(59753),
                a = n(254),
                s = n(81775);

            function c(e, t, n) {
                let i = e.closest(".js-continue-step-container"),
                    r = i.querySelector(".js-continue-button"),
                    o = e.closest(".js-continue-container"),
                    a = o.querySelector(".js-continue-hint-container"),
                    s = a.querySelector(`[data-hint-for="${e.id}"`);
                r.disabled = !t, s.innerHTML = n, e.setAttribute("aria-invalid", (!t).toString())
            }

            function u(e) {
                let t = e.closest(".js-continue-step-container"),
                    n = t.querySelector(".js-continue-button"),
                    i = e.closest(".js-continue-container"),
                    r = i.querySelector(".js-continue-hint-container"),
                    o = r.querySelector(`[data-hint-for="${e.id}"`);
                e.required && (n.disabled = !0), o && (o.textContent = "")
            }(0, o.on)("typing:complete", ".js-signup-typed-welcome", function(e) {
                let t = e.target;
                t.click()
            }), (0, o.on)("click", "[data-continue-to]", function({
                currentTarget: e
            }) {
                let t = document.getElementById(e.getAttribute("data-continue-to") || "");
                t.hidden = !1, setTimeout(() => {
                    t.querySelector(".js-continue-focus-target").focus()
                }, 0)
            }), (0, o.on)("focusin", ".js-continue-focus-target", function({
                currentTarget: e
            }) {
                let t = e.closest(".js-continue-step-container"),
                    n = e.closest(".js-continue-container"),
                    i = n.querySelectorAll(".js-continue-step-container");
                for (let e of i)
                    if (e === t) e.setAttribute("data-step-state", "active");
                    else {
                        let t = e.querySelector(".js-continue-input");
                        t && !t.checkValidity() ? e.setAttribute("data-step-state", "invalid") : e.setAttribute("data-step-state", "complete")
                    } let r = t.querySelector(".js-continue-input"),
                    o = n.querySelector(".js-continue-hint-container"),
                    a = o.querySelectorAll("[data-hint-for]");
                for (let e of (r && r.value.trim() && r.dispatchEvent(new Event("input")), a)) r && r.id === e.getAttribute("data-hint-for") ? (e.hidden = !1, !r.value.trim() && r.required && u(r)) : e.hidden = !0
            }), (0, a.w4)("keydown", ".js-continue-focus-target", function(e) {
                let t = e.currentTarget,
                    n = t.closest(".js-continue-step-container"),
                    i = n.querySelector(".js-continue-button"),
                    r = t.closest(".js-continue-container"),
                    o = Array.from(r.querySelectorAll(".js-continue-step-container")),
                    a = o[o.indexOf(n) - 1];
                switch (e.key) {
                    case "Enter":
                        "submit" !== t.getAttribute("type") && e.preventDefault(), i?.click();
                        break;
                    case "ArrowDown":
                        i?.click();
                        break;
                    case "ArrowUp":
                        a?.querySelector(".js-continue-focus-target")?.focus()
                }
            }), (0, o.on)("focusout", ".signup-input", e => {
                let t = e.currentTarget;
                t.value = t.value.trim()
            }), (0, o.on)("auto-check-success", ".js-continue-input", async function(e) {
                let t = e.currentTarget,
                    n = await e.detail.response.text();
                "email" !== t.type || t.checkValidity() ? c(t, !0, n) : c(t, !1, "Email is invalid"), (0, s.G)(t.form)
            }), (0, o.on)("auto-check-error", ".js-continue-input", async function(e) {
                let t = e.currentTarget,
                    n = await e.detail.response.text();
                c(t, !1, n), (0, s.G)(t.form)
            }), (0, a.w4)("keyup", ".js-continue-input", function(e) {
                let t = e.currentTarget;
                !t.value.trim() && t.required && u(t)
            }), (0, r.N7)("#captcha-and-submit-container", function(e) {
                setTimeout(() => {
                    e instanceof HTMLElement && (e.style.position = "relative", e.hidden = !0, e.style.top = "0")
                }, 8e3)
            });
            let l = () => {
                let e = navigator.connection;
                return e?.effectiveType.match(/2g/)
            };
            l() || (async () => {
                let {
                    stageSetup: e
                } = await Promise.all([n.e("vendors-node_modules_three_build_three_module_js"), n.e("app_assets_modules_github_webgl-warp_ts")]).then(n.bind(n, 71047));
                await new Promise(e => {
                    requestAnimationFrame(e)
                }), i = e();
                let t = document.querySelector(".js-signup-warp-vid video");
                t && t.setAttribute("preload", "auto"), await new Promise(e => {
                    requestAnimationFrame(e)
                }), i && i.init()
            })();
            let d = () => {
                let e = document.querySelector(".js-signup-warp-bg"),
                    t = document.querySelector(".js-signup-warp-vid"),
                    n = document.querySelector(".js-signup-warp-vid video"),
                    r = document.getElementById("video-desc"),
                    o = document.querySelector(".js-fallback-img"),
                    a = document.querySelectorAll(".js-warp-hide");
                for (let e = 0; e < a.length; e++) {
                    let t = a[e];
                    t?.classList.add("warp-hide")
                }
                let s = !i || window.matchMedia("(prefers-reduced-motion: reduce)").matches || l();
                e.removeAttribute("hidden"), r.removeAttribute("style"), s ? (n.remove(), o?.removeAttribute("hidden"), e?.classList.add("skipwarp"), t?.classList.add("skipwarp"), setTimeout(() => window.location.replace("/"), 4e3)) : (i.hyperStart(), e.classList.add("postwarp"), t.classList.add("postwarp"), setTimeout(() => i.hyperStop(), 2e3), setTimeout(() => n.play(), 2500), setTimeout(() => window.location.replace("/"), 6e3))
            };
            (0, o.on)("launch-code-success", "launch-code", () => {
                if (window.location.search) {
                    let e = new URLSearchParams(window.location.search).get("return_to");
                    if (e) try {
                        let t = new URL(e, window.location.origin);
                        if (t.pathname.startsWith("/github-copilot")) {
                            window.location.replace(t.pathname + t.search);
                            return
                        }
                    } catch {}
                }
                d()
            }), (0, o.on)("click", "[data-launch-animation]", e => {
                e.preventDefault(), window.scrollTo(0, 0), d()
            })
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, ["vendors-node_modules_github_selector-observer_dist_index_esm_js"], () => t(35653)), e.O()
    }
]);
//# sourceMappingURL=signup-redesign-235d226f8102.js.map