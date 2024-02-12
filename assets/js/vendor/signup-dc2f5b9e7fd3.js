"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["signup"], {
        59753: (e, t, n) => {
            function r() {
                if (!(this instanceof r)) return new r;
                this.size = 0, this.uid = 0, this.selectors = [], this.selectorObjects = {}, this.indexes = Object.create(this.indexes), this.activeIndexes = []
            }
            n.d(t, {
                f: () => S,
                S: () => k,
                on: () => T
            });
            var o, i = window.document.documentElement,
                a = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector;
            r.prototype.matchesSelector = function(e, t) {
                return a.call(e, t)
            }, r.prototype.querySelectorAll = function(e, t) {
                return t.querySelectorAll(e)
            }, r.prototype.indexes = [];
            var s = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            r.prototype.indexes.push({
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
            r.prototype.indexes.push({
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
            var l = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            r.prototype.indexes.push({
                name: "TAG",
                selector: function(e) {
                    var t;
                    if (t = e.match(l)) return t[0].toUpperCase()
                },
                element: function(e) {
                    return [e.nodeName.toUpperCase()]
                }
            }), r.prototype.indexes.default = {
                name: "UNIVERSAL",
                selector: function() {
                    return !0
                },
                element: function() {
                    return [!0]
                }
            }, o = "function" == typeof window.Map ? window.Map : function() {
                function e() {
                    this.map = {}
                }
                return e.prototype.get = function(e) {
                    return this.map[e + " "]
                }, e.prototype.set = function(e, t) {
                    this.map[e + " "] = t
                }, e
            }();
            var u = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

            function d(e, t) {
                var n, r, o, i, a, s, c = (e = e.slice(0).concat(e.default)).length,
                    l = t,
                    d = [];
                do
                    if (u.exec(""), (o = u.exec(l)) && (l = o[3], o[2] || !l)) {
                        for (n = 0; n < c; n++)
                            if (a = (s = e[n]).selector(o[1])) {
                                for (r = d.length, i = !1; r--;)
                                    if (d[r].index === s && d[r].key === a) {
                                        i = !0;
                                        break
                                    } i || d.push({
                                    index: s,
                                    key: a
                                });
                                break
                            }
                    } while (o) return d
            }

            function f(e, t) {
                return e.id - t.id
            }
            r.prototype.logDefaultIndexUsed = function() {}, r.prototype.add = function(e, t) {
                var n, r, i, a, s, c, l, u, f = this.activeIndexes,
                    m = this.selectors,
                    p = this.selectorObjects;
                if ("string" == typeof e) {
                    for (r = 0, p[(n = {
                            id: this.uid++,
                            selector: e,
                            data: t
                        }).id] = n, l = d(this.indexes, e); r < l.length; r++) a = (u = l[r]).key, (s = function(e, t) {
                        var n, r, o;
                        for (n = 0, r = e.length; n < r; n++)
                            if (o = e[n], t.isPrototypeOf(o)) return o
                    }(f, i = u.index)) || ((s = Object.create(i)).map = new o, f.push(s)), i === this.indexes.default && this.logDefaultIndexUsed(n), (c = s.map.get(a)) || (c = [], s.map.set(a, c)), c.push(n);
                    this.size++, m.push(e)
                }
            }, r.prototype.remove = function(e, t) {
                if ("string" == typeof e) {
                    var n, r, o, i, a, s, c, l, u = this.activeIndexes,
                        f = this.selectors = [],
                        m = this.selectorObjects,
                        p = {},
                        h = 1 == arguments.length;
                    for (o = 0, n = d(this.indexes, e); o < n.length; o++)
                        for (r = n[o], i = u.length; i--;)
                            if (s = u[i], r.index.isPrototypeOf(s)) {
                                if (c = s.map.get(r.key))
                                    for (a = c.length; a--;)(l = c[a]).selector === e && (h || l.data === t) && (c.splice(a, 1), p[l.id] = !0);
                                break
                            } for (o in p) delete m[o], this.size--;
                    for (o in m) f.push(m[o].selector)
                }
            }, r.prototype.queryAll = function(e) {
                if (!this.selectors.length) return [];
                var t, n, r, o, i, a, s, c, l = {},
                    u = [],
                    d = this.querySelectorAll(this.selectors.join(", "), e);
                for (t = 0, r = d.length; t < r; t++)
                    for (n = 0, i = d[t], o = (a = this.matches(i)).length; n < o; n++) l[(c = a[n]).id] ? s = l[c.id] : (s = {
                        id: c.id,
                        selector: c.selector,
                        data: c.data,
                        elements: []
                    }, l[c.id] = s, u.push(s)), s.elements.push(i);
                return u.sort(f)
            }, r.prototype.matches = function(e) {
                if (!e) return [];
                var t, n, r, o, i, a, s, c, l, u, d, m = this.activeIndexes,
                    p = {},
                    h = [];
                for (t = 0, o = m.length; t < o; t++)
                    if (c = (s = m[t]).element(e)) {
                        for (n = 0, i = c.length; n < i; n++)
                            if (l = s.map.get(c[n]))
                                for (r = 0, a = l.length; r < a; r++) !p[d = (u = l[r]).id] && this.matchesSelector(e, u.selector) && (p[d] = !0, h.push(u))
                    } return h.sort(f)
            };
            var m = {},
                p = {},
                h = new WeakMap,
                v = new WeakMap,
                g = new WeakMap,
                y = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

            function b(e, t, n) {
                var r = e[t];
                return e[t] = function() {
                    return n.apply(e, arguments), r.apply(e, arguments)
                }, e
            }

            function w() {
                h.set(this, !0)
            }

            function E() {
                h.set(this, !0), v.set(this, !0)
            }

            function L() {
                return g.get(this) || null
            }

            function j(e, t) {
                y && Object.defineProperty(e, "currentTarget", {
                    configurable: !0,
                    enumerable: !0,
                    get: t || y.get
                })
            }

            function q(e) {
                if (function(e) {
                        try {
                            return e.eventPhase, !0
                        } catch (e) {
                            return !1
                        }
                    }(e)) {
                    var t = (1 === e.eventPhase ? p : m)[e.type];
                    if (t) {
                        var n = function(e, t, n) {
                            var r = [],
                                o = t;
                            do {
                                if (1 !== o.nodeType) break;
                                var i = e.matches(o);
                                if (i.length) {
                                    var a = {
                                        node: o,
                                        observers: i
                                    };
                                    n ? r.unshift(a) : r.push(a)
                                }
                            } while (o = o.parentElement) return r
                        }(t, e.target, 1 === e.eventPhase);
                        if (n.length) {
                            b(e, "stopPropagation", w), b(e, "stopImmediatePropagation", E), j(e, L);
                            for (var r = 0, o = n.length; r < o && !h.get(e); r++) {
                                var i = n[r];
                                g.set(e, i.node);
                                for (var a = 0, s = i.observers.length; a < s && !v.get(e); a++) i.observers[a].data.call(i.node, e)
                            }
                            g.delete(e), j(e)
                        }
                    }
                }
            }

            function T(e, t, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = !!o.capture,
                    a = i ? p : m,
                    s = a[e];
                s || (s = new r, a[e] = s, document.addEventListener(e, q, i)), s.add(t, n)
            }

            function k(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = !!r.capture,
                    i = o ? p : m,
                    a = i[e];
                a && (a.remove(t, n), a.size || (delete i[e], document.removeEventListener(e, q, o)))
            }

            function S(e, t, n) {
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
            var r = n(254),
                o = n(36071),
                i = n(59753);

            function a(e) {
                let t = e.getAttribute("data-required-value"),
                    n = e.getAttribute("data-required-value-prefix");
                if (e.value === t) e.setCustomValidity("");
                else {
                    let r = t;
                    n && (r = n + r), e.setCustomValidity(r)
                }
            }(0, r.q6)("[data-required-value]", function(e) {
                let t = e.currentTarget;
                a(t)
            }), (0, i.on)("change", "[data-required-value]", function(e) {
                let t = e.currentTarget;
                a(t), c(t.form)
            }), (0, r.q6)("[data-required-trimmed]", function(e) {
                let t = e.currentTarget;
                "" === t.value.trim() ? t.setCustomValidity(t.getAttribute("data-required-trimmed")) : t.setCustomValidity("")
            }), (0, i.on)("change", "[data-required-trimmed]", function(e) {
                let t = e.currentTarget;
                "" === t.value.trim() ? t.setCustomValidity(t.getAttribute("data-required-trimmed")) : t.setCustomValidity(""), c(t.form)
            }), (0, r.ZG)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]", e => {
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
            }(0, o.N7)("button[data-disable-invalid]", {
                constructor: HTMLButtonElement,
                initialize(e) {
                    let t = e.form;
                    t && (s.get(t) || (t.addEventListener("change", () => c(t)), s.set(t, !0)), e.disabled = !t.checkValidity())
                }
            }), (0, o.N7)("input[data-required-change], textarea[data-required-change]", function(e) {
                let t = "radio" === e.type && e.form ? e.form.elements.namedItem(e.name).value : null;

                function n(n) {
                    let r = e.form;
                    if (n && "radio" === e.type && r && t)
                        for (let n of r.elements.namedItem(e.name)) n instanceof HTMLInputElement && n.setCustomValidity(e.value === t ? "unchanged" : "");
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
                q6: () => l,
                w4: () => c
            });
            var r = n(8439);
            let o = !1,
                i = new r.Z;

            function a(e) {
                let t = e.target;
                if (t instanceof HTMLElement && t.nodeType !== Node.DOCUMENT_NODE)
                    for (let e of i.matches(t)) e.data.call(null, t)
            }

            function s(e, t) {
                o || (o = !0, document.addEventListener("focus", a, !0)), i.add(e, t), document.activeElement instanceof HTMLElement && document.activeElement.matches(e) && t(document.activeElement)
            }

            function c(e, t, n) {
                function r(t) {
                    let o = t.currentTarget;
                    o && (o.removeEventListener(e, n), o.removeEventListener("blur", r))
                }
                s(t, function(t) {
                    t.addEventListener(e, n), t.addEventListener("blur", r)
                })
            }

            function l(e, t) {
                function n(e) {
                    let {
                        currentTarget: r
                    } = e;
                    r && (r.removeEventListener("input", t), r.removeEventListener("blur", n))
                }
                s(e, function(e) {
                    e.addEventListener("input", t), e.addEventListener("blur", n)
                })
            }
        },
        89845: (e, t, n) => {
            var r = n(58700),
                o = n(36071),
                i = n(254),
                a = n(81775),
                s = n(59753);

            function c() {
                let e = document.querySelector(".js-password-with-confirmation"),
                    t = document.querySelector(".js-password-confirm");
                t.value !== e.value ? function(e) {
                    let t = e.closest(".js-form-group");
                    t.classList.add("errored");
                    let n = e.getAttribute("data-validity-message");
                    if (n) {
                        e.setCustomValidity(n);
                        let t = e.closest("form");
                        (0, a.G)(t)
                    }
                    let r = t.querySelector(".error"),
                        o = e.getAttribute("data-error-message");
                    if (!r && o) {
                        let e = document.createElement("dd");
                        e.classList.add("error"), e.textContent = o, t.appendChild(e)
                    }
                }(t) : function(e) {
                    let t = e.closest(".js-form-group");
                    e.setCustomValidity(""), t.classList.remove("errored");
                    let n = e.closest("form");
                    (0, a.G)(n);
                    let r = t.querySelector(".error");
                    r && t.removeChild(r)
                }(t)
            }(0, i.w4)("keyup", ".js-password-confirm", c), (0, i.w4)("keyup", ".js-password-with-confirmation", () => {
                let e = document.querySelector(".js-password-confirm");
                "" !== e.value && c()
            }), (0, o.N7)(".js-suggested-usernames-container", function(e) {
                let t = e.querySelectorAll(".js-suggested-username"),
                    n = document.querySelector(".js-signup-form");
                if (n && 0 !== t.length)
                    for (let e of t) n.appendChild(e)
            }), (0, o.N7)(".js-octocaptcha-parent", function(e) {
                let t = e.querySelector(".js-octocaptcha-spinner"),
                    n = e.querySelector(".js-octocaptcha-success"),
                    r = e.querySelector(".js-octocaptcha-token"),
                    o = e.querySelector(".js-octocaptcha-form-submit"),
                    i = e.querySelector(".js-octocaptcha-frame"),
                    a = r.getAttribute("data-octocaptcha-url"),
                    s = r.getAttribute("data-octocaptcha-timeout"),
                    c = s ? parseInt(s) : 3e4,
                    l = !1,
                    u = () => {
                        l || (l = !0, t.classList.add("d-none"), n.classList.remove("d-none"), o.disabled = !1, o.hidden = !1)
                    },
                    d = (e, n) => {
                        l || (l = !0, t.classList.add("d-none"), i.classList.remove("v-hidden"), i.style.height = `${e}px`, i.style.width = `${n}px`, i.contentWindow?.postMessage({
                            event: "captcha-loaded-ack"
                        }, a || ""))
                    },
                    f = () => {
                        if (l) return;
                        let t = document.createElement("input");
                        t.type = "hidden", t.id = "error_loading_captcha", t.name = "error_loading_captcha", t.value = "1", e.appendChild(t), r.required = !1, u()
                    },
                    m = () => {
                        o.hidden = !1, e.checkValidity() && (o.disabled = !1)
                    };
                setTimeout(f, c), i.addEventListener("error", f), window.addEventListener("message", e => {
                    if (e.origin !== a) return;
                    let t = e.data && e.data.event;
                    if ("captcha-loaded" === t) {
                        let t = e.data.height || 380,
                            n = e.data.width || 654;
                        d(t, n)
                    } else "captcha-complete" === t ? (r.value = e.data.sessionToken, m()) : "captcha-suppressed" === t && u()
                })
            }), (0, o.N7)(".js-survey-answer-choice:checked", {
                add(e) {
                    let t = e.closest(".js-answer");
                    if (t) {
                        let e = t.querySelector(".js-answer-choice");
                        e && (e.classList.remove("color-border-subtle", "color-bg-default"), e.classList.add("color-border-accent-emphasis", "color-bg-accent"))
                    }
                    let n = document.querySelector(`.js-other-input-box[data-other-input-for=${e.getAttribute("data-question-short-text")}]`);
                    n instanceof HTMLElement && e.classList.contains("js-other-choice") && (n.hidden = !1)
                },
                remove(e) {
                    let t = e.closest(".js-answer");
                    if (t) {
                        let e = t.querySelector(".js-answer-choice");
                        e && (e.classList.remove("color-border-accent-emphasis", "color-bg-accent"), e.classList.add("color-border-subtle", "color-bg-default"))
                    }
                    let n = document.querySelector(`.js-other-input-box[data-other-input-for=${e.getAttribute("data-question-short-text")}]`);
                    n instanceof HTMLElement && e.classList.contains("js-other-choice") && (n.hidden = !0)
                }
            }), (0, o.N7)(".js-allow-multiple:checked", {
                constructor: HTMLInputElement,
                add(e) {
                    let t = parseInt(e.getAttribute("data-max-choices") || ""),
                        n = e.closest(".js-question"),
                        r = n.querySelectorAll(".js-allow-multiple"),
                        o = Array.from(r).filter(e => !0 === e.checked).length;
                    if (o >= t)
                        for (let e of r) !1 === e.checked && (e.disabled = !0)
                },
                remove(e) {
                    let t = e.closest(".js-question");
                    for (let e of t.querySelectorAll(".js-allow-multiple")) e.disabled = !1
                }
            }), (0, o.N7)(".js-plan-choice:checked", {
                add(e) {
                    let t = e.closest(".plan-row");
                    t && t.classList.add("selected")
                },
                remove(e) {
                    let t = e.closest(".plan-row");
                    t && t.classList.remove("selected")
                }
            }), (0, o.N7)("input.js-form-checked-trigger:checked", {
                constructor: HTMLInputElement,
                add(e) {
                    let t = e.closest(".js-form-checked-container"),
                        n = t.querySelector(".js-form-checked-target");
                    n.hidden = !1
                },
                remove(e) {
                    let t = e.closest(".js-form-checked-container"),
                        n = t.querySelector(".js-form-checked-target"),
                        o = n.querySelector("input");
                    (0, r.Se)(o, !1), n.hidden = !0
                }
            }), (0, s.on)("auto-check-success", ".js-signup-input", async function(e) {
                let t = e.currentTarget;
                t.setAttribute("aria-invalid", "false")
            }), (0, s.on)("auto-check-error", ".js-signup-input", async function(e) {
                let t = e.currentTarget;
                t.setAttribute("aria-invalid", "true")
            }), (0, i.w4)("keyup", ".js-signup-input", function(e) {
                let t = e.currentTarget;
                0 === t.value.length && t.removeAttribute("aria-invalid")
            })
        },
        58700: (e, t, n) => {
            n.d(t, {
                Bt: () => i,
                DN: () => s,
                KL: () => u,
                Se: () => a,
                qC: () => d,
                sw: () => c
            });
            var r = n(5582);

            function o(e, t, n) {
                return e.dispatchEvent(new CustomEvent(t, {
                    bubbles: !0,
                    cancelable: n
                }))
            }

            function i(e, t) {
                t && (function(e, t) {
                    if (!(e instanceof HTMLFormElement)) throw TypeError("The specified element is not of type HTMLFormElement.");
                    if (!(t instanceof HTMLElement)) throw TypeError("The specified element is not of type HTMLElement.");
                    if ("submit" !== t.type) throw TypeError("The specified element is not a submit button.");
                    if (!e || e !== t.form) throw Error("The specified element is not owned by the form element.")
                }(e, t), (0, r.j)(t)), o(e, "submit", !0) && e.submit()
            }

            function a(e, t) {
                if ("boolean" == typeof t) {
                    if (e instanceof HTMLInputElement) e.checked = t;
                    else throw TypeError("only checkboxes can be set to boolean value")
                } else {
                    if ("checkbox" === e.type) throw TypeError("checkbox can't be set to string value");
                    e.value = t
                }
                o(e, "change", !1)
            }

            function s(e, t) {
                for (let n in t) {
                    let r = t[n],
                        o = e.elements.namedItem(n);
                    o instanceof HTMLInputElement ? o.value = r : o instanceof HTMLTextAreaElement && (o.value = r)
                }
            }

            function c(e) {
                if (!(e instanceof HTMLElement)) return !1;
                let t = e.nodeName.toLowerCase(),
                    n = (e.getAttribute("type") || "").toLowerCase();
                return "select" === t || "textarea" === t || "input" === t && "submit" !== n && "reset" !== n || e.isContentEditable
            }

            function l(e) {
                return new URLSearchParams(e)
            }

            function u(e, t) {
                let n = new URLSearchParams(e.search),
                    r = l(t);
                for (let [e, t] of r) n.append(e, t);
                return n.toString()
            }

            function d(e) {
                return l(new FormData(e)).toString()
            }
        },
        5582: (e, t, n) => {
            function r(e) {
                let t = e.closest("form");
                if (!(t instanceof HTMLFormElement)) return;
                let n = o(t);
                if (e.name) {
                    let r = e.matches("input[type=submit]") ? "Submit" : "",
                        o = e.value || r;
                    n || ((n = document.createElement("input")).type = "hidden", n.classList.add("js-submit-button-value"), t.prepend(n)), n.name = e.name, n.value = o
                } else n && n.remove()
            }

            function o(e) {
                let t = e.querySelector("input.js-submit-button-value");
                return t instanceof HTMLInputElement ? t : null
            }
            n.d(t, {
                j: () => r,
                u: () => o
            })
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, ["vendors-node_modules_github_selector-observer_dist_index_esm_js"], () => t(89845)), e.O()
    }
]);
//# sourceMappingURL=signup-b2f8c0fb4a51.js.map