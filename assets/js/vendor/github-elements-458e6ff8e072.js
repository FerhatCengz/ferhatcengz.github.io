"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["github-elements"], {
        10361: (e, t, i) => {
            i(38168), i(38257), i(14840), i(57260), i(13002), i(73921);
            var n, s = i(27034);
            i(51941), i(88309), i(40987), i(57852), i(88823), window.IncludeFragmentElement.prototype.fetch = e => (e.headers.append("X-Requested-With", "XMLHttpRequest"), window.fetch(e)), i(97895);
            var r = i(76006);

            function a(e, t, i, n) {
                var s, r = arguments.length,
                    a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                else
                    for (var o = e.length - 1; o >= 0; o--)(s = e[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(t, i, a) : s(t, i)) || a);
                return r > 3 && a && Object.defineProperty(t, i, a), a
            }
            let o = class GitCloneHelpElement extends HTMLElement {
                updateURL(e) {
                    let t = e.currentTarget,
                        i = t.getAttribute("data-url") || "";
                    if (this.helpField.value = i, t.matches(".js-git-protocol-clone-url"))
                        for (let e of this.helpTexts) e.textContent = i;
                    for (let e of this.cloneURLButtons) e.classList.remove("selected");
                    t.classList.add("selected")
                }
            };

            function l(e, t, i) {
                if (!t.has(e)) throw TypeError("attempted to " + i + " private field on non-instance");
                return t.get(e)
            }

            function u(e, t) {
                var i = l(e, t, "get");
                return i.get ? i.get.call(e) : i.value
            }

            function d(e, t, i) {
                ! function(e, t) {
                    if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.set(e, i)
            }

            function c(e, t, i) {
                var n = l(e, t, "set");
                return ! function(e, t, i) {
                    if (t.set) t.set.call(e, i);
                    else {
                        if (!t.writable) throw TypeError("attempted to set read only private field");
                        t.value = i
                    }
                }(e, n, i), i
            }
            a([r.fA], o.prototype, "helpField", void 0), a([r.GO], o.prototype, "helpTexts", void 0), a([r.GO], o.prototype, "cloneURLButtons", void 0), o = a([r.Ih], o);
            var h = new WeakMap,
                p = new WeakMap,
                m = new WeakMap,
                f = new WeakMap;
            let g = class MarkedTextElement extends HTMLElement {
                get query() {
                    return this.ownerInput ? this.ownerInput.value : this.getAttribute("query") || ""
                }
                set query(e) {
                    this.setAttribute("query", e)
                }
                get ownerInput() {
                    let e = this.ownerDocument.getElementById(this.getAttribute("data-owner-input") || "");
                    return e instanceof HTMLInputElement ? e : null
                }
                connectedCallback() {
                    this.handleEvent(), this.ownerInput?.addEventListener("input", this), c(this, m, new MutationObserver(() => this.handleEvent()))
                }
                handleEvent() {
                    u(this, f) && cancelAnimationFrame(u(this, f)), c(this, f, requestAnimationFrame(() => this.mark()))
                }
                disconnectedCallback() {
                    this.ownerInput?.removeEventListener("input", this), u(this, m).disconnect()
                }
                mark() {
                    let e = this.textContent || "",
                        t = this.query;
                    if (e === u(this, h) && t === u(this, p)) return;
                    c(this, h, e), c(this, p, t), u(this, m).disconnect();
                    let i = 0,
                        n = document.createDocumentFragment();
                    for (let s of (this.positions || function(e, t) {
                            let i = [],
                                n = 0;
                            for (let s = 0; s < e.length; s++) {
                                let r = e[s],
                                    a = t.indexOf(r, n);
                                if (-1 === a) break;
                                n = a + 1, i.push(a)
                            }
                            return i
                        })(t, e)) {
                        if (Number(s) !== s || s < i || s > e.length) continue;
                        let t = e.slice(i, s);
                        "" !== t && n.appendChild(document.createTextNode(e.slice(i, s))), i = s + 1;
                        let r = document.createElement("mark");
                        r.textContent = e[s], n.appendChild(r)
                    }
                    n.appendChild(document.createTextNode(e.slice(i))), this.replaceChildren(n), u(this, m).observe(this, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    })
                }
                constructor(...e) {
                    super(...e), d(this, h, {
                        writable: !0,
                        value: void 0
                    }), d(this, p, {
                        writable: !0,
                        value: void 0
                    }), d(this, m, {
                        writable: !0,
                        value: void 0
                    }), d(this, f, {
                        writable: !0,
                        value: void 0
                    }), c(this, h, ""), c(this, p, "")
                }
            };
            g.observedAttributes = ["query", "data-owner-input"], window.customElements.get("marked-text") || (window.MarkedTextElement = g, window.customElements.define("marked-text", g));
            var v = i(81775);
            let b = class PasswordStrengthElement extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("input", w)
                }
                disconnectedCallback() {
                    this.removeEventListener("input", w)
                }
            };

            function w(e) {
                let t = e.currentTarget;
                if (!(t instanceof b)) return;
                let i = e.target;
                if (!(i instanceof HTMLInputElement)) return;
                let n = i.form;
                if (!(n instanceof HTMLFormElement)) return;
                let s = function(e, t) {
                    let i = {
                        valid: !1,
                        hasMinimumCharacterCount: e.length >= t.minimumCharacterCount,
                        hasMinimumPassphraseLength: 0 !== t.passphraseLength && e.length >= t.passphraseLength,
                        hasLowerCase: /[a-z]/.test(e),
                        hasNumber: /\d/.test(e)
                    };
                    return i.valid = i.hasMinimumPassphraseLength || i.hasMinimumCharacterCount && i.hasLowerCase && i.hasNumber, i
                }(i.value, {
                    minimumCharacterCount: Number(t.getAttribute("minimum-character-count")),
                    passphraseLength: Number(t.getAttribute("passphrase-length"))
                });
                if (s.valid) {
                    i.setCustomValidity("");
                    let e = t.querySelector("dl.form-group");
                    e && (e.classList.remove("errored"), e.classList.add("successed"))
                } else "true" !== t.getAttribute("skip-custom-validity") && i.setCustomValidity(t.getAttribute("invalid-message") || "Invalid");
                (function(e, t) {
                    let i = e.querySelector("[data-more-than-n-chars]"),
                        n = e.querySelector("[data-min-chars]"),
                        s = e.querySelector("[data-number-requirement]"),
                        r = e.querySelector("[data-letter-requirement]"),
                        a = e.getAttribute("error-class")?.split(" ").filter(e => e.length > 0) || [],
                        o = e.getAttribute("pass-class")?.split(" ").filter(e => e.length > 0) || [];
                    for (let e of [i, n, s, r]) e?.classList.remove(...a, ...o);
                    if (t.hasMinimumPassphraseLength && i) i.classList.add(...o);
                    else if (t.valid) n.classList.add(...o), s.classList.add(...o), r.classList.add(...o);
                    else {
                        let e = t.hasMinimumCharacterCount ? o : a,
                            l = t.hasNumber ? o : a,
                            u = t.hasLowerCase ? o : a;
                        i?.classList.add(...a), n.classList.add(...e), s.classList.add(...l), r.classList.add(...u)
                    }
                })(t, s), (0, v.G)(n)
            }

            function y(e, t, i, n) {
                var s, r = arguments.length,
                    a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                else
                    for (var o = e.length - 1; o >= 0; o--)(s = e[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(t, i, a) : s(t, i)) || a);
                return r > 3 && a && Object.defineProperty(t, i, a), a
            }
            window.customElements.get("password-strength") || (window.PasswordStrengthElement = b, window.customElements.define("password-strength", b)), i(87551);
            let E = class PollIncludeFragmentElement extends s.Z {
                async fetch(e, t = 1e3) {
                    let i = await super.fetch(e);
                    return 202 === i.status ? (await new Promise(e => setTimeout(e, t)), this.fetch(e, 1.5 * t)) : i
                }
                connectedCallback() {
                    super.connectedCallback(), this.retryButton && this.retryButton.addEventListener("click", () => {
                        this.refetch()
                    })
                }
            };
            y([r.fA], E.prototype, "retryButton", void 0), E = y([r.Ih], E);
            var x = i(10160);
            let _ = e => void 0 === e || /\n/.test(e),
                C = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
                L = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
                T = new WeakMap,
                k = new WeakMap,
                M = class SlashCommandExpander {
                    destroy() {
                        this.input.removeEventListener("paste", this.onpaste), this.input.removeEventListener("input", this.oninput), this.input.removeEventListener("keydown", this.onkeydown), this.input.removeEventListener("blur", this.onblur)
                    }
                    activate(e, t) {
                        this.input === document.activeElement && this.setMenu(e, t)
                    }
                    deactivate() {
                        let e = this.menu,
                            t = this.combobox;
                        return !!e && !!t && (this.menu = null, this.combobox = null, e.removeEventListener("combobox-commit", this.oncommit), e.removeEventListener("mousedown", this.onmousedown), t.destroy(), e.remove(), !0)
                    }
                    setMenu(e, t) {
                        this.deactivate(), this.menu = t, t.id || (t.id = `text-expander-${Math.floor(1e5*Math.random()).toString()}`), this.expander.append(t);
                        let i = t.querySelector(".js-command-list-container");
                        i ? this.combobox = new x.Z(this.input, i) : this.combobox = new x.Z(this.input, t);
                        let {
                            top: n,
                            left: s
                        } = function(e, t = e.selectionEnd) {
                            let {
                                mirror: i,
                                marker: n
                            } = function(e, t) {
                                let i, n;
                                let s = e.nodeName.toLowerCase();
                                if ("textarea" !== s && "input" !== s) throw Error("expected textField to a textarea or input");
                                let r = T.get(e);
                                if (r && r.parentElement === e.parentElement) r.textContent = "";
                                else {
                                    r = document.createElement("div"), T.set(e, r);
                                    let t = window.getComputedStyle(e),
                                        i = C.slice(0);
                                    "textarea" === s ? i.push("white-space:pre-wrap;") : i.push("white-space:nowrap;");
                                    for (let e = 0, n = L.length; e < n; e++) {
                                        let n = L[e];
                                        i.push(`${n}:${t.getPropertyValue(n)};`)
                                    }
                                    r.style.cssText = i.join(" ")
                                }
                                let a = document.createElement("span");
                                if (a.style.cssText = "position: absolute;", a.textContent = "\xa0", "number" == typeof t) {
                                    let s = e.value.substring(0, t);
                                    s && (i = document.createTextNode(s)), (s = e.value.substring(t)) && (n = document.createTextNode(s))
                                } else {
                                    let t = e.value;
                                    t && (i = document.createTextNode(t))
                                }
                                if (i && r.appendChild(i), r.appendChild(a), n && r.appendChild(n), !r.parentElement) {
                                    if (!e.parentElement) throw Error("textField must have a parentElement to mirror");
                                    e.parentElement.insertBefore(r, e)
                                }
                                return r.scrollTop = e.scrollTop, r.scrollLeft = e.scrollLeft, {
                                    mirror: r,
                                    marker: a
                                }
                            }(e, t), s = i.getBoundingClientRect(), r = n.getBoundingClientRect();
                            return setTimeout(() => {
                                i.remove()
                            }, 5e3), {
                                top: r.top - s.top,
                                left: r.left - s.left
                            }
                        }(this.input, e.position), r = parseInt(window.getComputedStyle(this.input).fontSize);
                        t.style.top = `${n+r}px`, t.style.left = `${s}px`, this.combobox.start(), t.addEventListener("combobox-commit", this.oncommit), t.addEventListener("mousedown", this.onmousedown), this.combobox.navigate(1)
                    }
                    setValue(e) {
                        if (null == e) return;
                        let t = this.match;
                        if (!t) return;
                        let {
                            cursor: i,
                            value: n
                        } = this.replaceCursorMark(e);
                        n = n?.length === 0 ? n : `${n} `;
                        let s = t.position - t.key.length,
                            r = t.position + t.text.length;
                        this.input.focus();
                        let a = !1;
                        try {
                            this.input.setSelectionRange(s, r), a = document.execCommand("insertText", !1, n)
                        } catch (e) {
                            a = !1
                        }
                        if (!a) {
                            let e = this.input.value.substring(0, t.position - t.key.length),
                                i = this.input.value.substring(t.position + t.text.length);
                            this.input.value = e + n + i
                        }
                        this.deactivate(), i = s + (i || n.length), this.input.selectionStart = i, this.input.selectionEnd = i
                    }
                    replaceCursorMark(e) {
                        let t = /%cursor%/gm,
                            i = t.exec(e);
                        return i ? {
                            cursor: i.index,
                            value: e.replace(t, "")
                        } : {
                            cursor: null,
                            value: e
                        }
                    }
                    async onCommit({
                        target: e
                    }) {
                        if (!(e instanceof HTMLElement) || !this.combobox) return;
                        let t = this.match;
                        if (!t) return;
                        let n = {
                                item: e,
                                key: t.key,
                                value: null
                            },
                            s = new CustomEvent("text-expander-value", {
                                cancelable: !0,
                                detail: n
                            }),
                            r = !this.expander.dispatchEvent(s),
                            {
                                onValue: a
                            } = await i.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(i.bind(i, 72564));
                        await a(this.expander, t.key, e), !r && n.value && this.setValue(n.value)
                    }
                    onBlur() {
                        if (this.interactingWithMenu) {
                            this.interactingWithMenu = !1;
                            return
                        }
                        this.deactivate()
                    }
                    onPaste() {
                        this.justPasted = !0
                    }
                    async delay(e) {
                        return new Promise(t => setTimeout(t, e))
                    }
                    async onInput() {
                        if (this.justPasted) {
                            this.justPasted = !1;
                            return
                        }
                        let e = this.findMatch();
                        if (e) {
                            if (this.match = e, await this.delay(this.appropriateDelay()), this.match !== e) return;
                            let t = await this.notifyProviders(e);
                            if (!this.match) return;
                            t ? this.activate(e, t) : this.deactivate()
                        } else this.match = null, this.deactivate()
                    }
                    appropriateDelay() {
                        return 250
                    }
                    findMatch() {
                        let e = this.input.selectionEnd,
                            t = this.input.value;
                        for (let i of this.expander.keys) {
                            let n = function(e, t, i) {
                                let n = e.lastIndexOf(t, i - 1);
                                if (-1 === n) return;
                                let s = e.lastIndexOf(" ", i - 1);
                                if (s > n) return;
                                let r = e.lastIndexOf("\n", i - 1);
                                if (r > n) return;
                                let a = e[n - 1];
                                if (a && "\n" !== a) return;
                                let o = e.substring(n + t.length, i);
                                return {
                                    word: o,
                                    position: n + t.length,
                                    beginningOfLine: _(a)
                                }
                            }(t, i, e);
                            if (n) return {
                                text: n.word,
                                key: i,
                                position: n.position,
                                beginningOfLine: n.beginningOfLine
                            }
                        }
                    }
                    async notifyProviders(e) {
                        let t = [],
                            n = e => t.push(e),
                            s = new CustomEvent("text-expander-change", {
                                cancelable: !0,
                                detail: {
                                    provide: n,
                                    text: e.text,
                                    key: e.key
                                }
                            }),
                            r = !this.expander.dispatchEvent(s);
                        if (r) return;
                        let {
                            onChange: a
                        } = await i.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(i.bind(i, 72564));
                        a(this.expander, e.key, n, e.text);
                        let o = await Promise.all(t),
                            l = o.filter(e => e.matched).map(e => e.fragment);
                        return l[0]
                    }
                    onMousedown() {
                        this.interactingWithMenu = !0
                    }
                    onKeydown(e) {
                        "Escape" === e.key && this.deactivate() && (e.stopImmediatePropagation(), e.preventDefault())
                    }
                    constructor(e, t) {
                        this.expander = e, this.input = t, this.combobox = null, this.menu = null, this.match = null, this.justPasted = !1, this.oninput = this.onInput.bind(this), this.onpaste = this.onPaste.bind(this), this.onkeydown = this.onKeydown.bind(this), this.oncommit = this.onCommit.bind(this), this.onmousedown = this.onMousedown.bind(this), this.onblur = this.onBlur.bind(this), this.interactingWithMenu = !1, t.addEventListener("paste", this.onpaste), t.addEventListener("input", this.oninput), t.addEventListener("keydown", this.onkeydown), t.addEventListener("blur", this.onblur)
                    }
                };

            function A(e, t, i, n) {
                var s, r = arguments.length,
                    a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                else
                    for (var o = e.length - 1; o >= 0; o--)(s = e[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(t, i, a) : s(t, i)) || a);
                return r > 3 && a && Object.defineProperty(t, i, a), a
            }
            n = class SlashCommandExpanderElement extends HTMLElement {
                get keys() {
                    let e = this.getAttribute("keys");
                    return e ? e.split(" ") : []
                }
                connectedCallback() {
                    let e = this.querySelector('input[type="text"], textarea');
                    if (!(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)) return;
                    let t = new M(this, e);
                    k.set(this, t)
                }
                disconnectedCallback() {
                    let e = k.get(this);
                    e && (e.destroy(), k.delete(this))
                }
                setValue(e) {
                    let t = k.get(this);
                    t && t.setValue(e)
                }
                setMenu(e, t = !1) {
                    let i = k.get(this);
                    i && i.match && (t && (i.interactingWithMenu = !0), i.setMenu(i.match, e))
                }
                closeMenu() {
                    let e = k.get(this);
                    e && e.setValue("")
                }
                isLoading() {
                    let e = this.getElementsByClassName("js-slash-command-expander-loading")[0];
                    if (e) {
                        let t = e.cloneNode(!0);
                        t.classList.remove("d-none"), this.setMenu(t)
                    }
                }
                showError() {
                    let e = this.getElementsByClassName("js-slash-command-expander-error")[0];
                    if (e) {
                        let t = e.cloneNode(!0);
                        t.classList.remove("d-none"), this.setMenu(t)
                    }
                }
            }, window.customElements.get("slash-command-expander") || (window.SlashCommandExpanderElement = n, window.customElements.define("slash-command-expander", n));
            let S = class TextSuggesterElement extends HTMLElement {
                acceptSuggestion() {
                    this.suggestion?.textContent && (this.input.value = this.suggestion.textContent, this.input.dispatchEvent(new Event("input")), this.suggestionContainer && (this.suggestionContainer.hidden = !0), this.input.focus())
                }
            };

            function q(e, t, i) {
                if (!t.has(e)) throw TypeError("attempted to " + i + " private field on non-instance");
                return t.get(e)
            }

            function I(e, t) {
                var i = q(e, t, "get");
                return i.get ? i.get.call(e) : i.value
            }

            function P(e, t, i) {
                ! function(e, t) {
                    if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.set(e, i)
            }

            function O(e, t, i) {
                var n = q(e, t, "set");
                return ! function(e, t, i) {
                    if (t.set) t.set.call(e, i);
                    else {
                        if (!t.writable) throw TypeError("attempted to set read only private field");
                        t.value = i
                    }
                }(e, n, i), i
            }
            A([r.fA], S.prototype, "input", void 0), A([r.fA], S.prototype, "suggestionContainer", void 0), A([r.fA], S.prototype, "suggestion", void 0), S = A([r.Ih], S);
            var R = new WeakMap,
                j = new WeakMap,
                z = new WeakMap,
                N = new WeakMap,
                H = new WeakMap,
                W = new WeakMap;
            let F = class VirtualFilterInputElement extends HTMLElement {
                static get observedAttributes() {
                    return ["src", "loading", "data-property", "aria-owns"]
                }
                get filtered() {
                    if (I(this, W)) return I(this, W);
                    if (this.hasAttribute("aria-owns")) {
                        let e = this.ownerDocument.getElementById(this.getAttribute("aria-owns") || "");
                        e && (e instanceof Set || e && "object" == typeof e && "size" in e && "add" in e && "delete" in e && "clear" in e) && O(this, W, e)
                    }
                    return O(this, W, I(this, W) || new Set)
                }
                set filtered(e) {
                    O(this, W, e)
                }
                get input() {
                    return this.querySelector("input, textarea")
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(e) {
                    this.setAttribute("src", e)
                }
                get loading() {
                    return "lazy" === this.getAttribute("loading") ? "lazy" : "eager"
                }
                set loading(e) {
                    this.setAttribute("loading", e)
                }
                get accept() {
                    return this.getAttribute("accept") || ""
                }
                set accept(e) {
                    this.setAttribute("accept", e)
                }
                get property() {
                    return this.getAttribute("data-property") || ""
                }
                set property(e) {
                    this.setAttribute("data-property", e)
                }
                reset() {
                    this.filtered.clear(), O(this, H, new Set)
                }
                clear() {
                    this.input && (this.input.value = "", this.input.dispatchEvent(new Event("input")))
                }
                attributeChangedCallback(e, t, i) {
                    let n = this.isConnected && this.src,
                        s = "eager" === this.loading,
                        r = t !== i;
                    ("src" === e || "data-property" === e) && r && (O(this, z, null), I(this, N) && clearTimeout(I(this, N))), n && s && ("src" === e || "loading" === e || "accept" === e || "data-property" === e) && r ? (cancelAnimationFrame(I(this, j)), O(this, j, requestAnimationFrame(() => this.load()))) : "aria-owns" === e && O(this, W, null)
                }
                connectedCallback() {
                    this.src && "eager" === this.loading && (cancelAnimationFrame(I(this, j)), O(this, j, requestAnimationFrame(() => this.load())));
                    let e = this.input;
                    if (!e) return;
                    let t = this.getAttribute("aria-owns");
                    null !== t && this.attributeChangedCallback("aria-owns", "", t), e.setAttribute("autocomplete", "off"), e.setAttribute("spellcheck", "false"), this.src && "lazy" === this.loading && (document.activeElement === e ? this.load() : e.addEventListener("focus", () => {
                        this.load()
                    }, {
                        once: !0
                    })), e.addEventListener("input", this)
                }
                disconnectedCallback() {
                    this.input?.removeEventListener("input", this)
                }
                handleEvent(e) {
                    "input" === e.type && (I(this, N) && clearTimeout(I(this, N)), O(this, N, window.setTimeout(() => this.filterItems(), (this.input?.value?.length, 300))))
                }
                async load() {
                    I(this, R)?.abort(), O(this, R, new AbortController);
                    let {
                        signal: e
                    } = I(this, R);
                    if (!this.src) throw Error("missing src");
                    if (await new Promise(e => setTimeout(e, 0)), !e.aborted) {
                        this.dispatchEvent(new Event("loadstart"));
                        try {
                            let t = await this.fetch(this.request(), {
                                signal: e,
                                headers: {
                                    "X-Requested-With": "XMLHttpRequest"
                                }
                            });
                            if (location.origin + this.src !== t.url) return;
                            if (!t.ok) throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);
                            O(this, H, new Set((await t.json())[this.property])), O(this, z, null), this.dispatchEvent(new Event("loadend"))
                        } catch (t) {
                            if (e.aborted) {
                                this.dispatchEvent(new Event("loadend"));
                                return
                            }
                            throw (async () => {
                                this.dispatchEvent(new Event("error")), this.dispatchEvent(new Event("loadend"))
                            })(), t
                        }
                        this.filtered.clear(), this.filterItems()
                    }
                }
                request() {
                    return new Request(this.src, {
                        method: "GET",
                        credentials: "same-origin",
                        headers: {
                            Accept: this.accept || "application/json"
                        }
                    })
                }
                fetch(e, t) {
                    return fetch(e, t)
                }
                filterItems() {
                    let e;
                    let t = this.input?.value.trim() ?? "",
                        i = I(this, z);
                    if (O(this, z, t), t !== i) {
                        for (let n of (this.dispatchEvent(new CustomEvent("virtual-filter-input-filter")), i && t.includes(i) ? e = this.filtered : (e = I(this, H), this.filtered.clear()), e)) this.filter(n, t) ? this.filtered.add(n) : this.filtered.delete(n);
                        this.dispatchEvent(new CustomEvent("virtual-filter-input-filtered"))
                    }
                }
                constructor(...e) {
                    super(...e), P(this, R, {
                        writable: !0,
                        value: void 0
                    }), P(this, j, {
                        writable: !0,
                        value: void 0
                    }), P(this, z, {
                        writable: !0,
                        value: void 0
                    }), P(this, N, {
                        writable: !0,
                        value: void 0
                    }), P(this, H, {
                        writable: !0,
                        value: void 0
                    }), P(this, W, {
                        writable: !0,
                        value: void 0
                    }), O(this, j, 0), O(this, z, null), O(this, H, new Set), O(this, W, null), this.filter = (e, t) => String(e).includes(t)
                }
            };

            function B(e, t, i) {
                if (!t.has(e)) throw TypeError("attempted to " + i + " private field on non-instance");
                return t.get(e)
            }

            function D(e, t) {
                var i = B(e, t, "get");
                return i.get ? i.get.call(e) : i.value
            }

            function V(e, t, i) {
                ! function(e, t) {
                    if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.set(e, i)
            }

            function $(e, t, i) {
                var n = B(e, t, "set");
                return ! function(e, t, i) {
                    if (t.set) t.set.call(e, i);
                    else {
                        if (!t.writable) throw TypeError("attempted to set read only private field");
                        t.value = i
                    }
                }(e, n, i), i
            }
            window.customElements.get("virtual-filter-input") || (window.VirtualFilterInputElement = F, window.customElements.define("virtual-filter-input", F));
            let U = new IntersectionObserver(e => {
                for (let t of e) t.isIntersecting && t.target instanceof et && "eager" === t.target.updating && t.target.update()
            });
            var Y = new WeakMap,
                Z = new WeakMap,
                G = new WeakMap,
                K = new WeakMap,
                X = new WeakMap,
                J = new WeakMap,
                Q = new WeakMap;
            let ee = Symbol.iterator,
                et = class VirtualListElement extends HTMLElement {
                    static get observedAttributes() {
                        return ["data-updating", "aria-activedescendant"]
                    }
                    get updating() {
                        return "lazy" === this.getAttribute("data-updating") ? "lazy" : "eager"
                    }
                    set updating(e) {
                        this.setAttribute("data-updating", e)
                    }
                    get size() {
                        return D(this, Z).size
                    }
                    get range() {
                        let e = this.getBoundingClientRect().height,
                            {
                                scrollTop: t
                            } = this,
                            i = `${t}-${e}`;
                        if (D(this, X).has(i)) return D(this, X).get(i);
                        let n = 0,
                            s = 0,
                            r = 0,
                            a = 0,
                            o = D(this, G);
                        for (let i of D(this, Z)) {
                            let l = o.get(i) || D(this, K);
                            if (r + l < t) r += l, n += 1, s += 1;
                            else if (a - l < e) a += l, s += 1;
                            else if (a >= e) break
                        }
                        return [n, s]
                    }
                    get list() {
                        let e = this.querySelector("ul, ol, tbody");
                        if (!e) throw Error("virtual-list must have a container element inside: any of <ul>, <ol>, <tbody>");
                        return e
                    }
                    attributeChangedCallback(e, t, i) {
                        if (t === i || !this.isConnected) return;
                        let n = "data-updating" === e && "eager" === i,
                            s = "data-sorted" === e && this.hasAttribute("data-sorted");
                        if ((n || s) && this.update(), "aria-activedescendant" === e) {
                            let e = this.getIndexByElementId(i);
                            this.dispatchEvent(new ActiveDescendantChangedEvent(e, i)), "eager" === this.updating && this.update()
                        }
                    }
                    connectedCallback() {
                        this.addEventListener("scroll", () => this.update()), this.updateSync = this.updateSync.bind(this), U.observe(this)
                    }
                    update() {
                        D(this, Q) && cancelAnimationFrame(D(this, Q)), !D(this, Y) && this.hasAttribute("data-sorted") ? $(this, Q, requestAnimationFrame(() => {
                            this.dispatchEvent(new CustomEvent("virtual-list-sort", {
                                cancelable: !0
                            })) && this.sort()
                        })) : $(this, Q, requestAnimationFrame(this.updateSync))
                    }
                    renderItem(e) {
                        let t = {
                            item: e,
                            fragment: document.createDocumentFragment()
                        };
                        return this.dispatchEvent(new CustomEvent("virtual-list-render-item", {
                            detail: t
                        })), t.fragment.children[0]
                    }
                    recalculateHeights(e) {
                        let t = this.list;
                        if (!t) return;
                        let i = this.renderItem(e);
                        if (!i) return;
                        t.append(i);
                        let n = t.children[0].getBoundingClientRect().height;
                        t.replaceChildren(), n && ($(this, K, n), D(this, G).set(e, n))
                    }
                    getIndexByElementId(e) {
                        if (!e) return -1;
                        let t = 0;
                        for (let [, i] of D(this, J)) {
                            if (i.id === e || i.querySelector(`#${e}`)) return t;
                            t++
                        }
                        return -1
                    }
                    updateSync() {
                        let e = this.list,
                            [t, i] = this.range;
                        if (i < t) return;
                        let n = !this.dispatchEvent(new CustomEvent("virtual-list-update", {
                            cancelable: !0
                        }));
                        if (n) return;
                        let s = new Map,
                            r = D(this, J),
                            a = -1,
                            o = !0,
                            l = 0,
                            u = 0,
                            d = 0;
                        for (let e of D(this, Z)) {
                            if (-1 !== a || Number.isFinite(D(this, K)) && 0 !== D(this, K) || this.recalculateHeights(e), a += 1, d = D(this, G).get(e) || D(this, K), a < t) {
                                l += d, u = l;
                                continue
                            }
                            if (a > i) {
                                o = !1;
                                break
                            }
                            let n = null;
                            if (r.has(e)) n = r.get(e);
                            else {
                                if (!(n = this.renderItem(e))) continue;
                                n.querySelector("[aria-setsize]")?.setAttribute("aria-setsize", D(this, Z).size.toString()), n.querySelector("[aria-posinset]")?.setAttribute("aria-posinset", (a + 1).toString()), r.set(e, n)
                            }
                            n.querySelector("[tabindex]")?.setAttribute("data-scrolltop", u.toString()), u += d, s.set(e, n)
                        }
                        e.replaceChildren(...s.values()), e.style.paddingTop = `${l}px`;
                        let c = this.size * D(this, K);
                        e.style.height = `${c||0}px`;
                        let h = !1,
                            p = this.getBoundingClientRect().bottom;
                        for (let [e, t] of s) {
                            let {
                                height: i,
                                bottom: n
                            } = t.getBoundingClientRect();
                            h = h || n >= p, D(this, G).set(e, i)
                        }
                        let m = !o && this.size > s.size;
                        if (m && !h) return D(this, X).delete(`${this.scrollTop}-${this.getBoundingClientRect().height}`), this.update();
                        this.dispatchEvent(new RenderedEvent(r)), this.dispatchEvent(new CustomEvent("virtual-list-updated"))
                    }
                    resetRenderCache() {
                        $(this, J, new Map)
                    }
                    has(e) {
                        return D(this, Z).has(e)
                    }
                    add(e) {
                        return D(this, Z).add(e), $(this, Y, !1), Number.isFinite(D(this, K)) || this.recalculateHeights(e), this.resetRenderCache(), this.dispatchEvent(new Event("virtual-list-data-updated")), "eager" === this.updating && this.update(), this
                    }
                    delete(e) {
                        let t = D(this, Z).delete(e);
                        return $(this, Y, !1), D(this, G).delete(e), this.resetRenderCache(), this.dispatchEvent(new Event("virtual-list-data-updated")), "eager" === this.updating && this.update(), t
                    }
                    clear() {
                        D(this, Z).clear(), D(this, G).clear(), $(this, K, 1 / 0), $(this, Y, !0), this.resetRenderCache(), this.dispatchEvent(new Event("virtual-list-data-updated")), "eager" === this.updating && this.update()
                    }
                    forEach(e, t) {
                        for (let i of this) e.call(t, i, i, this)
                    }
                    entries() {
                        return D(this, Z).entries()
                    }
                    values() {
                        return D(this, Z).values()
                    }
                    keys() {
                        return D(this, Z).keys()
                    } [ee]() {
                        return D(this, Z)[Symbol.iterator]()
                    }
                    sort(e) {
                        return $(this, Z, new Set(Array.from(this).sort(e))), $(this, Y, !0), this.dispatchEvent(new Event("virtual-list-data-updated")), "eager" === this.updating && this.update(), this
                    }
                    constructor(...e) {
                        super(...e), V(this, Y, {
                            writable: !0,
                            value: void 0
                        }), V(this, Z, {
                            writable: !0,
                            value: void 0
                        }), V(this, G, {
                            writable: !0,
                            value: void 0
                        }), V(this, K, {
                            writable: !0,
                            value: void 0
                        }), V(this, X, {
                            writable: !0,
                            value: void 0
                        }), V(this, J, {
                            writable: !0,
                            value: void 0
                        }), V(this, Q, {
                            writable: !0,
                            value: void 0
                        }), $(this, Y, !1), $(this, Z, new Set), $(this, G, new Map), $(this, K, 1 / 0), $(this, X, new Map), $(this, J, new Map), $(this, Q, 0)
                    }
                };
            let ActiveDescendantChangedEvent = class ActiveDescendantChangedEvent extends Event {
                constructor(e, t) {
                    super("virtual-list-activedescendant-changed"), this.index = e, this.id = t
                }
            };
            let RenderedEvent = class RenderedEvent extends Event {
                constructor(e) {
                    super("virtual-list-rendered"), this.rowsCache = e
                }
            };

            function ei(e, t, i, n) {
                var s, r = arguments.length,
                    a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                else
                    for (var o = e.length - 1; o >= 0; o--)(s = e[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(t, i, a) : s(t, i)) || a);
                return r > 3 && a && Object.defineProperty(t, i, a), a
            }
            window.customElements.get("virtual-list") || (window.VirtualListElement = et, window.customElements.define("virtual-list", et));
            let en = class VisiblePasswordElement extends HTMLElement {
                show() {
                    this.input.type = "text", this.input.focus(), this.showButton.hidden = !0, this.hideButton.hidden = !1
                }
                hide() {
                    this.input.type = "password", this.input.focus(), this.hideButton.hidden = !0, this.showButton.hidden = !1
                }
            };
            ei([r.fA], en.prototype, "input", void 0), ei([r.fA], en.prototype, "showButton", void 0), ei([r.fA], en.prototype, "hideButton", void 0), en = ei([r.Ih], en);
            var es = i(22490),
                er = i(7180);
            let ea = "include-fragment-element-no-op",
                eo = es.ZO.createPolicy(ea, {
                    createHTML: e => er.O.apply({
                        policy: () => e,
                        policyName: ea,
                        fallback: e,
                        fallbackOnError: !0
                    })
                });
            window.IncludeFragmentElement.setCSPTrustedTypesPolicy(eo)
        },
        81775: (e, t, i) => {
            i.d(t, {
                G: () => l
            });
            var n = i(254),
                s = i(36071),
                r = i(59753);

            function a(e) {
                let t = e.getAttribute("data-required-value"),
                    i = e.getAttribute("data-required-value-prefix");
                if (e.value === t) e.setCustomValidity("");
                else {
                    let n = t;
                    i && (n = i + n), e.setCustomValidity(n)
                }
            }(0, n.q6)("[data-required-value]", function(e) {
                let t = e.currentTarget;
                a(t)
            }), (0, r.on)("change", "[data-required-value]", function(e) {
                let t = e.currentTarget;
                a(t), l(t.form)
            }), (0, n.q6)("[data-required-trimmed]", function(e) {
                let t = e.currentTarget;
                "" === t.value.trim() ? t.setCustomValidity(t.getAttribute("data-required-trimmed")) : t.setCustomValidity("")
            }), (0, r.on)("change", "[data-required-trimmed]", function(e) {
                let t = e.currentTarget;
                "" === t.value.trim() ? t.setCustomValidity(t.getAttribute("data-required-trimmed")) : t.setCustomValidity(""), l(t.form)
            }), (0, n.ZG)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]", e => {
                let t = e.checkValidity();

                function i() {
                    let i = e.checkValidity();
                    i !== t && e.form && l(e.form), t = i
                }
                e.addEventListener("input", i), e.addEventListener("blur", function t() {
                    e.removeEventListener("input", i), e.removeEventListener("blur", t)
                })
            });
            let o = new WeakMap;

            function l(e) {
                let t = e.checkValidity();
                for (let i of e.querySelectorAll("button[data-disable-invalid]")) i.disabled = !t
            }(0, s.N7)("button[data-disable-invalid]", {
                constructor: HTMLButtonElement,
                initialize(e) {
                    let t = e.form;
                    t && (o.get(t) || (t.addEventListener("change", () => l(t)), o.set(t, !0)), e.disabled = !t.checkValidity())
                }
            }), (0, s.N7)("input[data-required-change], textarea[data-required-change]", function(e) {
                let t = "radio" === e.type && e.form ? e.form.elements.namedItem(e.name).value : null;

                function i(i) {
                    let n = e.form;
                    if (i && "radio" === e.type && n && t)
                        for (let i of n.elements.namedItem(e.name)) i instanceof HTMLInputElement && i.setCustomValidity(e.value === t ? "unchanged" : "");
                    else e.setCustomValidity(e.value === (t || e.defaultValue) ? "unchanged" : "")
                }
                e.addEventListener("input", i), e.addEventListener("change", i), i(), e.form && l(e.form)
            }), document.addEventListener("reset", function(e) {
                if (e.target instanceof HTMLFormElement) {
                    let t = e.target;
                    setTimeout(() => l(t))
                }
            })
        },
        97895: (e, t, i) => {
            i.d(t, {
                Z: () => c
            });
            var n = i(47142);
            let s = (e, t, i) => {
                    if (!(0, n.CD)(e, t)) return -1 / 0;
                    let s = (0, n.Gs)(e, t);
                    return s < i ? -1 / 0 : s
                },
                r = (e, t, i) => {
                    e.textContent = "";
                    let s = 0;
                    for (let r of (0, n.m7)(t, i)) {
                        let t = i.slice(s, r);
                        "" !== t && e.appendChild(document.createTextNode(i.slice(s, r))), s = r + 1;
                        let n = document.createElement("mark");
                        n.textContent = i[r], e.appendChild(n)
                    }
                    e.appendChild(document.createTextNode(i.slice(s)))
                },
                a = new WeakMap,
                o = new WeakMap,
                l = new WeakMap,
                u = e => {
                    if (!l.has(e) && e instanceof HTMLElement) {
                        let t = (e.getAttribute("data-value") || e.textContent || "").trim();
                        return l.set(e, t), t
                    }
                    return l.get(e) || ""
                },
                d = class FuzzyListElement extends HTMLElement {
                    connectedCallback() {
                        let e = this.querySelector("ul");
                        if (!e) return;
                        let t = new Set(e.querySelectorAll("li")),
                            i = this.querySelector("input");
                        i instanceof HTMLInputElement && i.addEventListener("input", () => {
                            this.value = i.value
                        });
                        let s = new MutationObserver(e => {
                            let i = !1;
                            for (let s of e)
                                if ("childList" === s.type && s.addedNodes.length) {
                                    for (let e of s.addedNodes)
                                        if (e instanceof HTMLLIElement && !t.has(e)) {
                                            let s = u(e);
                                            i = i || (0, n.CD)(this.value, s), t.add(e)
                                        }
                                } i && this.sort()
                        });
                        s.observe(e, {
                            childList: !0
                        });
                        let r = {
                            handler: s,
                            items: t,
                            lazyItems: new Map,
                            timer: null
                        };
                        o.set(this, r)
                    }
                    disconnectedCallback() {
                        let e = o.get(this);
                        e && (e.handler.disconnect(), o.delete(this))
                    }
                    addLazyItems(e, t) {
                        let i = o.get(this);
                        if (!i) return;
                        let {
                            lazyItems: s
                        } = i, {
                            value: r
                        } = this, a = !1;
                        for (let i of e) s.set(i, t), a = a || !!r && (0, n.CD)(r, i);
                        a && this.sort()
                    }
                    sort() {
                        let e = a.get(this);
                        e && (e.aborted = !0);
                        let t = {
                            aborted: !1
                        };
                        a.set(this, t);
                        let {
                            minScore: i,
                            markSelector: n,
                            maxMatches: d,
                            value: c
                        } = this, h = o.get(this);
                        if (!h || !this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort", {
                                cancelable: !0,
                                detail: c
                            }))) return;
                        let {
                            items: p,
                            lazyItems: m
                        } = h, f = this.hasAttribute("mark-selector"), g = this.querySelector("ul");
                        if (!g) return;
                        let v = [];
                        if (c) {
                            for (let e of p) {
                                let t = u(e),
                                    n = s(c, t, i);
                                n !== -1 / 0 && v.push({
                                    item: e,
                                    score: n
                                })
                            }
                            for (let [e, t] of m) {
                                let n = s(c, e, i);
                                n !== -1 / 0 && v.push({
                                    text: e,
                                    render: t,
                                    score: n
                                })
                            }
                            v.sort((e, t) => t.score - e.score).splice(d)
                        } else {
                            let e = v.length;
                            for (let t of p) {
                                if (e >= d) break;
                                v.push({
                                    item: t,
                                    score: 1
                                }), e += 1
                            }
                            for (let [t, i] of m) {
                                if (e >= d) break;
                                v.push({
                                    text: t,
                                    render: i,
                                    score: 1
                                }), e += 1
                            }
                        }
                        requestAnimationFrame(() => {
                            if (t.aborted) return;
                            let e = g.querySelector('input[type="radio"]:checked');
                            g.textContent = "";
                            let i = 0,
                                s = () => {
                                    if (t.aborted) return;
                                    let a = Math.min(v.length, i + 100),
                                        o = document.createDocumentFragment();
                                    for (let e = i; e < a; e += 1) {
                                        let t = v[e],
                                            i = null;
                                        if ("render" in t && "text" in t) {
                                            let {
                                                render: e,
                                                text: n
                                            } = t;
                                            i = e(n), p.add(i), l.set(i, n), m.delete(n)
                                        } else "item" in t && (i = t.item);
                                        i instanceof HTMLElement && (f && r(n && i.querySelector(n) || i, f ? c : "", u(i)), o.appendChild(i))
                                    }
                                    i = a;
                                    let d = !1;
                                    if (e instanceof HTMLInputElement)
                                        for (let t of o.querySelectorAll('input[type="radio"]:checked')) t instanceof HTMLInputElement && t.value !== e.value && (t.checked = !1, d = !0);
                                    if (this.getAttribute("data-tab-only-first")) {
                                        let e = this.querySelectorAll("button.js-emoji-button");
                                        for (let t of e) t.setAttribute("tabindex", "-1");
                                        e.item(0)?.setAttribute("tabindex", "0")
                                    } else
                                        for (let e of o.querySelectorAll('button[tabindex="-1"]')) e.setAttribute("tabindex", "0");
                                    if (g.appendChild(o), e && d && e.dispatchEvent(new Event("change", {
                                            bubbles: !0
                                        })), a < v.length) requestAnimationFrame(s);
                                    else {
                                        g.hidden = 0 === v.length;
                                        let e = this.querySelector("[data-fuzzy-list-show-on-empty]");
                                        e && (e.hidden = v.length > 0), this.dispatchEvent(new CustomEvent("fuzzy-list-sorted", {
                                            detail: v.length
                                        }))
                                    }
                                };
                            s()
                        })
                    }
                    get value() {
                        return this.getAttribute("value") || ""
                    }
                    set value(e) {
                        this.setAttribute("value", e)
                    }
                    get markSelector() {
                        return this.getAttribute("mark-selector") || ""
                    }
                    set markSelector(e) {
                        e ? this.setAttribute("mark-selector", e) : this.removeAttribute("mark-selector")
                    }
                    get minScore() {
                        return Number(this.getAttribute("min-score") || 0)
                    }
                    set minScore(e) {
                        Number.isNaN(e) || this.setAttribute("min-score", String(e))
                    }
                    get maxMatches() {
                        return Number(this.getAttribute("max-matches") || 1 / 0)
                    }
                    set maxMatches(e) {
                        Number.isNaN(e) || this.setAttribute("max-matches", String(e))
                    }
                    static get observedAttributes() {
                        return ["value", "mark-selector", "min-score", "max-matches"]
                    }
                    attributeChangedCallback(e, t, i) {
                        if (t === i) return;
                        let n = o.get(this);
                        n && (n.timer && window.clearTimeout(n.timer), n.timer = window.setTimeout(() => this.sort(), 100))
                    }
                },
                c = d;
            window.customElements.get("fuzzy-list") || (window.FuzzyListElement = d, window.customElements.define("fuzzy-list", d))
        },
        254: (e, t, i) => {
            i.d(t, {
                ZG: () => o,
                q6: () => u,
                w4: () => l
            });
            var n = i(8439);
            let s = !1,
                r = new n.Z;

            function a(e) {
                let t = e.target;
                if (t instanceof HTMLElement && t.nodeType !== Node.DOCUMENT_NODE)
                    for (let e of r.matches(t)) e.data.call(null, t)
            }

            function o(e, t) {
                s || (s = !0, document.addEventListener("focus", a, !0)), r.add(e, t), document.activeElement instanceof HTMLElement && document.activeElement.matches(e) && t(document.activeElement)
            }

            function l(e, t, i) {
                function n(t) {
                    let s = t.currentTarget;
                    s && (s.removeEventListener(e, i), s.removeEventListener("blur", n))
                }
                o(t, function(t) {
                    t.addEventListener(e, i), t.addEventListener("blur", n)
                })
            }

            function u(e, t) {
                function i(e) {
                    let {
                        currentTarget: n
                    } = e;
                    n && (n.removeEventListener("input", t), n.removeEventListener("blur", i))
                }
                o(e, function(e) {
                    e.addEventListener("input", t), e.addEventListener("blur", i)
                })
            }
        },
        87551: (e, t, i) => {
            function n() {
                return /Windows/.test(navigator.userAgent) ? "windows" : /Macintosh/.test(navigator.userAgent) ? "mac" : null
            }
            i.d(t, {
                X: () => n
            }), (0, i(36071).N7)(".js-remove-unless-platform", function(e) {
                ! function(e) {
                    let t = (e.getAttribute("data-platforms") || "").split(","),
                        i = n();
                    return !!(i && t.includes(i))
                }(e) && e.remove()
            })
        },
        95253: (e, t, i) => {
            let n;
            i.d(t, {
                YT: () => h,
                qP: () => p,
                yM: () => m
            });
            var s = i(88149),
                r = i(86058),
                a = i(44544),
                o = i(71643);
            let {
                getItem: l
            } = (0, a.Z)("localStorage"), u = "dimension_", d = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "scid"];
            try {
                let e = (0, s.n)("octolytics");
                delete e.baseContext, n = new r.R(e)
            } catch (e) {}

            function c(e) {
                let t = (0, s.n)("octolytics").baseContext || {};
                if (t)
                    for (let [e, i] of(delete t.app_id, delete t.event_url, delete t.host, Object.entries(t))) e.startsWith(u) && (t[e.replace(u, "")] = i, delete t[e]);
                let i = document.querySelector("meta[name=visitor-payload]");
                if (i) {
                    let e = JSON.parse(atob(i.content));
                    Object.assign(t, e)
                }
                let n = new URLSearchParams(window.location.search);
                for (let [e, i] of n) d.includes(e.toLowerCase()) && (t[e] = i);
                return t.staff = (0, o.B)().toString(), Object.assign(t, e)
            }

            function h(e) {
                n?.sendPageView(c(e))
            }

            function p(e, t = {}) {
                let i = document.head?.querySelector('meta[name="current-catalog-service"]')?.content,
                    s = i ? {
                        service: i
                    } : {};
                for (let [e, i] of Object.entries(t)) null != i && (s[e] = `${i}`);
                if (n) {
                    let t = e || "unknown";
                    c(s), n.sendEvent(t, c(s))
                }
            }

            function m(e) {
                return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, JSON.stringify(t)]))
            }
        },
        7180: (e, t, i) => {
            i.d(t, {
                O: () => u,
                d: () => TrustedTypesPolicyError
            });
            var n = i(46426),
                s = i(71643),
                r = i(94301),
                a = i(27856),
                o = i.n(a),
                l = i(95253);
            let TrustedTypesPolicyError = class TrustedTypesPolicyError extends Error {};
            let u = {
                apply: function({
                    policy: e,
                    policyName: t,
                    fallback: i,
                    fallbackOnError: a = !1,
                    sanitize: u,
                    silenceErrorReporting: d = !1
                }) {
                    try {
                        if ((0, n.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES")) return i;
                        (0, s.b)({
                            incrementKey: "TRUSTED_TYPES_POLICY_CALLED",
                            trustedTypesPolicyName: t
                        }, !1, .1);
                        let r = e();
                        return u && new Promise(e => {
                            let i = window.performance.now(),
                                n = o().sanitize(r, {
                                    FORBID_ATTR: []
                                }),
                                s = window.performance.now();
                            if (r.length !== n.length) {
                                let a = Error("Trusted Types policy output sanitized"),
                                    o = a.stack?.slice(0, 1e3),
                                    u = r.slice(0, 250);
                                (0, l.qP)("trusted_types_policy.sanitize", {
                                    policyName: t,
                                    output: u,
                                    stack: o,
                                    outputLength: r.length,
                                    sanitizedLength: n.length,
                                    executionTime: s - i
                                }), e(r)
                            }
                        }), r
                    } catch (e) {
                        if (e instanceof TrustedTypesPolicyError || (d || (0, r.eK)(e), (0, s.b)({
                                incrementKey: "TRUSTED_TYPES_POLICY_ERROR",
                                trustedTypesPolicyName: t
                            }), !a)) throw e
                    }
                    return i
                }
            }
        },
        22490: (e, t, i) => {
            let n;
            i.d(t, {
                ZO: () => h
            });
            var s, r = i(86283),
                a = i(71643),
                o = i(46426);

            function l(e) {
                return () => {
                    throw TypeError(`The policy does not implement the function ${e}`)
                }
            }
            let u = {
                    createHTML: l("createHTML"),
                    createScript: l("createScript"),
                    createScriptURL: l("createScriptURL")
                },
                d = !1;
            try {
                d = (0, o.c)("global_trusted_types_map_off")
            } catch {}
            n = d ? new Map : (s = globalThis).__TRUSTED_TYPE_POLICIES__ ?? (s.__TRUSTED_TYPE_POLICIES__ = new Map);
            let c = globalThis.trustedTypes ?? {
                    createPolicy: (e, t) => ({
                        name: e,
                        ...u,
                        ...t
                    })
                },
                h = {
                    createPolicy: (e, t) => {
                        if (n.has(e)) return (0, a.b)({
                            incrementKey: "TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"
                        }), n.get(e);
                        {
                            let i = Object.freeze(c.createPolicy(e, t));
                            return n.set(e, i), i
                        }
                    }
                },
                p = !1;
            r.n4?.addEventListener("securitypolicyviolation", e => {
                "require-trusted-types-for" !== e.violatedDirective || p || (console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`), p = !0)
            })
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, ["vendors-node_modules_dompurify_dist_purify_js", "vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183", "vendors-node_modules_github_selector-observer_dist_index_esm_js", "vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js", "vendors-node_modules_github_relative-time-element_dist_index_js", "vendors-node_modules_fzy_js_index_js-node_modules_github_combobox-nav_dist_index_js-node_modu-344bff", "vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-29dc30", "vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-59c459", "vendors-node_modules_github_hydro-analytics-client_dist_analytics-client_js-node_modules_gith-6a10dd", "vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-eb424d", "ui_packages_failbot_failbot_ts"], () => t(10361)), e.O()
    }
]);
//# sourceMappingURL=github-elements-9d8ea1ecaf98.js.map