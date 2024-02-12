(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["behaviors"], {
        12857: (e, t, n) => {
            "use strict";
            let r, i, a, o, s, l, c, u, d;
            var m, f, h, p, g, b, y, v = n(54679),
                w = n(59753);
            (0, w.on)("deprecatedAjaxSend", "[data-remote]", function(e) {
                e.currentTarget !== e.target || e.defaultPrevented || e.currentTarget.classList.add("loading")
            }), (0, w.on)("deprecatedAjaxComplete", "[data-remote]", function(e) {
                e.currentTarget === e.target && e.currentTarget.classList.remove("loading")
            });
            var S = n(65935);
            (0, S.AC)("form.js-ajax-pagination, .js-ajax-pagination form", async function(e, t) {
                let n;
                let r = e.closest(".js-ajax-pagination");
                try {
                    n = await t.html()
                } catch (e) {
                    if (e.response && 404 === e.response.status) {
                        r.remove();
                        return
                    }
                    throw e
                }
                r.replaceWith(n.html), (0, w.f)(e, "page:loaded")
            });
            var E = n(95253),
                L = n(86283),
                j = n(44544);
            let {
                getItem: A
            } = (0, j.Z)("localStorage");
            (0, w.on)("click", "[data-analytics-event]", e => {
                if (L.n4?.head?.querySelector('meta[name="is_logged_out_page"]')?.content) return;
                let t = e.currentTarget,
                    n = t.getAttribute("data-analytics-event");
                if (!n) return;
                let r = JSON.parse(n);
                (0, E.qP)("analytics.click", r)
            });
            var T = n(36071),
                q = n(71643);
            let k = ["system", "disabled"].map(e => `html[data-a11y-animated-images="${e}"] img[data-animated-image]`).join(", ");
            (0, T.N7)(k, e => {
                if (!(e instanceof HTMLImageElement) || e.closest("a") && !(e.parentElement instanceof HTMLAnchorElement)) return;
                let t = e.parentElement,
                    n = null;
                if (t instanceof HTMLAnchorElement) {
                    if (t.childElementCount > 1) return;
                    (n = t).setAttribute("data-target", "animated-image.originalLink"), t = n.parentElement
                }
                e.removeAttribute("data-animated-image"), e.setAttribute("data-target", "animated-image.originalImage");
                let r = n ? n.cloneNode(!0) : e.cloneNode(!0),
                    i = document.createElement("animated-image");
                i.appendChild(r), t?.replaceChild(i, n || e), (0, q.b)({
                    incrementKey: "ANIMATED_IMAGE_PLAYER_WRAPPED",
                    requestUrl: window.location.href
                })
            });
            var C = n(15345),
                M = n(81775);
            let x = new WeakMap;

            function _(e, t) {
                t.classList.remove("is-loading", "successed", "errored", "warn"), e.classList.remove("is-autocheck-loading", "is-autocheck-successful", "is-autocheck-errored");
                let n = t.querySelector("p.note");
                if (n) {
                    let e = x.get(n);
                    e && (n.innerHTML = e)
                }
                "DL" === t.tagName ? (t.querySelector("dd.error")?.remove(), t.querySelector("dd.warning")?.remove(), t.querySelector("dd.success")?.remove()) : (t.querySelector("div.error")?.remove(), t.querySelector("div.warning")?.remove(), t.querySelector("div.success")?.remove())
            }

            function R(e) {
                e && (0, M.G)(e)
            }(0, T.N7)("auto-check", function(e) {
                let t;
                if (e.classList.contains("js-prevent-default-behavior")) return;
                let n = e.querySelector("input");
                if (!n || n.classList.contains("js-prevent-default-behavior")) return;
                let r = n.closest(".form-group") || e,
                    i = n.form;

                function a() {
                    return t || (t = `input-check-${(1e4*Math.random()).toFixed(0)}`), t
                }
                let o = n.getAttribute("aria-describedby");
                n.addEventListener("focusout:delay", () => {
                    n.setAttribute("aria-describedby", [t, o].join(" "))
                });
                let s = r.querySelector("p.note");
                s && (s.id || (s.id = a()), x.set(s, s.innerHTML)), e.addEventListener("loadstart", () => {
                    _(n, r), r.classList.add("is-loading"), n.classList.add("is-autocheck-loading"), R(i)
                }), e.addEventListener("loadend", () => {
                    r.classList.remove("is-loading"), n.classList.remove("is-autocheck-loading")
                }), n.addEventListener("auto-check-success", async e => {
                    n.classList.add("is-autocheck-successful"), r.classList.add("successed"), R(i);
                    let {
                        response: t
                    } = e.detail;
                    if (!t) return;
                    let o = await t.text();
                    if (o) {
                        if (s instanceof HTMLElement) s.innerHTML = o, (0, C.N)(s);
                        else {
                            let e = 200 === t.status,
                                i = "DL" === r.tagName ? "dd" : "div",
                                s = document.createElement(i);
                            s.id = a(), s.classList.add(e ? "success" : "warning"), s.innerHTML = o, r.append(s), r.classList.add(e ? "successed" : "warn"), (0, C.N)(s), e && (s.hidden = document.activeElement !== n)
                        }(0, w.f)(n, "auto-check-message-updated")
                    }
                }), n.addEventListener("auto-check-error", async e => {
                    n.classList.add("is-autocheck-errored"), r.classList.add("errored"), R(i);
                    let {
                        response: t
                    } = e.detail;
                    if (!t) return;
                    let o = await t.text();
                    if (s instanceof HTMLElement) s.innerHTML = o || "Something went wrong", (0, C.N)(s);
                    else {
                        let e = "DL" === r.tagName ? "dd" : "div",
                            t = document.createElement(e);
                        t.id = a(), t.classList.add("error"), t.innerHTML = o || "Something went wrong", r.append(t), (0, C.N)(t)
                    }
                }), n.addEventListener("input", () => {
                    n.removeAttribute("aria-describedby"), n.value || _(n, r)
                }), n.addEventListener("blur", () => {
                    let e = r.querySelector(".success");
                    e && (e.hidden = !0)
                }), n.addEventListener("focus", () => {
                    let e = r.querySelector(".success");
                    e && (e.hidden = !1)
                }), i?.addEventListener("reset", () => {
                    _(n, r)
                })
            });
            var N = n(60902);

            function H(e) {
                let t = e.closest("form");
                if (!t) return;
                let n = t.querySelector(".js-auto-complete-button");
                n instanceof HTMLButtonElement && (n.disabled = !e.value)
            }(0, T.N7)("auto-complete", function(e) {
                e.addEventListener("loadstart", () => e.classList.add("is-auto-complete-loading")), e.addEventListener("loadend", () => e.classList.remove("is-auto-complete-loading"))
            }), (0, T.N7)("auto-complete", {
                constructor: N.ZP,
                initialize: H
            }), (0, w.on)("auto-complete-change", "auto-complete", function(e) {
                H(e.currentTarget)
            });
            var P = n(58700),
                I = n(18699),
                $ = n(9302);
            let O = null;
            (0, w.on)("submit", "[data-autosearch-results-container]", async function(e) {
                let t = e.currentTarget;
                if (!(t instanceof HTMLFormElement)) return;
                e.preventDefault(), O?.abort(), t.classList.add("is-sending");
                let n = new URL(t.action, window.location.origin),
                    i = t.method,
                    a = new FormData(t),
                    o = (0, P.KL)(n, a),
                    s = null;
                "get" === i ? n.search = o : s = a;
                let {
                    signal: l
                } = O = new AbortController, c = new Request(n.toString(), {
                    method: i,
                    body: s,
                    signal: l,
                    headers: {
                        Accept: "text/html",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }), u = null;
                try {
                    u = await fetch(c)
                } catch {}
                if (t.classList.remove("is-sending"), !u || !u.ok || l.aborted) return;
                let d = t.getAttribute("data-autosearch-results-container"),
                    m = d ? document.getElementById(d) : null;
                if (m) {
                    let e = m.style.height;
                    m.style.height = getComputedStyle(m).height, m.textContent = "", void 0 !== r && clearTimeout(r);
                    let t = m.hasAttribute("data-delay-results"),
                        n = await u.text(),
                        i = (0, I.r)(document, n).querySelector("[data-autosearch-results]") || (0, I.r)(document, n).firstElementChild;
                    r = setTimeout(() => {
                        m.appendChild((0, I.r)(document, n)), (0, C.N)(i), requestAnimationFrame(() => {
                            m.style.height = e
                        })
                    }, t ? 500 : 0)
                }(0, $.lO)(null, "", `?${o}`)
            });
            var D = n(14873),
                B = n(254);
            (0, B.ZG)("input[data-autoselect], textarea[data-autoselect]", async function(e) {
                await (0, D.gJ)(), e.select()
            });
            var W = n(46263),
                F = n(56959);

            function U(e) {
                let t = e.target;
                if (!(t instanceof HTMLInputElement) && !(t instanceof HTMLSelectElement)) return;
                let n = t.form;
                (0, P.Bt)(n)
            }(0, w.on)("change", "form[data-autosubmit]", function(e) {
                let t = e.currentTarget;
                (0, P.Bt)(t)
            }), (0, w.on)("change", "input[data-autosubmit], select[data-autosubmit]", U);
            let z = (0, W.D)(U, 300);
            async function V(e) {
                let t = e.getAttribute("data-url") || "",
                    n = await X(t);
                if (n) {
                    let t = e.getAttribute("data-gravatar-text");
                    null != t && (e.textContent = t)
                }
            }
            async function X(e) {
                if (!e) return !1;
                try {
                    let t = await fetch(e, {
                        headers: {
                            Accept: "application/json"
                        }
                    });
                    if (!t.ok) return !1;
                    let n = await t.json();
                    return n.has_gravatar
                } catch {
                    return !1
                }
            }(0, T.N7)("input[data-throttled-autosubmit]", {
                subscribe: e => (0, F.RB)(e, "input", z)
            }), (0, T.N7)(".js-detect-gravatar", function(e) {
                V(e)
            }), n(47442);
            var G = n(68423),
                K = n(97629),
                Z = n(75198);
            let J = [".unstyled-additional-seats-price-obj", ".unstyled-base-price-obj", ".unstyled-final-price-obj"],
                Q = null;
            async function Y(e) {
                let t = e.getAttribute("data-item-name") || "items",
                    n = e.value,
                    r = new URL(e.getAttribute("data-url"), window.location.origin),
                    i = new URLSearchParams(r.search.slice(1)),
                    a = parseInt(e.getAttribute("data-item-minimum")) || 0,
                    o = parseInt(e.getAttribute("data-item-maximum")) || 1e3,
                    s = parseInt(e.getAttribute("data-item-count")) || 0,
                    l = Math.max(a, parseInt(n) || 0),
                    c = l > o,
                    u = document.querySelector(".js-downgrade-button"),
                    d = document.getElementById("downgrade-disabled-message");
                u instanceof HTMLButtonElement && (u.disabled = l === s), d instanceof HTMLElement && u instanceof HTMLButtonElement && (d.hidden = !u.disabled), i.append(t, l.toString());
                let m = document.querySelector(".js-transform-user");
                m && i.append("transform_user", "1"), r.search = i.toString(), Q?.abort();
                let {
                    signal: f
                } = Q = new AbortController, h = null;
                try {
                    let e = await fetch(r.toString(), {
                        signal: f,
                        headers: {
                            Accept: "application/json"
                        }
                    });
                    if (!e.ok) return;
                    h = await e.json()
                } catch {}
                if (f.aborted || !h) return;
                let p = document.querySelector(".js-contact-us");
                p && p.classList.toggle("d-none", !c);
                let g = document.querySelector(".js-cost-info");
                g && (g.hidden = c);
                let b = document.querySelector(".js-payment-summary");
                b && b.classList.toggle("d-none", c);
                let y = document.querySelector(".js-submit-billing");
                y instanceof HTMLElement && (y.hidden = c);
                let v = document.querySelector(".js-billing-section");
                v && v.classList.toggle("has-removed-contents", h.free || h.is_enterprise_cloud_trial);
                let w = document.querySelector(".js-upgrade-info");
                w && w.classList.toggle("d-none", l <= 0);
                let S = document.querySelector(".js-downgrade-info");
                S && S.classList.toggle("d-none", l >= 0);
                let E = document.querySelector(".js-extra-seats-line-item");
                E && E.classList.toggle("d-none", h.no_additional_seats);
                let L = document.querySelector(".js-seat-field");
                L && function(e) {
                    for (let t of document.querySelectorAll(".js-seat-field")) {
                        let n = t.getAttribute("data-item-maximum"),
                            r = t?.parentNode?.querySelector(".Popover");
                        n && n.length && (parseInt(e, 10) > parseInt(n, 10) ? (t.classList.add("color-border-danger-emphasis"), r?.removeAttribute("hidden")) : (t.classList.remove("color-border-danger-emphasis"), r?.setAttribute("hidden", "true")))
                    }
                }(n);
                let j = document.querySelector(".js-minimum-seats-disclaimer");
                j && (j.classList.toggle("tooltipped", 5 === h.seats), j.classList.toggle("tooltipped-nw", 5 === h.seats));
                let A = h.selectors;
                for (let e in A)
                    for (let t of document.querySelectorAll(e)) {
                        var T;
                        J.includes(e) && "string" != typeof(T = A[e]) && "number" != typeof T && "default_currency" in T && "local_currency" in T ? (t.textContent = "", t.appendChild(ee("default-currency", A[e].default_currency)), t.appendChild(ee("local-currency", A[e].local_currency))) : t.textContent = A[e]
                    }(0, $.lO)(history.state, "", h.url)
            }

            function ee(e, t) {
                let n = document.createElement("span");
                return n.classList.add(e), n.textContent = t, n
            }

            function et(e, t = !1) {
                for (let [n, r] of Object.entries({
                        "tooltipped-nw": "tooltipped-sw",
                        "tooltipped-n": "tooltipped-s",
                        "tooltipped-ne": "tooltipped-se"
                    })) {
                    let i = t ? r : n,
                        a = t ? n : r;
                    for (let t of e.querySelectorAll(`.${i}`)) t.classList.replace(i, a)
                }
            }(0, w.on)("click", ".js-org-signup-duration-change", e => {
                e.preventDefault();
                let t = e.currentTarget,
                    n = t.getAttribute("data-plan-duration");
                for (let e of (function(e) {
                        let t = "year" === e ? "month" : "year";
                        for (let t of document.querySelectorAll(".js-plan-duration-text")) t.textContent = e;
                        for (let t of document.querySelectorAll(".unstyled-available-plan-duration-adjective")) t.textContent = `${e}ly`;
                        for (let e of document.querySelectorAll(".js-org-signup-duration-change")) e.setAttribute("data-plan-duration", t);
                        let n = document.getElementById("signup-plan-duration");
                        n && (n.value = e)
                    }(n), function(e) {
                        for (let t of document.querySelectorAll(".js-seat-field")) {
                            let n = new URL(t.getAttribute("data-url"), window.location.origin),
                                r = new URLSearchParams(n.search.slice(1));
                            r.delete("plan_duration"), r.append("plan_duration", e), n.search = r.toString(), t.setAttribute("data-url", n.toString())
                        }
                    }(n), document.querySelectorAll(".js-seat-field"))) Y(e);
                (function() {
                    for (let e of document.querySelectorAll(".js-unit-price")) e.hidden = !e.hidden
                })()
            }), (0, w.on)("change", ".js-org-signup-duration-toggle", function({
                currentTarget: e
            }) {
                let t = new URL(e.getAttribute("data-url"), window.location.origin);
                (0, Z.softNavigate)(t.toString())
            }), (0, T.N7)(".js-addon-purchase-field", {
                constructor: HTMLInputElement,
                add(e) {
                    (0, K.Z)(e) && Y(e), (0, G.oq)(e, function() {
                        Y(e)
                    })
                }
            }), (0, T.N7)(".js-addon-downgrade-field", {
                constructor: HTMLSelectElement,
                add(e) {
                    (0, K.Z)(e) && Y(e), e.addEventListener("change", function() {
                        Y(e)
                    })
                }
            }), (0, w.on)("details-menu-selected", ".js-organization-container", function(e) {
                let t = document.querySelector(".js-addon-purchase-field"),
                    n = e.target.querySelector("input:checked");
                if (t instanceof HTMLInputElement && n instanceof HTMLInputElement) {
                    let e = n.getAttribute("data-upgrade-url");
                    e && (t.setAttribute("data-url", e), t.value = "0", Y(t))
                }
            }, {
                capture: !0
            }), (0, B.q6)(".js-csv-filter-field", function(e) {
                let t = e.target.value.toLowerCase();
                for (let e of document.querySelectorAll(".js-csv-data tbody tr")) e instanceof HTMLElement && e.textContent && (e.hidden = !!t && !e.textContent.toLowerCase().includes(t))
            }), (0, T.N7)(".js-blob-header.is-stuck", {
                add(e) {
                    et(e)
                },
                remove(e) {
                    et(e, !0)
                }
            }), (0, w.on)("click", ".js-blob-dropdown-click", e => {
                let t = e.currentTarget.getAttribute("data-dropdown-tracking");
                if (!t) return;
                let n = JSON.parse(t);
                (0, E.qP)(n.type, n.context)
            }), (0, w.on)("change", ".js-branch-protection-integration-select-input", function(e) {
                let t = e.target,
                    n = t?.closest(".js-branch-protection-integration-select"),
                    r = n?.querySelector(".js-branch-protection-integration-select-current"),
                    i = t?.closest(".js-branch-protection-integration-select-item"),
                    a = i?.querySelector(".js-branch-protection-integration-select-label");
                r && a && n && (r.innerHTML = a.innerHTML, n.open = !1)
            });
            let en = null;
            async function er(e) {
                let t = e.target;
                if (!(t instanceof HTMLElement)) return;
                let n = t.querySelector(".js-bulk-actions"),
                    r = !!t.querySelector(".js-bulk-actions-toggle:checked");
                en?.abort();
                let {
                    signal: i
                } = en = new AbortController, a = "";
                try {
                    let e = await fetch(function(e) {
                        let t = new URL(e.getAttribute("data-bulk-actions-url"), window.location.origin),
                            n = new URLSearchParams(t.search.slice(1)),
                            r = e.getAttribute("data-bulk-actions-parameter"),
                            i = Array.from(e.querySelectorAll(".js-bulk-actions-toggle:checked"));
                        if (r) {
                            let e = i.map(e => e.closest(".js-bulk-actions-item").getAttribute("data-bulk-actions-id")).sort();
                            for (let t of e) n.append(`${r}[]`, t)
                        } else
                            for (let e of i.sort((e, t) => e.value > t.value ? 1 : -1)) n.append(e.name, e.value);
                        return t.search = n.toString(), t.toString()
                    }(t), {
                        signal: i,
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (!e.ok) return;
                    a = await e.text()
                } catch {}!i.aborted && a && (r ? (ei(t), n.innerHTML = a) : (n.innerHTML = a, ei(t)), (0, w.f)(t, "bulk-actions:updated"))
            }

            function ei(e) {
                let t = document.querySelector(".js-membership-tabs");
                if (t) {
                    let n = e.querySelectorAll(".js-bulk-actions-toggle:checked");
                    t.classList.toggle("d-none", n.length > 0)
                }
            }(0, w.on)("change", ".js-bulk-actions-toggle", function(e) {
                let t = e.currentTarget,
                    n = t.closest(".js-bulk-actions-container");
                (0, w.f)(n, "bulk-actions:update")
            }), (0, w.on)("bulk-actions:update", ".js-bulk-actions-container", (0, W.D)(er, 100));
            var ea = n(4412);

            function eo(e, t) {
                try {
                    return window.localStorage.setItem(e, JSON.stringify(t)), {
                        kind: "ok",
                        value: null
                    }
                } catch (e) {
                    return {
                        kind: "err",
                        value: e
                    }
                }
            }

            function es() {
                let e = function() {
                        let e = {};
                        for (let t of document.getElementsByTagName("script")) {
                            let n = t.src.match(/\/([\w-]+)-[0-9a-f]{8,}\.js$/);
                            n && (e[`${n[1]}.js`] = t.src)
                        }
                        for (let t of document.getElementsByTagName("link")) {
                            let n = t.href.match(/\/([\w-]+)-[0-9a-f]{8,}\.css$/);
                            n && (e[`${n[1]}.css`] = t.href)
                        }
                        return e
                    }(),
                    t = function(e) {
                        try {
                            let t = window.localStorage.getItem(e);
                            return {
                                kind: "ok",
                                value: t ? JSON.parse(t) : null
                            }
                        } catch (e) {
                            return {
                                kind: "err",
                                value: e
                            }
                        }
                    }("bundle-urls");
                if ("err" === t.kind) {
                    eo("bundle-urls", e);
                    return
                }
                let n = t.value || {},
                    r = Object.keys(e).filter(t => n[t] !== e[t]);
                if (r.length) {
                    let t = eo("bundle-urls", {
                        ...n,
                        ...e
                    });
                    "ok" === t.kind && (0, q.b)({
                        downloadedBundles: r
                    })
                }
            }

            function el(e) {
                e.preventDefault(), e.stopPropagation()
            }(async () => {
                await ea.C, window.requestIdleCallback(es)
            })(), n(90596), (0, T.N7)("a.btn.disabled", {
                subscribe: e => (0, F.RB)(e, "click", el)
            });
            var ec = n(78332),
                eu = n(58797);
            (0, T.N7)(".js-check-all-container", {
                constructor: HTMLElement,
                subscribe: eu.Z
            });
            var ed = n(64325);
            let em = "logout-was-successful";

            function ef(e) {
                ep.delete(e), eh(e)
            }

            function eh(e) {
                let t = e.querySelector(".js-clipboard-copy-icon"),
                    n = e.querySelector(".js-clipboard-check-icon");
                e.classList.toggle("ClipboardButton--success"), t && t.classList.toggle("d-none"), n && (n.classList.contains("d-sm-none") ? n.classList.toggle("d-sm-none") : n.classList.toggle("d-none"))
            }(0, ed.$1)(em).length > 0 && (function() {
                for (let e of [sessionStorage, localStorage]) try {
                    e.clear()
                } catch {}
            }(), (0, ed.kT)(em)), (0, w.on)("clipboard-copy", "[data-copy-feedback]", e => {
                let t = e.currentTarget,
                    n = t.getAttribute("data-copy-feedback"),
                    r = t.getAttribute("aria-label"),
                    i = t.getAttribute("data-tooltip-direction") || "s";
                t.setAttribute("aria-label", n), t.classList.add("tooltipped", `tooltipped-${i}`), t instanceof HTMLElement && ((0, C.N)(t), setTimeout(() => {
                    r ? t.setAttribute("aria-label", r) : t.removeAttribute("aria-label"), t.classList.remove("tooltipped", `tooltipped-${i}`)
                }, 2e3))
            });
            let ep = new WeakMap;
            (0, w.on)("clipboard-copy", ".js-clipboard-copy:not([data-view-component])", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLElement)) return;
                let t = ep.get(e);
                t ? clearTimeout(t) : eh(e), ep.set(e, window.setTimeout(ef, 2e3, e))
            });
            var eg = n(94301);
            async function eb(e, t, n, r, i) {
                let a = e.getAttribute("data-tagsearch-url");
                if (!a) return "";
                let o = e.getAttribute("data-tagsearch-ref");
                if (!o) return "";
                let s = e.getAttribute("data-tagsearch-code-nav-context");
                s || (s = "UNKNOWN_VIEW");
                let l = new URL(a, window.location.origin),
                    c = new URLSearchParams;
                c.set("q", t), c.set("blob_path", i), c.set("ref", o), c.set("language", n), c.set("row", r[0].toString()), c.set("col", r[1].toString()), c.set("code_nav_context", s), l.search = c.toString();
                try {
                    let e = await fetch(l.toString(), {
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (!e.ok) return "";
                    let t = await e.text();
                    if (/js-tagsearch-no-definitions/.test(t)) return "";
                    return t
                } catch {
                    return ""
                }
            }(0, w.on)("click", ".js-code-nav-retry", async function(e) {
                let t;
                if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                let n = document.querySelector(".js-tagsearch-popover");
                if (!n) return;
                let r = n.querySelector(".js-tagsearch-popover-content");
                if (!r) return;
                let i = e.currentTarget,
                    a = i.getAttribute("data-code-nav-kind");
                if (!(t = "definitions" === a ? n.querySelector(".js-tagsearch-popover-content") : n.querySelector(".js-code-nav-references"))) return;
                let o = i.getAttribute("data-code-nav-url");
                if (!o) return;
                let s = new URL(o, window.location.origin);
                try {
                    let e = await fetch(s.toString(), {
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (!e.ok) return;
                    let n = await e.text();
                    if (!n) return;
                    t.innerHTML = n
                } catch {
                    return
                }
                r.scrollTop = 0
            }), (0, T.N7)(".js-code-nav-container", {
                constructor: HTMLElement,
                subscribe(e) {
                    let t;
                    let n = document.querySelector(".js-tagsearch-popover");
                    if (!(n instanceof HTMLElement)) return {
                        unsubscribe() {}
                    };
                    let r = n.querySelector(".js-tagsearch-popover-content"),
                        i = new WeakMap,
                        a = new WeakMap;
                    async function o(o) {
                        let f = function(e, t, n) {
                            let r, i;
                            if (document.caretPositionFromPoint) {
                                let e = document.caretPositionFromPoint(t, n);
                                e && (r = e.offsetNode, i = e.offset)
                            } else if (document.caretRangeFromPoint) {
                                let e = document.caretRangeFromPoint(t, n);
                                e && (r = e.startContainer, i = e.startOffset)
                            }
                            if (!r || "number" != typeof i || r.nodeType !== Node.TEXT_NODE) return;
                            let a = r.textContent,
                                o = a?.replaceAll("\n", "").trim() === "";
                            if (!a || o || r.nodeType !== Node.TEXT_NODE) return null;
                            let s = function(e, t, n) {
                                let r;
                                let i = null;
                                for (; r = t.exec(e);) {
                                    if (t.lastIndex === i) {
                                        (0, eg.eK)(Error("regexp did not advance in findNearestMatch()"));
                                        break
                                    }
                                    i = t.lastIndex;
                                    let e = r.index + r[0].length;
                                    if (r.index <= n && n <= e) return [r[0], r.index, e]
                                }
                                return null
                            }(a, e, i);
                            if (!s) return null;
                            let l = document.createRange();
                            return l.setStart(r, s[1]), l.setEnd(r, s[2]), l
                        }(/\w+[!?]?/g, o.clientX, o.clientY);
                        if (!f) return;
                        let h = f.commonAncestorContainer.parentElement;
                        if (!h) return;
                        for (let e of h.classList)
                            if (["pl-token", "pl-c", "pl-s", "pl-k"].includes(e)) return;
                        if (h.closest(".js-skip-tagsearch")) return;
                        let p = f.toString();
                        if (!p || p.match(/\n|\s|[();&.=",]/)) return;
                        let g = a.get(h);
                        if (g || (g = new Set, a.set(h, g)), g.has(p)) return;
                        g.add(p);
                        let b = h.closest(".js-tagsearch-file");
                        if (!b) return;
                        let y = b.getAttribute("data-tagsearch-path") || "",
                            v = b.getAttribute("data-tagsearch-lang") || "";
                        if ("HTML+ERB" === v) {
                            if (!h.closest(".pl-sre")) return;
                            v = "Ruby"
                        }
                        if (e.classList.contains("js-code-block-container") && !(v = function(e) {
                                let t = e.closest(".highlight");
                                if (t)
                                    for (let e of t.classList) switch (e) {
                                        case "highlight-source-go":
                                            return "Go";
                                        case "highlight-source-js":
                                            return "JavaScript";
                                        case "highlight-source-python":
                                            return "Python";
                                        case "highlight-source-ruby":
                                            return "Ruby";
                                        case "highlight-source-ts":
                                            return "TypeScript"
                                    }
                                return null
                            }(h) || "")) return;
                        let w = function(e) {
                                let t = e.startContainer,
                                    n = e.startOffset,
                                    r = !1;
                                for (;;) {
                                    let e = t.previousSibling;
                                    for (; !r && e;)["#comment", "BUTTON"].includes(e.nodeName) || (n += (e.textContent || "").length), e = e.previousSibling;
                                    let i = t.parentElement;
                                    if (!i) return [0, 0];
                                    if (i.classList.contains("js-code-nav-pass")) r = !0;
                                    else if (i.classList.contains("js-file-line")) {
                                        let e = i.previousElementSibling;
                                        if (!e.classList.contains("js-code-nav-line-number")) throw Error("invariant");
                                        let t = parseInt(e.getAttribute("data-line-number") || "1", 10);
                                        return [t - 1, n]
                                    }
                                    t = i
                                }
                            }(f),
                            S = document.createElement("span");
                        f.surroundContents(S), S.classList.add("pl-token"), S.addEventListener("click", async function(e) {
                            if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
                                if (S === t) c();
                                else {
                                    let e;
                                    if (!(e = await eb(n, p, v, w, y))) return;
                                    (function(e, t) {
                                        let n = document.createElement("span");
                                        n.innerHTML = t;
                                        let r = n.firstElementChild;
                                        if (!r) return;
                                        let i = r.getAttribute("data-hydro-click"),
                                            a = r.getAttribute("data-hydro-click-hmac");
                                        a && i && (e.setAttribute("data-hydro-click", i), e.setAttribute("data-hydro-click-hmac", a))
                                    })(S, e), i.set(S, e), t && t.classList.remove("active"), (t = S).classList.add("active"), r.innerHTML = i.get(S) || "", l(S),
                                        function() {
                                            if (!n.hidden) {
                                                s();
                                                return
                                            }
                                            n.hidden = !1, s(), document.addEventListener("click", d), document.addEventListener("keyup", m), window.addEventListener("resize", u)
                                        }()
                                }
                                e.preventDefault()
                            }
                        })
                    }

                    function s() {
                        r.scrollTop = 0
                    }

                    function l(t) {
                        let r = e.getClientRects()[0],
                            i = t.getClientRects();
                        if (0 === i.length) return;
                        let a = i[0];
                        n.style.position = "absolute", n.style.zIndex = "3", e.classList.contains("position-relative") ? (n.style.top = `${a.bottom-r.top+7}px`, n.style.left = `${a.left-r.left-10}px`) : (n.style.top = `${window.scrollY+a.bottom}px`, n.style.left = `${window.scrollX+a.left}px`)
                    }

                    function c() {
                        n.hidden || (n.hidden = !0, t && t.classList.remove("active"), t = void 0, document.removeEventListener("click", d), document.removeEventListener("keyup", m), window.removeEventListener("resize", u))
                    }

                    function u() {
                        t instanceof HTMLElement && l(t)
                    }

                    function d(e) {
                        let {
                            target: r
                        } = e;
                        r instanceof Node && !n.contains(r) && !t.contains(r) && c()
                    }

                    function m(e) {
                        "Escape" === e.key && c()
                    }
                    return function() {
                        for (let e of (c(), document.getElementsByClassName("pl-token"))) e.classList.remove("pl-token", "active")
                    }(), e.addEventListener("mousemove", o), {
                        unsubscribe() {
                            e.removeEventListener("mousemove", o)
                        }
                    }
                }
            });
            var ey = n(22971);
            (0, w.on)("click", ".errored.js-remove-error-state-on-click", function({
                currentTarget: e
            }) {
                e.classList.remove("errored")
            }), (0, S.AC)(".js-new-comment-form", async function(e, t) {
                let n;
                ! function(e) {
                    let t = e.querySelector(".js-comment-form-error");
                    t instanceof HTMLElement && (t.hidden = !0)
                }(e);
                try {
                    n = await t.json()
                } catch (t) {
                    (0, eg.eK)(t),
                    function(e, t) {
                        let n = "There was a problem saving your comment.",
                            r = "Please try again.";
                        if (t.response) {
                            if (422 === t.response.status) {
                                let e = t.response.json;
                                e.errors && (Array.isArray(e.errors) ? n += ` Your comment ${e.errors.join(", ")}.` : n = e.errors)
                            } else 200 === t.response.status && (r = "Please reload the page and try again.")
                        }
                        n += ` ${r}`;
                        let i = e.querySelector(".js-comment-form-error");
                        if (i instanceof HTMLElement) {
                            i.textContent = n, i.hidden = !1;
                            let e = i.closest("div.form-group.js-remove-error-state-on-click");
                            e && e.classList.add("errored")
                        }
                    }(e, t)
                }
                if (!n) return;
                for (let t of (e.reset(), e.querySelectorAll(".js-resettable-field")))(0, P.Se)(t, t.getAttribute("data-reset-value") || "");
                let r = e.querySelector(".js-write-tab");
                if (r instanceof HTMLElement) {
                    let e = function(e) {
                        let t = e.getBoundingClientRect();
                        return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
                    }(r);
                    e && r.click()
                }
                let i = n.json.updateContent;
                for (let e in i) {
                    let t = i[e],
                        n = document.querySelector(e);
                    n instanceof HTMLElement ? (0, ey.Of)(n, t) : console.warn(`couldn't find ${e} for immediate update`)
                }(0, w.f)(e, "comment:success")
            });
            let ev = (e, t) => {
                    let n = e.querySelector(".js-form-action-text"),
                        r = n || e;
                    r.textContent = t ? e.getAttribute("data-comment-text") : r.getAttribute("data-default-action-text")
                },
                ew = e => {
                    let t;
                    return n => {
                        let r = n.currentTarget,
                            i = r.value.trim();
                        i !== t && (t = i, ev(e, !!i))
                    }
                };

            function eS(e, t) {
                let n = e.closest(".js-write-bucket");
                n && n.classList.toggle("focused", t)
            }

            function eE(e) {
                let t = e.currentTarget;
                t instanceof Element && eS(t, !1)
            }(0, T.N7)(".js-comment-and-button", {
                constructor: HTMLButtonElement,
                initialize(e) {
                    let t = e.form.querySelector(".js-comment-field"),
                        n = ew(e);
                    return {
                        add() {
                            t.addEventListener("input", n), t.addEventListener("change", n)
                        },
                        remove() {
                            t.removeEventListener("input", n), t.removeEventListener("change", n)
                        }
                    }
                }
            }), n(66602), (0, B.ZG)(".js-comment-field", function(e) {
                eS(e, !0), e.addEventListener("blur", eE, {
                    once: !0
                })
            });
            var eL = n(57619),
                ej = n(52769),
                eA = n(54697);
            async function eT(e) {
                if ("image/png" !== e.type) return null;
                let t = e.slice(0, 10240, e.type),
                    n = await m.fromFile(t),
                    r = {
                        width: 0,
                        height: 0,
                        ppi: 1
                    };
                return n.scan(function(e) {
                    switch (e) {
                        case "IHDR":
                            r.width = this.readLong(), r.height = this.readLong();
                            break;
                        case "pHYs": {
                            let e;
                            let t = this.readLong(),
                                n = this.readLong(),
                                i = this.readChar();
                            return 1 === i && (e = .0254), e && (r.ppi = Math.round((t + n) / 2 * e)), !1
                        }
                        case "IDAT":
                            return !1
                    }
                    return !0
                }), r
            }
            m = class PNGScanner {
                static fromFile(e) {
                    return new Promise(function(t, n) {
                        let r = new FileReader;
                        r.onload = function() {
                            t(new PNGScanner(r.result))
                        }, r.onerror = function() {
                            n(r.error)
                        }, r.readAsArrayBuffer(e)
                    })
                }
                advance(e) {
                    this.pos += e
                }
                readInt(e) {
                    let t = this,
                        n = function() {
                            switch (e) {
                                case 1:
                                    return t.dataview.getUint8(t.pos);
                                case 2:
                                    return t.dataview.getUint16(t.pos);
                                case 4:
                                    return t.dataview.getUint32(t.pos);
                                default:
                                    throw Error("bytes parameter must be 1, 2 or 4")
                            }
                        }();
                    return this.advance(e), n
                }
                readChar() {
                    return this.readInt(1)
                }
                readShort() {
                    return this.readInt(2)
                }
                readLong() {
                    return this.readInt(4)
                }
                readString(e) {
                    let t = [];
                    for (let n = 0; n < e; n++) t.push(String.fromCharCode(this.readChar()));
                    return t.join("")
                }
                scan(e) {
                    if (2303741511 !== this.readLong()) throw Error("invalid PNG");
                    for (this.advance(4);;) {
                        let t = this.readLong(),
                            n = this.readString(4),
                            r = this.pos + t + 4;
                        if (!1 === e.call(this, n, t) || "IEND" === n) break;
                        this.pos = r
                    }
                }
                constructor(e) {
                    this.dataview = new DataView(e), this.pos = 0
                }
            };
            var eq = n(89900);
            let ek = new WeakMap,
                eC = class CaretPosition {
                    get top() {
                        return this.coords.top
                    }
                    get left() {
                        return this.coords.left
                    }
                    get height() {
                        return this.coords.height
                    }
                    currentChar(e = 1) {
                        return this.textArea.value.substring(this.index - e, this.index)
                    }
                    checkLine(e) {
                        return e < this.coords.top ? -1 : e > this.coords.top + this.coords.height ? 1 : 0
                    }
                    xDistance(e) {
                        return Math.abs(this.left - e)
                    }
                    constructor(e, t, n) {
                        this.index = e, this.coords = t, this.textArea = n
                    }
                };

            function eM(e, t) {
                let n;
                if (ek.has(e) ? n = ek.get(e) : (n = new Map, ek.set(e, n)), n.has(t)) return n.get(t);
                {
                    let r = new eC(t, (0, eq.Z)(e, t), e);
                    return n.set(t, r), r
                }
            }
            let ex = (e, t, n, r, i, a) => {
                    if (n === t) return n;
                    let o = e => {
                        let t = e.filter(e => 0 === e.checkLine(i)).sort((e, t) => e.xDistance(r) > t.xDistance(r) ? 1 : -1);
                        return 0 === t.length ? n : t[0].index
                    };
                    if (n - t == 1) {
                        let r = eM(e, t),
                            i = eM(e, n);
                        return o([r, i])
                    }
                    if (n - t == 2) {
                        let r = eM(e, t),
                            i = eM(e, n - 1),
                            a = eM(e, n);
                        return o([r, i, a])
                    }
                    let s = Math.floor((n + t) / 2);
                    if (s === t || s === n) return s;
                    let l = eM(e, s);
                    return i > l.top + l.height ? ex(e, s + 1, n, r, i, a + 1) : i < l.top ? ex(e, t, s - 1, r, i, a + 1) : 3 > l.xDistance(r) ? s : l.left < r ? 0 !== eM(e, s + 1).checkLine(i) ? s : ex(e, s + 1, n, r, i, a + 1) : l.left > r ? 0 !== eM(e, s - 1).checkLine(i) ? s : ex(e, t, s - 1, r, i, a + 1) : s
                },
                e_ = (e, t, n) => {
                    let r = e.value.length;
                    return ex(e, 0, r, t, n, 0)
                };
            var eR = n(49421);
            let eN = new Map;
            (0, T.N7)(".js-paste-markdown", {
                initialize(e) {
                    let t;
                    let n = e.hasAttribute("data-paste-url-links-as-plain-text");
                    return {
                        add() {
                            t = (0, ej.Ld)(e, {
                                defaultPlainTextPaste: {
                                    urlLinks: n
                                }
                            }).unsubscribe
                        },
                        remove() {
                            t()
                        }
                    }
                }
            });
            let eH = new WeakMap;

            function eP(e) {
                return ["video/mp4", "video/quicktime"].includes(e.file.type)
            }

            function eI(e) {
                if (eP(e)) return `
Uploading ${e.file.name}\u{2026}
`;
                let t = e.isImage() ? "!" : "";
                return `${t}[Uploading ${e.file.name}\u{2026}]()`
            }

            function e$(e) {
                let t = e.target.closest("form");
                if (t) {
                    let e = t.querySelector(".btn-primary");
                    e && (e.disabled = !0)
                }
            }

            function eO(e) {
                let t = e.target.closest("form");
                if (t) {
                    let e = t.querySelector(".btn-primary");
                    e && (e.disabled = !1)
                }
            }
            async function eD(e) {
                let {
                    attachment: t
                } = e.detail, n = e.currentTarget;
                ez("", t.isImage() ? await eB(t) : eP(t) ? `
${t.href}
` : `[${t.file.name}](${t.href})`, e, n), eN.size > 0 && function() {
                    let e = document.querySelectorAll(".issue-form-textarea");
                    for (let t of e)
                        for (let [e, n] of eN) t.value.includes(e) && ((0, eL.lp)(t, e, n, document.activeElement === t), eN.delete(e))
                }()
            }
            async function eB(e) {
                let t = await eW(e.file),
                    n = e.file.name.replace(/[[\]\\"<>&]/g, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/gi, "").replace(/\.[^.]+$/, "").replace(/\./g, " "),
                    r = e.href;
                if (144 === t.ppi) {
                    let e = Math.round(t.width / 2);
                    return `<img width="${e}" alt="${n}" src="${r}">`
                }
                return `![${n}](${r})`
            }
            async function eW(e) {
                let t = {
                    width: 0,
                    height: 0,
                    ppi: 0
                };
                try {
                    return await eT(e) ?? t
                } catch {
                    return t
                }
            }

            function eF(e) {
                let t = eI(e);
                return eP(e) ? `
${t}
` : `${t}
`
            }

            function eU(e) {
                var t;
                let n = e.currentTarget.querySelector(".js-comment-field"),
                    r = (t = e.detail.attachment, eH.get(t) || eF(t));
                if (n) n.setCustomValidity(""), (0, eL.lp)(n, r, "");
                else {
                    let t = eV(e.currentTarget);
                    if (!t) {
                        (0, eR.a)("upload:editor:change", e.currentTarget, {
                            state: "failed",
                            placeholder: r,
                            replacementText: ""
                        });
                        return
                    }
                    let n = t.getSearchCursor(r);
                    n.findNext(), n.replace("")
                }
            }

            function ez(e, t, n, r) {
                let i = (r || n.currentTarget).querySelector(".js-comment-field"),
                    a = (r || n.currentTarget).querySelector(".js-file-upload-loading-text"),
                    o = eI(n.detail.attachment),
                    {
                        batch: s
                    } = n.detail;
                if (i) {
                    let r = i.value.substring(i.selectionStart, i.selectionEnd);
                    if ("uploading" === e) {
                        let e;
                        e = r.length ? (0, eL.t4)(i, r, o) : (0, eL.Om)(i, o, {
                            appendNewline: !0
                        }), eH.set(n.detail.attachment, e)
                    } else i.value.includes(o) || eN.set(o, t), (0, eL.lp)(i, o, t, document.activeElement === i);
                    s.isFinished() ? eO(n) : e$(n)
                } else {
                    let i = eV(r || n.currentTarget);
                    if (i) {
                        if ("uploading" === e) {
                            if (i.getSelection().length) i.replaceSelection(o);
                            else {
                                let e = i.getCursor(),
                                    t = eF(n.detail.attachment);
                                i.replaceRange(t, e)
                            }
                        } else {
                            let e = i.getSearchCursor(o);
                            e.findNext(), e.replace(t)
                        }
                    } else(0, eR.a)("upload:editor:change", r || n.currentTarget, {
                        state: "" === e ? "uploaded" : "uploading",
                        placeholder: o,
                        replacementText: "" === e ? t : eF(n.detail.attachment)
                    });
                    s.isFinished() ? eO(n) : e$(n)
                }
                if (a) {
                    let e = a.getAttribute("data-file-upload-message");
                    a.textContent = `${e} (${s.uploaded()+1}/${s.size})`
                }
            }

            function eV(e) {
                let t = e.querySelector(".js-code-editor");
                if (!t) return;
                let n = (0, eA.P)(t);
                if (n) return n.editor
            }

            function eX(e) {
                e.stopPropagation();
                let t = e.currentTarget;
                if (!t) return;
                let n = t.querySelector(".js-comment-field");
                if (n) ! function(e, t) {
                    let n = e.getBoundingClientRect();
                    "dragenter" === t.type && ek.delete(e);
                    let r = t.clientX - n.left,
                        i = t.clientY - n.top + e.scrollTop;
                    ! function(e, t, n) {
                        let r = e_(e, t, n);
                        e.setSelectionRange(r, r)
                    }(e, r, i)
                }(n, e);
                else {
                    let n = eV(t);
                    if ((0, eR.a)("upload:editor:cursor", t, {
                            left: e.clientX,
                            top: e.clientY
                        }), n) {
                        let t = n.coordsChar({
                            left: e.pageX,
                            top: e.pageY
                        });
                        n.setCursor(t), n.focus()
                    }
                }
            }(0, w.on)("upload:setup", ".js-upload-markdown-image", function(e) {
                ez("uploading", "", e)
            }), (0, w.on)("upload:complete", ".js-upload-markdown-image", eD), (0, w.on)("upload:error", ".js-upload-markdown-image", function(e) {
                eU(e);
                let {
                    batch: t
                } = e.detail;
                t.isFinished() ? eO(e) : e$(e)
            }), (0, w.on)("dragenter", "file-attachment", eX), (0, w.on)("dragover", "file-attachment", eX), (0, w.on)("upload:invalid", ".js-upload-markdown-image", function(e) {
                eU(e);
                let {
                    batch: t
                } = e.detail;
                t.isFinished() ? eO(e) : e$(e)
            });
            var eG = n(29501),
                eK = n(15205);

            function eZ(e) {
                let t = e.closest(".js-previewable-comment-form"),
                    n = e.classList.contains("js-preview-tab");
                if (n) {
                    let e = t.querySelector(".js-write-bucket"),
                        n = t.querySelector(".js-preview-body");
                    e.clientHeight > 0 && (n.style.minHeight = `${e.clientHeight}px`)
                }
                t.classList.toggle("preview-selected", n), t.classList.toggle("write-selected", !n);
                let r = t.querySelector('.tabnav-tab.selected, .tabnav-tab[aria-selected="true"]');
                r.setAttribute("aria-selected", "false"), r.classList.remove("selected"), e.classList.add("selected"), e.setAttribute("aria-selected", "true");
                let i = t.querySelector(".js-write-tab");
                return n ? i.setAttribute("data-hotkey", "Mod+Shift+P") : i.removeAttribute("data-hotkey"), t
            }

            function eJ(e) {
                let t = e.getAttribute("data-preview-url"),
                    n = function(e) {
                        let t = e.querySelector(".js-comment-field").value,
                            n = e.querySelector(".js-path")?.value,
                            r = e.querySelector(".js-line-number")?.value,
                            i = e.querySelector(".js-start-line-number")?.value,
                            a = e.querySelector(".js-side")?.value,
                            o = e.querySelector(".js-start-side")?.value,
                            s = e.querySelector(".js-start-commit-oid")?.value,
                            l = e.querySelector(".js-end-commit-oid")?.value,
                            c = e.querySelector(".js-base-commit-oid")?.value,
                            u = e.querySelector(".js-comment-id")?.value,
                            d = new FormData;
                        return d.append("text", t), d.append("authenticity_token", function(e) {
                            let t = e.querySelector(".js-data-preview-url-csrf"),
                                n = e.closest("form").elements.namedItem("authenticity_token");
                            if (t instanceof HTMLInputElement) return t.value;
                            if (n instanceof HTMLInputElement) return n.value;
                            throw Error("Comment preview authenticity token not found")
                        }(e)), n && d.append("path", n), r && d.append("line_number", r), i && d.append("start_line_number", i), a && d.append("side", a), o && d.append("start_side", o), s && d.append("start_commit_oid", s), l && d.append("end_commit_oid", l), c && d.append("base_commit_oid", c), u && d.append("comment_id", u), d
                    }(e);
                return (0, w.f)(e, "preview:setup", {
                    data: n
                }), eQ(t, n)
            }(0, w.on)("click", ".js-write-tab", function(e) {
                let t = e.currentTarget,
                    n = t.closest(".js-previewable-comment-form");
                if (n instanceof eG.Z) {
                    setTimeout(() => {
                        n.querySelector(".js-comment-field").focus()
                    });
                    return
                }
                let r = eZ(t);
                (0, w.f)(n, "preview:toggle:off");
                let i = n.querySelector(".js-discussion-poll-form-component");
                i && (0, w.f)(i, "poll-preview:toggle:off"), setTimeout(() => {
                    r.querySelector(".js-comment-field").focus()
                });
                let a = n.querySelector("markdown-toolbar");
                a instanceof HTMLElement && (a.hidden = !1)
            }), (0, w.on)("click", ".js-preview-tab", function(e) {
                let t = e.currentTarget,
                    n = t.closest(".js-previewable-comment-form");
                if (n instanceof eG.Z) return;
                let r = eZ(t);
                (0, w.f)(n, "preview:toggle:on"), setTimeout(() => {
                    e1(r)
                });
                let i = n.querySelector("markdown-toolbar");
                i instanceof HTMLElement && (i.hidden = !0), e.stopPropagation(), e.preventDefault()
            }), (0, w.on)("tab-container-change", ".js-previewable-comment-form", function(e) {
                let t = e.detail.relatedTarget,
                    n = t && t.classList.contains("js-preview-panel"),
                    r = e.currentTarget,
                    i = r.querySelector(".js-write-tab");
                if (n) {
                    let e = r.querySelector(".js-write-bucket"),
                        t = r.querySelector(".js-preview-body"),
                        n = t.hasAttribute("data-skip-sizing");
                    !n && e.clientHeight > 0 && (t.style.minHeight = `${e.clientHeight}px`), i.setAttribute("data-hotkey", "Mod+Shift+P"), e1(r);
                    let a = r.querySelector("markdown-toolbar");
                    a instanceof HTMLElement && (a.hidden = !0)
                } else {
                    i.removeAttribute("data-hotkey");
                    let e = r.querySelector("markdown-toolbar");
                    e instanceof HTMLElement && (e.hidden = !1);
                    let t = document.querySelector(".js-discussion-poll-form-component");
                    t && (0, w.f)(t, "poll-preview:toggle:off")
                }
                r.classList.toggle("preview-selected", n), r.classList.toggle("write-selected", !n)
            }), (0, w.on)("preview:render", ".js-previewable-comment-form", function(e) {
                let t = e.target.querySelector(".js-preview-tab"),
                    n = eZ(t);
                setTimeout(() => {
                    e1(n);
                    let e = n.querySelector("markdown-toolbar");
                    e instanceof HTMLElement && (e.hidden = !0)
                })
            });
            let eQ = (0, eK.Z)(e0, {
                    hash: function(e, t) {
                        let n = [...t.entries()].toString();
                        return `${e}:${n}`
                    }
                }),
                eY = null;
            async function e0(e, t) {
                eY?.abort();
                let {
                    signal: n
                } = eY = new AbortController, r = await fetch(e, {
                    method: "post",
                    body: t,
                    signal: n
                });
                if (!r.ok) throw Error("something went wrong");
                return r.text()
            }
            async function e1(e) {
                let t = e.querySelector(".comment-body");
                t.innerHTML = "<p>Loading preview&hellip;</p>";
                try {
                    let n = await eJ(e);
                    t.innerHTML = n || "<p>Nothing to preview</p>", (0, w.f)(e, "preview:rendered")
                } catch (e) {
                    "AbortError" !== e.name && (t.innerHTML = "<p>Error rendering preview</p>")
                }
            }(0, T.N7)(".js-preview-tab", function(e) {
                e.addEventListener("mouseenter", async () => {
                    let t = e.closest(".js-previewable-comment-form");
                    try {
                        await eJ(t)
                    } catch (e) {}
                })
            }), (0, B.w4)("keydown", ".js-comment-field", function(e) {
                let t = e.target;
                if ((e.ctrlKey || e.metaKey) && e.shiftKey && "P" === e.key.toUpperCase()) {
                    let n = t.closest(".js-previewable-comment-form");
                    n.classList.contains("write-selected") && (n instanceof eG.Z ? n.querySelector(".js-preview-tab").click() : (t.blur(), n.dispatchEvent(new CustomEvent("preview:render", {
                        bubbles: !0,
                        cancelable: !1
                    }))), e.preventDefault(), e.stopImmediatePropagation())
                }
            });
            let e4 = /^(\+1|-1|:\+1?|:-1?)$/,
                e7 = e => {
                    let t = !1;
                    for (let n of e.split("\n")) {
                        let e = n.trim();
                        if (!(!e || e.startsWith(">"))) {
                            if (t && !1 === e4.test(e)) return !1;
                            !t && e4.test(e) && (t = !0)
                        }
                    }
                    return t
                };

            function e2(e) {
                let t = e.target,
                    n = t.value,
                    r = t.closest(".js-reaction-suggestion");
                if (r) {
                    if (e7(n)) {
                        r.classList.remove("hide-reaction-suggestion"), r.classList.add("reaction-suggestion");
                        let e = r.getAttribute("data-reaction-markup");
                        r.setAttribute("data-reaction-suggestion-message", e)
                    } else e5(r)
                }
            }

            function e5(e) {
                e.classList.remove("reaction-suggestion"), e.classList.add("hide-reaction-suggestion"), e.removeAttribute("data-reaction-suggestion-message")
            }(0, w.on)("focusout", "#new_comment_field", function(e) {
                let t = e.currentTarget,
                    n = t.closest(".js-reaction-suggestion");
                n && e5(n)
            }), (0, w.on)("focusin", "#new_comment_field", function(e) {
                e2(e)
            }), (0, B.w4)("keyup", "#new_comment_field", function(e) {
                e2(e)
            });
            var e9 = n(76134);
            (0, w.on)("navigation:keydown", ".js-commits-list-item", function(e) {
                (0, e9.Zf)(e.detail.originalEvent) && e.target instanceof Element && "c" === e.detail.hotkey && e.target.querySelector(".js-navigation-open").click()
            }), n(26361), (0, B.q6)(".js-company-name-input", function(e) {
                let t = e.target,
                    n = t.form,
                    r = n.querySelector(".js-corp-tos-link"),
                    i = n.querySelector(".js-tos-link");
                i && (i.classList.add("d-none"), i.setAttribute("aria-hidden", "true"), r && (r.classList.remove("d-none"), r.setAttribute("aria-hidden", "false")));
                let a = n.querySelectorAll(".js-company-name-text");
                if (0 !== a.length)
                    for (let e of a)
                        if (t.value) {
                            let n = e.hasAttribute("data-wording");
                            if (n) {
                                let n = e.getAttribute("data-wording");
                                e.textContent = ` ${n} ${t.value}`
                            } else e.textContent = t.value
                        } else e.textContent = ""
            }), (0, T.N7)(".js-company-owned:not(:checked)", {
                constructor: HTMLInputElement,
                add(e) {
                    let t = e.form,
                        n = t.querySelector(".js-company-name-input"),
                        r = document.querySelector(".js-company-name-text"),
                        i = document.querySelector(".js-corp-tos-link"),
                        a = document.querySelector(".js-tos-link");
                    n && (e.getAttribute("data-optional") && n.removeAttribute("required"), (0, P.Se)(n, "")), a.classList.remove("d-none"), a.setAttribute("aria-hidden", "false"), i.classList.add("d-none"), i.setAttribute("aria-hidden", "true"), r && (r.textContent = "")
                }
            }), (0, T.N7)(".js-company-owned:checked", {
                constructor: HTMLInputElement,
                add(e) {
                    let t = e.form,
                        n = t.querySelector(".js-company-name-input");
                    n && (n.setAttribute("required", ""), (0, w.f)(n, "focus"), (0, w.f)(n, "input"))
                }
            }), (0, T.N7)(".js-company-owned-autoselect", {
                constructor: HTMLInputElement,
                add(e) {
                    function t() {
                        if (e.checked && e.form) {
                            let t = e.form.querySelector(".js-company-owned");
                            (0, P.Se)(t, !0)
                        }
                    }
                    e.addEventListener("change", t), t()
                }
            });
            var e3 = n(70763);
            n(92792);
            var e6 = n(88309);
            (0, T.N7)("details.select-menu details-menu include-fragment", function(e) {
                let t = e.closest("details");
                t && (e.addEventListener("loadstart", function() {
                    t.classList.add("is-loading"), t.classList.remove("has-error")
                }), e.addEventListener("error", function() {
                    t.classList.add("has-error")
                }), e.addEventListener("loadend", function() {
                    t.classList.remove("is-loading");
                    let e = t.querySelector(".js-filterable-field");
                    e && (0, w.f)(e, "filterable:change")
                }))
            }), (0, T.N7)("details details-menu .js-filterable-field", {
                constructor: HTMLInputElement,
                add(e) {
                    let t = e.closest("details");
                    t.addEventListener("toggle", function() {
                        t.hasAttribute("open") || (e.value = "", (0, w.f)(e, "filterable:change"))
                    })
                }
            }), (0, T.N7)("details-menu[role=menu] [role=menu]", e => {
                let t = e.closest("details-menu[role]");
                t && t !== e && t.removeAttribute("role")
            }), (0, T.N7)("details details-menu remote-input input", {
                constructor: HTMLInputElement,
                add(e) {
                    let t = e.closest("details");
                    t.addEventListener("toggle", function() {
                        t.hasAttribute("open") || (e.value = "")
                    })
                }
            }), (0, T.N7)("form details-menu", e => {
                let t = e.closest("form");
                t.addEventListener("reset", () => {
                    setTimeout(() => (function(e) {
                        let t = e.querySelectorAll("details-menu [role=menuitemradio] input[type=radio]:checked");
                        for (let e of t)(0, w.f)(e, "change")
                    })(t), 0)
                })
            }), (0, B.w4)("keypress", "details-menu .js-filterable-field, details-menu filter-input input", e => {
                if ("Enter" === e.key) {
                    let t = e.currentTarget,
                        n = t.closest("details-menu"),
                        r = n.querySelector('[role^="menuitem"]:not([hidden])');
                    r instanceof HTMLElement && !r.classList.contains("select-menu-clear-item") && r.click(), e.preventDefault()
                }
            }), (0, w.on)("details-menu-selected", "details-menu", e => {
                let t = e.currentTarget,
                    n = t.querySelector(".js-filterable-field");
                n instanceof HTMLInputElement && n.value && n.focus()
            }, {
                capture: !0
            });
            let e8 = e => {
                if (!(e.target instanceof Element)) return;
                let t = e.target.getAttribute("data-menu-input"),
                    n = document.getElementById(t);
                if (!(n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement)) return;
                let r = e.detail.relatedTarget || e.detail.item.querySelector("button");
                n.value = r.value
            };
            async function te({
                currentTarget: e
            }) {
                let t = e.hasAttribute("open");
                if (t) {
                    let t = e.querySelector(".js-filterable-field");
                    t instanceof HTMLInputElement && t.focus()
                }(0, w.f)(e, t ? "menu:activate" : "menu:deactivate"), await (0, D.gJ)(), (0, w.f)(e, t ? "menu:activated" : "menu:deactivated")
            }(0, w.on)("itemActivated", "[data-menu-input]", e8, {
                capture: !0
            }), (0, w.on)("details-menu-selected", "[data-menu-input]", e8, {
                capture: !0
            }), (0, T.N7)("details-menu remote-input", {
                constructor: e6.Z,
                initialize(e) {
                    let t = document.getElementById(e.getAttribute("aria-owns") || "");
                    if (!t) return;
                    let n = null;
                    e.addEventListener("load", () => {
                        n = document.activeElement && t.contains(document.activeElement) && document.activeElement.id ? document.activeElement.id : null
                    }), e.addEventListener("loadend", () => {
                        if (n) {
                            let r = t.querySelector(`#${n}`) || t.querySelector('[role^="menu"]');
                            r instanceof HTMLElement ? r.focus() : e.input && e.input.focus()
                        }
                    })
                }
            }), (0, w.on)("details-menu-selected", "details-menu[data-menu-max-options]", e => {
                let t = +e.currentTarget.getAttribute("data-menu-max-options"),
                    n = e.currentTarget.querySelectorAll('[role="menuitemcheckbox"][aria-checked="true"]'),
                    r = t === n.length;
                for (let t of (e.currentTarget.querySelector("[data-menu-max-options-warning]").hidden = !r, e.currentTarget.querySelectorAll('[role="menuitemcheckbox"] input'))) t.disabled = r && !t.checked
            }, {
                capture: !0
            }), (0, T.N7)("details > details-menu", {
                subscribe(e) {
                    let t = e.closest("details");
                    return (0, F.RB)(t, "toggle", te)
                }
            }), (0, T.N7)("details > details-menu[preload]:not([src])", {
                subscribe: e => (0, F.RB)(e.parentElement, "mouseover", function(e) {
                    let t = e.currentTarget,
                        n = t.querySelector("include-fragment[src]");
                    n?.load()
                })
            }), (0, T.N7)("button[data-show-dialog-id]", e => {
                e?.addEventListener("mouseenter", () => {
                    let t = e.getAttribute("data-show-dialog-id"),
                        n = e.ownerDocument.getElementById(t);
                    n?.querySelector("include-fragment[loading=lazy]")?.setAttribute("loading", "eager")
                })
            }), (0, T.N7)("summary[data-show-dialog-id]", e => {
                e?.addEventListener("click", () => {
                    let t = e.getAttribute("data-show-dialog-id");
                    if (!t) return;
                    let n = e.ownerDocument.getElementById(t);
                    n?.show()
                })
            });
            let tt = new WeakMap;

            function tn(e) {
                return [Array.from(e.querySelectorAll("input[type=submit][data-disable-with], button[data-disable-with]")), Array.from(document.querySelectorAll(`button[data-disable-with][form="${e.id}"]`))].flat()
            }

            function tr(e, t) {
                e instanceof HTMLInputElement ? e.value = t : e.innerHTML = t
            }

            function ti(e) {
                for (let t of tn(e)) {
                    let n = tt.get(t);
                    null != n && (tr(t, n), (!t.hasAttribute("data-disable-invalid") || e.checkValidity()) && (t.disabled = !1), tt.delete(t))
                }
            }(0, w.on)("submit", "form", function(e) {
                let t = e.currentTarget;
                for (let e of tn(t)) {
                    tt.set(e, e instanceof HTMLInputElement ? e.value || "Submit" : e.innerHTML || "");
                    let t = e.getAttribute("data-disable-with");
                    t && tr(e, t), e.disabled = !0
                }
            }, {
                capture: !0
            }), (0, w.on)("deprecatedAjaxComplete", "form", function({
                currentTarget: e,
                target: t
            }) {
                e === t && ti(e)
            }), (0, S.uT)(ti), n(74721), n(14992);
            var ta = n(55908);

            function to(e, t) {
                let n = document.querySelector('.js-site-favicon[type="image/svg+xml"]'),
                    r = document.querySelector('.js-site-favicon[type="image/png"]');
                t || (t = "light");
                let a = "light" === t ? "" : "-dark";
                if (n && r) {
                    if (null == i && (i = n.href), e) {
                        e = e.substr(0, e.lastIndexOf(".")), e = `${e}${a}.svg`, n.href = e;
                        let t = n.href.substr(0, n.href.lastIndexOf("."));
                        r.href = `${t}.png`
                    } else {
                        let e = n.href.indexOf("-dark.svg"),
                            t = n.href.substr(0, -1 !== e ? e : n.href.lastIndexOf("."));
                        n.href = `${t}${a}.svg`, r.href = `${t}${a}.png`
                    }
                }
            }

            function ts() {
                return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            }

            function tl() {
                ts() && to(void 0, "dark")
            }
            async function tc(e) {
                let t = e.getAttribute("data-feature-preview-indicator-src"),
                    n = await tu(t),
                    r = e.querySelectorAll(".js-feature-preview-indicator");
                for (let e of r) e.hidden = !n
            }
            async function tu(e) {
                try {
                    let t = await fetch(e, {
                        headers: {
                            Accept: "application/json"
                        }
                    });
                    if (!t.ok) return !1;
                    let n = await t.json();
                    return n.show_indicator
                } catch {
                    return !1
                }
            }(0, T.N7)("[data-favicon-override]", {
                add(e) {
                    let t = e.getAttribute("data-favicon-override");
                    setTimeout(() => to(t, ts() ? "dark" : "light"))
                },
                remove() {
                    null != i && to(i, ts() ? "dark" : "light")
                }
            }), tl(), document.addEventListener(ta.Q.SUCCESS, tl), window.matchMedia("(prefers-color-scheme: dark)").addListener(() => {
                to(void 0, ts() ? "dark" : "light")
            }), (0, T.N7)(".js-feature-preview-indicator-container", e => {
                tc(e)
            });
            var td = n(54177),
                tm = n(82873);

            function tf(e) {
                let t = "string" == typeof e.asset_upload_url ? e.asset_upload_url : null,
                    n = "string" == typeof e.asset_upload_authenticity_token ? e.asset_upload_authenticity_token : null;
                if (!(t && n)) return;
                let r = new FormData;
                r.append("authenticity_token", n), fetch(t, {
                    method: "PUT",
                    body: r,
                    credentials: "same-origin",
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })
            }
            async function th(e, t) {
                let n = {
                    attachmentUploadDidStart(n, r) {
                        n.saving(0), tv(t, "is-uploading"), (0, w.f)(t, "upload:start", {
                            batch: e,
                            attachment: n,
                            policy: r
                        })
                    },
                    attachmentUploadDidProgress(n, r) {
                        n.saving(r), (0, w.f)(t, "upload:progress", {
                            batch: e,
                            attachment: n
                        })
                    },
                    attachmentUploadDidComplete(n, r, i) {
                        n.saved(function(e, t) {
                            let n = (null == e.id ? null : String(e.id)) || (null == t.asset.id ? null : String(t.asset.id)),
                                r = ("string" == typeof e.href ? e.href : null) || ("string" == typeof t.asset.href ? t.asset.href : null);
                            return {
                                id: n,
                                href: r,
                                name: t.asset.name
                            }
                        }(i, r)), (0, w.f)(t, "upload:complete", {
                            batch: e,
                            attachment: n
                        }), e.isFinished() && tv(t, "is-default")
                    },
                    attachmentUploadDidError(n, r) {
                        e.setAttachmentAsFailed(n), (0, w.f)(t, "upload:error", {
                            batch: e,
                            attachment: n
                        });
                        let {
                            state: i
                        } = tg(r);
                        tv(t, i)
                    }
                };
                for (let r of e.attachments) {
                    let i = await tp(e, r, t);
                    if (!i) return;
                    try {
                        let e = new f(r, i);
                        await e.process(n)
                    } catch {
                        e.setAttachmentAsFailed(r), (0, w.f)(t, "upload:error", {
                            batch: e,
                            attachment: r
                        }), tv(t, "is-failed");
                        return
                    }
                }
            }
            async function tp(e, t, n) {
                let r = function(e, t) {
                        let n = t.querySelector(".js-data-upload-policy-url-csrf").value,
                            r = t.getAttribute("data-upload-repository-id"),
                            i = t.getAttribute("data-subject-type"),
                            a = t.getAttribute("data-subject-param"),
                            o = t.getAttribute("data-upload-container-type"),
                            s = t.getAttribute("data-upload-container-id"),
                            l = e.file,
                            c = new FormData;
                        return c.append("name", l.name), c.append("size", String(l.size)), c.append("content_type", l.type), c.append("authenticity_token", n), i && c.append("subject_type", i), a && c.append("subject", a), r && c.append("repository_id", r), e.directory && c.append("directory", e.directory), o && c.append("upload_container_type", o), o && s && c.append("upload_container_id", s), c
                    }(t, n),
                    i = [];
                (0, w.f)(n, "upload:setup", {
                    batch: e,
                    attachment: t,
                    form: r,
                    preprocess: i
                });
                try {
                    await Promise.all(i);
                    let a = await fetch(new Request(n.getAttribute("data-upload-policy-url"), {
                        method: "POST",
                        body: r,
                        credentials: "same-origin",
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    }));
                    if (a.ok) return await a.json();
                    e.setAttachmentAsFailed(t), (0, w.f)(n, "upload:invalid", {
                        batch: e,
                        attachment: t
                    });
                    let o = await a.text(),
                        s = a.status,
                        {
                            state: l,
                            messaging: c
                        } = tg({
                            status: s,
                            body: o
                        }, t.file);
                    tv(n, l, c)
                } catch {
                    e.setAttachmentAsFailed(t), (0, w.f)(n, "upload:invalid", {
                        batch: e,
                        attachment: t
                    }), tv(n, "is-failed")
                }
                return null
            }

            function tg(e, t) {
                if (400 === e.status) return {
                    state: "is-bad-file"
                };
                if (422 !== e.status) return {
                    state: "is-failed"
                };
                let n = JSON.parse(e.body);
                if (!n || !n.errors) return {
                    state: "is-failed"
                };
                for (let e of n.errors) switch (e.field) {
                    case "size": {
                        let n = t ? t.size : null;
                        if (null != n && 0 === n) return {
                            state: "is-empty"
                        };
                        return {
                            state: "is-too-big",
                            messaging: {
                                message: tb(e.message),
                                target: ".js-upload-too-big"
                            }
                        }
                    }
                    case "file_count":
                        return {
                            state: "is-too-many"
                        };
                    case "width":
                    case "height":
                        return {
                            state: "is-bad-dimensions"
                        };
                    case "name":
                        if ("already_exists" === e.code) return {
                            state: "is-duplicate-filename"
                        };
                        return {
                            state: "is-bad-file"
                        };
                    case "content_type":
                        return {
                            state: "is-bad-file"
                        };
                    case "uploader_id":
                        return {
                            state: "is-bad-permissions"
                        };
                    case "repository_id":
                        return {
                            state: "is-repository-required"
                        };
                    case "format":
                        return {
                            state: "is-bad-format"
                        }
                }
                return {
                    state: "is-failed"
                }
            }(0, w.on)("click", "[data-feature-preview-trigger-url]", async e => {
                let t = e.currentTarget,
                    n = t.getAttribute("data-feature-preview-trigger-url"),
                    r = await (0, td.W)({
                        content: (0, tm.a_)(document, n),
                        dialogClass: "feature-preview-dialog"
                    }),
                    i = t.getAttribute("data-feature-preview-close-details"),
                    a = t.getAttribute("data-feature-preview-close-hmac");
                r.addEventListener("dialog:remove", () => {
                    (0, q.b)({
                        hydroEventPayload: i,
                        hydroEventHmac: a
                    }, !0)
                });
                let o = document.querySelectorAll(".js-feature-preview-indicator");
                for (let e of o) e.hidden = !0
            }), (0, S.AC)(".js-feature-preview-unenroll", async (e, t) => {
                await t.text();
                let n = e.querySelector(".js-feature-preview-slug").value;
                (0, w.f)(e, `feature-preview-unenroll:${n}`)
            }), (0, S.AC)(".js-feature-preview-enroll", async (e, t) => {
                await t.text();
                let n = e.querySelector(".js-feature-preview-slug").value;
                (0, w.f)(e, `feature-preview-enroll:${n}`)
            }), f = class AttachmentUpload {
                async process(e) {
                    var t;
                    let n = window.performance.now(),
                        r = new Headers(this.policy.header || {}),
                        i = new XMLHttpRequest;
                    for (let [e, t] of(i.open("POST", this.policy.upload_url, !0), r)) i.setRequestHeader(e, t);
                    i.onloadstart = () => {
                        e.attachmentUploadDidStart(this.attachment, this.policy)
                    }, i.upload.onprogress = t => {
                        if (t.lengthComputable) {
                            let n = Math.round(t.loaded / t.total * 100);
                            e.attachmentUploadDidProgress(this.attachment, n)
                        }
                    }, await (t = function(e, t) {
                        let n = new FormData;
                        for (let e in t.same_origin && n.append("authenticity_token", t.upload_authenticity_token), t.form) n.append(e, t.form[e]);
                        return n.append("file", e.file), n
                    }(this.attachment, this.policy), new Promise((e, n) => {
                        i.onload = () => e(i), i.onerror = n, i.send(t)
                    })), 204 === i.status ? (tf(this.policy), e.attachmentUploadDidComplete(this.attachment, this.policy, {})) : 201 === i.status ? (tf(this.policy), e.attachmentUploadDidComplete(this.attachment, this.policy, JSON.parse(i.responseText))) : e.attachmentUploadDidError(this.attachment, {
                        status: i.status,
                        body: i.responseText
                    });
                    let a = window.performance.now(),
                        o = {
                            duration: a - n,
                            size: this.attachment?.file?.size,
                            fileType: this.attachment?.file?.type,
                            success: 204 === i.status || 201 === i.status
                        };
                    (0, q.b)({
                        uploadTiming: o
                    }, !0)
                }
                constructor(e, t) {
                    this.attachment = e, this.policy = t
                }
            };
            let tb = e => e.startsWith("size") ? e.substring(5) : e,
                ty = ["is-default", "is-uploading", "is-bad-file", "is-duplicate-filename", "is-too-big", "is-too-many", "is-hidden-file", "is-failed", "is-bad-dimensions", "is-empty", "is-bad-permissions", "is-repository-required", "is-bad-format"];

            function tv(e, t, n) {
                if (n) {
                    let {
                        message: t,
                        target: r
                    } = n, i = e.querySelector(r);
                    i && (i.innerHTML = t)
                }
                e.classList.remove(...ty), e.classList.add(t)
            }

            function tw(e, t) {
                return e.reduce((e, n) => e + t(n), 0)
            }
            h = class Batch {
                percent() {
                    let e = tw(this.attachments, e => e.file.size * e.percent / 100);
                    return Math.round(e / this.total * 100)
                }
                uploaded() {
                    return tw(this.attachments, e => e.isSaved() ? 1 : 0)
                }
                isFinished() {
                    return this.attachments.every(e => this.failedAttachments.includes(e) || e.isSaved())
                }
                setAttachmentAsFailed(e) {
                    this.attachments.includes(e) && !this.failedAttachments.includes(e) && this.failedAttachments.push(e)
                }
                constructor(e) {
                    this.attachments = e, this.failedAttachments = [], this.size = this.attachments.length, this.total = tw(this.attachments, e => e.file.size)
                }
            }, (0, T.N7)("file-attachment[hover]", {
                add(e) {
                    e.classList.add("dragover")
                },
                remove(e) {
                    e.classList.remove("dragover")
                }
            }), (0, w.on)("file-attachment-accept", "file-attachment", function(e) {
                let {
                    attachments: t
                } = e.detail;
                0 === t.length && (tv(e.currentTarget, "is-hidden-file"), e.preventDefault())
            }), (0, w.on)("file-attachment-accepted", "file-attachment", function(e) {
                let t = e.currentTarget.querySelector(".drag-and-drop");
                if (t && t.hidden) return;
                let {
                    attachments: n
                } = e.detail;
                th(new h(n), e.currentTarget)
            }), (0, w.on)("click", "button[data-file-attachment-for]", function(e) {
                let t = e.currentTarget,
                    n = t.getAttribute("data-file-attachment-for"),
                    r = document.querySelector(`input[type=file]#${n}`);
                r.click()
            });
            let tS = 0;

            function tE(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }

            function tL(e) {
                let t = e.dataTransfer;
                t && tE(t) && e.preventDefault()
            }

            function tj(e) {
                let t = e.dataTransfer;
                t && tE(t) && e.preventDefault()
            }

            function tA({
                currentTarget: e
            }) {
                let t = e.querySelector("file-attachment");
                tv(t, "is-default")
            }(0, T.N7)("file-attachment", {
                add(e) {
                    0 == tS++ && (document.addEventListener("drop", tL), document.addEventListener("dragover", tj));
                    let t = e.closest("form");
                    t && t.addEventListener("reset", tA)
                },
                remove(e) {
                    0 == --tS && (document.removeEventListener("drop", tL), document.removeEventListener("dragover", tj));
                    let t = e.closest("form");
                    t && t.removeEventListener("reset", tA)
                }
            });
            var tT = n(13002);

            function tq(e, t, n, r = {}) {
                let i = r.limit ?? 1 / 0,
                    a = 0;
                for (let r of e.children) {
                    let e = n(r, t);
                    null == e || (e && a < i ? (a++, tk(r, !0)) : tk(r, !1))
                }
                return a
            }

            function tk(e, t) {
                e.style.display = t ? "" : "none", e.hidden = !t
            }(0, w.on)("filter-input-updated", "filter-input", e => {
                let t = e.currentTarget.input;
                if (!(document.activeElement && document.activeElement === t)) return;
                let {
                    count: n,
                    total: r
                } = e.detail;
                (0, C.x)(`Found ${n} out of ${r} ${1===r?"item":"items"}`)
            }), (0, w.on)("toggle", "details", e => {
                setTimeout(() => (function(e) {
                    let t = e.querySelector("filter-input");
                    t && !e.hasAttribute("open") && t.reset()
                })(e.target), 0)
            }, {
                capture: !0
            }), (0, w.on)("tab-container-changed", "tab-container", e => {
                if (!(e.target instanceof HTMLElement)) return;
                let {
                    relatedTarget: t
                } = e.detail, n = e.target.querySelector("filter-input");
                n instanceof tT.Z && n.setAttribute("aria-owns", t.id)
            }, {
                capture: !0
            });
            var tC = n(87738),
                tM = n(41982);
            let tx = new WeakMap;

            function t_(e, t, n) {
                let r = t.toLowerCase(),
                    i = n.limit,
                    a = tx.get(e),
                    o = e.querySelector('input[type="radio"]:checked'),
                    s = Array.from(e.children);
                if (a) {
                    if (e.classList.contains("filter-sort-list-refresh")) {
                        e.classList.remove("filter-sort-list-refresh");
                        let t = Array.from(e.children);
                        for (let e of t) a.includes(e) || a.push(e)
                    }
                } else a = Array.from(e.children), tx.set(e, a);
                for (let t of s) e.removeChild(t), t instanceof HTMLElement && (t.style.display = "");
                let l = r ? (0, tM.W)(a, n.sortKey, tC.qu) : a,
                    c = null == i ? l : l.slice(0, i),
                    u = c.length,
                    d = document.createDocumentFragment();
                for (let e of c) d.appendChild(e);
                let m = !1;
                if (o instanceof HTMLInputElement)
                    for (let e of d.querySelectorAll('input[type="radio"]:checked')) e instanceof HTMLInputElement && e.value !== o.value && (e.checked = !1, m = !0);
                return e.appendChild(d), o && m && o.dispatchEvent(new Event("change", {
                    bubbles: !0
                })), u
            }
            var tR = n(40458);
            let tN = new AbortController,
                tH = new WeakMap,
                tP = new WeakMap,
                tI = new WeakMap;
            async function t$(e, t, n) {
                n && !tH.has(e) && tH.set(e, {
                    lastSearchResult: {
                        suggestions: [],
                        users: []
                    },
                    cachedSuggestions: [],
                    userResultCache: new Map
                });
                let r = await tO(e, t, n),
                    i = e.hasAttribute("data-filterable-data-pre-rendered");
                return i && (r.suggestions = function(e, t) {
                    let n = [],
                        r = e.querySelectorAll(".js-filterable-suggested-user");
                    if (r.length > 0)
                        for (let t of e.querySelectorAll(".js-filterable-suggested-user")) t.classList.remove("js-filterable-suggested-user"), n.push({
                            name: t.querySelector(".js-description").textContent,
                            login: t.querySelector(".js-username").textContent,
                            selected: "true" === t.getAttribute("aria-checked"),
                            element: t,
                            suggestion: !0
                        });
                    if (t) {
                        let t = tH.get(e);
                        return r.length > 0 && (t.cachedSuggestions = n, t.userResultCache.clear()), t.cachedSuggestions
                    }
                    return n
                }(e, n)), r
            }
            async function tO(e, t, n) {
                let r = new URL(e.getAttribute("data-filterable-src") || "", window.location.origin);
                if ("/" === r.pathname) throw Error("could not get data-filterable-src");
                if (n) {
                    let n = tH.get(e),
                        i = t.trim();
                    if (n.lastSearchText === i) return n.lastSearchResult;
                    let a = void 0 === n.lastSearchText;
                    n.lastSearchText = i;
                    let o = e.getAttribute("data-filterable-for") || "",
                        s = document.getElementById(o);
                    if (tN.abort(), "" === i) n.lastSearchResult = {
                        suggestions: [],
                        users: []
                    };
                    else {
                        tN = new AbortController;
                        let e = {
                                headers: {
                                    Accept: "application/json",
                                    "X-Requested-With": "XMLHttpRequest"
                                },
                                signal: tN.signal
                            },
                            i = r.searchParams || new URLSearchParams;
                        i.set("q", t), i.set("typeAhead", "true"), r.search = i.toString(), a || s?.classList.add("is-loading");
                        let o = await fetch(r.toString(), e);
                        n.lastSearchResult = await o.json()
                    }
                    return s?.classList.remove("is-loading"), n.lastSearchResult
                } {
                    let e = await fetch(r.toString(), {
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    return await e.json()
                }
            }
            async function tD(e, t, n) {
                tI.set(e, t), await (0, tR.Z)();
                let r = e.hasAttribute("data-filterable-show-suggestion-header"),
                    i = e.hasAttribute("data-filterable-type-ahead"),
                    a = tP.get(e);
                if (!a) try {
                    a = await t$(e, t, i), i || tP.set(e, a)
                } catch (e) {
                    if ("AbortError" === e.name) return -1;
                    throw e
                }
                if (!i && tI.get(e) !== t) return -1;
                let o = n.limit,
                    s = e.querySelector("template"),
                    l = {};
                for (let t of e.querySelectorAll("input[type=hidden]")) l[`${t.name}${t.value}`] = t;
                let c = s.nextElementSibling;
                for (; c;) {
                    let e = c;
                    c = e.nextElementSibling, e instanceof HTMLElement && (i || "true" === e.getAttribute("aria-checked") || e.classList.contains("select-menu-divider")) ? e.hidden = !0 : e.remove()
                }
                let u = 0,
                    d = "" === t.trim(),
                    m = document.createDocumentFragment(),
                    f = e.querySelector(".js-divider-suggestions"),
                    h = e.querySelector(".js-divider-rest"),
                    p = tH.get(e);

                function g(e) {
                    let n = `${e.login} ${e.name}`.toLowerCase().trim().includes(t),
                        r = !(null != o && u >= o) && n,
                        i = r || e.selected || e.suggestion;
                    if (i) {
                        let t = function(e, t, n, r) {
                            if (null != e.element) return e.element;
                            if (r?.userResultCache.has(e.id)) return r.userResultCache.get(e.id);
                            let i = t.content.cloneNode(!0),
                                a = i.querySelector("input[type=checkbox], input[type=radio]");
                            e.type && (a.name = `reviewer_${e.type}_ids[]`), a.value = e.id;
                            let o = `${a.name}${e.id}`,
                                s = e.selected;
                            n[o] && (s = !0, n[o].remove(), delete n[o]);
                            let l = i.querySelector("[role^=menuitem]");
                            s && (l.setAttribute("aria-checked", "true"), a.checked = !0), e.disabled && l.setAttribute("aria-disabled", "true");
                            let c = i.querySelector(".js-username");
                            c && (c.textContent = e.login);
                            let u = i.querySelector(".js-description");
                            u && (u.textContent = e.name);
                            let d = i.querySelector(".js-extended-description");
                            d && (e.description ? d.textContent = e.description : d.remove());
                            let m = i.querySelector(".js-avatar");
                            return m.className = `${m.className} ${e.class}`, m.src = e.avatar, e.element = l, r?.userResultCache.set(e.id, l), e.element
                        }(e, s, l, p);
                        t.hidden = !r, r && u++, m.appendChild(t)
                    }
                }
                let b = !1;
                if (f && (a.suggestions?.length > 0 || r && a.users.length > 0)) {
                    let e = a.suggestions ?? [],
                        t = e.filter(e => e.selected),
                        n = e.filter(e => !e.selected);
                    for (let e of t) g(e);
                    m.appendChild(f);
                    let o = u;
                    for (let e of n) g(e);
                    b = u > o, f.hidden = !b || i && !d, r && a.users.length > 0 && (f.hidden = !d)
                }
                h && m.appendChild(h);
                let y = u;
                for (let e of a.users) g(e);
                return h && (h.hidden = y === u || !b), e.append(m), u
            }
            let tB = new AbortController,
                tW = new WeakMap,
                tF = new WeakMap,
                tU = new WeakMap;
            async function tz(e, t, n) {
                await (0, tR.Z)(), tU.set(e, t);
                let r = tF.get(e);
                if (!r) try {
                    r = await tV(e, t)
                } catch (e) {
                    if ("AbortError" === e.name) return -1;
                    throw e
                }
                let i = {};
                for (let t of e.querySelectorAll("label[aria-checked=true] > div > input[hidden]")) i[`${t.name}${t.value}`] = t;
                let a = e.querySelector("template"),
                    o = a.nextElementSibling;
                for (; o;) {
                    let e = o;
                    o = e.nextElementSibling, e instanceof HTMLElement && ("true" === e.getAttribute("aria-checked") || e.classList.contains("select-menu-divider")) ? e.hidden = !0 : e.remove()
                }
                let s = document.createDocumentFragment(),
                    l = tW.get(e),
                    c = n.limit,
                    u = 0;
                for (let e of r.labels) ! function(e) {
                    let n = `${e.name}`.toLowerCase().trim().includes(t.toLocaleLowerCase()),
                        r = !(null != c && u >= c) && n,
                        o = r || e.selected;
                    if (o) {
                        let t = function(e, t, n, r) {
                            if (null != e.element) return e.element;
                            let i = r?.labelResultCache.get(e.id);
                            if (i) return i;
                            let a = t.content.cloneNode(!0),
                                o = a.querySelector("input[type=checkbox]");
                            o.value = e.id, o.setAttribute("data-label-name", e.name);
                            let s = `${o.name}${e.id}`,
                                l = e.selected;
                            n[s] && (l = !0, n[s].remove(), delete n[s]);
                            let c = a.querySelector("[role^=menuitem]");
                            l && (c.setAttribute("aria-checked", "true"), o.checked = !0);
                            let u = a.querySelector(".js-label-id");
                            u && u.setAttribute("data-name", e.id);
                            let d = a.querySelector(".js-label-color");
                            if (d) {
                                let t = d.getAttribute("style")?.replace("background-color:", `background-color:#${e.color};`);
                                d.setAttribute("style", t)
                            }
                            let m = a.querySelector(".js-label-name-html");
                            m && (m.innerHTML = e.htmlName);
                            let f = a.querySelector(".js-label-description");
                            return f && (e.description ? f.textContent = e.description : f.remove()), e.element = c, r?.labelResultCache.set(e.id, c), e.element
                        }(e, a, i, l);
                        t.hidden = !r, r && u++, s.appendChild(t)
                    }
                }(e);
                return e.append(s), u
            }
            async function tV(e, t) {
                !tW.has(e) && tW.set(e, {
                    lastSearchResult: {
                        labels: []
                    },
                    cachedSuggestions: [],
                    labelResultCache: new Map
                });
                let n = e.hasAttribute("data-filterable-data-pre-rendered");
                return n ? function(e) {
                    let t = [],
                        n = e.querySelectorAll(".js-filterable-label");
                    if (e.removeAttribute("data-filterable-data-pre-rendered"), n.length > 0)
                        for (let n of e.querySelectorAll(".js-filterable-label")) n.classList.remove("js-filterable-label"), t.push({
                            id: n.querySelector("input[hidden]").getAttribute("value") || "",
                            name: n.querySelector("input[hidden]").getAttribute("data-label-name") || "",
                            htmlName: n.querySelector(".js-label-name-html").textContent,
                            description: n.querySelector(".js-label-description")?.textContent || "",
                            color: n.querySelector(".js-label-color").getAttribute("label-color") || "",
                            selected: "true" === n.getAttribute("aria-checked"),
                            element: n
                        });
                    let r = tW.get(e);
                    return t.length > 0 && (r.cachedSuggestions = t, r.lastSearchText = "", r.lastSearchResult = {
                        labels: t
                    }), r.lastSearchResult
                }(e) : await tX(e, t)
            }
            async function tX(e, t) {
                let n = new URL(e.getAttribute("data-filterable-src") || "", window.location.origin);
                if ("/" === n.pathname) throw Error("could not get data-filterable-src");
                let r = tW.get(e),
                    i = t.trim();
                if (r.lastSearchText === i) return r.lastSearchResult;
                r.lastSearchText = i;
                let a = e.getAttribute("data-filterable-for") || "",
                    o = document.getElementById(a);
                tB.abort(), tB = new AbortController;
                let s = {
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        signal: tB.signal
                    },
                    l = n.searchParams || new URLSearchParams;
                l.set("q", t), l.set("typeAhead", "true"), n.search = l.toString(), o?.classList.add("is-loading");
                let c = await fetch(n.toString(), s);
                return r.lastSearchResult = await c.json(), o?.classList.remove("is-loading"), r.lastSearchResult
            }
            async function tG(e, t) {
                let n = parseInt(e.getAttribute("data-filterable-limit"), 10) || null,
                    r = 0;
                switch (e.getAttribute("data-filterable-type")) {
                    case "fuzzy-prio": {
                        let i = t.toLowerCase();
                        r = t_(e, t, {
                            limit: n,
                            sortKey: e => {
                                let t = e.getAttribute("data-prio-filter-value").toLowerCase().trim(),
                                    n = e.textContent.toLowerCase().trim(),
                                    r = 2 * (0, tC.EW)(t, i, .01),
                                    a = (0, tC.EW)(n, i, .01);
                                return r > a && (a = r), a > 0 ? {
                                    score: a,
                                    text: n
                                } : null
                            }
                        });
                        break
                    }
                    case "fuzzy": {
                        let i = t.toLowerCase();
                        r = t_(e, t, {
                            limit: n,
                            sortKey: e => {
                                let t = e.hasAttribute("data-filter-value") ? e.getAttribute("data-filter-value").toLowerCase().trim() : e.textContent.toLowerCase().trim(),
                                    n = (0, tC.EW)(t, i);
                                return n > 0 ? {
                                    score: n,
                                    text: t
                                } : null
                            }
                        });
                        break
                    }
                    case "substring":
                        r = tq(e, t.toLowerCase(), tZ, {
                            limit: n
                        });
                        break;
                    case "substring-memory":
                        r = await tD(e, t, {
                            limit: n
                        });
                        break;
                    case "labels-typeahead":
                        r = await tz(e, t, {
                            limit: n
                        });
                        break;
                    default:
                        r = tq(e, t.toLowerCase(), tK, {
                            limit: n
                        })
                }
                return e.classList.toggle("filterable-active", t.length > 0), e.classList.toggle("filterable-empty", 0 === r), r
            }

            function tK(e, t) {
                return e.textContent.toLowerCase().trim().startsWith(t)
            }

            function tZ(e, t) {
                if (e.hasAttribute("data-skip-substring-filter") || e.classList.contains("select-menu-no-results")) return null;
                let n = e.querySelector("[data-filterable-item-text]") || e;
                return n.textContent.toLowerCase().trim().includes(t)
            }(0, T.N7)(".js-filterable-field", {
                constructor: HTMLInputElement,
                initialize(e) {
                    e.autocomplete || (e.autocomplete = "off");
                    let t = e.hasAttribute("type-ahead") ? 200 : null,
                        n = e.value;
                    async function r(e) {
                        n !== e.value && (n = e.value, await (0, D.gJ)(), (0, w.f)(e, "filterable:change"))
                    }
                    async function i() {
                        n = e.value, await (0, D.gJ)(), (0, w.f)(e, "filterable:change")
                    }
                    return {
                        add(e) {
                            e.addEventListener("focus", i), (0, G.oq)(e, r, {
                                wait: t
                            }), document.activeElement === e && i()
                        },
                        remove(e) {
                            e.removeEventListener("focus", i), (0, G.iU)(e, r)
                        }
                    }
                }
            }), (0, w.on)("filterable:change", ".js-filterable-field", async function(e) {
                let t = e.currentTarget,
                    n = t.value.trim().toLowerCase(),
                    r = document.querySelectorAll(`[data-filterable-for="${t.id}"]`);
                for (let e of r) {
                    let r = await tG(e, n);
                    if (-1 === r) return;
                    document.activeElement && t === document.activeElement && (0, C.x)(`${r} results found.`), e.dispatchEvent(new CustomEvent("filterable:change", {
                        bubbles: !0,
                        cancelable: !1,
                        detail: {
                            inputField: t
                        }
                    }))
                }
            }), (0, w.on)("filterable:change", "details-menu .select-menu-list", function(e) {
                let t = e.currentTarget,
                    n = t.querySelector(".js-new-item-form");
                n && function(e, t, n) {
                    let r = n.length > 0 && ! function(e, t) {
                        for (let n of e.querySelectorAll("[data-menu-button-text]")) {
                            let e = n.textContent.toLowerCase().trim();
                            if (e === t.toLowerCase()) return !0
                        }
                        return !1
                    }(e, n);
                    if (e.classList.toggle("is-showing-new-item-form", r), !r) return;
                    t.querySelector(".js-new-item-name").textContent = n;
                    let i = t.querySelector(".js-new-item-value");
                    (i instanceof HTMLInputElement || i instanceof HTMLButtonElement) && (i.value = n)
                }(t, n, e.detail.inputField.value)
            }), (0, T.N7)("tab-container .select-menu-list .filterable-empty, details-menu .select-menu-list .filterable-empty", {
                add(e) {
                    let t = e.closest(".select-menu-list");
                    t.classList.add("filterable-empty")
                },
                remove(e) {
                    let t = e.closest(".select-menu-list");
                    t.classList.remove("filterable-empty")
                }
            });
            var tJ = n(3126),
                tQ = n(81574);

            function tY() {
                let e = document.firstElementChild;
                !e.classList.contains("js-skip-scroll-target-into-view") && (0, tJ.lA)(document) && (0, tJ.kc)(document)
            }(0, tQ.Z)(tY), (0, w.on)("click", 'a[href^="#"]', function(e) {
                let {
                    currentTarget: t
                } = e;
                t instanceof HTMLAnchorElement && setTimeout(tY, 0)
            }), (0, w.on)("click", ".js-flash-close", function(e) {
                let t = e.currentTarget.closest(".flash-messages"),
                    n = e.currentTarget.closest(".flash");
                n.remove(), t && !t.querySelector(".flash") && t.remove()
            }), async function() {
                await ea.C;
                let e = document.querySelector('.js-flash-alert[role="alert"]');
                e && setTimeout(() => {
                    ! function(e) {
                        let t = document.createTextNode("\xa0"),
                            n = document.createElement("span");
                        n.classList.add("sr-only"), n.appendChild(t), e.appendChild(n)
                    }(e)
                }, 200)
            }();
            var t0 = n(69567);
            let t1 = ["flash-notice", "flash-error", "flash-message", "flash-warn"];
            (0, T.N7)("template.js-flash-template", {
                constructor: HTMLTemplateElement,
                add(e) {
                    ! function(e) {
                        for (let {
                                key: t,
                                value: n
                            }
                            of t1.flatMap(ed.$1)) {
                            let r;
                            (0, ed.kT)(t);
                            try {
                                r = atob(decodeURIComponent(n))
                            } catch {
                                continue
                            }
                            e.after(new t0.R(e, {
                                className: t,
                                message: r
                            }))
                        }
                    }(e)
                }
            });
            let t4 = new WeakMap;
            document.addEventListener("focus", function(e) {
                let t = e.target;
                t instanceof Element && !t4.get(t) && ((0, w.f)(t, "focusin:delay"), t4.set(t, !0))
            }, {
                capture: !0
            }), document.addEventListener("blur", function(e) {
                setTimeout(function() {
                    let t = e.target;
                    t instanceof Element && t !== document.activeElement && ((0, w.f)(t, "focusout:delay"), t4.delete(t))
                }, 200)
            }, {
                capture: !0
            }), (0, S.AC)(".js-form-toggle-target", async function(e, t) {
                try {
                    await t.text()
                } catch {
                    return
                }
                let n = e.closest(".js-form-toggle-container");
                n.querySelector(".js-form-toggle-target[hidden]").hidden = !1, e.hidden = !0;
                let r = e.getAttribute("data-sr-feedback") || "";
                r && (0, C.x)(r)
            });
            var t7 = n(97895);

            function t2(e) {
                e instanceof CustomEvent && (0, C.x)(`${e.detail} results found.`)
            }

            function t5(e) {
                let t = document.querySelectorAll(".js-hook-event-checkbox");
                for (let n of t) n.checked = n.matches(e)
            }(0, T.N7)("fuzzy-list", {
                constructor: t7.Z,
                subscribe: e => (0, F.RB)(e, "fuzzy-list-sorted", t2)
            }), (0, w.on)("click", ".email-hidden-toggle", function(e) {
                let t = e.currentTarget.nextElementSibling;
                t instanceof HTMLElement && (t.style.display = "", t.classList.toggle("expanded"), e.preventDefault())
            }), n(20332), (0, T.N7)(".js-hook-url-field", {
                    constructor: HTMLInputElement,
                    add(e) {
                        function t() {
                            let t;
                            let n = e.form;
                            if (!n) return;
                            try {
                                t = new URL(e.value)
                            } catch (e) {}
                            let r = n.querySelector(".js-invalid-url-notice");
                            r instanceof HTMLElement && (r.hidden = !!("" === e.value || t && /^https?:/.test(t.protocol)));
                            let i = n.querySelector(".js-insecure-url-notice");
                            i instanceof HTMLElement && t && e.value && (i.hidden = /^https:$/.test(t.protocol));
                            let a = n.querySelector(".js-ssl-hook-fields");
                            a instanceof HTMLElement && (a.hidden = !(t && "https:" === t.protocol))
                        }(0, G.oq)(e, t), t()
                    }
                }), (0, w.on)("change", ".js-hook-event-choice", function(e) {
                    let t = e.currentTarget,
                        n = t.checked && "custom" === t.value,
                        r = t.closest(".js-hook-events-field");
                    if (r && r.classList.toggle("is-custom", n), t.checked) {
                        if (n) {
                            let e = document.querySelector(".js-hook-wildcard-event");
                            e.checked = !1
                        } else "push" === t.value ? t5('[value="push"]') : "all" === t.value && t5(".js-hook-wildcard-event")
                    }
                }), (0, w.on)("click", ".js-hook-deliveries-pagination-button", async function(e) {
                    let t = e.currentTarget;
                    t.disabled = !0;
                    let n = t.parentElement,
                        r = t.getAttribute("data-url");
                    n.before(await (0, tm.a_)(document, r)), n.remove()
                }), (0, S.AC)(".js-redeliver-hook-form", async function(e, t) {
                    let n;
                    try {
                        n = await t.html()
                    } catch (t) {
                        e.classList.add("failed");
                        return
                    }
                    let r = document.querySelector(".js-hook-deliveries-container");
                    r.replaceWith(n.html)
                }),
                function() {
                    let e = document.getElementById("insecure_ssl_verification"),
                        t = document.getElementById("insecure_ssl_0"),
                        n = document.getElementById("insecure_ssl_1");
                    e && t && n && (n.addEventListener("change", n => {
                        n.stopPropagation(), t.checked = !0, e instanceof HTMLDialogElement ? e.showModal() : e.show()
                    }), e.addEventListener("close", () => {
                        n.checked = !0
                    }))
                }();
            var t9 = n(67044);
            (0, T.N7)("[data-hotkey]", {
                constructor: HTMLElement,
                add(e) {
                    if ((0, e9.Ty)())(0, t9.N9)(e);
                    else {
                        let t = e.getAttribute("data-hotkey");
                        if (t) {
                            let n = function(e) {
                                let t = (0, t9.DV)(e);
                                return t.filter(e => (0, e9.YE)(e)).join(",")
                            }(t);
                            n.length > 0 ? (e.setAttribute("data-hotkey", n), (0, t9.N9)(e)) : (e.removeAttribute("data-hotkey"), (0, t9.Tz)(e))
                        }
                    }
                },
                remove(e) {
                    (0, t9.Tz)(e)
                }
            });
            var t3 = n(29764);
            let t6 = document.querySelector(".js-hovercard-content");
            (0, T.N7)(".js-hovercard-content", e => {
                t6 = e
            });
            let t8 = (0, eK.Z)(tm.a_),
                ne = null,
                nt = !1,
                nn = !1,
                nr = 0;

            function ni(e) {
                return "Popover-message--" + e
            }

            function na() {
                t6 instanceof HTMLElement && (t6.style.display = "none", t6.children[0].textContent = "", t6.removeAttribute("data-hovercard-target-url"), ne = null, a = null)
            }
            async function no(e, t) {
                let n;
                let r = "ontouchstart" in document;
                if (r) return;
                let i = e.currentTarget;
                if (e instanceof MouseEvent && (nr = e.clientX), !(i instanceof Element) || a === i || i.closest(".js-hovercard-content") || ! function(e) {
                        let t = e.getAttribute("data-hovercard-type");
                        return "pull_request" === t || "issue" === t ? !!e.closest("[data-issue-and-pr-hovercards-enabled]") : "team" === t ? !!e.closest("[data-team-hovercards-enabled]") : "repository" === t ? !!e.closest("[data-repository-hovercards-enabled]") : "commit" === t ? !!e.closest("[data-commit-hovercards-enabled]") : "project" === t ? !!e.closest("[data-project-hovercards-enabled]") : "discussion" === t ? !!e.closest("[data-discussion-hovercards-enabled]") : "acv_badge" === t ? !!e.closest("[data-acv-badge-hovercards-enabled]") : "sponsors_listing" !== t || !!e.closest("[data-sponsors-listing-hovercards-enabled]")
                    }(i)) return;
                na(), a = i, ne = document.activeElement;
                let o = function(e) {
                    let t = e.getAttribute("data-hovercard-url");
                    if (t) {
                        let n = function(e) {
                            let t = e.closest("[data-hovercard-subject-tag]");
                            if (t) return t.getAttribute("data-hovercard-subject-tag");
                            let n = document.head && document.head.querySelector('meta[name="hovercard-subject-tag"]');
                            return n ? n.getAttribute("content") : null
                        }(e);
                        if (n) {
                            let e = new URL(t, window.location.origin),
                                r = new URLSearchParams(e.search.slice(1));
                            return r.append("subject", n), r.append("current_path", window.location.pathname + window.location.search), e.search = r.toString(), e.toString()
                        }
                        return t
                    }
                    return ""
                }(i);
                try {
                    let r = new Promise(e => window.setTimeout(e, t, 0));
                    await r, a || "focusin" !== e.type || (a = e.target), i === a && (n = await t8(document, o))
                } catch (t) {
                    let e = t.response;
                    if (e && 404 === e.status) i.setAttribute("aria-label", "Hovercard is unavailable"), i.classList.add("tooltipped", "tooltipped-ne");
                    else if (e && 410 === e.status) {
                        let t = await e.clone().json();
                        i.setAttribute("aria-label", t.message), i.classList.add("tooltipped", "tooltipped-ne")
                    }
                    return
                }
                i === a && n && (! function(e, t) {
                    if (!(t6 instanceof HTMLElement)) return;
                    let n = t6.children[0];
                    n.textContent = "";
                    let r = document.createElement("div");
                    for (let t of e.children) r.appendChild(t.cloneNode(!0));
                    n.appendChild(r),
                        function(e, t) {
                            if (!(t6 instanceof HTMLElement)) return;
                            t6.style.visibility = "hidden", t6.style.display = "block", t.classList.remove(ni("bottom-left"), ni("bottom-right"), ni("right-top"), ni("right-bottom"), ni("top-left"), ni("top-right"));
                            let {
                                containerTop: n,
                                containerLeft: r,
                                contentClassSuffix: i
                            } = function(e) {
                                let {
                                    width: t,
                                    height: n
                                } = t6.getBoundingClientRect(), {
                                    left: r,
                                    top: i,
                                    height: a,
                                    width: o
                                } = function(e) {
                                    let t = e.getClientRects(),
                                        n = t[0] || e.getBoundingClientRect() || {
                                            top: 0,
                                            left: 0,
                                            height: 0,
                                            width: 0
                                        };
                                    if (t.length > 0) {
                                        for (let e of t)
                                            if (e.left < nr && e.right > nr) {
                                                n = e;
                                                break
                                            }
                                    }
                                    return n
                                }(e), s = i > n, l = e.classList.contains("js-hovercard-left");
                                if (l) {
                                    let e = i + a / 2;
                                    return {
                                        containerTop: s ? e - n + 17 + 8 : e - 17 - 8,
                                        containerLeft: r - t - 12,
                                        contentClassSuffix: s ? "right-bottom" : "right-top"
                                    }
                                } {
                                    let e = window.innerWidth - r > t,
                                        l = r + o / 2;
                                    return {
                                        containerTop: s ? i - n - 12 : i + a + 12,
                                        containerLeft: e ? l - 24 : l - t + 24,
                                        contentClassSuffix: s ? e ? "bottom-left" : "bottom-right" : e ? "top-left" : "top-right"
                                    }
                                }
                            }(e);
                            t.classList.add(ni(i)), t6.style.top = `${n+window.pageYOffset}px`, t6.style.left = `${r+window.pageXOffset}px`,
                                function(e, t) {
                                    let n = e.getAttribute("data-hovercard-z-index-override");
                                    n ? t.style.zIndex = n : t.style.zIndex = "100"
                                }(e, t6), t6.style.visibility = ""
                        }(t, n), setTimeout(() => {
                            if (document.body && document.body.contains(r)) {
                                let e = r.querySelector("[data-hydro-view]");
                                e instanceof HTMLElement && (0, t3.Fk)(e)
                            }
                        }, 500), (0, C.N)(r), t6.style.display = "block", t6.setAttribute("data-hovercard-target-url", t.getAttribute("data-hovercard-url") || "")
                }(n, i), e instanceof KeyboardEvent && t6 instanceof HTMLElement && t6.focus())
            }

            function ns(e) {
                if (a) {
                    if (e instanceof MouseEvent && e.relatedTarget instanceof HTMLElement) {
                        let t = e.relatedTarget;
                        if (t.closest(".js-hovercard-content") || t.closest("[data-hovercard-url]")) return
                    } else e instanceof KeyboardEvent && ne instanceof HTMLElement && ne.focus();
                    na()
                }
            }

            function nl(e) {
                e instanceof KeyboardEvent && "Escape" === e.key && ns(e)
            }

            function nc() {
                o && clearTimeout(o)
            }

            function nu(e) {
                nt = !0, no(e, 0)
            }

            function nd(e) {
                nt = !1, nn || ns(e)
            }

            function nm(e) {
                nn = !1, nt || function(e) {
                    let t = a;
                    o = window.setTimeout(() => {
                        a === t && ns(e)
                    }, 100)
                }(e)
            }

            function nf(e) {
                nn = !0, no(e, 250)
            }

            function nh() {
                nn = !0, nc()
            }

            function np() {
                nt = !0, nc()
            }
            t6 && ((0, T.N7)("[data-hovercard-url]", {
                subscribe: e => (0, F.qC)((0, F.RB)(e, "mouseover", nf), (0, F.RB)(e, "focusin", nu), (0, F.RB)(e, "mouseleave", nm), (0, F.RB)(e, "focusout", nd), (0, F.RB)(e, "keyup", nl))
            }), (0, T.N7)("[data-hovercard-url]", {
                remove(e) {
                    a === e && na()
                }
            }), (0, T.N7)(".js-hovercard-content", {
                subscribe: e => (0, F.qC)((0, F.RB)(e, "mouseover", nh), (0, F.RB)(e, "focusin", np), (0, F.RB)(e, "mouseleave", nm), (0, F.RB)(e, "focusout", nd), (0, F.RB)(e, "keyup", nl))
            }), (0, w.on)("menu:activated", "details", na), window.addEventListener("turbo:load", na), window.addEventListener("statechange", na), window.addEventListener("focusin", nd));
            var ng = n(99484);
            !async function() {
                document.addEventListener(ta.Q.FRAME_UPDATE, () => (0, E.YT)({
                    turbo: "true"
                })), document.addEventListener(ta.Q.SUCCESS, () => {
                    "turbo.frame" !== (0, ng.Gj)() && (0, E.YT)({
                        turbo: "true"
                    })
                }), await ea.C, (0, E.YT)()
            }(), (0, w.on)("click", "[data-octo-click]", function(e) {
                let t = e.currentTarget;
                if (!(t instanceof HTMLElement)) return;
                let n = t.getAttribute("data-octo-click") || "",
                    r = {};
                if (t.hasAttribute("data-ga-click")) {
                    let e = t.getAttribute("data-ga-click"),
                        n = e.split(",");
                    r.category = n[0].trim(), r.action = n[1].trim()
                }
                if (t.hasAttribute("data-octo-dimensions")) {
                    let e = t.getAttribute("data-octo-dimensions").split(",");
                    for (let t of e) {
                        let [e, n] = t.split(/:(.+)/);
                        e && (r[e] = n || "")
                    }
                }(0, E.qP)(n, r)
            }), (0, w.on)("click", "[data-hydro-click]", function(e) {
                let t = e.currentTarget,
                    n = t.getAttribute("data-hydro-click") || "",
                    r = t.getAttribute("data-hydro-click-hmac") || "",
                    i = t.getAttribute("data-hydro-client-context") || "";
                (0, t3.$S)(n, r, i)
            }), (0, S.AC)(".js-immediate-updates", async function(e, t) {
                let n;
                try {
                    let e = await t.json();
                    n = e.json.updateContent
                } catch (e) {
                    e.response.json && (n = e.response.json.updateContent)
                }
                if (n)
                    for (let e in n) {
                        let t = n[e],
                            r = document.querySelector(e);
                        r instanceof HTMLElement && (0, ey.Of)(r, t)
                    }
            });
            var nb = n(46426);
            async function ny() {
                if (!1 === (0, nb.c)("IMAGE_METRIC_TRACKING")) return;
                let e = Array.from(document.querySelectorAll("img.js-img-time")).slice(0, 5),
                    t = Date.now(),
                    n = [];
                await Promise.all(e.map(e => nv(e, t, n))), n.length > 0 && (0, q.b)({
                    transparentRedirectTimings: n
                })
            }
            async function nv(e, t, n) {
                let r = /\/assets\/storage\/user\/([0-9]+)\/files\/([{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?)/,
                    i = e.getAttribute("src");
                if (!i) return;
                let a = new URL(i, window.location.origin),
                    o = r.test(a.pathname) ? r : /assets\/([0-9]+)\/([{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?)/,
                    [, s, l] = a.pathname.match(o) || [];
                if (!s || !l) return;
                await fetch(`/assets/measure/${s}/${l}`);
                let c = Date.now() - t;
                n.push({
                    duration: c,
                    fileGUID: l,
                    userID: s
                })
            }
            document.addEventListener("DOMContentLoaded", ny);
            var nw = n(52191);
            (0, T.N7)("[data-indeterminate]", {
                constructor: HTMLInputElement,
                initialize(e) {
                    e.indeterminate = !0
                }
            });
            var nS = n(3626);

            function nE() {
                n.e("app_assets_modules_github_jump-to_ts").then(n.bind(n, 65674))
            }(0, T.N7)(".js-jump-to-field", {
                constructor: HTMLInputElement,
                add(e) {
                    e.addEventListener("focusin", nE, {
                        once: !0
                    }), (0, nS.Nc)(window.location.pathname)
                }
            });
            let nL = !1;
            async function nj() {
                if (nL) return;
                nL = !0;
                let e = document.querySelector("meta[name=github-keyboard-shortcuts]"),
                    t = {
                        contexts: e.content
                    },
                    n = `/site/keyboard_shortcuts?${new URLSearchParams(t).toString()}`,
                    r = await (0, td.W)({
                        content: (0, tm.a_)(document, n),
                        labelledBy: "keyboard-shortcuts-heading"
                    });
                r.style.width = "800px", r.addEventListener("dialog:remove", function() {
                    nL = !1
                }, {
                    once: !0
                })
            }

            function nA(e) {
                let t = e.currentTarget;
                if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;
                let n = parseInt(t.getAttribute("data-input-max-length") || "", 10),
                    r = parseInt(t.getAttribute("data-warning-length") || "", 10) || 5,
                    i = t.value,
                    a = i.replace(/(\r\n|\n|\r)/g, "\r\n"),
                    o = n - a.length;
                if (o <= 0) {
                    let e = a.substr(0, n);
                    e.endsWith("\r") ? (e = e.substr(0, n - 1), o = 1) : o = 0, t.value = e
                }
                let s = t.getAttribute("data-warning-text"),
                    l = t.closest(".js-length-limited-input-container"),
                    c = l.querySelector(".js-length-limited-input-warning");
                o <= r ? (c.textContent = s.replace(/{{remaining}}/g, `${o}`), c.classList.remove("d-none")) : (c.textContent = "", c.classList.add("d-none"))
            }(0, w.on)("click", ".js-keyboard-shortcuts", nj), (0, nb.c)("react_keyboard_shortcuts_dialog") || document.addEventListener("keydown", e => {
                !(e instanceof KeyboardEvent) || !(0, e9.Zf)(e) || e.target instanceof Node && (0, P.sw)(e.target) || "Shift+?" !== (0, t9.EL)(e) || nj()
            }), (0, T.N7)(".js-modifier-key", {
                constructor: HTMLElement,
                add(e) {
                    if (/Macintosh/.test(navigator.userAgent)) {
                        let t = e.textContent;
                        t && (t = (t = t.replace(/ctrl/, "\u2318")).replace(/alt/, "\u2325"), e.textContent = t)
                    }
                }
            }), (0, T.N7)(".js-length-limited-input", {
                add(e) {
                    e.addEventListener("input", nA), e.addEventListener("change", nA)
                },
                remove(e) {
                    e.removeEventListener("input", nA), e.removeEventListener("change", nA)
                }
            }), (0, w.on)("click", ".js-member-search-filter", function(e) {
                e.preventDefault();
                let t = e.currentTarget.getAttribute("data-filter"),
                    n = e.currentTarget.closest("[data-filter-on]"),
                    r = n.getAttribute("data-filter-on"),
                    i = document.querySelector(".js-member-filter-field"),
                    a = i.value,
                    o = RegExp(`${r}:(?:[a-z]|_|((').*(')))+`),
                    s = a.toString().trim().replace(o, "");
                i.value = `${s} ${t}`.replace(/\s\s/, " ").trim(), i.focus(), (0, w.f)(i, "input")
            }), (0, S.AC)(".js-notice-dismiss", async function(e, t) {
                await t.text();
                let n = e.closest(".js-notice");
                n.remove()
            }), (0, w.on)("submit", ".js-notice-dismiss-remote", async function(e) {
                let t;
                let n = e.currentTarget;
                e.preventDefault();
                try {
                    t = await fetch(n.action, {
                        method: n.method,
                        body: new FormData(n),
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch {
                    (0, v.v)();
                    return
                }
                if (t && !t.ok)(0, v.v)();
                else {
                    let e = n.closest(".js-notice");
                    e.remove()
                }
            }), (0, w.on)("click", ".js-github-dev-shortcut", function(e) {
                for (let t of (e.preventDefault(), document.querySelectorAll("textarea.js-comment-field")))
                    if (t.value && function(e) {
                            try {
                                let t = e.getBoundingClientRect();
                                if (0 === t.height && 0 === t.width || "0" === e.style.opacity || "hidden" === e.style.visibility) return !1
                            } catch {}
                            return !0
                        }(t) && !confirm("Are you sure you want to open github.dev?")) return;
                let t = e.currentTarget;
                t.pathname = window.location.pathname, t.hash = window.location.hash, window.location.href = t.href
            }), (0, w.on)("click", ".js-github-dev-new-tab-shortcut", function(e) {
                let t = e.currentTarget;
                t.pathname = window.location.pathname, t.hash = window.location.hash
            }), (0, w.on)("click", ".js-permalink-shortcut", function(e) {
                let t = e.currentTarget;
                try {
                    (0, $.lO)(null, "", t.href + window.location.hash)
                } catch (e) {
                    window.location.href = t.href + window.location.hash
                }
                for (let e of document.querySelectorAll(".js-permalink-replaceable-link")) e instanceof HTMLAnchorElement && (e.href = e.getAttribute("data-permalink-href"));
                e.preventDefault()
            }), (0, S.AC)(".js-permission-menu-form", async function(e, t) {
                let n;
                let r = e.querySelector(".js-permission-success"),
                    i = e.querySelector(".js-permission-error");
                r.hidden = !0, i.hidden = !0, e.classList.add("is-loading");
                try {
                    n = await t.json()
                } catch (t) {
                    e.classList.remove("is-loading"), i.hidden = !1;
                    return
                }
                e.classList.remove("is-loading"), r.hidden = !1;
                let a = e.closest(".js-org-repo");
                if (a) {
                    let e = n.json;
                    a.classList.toggle("with-higher-access", e.members_with_higher_access)
                }
            });
            let nT = null,
                nq = "last_turbo_request",
                nk = "turbo_start",
                nC = "turbo_end";
            async function nM() {
                if (await (0, D.gJ)(), !window.performance.getEntriesByName(nk).length) return;
                window.performance.mark(nC), window.performance.measure(nq, nk, nC);
                let e = window.performance.getEntriesByName(nq),
                    t = e.pop(),
                    n = t ? t.duration : null;
                n && (nT && (0, q.b)({
                    requestUrl: nT,
                    turboDuration: Math.round(n)
                }), window.performance.clearMarks(nk), window.performance.clearMarks(nC), window.performance.clearMeasures(nq))
            }
            "getEntriesByName" in window.performance && (document.addEventListener("turbo:before-fetch-request", function(e) {
                e instanceof CustomEvent && e.detail?.url && !e.defaultPrevented && (window.performance.mark(nk), nT = e.detail.url)
            }), document.addEventListener("turbo:render", nM)), (0, T.N7)("body.js-print-popup", () => {
                window.print(), setTimeout(window.close, 1e3)
            }), (0, T.N7)("poll-include-fragment[data-redirect-url]", function(e) {
                let t = e.getAttribute("data-redirect-url");
                e.addEventListener("load", function() {
                    window.location.href = t
                })
            }), (0, T.N7)("poll-include-fragment[data-reload]", function(e) {
                e.addEventListener("load", function() {
                    window.location.reload()
                })
            }), (0, B.w4)("keydown", ".js-quick-submit", function(e) {
                (function(e) {
                    let t = e.target;
                    if ((e.ctrlKey || e.metaKey) && "Enter" === e.key) {
                        let n = t.form,
                            r = n.querySelector("input[type=submit], button[type=submit]");
                        if (e.shiftKey) {
                            let e = n.querySelector(".js-quick-submit-alternative");
                            (e instanceof HTMLInputElement || e instanceof HTMLButtonElement) && !e.disabled && (0, P.Bt)(n, e)
                        } else(r instanceof HTMLInputElement || r instanceof HTMLButtonElement) && r.disabled || (0, P.Bt)(n);
                        e.preventDefault()
                    }
                })(e)
            });
            var nx = n(55498);

            function n_(e) {
                return "DIV" === e.nodeName && e.classList.contains("highlight")
            }(0, T.N7)(".js-comment-quote-reply", function(e) {
                e.hidden = e.closest(".js-quote-selection-container")?.querySelector(".js-inline-comment-form-container textarea, .js-new-comment-form textarea") == null
            });
            let nR = {
                PRE(e) {
                    let t = e.parentElement;
                    if (t && n_(t)) {
                        let n = t.className.match(/highlight-source-(\S+)/),
                            r = n ? n[1] : "",
                            i = (e.textContent || "").replace(/\n+$/, "");
                        e.textContent = `\`\`\`${r}
${i}
\`\`\``, e.append("\n\n")
                    }
                    return e
                },
                A(e) {
                    let t = e.textContent || "";
                    return e.classList.contains("user-mention") || e.classList.contains("team-mention") ? t : e.classList.contains("issue-link") && /^#\d+$/.test(t) ? t : e
                },
                IMG(e) {
                    let t = e.getAttribute("alt");
                    return t && e.classList.contains("emoji") ? t : e
                },
                DIV(e) {
                    if (e.classList.contains("js-suggested-changes-blob")) e.remove();
                    else if (e.classList.contains("blob-wrapper-embedded")) {
                        let t = e.parentElement,
                            n = t.querySelector("a[href]"),
                            r = document.createElement("p");
                        r.textContent = n.href, t.replaceWith(r)
                    } else if (e.classList.contains("js-render-enrichment-target")) {
                        let t = e.closest(".js-render-needs-enrichment"),
                            n = t.getAttribute("data-type"),
                            r = e.getAttribute("data-plain"),
                            i = document.createElement("pre");
                        return i.textContent = `\`\`\`${n}
${r}\`\`\``, i
                    }
                    return e
                }
            };
            (0, w.on)("click", ".js-comment-quote-reply", function({
                isTrusted: e,
                currentTarget: t
            }) {
                let n = t,
                    r = new nx.p;
                if (!e) {
                    if (r.range.collapsed || null === r.range.startContainer.parentElement) return;
                    n = r.range.startContainer.parentElement
                }
                let i = n.closest(".js-comment"),
                    a = i.querySelector(".js-comment-body"),
                    o = i.querySelector(".js-comment-body").cloneNode(!0),
                    l = i.closest(".js-quote-selection-container"),
                    c = a.querySelectorAll("button.js-convert-to-issue-button, span.js-clear");
                for (let e of c) e.remove();
                if (l.hasAttribute("data-quote-markdown") && (r = new nx.I(l.getAttribute("data-quote-markdown") || "", e => {
                        let t = r.range.startContainer.parentElement,
                            n = t && t.closest("pre");
                        if (n instanceof HTMLElement) {
                            let t = n.parentElement;
                            if (t && n_(t)) {
                                let n = document.createElement("div");
                                n.className = t.className, n.appendChild(e), e.appendChild(n)
                            }
                        }! function(e) {
                            let t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, {
                                    acceptNode: e => e.nodeName in nR && ("IMG" === e.nodeName || null != e.firstChild) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                                }),
                                n = [],
                                r = t.nextNode();
                            for (; r;) r instanceof HTMLElement && n.push(r), r = t.nextNode();
                            for (let e of (n.reverse(), n)) e.replaceWith(nR[e.nodeName](e))
                        }(e)
                    })), s && a.contains(s.anchorNode) && !s.range.collapsed && "" !== s.range.toString().trim() ? r.range = s.range : (r.range.collapsed || "" === r.range.toString().trim()) && r.select(a), r.closest(".js-quote-selection-container") !== l) return;
                let u = r.range;
                for (let e of (l.dispatchEvent(new CustomEvent("quote-selection", {
                        bubbles: !0,
                        detail: r
                    })), r.range = u, Array.from(l.querySelectorAll("textarea")).reverse()))
                    if ((0, K.Z)(e) && !e.closest("tracking-block")) {
                        r.insert(e);
                        break
                    } i.querySelector(".js-comment-body").replaceWith(o)
            }), document.addEventListener("selectionchange", (0, W.D)(function() {
                let e;
                let t = window.getSelection();
                try {
                    e = t.getRangeAt(0)
                } catch {
                    l = null;
                    return
                }
                l = {
                    anchorNode: t.anchorNode,
                    range: e
                }
            }, 100)), document.addEventListener("toggle", () => {
                s = l
            }, {
                capture: !0
            });
            let nN = new ResizeObserver(e => {
                for (let t of e) t.contentRect.height > 40 && function(e) {
                    let t = .7 * e.offsetWidth,
                        n = e.querySelectorAll(".js-reaction-group-button"),
                        r = e.querySelector(".js-all-reactions-popover"),
                        i = 0;
                    for (let e of n) i += e.clientWidth;
                    if (t < (i += r?.clientWidth || 0)) {
                        let e = t;
                        for (let t of (r && (r.removeAttribute("hidden"), e -= r.offsetWidth), n)) {
                            let n = t.offsetWidth;
                            n > e ? t.setAttribute("hidden", "hidden") : t.removeAttribute("hidden"), e -= n
                        }
                    }
                }(t.target)
            });
            (0, T.N7)(".js-reactions-container", function(e) {
                nN.observe(e)
            });
            let nH = (0, W.D)(async e => {
                let t;
                let n = e.target;
                try {
                    t = await fetch(n.action, {
                        method: n.method,
                        headers: new Headers({
                            "X-Requested-With": "XMLHttpRequest"
                        }),
                        body: new FormData(n)
                    })
                } catch {
                    (0, v.v)()
                }
                if (t && !t.ok && (0, v.v)(), t && 200 === t.status) {
                    let e = await t.json(),
                        r = n.closest(".js-comment"),
                        i = r?.querySelector(".js-reactions-container"),
                        a = r?.querySelector(".js-comment-header-reaction-button");
                    if (e && i && a) {
                        let t = (0, I.r)(document, e.reactions_container.trim()),
                            n = (0, I.r)(document, e.comment_header_reaction_button.trim());
                        i.replaceWith(t), a.replaceWith(n)
                    }
                    let o = r?.querySelector(".js-reactions-focus");
                    o && o.focus()
                }
            }, 200);

            function nP(e) {
                let t = e.target,
                    n = t.getAttribute("data-reaction-label"),
                    r = t.closest(".js-add-reaction-popover"),
                    i = r.querySelector(".js-reaction-description");
                i.hasAttribute("data-default-text") || i.setAttribute("data-default-text", i.textContent || ""), i.textContent = n
            }

            function nI(e) {
                let t = e.target.closest(".js-add-reaction-popover"),
                    n = t.querySelector(".js-reaction-description"),
                    r = n.getAttribute("data-default-text");
                r && (n.textContent = r)
            }(0, w.on)("submit", ".js-pick-reaction", e => {
                e.preventDefault(), nH(e)
            }), (0, w.on)("toggle", ".js-reaction-popover-container", function(e) {
                let t = e.currentTarget.hasAttribute("open");
                for (let n of e.target.querySelectorAll(".js-reaction-option-item")) t ? (n.addEventListener("mouseenter", nP), n.addEventListener("mouseleave", nI)) : (n.removeEventListener("mouseenter", nP), n.removeEventListener("mouseleave", nI))
            }, {
                capture: !0
            });
            var n$ = n(5582);
            if ((0, w.on)("click", "form button:not([type]), form button[type=submit], form input[type=submit]", function(e) {
                    let t = e.currentTarget,
                        n = t.form;
                    n && !e.defaultPrevented && (0, n$.j)(t)
                }), (0, S.AC)("form[data-remote]", function(e, t, n) {
                    let r = e.getAttribute("data-type");
                    "json" === r && n.headers.set("Accept", "application/json"), (0, w.f)(e, "deprecatedAjaxSend", {
                        request: n
                    }), t.text().catch(e => {
                        if (e.response) return e.response;
                        throw e
                    }).then(t => {
                        t.status < 300 ? (0, w.f)(e, "deprecatedAjaxSuccess") : (0, w.f)(e, "deprecatedAjaxError", {
                            error: t.statusText,
                            status: t.status,
                            text: t.text
                        })
                    }, t => {
                        (0, w.f)(e, "deprecatedAjaxError", {
                            error: t.message,
                            status: 0,
                            text: null
                        })
                    }).then(() => {
                        (0, w.f)(e, "deprecatedAjaxComplete")
                    })
                }), (0, w.on)("deprecatedAjaxComplete", "form", function({
                    currentTarget: e
                }) {
                    let t = (0, n$.u)(e);
                    t && t.remove()
                }), (0, S.uT)(e => {
                    let t = (0, n$.u)(e);
                    t && t.remove()
                }), (0, S.rK)(tR.Z), (0, w.on)("click", ".js-remote-submit-button", async function(e) {
                    let t;
                    let n = e.currentTarget,
                        r = n.form;
                    e.preventDefault();
                    try {
                        t = await fetch(r.action, {
                            method: r.method,
                            body: new FormData(r),
                            headers: {
                                Accept: "application/json",
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        })
                    } catch {}
                    t && !t.ok && (0, v.v)()
                }), (0, T.N7)(".has-removed-contents", function() {
                    let e;
                    return {
                        add(t) {
                            for (let n of e = Array.from(t.childNodes)) t.removeChild(n);
                            let n = t.closest("form");
                            n && (0, w.f)(n, "change")
                        },
                        remove(t) {
                            for (let n of e) t.appendChild(n);
                            let n = t.closest("form");
                            n && (0, w.f)(n, "change")
                        }
                    }
                }), n(75297), n(93491), (0, S.AC)("form[data-replace-remote-form]", async function(e, t) {
                    e.classList.remove("is-error"), e.classList.add("is-loading");
                    try {
                        let n = e,
                            r = await t.html(),
                            i = e.closest("[data-replace-remote-form-target]");
                        if (i) {
                            let e = i.getAttribute("data-replace-remote-form-target");
                            n = e ? document.getElementById(e) : i
                        }
                        n.replaceWith(r.html)
                    } catch (t) {
                        e.classList.remove("is-loading"), e.classList.add("is-error")
                    }
                }), PerformanceObserver && (PerformanceObserver.supportedEntryTypes || []).includes("longtask")) {
                let e = new PerformanceObserver(function(e) {
                    let t = e.getEntries().map(({
                        name: e,
                        duration: t
                    }) => ({
                        name: e,
                        duration: t,
                        url: window.location.href
                    }));
                    (0, q.b)({
                        longTasks: t
                    })
                });
                e.observe({
                    entryTypes: ["longtask"]
                })
            }
            n(55240);
            var nO = n(28585);
            (0, w.on)("click", ".js-saved-reply-menu.ActionListWrap", function(e) {
                if (!(e.target instanceof Element)) return;
                let t = e.target.closest('button[role="menuitem"]')?.querySelector(".js-saved-reply-body");
                if (!t) return;
                let n = (t.textContent || "").trim(),
                    r = e.target.closest(".js-previewable-comment-form"),
                    i = r.querySelector("textarea.js-comment-field");
                (0, eL.Om)(i, n), e.target.closest("dialog, modal-dialog")?.close(), setTimeout(() => i.focus(), 0)
            }, {
                capture: !0
            }), (0, w.on)("details-menu-select", ".js-saved-reply-menu", function(e) {
                if (!(e.target instanceof Element)) return;
                let t = e.detail.relatedTarget.querySelector(".js-saved-reply-body");
                if (!t) return;
                let n = (t.textContent || "").trim(),
                    r = e.target.closest(".js-previewable-comment-form"),
                    i = r.querySelector("textarea.js-comment-field");
                (0, eL.Om)(i, n), setTimeout(() => i.focus(), 0)
            }, {
                capture: !0
            }), (0, B.w4)("keydown", ".js-saved-reply-shortcut-comment-field", function(e) {
                if ("Control+." === (0, t9.EL)(e)) {
                    let t = e.target.closest(".js-previewable-comment-form"),
                        n = t.querySelector(".js-saved-reply-container");
                    n instanceof HTMLDialogElement ? n.showModal() : n instanceof nO.F ? n.show() : n.setAttribute("open", ""), e.preventDefault()
                }
            }), (0, B.w4)("keydown", ".js-saved-reply-filter-input", function(e) {
                if (/^Control\+[1-9]$/.test((0, t9.EL)(e))) {
                    let t = e.target.closest(".js-saved-reply-container"),
                        n = Number(e.key),
                        r = t.querySelectorAll(`[role="menuitem"][data-shortcut="${n}"]`)[0];
                    r instanceof HTMLElement && (r.click(), e.preventDefault())
                } else if ("Enter" === e.key) {
                    let t = e.target.closest(".js-saved-reply-container"),
                        n = t.querySelectorAll('[role="menuitem"]');
                    n.length > 0 && n[0] instanceof HTMLButtonElement && n[0].click(), e.preventDefault()
                }
            }), (async () => {
                for (let e of (await ea.x, document.querySelectorAll(".js-saved-reply-container"))) {
                    let t = new MutationObserver(t => {
                        for (let n of t)
                            if ("attributes" === n.type && "open" === n.attributeName && null === n.oldValue) {
                                let t = e.querySelector(".js-saved-reply-filter-input");
                                t && t.focus()
                            }
                    });
                    t.observe(e, {
                        attributes: !0
                    })
                }
                let e = document.querySelectorAll(".js-saved-reply-include-fragment");
                for (let t of e) {
                    let e = t.closest(".js-saved-reply-container");
                    t.addEventListener("load", () => {
                        if (e) {
                            let t = e.querySelector(".js-saved-reply-filter-input");
                            t && t.focus()
                        }
                    })
                }
            })();
            var nD = n(56334),
                nB = n(11445);

            function nW(e, t, n, r) {
                let i = (0, nD.M9)(e, e => t.querySelector(`#LC${e}`));
                if (!i) return;
                if (n) {
                    let e = (0, eL.yb)(i.startContainer.textContent, i.startOffset);
                    if (-1 === e) return;
                    i.setStart(i.startContainer, e)
                }
                if (r) {
                    let e = (0, eL.yb)(i.endContainer.textContent, i.endOffset);
                    if (-1 === e) return;
                    i.setEnd(i.endContainer, e)
                }
                let a = document.createElement("span");
                a.classList.add(...["text-bold", "hx_keyword-hl", "rounded-2", "d-inline-block"]), (0, nB.v)(i, a)
            }(0, T.N7)(".js-highlight-code-snippet-columns", function(e) {
                let t = function(e) {
                    let t = parseInt(e.getAttribute("data-start-line")),
                        n = parseInt(e.getAttribute("data-end-line")),
                        r = parseInt(e.getAttribute("data-start-column")),
                        i = parseInt(e.getAttribute("data-end-column"));
                    return t === n && r === i ? null : {
                        start: {
                            line: t,
                            column: r
                        },
                        end: {
                            line: n,
                            column: 0 !== i ? i : null
                        }
                    }
                }(e);
                null !== t && function(e, t) {
                    if (e.start.line !== e.end.line) {
                        let n = {
                            start: {
                                line: e.start.line,
                                column: e.start.column
                            },
                            end: {
                                line: e.start.line,
                                column: null
                            }
                        };
                        nW(n, t, !0, !1);
                        for (let n = e.start.line + 1; n < e.end.line; n += 1) {
                            let e = {
                                start: {
                                    line: n,
                                    column: 0
                                },
                                end: {
                                    line: n,
                                    column: null
                                }
                            };
                            nW(e, t, !1, !1)
                        }
                        let r = {
                            start: {
                                line: e.end.line,
                                column: 0
                            },
                            end: {
                                line: e.end.line,
                                column: e.end.column
                            }
                        };
                        nW(r, t, !1, !0)
                    } else nW(e, t, !0, !0)
                }(t, e)
            }), n(79422), n(82565);
            var nF = n(34090),
                nU = n(27034),
                nz = n(95005);
            async function nV(e) {
                try {
                    await e.text()
                } catch (e) {}
            }

            function nX() {
                let e = function() {
                    let e = new URLSearchParams(window.location.search),
                        t = (0, nF.n)(e);
                    if (t) {
                        let e = new URL(window.location.href, window.location.origin);
                        return e.search = t.toString(), e.toString()
                    }
                }();
                e && (0, $.lO)(null, "", e)
            }
            async function nG() {
                await ea.C;
                let e = document.querySelector(".js-mark-notification-form");
                e instanceof HTMLFormElement && (0, P.Bt)(e)
            }

            function nK(e, t) {
                let n, r;
                if (e.closest(".js-jump-to-field")) return;
                let i = document.querySelector(".js-site-search-form");
                document.querySelector(".js-site-search").classList.toggle("scoped-search", t), t ? (n = i.getAttribute("data-scoped-search-url"), r = e.getAttribute("data-scoped-placeholder")) : (n = i.getAttribute("data-unscoped-search-url"), r = e.getAttribute("data-unscoped-placeholder")), i.setAttribute("action", n), e.setAttribute("placeholder", r)
            }(async function() {
                (0, S.AC)(".js-notification-shelf .js-notification-action form", async function(e, t) {
                    let n = e.hasAttribute("data-redirect-to-inbox-on-submit");
                    if (n) {
                        await nV(t);
                        let e = document.querySelector(".js-notifications-back-to-inbox");
                        e && e.click();
                        return
                    }(0, nz.a)(e, e), await nV(t)
                })
            })(), nX(), document.addEventListener(ta.Q.SUCCESS, nX), document.addEventListener("turbo:before-fetch-request", function(e) {
                let t = (0, nF.I)(e.detail.url.pathname);
                if (t) {
                    let n = new URLSearchParams(e.detail.url.search);
                    for (let [e, r] of Object.entries(t)) r && n.set(e, r);
                    e.detail.url.search = n.toString()
                }
            }), (0, T.N7)(".js-notification-shelf-include-fragment", function(e) {
                if (!(e instanceof nU.Z)) return;
                let t = (0, nF.I)();
                if (!t) return;
                let n = e.getAttribute("data-base-src");
                if (!n) return;
                let r = new URL(n, window.location.origin),
                    i = new URLSearchParams(r.search);
                for (let [e, n] of Object.entries(t)) "string" == typeof n && i.set(e, n);
                r.search = i.toString(), e.setAttribute("src", r.toString())
            }), (0, w.on)("submit", ".js-mark-notification-form", async function(e) {
                let t = e.currentTarget;
                e.preventDefault();
                try {
                    await fetch(t.action, {
                        method: t.method,
                        body: new FormData(t),
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch {}
            }), document.addEventListener(ta.Q.SUCCESS, nG), nG(), (0, B.w4)("keyup", ".js-site-search-field", function(e) {
                let t = e.target,
                    n = 0 === t.value.length;
                n && "Backspace" === e.key && t.classList.contains("is-clearable") && nK(t, !1), n && "Escape" === e.key && nK(t, !0), t.classList.toggle("is-clearable", n)
            }), (0, B.ZG)(".js-site-search-focus", function(e) {
                let t = e.closest(".js-chromeless-input-container");
                t.classList.add("focus"), e.addEventListener("blur", function n() {
                    t.classList.remove("focus"), 0 === e.value.length && e.classList.contains("js-site-search-field") && nK(e, !0), e.removeEventListener("blur", n)
                })
            }), (0, w.on)("submit", ".js-site-search-form", function(e) {
                if (!(e.target instanceof Element)) return;
                let t = e.target.querySelector(".js-site-search-type-field");
                t.value = new URLSearchParams(window.location.search).get("type") || ""
            });
            let nZ = new ResizeObserver(e => {
                for (let {
                        target: t
                    }
                    of e) {
                    let e = t.classList.contains("regular-search-input");
                    (t.classList.contains("sm-search-input") || e) && function(e, t) {
                        window.innerWidth < 768 ? t ? (0, t9.Tz)(e) : (0, t9.N9)(e) : window.innerWidth >= 768 && (t ? (0, t9.N9)(e) : (0, t9.Tz)(e))
                    }(t, e)
                }
            });
            (0, T.N7)(".regular-search-input", {
                constructor: HTMLElement,
                add(e) {
                    nZ.observe(e)
                },
                remove(e) {
                    (0, t9.Tz)(e), nZ.unobserve(e)
                }
            }), (0, T.N7)(".sm-search-input", {
                constructor: HTMLElement,
                add(e) {
                    nZ.observe(e)
                },
                remove(e) {
                    (0, t9.Tz)(e), nZ.unobserve(e)
                }
            }), (0, w.on)("click", ".js-toggle-appheader-search", function() {
                let e = document.querySelector(".js-global-bar-second-row");
                if (e && (e.toggleAttribute("hidden"), !e.getAttribute("hidden"))) {
                    let t = e.querySelector(".js-site-search-focus");
                    t && t.focus()
                }
            });
            var nJ = n(85076);
            (0, T.N7)("textarea.js-size-to-fit", {
                constructor: HTMLTextAreaElement,
                subscribe: nJ.Z
            });
            var nQ = n(87098);
            (0, w.on)("click", ".js-smoothscroll-anchor", function(e) {
                let t = e.currentTarget;
                if (!(t instanceof HTMLAnchorElement)) return;
                let n = (0, nQ.Kt)(document, t.hash);
                if (!n && "#top" === t.hash) {
                    let t = document.querySelector("html");
                    if (t) {
                        let n = t.style.scrollBehavior;
                        t.style.scrollBehavior = "smooth", window.location.hash = "", t.scrollIntoView({
                            behavior: "smooth"
                        }), t.style.scrollBehavior = n, e.preventDefault();
                        return
                    }
                }
                if (!n) return;
                n.focus();
                let r = window.matchMedia("(prefers-reduced-motion: reduce)");
                r && r.matches ? n.scrollIntoView() : n.scrollIntoView({
                    behavior: "smooth"
                }), e.preventDefault()
            });
            let nY = new WeakMap,
                n0 = document.querySelector("#snippet-clipboard-copy-button"),
                n1 = document.querySelector("#snippet-clipboard-copy-button-unpositioned");
            async function n4(e, t) {
                let n = e.getAttribute("data-snippet-clipboard-copy-content");
                if (null === n) return;
                e.removeAttribute("data-snippet-clipboard-copy-content");
                let r = !!e.closest(".js-snippet-clipboard-copy-unpositioned"),
                    i = r ? n1 : n0;
                if (!(i instanceof HTMLTemplateElement)) return;
                let a = i.content.cloneNode(!0),
                    o = a.children[0];
                if (!(o instanceof HTMLElement)) return;
                let s = o.children[0];
                if (s instanceof HTMLElement) {
                    if (s.setAttribute("value", n), !r) {
                        document.addEventListener("selectionchange", () => {
                            let t = document.getSelection();
                            if (t && e.contains(t.anchorNode)) {
                                let e = t?.toString();
                                s.style.display = "" === e.trim() ? "inherit" : "none"
                            }
                        }, {
                            signal: t
                        });
                        let n = e.querySelector("pre");
                        if (null !== n) {
                            let e;
                            n.addEventListener("scroll", () => {
                                e && clearTimeout(e), s.style.display = "none", e = setTimeout(() => {
                                    s.style.display = "inherit"
                                }, 1e3)
                            }, {
                                signal: t
                            })
                        }
                    }
                    e.appendChild(o)
                }
            }

            function n7(e, t, n) {
                n2(e, t), n && e.classList.toggle("on");
                let r = Array.from(e.querySelectorAll(".js-social-updatable"), ey.x0);
                return Promise.all(r)
            }

            function n2(e, t) {
                for (let n of e.querySelectorAll(".js-social-count")) {
                    n.textContent = t, n.setAttribute("title", t);
                    let e = n.getAttribute("data-singular-suffix"),
                        r = n.getAttribute("data-plural-suffix"),
                        i = "1" === t ? e : r;
                    i && n.setAttribute("aria-label", `${t} ${i}`)
                }
            }(0, T.N7)("[data-snippet-clipboard-copy-content]", {
                constructor: HTMLElement,
                add(e) {
                    let t = new AbortController;
                    nY.set(e, t), n4(e, t.signal)
                }
            }), (0, T.N7)(".snippet-clipboard-content clipboard-copy", {
                constructor: HTMLElement,
                remove(e) {
                    let t = nY.get(e);
                    t && t.abort()
                }
            }), (0, S.AC)(".js-social-form", async function(e, t) {
                let n;
                let r = e.closest(".js-social-container"),
                    i = e.classList.contains("js-deferred-toggler-target");
                try {
                    n = await t.json(), r && (await n7(r, n.json.count, i), function(e) {
                        let t;
                        let n = e.querySelectorAll(":scope > *");
                        for (let e of n) e.checkVisibility() && (t = e.querySelector('button[type="submit"]'));
                        t?.focus()
                    }(r), r.dispatchEvent(new CustomEvent("social:success", {
                        detail: n,
                        bubbles: !0
                    })))
                } catch (t) {
                    if (t.response?.status === 409 && t.response.json.confirmationDialog) {
                        let n = t.response.json.confirmationDialog,
                            a = document.querySelector(n.templateSelector),
                            o = e.querySelector(".js-confirm-csrf-token")?.value;
                        if (a instanceof HTMLTemplateElement && o) {
                            let t = new t0.R(a, {
                                    confirmUrl: e.action,
                                    confirmCsrfToken: o,
                                    ...n.inputs || {}
                                }),
                                s = await (0, td.W)({
                                    content: t
                                });
                            s.addEventListener("social-confirmation-form:success", async e => {
                                e instanceof CustomEvent && r && await n7(r, e.detail.count, i)
                            }), s.addEventListener("social-confirmation-form:error", () => {
                                (0, v.v)()
                            })
                        }
                    } else r && !i && r.classList.toggle("on"), (0, v.v)()
                }
            }), (0, S.AC)(".js-social-confirmation-form", async function(e, t) {
                try {
                    let n = await t.json();
                    (0, w.f)(e, "social-confirmation-form:success", n.json)
                } catch {
                    (0, w.f)(e, "social-confirmation-form:error")
                }
            });
            var n5 = n(69202),
                n9 = n(21461);
            let n3 = [],
                n6 = L.n4?.hidden || !1;

            function n8(e) {
                return null != e
            }

            function re(e) {
                let t = document.querySelector(".js-stale-session-flash"),
                    n = t.querySelector(".js-stale-session-flash-signed-in"),
                    r = t.querySelector(".js-stale-session-flash-signed-out"),
                    i = t.querySelector(".js-stale-session-flash-switched");
                if (t.hidden = !1, n.hidden = "SIGNED_IN" !== e, r.hidden = "SIGNED_OUT" !== e, i.hidden = !e?.startsWith("SWITCHED"), e?.startsWith("SWITCHED:")) {
                    let n = e.split(":");
                    if (3 === n.length) {
                        let e = n[1],
                            r = n[2],
                            a = i.getAttribute("data-original-user-id");
                        a && a === r ? (t.hidden = !0, i.hidden = !0, i.removeAttribute("data-original-user-id")) : a || i.setAttribute("data-original-user-id", e || "")
                    }
                }
                window.addEventListener("popstate", function(e) {
                    e.state && null != e.state.container && location.reload()
                }), document.addEventListener("submit", function(e) {
                    e.preventDefault()
                })
            }
            L.n4?.addEventListener("visibilitychange", () => {
                let e = L.n4?.hidden || !1;
                void 0 !== c && clearTimeout(c), c = setTimeout(() => {
                    if (e !== n6)
                        for (let t of (n6 = e, c = void 0, n3)) t(n6)
                }, e ? 3e4 : 0)
            }), async function() {
                let e = await (0, n5.G)();
                if (!e) return;
                let t = (0, D.g)(t => e.subscribe(t.flat())),
                    n = (0, D.g)(t => e.unsubscribeAll(...t)),
                    r = (0, D.g)(t => e.updatePresenceMetadata(t));
                (0, T.N7)(".js-socket-channel[data-channel]", {
                    subscribe: e => {
                        var n;
                        let i = (function(e) {
                                let t = (e.getAttribute("data-channel") || "").trim().split(/\s+/);
                                return t.map(n9.Topic.parse).filter(n8)
                            })(e).map(t => ({
                                subscriber: e,
                                topic: t
                            })),
                            a = i.map(e => e.topic.name).filter(e => (0, n9.A)(e)),
                            o = {
                                unsubscribe() {}
                            };
                        if (a.length) {
                            let t, i;
                            let s = () => {
                                let n = [];
                                for (let o of (i && n.push(i), void 0 !== t && n.push({
                                        [n9.ZE]: t ? 1 : 0
                                    }), a)) r({
                                    subscriber: e,
                                    channelName: o,
                                    metadata: n
                                })
                            };
                            o = (0, F.qC)((0, F.RB)(e, "socket:set-presence-metadata", e => {
                                let {
                                    detail: t
                                } = e;
                                i = t, s()
                            }), ((n = e => {
                                t = e, s()
                            })(n6), n3.push(n), new F.w0(() => {
                                let e = n3.indexOf(n); - 1 !== e && n3.splice(e, 1)
                            })))
                        }
                        return t(i), o
                    },
                    remove: e => n(e)
                })
            }(), (0, T.N7)("form.js-auto-replay-enforced-sso-request", {
                constructor: HTMLFormElement,
                initialize(e) {
                    (0, P.Bt)(e)
                }
            });
            let rt = null;
            if ("function" == typeof BroadcastChannel) try {
                (rt = new BroadcastChannel("stale-session")).onmessage = e => {
                    "string" == typeof e.data && re(e.data)
                }
            } catch {}
            if (!rt) {
                let e = !1;
                rt = {
                    postMessage(t) {
                        e = !0;
                        try {
                            window.localStorage.setItem("logged-in", t)
                        } finally {
                            e = !1
                        }
                    },
                    onmessage: null
                }, window.addEventListener("storage", function(t) {
                    if (!e && t.storageArea === window.localStorage && "logged-in" === t.key) try {
                        ("SIGNED_IN" === t.newValue || "SIGNED_OUT" === t.newValue || t.newValue?.startsWith("SWITCHED")) && re(t.newValue)
                    } finally {
                        window.localStorage.removeItem(t.key)
                    }
                })
            }
            let rn = document.querySelector(".js-stale-session-flash[data-signedin]");
            if (rn) {
                let e = rn.getAttribute("data-signedin") || "";
                rt?.postMessage(e)
            }
            let rr = () => {
                rt?.postMessage("false")
            };

            function ri(e, t, n) {
                let r = e.getBoundingClientRect().height,
                    i = t.getBoundingClientRect(),
                    a = n.getBoundingClientRect(),
                    o = a.top;
                o + i.height + 10 >= r && (o = Math.max(r - i.height - 10, 0));
                let s = a.right;
                null != n.closest(".js-build-status-to-the-left") && (s = Math.max(a.left - i.width - 10, 0)), t.style.top = `${o}px`, t.style.left = `${s}px`, t.style.right = "auto"
            }
            async function ra(e) {
                let t;
                let n = e.querySelector(".js-dropdown-details"),
                    r = e.querySelector(".js-status-dropdown-menu") || e.closest(".js-status-dropdown-menu");
                if (!(r instanceof HTMLElement)) return;
                let i = r.querySelector(".js-status-loader");
                if (!i) return;
                let a = r.querySelector(".js-status-loading"),
                    o = r.querySelector(".js-status-error"),
                    s = i.getAttribute("data-contents-url");
                a.classList.remove("d-none"), o.classList.add("d-none");
                try {
                    await (0, tR.Z)(), t = await (0, tm.a_)(document, s)
                } catch (e) {
                    a.classList.add("d-none"), o.classList.remove("d-none")
                }
                t && (i.replaceWith(t), r.querySelector(".js-details-container").classList.add("open"), n && r.classList.contains("js-append-menu-to-body") && ri(document.body, r, n))
            }

            function ro(e) {
                let t = e.currentTarget;
                ra(t)
            }(0, T.N7)(".js-loggout-form", function(e) {
                e.addEventListener("submit", rr)
            }), (0, w.on)("toggle", ".js-build-status .js-dropdown-details", function(e) {
                let t = e.currentTarget,
                    n = t.querySelector(".js-status-dropdown-menu");

                function r() {
                    t.hasAttribute("open") || a()
                }

                function i(e) {
                    n.contains(e.target) || a()
                }

                function a() {
                    t.removeAttribute("open"), n.classList.add("d-none"), t.appendChild(n), t.removeEventListener("toggle", r), window.removeEventListener("scroll", i)
                }
                n && (t.addEventListener("toggle", r), n.classList.contains("js-close-menu-on-scroll") && window.addEventListener("scroll", i, {
                    capture: !0
                }), n.classList.remove("d-none"), n.querySelector(".js-details-container").classList.add("open"), n.classList.contains("js-append-menu-to-body") && (document.body.appendChild(n), ri(document.body, n, t)))
            }, {
                capture: !0
            }), (0, w.on)("click", ".js-status-retry", ({
                currentTarget: e
            }) => {
                ra(e)
            }), (0, T.N7)(".js-build-status", {
                add(e) {
                    e.addEventListener("mouseenter", ro, {
                        once: !0
                    })
                },
                remove(e) {
                    e.removeEventListener("mouseenter", ro)
                }
            }), n(80860);
            var rs = n(31287);
            async function rl(e) {
                let t = e.currentTarget;
                if (!(t instanceof HTMLElement)) return;
                let n = t.getAttribute("data-sudo-required");
                if ("false" === n) return;
                e.stopPropagation(), e.preventDefault();
                let r = await (0, rs.ZP)(t);
                if (r) t.removeAttribute("data-sudo-required"), t instanceof HTMLFormElement ? (0, P.Bt)(t) : t.click();
                else {
                    let e = t.closest("form");
                    e && (0, w.f)(e, "deprecatedAjaxComplete")
                }
            }

            function rc(e) {
                let t = e.detail;
                ":" === t.key && (t.value = function(e) {
                    if (e.hasAttribute("data-use-colon-emoji")) return e.getAttribute("data-value");
                    let t = e.firstElementChild;
                    return t && "G-EMOJI" === t.tagName && !t.firstElementChild ? t.textContent : e.getAttribute("data-value")
                }(t.item))
            }

            function ru(e) {
                let {
                    key: t,
                    provide: n,
                    text: r
                } = e.detail;
                if (":" !== t) return;
                let i = e.target,
                    a = i.getAttribute("data-emoji-url");
                n(rm(a, r))
            }

            function rd(e) {
                let t = e.target,
                    n = t.querySelector(".emoji-suggestions[popover]");
                n && n.showPopover()
            }
            async function rm(e, t) {
                let [n, r] = await rh(e), i = (function(e, t) {
                    let n = ` ${t.toLowerCase().replace(/_/g," ")}`;
                    return (0, tM.W)(e, e => {
                        let t = e.getAttribute("data-emoji-name"),
                            r = function(e, t) {
                                let n = e.indexOf(t);
                                return n > -1 ? 1e3 - n : 0
                            }(function(e) {
                                let t = e.getAttribute("data-text").trim().toLowerCase().replace(/_/g, " ");
                                return ` ${t}`
                            }(e), n);
                        return r > 0 ? {
                            score: r,
                            text: t
                        } : null
                    }, tC.qu)
                })(r, t).slice(0, 5);
                for (let e of (n.textContent = "", i)) n.append(e);
                return {
                    fragment: n,
                    matched: i.length > 0
                }
            }
            async function rf(e) {
                let t = await (0, tm.a_)(document, e),
                    n = t.firstElementChild;
                return [n, [...n.children]]
            }(0, w.on)("click", "button[data-sudo-required], summary[data-sudo-required]", rl), (0, T.N7)("form[data-sudo-required]", {
                constructor: HTMLFormElement,
                subscribe: e => (0, F.RB)(e, "submit", rl)
            }), (0, T.N7)("text-expander[data-emoji-url]", {
                subscribe: e => (0, F.qC)((0, F.RB)(e, "text-expander-change", ru), (0, F.RB)(e, "text-expander-value", rc), (0, F.RB)(e, "text-expander-activate", rd))
            });
            let rh = (0, eK.Z)(rf);
            var rp = n(45974);

            function rg(e, t) {
                let n = (function(e, t) {
                    if (!t) return e;
                    let n = RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}`),
                        r = /^\d+$/.test(t) ? e => (function(e, t) {
                            let n = e.search(t);
                            return n > -1 ? 1e3 - n : 0
                        })(e, n) : e => (0, tC.EW)(e, t);
                    return (0, tM.W)(e, e => {
                        let t = `${e.number} ${e.title.trim().toLowerCase()}`,
                            n = r(t);
                        return n > 0 ? {
                            score: n,
                            text: t
                        } : null
                    }, tC.qu)
                })(e.suggestions, t).slice(0, 5);
                return {
                    matches: n,
                    icons: e.icons
                }
            }

            function rb(e, t, n, r = "") {
                (0, rp.sY)((0, rp.dy)`
    <ul
      role="listbox"
      class="suggester-container suggester suggestions list-style-none position-absolute"
      data-query="${r}"
    >
      ${e.map(e=>{let t=e.type in n?(0,I.r)(document,n[e.type]):"";return(0,rp.dy)`
      <li class="markdown-title" role="option" id="suggester-issue-${e.id}" data-value="${e.number}">
        <span class="d-inline-block mr-1">${t}</span>
        <small>#${e.number}</small> ${(0,rp.Au)(e.title)}
      </li>
    `})}
    </ul>
  `, t)
            }

            function ry(e) {
                let t = e.detail;
                if ("#" !== t.key) return;
                let n = t.item.getAttribute("data-value");
                t.value = `#${n}`
            }

            function rv(e) {
                let {
                    key: t,
                    provide: n,
                    text: r
                } = e.detail;
                if ("#" !== t) return;
                if ("#" === r) {
                    rw(e.target);
                    return
                }
                let i = e.target,
                    a = i.getAttribute("data-issue-url");
                n(rL(a, r, i))
            }

            function rw(e) {
                if (!e) return;
                let t = e.closest("text-expander");
                t && t.dismiss()
            }

            function rS(e) {
                rw(e.target)
            }

            function rE(e) {
                let {
                    key: t
                } = e;
                0 > ["ArrowRight", "ArrowLeft"].indexOf(t) || rw(e.target)
            }
            async function rL(e, t, n) {
                let r = await rT(e, t, n),
                    i = document.createElement("div");
                rb(r.matches, i, r.icons, t);
                let a = i.firstElementChild;
                return {
                    fragment: a,
                    matched: r.matches.length > 0
                }
            }(0, T.N7)("text-expander[data-issue-url]", {
                subscribe: e => {
                    let t = [(0, F.RB)(e, "text-expander-change", rv), (0, F.RB)(e, "text-expander-value", ry), (0, F.RB)(e, "keydown", rE), (0, F.RB)(e, "click", rS)];
                    return (0, F.qC)(...t)
                }
            });
            let rj = new Set,
                rA = new Map;
            async function rT(e, t, n) {
                let r = await rC(e),
                    i = rg(r, t);
                if (t.length < 3 || r.suggestions.length < 1e3) return i;
                let a = t.slice(0, 3);
                (0, nb.c)("REPOSITORY_SUGGESTER_ELASTIC_SEARCH") && Number.isFinite(Number(t)) && (a = t);
                let o = rA.get(a);
                if (o) return rg(o, t);
                if (!rj.has(a)) {
                    rj.add(a);
                    let r = rq(e, a, n);
                    if (0 === i.matches.length) {
                        let e = await r;
                        return rg(e, t)
                    }
                }
                return rg(r, t)
            }
            async function rq(e, t, n) {
                let r = new URL(e, window.location.origin);
                r.searchParams.set("q", t);
                let i = await rk(r.toString());
                if (rA.set(t, i), rj.delete(t), rA.size > 5) {
                    let e = rA.size - 5,
                        t = Array.from(rA.keys()).slice(0, e);
                    for (let e of t) rA.delete(e)
                }
                let a = n?.querySelector("ul.suggestions"),
                    o = a?.getAttribute("data-query");
                if (a && o?.startsWith(t)) {
                    let e = n?.querySelector("[aria-activedescendant]")?.getAttribute("aria-activedescendant"),
                        t = document.createElement("div"),
                        r = rg(i, o);
                    if (rb(r.matches, t, r.icons), e)
                        for (let n of t.querySelectorAll(`#${e}`)) n.setAttribute("aria-selected", "true");
                    let s = t.firstElementChild;
                    a.replaceChildren(...s.children)
                }
                return i
            }
            async function rk(e) {
                let t = await self.fetch(e, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json"
                    }
                });
                if (!t.ok) {
                    let e = Error(),
                        n = t.statusText ? ` ${t.statusText}` : "";
                    throw e.message = `HTTP ${t.status}${n}`, e
                }
                return t.json()
            }
            let rC = (0, eK.Z)(rk);

            function rM(e) {
                let t = e.detail;
                if ("@" !== t.key) return;
                let n = t.item.getAttribute("data-value");
                t.value = `@${n}`
            }

            function rx(e) {
                let {
                    key: t,
                    provide: n,
                    text: r
                } = e.detail;
                if ("@" !== t || r?.split(" ").length > 1) return;
                let i = e.target,
                    a = i.getAttribute("data-mention-url");
                n(r_(a, r))
            }
            async function r_(e, t) {
                var n, r;
                let i = await rR(e),
                    a = document.createElement("div"),
                    o = (function(e, t) {
                        if (!t) return e;
                        let n = function(e) {
                            if (!e) return () => 2;
                            let t = e.toLowerCase().split("");
                            return (n, r) => {
                                if (!n) return 0;
                                let i = function(e, t) {
                                    let n, r, i, a;
                                    let o = function(e, t) {
                                        let n = 0,
                                            r = [];
                                        for (;
                                            (n = e.indexOf(t, n)) > -1;) r.push(n++);
                                        return r
                                    }(e, t[0]);
                                    if (0 === o.length) return null;
                                    if (1 === t.length) return [o[0], 1, []];
                                    for (r = 0, a = null, i = o.length; r < i; r++) {
                                        let i = o[r];
                                        if (!(n = function(e, t, n) {
                                                let r = n,
                                                    i = [];
                                                for (let n = 1; n < t.length; n += 1) {
                                                    if (-1 === (r = e.indexOf(t[n], r))) return;
                                                    i.push(r++)
                                                }
                                                return i
                                            }(e, t, i + 1))) continue;
                                        let s = n[n.length - 1] - i;
                                        (!a || s < a[1]) && (a = [i, s, n])
                                    }
                                    return a
                                }(n, t);
                                if (!i) return 0;
                                let a = e.length / i[1],
                                    o = a / (i[0] / 2 + 1);
                                return r ? o + 1 : o
                            }
                        }(t);
                        return (0, tM.W)(e, e => {
                            let t = e.description ? `${e.name} ${e.description}`.trim().toLowerCase() : `${e.login} ${e.name}`.trim().toLowerCase(),
                                r = n(t, e.participant);
                            return r > 0 ? {
                                score: r,
                                text: t
                            } : null
                        }, tC.qu)
                    })(i, t).slice(0, 5);
                n = o, r = a, (0, rp.sY)((0, rp.dy)`
    <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
      ${n.map(e=>{let t="user"===e.type?e.login:e.name,n="user"===e.type?e.name:e.description;return(0,rp.dy)`
      <li role="option" id="suggester-${e.id}-${e.type}-${t}" data-value="${t}">
        <span>${t}</span>
        <small>${n}</small>
      </li>
    `})}
    </ul>
  `, r);
                let s = a.firstElementChild;
                return {
                    fragment: s,
                    matched: o.length > 0
                }
            }(0, T.N7)("text-expander[data-mention-url]", {
                subscribe: e => (0, F.qC)((0, F.RB)(e, "text-expander-change", rx), (0, F.RB)(e, "text-expander-value", rM))
            });
            let rR = (0, eK.Z)(async function(e) {
                let t = await self.fetch(e, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json"
                    }
                });
                if (!t.ok) {
                    let e = Error(),
                        n = t.statusText ? ` ${t.statusText}` : "";
                    throw e.message = `HTTP ${t.status}${n}`, e
                }
                return t.json()
            });
            (0, w.on)("change", "input.js-survey-contact-checkbox", function(e) {
                let t = e.currentTarget,
                    n = t.closest(".js-survey-question-form"),
                    r = n.querySelector(".js-survey-contact-checkbox-hidden");
                t.checked ? r.setAttribute("disabled", "true") : r.removeAttribute("disabled")
            }), (0, w.on)("details-menu-selected", ".js-sync-select-menu-text", function(e) {
                let t = document.querySelector(".js-sync-select-menu-button"),
                    n = e.detail.relatedTarget.querySelector("span[data-menu-button-text]").textContent;
                t.textContent = n, t.focus()
            }, {
                capture: !0
            }), (0, w.on)("click", 'tab-container [role="tab"]', function(e) {
                let {
                    currentTarget: t
                } = e, n = t.closest("tab-container"), r = n.querySelector(".js-filterable-field, [data-filter-placeholder-input]");
                if (r instanceof HTMLInputElement) {
                    let e = t.getAttribute("data-filter-placeholder");
                    e && r.setAttribute("placeholder", e), r.focus()
                }
            }), (0, w.on)("tab-container-changed", "tab-container", function(e) {
                let t = e.detail.relatedTarget,
                    n = t.getAttribute("data-fragment-url"),
                    r = t.querySelector("include-fragment");
                n && r && !r.hasAttribute("src") && (r.src = n)
            }), n(36543);
            var rN = n(96776);
            async function rH(e) {
                let t = e.currentTarget;
                if (t.getAttribute("data-hovercard-url") && t.closest("[data-team-hovercards-enabled]")) {
                    t.classList.remove("tooltipped");
                    return
                }
                let n = t.getAttribute("data-url");
                if (!n) return;
                let r = await fetch(n, {
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (!r.ok) return;
                let i = await r.json(),
                    a = t.getAttribute("data-id"),
                    o = document.querySelectorAll(`.js-team-mention[data-id='${a}']`);
                for (let e of o) e.removeAttribute("data-url");
                try {
                    0 === i.total ? i.members.push("This team has no members") : i.total > i.members.length && i.members.push(`${i.total-i.members.length} more`), rP(o, function(e) {
                        if ("ListFormat" in Intl) {
                            let t = new Intl.ListFormat;
                            return t.format(e)
                        }
                        if (0 === e.length) return "";
                        if (1 === e.length) return e[0];
                        if (2 === e.length) return e.join(" and ");
                        {
                            let t = e[e.length - 1];
                            return e.slice(0, -1).concat(`and ${t}`).join(", ")
                        }
                    }(i.members))
                } catch (r) {
                    let e = r.response ? r.response.status : 500,
                        n = t.getAttribute(404 === e ? "data-permission-text" : "data-error-text");
                    rP(o, n)
                }
            }

            function rP(e, t) {
                for (let n of e) n instanceof HTMLElement && (n.setAttribute("aria-label", t), n.classList.add("tooltipped", "tooltipped-s", "tooltipped-multiline"))
            }

            function rI(e) {
                if (function(e) {
                        let t;
                        try {
                            t = new URL(e.url)
                        } catch (e) {
                            return !0
                        }
                        return t.host !== window.location.host
                    }(e)) return;
                let t = function() {
                    let e = document.querySelector(".js-timeline-marker");
                    return null != e ? e.getAttribute("data-last-modified") : null
                }();
                t && e.headers.set("X-Timeline-Last-Modified", t)
            }

            function r$() {
                let e = rX();
                if (!e) return;
                let t = document.querySelector(".js-pull-discussion-timeline");
                if (t) return;
                let n = document.getElementById(e);
                n && rz(n)
            }

            function rO(e = !0) {
                let t = rX();
                if (!t) return;
                let n = document.getElementById(t);
                if (n) rz(n);
                else {
                    if (function(e) {
                            let t = rB(e, ".js-comment-container");
                            return !!t && ((0, nw.$)(t), !0)
                        }(t) || rD(t, ".js-thread-hidden-comment-ids") || rD(t, ".js-review-hidden-comment-ids")) return;
                    let n = document.querySelector("#js-timeline-progressive-loader");
                    n && e && rV(t, n)
                }
            }

            function rD(e, t) {
                let n = rB(e, t);
                return !!n && (n.addEventListener("page:loaded", function() {
                    rO()
                }), n.querySelector("button[type=submit]").click(), !0)
            }

            function rB(e, t) {
                let n = document.querySelectorAll(t);
                for (let t of n) {
                    let n = t.getAttribute("data-hidden-comment-ids");
                    if (n) {
                        let r = n.split(","),
                            i = e.match(/\d+/g)?.[0];
                        if (i && r.includes(i)) return t
                    }
                }
                return null
            }
            async function rW() {
                let e = document.querySelectorAll(".js-comment-body video"),
                    t = Array.from(e).map(e => new Promise(t => {
                        if (e.readyState >= e.HAVE_METADATA) t(e);
                        else {
                            let n = setTimeout(() => t(e), 5e3),
                                r = () => {
                                    clearTimeout(n), t(e)
                                };
                            e.addEventListener("loadeddata", () => {
                                e.readyState >= e.HAVE_METADATA && r()
                            }), e.addEventListener("error", () => r())
                        }
                    }));
                return Promise.all(t)
            }
            async function rF() {
                let e = document.querySelectorAll(".js-comment-body img"),
                    t = Array.from(e).map(e => {
                        new Promise(t => {
                            if (e.complete) t(e);
                            else {
                                let n = setTimeout(() => t(e), 5e3),
                                    r = () => {
                                        clearTimeout(n), t(e)
                                    };
                                e.addEventListener("load", () => r()), e.addEventListener("error", () => r())
                            }
                        })
                    });
                return Promise.all(t)
            }
            async function rU() {
                return Promise.all([rW(), rF()])
            }
            async function rz(e) {
                await rU(),
                    function(e) {
                        let t = e.closest("details, .js-details-container");
                        t && ("DETAILS" === t.nodeName ? t.setAttribute("open", "open") : (0, e3.jo)(t) || (0, e3.Qp)(t))
                    }(e);
                let t = e.querySelector(`[href='#${e.id}']`);
                if ((0, tJ.zT)(e), t) {
                    let e = t.getAttribute("data-turbo");
                    t.setAttribute("data-turbo", "false"), setTimeout(() => {
                        t.click()
                    }, 0), null === e ? t.removeAttribute("data-turbo") : t.setAttribute("data-turbo", e)
                }
            }
            async function rV(e, t) {
                let n;
                if (!t) return;
                let r = t.getAttribute("data-timeline-item-src");
                if (!r) return;
                let i = new URL(r, window.location.origin),
                    a = new URLSearchParams(i.search.slice(1));
                a.append("anchor", e), i.search = a.toString();
                try {
                    n = await (0, tm.a_)(document, i.toString())
                } catch (e) {
                    return
                }
                let o = n.querySelector(".js-timeline-item");
                if (!o) return;
                let s = o.getAttribute("data-gid");
                if (!s) return;
                let l = document.querySelector(`.js-timeline-item[data-gid='${s}']`);
                if (l) l.replaceWith(o), rO(!1);
                else {
                    let e = document.getElementById("js-progressive-timeline-item-container");
                    e && e.replaceWith(n), rO(!1)
                }
            }

            function rX() {
                return window.location.hash.slice(1)
            }
            async function rG() {
                let e = [];
                try {
                    e = await navigator.serviceWorker.getRegistrations()
                } catch (e) {
                    if ("SecurityError" === e.name) return
                }
                for (let t of e) t.unregister()
            }
            document.addEventListener("keydown", e => {
                if ("Escape" !== e.key || e.target !== document.body) return;
                let t = document.querySelector(".js-targetable-element:target");
                t && (0, rN.uQ)(t, () => {
                    window.location.hash = "", (0, $.lO)(window.history.state, "", window.location.pathname + window.location.search)
                })
            }), document.addEventListener("click", e => {
                let t = document.querySelector(".js-targetable-element:target");
                !(!t || e.target instanceof HTMLAnchorElement) && e.target instanceof HTMLElement && (t.contains(e.target) || (0, rN.uQ)(t, () => {
                    window.location.hash = "", (0, $.lO)(window.history.state, "", window.location.pathname + window.location.search)
                }))
            }), n(48804), (0, T.N7)(".js-team-mention", function(e) {
                e.addEventListener("mouseenter", rH)
            }), (0, S.AC)(".js-needs-timeline-marker-header", function(e, t, n) {
                rI(n)
            }), (0, w.on)("deprecatedAjaxSend", "[data-remote]", function(e) {
                let {
                    request: t
                } = e.detail;
                rI(t)
            }), (0, tQ.Z)(function() {
                rO()
            }), (0, T.N7)(".js-timeline-progressive-focus-container", r$), window.addEventListener("sticky-header-rendered", () => {
                r$()
            }), (0, T.N7)(".js-inline-comments-container", function(e) {
                let t = rX();
                if (!t) return;
                let n = document.getElementById(t);
                n && e.contains(n) && rz(n)
            }), (0, T.N7)("#js-discussions-timeline-anchor-loader", {
                constructor: HTMLElement,
                add: e => {
                    let t = document.querySelector("#js-timeline-progressive-loader");
                    if (t) return;
                    let n = rX();
                    if (!n) return;
                    let r = document.getElementById(n);
                    r || rV(n, e)
                }
            }), (0, T.N7)(".js-discussion", function() {
                let e = new WeakSet;

                function t() {
                    e = new WeakSet(document.querySelectorAll(".js-timeline-item"))
                }
                t(), document.addEventListener("turbo:load", t), (0, T.N7)(".js-timeline-item", t => {
                    t instanceof HTMLElement && (e.has(t) || (0, C.N)(t))
                })
            }), (0, w.on)("click", ".js-toggler-container .js-toggler-target", function(e) {
                if (0 !== e.button) return;
                let t = e.currentTarget.closest(".js-toggler-container");
                t && t.classList.toggle("on")
            }), (0, S.AC)(".js-toggler-container", async (e, t) => {
                e.classList.remove("success", "error"), e.classList.add("loading");
                try {
                    await t.text(), e.classList.add("success")
                } catch (t) {
                    e.classList.add("error")
                } finally {
                    e.classList.remove("loading")
                }
            }), async function() {
                if ("serviceWorker" in navigator) {
                    await ea.x;
                    let e = document.querySelector('link[rel="service-worker-src"]')?.href;
                    e ? navigator.serviceWorker.register(e, {
                        scope: "/"
                    }) : await rG()
                }
            }();
            var rK = n(67852),
                rZ = n(23243),
                rJ = n(78923);
            (0, rK.E_)(rJ.w), (0, rK.OY)(0), rK.session.isVisitable = () => !0;
            let rQ = Object.getOwnPropertyDescriptor(rK.cr.prototype, "reloadReason").get;

            function* rY(e) {
                for (let t of Object.values(e.detailsByOuterHTML))
                    if (t.tracked)
                        for (let e of t.elements) e instanceof HTMLMetaElement && e.getAttribute("http-equiv") && (yield [e.getAttribute("http-equiv") || "", e.getAttribute("content") || ""])
            }
            Object.defineProperty(rK.cr.prototype, "reloadReason", {
                get() {
                    let e = rQ.call(this);
                    if ("tracked_element_mismatch" !== e.reason) return e;
                    let t = Object.fromEntries(rY(this.currentHeadSnapshot)),
                        n = [];
                    for (let [e, r] of rY(this.newHeadSnapshot)) t[e] !== r && n.push((0, rZ.T2)(e));
                    return {
                        reason: `tracked_element_mismatch-${n.join("-")}`
                    }
                }
            });
            let r0 = e => {
                let t = history[e];
                history[e] = function(n, r, i) {
                    let a = n?.skipTurbo || n?.usr?.skipTurbo;
                    rK.ry.history.update(function(r, i, o) {
                        let s = history.state?.turboCount || 0,
                            l = "pushState" === e && n?.turbo ? s + 1 : s,
                            c = a ? {
                                ...n,
                                skipTurbo: !0
                            } : {
                                ...n,
                                ...r,
                                turboCount: l
                            };
                        t.call(this, c, i, o)
                    }, new URL(i || location.href, location.href), n?.turbo?.restorationIdentifier)
                }
            };
            r0("replaceState"), r0("pushState");
            let r1 = rK.session.adapter,
                r4 = () => {
                    r1.progressBar.setValue(0), r1.progressBar.show()
                },
                r7 = () => {
                    r1.progressBar.setValue(1), r1.progressBar.hide()
                };
            var r2 = n(78806);
            let r5 = new Map,
                r9 = new Map,
                r3 = () => r5.get(document.location.href),
                r6 = (e, t) => r5.set(e, t),
                r8 = () => r9.set(document.location.href, (0, rZ.Yg)()),
                ie = () => r9.get(document.location.href);
            (async () => {
                await ea.x, r6(document.location.href, (0, rZ.ag)(document)), r8()
            })();
            var it = n(75214);
            let ir = !1,
                ii = null;
            L.iG && (0, T.N7)("[data-turbo-frame]", {
                constructor: HTMLElement,
                add(e) {
                    if ("A" !== e.tagName && "" !== e.getAttribute("data-turbo-frame"))
                        for (let t of e.querySelectorAll("a:not([data-turbo-frame])")) t.setAttribute("data-turbo-frame", e.getAttribute("data-turbo-frame") || "")
                }
            }), L.n4?.addEventListener("turbo:click", function(e) {
                if (e.target instanceof HTMLElement && e instanceof CustomEvent) {
                    if (nb.c("disable_turbo_visit") && !ng.sj() || r2.Z(location.href, e.detail.url)) {
                        e.preventDefault();
                        return
                    }
                    e.defaultPrevented || it.LD("turbo")
                }
            }), L.n4?.addEventListener("turbo:before-fetch-request", function(e) {
                let t = window.onbeforeunload?.(e);
                if (t) {
                    let n = confirm(t);
                    n ? window.onbeforeunload = null : (e.preventDefault(), r7())
                }
            }), L.n4?.addEventListener("turbo:before-fetch-request", e => {
                if (e.defaultPrevented) return;
                let t = e.target;
                rZ.HN(t) && r4(), t?.tagName === "HTML" && (e.detail.fetchOptions.headers["Turbo-Visit"] = "true")
            });
            let ia = L.n4?.createElement("turbo-frame"),
                io = Object.getPrototypeOf(ia.delegate),
                is = io.requestErrored;
            io.requestErrored = function(e, t) {
                return this.element.dispatchEvent(new CustomEvent("turbo:fetch-error", {
                    bubbles: !0,
                    detail: {
                        request: e,
                        error: t
                    }
                })), is.apply(this, e, t)
            }, L.n4?.addEventListener("turbo:fetch-error", e => {
                if (e.target instanceof HTMLFormElement) return;
                let t = e.detail.request;
                window.location = t.location, e.preventDefault()
            }), L.n4?.addEventListener("turbo:before-fetch-response", async e => {
                let t = e.detail.fetchResponse;
                if (ir = t.statusCode >= 500, 404 === t.statusCode && (rZ.uL(t.statusCode), window.location = t.location, e.preventDefault()), history.replaceState({
                        ...history.state,
                        skipTurbo: !1
                    }, "", location.href), ir) {
                    let e = await t.responseHTML,
                        n = rJ.w.createHTML(e, t.response);
                    ii = new DOMParser().parseFromString(n, "text/html")
                }
            }), L.n4?.addEventListener("turbo:frame-render", e => {
                rZ.HN(e.target) && r7()
            }), L.n4?.addEventListener("turbo:before-render", async e => {
                e instanceof CustomEvent && (e.preventDefault(), e.detail.render = ic, await rZ.q3(), e.detail.resume(!0), rZ.Ap(document.documentElement, e.detail.newBody.ownerDocument.documentElement), r8())
            });
            let il = () => new Promise(e => {
                    setTimeout(() => e(), 0)
                }),
                ic = async (e, t) => {
                    if (await il(), ir && ii) {
                        for (let e of (document.documentElement.replaceWith(ii.documentElement), document.querySelectorAll("script"))) {
                            let t = (0, rZ.lL)(e);
                            t && e.replaceWith(t)
                        }
                        return
                    }
                    let n = e.querySelector("[data-turbo-body]"),
                        r = t.querySelector("[data-turbo-body]");
                    n && r ? ((0, rZ.Ap)(e, t), n.replaceWith(r)) : ((0, rZ.uL)("missing_turbo_body"), window.location.reload())
                };
            L.iG?.addEventListener("popstate", () => {
                let e = document.documentElement,
                    t = ie();
                if (t) {
                    for (let n of e.attributes) t.find(e => e.nodeName === n.nodeName) || e.removeAttribute(n.nodeName);
                    for (let n of t) e.getAttribute(n.nodeName) !== n.nodeValue && e.setAttribute(n.nodeName, n.nodeValue)
                }
            });
            var iu = n(16730);
            let id = !1,
                im = e => {
                    if (!(e.target instanceof HTMLElement)) return;
                    let t = e.target.closest("[data-turbo-frame]"),
                        n = e.target.closest("#js-repo-pjax-container"),
                        r = new URL(e.detail.url, window.location.origin),
                        i = e.target.closest("#user-profile-frame");
                    return n && t && !(0, rZ.AU)(r.pathname, location.pathname) || i && !(0, rZ.ck)(r.pathname, location.pathname)
                };
            L.n4?.addEventListener("turbo:frame-click", function(e) {
                if (e.target instanceof HTMLElement && e instanceof CustomEvent) {
                    if (r2.Z(location.href, e.detail.url)) {
                        e.preventDefault();
                        return
                    }
                    im(e) && (rZ.uL("repo_mismatch"), e.target.removeAttribute("data-turbo-frame"), e.preventDefault()), e.defaultPrevented || it.LD("turbo.frame")
                }
            }), L.n4?.addEventListener("turbo:before-fetch-response", e => {
                u = e.detail.fetchResponse, rZ.HN(e.target) && r6(window.location.href, rZ.ag(document))
            }), L.n4?.addEventListener("turbo:before-frame-render", async e => {
                e.preventDefault();
                let {
                    resume: t,
                    newFrame: n
                } = e.detail;
                if (id = !0, !u) return;
                let r = await u.responseHTML,
                    i = u.location,
                    a = rJ.w.createHTML(r, u.response),
                    o = new DOMParser().parseFromString(a, "text/html");
                u = null;
                let s = e.target,
                    l = o.querySelectorAll("turbo-frame"),
                    c = [...l].find(e => e.id === s?.id),
                    d = rZ.po(o);
                if (!c || d.length > 0) {
                    rZ.uL(`tracked_element_mismatch-${d.join("-")}`), window.location = i;
                    return
                }
                r6(i.href, rZ.ag(o)), rZ.DT(o), rZ.xk(o), rZ.wz(o), iy(s, c), await rZ.q3(), t(), iv(n) && window.scrollTo(0, 0), ih(o)
            }), L.iG?.addEventListener("popstate", () => {
                document.addEventListener("turbo:load", () => {
                    let e = r3()?.replacedElements || [];
                    rZ.wz(document, e)
                }, {
                    once: !0
                })
            }), L.n4?.addEventListener(ta.Q.SUCCESS, () => {
                ip(), id && (id = !1, ig(), ib(), it.u5())
            });
            let ih = e => {
                    let t = e.querySelector("meta[name=turbo-body-classes]")?.content;
                    t && (document.body.setAttribute("class", t), document.querySelector("[data-turbo-body]")?.setAttribute("class", t))
                },
                ip = () => {
                    let e = r3()?.bodyClasses;
                    e && (document.body.setAttribute("class", e), document.querySelector("[data-turbo-body]")?.setAttribute("class", e))
                },
                ig = () => {
                    let e = r3()?.title;
                    e && (0, iu.T)(e)
                },
                ib = () => {
                    let e = r3()?.transients;
                    if (e) {
                        for (let e of document.querySelectorAll("head [data-turbo-transient]")) e.remove();
                        for (let t of e) t.matches("title, script, link[rel=stylesheet]") || (t.setAttribute("data-turbo-transient", ""), document.head.append(t))
                    }
                },
                iy = (e, t) => {
                    e && (e.className = t.className)
                },
                iv = e => "true" !== e.getAttribute("data-turbo-skip-scroll") && "advance" === e.getAttribute("data-turbo-action");
            L.n4?.addEventListener("turbo:frame-load", e => {
                ng.sj() && ng.U6("turbo.frame"), it.TL({
                    skipIfGoingToReactApp: !0,
                    allowedMechanisms: ["turbo.frame"]
                }), e.target instanceof HTMLElement && "advance" !== e.target.getAttribute("data-turbo-action") && it.BT({
                    skipIfGoingToReactApp: !0,
                    allowedMechanisms: ["turbo.frame"]
                })
            }), L.n4?.addEventListener("turbo:load", e => {
                rZ.zH();
                let t = 0 === Object.keys(e.detail.timing).length;
                !ng.sj() || t || ng.OE() ? t && (ng.OE() || ng.sj()) ? it.r_({
                    skipIfGoingToReactApp: !0,
                    allowedMechanisms: ["turbo", "turbo.frame"]
                }) : t && it.Yl() : (it.TL({
                    skipIfGoingToReactApp: !0,
                    allowedMechanisms: ["turbo"]
                }), it.BT({
                    skipIfGoingToReactApp: !0,
                    allowedMechanisms: ["turbo", "turbo.frame"]
                }))
            }), L.n4?.addEventListener("beforeunload", () => it.FP()), L.n4?.addEventListener("turbo:reload", function(e) {
                e instanceof CustomEvent && ng.Ak(e.detail.reason)
            }), L.n4?.addEventListener(ta.Q.END, r8), L.n4?.addEventListener(ta.Q.PROGRESS_BAR.START, r4), L.n4?.addEventListener(ta.Q.PROGRESS_BAR.END, r7), window.requestIdleCallback(() => {
                let e = function() {
                    if ("Intl" in window) try {
                        let e = new window.Intl.DateTimeFormat;
                        return e.resolvedOptions().timeZone
                    } catch {}
                }();
                e && (0, ed.d8)("tz", encodeURIComponent(e))
            });
            var iw = n(76006),
                iS = n(59840),
                iE = n(96056),
                iL = n(8433),
                ij = n(98576);

            function iA(e, t, n) {
                if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
                return t.get(e)
            }

            function iT(e, t) {
                var n = iA(e, t, "get");
                return n.get ? n.get.call(e) : n.value
            }

            function iq(e, t, n) {
                var r = iA(e, t, "set");
                return ! function(e, t, n) {
                    if (t.set) t.set.call(e, n);
                    else {
                        if (!t.writable) throw TypeError("attempted to set read only private field");
                        t.value = n
                    }
                }(e, r, n), n
            }

            function ik(e, t, n, r) {
                var i, a = arguments.length,
                    o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            }! function(e) {
                e.WebAuthn = "webauthn", e.Password = "password", e.GitHubMobile = "github_mobile", e.TotpApp = "app", e.TotpSms = "sms"
            }(b || (b = {}));
            let iC = (p = new WeakMap, (g = class SudoCredentialOptionsElement extends HTMLElement {
                connectedCallback() {
                    let e = this.initialState;
                    iq(this, p, e), this.reRenderPrompt(!0)
                }
                reRenderPrompt(e = !1) {
                    this.resetPrompt();
                    try {
                        switch (iT(this, p)) {
                            case "webauthn":
                                this.renderWebauthnOption();
                                break;
                            case "github_mobile":
                                this.renderGitHubMobileOption(e);
                                break;
                            case "app":
                                this.renderTotpAppOption();
                                break;
                            case "sms":
                                this.renderTotpSmsOption(e);
                                break;
                            default:
                                this.renderPasswordOption()
                        }
                        this.reRenderNavContainer()
                    } catch (e) {
                        this.handleUnexpectedPromptError(e)
                    }
                }
                handleUnexpectedPromptError(e) {
                    let t = "";
                    switch (iT(this, p)) {
                        case "github_mobile":
                            t = this.githubMobileGenericErrorMessage;
                            break;
                        case "sms":
                            t = this.smsGenericErrorMessage;
                            break;
                        default:
                            t = this.genericErrorMessage
                    }
                    if (e && "password" !== iT(this, p)) throw this.renderPasswordOptionWithError(t), e
                }
                renderPasswordOptionWithError(e) {
                    this.showPassword(), this.showErrorMessage(e)
                }
                resetPrompt() {
                    this.hideErrorMessage(), this.isWebAuthnAvailable() && this.hideWebAuthn(), this.isGitHubMobileAvailable() && this.hideGitHubMobile(), this.isTotpAppAvailable() && this.hideTotpApp(), this.isTotpSmsAvailable() && this.hideTotpSms(), this.hidePassword()
                }
                hideWebAuthn() {
                    this.safeSetElementVisibility(this.webauthnContainer, !1), this.safeSetElementVisibility(this.webauthnNav, !1)
                }
                hideGitHubMobile() {
                    this.safeSetElementVisibility(this.githubMobileContainer, !1), this.safeSetElementVisibility(this.githubMobileNav, !1), this.safeSetElementVisibility(this.githubMobileLoading, !1), this.safeSetElementVisibility(this.githubMobileLanding, !1)
                }
                hideTotpApp() {
                    this.safeSetElementVisibility(this.totpAppContainer, !1), this.safeSetElementVisibility(this.totpAppNav, !1)
                }
                hideTotpSms() {
                    this.safeSetElementVisibility(this.totpSmsContainer, !1), this.safeSetElementVisibility(this.totpSmsLanding, !1), this.safeSetElementVisibility(this.totpSmsNav, !1), this.safeSetElementVisibility(this.totpSmsResendNav, !1)
                }
                hidePassword() {
                    this.safeSetElementVisibility(this.passwordContainer, !1), this.safeSetElementVisibility(this.passwordNav, !1)
                }
                reRenderNavContainer() {
                    this.isWebAuthnAvailable() && "webauthn" !== iT(this, p) && this.safeSetElementVisibility(this.webauthnNav, !0), this.isGitHubMobileAvailable() && "github_mobile" !== iT(this, p) && this.safeSetElementVisibility(this.githubMobileNav, !0), this.isTotpAppAvailable() && "app" !== iT(this, p) && this.safeSetElementVisibility(this.totpAppNav, !0), this.isTotpSmsAvailable() && "sms" !== iT(this, p) && this.safeSetElementVisibility(this.totpSmsNav, !0), "password" !== iT(this, p) && this.safeSetElementVisibility(this.passwordNav, !0)
                }
                renderWebauthnOption() {
                    this.safeSetElementVisibility(this.webauthnContainer, !0), this.webauthnGet?.setState(iL.Zh() ? iS.State.Ready : iS.State.Unsupported)
                }
                renderGitHubMobileOption(e) {
                    try {
                        (0, iE._8)()
                    } catch {}
                    e ? (this.safeSetElementVisibility(this.githubMobileLoading, !1), this.safeSetElementVisibility(this.githubMobileLanding, !0), this.safeSetElementVisibility(this.githubMobileContainer, !1)) : (this.safeSetElementVisibility(this.githubMobileLoading, !0), this.safeSetElementVisibility(this.githubMobileLanding, !1), this.safeSetElementVisibility(this.githubMobileContainer, !1), this.initiateGitHubMobileAuthRequest())
                }
                renderTotpSmsOption(e) {
                    e ? (this.safeSetElementVisibility(this.totpSmsLanding, !0), this.safeSetElementVisibility(this.totpSmsContainer, !1)) : (this.safeSetElementVisibility(this.totpSmsLanding, !1), this.safeSetElementVisibility(this.totpSmsContainer, !0), this.initiateTotpSmsRequest())
                }
                renderTotpAppOption() {
                    this.safeSetElementVisibility(this.totpAppContainer, !0)
                }
                renderPasswordOption() {
                    this.safeSetElementVisibility(this.passwordContainer, !0), this.loginField ? this.loginField.focus() : this.passwordField?.focus()
                }
                hasMultipleOptions() {
                    return this.isWebAuthnAvailable() || this.isGitHubMobileAvailable() || this.isTotpAppAvailable() || this.isTotpSmsAvailable()
                }
                isWebAuthnAvailable() {
                    return "true" === this.webauthnAvailable
                }
                isGitHubMobileAvailable() {
                    return "true" === this.githubMobileAvailable
                }
                isTotpAppAvailable() {
                    return "true" === this.totpAppAvailable
                }
                isTotpSmsAvailable() {
                    return "true" === this.totpSmsAvailable
                }
                showWebauthn() {
                    iq(this, p, "webauthn"), this.reRenderPrompt()
                }
                showGitHubMobile() {
                    iq(this, p, "github_mobile"), this.reRenderPrompt()
                }
                showTotpApp() {
                    iq(this, p, "app"), this.reRenderPrompt()
                }
                showTotpSms() {
                    iq(this, p, "sms"), this.reRenderPrompt()
                }
                showPassword() {
                    iq(this, p, "password"), this.reRenderPrompt()
                }
                githubMobileRetry(e) {
                    e.preventDefault(), this.showGitHubMobile()
                }
                async initiateGitHubMobileAuthRequest() {
                    let e = this.githubMobilePromptUrl,
                        t = document.getElementById("sudo-credential-options-github-mobile-csrf").value,
                        n = new FormData;
                    n.append("authenticity_token", t);
                    try {
                        let t = await fetch(e, {
                            method: "POST",
                            headers: {
                                "X-Requested-With": "XMLHttpRequest"
                            },
                            body: n
                        });
                        if (!t.ok && "github_mobile" === iT(this, p)) {
                            this.mobileFailHandler(this.githubMobileGenericErrorMessage);
                            return
                        }
                        let r = await t.json(),
                            i = !!r.challenge;
                        this.safeSetElementVisibility(this.githubMobileNoChallengeMessage, !i), this.safeSetElementVisibility(this.githubMobileChallengeMessage, i), this.safeSetElementVisibility(this.githubMobileChallengeValue, i), i && (this.githubMobileChallengeValue.textContent = r.challenge);
                        let a = document.getElementsByClassName("js-poll-github-mobile-sudo-authenticate")[0];
                        (0, iE.Hu)(a, () => this.mobileApprovedHandler(), e => this.mobileFailHandler(e), () => this.mobileCancelCheck())
                    } catch (e) {
                        "github_mobile" === iT(this, p) && this.mobileFailHandler(this.githubMobileGenericErrorMessage)
                    } finally {
                        "github_mobile" === iT(this, p) && (this.safeSetElementVisibility(this.githubMobileLoading, !1), this.safeSetElementVisibility(this.githubMobileContainer, !0))
                    }
                }
                async resendTotpSms() {
                    this.hideErrorMessage(), (0, ij.C)();
                    try {
                        await this.initiateTotpSmsRequest(!0)
                    } catch (e) {}
                    document.body.classList.remove("is-sending")
                }
                async initiateTotpSmsRequest(e = !1) {
                    let t = new URL(this.totpSmsTriggerUrl, window.location.origin);
                    e && t.searchParams.set("resend", "true");
                    let n = document.getElementById("sudo-credential-options-sms-csrf").value,
                        r = new FormData;
                    r.append("authenticity_token", n);
                    try {
                        let n = await fetch(t, {
                            method: "POST",
                            headers: {
                                "X-Requested-With": "XMLHttpRequest"
                            },
                            body: r
                        });
                        if (n.ok || "sms" !== iT(this, p)) "sms" === iT(this, p) && e && (0, ij.v)();
                        else {
                            let e = await n.json();
                            this.showErrorMessage(e.error)
                        }
                    } catch (e) {
                        "sms" === iT(this, p) && this.showErrorMessage(this.smsGenericErrorMessage)
                    }
                    "sms" === iT(this, p) && this.safeSetElementVisibility(this.totpSmsResendNav, !0)
                }
                mobileApprovedHandler() {
                    if ("github_mobile" === iT(this, p)) {
                        let e = this.githubMobileContainer.getElementsByTagName("form")[0];
                        (0, P.Bt)(e)
                    }
                }
                mobileFailHandler(e) {
                    "github_mobile" === iT(this, p) && (this.showErrorMessage(e), (0, iE.cj)())
                }
                mobileCancelCheck() {
                    return "github_mobile" !== iT(this, p)
                }
                safeSetElementVisibility(e, t) {
                    return !!e && (e.hidden = !t, !0)
                }
                showErrorMessage(e) {
                    this.flashErrorMessageText && (this.flashErrorMessageText.textContent = e, this.safeSetElementVisibility(this.flashErrorMessageContainer, !0))
                }
                hideErrorMessage() {
                    this.flashErrorMessageText && (this.flashErrorMessageText.textContent = ""), this.safeSetElementVisibility(this.flashErrorMessageContainer, !1)
                }
                constructor(...e) {
                    super(...e),
                        function(e, t, n) {
                            (function(e, t) {
                                if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
                            })(e, t), t.set(e, n)
                        }(this, p, {
                            writable: !0,
                            value: void 0
                        })
                }
            }).attrPrefix = "", g);
            ik([iw.Lj], iC.prototype, "initialState", void 0), ik([iw.Lj], iC.prototype, "webauthnAvailable", void 0), ik([iw.Lj], iC.prototype, "githubMobileAvailable", void 0), ik([iw.Lj], iC.prototype, "totpAppAvailable", void 0), ik([iw.Lj], iC.prototype, "totpSmsAvailable", void 0), ik([iw.Lj], iC.prototype, "githubMobilePromptUrl", void 0), ik([iw.Lj], iC.prototype, "githubMobileGenericErrorMessage", void 0), ik([iw.Lj], iC.prototype, "smsGenericErrorMessage", void 0), ik([iw.Lj], iC.prototype, "genericErrorMessage", void 0), ik([iw.Lj], iC.prototype, "totpSmsTriggerUrl", void 0), ik([iw.fA], iC.prototype, "flashErrorMessageContainer", void 0), ik([iw.fA], iC.prototype, "flashErrorMessageText", void 0), ik([iw.fA], iC.prototype, "webauthnContainer", void 0), ik([iw.fA], iC.prototype, "githubMobileContainer", void 0), ik([iw.fA], iC.prototype, "githubMobileLoading", void 0), ik([iw.fA], iC.prototype, "githubMobileLanding", void 0), ik([iw.fA], iC.prototype, "totpAppContainer", void 0), ik([iw.fA], iC.prototype, "totpSmsContainer", void 0), ik([iw.fA], iC.prototype, "totpSmsLanding", void 0), ik([iw.fA], iC.prototype, "passwordContainer", void 0), ik([iw.fA], iC.prototype, "githubMobileNoChallengeMessage", void 0), ik([iw.fA], iC.prototype, "githubMobileChallengeMessage", void 0), ik([iw.fA], iC.prototype, "githubMobileChallengeValue", void 0), ik([iw.fA], iC.prototype, "webauthnNav", void 0), ik([iw.fA], iC.prototype, "githubMobileNav", void 0), ik([iw.fA], iC.prototype, "totpAppNav", void 0), ik([iw.fA], iC.prototype, "totpSmsNav", void 0), ik([iw.fA], iC.prototype, "totpSmsResendNav", void 0), ik([iw.fA], iC.prototype, "passwordNav", void 0), ik([iw.fA], iC.prototype, "webauthnGet", void 0), ik([iw.fA], iC.prototype, "loginField", void 0), ik([iw.fA], iC.prototype, "passwordField", void 0), iC = ik([iw.Ih], iC);
            let iM = 0,
                ix = "IntersectionObserver" in window ? new IntersectionObserver(function(e) {
                    for (let t of e) t.isIntersecting && i_(t.target)
                }, {
                    root: null,
                    rootMargin: "0px",
                    threshold: 1
                }) : null;

            function i_(e) {
                e.classList.remove("js-unread-item", "unread-item")
            }(0, T.N7)(".js-unread-item", {
                constructor: HTMLElement,
                add(e) {
                    iM++, ix && ix.observe(e)
                },
                remove(e) {
                    iM--, ix && ix.unobserve(e), 0 === iM && function() {
                        if (!document.hasFocus()) return;
                        let e = document.querySelector(".js-timeline-marker-form");
                        e && e instanceof HTMLFormElement && (0, P.Bt)(e)
                    }()
                }
            }), (0, T.N7)(".js-discussion[data-channel-target]", {
                subscribe: e => (0, F.RB)(e, "socket:message", function(e) {
                    let t = e.target,
                        n = e.detail.data;
                    if (t.getAttribute("data-channel-target") === n.gid)
                        for (let e of document.querySelectorAll(".js-unread-item")) i_(e)
                })
            });
            let iR = 0,
                iN = /^\(\d+\)\s+/;

            function iH() {
                let e = iR ? `(${iR}) ` : "";
                document.title.match(iN) ? document.title = document.title.replace(iN, e) : document.title = `${e}${document.title}`
            }
            async function iP() {
                if (history.state && history.state.staleRecords) {
                    for (let e in await ea.x, history.state.staleRecords)
                        for (let t of document.querySelectorAll(`.js-updatable-content [data-url='${e}'], .js-updatable-content[data-url='${e}']`)) {
                            let n = history.state.staleRecords[e];
                            t instanceof HTMLElement && (0, ey.Of)(t, n, !0)
                        }(0, $.lO)(null, "", location.href)
                }
            }(0, T.N7)(".js-unread-item", {
                add() {
                    iR++, iH()
                },
                remove() {
                    iR--, iH()
                }
            }), (0, T.N7)(".js-socket-channel.js-updatable-content", {
                subscribe: e => (0, F.RB)(e, "socket:message", function(e) {
                    let {
                        gid: t,
                        wait: n
                    } = e.detail.data, r = e.target, i = t ? function(e, t) {
                        if (e.getAttribute("data-gid") === t) return e;
                        for (let n of e.querySelectorAll("[data-url][data-gid]"))
                            if (n.getAttribute("data-gid") === t) return n;
                        return null
                    }(r, t) : r;
                    i && setTimeout(ey.x0, n || 0, i)
                })
            }), window.addEventListener("pagehide", ey.z8);
            try {
                iP()
            } catch {}(0, w.on)("upload:setup", ".js-upload-avatar-image", function(e) {
                let {
                    form: t
                } = e.detail, n = e.currentTarget.getAttribute("data-alambic-organization"), r = e.currentTarget.getAttribute("data-alambic-owner-type"), i = e.currentTarget.getAttribute("data-alambic-owner-id");
                n && t.append("organization_id", n), r && t.append("owner_type", r), i && t.append("owner_id", i)
            }), (0, w.on)("upload:complete", ".js-upload-avatar-image", function(e) {
                let {
                    attachment: t
                } = e.detail, n = `/settings/avatars/${t.id}`;
                (0, td.W)({
                    content: (0, tm.a_)(document, n),
                    detailsClass: "upload-avatar-details"
                })
            }), (0, w.on)("dialog:remove", ".upload-avatar-details", async function(e) {
                let t = e.currentTarget.querySelector("#avatar-crop-form"),
                    n = t.getAttribute("data-alambic-avatar-id"),
                    r = `/settings/avatars/${n}?op=destroy`,
                    i = e.currentTarget.querySelector(".js-avatar-post-csrf").getAttribute("value"),
                    a = new Request(r, {
                        method: "POST",
                        headers: {
                            "Scoped-CSRF-Token": i,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                await self.fetch(a)
            });
            var iI = n(99550);

            function i$() {
                if (!(0, iI.l)() || document.querySelector(":target")) return;
                let e = (0, nQ.$z)(location.hash),
                    t = e.startsWith("user-content-") ? e : `user-content-${e}`,
                    n = (0, nQ.Q)(document, t) ?? (0, nQ.Q)(document, t.toLowerCase());
                n && (0, tJ.zT)(n)
            }
            async function iO() {
                await n.e("app_assets_modules_github_user-status-submit_ts").then(n.bind(n, 47455))
            }
            window.addEventListener("hashchange", i$), document.addEventListener("turbo:load", i$), async function() {
                await ea.x, i$()
            }(), (0, w.on)("click", "a[href]", function(e) {
                let {
                    currentTarget: t
                } = e;
                t instanceof HTMLAnchorElement && t.href === location.href && location.hash.length > 1 && setTimeout(function() {
                    e.defaultPrevented || i$()
                })
            }), n(19052), (0, T.N7)(".js-user-status-container, .js-load-user-status-submit", {
                subscribe: e => (0, F.RB)(e, "click", iO, {
                    once: !0
                })
            });
            var iD = n(64611);

            function iB(e, t) {
                let n = (t || e).querySelectorAll(".js-user-list-error");
                for (let e of n) e.hidden = !0;
                let r = t ? [t] : e.querySelectorAll(".errored.js-user-list-input-container");
                for (let e of r) e.classList.remove("errored");
                let i = e.querySelector(".js-user-list-base");
                i && (i.hidden = !0)
            }

            function iW(e) {
                if (!(e.currentTarget instanceof HTMLElement)) return;
                let t = e.currentTarget.closest(".js-user-list-form"),
                    n = e.currentTarget.closest(".js-user-list-input-container");
                t && n && iB(t, n)
            }
            async function iF(e, t, n) {
                let r = new FormData;
                for (let e of (r.set("authenticity_token", t), n)) r.append("repository_ids[]", e);
                let i = await fetch(e, {
                        method: "POST",
                        body: r,
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    }),
                    a = new Map;
                if (i.ok) {
                    let e = await i.json();
                    for (let t in e) a.set(t, (0, I.r)(document, e[t]))
                }
                return a
            }
            async function iU() {
                let e = document.querySelectorAll(".js-user-list-menu-content-root");
                if (0 === e.length) return;
                let t = e[0].getAttribute("data-batch-update-url");
                if (!t) return;
                let n = e[0].querySelector(".js-user-list-batch-update-csrf")?.value;
                if (!n) return;
                let r = function(e) {
                        let t = new Map;
                        for (let n of e) {
                            let e = n.querySelector(".js-user-lists-create-trigger")?.getAttribute("data-repository-id");
                            if (e) {
                                let r = t.get(e);
                                r ? r.push(n) : t.set(e, [n])
                            }
                        }
                        return t
                    }(e),
                    i = r.keys(),
                    a = await iF(t, n, i);
                a.size > 0 && function(e, t) {
                    for (let [n, r] of e.entries()) {
                        let e = t.get(n) || [];
                        for (let t of e) t.replaceWith(1 === e.length ? r : r.cloneNode(!0))
                    }
                }(a, r)
            }

            function iz(e) {
                let t = e.currentTarget;
                (0, iD.T)(t) ? function(e) {
                    let t = e.getAttribute("data-warn-unsaved-changes") || "Changes you made may not be saved.";
                    window.onbeforeunload = function(e) {
                        return e.returnValue = t, t
                    }
                }(t) : iV()
            }

            function iV() {
                window.onbeforeunload = null
            }

            function iX({
                currentTarget: e
            }) {
                e.hasAttribute("open") || iV()
            }

            function iG(e) {
                let t = e.currentTarget,
                    n = t.closest("details[open]");
                if (!n) return;
                let r = !0,
                    i = t.querySelectorAll("form[data-warn-unsaved-changes]");
                for (let e of i)
                    if ((0, iD.T)(e)) {
                        let t = e.getAttribute("data-warn-unsaved-changes");
                        r = confirm(t);
                        break
                    } r || e.preventDefault()
            }

            function iK(e) {
                let t = e.target;
                t.classList.remove("will-transition-once")
            }
            async function iZ(e) {
                let t = e.currentTarget,
                    n = t.getAttribute("data-url");
                if (!n || function(e) {
                        let t = e.getAttribute("data-hovercard-type");
                        switch (t) {
                            case "issue":
                            case "pull_request":
                                return !!e.closest("[data-issue-and-pr-hovercards-enabled]");
                            case "discussion":
                                return !!e.closest("[data-discussion-hovercards-enabled]");
                            default:
                                return !1
                        }
                    }(t)) return;
                let r = t.getAttribute("data-id") || "",
                    i = t.textContent,
                    a = document.querySelectorAll(`.js-issue-link[data-id='${r}']`);
                for (let e of a) e.removeAttribute("data-url");
                try {
                    let e = `${n}/title`,
                        t = await fetch(e, {
                            headers: {
                                "X-Requested-With": "XMLHttpRequest",
                                Accept: "application/json"
                            }
                        });
                    if (!t.ok) {
                        let e = Error(),
                            n = t.statusText ? ` ${t.statusText}` : "";
                        throw e.message = `HTTP ${t.status}${n}`, e
                    }
                    let r = await t.json();
                    iJ(a, `${i}, ${r.title}`)
                } catch (r) {
                    let e = (null != r.response ? r.response.status : void 0) || 500,
                        n = 404 === e ? t.getAttribute("data-permission-text") : t.getAttribute("data-error-text");
                    iJ(a, n || "")
                }
            }

            function iJ(e, t) {
                for (let n of e) n instanceof HTMLElement && (n.classList.add("tooltipped", "tooltipped-ne"), n.setAttribute("aria-label", t))
            }(0, S.AC)(".js-user-list-form", async function(e, t) {
                iB(e);
                let n = e.querySelector("[data-submitting-message]"),
                    r = n?.textContent;
                for (let t of (n && (n.textContent = n.getAttribute("data-submitting-message"), n.disabled = !0), e.querySelectorAll(".js-user-list-input"))) t.disabled = !0;
                try {
                    let n = await t.html();
                    (0, w.f)(e, "user-list-form:success", n.html)
                } catch (t) {
                    if (t.response?.status === 422) e.replaceWith(t.response.html);
                    else
                        for (let t of (function(e, t) {
                                let n = e.querySelector(".js-user-list-base");
                                n && (n.textContent = n.getAttribute("data-generic-message"), n.hidden = !1)
                            }(e), n && (r && (n.textContent = r), n.disabled = !1), e.querySelectorAll(".js-user-list-input"))) t.disabled = !1
                }
            }), (0, w.on)("user-list-form:success", ".js-follow-list", e => {
                let t = e.detail,
                    n = t instanceof DocumentFragment ? t.querySelector(".js-target-url") : null;
                n?.href ? location.href = n.href : location.reload()
            }), (0, B.q6)(".js-user-list-form input", iW), (0, B.q6)(".js-user-list-form textarea", iW), (0, w.on)("auto-check-error", ".js-user-list-form input", function(e) {
                let t = e.currentTarget.closest(".js-user-list-input-container"),
                    n = t?.querySelector(".js-user-list-error");
                n && (n.hidden = !1)
            }), (0, w.on)("toggle", ".js-user-list-menu", function(e) {
                let t = e.target;
                if (!(t instanceof HTMLDetailsElement) || t.hasAttribute("open")) return;
                let n = t.querySelector(".js-user-list-menu-form");
                n && (0, iD.T)(n) && (0, P.Bt)(n);
                let r = t.querySelector(".js-user-list-create-trigger-text");
                r && (r.textContent = "")
            }, {
                capture: !0
            }), (0, B.q6)(".js-user-lists-menu-filter", e => {
                let t = e.currentTarget,
                    n = t.value.trim(),
                    r = t.closest(".js-user-list-menu-content-root"),
                    i = r?.querySelector(".js-user-list-create-trigger-text");
                i && (i.textContent = n ? `"${n}"` : "")
            }), (0, S.AC)(".js-user-list-menu-form", async function(e, t) {
                let n;
                try {
                    n = await t.json()
                } catch (t) {
                    (0, v.v)(), (0, w.f)(e, "user-list-menu-form:error", t);
                    return
                }
                if (n.json.didStar) {
                    let t = e.closest(".js-toggler-container");
                    t && t.classList.add("on");
                    let r = n.json.starCount;
                    if (r) {
                        let t = e.closest(".js-social-container");
                        t && n2(t, r)
                    }
                }
                let r = e.closest(".js-user-list-menu-content-root[data-update-after-submit]");
                if (r)
                    for (let t of e.querySelectorAll(".js-user-list-menu-item")) t.checked = t.defaultChecked;
                n.json.didCreate ? await iU() : r && await (0, ey.x0)(r), (0, w.f)(e, "user-list-menu-form:success")
            }), (0, w.on)("click", ".js-user-list-delete-confirmation-trigger", e => {
                let {
                    currentTarget: t
                } = e, n = t.getAttribute("data-template-id");
                if (!n) return;
                let r = document.getElementById(n);
                if (!r || !(r instanceof HTMLTemplateElement)) return;
                let i = t.closest(".js-edit-user-list-dialog");
                i && (i.open = !1);
                let a = r.content.cloneNode(!0),
                    o = r.getAttribute("data-labelledby");
                (0, td.W)({
                    content: a,
                    labelledBy: o
                })
            }), (0, w.on)("click", ".js-user-lists-create-trigger", async function(e) {
                let {
                    currentTarget: t
                } = e, n = document.querySelector(".js-user-list-create-dialog-template"), r = e.currentTarget.getAttribute("data-repository-id"), i = t.closest(".js-user-list-menu-content-root"), a = i?.querySelector(".js-user-lists-menu-filter"), o = a?.value.trim();
                if (!n || !(n instanceof HTMLTemplateElement) || !r) {
                    t instanceof HTMLButtonElement && (t.disabled = !0);
                    return
                }
                let s = n.getAttribute("data-label");
                if (i && (0, iD.T)(i)) {
                    let e = i.querySelector(".js-user-list-menu-form");
                    e && await
                    function(e) {
                        let t = new Promise((t, n) => {
                            e.addEventListener("user-list-menu-form:success", () => t()), e.addEventListener("user-list-menu-form:error", e => n(e))
                        });
                        return (0, P.Bt)(e), t
                    }(e)
                }
                let l = new t0.R(n, {
                        repositoryId: r,
                        placeholderName: o
                    }),
                    c = await (0, td.W)({
                        content: l,
                        label: s
                    });
                c.addEventListener("user-list-form:success", async e => {
                    let n = e.detail;
                    if (!(n instanceof DocumentFragment)) return;
                    let r = n.querySelector(".js-target-url"),
                        i = r?.getAttribute("data-did-star") === "true";
                    if (!i) return;
                    let a = t.closest(".js-toggler-container");
                    a && a.classList.add("on");
                    let o = r?.getAttribute("data-star-count");
                    if (o) {
                        let e = t.closest(".js-social-container");
                        e && n2(e, o)
                    }
                    await iU();
                    let s = c.closest("details");
                    s && (s.open = !1)
                })
            }), (0, T.N7)("[data-warn-unsaved-changes]", {
                add(e) {
                    e.addEventListener("input", iz), e.addEventListener("change", iz), e.addEventListener("submit", iV);
                    let t = e.closest("details-dialog");
                    t && (t.closest("details").addEventListener("toggle", iX), t.addEventListener("details-dialog-close", iG))
                },
                remove(e) {
                    e.removeEventListener("input", iz), e.removeEventListener("change", iz), e.removeEventListener("submit", iV);
                    let t = e.closest("details-dialog");
                    t && (t.closest("details").removeEventListener("toggle", iX), t.removeEventListener("details-dialog-close", iG), iV())
                }
            }), (0, T.N7)(".will-transition-once", {
                constructor: HTMLElement,
                subscribe: e => (0, F.RB)(e, "transitionend", iK)
            }), (0, T.N7)(".js-issue-link", {
                subscribe: e => (0, F.RB)(e, "mouseenter", iZ)
            });
            var iQ = n(12085),
                iY = n.n(iQ);

            function i0() {
                return [Math.floor(255 * Math.random() + 0), Math.floor(255 * Math.random() + 0), Math.floor(255 * Math.random() + 0)]
            }

            function i1(e, t) {
                let n = iY().rgb.hsl(t);
                e.style.setProperty("--label-r", t[0].toString()), e.style.setProperty("--label-g", t[1].toString()), e.style.setProperty("--label-b", t[2].toString()), e.style.setProperty("--label-h", n[0].toString()), e.style.setProperty("--label-s", n[1].toString()), e.style.setProperty("--label-l", n[2].toString())
            }

            function i4(e, t) {
                e.blur();
                let n = e.closest("form"),
                    r = n.querySelector(".js-new-label-color-input");
                (0, P.Se)(r, `#${iY().rgb.hex(t)}`);
                let i = n.querySelector(".js-new-label-color");
                i1(i, t)
            }

            function i7(e, t, n) {
                let r = t.querySelector(e);
                r && (n ? function(e, t) {
                    let n = e.closest(".js-label-error-container");
                    n.classList.add("errored"), e.textContent = t, e.hidden = !1
                }(r, n[0]) : function(e) {
                    let t = e.closest(".js-label-error-container");
                    t.classList.remove("errored"), e.hidden = !0
                }(r))
            }

            function i2(e, t) {
                i7(".js-label-name-error", e, t.name), i7(".js-label-description-error", e, t.description), i7(".js-label-color-error", e, t.color)
            }

            function i5(e) {
                i7(".js-label-name-error", e, null), i7(".js-label-description-error", e, null), i7(".js-label-color-error", e, null)
            }
            async function i9(e) {
                let t;
                let n = e.closest(".js-label-preview-container");
                if (!n) return;
                let r = e.closest(".js-label-form"),
                    i = r.querySelector(".js-new-label-error"),
                    a = r.getAttribute("data-label-id"),
                    o = n.querySelector(".js-label-preview"),
                    s = function(e, t) {
                        let n = e.querySelector(".js-new-label-name-input"),
                            r = n.value.trim();
                        return r.length < 1 && (r = t.getAttribute("data-default-name")), r
                    }(r, o);
                if (!r.checkValidity() && "Label preview" !== s) return;
                let l = function(e) {
                        let t = e.querySelector(".js-new-label-color-input");
                        return t.checkValidity() ? t.value.trim().replace(/^#/, "") : "ededed"
                    }(r),
                    c = function(e) {
                        let t = null,
                            n = e.querySelector(".js-new-label-description-input");
                        return n instanceof HTMLInputElement && n.value.trim().length > 0 && (t = n.value.trim()), t
                    }(r),
                    u = o.getAttribute("data-url-template"),
                    d = function(e, t, n, r, i) {
                        let a = new URL(`${e}${encodeURIComponent(t)}`, window.location.origin),
                            o = new URLSearchParams(a.search.slice(1));
                        return o.append("color", n), r && o.append("description", r), i && o.append("id", i), a.search = o.toString(), a.toString()
                    }(u, s, l, c, a);
                if (n.hasAttribute("data-last-preview-url")) {
                    let e = n.getAttribute("data-last-preview-url");
                    if (d === e) return
                }
                try {
                    t = await (0, tm.a_)(document, d)
                } catch (t) {
                    let e = await t.response.json();
                    i2(r, e), i && (i.textContent = e.message, i.hidden = !1);
                    return
                }
                i && (i.textContent = "", i.hidden = !0), i5(r), o.textContent = "", o.appendChild(t), n.setAttribute("data-last-preview-url", d)
            }

            function i3(e, t) {
                let n = e.closest(".js-details-container");
                n.classList.toggle("is-empty", t)
            }

            function i6(e) {
                let t = document.querySelector(".js-labels-count"),
                    n = Number(t.textContent),
                    r = n + e;
                t.textContent = r.toString();
                let i = document.querySelector(".js-labels-label");
                return i.textContent = i.getAttribute(1 === r ? "data-singular-string" : "data-plural-string"), r
            }
            async function i8(e) {
                let t = e.querySelector(".js-new-label-name-input");
                if (!t) return;
                let n = e.querySelector(".js-new-label-color-input"),
                    r = i0(),
                    i = `#${iY().rgb.hex(r)}`;
                n.value = i;
                let a = e.querySelector(".js-new-label-color");
                i1(a, r);
                let o = document.querySelector(".js-new-label-name"),
                    s = o.textContent;
                (0, P.Se)(t, s), (0, ec.OD)(t), i9(a)
            }(0, B.q6)(".js-label-filter-field", function(e) {
                let t = e.target,
                    n = t.closest("details-menu"),
                    r = n.querySelector(".js-new-label-name");
                if (!r) return;
                let i = t.value.trim();
                r.textContent = i
            }), (0, w.on)("filterable:change", ".js-filterable-issue-labels", function(e) {
                let t = e.currentTarget.closest("details-menu"),
                    n = t.querySelector(".js-add-label-button");
                if (!n) return;
                let r = e.detail.inputField,
                    i = r.value.trim().toLowerCase(),
                    a = !1;
                for (let e of t.querySelectorAll("input[data-label-name]")) {
                    let t = e.getAttribute("data-label-name") || "";
                    if (t.toLowerCase() === i) {
                        a = !0;
                        break
                    }
                }
                n.hidden = 0 === i.length || a
            }), (0, B.ZG)(".js-new-label-color-input", function(e) {
                let t = e.closest("form"),
                    n = t.querySelector(".js-new-label-swatches");
                n.hidden = !1, e.addEventListener("blur", function() {
                    n.hidden = !0
                }, {
                    once: !0
                })
            }), (0, B.q6)(".js-new-label-color-input", function(e) {
                let t = e.target,
                    n = t.value.trim();
                if (!(n.length < 1)) {
                    if (0 !== n.indexOf("#") && (n = `#${n}`, t.value = n), t.checkValidity()) {
                        t.classList.remove("color-fg-danger");
                        let e = t.closest("form"),
                            r = e.querySelector(".js-new-label-color");
                        i1(r, iY().hex.rgb(n))
                    } else t.classList.add("color-fg-danger")
                }
            }), (0, B.w4)("keyup", ".js-new-label-color-input", function(e) {
                let t = e.target,
                    n = t.value.trim();
                if (0 !== n.indexOf("#") && (n = `#${n}`, t.value = n), t.checkValidity()) {
                    let e = t.closest("form"),
                        r = e.querySelector(".js-new-label-color");
                    i1(r, iY().hex.rgb(n))
                }(0, w.f)(t, "change", !1);
                let r = t.closest("form");
                i5(r)
            }), (0, B.w4)("keyup", ".js-new-label-description-input", function(e) {
                let t = e.target,
                    n = t.form;
                i5(n)
            }), (0, B.w4)("keyup", ".js-new-label-color-input", function(e) {
                let t = e.target,
                    n = t.form;
                i5(n)
            }), (0, w.on)("click", ".js-new-label-color", async function(e) {
                let t = e.currentTarget,
                    n = i0();
                i4(t, n), i9(t)
            }), (0, w.on)("mousedown", ".js-new-label-color-swatch", function(e) {
                let t = e.currentTarget,
                    n = t.getAttribute("data-color");
                i4(t, iY().hex.rgb(n)), i9(t);
                let r = t.closest(".js-new-label-swatches");
                r.hidden = !0
            }), (0, w.on)("toggle", ".js-new-label-modal", function(e) {
                e.target.hasAttribute("open") && i8(e.target)
            }, {
                capture: !0
            }), (0, S.AC)(".js-new-label-modal-form", async function(e, t) {
                let n;
                let r = e.querySelector(".js-new-label-error");
                try {
                    n = await t.html()
                } catch (t) {
                    let e = t.response.json;
                    r.textContent = e.message, r.hidden = !1
                }
                if (!n) return;
                r.hidden = !0, document.querySelector(".js-new-label-modal").removeAttribute("open");
                let i = document.querySelector(".js-issue-labels-menu-content"),
                    a = i.querySelector(".js-filterable-issue-labels"),
                    o = n.html.querySelector("input");
                a.prepend(n.html), a.classList.add("filter-sort-list-refresh"), o && o.dispatchEvent(new Event("change", {
                    bubbles: !0
                }));
                let s = i.querySelector(".js-label-filter-field");
                s.value = s.defaultValue, s.focus()
            }), (0, w.on)("click", ".js-edit-label-cancel", function(e) {
                let t = e.target.closest("form");
                i5(t), t.reset();
                let n = t.querySelector(".js-new-label-color-input"),
                    r = n.value,
                    i = t.querySelector(".js-new-label-color");
                i1(i, iY().hex.rgb(r)), (0, ec.Qc)(t), i9(n);
                let a = e.currentTarget.closest(".js-labels-list-item");
                if (a) {
                    let e = a.querySelector(".js-update-label");
                    e.classList.add("d-none");
                    let t = a.querySelector(".js-label-preview");
                    if (t) {
                        t.classList.add("d-none");
                        let e = a.querySelector(".js-label-link");
                        e.classList.remove("d-none")
                    }
                    let n = a.querySelectorAll(".js-hide-on-label-edit");
                    for (let e of n) e.hidden = !e.hidden
                }
            }), (0, S.AC)(".js-update-label", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (n) {
                    let t = n.response.json;
                    i2(e, t);
                    return
                }
                i5(e);
                let r = e.closest(".js-labels-list-item");
                r.replaceWith(n.html)
            }), (0, S.AC)(".js-create-label", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (n) {
                    let t = n.response.json;
                    i2(e, t);
                    return
                }
                e.reset(), i5(e), document.querySelector(".js-label-list").prepend(n.html), i6(1), i3(e, !1);
                let r = e.querySelector(".js-new-label-color"),
                    i = i0();
                i4(r, i), i9(e.querySelector(".js-new-label-name-input")), (0, ec.Qc)(e);
                let a = e.closest(".js-details-container");
                a instanceof HTMLElement && (0, e3.Qp)(a)
            }), (0, w.on)("click", ".js-details-target-new-label", function() {
                let e = document.querySelector(".js-create-label"),
                    t = e.querySelector(".js-new-label-name-input");
                t.focus()
            }), (0, w.on)("click", ".js-edit-label", function(e) {
                let t = e.currentTarget.closest(".js-labels-list-item"),
                    n = t.querySelector(".js-update-label");
                n.classList.remove("d-none");
                let r = n.querySelector(".js-new-label-name-input");
                r.focus();
                let i = t.querySelector(".js-label-preview");
                if (i) {
                    i.classList.remove("d-none");
                    let e = t.querySelector(".js-label-link");
                    e.classList.add("d-none")
                }
                let a = t.querySelectorAll(".js-hide-on-label-edit");
                for (let e of a) e.hidden = !e.hidden
            }), (0, S.AC)(".js-delete-label", async function(e, t) {
                let n = e.closest(".js-labels-list-item");
                n.querySelector(".js-label-delete-spinner").hidden = !1, await t.text();
                let r = i6(-1);
                i3(e, 0 === r), n.remove()
            });
            let ae = (0, W.D)(function(e) {
                i9(e.target)
            }, 500);

            function at() {
                let e = document.querySelector(".js-reveal-custom-thread-settings").checked,
                    t = !document.querySelector(".js-custom-thread-notification-option:checked"),
                    n = document.querySelector(".js-custom-thread-settings"),
                    r = document.querySelector("[data-custom-option-required-text]"),
                    i = e && t ? r.getAttribute("data-custom-option-required-text") : "";
                r.setCustomValidity(i), n.hidden = !e
            }

            function an(e, t, n, r) {
                var i, a = arguments.length,
                    o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            }(0, w.on)("suggester:complete", ".js-new-label-name-input", ae), (0, B.q6)(".js-new-label-name-input", ae), (0, B.q6)(".js-new-label-description-input", ae), (0, B.q6)(".js-new-label-color-input", ae), (0, B.w4)("keypress", ".js-new-label-name-input", function(e) {
                let t = e.target,
                    n = parseInt(t.getAttribute("data-maxlength"));
                (0, eL.rq)(t.value) >= n && e.preventDefault()
            }), (0, w.on)("click", ".js-issues-label-select-menu-item", function(e) {
                (e.altKey || e.shiftKey) && (e.preventDefault(), e.stopPropagation(), e.altKey && (window.location.href = new URL(e.currentTarget.getAttribute("data-excluded-url"), window.location.origin).toString()), e.shiftKey && (window.location.href = new URL(e.currentTarget.getAttribute("data-included-url"), window.location.origin).toString()))
            }), (0, B.w4)("keydown", ".js-issues-label-select-menu-item", function(e) {
                if ("Enter" !== e.key || !e.altKey && !e.shiftKey) return;
                let t = e.currentTarget;
                e.preventDefault(), e.stopPropagation(), t instanceof HTMLAnchorElement && (e.altKey && (window.location.href = new URL(t.getAttribute("data-excluded-url"), window.location.origin).toString()), e.shiftKey && (window.location.href = new URL(t.getAttribute("data-included-url"), window.location.origin).toString()))
            }), (0, w.on)("click", ".js-open-label-creation-modal", async function(e) {
                e.stopImmediatePropagation();
                let t = await (0, td.W)({
                    content: document.querySelector(".js-label-creation-template").content.cloneNode(!0),
                    detailsClass: "js-new-label-modal"
                });
                i8(t)
            }, {
                capture: !0
            }), (0, w.on)("change", ".js-thread-notification-setting", at), (0, w.on)("change", ".js-custom-thread-notification-option", at), (0, w.on)("reset", ".js-custom-thread-settings-form", at);
            let ar = class CollapsibleSidebarWidgetElement extends HTMLElement {
                get activeClass() {
                    return this.getAttribute("active-class") || "collapsible-sidebar-widget-active"
                }
                get loadingClass() {
                    return this.getAttribute("loading-class") || "collapsible-sidebar-widget-loading"
                }
                get url() {
                    return this.getAttribute("url") || ""
                }
                get isOpen() {
                    return this.hasAttribute("open")
                }
                set isOpen(e) {
                    e ? this.setAttribute("open", "") : this.removeAttribute("open")
                }
                onKeyDown(e) {
                    if ("Enter" === e.code || "Space" === e.code) return e.preventDefault(), this.load()
                }
                onMouseDown(e) {
                    return e.preventDefault(), this.load()
                }
                load() {
                    return this.pendingRequest ? this.pendingRequest.abort() : this.collapsible.hasAttribute("loaded") ? this.isOpen ? this.setClose() : this.setOpen() : (this.setLoading(), this.updateCollapsible())
                }
                setLoading() {
                    this.classList.add(this.loadingClass), this.classList.remove(this.activeClass)
                }
                setOpen() {
                    this.classList.add(this.activeClass), this.classList.remove(this.loadingClass), this.isOpen = !0
                }
                setClose() {
                    this.classList.remove(this.activeClass), this.classList.remove(this.loadingClass), this.isOpen = !1
                }
                handleAbort() {
                    this.pendingRequest = null, this.setClose()
                }
                async updateCollapsible() {
                    try {
                        this.pendingRequest = new AbortController, this.pendingRequest.signal.addEventListener("abort", () => this.handleAbort());
                        let e = await fetch(this.url, {
                            signal: this.pendingRequest?.signal,
                            headers: {
                                Accept: "text/html",
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        });
                        if (this.pendingRequest = null, !e.ok) return this.setClose();
                        let t = await e.text();
                        this.collapsible.innerHTML = t, this.collapsible.setAttribute("loaded", ""), this.setOpen()
                    } catch {
                        return this.pendingRequest = null, this.setClose()
                    }
                }
            };

            function ai(e, t, n, r) {
                var i, a = arguments.length,
                    o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            }
            an([iw.fA], ar.prototype, "collapsible", void 0), ar = an([iw.Ih], ar);
            let aa = ((y = class SidebarMemexInputElement extends HTMLElement {
                get isDisabled() {
                    return this.read?.hasAttribute("disabled")
                }
                set hasErrored(e) {
                    e ? this.setAttribute("errored", "") : this.removeAttribute("errored")
                }
                set disabled(e) {
                    e ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                }
                get hasExpanded() {
                    return "true" === this.read.getAttribute("aria-expanded")
                }
                get detailsElement() {
                    return this.querySelector("details") ?? null
                }
                connectedCallback() {
                    this.disabled = this.read?.disabled ?? !0, this.detailsElement?.addEventListener("toggle", () => this.handleSelectMenuToggle())
                }
                disconnectedCallback() {
                    this.detailsElement?.removeEventListener("toggle", () => this.handleSelectMenuToggle())
                }
                handleSelectMenuToggle() {
                    this.detailsElement && !this.detailsElement?.open ? this.disabled = !0 : this.detailsElement && this.detailsElement?.open && (this.disabled = !1)
                }
                handleDetailsSelect(e) {
                    let t = e.target,
                        n = e.detail?.relatedTarget,
                        r = t.closest("details"),
                        i = r?.querySelector("[data-menu-button]"),
                        a = r?.querySelector("summary");
                    if ("true" === n.getAttribute("aria-checked")) {
                        for (let t of (n.setAttribute("aria-checked", "false"), e.preventDefault(), this.inputs))
                            if (n.contains(t)) {
                                this.updateCell(t.name, ""), i?.innerHTML && (i.innerHTML = t.placeholder);
                                break
                            } r?.removeAttribute("open"), a?.focus()
                    }
                }
                handleDetailsSelected(e) {
                    let t = e.detail?.relatedTarget;
                    for (let e of this.inputs)
                        if (t.contains(e)) {
                            this.updateCell(e.name, e.value);
                            break
                        }
                }
                mouseDownFocus(e) {
                    this.isDisabled && this.onFocus(e)
                }
                keyDownFocus(e) {
                    ("Enter" === e.code || "Space" === e.code) && (this.detailsElement && this.onSelectMenuOpen(), this.read !== document.activeElement && this.onFocus(e))
                }
                mouseDownFocusHeader() {
                    this.detailsElement && this.onSelectMenuOpen()
                }
                onChange(e) {
                    let t = e.target;
                    "date" !== t.getAttribute("type") && this.updateCell(this.read?.name, this.read?.value)
                }
                onFocus(e) {
                    e.preventDefault(), this.disabled = !1, this.read.disabled = !1, this.read.focus()
                }
                onSelectMenuOpen() {
                    this.detailsElement && (this.detailsElement.open = !0)
                }
                onBlur(e) {
                    if (this.hasExpanded) {
                        e.preventDefault();
                        return
                    }
                    let t = e.target;
                    "date" === t.getAttribute("type") && this.updateCell(this.read?.name, this.read?.value), this.read.disabled = !0, this.disabled = !0
                }
                onKeyDown(e) {
                    "Enter" !== e.code && "Tab" !== e.code || (e.preventDefault(), e.stopPropagation(), this.hasExpanded || this.read.blur())
                }
                async updateCell(e = "", t = "") {
                    let n = new FormData;
                    for (let r of (n.set(e, t), n.set("ui", this.instrumentType), this.parameters)) n.set(r.name, r.value);
                    try {
                        if (this.write) {
                            let e = this.read.value,
                                t = "date" === this.read.type && e ? this.format.format(Date.parse(e)) : e;
                            this.write.textContent = e ? t : this.read.placeholder
                        }
                        let e = await fetch(this.updateUrl, {
                            method: "PUT",
                            body: n,
                            headers: {
                                Accept: "application/json",
                                "X-Requested-With": "XMLHttpRequest",
                                "Scoped-CSRF-Token": `${this.csrfToken}`
                            }
                        });
                        if (!e.ok) throw Error("connection error");
                        if (!this.write) return;
                        let r = await e.json(),
                            i = r.memexProjectItem.memexProjectColumnValues.find(e => e.memexProjectColumnId === Number(this.columnId)),
                            a = i.value,
                            o = this.parseAndFormatUpdate(a);
                        this.write.innerHTML = t ? o : this.read.placeholder
                    } catch (e) {
                        this.hasErrored = !0
                    }
                }
                parseAndFormatUpdate(e) {
                    switch (this.read.type) {
                        case "date": {
                            let t = e.value ? Date.parse(e.value) : void 0;
                            return t ? this.format.format(t) : ""
                        }
                        case "number":
                            return null == e.value ? "" : e.value;
                        default:
                            return e.html ?? ""
                    }
                }
                constructor(...e) {
                    super(...e), this.updateUrl = "", this.csrfToken = "", this.instrumentType = "", this.columnId = 1, this.format = Intl.DateTimeFormat("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        timeZone: "UTC"
                    })
                }
            }).attrPrefix = "", y);
            ai([iw.Lj], aa.prototype, "updateUrl", void 0), ai([iw.Lj], aa.prototype, "csrfToken", void 0), ai([iw.Lj], aa.prototype, "instrumentType", void 0), ai([iw.Lj], aa.prototype, "columnId", void 0), ai([iw.GO], aa.prototype, "inputs", void 0), ai([iw.fA], aa.prototype, "read", void 0), ai([iw.fA], aa.prototype, "write", void 0), ai([iw.GO], aa.prototype, "parameters", void 0), aa = ai([iw.Ih], aa);
            var ao = n(98973);

            function as(e, t = !1) {
                (t || ! function(e) {
                    let t = e.getAttribute("data-reviewers-team-size-check-url");
                    if (!t) return !1;
                    let n = [...document.querySelectorAll(".js-reviewer-team")].map(e => e.getAttribute("data-id")),
                        r = e instanceof HTMLFormElement ? new FormData(e) : ab(e),
                        i = new URLSearchParams(r).getAll("reviewer_team_ids[]"),
                        a = i.filter(e => !n.includes(e));
                    if (0 === a.length) return !1;
                    let o = new URLSearchParams(a.map(e => ["reviewer_team_ids[]", e]));
                    return ag(e, `${t}?${o}`), !0
                }(e)) && (e instanceof HTMLFormElement ? (0, P.Bt)(e) : ah(e))
            }

            function al(e) {
                let t = e.currentTarget,
                    n = t.closest(".js-issue-sidebar-form") || t.querySelector(".js-issue-sidebar-form");
                as(n)
            }

            function ac(e, t) {
                let n = e.querySelector(`[data-menu-trigger="${t}"]`);
                n?.focus()
            }(0, w.on)("details-menu-selected", ".js-discussion-sidebar-menu", function(e) {
                let t = e.detail.relatedTarget,
                    n = e.currentTarget,
                    r = t.closest(".js-issue-sidebar-form"),
                    i = n.hasAttribute("data-multiple");
                if (t.hasAttribute("data-clear-assignees")) {
                    let e = n.querySelectorAll('input[name="issue[user_assignee_ids][]"]:checked');
                    for (let t of e) t.disabled = !1, t.checked = !1;
                    as(r)
                } else i ? n.closest("details").addEventListener("toggle", al, {
                    once: !0
                }) : as(r)
            }, {
                capture: !0
            }), (0, S.AC)(".js-issue-sidebar-form", async function(e, t) {
                let n;
                try {
                    let n = await t.html(),
                        r = e.closest(".js-discussion-sidebar-item"),
                        i = r?.querySelector(".select-menu")?.getAttribute("id"),
                        a = r?.parentElement;
                    r.replaceWith(n.html), a && i && ac(a, i)
                } catch (e) {
                    if (e instanceof Error) throw e
                } finally {
                    e.dispatchEvent(new CustomEvent("submit:complete", {
                        bubbles: !0,
                        detail: {
                            error: n
                        }
                    }))
                }
            }), (0, w.on)("click", "div.js-issue-sidebar-form .js-suggested-reviewer", function(e) {
                let t = e.currentTarget,
                    n = t.closest(".js-issue-sidebar-form");
                ah(n, "post", {
                    name: t.name,
                    value: t.value
                }), e.preventDefault()
            }), (0, w.on)("click", "div.js-issue-sidebar-form .js-issue-assign-self", function(e) {
                let t = e.currentTarget,
                    n = t.closest(".js-issue-sidebar-form");
                ah(n, "post", {
                    name: t.name,
                    value: t.value
                }), t.remove(), document.querySelector("form#new_issue .js-submit-button-value")?.remove(), e.preventDefault()
            }), (0, w.on)("click", ".js-issue-unassign-self", function(e) {
                let t = e.currentTarget.closest(".js-issue-sidebar-form");
                ah(t, "delete"), e.preventDefault()
            });
            let au = new Set;
            async function ad(e, t) {
                let n = e.getAttribute("data-cache-name"),
                    r = sessionStorage.getItem(t);
                if (!n || !r || au.has(n)) return;
                au.add(n);
                let i = JSON.parse(r),
                    a = [];
                for (let [t, n] of i) {
                    if ("[object String]" !== Object.prototype.toString.call(n)) continue;
                    let r = document.createElement("input");
                    r.type = "hidden", r.value = n, r.name = t, e.appendChild(r), a.push(r)
                }
                try {
                    for (let t of (await ap(e), a)) t.remove()
                } catch (e) {
                    au.delete(n)
                }
            }
            let am = !1;

            function af(e, t) {
                if (am) return;
                let n = ab(e);
                ! function(e, t, n) {
                    let r = e.getAttribute("data-cache-name");
                    if (!r) return;
                    let i = [];
                    for (let [e, n] of t.entries()) - 1 !== e.indexOf(r) && i.push([e, n]);
                    let a = i.filter(e => "" !== e[1]);
                    a.length > 0 ? sessionStorage.setItem(n, JSON.stringify(a)) : sessionStorage.removeItem(n)
                }(e, n, t), au.clear()
            }
            async function ah(e, t = "post", n) {
                await ap(e, t, n);
                let r = e.closest(".js-discussion-sidebar-item"),
                    i = r?.querySelector(".select-menu")?.getAttribute("id"),
                    a = r?.parentElement;
                a && i && ac(a, i)
            }
            async function ap(e, t = "post", n) {
                let r = ab(e);
                n && r.append(n.name, n.value);
                let i = e.getAttribute("data-url");
                if (!i) return;
                let a = e.querySelector(".js-data-url-csrf"),
                    o = await fetch(i, {
                        method: t,
                        body: "delete" === t ? "" : r,
                        mode: "same-origin",
                        headers: {
                            "Scoped-CSRF-Token": a.value,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                if (!o.ok) return;
                let s = await o.text();
                ! function(e, t) {
                    e.replaceWith((0, I.r)(document, t))
                }(e.closest(".js-discussion-sidebar-item"), s)
            }
            async function ag(e, t) {
                let n = await fetch(t);
                if (!n.ok) return;
                let r = await n.text();
                if (r.match(/[^\w-]js-large-team[^\w-]/)) ! function(e, t) {
                    let n = e.querySelector(".js-large-teams-check-warning-container");
                    for (; n.firstChild;) n.removeChild(n.firstChild);
                    n.appendChild((0, I.r)(document, t));
                    let r = n.querySelector("details");

                    function i(t) {
                        if (t.target instanceof Element) {
                            if (r.open = !1, !t.target.classList.contains("js-large-teams-confirm-button")) {
                                let t = e.querySelectorAll("input[name='reviewer_team_ids[]']");
                                for (let e of t) n.querySelector(`.js-large-team[data-id='${e.value}']`) && (e.checked = !1)
                            }
                            as(e, !0), t.preventDefault()
                        }
                    }
                    n.querySelector(".js-large-teams-confirm-button").addEventListener("click", i, {
                        once: !0
                    }), n.querySelector(".js-large-teams-cancel-button").addEventListener("click", i, {
                        once: !0
                    }), r.addEventListener("details-dialog-close", i, {
                        once: !0
                    }), r.open = !0
                }(e, r);
                else {
                    as(e, !0);
                    return
                }
            }

            function ab(e) {
                let t = e.closest("form");
                if (!t) return new FormData;
                let n = new FormData(t),
                    r = n.entries(),
                    i = new FormData;
                for (let [e, n] of r) t.contains(function(e, t, n) {
                    for (let r of e.elements)
                        if ((r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || r instanceof HTMLButtonElement) && r.name === t && r.value === n) return r;
                    return null
                }(t, e, n.toString())) && i.append(e, n);
                return i
            }(0, T.N7)("[data-cacher]", {
                add(e) {
                    let t = function(e, t) {
                        let n = e.getAttribute("data-cache-name");
                        return `${t}:sidebar:${n}`
                    }(e, (0, ao.e)());
                    ad(e, t), window.addEventListener("pagehide", () => af(e, t)), window.addEventListener("turbo:before-visit", () => af(e, t)), window.addEventListener("submit", e => {
                        e.defaultPrevented || (am = !0, setTimeout(() => {
                            for (let e of Object.keys(sessionStorage)) - 1 !== e.indexOf(t) && (sessionStorage.removeItem(e), au.clear())
                        }, 0))
                    }, {
                        capture: !0
                    })
                }
            }), (0, w.on)("click", "div.js-project-column-menu-container .js-project-column-menu-item button", async function(e) {
                let t = e.currentTarget;
                ! function(e) {
                    let t = e.closest(".js-project-column-menu-dropdown"),
                        n = t.querySelector(".js-project-column-menu-summary"),
                        r = e.getAttribute("data-column-name");
                    n.textContent = r
                }(t);
                let n = t.getAttribute("data-url"),
                    r = t.parentElement.querySelector(".js-data-url-csrf"),
                    i = t.getAttribute("data-card-id"),
                    a = new FormData;
                a.append("card_id", i), a.append("use_automation_prioritization", "true"), e.preventDefault();
                let o = await fetch(n, {
                    method: "PUT",
                    mode: "same-origin",
                    body: a,
                    headers: {
                        "Scoped-CSRF-Token": r.value,
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (!o.ok) return;
                let s = document.activeElement,
                    l = t.closest(".js-project-column-menu-dropdown");
                if (s && l.contains(s)) try {
                    s.blur()
                } catch (e) {}
            }), (0, w.on)("click", ".js-prompt-dismiss", function(e) {
                e.currentTarget.closest(".js-prompt").remove()
            }), (0, w.on)("click", ".js-convert-to-draft", function(e) {
                let t = e.currentTarget.getAttribute("data-url"),
                    n = e.currentTarget.parentElement.querySelector(".js-data-url-csrf");
                fetch(t, {
                    method: "POST",
                    mode: "same-origin",
                    headers: {
                        "Scoped-CSRF-Token": n.value,
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })
            }), (0, w.on)("click", "div.js-restore-item", async function(e) {
                let t = e.currentTarget.getAttribute("data-url"),
                    n = e.currentTarget.getAttribute("data-column"),
                    r = e.currentTarget.querySelector(".js-data-url-csrf"),
                    i = new FormData;
                i.set("memexProjectItemIds[]", n);
                let a = await fetch(t, {
                    method: "PUT",
                    mode: "same-origin",
                    body: i,
                    headers: {
                        "Scoped-CSRF-Token": r.value,
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (!a.ok) throw Error("connection error");
                al(e)
            }), (0, T.N7)("#clear-project-search-button", e => {
                e?.setAttribute("type", "button"), e?.addEventListener("click", () => {
                    let e = document.getElementById("project-search-input");
                    e && (e.value = "", e.focus())
                })
            });
            let ay = Object.freeze({
                INITIAL: "soft-nav:external:initial",
                START: "soft-nav:external:start",
                SUCCESS: "soft-nav:external:success",
                ERROR: "soft-nav:external:error",
                RENDER: "soft-nav:external:render"
            });
            var av = n(45528);

            function aw() {
                return !!document.querySelector('react-app[data-lazy="true"]')
            }

            function aS() {
                return !!document.querySelector('react-app[data-alternate="true"]')
            }

            function aE() {
                return performance.getEntriesByType("resource").some(e => "fetch" === e.initiatorType && e.name.includes("_graphql?"))
            }

            function aL() {
                return performance.getEntriesByType("resource").some(e => "script" === e.initiatorType)
            }
            async function aj() {
                await ea.C, window.requestIdleCallback(aA)
            }

            function aA() {
                d && ((0, E.qP)("web-vital", (0, E.yM)(d)), d = void 0)
            }
            var aT = n(55009);
            let aq = (0, L.cF)(),
                ak = aw(),
                aC = aS();

            function aM(e) {
                "soft-navigation" === e.navigationType && ax(e, !0)
            }

            function ax(e, t = !1) {
                let {
                    name: n,
                    value: r
                } = e, i = {
                    name: window.location.href,
                    app: (0, ng.Nb)() || "rails"
                };
                i[n.toLowerCase()] = r, (0, nb.c)("SAMPLE_NETWORK_CONN_TYPE") && (i.networkConnType = "connection" in navigator ? navigator.connection.effectiveType : "N/A"), t && (i.mechanism = aT.CF[(0, ng.wG)()]), "HPC" === n ? (i.soft = e.soft, i.ssr = e.ssr, i.mechanism = aT.CF[e.mechanism], i.lazy = e.lazy, i.alternate = e.alternate, i.hpcFound = e.found, i.hpcGqlFetched = e.gqlFetched, i.hpcJsFetched = e.jsFetched, i.headerRedesign = !!document.querySelector("header.AppHeader")) : (i.ssr = aq, i.lazy = ak, i.alternate = aC);
                let a = document.querySelector('meta[name="synthetic-test"]');
                a && (i.synthetic = !0), (0, q.b)({
                        webVitalTimings: [i]
                    }),
                    function(e, t) {
                        let n;
                        if (document.querySelector('[data-hydrostats="publish"]') && e.value < 6e4) {
                            if (!n) {
                                let e = document.querySelector("react-app");
                                (d || (d = {}, aj()), n = d).react = !!e, n.reactApp = e?.getAttribute("app-name"), n.reactPartials = [...new Set(Array.from(document.querySelectorAll("react-partial")).map(e => e.getAttribute("partial-name") || ""))], n.ssr = t, n.controller = document.querySelector('meta[name="route-controller"]')?.content, n.action = document.querySelector('meta[name="route-action"]')?.content, n.routePattern = document.querySelector('meta[name="route-pattern"]')?.content
                            }
                            "HPC" === e.name ? n[e.name.toLocaleLowerCase()] = {
                                name: e.name,
                                value: e.value,
                                element: e.attribution?.element,
                                soft: !!e.soft,
                                mechanism: e.mechanism
                            } : n[e.name.toLocaleLowerCase()] = function(e) {
                                let t = {
                                    name: e.name,
                                    value: e.value
                                };
                                switch (e.name) {
                                    case "LCP":
                                        t.element = e.attribution?.element;
                                        break;
                                    case "FID":
                                    case "INP":
                                        t.element = e.attribution?.eventTarget;
                                        break;
                                    case "CLS":
                                        t.element = e.attribution?.largestShiftTarget
                                }
                                return t
                            }(e)
                        }
                    }(e, i.ssr),
                    function(e, t) {
                        let n = document.querySelector("#staff-bar-web-vitals"),
                            r = n?.querySelector(`[data-metric=${e.toLowerCase()}]`);
                        r && (r.textContent = t.toPrecision(6))
                    }(n, r)
            }
            async function a_() {
                window.performance && window.performance.timing && window.performance.getEntriesByType && (await ea.C, await new Promise(e => setTimeout(e)), aR(), aN())
            }
            let aR = () => {
                    let e = window.performance.getEntriesByType("resource").map(e => ({
                        name: e.name,
                        entryType: e.entryType,
                        startTime: e.startTime,
                        duration: e.duration,
                        initiatorType: e.initiatorType,
                        nextHopProtocol: e.nextHopProtocol,
                        workerStart: e.workerStart,
                        workerTiming: (e.workerTiming || []).map(e => ({
                            duration: e.duration,
                            startTime: e.startTime,
                            name: e.name,
                            entryType: e.entryType
                        })),
                        serverTiming: (e.serverTiming || []).map(e => ({
                            duration: e.duration,
                            description: e.description,
                            name: e.name
                        })),
                        redirectStart: e.redirectStart,
                        redirectEnd: e.redirectEnd,
                        fetchStart: e.fetchStart,
                        domainLookupStart: e.domainLookupStart,
                        domainLookupEnd: e.domainLookupEnd,
                        connectStart: e.connectStart,
                        connectEnd: e.connectEnd,
                        secureConnectionStart: e.secureConnectionStart,
                        requestStart: e.requestStart,
                        responseStart: e.responseStart,
                        responseEnd: e.responseEnd,
                        transferSize: e.transferSize,
                        encodedBodySize: e.encodedBodySize,
                        decodedBodySize: e.decodedBodySize
                    }));
                    e.length && (0, q.b)({
                        resourceTimings: e
                    })
                },
                aN = () => {
                    let e = window.performance.getEntriesByType("navigation").map(e => ({
                        activationStart: e.activationStart,
                        name: e.name,
                        entryType: e.entryType,
                        startTime: e.startTime,
                        duration: e.duration,
                        initiatorType: e.initiatorType,
                        nextHopProtocol: e.nextHopProtocol,
                        workerStart: e.workerStart,
                        workerTiming: (e.workerTiming || []).map(e => ({
                            duration: e.duration,
                            startTime: e.startTime,
                            name: e.name,
                            entryType: e.entryType
                        })),
                        serverTiming: (e.serverTiming || []).map(e => ({
                            duration: e.duration,
                            description: e.description,
                            name: e.name
                        })),
                        redirectStart: e.redirectStart,
                        redirectEnd: e.redirectEnd,
                        fetchStart: e.fetchStart,
                        domainLookupStart: e.domainLookupStart,
                        domainLookupEnd: e.domainLookupEnd,
                        connectStart: e.connectStart,
                        connectEnd: e.connectEnd,
                        secureConnectionStart: e.secureConnectionStart,
                        requestStart: e.requestStart,
                        responseStart: e.responseStart,
                        responseEnd: e.responseEnd,
                        transferSize: e.transferSize,
                        encodedBodySize: e.encodedBodySize,
                        decodedBodySize: e.decodedBodySize,
                        unloadEventStart: e.unloadEventStart,
                        unloadEventEnd: e.unloadEventEnd,
                        domInteractive: e.domInteractive,
                        domContentLoadedEventStart: e.domContentLoadedEventStart,
                        domContentLoadedEventEnd: e.domContentLoadedEventEnd,
                        domComplete: e.domComplete,
                        loadEventStart: e.loadEventStart,
                        loadEventEnd: e.loadEventEnd,
                        type: e.type,
                        redirectCount: e.redirectCount
                    }));
                    e.length && (0, q.b)({
                        navigationTimings: e
                    })
                },
                aH = e => {
                    let t = e.nodeName;
                    return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
                },
                aP = (e, t) => {
                    let n = "";
                    try {
                        for (; e && 9 !== e.nodeType;) {
                            let r = e,
                                i = r.id ? `#${r.id}` : aH(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? `.${r.classList.value.trim().replace(/\s+/g,".")}` : "");
                            if (n.length + i.length > (t || 100) - 1) return n || i;
                            if (n = n ? `${i}>${n}` : i, r.id) break;
                            e = r.parentNode
                        }
                    } catch (e) {}
                    return n
                };
            let HPCTimingEvent = class HPCTimingEvent extends Event {
                constructor(e, t, n, r, i, a, o, s, l, c) {
                    super("hpc:timing"), this.soft = e, this.ssr = t, this.lazy = n, this.alternate = r, this.mechanism = i, this.found = a, this.gqlFetched = o, this.jsFetched = s, this.name = "HPC", this.value = performance.now() - l, this.attribution = {
                        element: aP(c)
                    }
                }
            };
            let HPCDomInsertionEvent = class HPCDomInsertionEvent extends Event {
                constructor(e) {
                    super("hpc:dom-insertion"), this.element = e
                }
            };
            let aI = new AbortController;

            function a$(e, t) {
                (0, av.NO)(({
                    value: n,
                    attribution: r
                }) => {
                    window.performance.measure("HPC", {
                        start: "navigationStart",
                        end: n
                    }), ax({
                        name: "HPC",
                        value: n,
                        soft: e,
                        found: t,
                        gqlFetched: aE(),
                        jsFetched: aL(),
                        ssr: (0, L.cF)(),
                        lazy: aw(),
                        alternate: aS(),
                        mechanism: "hard",
                        attribution: {
                            element: r?.element
                        }
                    })
                })
            }

            function aO({
                soft: e = !1,
                mechanism: t = "hard"
            }) {
                let n, r, i;
                aI.abort(), aI = new AbortController;
                let a = e ? performance.now() : 0,
                    o = new EventTarget,
                    s = !1,
                    l = new MutationObserver(i => {
                        let s = !1,
                            c = !1,
                            u = null,
                            d = null;
                        if (!i.every(e => 0 === e.addedNodes.length)) {
                            for (let e of i)
                                if ("childList" === e.type) {
                                    for (let t of e.addedNodes)
                                        if (t instanceof Element) {
                                            if (u = t.hasAttribute("data-hpc") ? t : t.querySelector("[data-hpc]")) {
                                                cancelAnimationFrame(n), s = !0;
                                                break
                                            }("function" == typeof t.checkVisibility ? t.checkVisibility() : !!(t.offsetParent || t.offsetWidth || t.offsetHeight)) && (d = t, cancelAnimationFrame(n), c = !0)
                                        } if (s) break
                                } s && u ? (window.performance.measure("HPC", "navigationStart"), l.disconnect(), r = requestAnimationFrame(() => {
                                o.dispatchEvent(new HPCTimingEvent(e, (0, L.cF)(), aw(), aS(), t, !0, aE(), aL(), a, u))
                            })) : c && (n = requestAnimationFrame(() => {
                                o.dispatchEvent(new HPCDomInsertionEvent(d))
                            }))
                        }
                    });
                l.observe(document, {
                    childList: !0,
                    subtree: !0
                });
                let c = {
                        capture: !0,
                        passive: !0,
                        once: !0,
                        signal: aI.signal
                    },
                    u = () => aI.abort();
                document.addEventListener("touchstart", u, c), document.addEventListener("mousedown", u, c), document.addEventListener("keydown", u, c), document.addEventListener("pointerdown", u, c);
                let d = !1;
                o.addEventListener("hpc:dom-insertion", n => {
                    d = !0, clearTimeout(i);
                    let r = new HPCTimingEvent(e, (0, L.cF)(), aw(), aS(), t, !1, aE(), aL(), a, n.element);
                    i = setTimeout(() => o.dispatchEvent(r), 1e4)
                }, {
                    signal: aI.signal
                }), o.addEventListener("hpc:timing", e => {
                    !s && e.value < 6e4 && ax(e), aI.abort()
                }, {
                    signal: aI.signal
                }), aI.signal.addEventListener("abort", () => {
                    cancelAnimationFrame(r), cancelAnimationFrame(n), clearTimeout(i), l.disconnect()
                }), document.addEventListener("visibilitychange", () => {
                    s = !0, aI.abort()
                }, {
                    signal: aI.signal
                }), e || setTimeout(() => {
                    d || a$(e, !1)
                }, 1e4), !e && document.querySelector("[data-hpc]") && (a$(e, !0), aI.abort())
            }
            let InteractionCountObserver = class InteractionCountObserver {
                get interactionCount() {
                    return this.observer ? this.interactionCountEstimate : performance.interactionCount || 0
                }
                teardown() {
                    this.observer && (this.observer.takeRecords(), this.observer.disconnect(), this.observer = void 0)
                }
                observe() {
                    "interactionCount" in performance || this.observer || (this.observer = new PerformanceObserver(async e => {
                        await Promise.resolve(), this.updateEstimate(e.getEntries())
                    }), this.observer.observe({
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                }
                constructor() {
                    this.interactionCountEstimate = 0, this.minKnownInteractionId = 1 / 0, this.maxKnownInteractionId = 0, this.updateEstimate = e => {
                        for (let t of e) t.interactionId && (this.minKnownInteractionId = Math.min(this.minKnownInteractionId, t.interactionId), this.maxKnownInteractionId = Math.max(this.maxKnownInteractionId, t.interactionId), this.interactionCountEstimate = this.maxKnownInteractionId ? (this.maxKnownInteractionId - this.minKnownInteractionId) / 7 + 1 : 0)
                    }
                }
            };
            let InteractionList = class InteractionList {
                get shortestInteraction() {
                    return this.interactions[this.interactions.length - 1]
                }
                get(e) {
                    return this.interactionsMap.get(e)
                }
                update(e, t) {
                    let n = Math.max(e.latency, t.duration);
                    e.entries.push(t), n !== e.latency && (e.latency = Math.max(e.latency, t.duration), this.sort())
                }
                add(e) {
                    let t = this.shortestInteraction;
                    (this.interactions.length <= this.maxSize || !t || e.latency > t.latency) && (this.interactionsMap.set(e.id, e), this.interactions.push(e), this.sort(), this.interactions.length > this.maxSize && this.interactions.pop())
                }
                sort() {
                    this.interactions.sort((e, t) => t.latency - e.latency)
                }
                findEntry(e) {
                    return this.interactions.some(t => t.entries.some(t => e.duration === t.duration && e.startTime === t.startTime))
                }
                estimateP98(e) {
                    let t = Math.min(this.interactions.length - 1, Math.floor(e / 50));
                    return this.interactions[t]
                }
                constructor(e) {
                    this.interactions = [], this.interactionsMap = new Map, this.maxSize = e
                }
            };
            let INPMetric = class INPMetric {
                constructor(e, t) {
                    this.name = "INP", this.value = e, this.entries = t;
                    let n = t.find(e => e.target);
                    this.attribution = {
                        eventTarget: aP(n?.target)
                    }
                }
            };
            let InteractionProcessor = class InteractionProcessor {
                get inp() {
                    let e = this.interactions.estimateP98(this.interactionCountObserver.interactionCount);
                    return e ? new INPMetric(e.latency, e.entries) : new INPMetric(0, [])
                }
                teardown() {
                    this.interactionCountObserver.teardown()
                }
                processEntries(e) {
                    for (let t of e) {
                        if (t.interactionId) {
                            this.processEntry(t);
                            continue
                        }
                        "first-input" !== t.entryType || this.interactions.findEntry(t) || this.processEntry(t)
                    }
                }
                processEntry(e) {
                    let t = this.interactions.get(String(e.interactionId));
                    if (t) return this.interactions.update(t, e);
                    let n = {
                        id: String(e.interactionId),
                        latency: e.duration,
                        entries: [e]
                    };
                    this.interactions.add(n)
                }
                constructor() {
                    this.interactions = new InteractionList(10), this.interactionCountObserver = new InteractionCountObserver, this.interactionCountObserver.observe()
                }
            };
            let aD = L.iG && "PerformanceEventTiming" in L.iG && "interactionId" in PerformanceEventTiming.prototype;
            let INPObserver = class INPObserver {
                setupListeners() {
                    if (!aD) return;
                    let e = e => {
                        ("pagehide" === e.type || "hidden" === document.visibilityState) && this.report()
                    };
                    L.n4?.addEventListener("visibilitychange", e, !0), L.n4?.addEventListener("pagehide", e, !0), L.n4?.addEventListener(ta.Q.START, () => {
                        this.report(), this.reset()
                    })
                }
                observe() {
                    aD && (this.observer = new PerformanceObserver(e => {
                        this.interactionProcessor.processEntries(e.getEntries())
                    }), this.observer.observe({
                        type: "first-input",
                        buffered: !0
                    }), this.observer.observe({
                        type: "event",
                        durationThreshold: 40,
                        buffered: !0
                    }))
                }
                report() {
                    this.cb(this.interactionProcessor.inp)
                }
                reset() {
                    this.interactionProcessor.teardown(), this.interactionProcessor = new InteractionProcessor
                }
                constructor(e) {
                    this.cb = e, this.interactionProcessor = new InteractionProcessor, this.setupListeners()
                }
            };
            L.n4?.addEventListener(ta.Q.SUCCESS, function(e) {
                    "turbo" === e.mechanism && C.x(`${document.title}`)
                }), L.n4?.addEventListener(ay.INITIAL, it.Yl), L.n4?.addEventListener(ay.START, e => {
                    it.LD(e.detail.mechanism)
                }), L.n4?.addEventListener(ay.SUCCESS, () => it.BT()), L.n4?.addEventListener(ay.ERROR, () => it.r_()), L.n4?.addEventListener(ay.RENDER, () => it.TL()),
                function() {
                    let e = (0, nb.c)("custom_inp");
                    if (a_(), (0, av.mw)(ax), (0, av.a4)(ax), (0, av.Fu)(ax), (0, av.NO)(ax), (0, av.mr)(ax), (0, av.NO)(aM, {
                            reportSoftNavs: !0
                        }), (0, av.mw)(aM, {
                            reportSoftNavs: !0
                        }), e) {
                        let e = new INPObserver(ax);
                        e.observe()
                    } else(0, av.Yn)(ax);
                    L.n4?.addEventListener(ta.Q.START, ({
                        mechanism: e
                    }) => {
                        aO({
                            soft: !0,
                            mechanism: e
                        })
                    }), aO({
                        soft: !1
                    })
                }()
        },
        47442: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => BaseBatchDeferredContentElement
            });
            var r = n(76006),
                i = n(18699);
            let a = class AutoFlushingQueue {
                push(e) {
                    let t = `item-${this.index++}`;
                    return this.timer && (window.clearTimeout(this.timer), this.timer = null), this.elements.length >= this.limit && this.flush(), this.timer = window.setTimeout(() => {
                        this.timer = null, this.flush()
                    }, this.timeout), this.elements.push([e, t]), t
                }
                onFlush(e) {
                    this.callbacks.push(e)
                }
                async flush() {
                    let e = this.elements.splice(0, this.limit);
                    0 !== e.length && await Promise.all(this.callbacks.map(t => t(e)))
                }
                constructor(e = 50, t = 30) {
                    this.elements = [], this.timer = null, this.callbacks = [], this.timeout = e, this.limit = t, this.index = 0
                }
            };
            let BatchLoader = class BatchLoader {
                loadInBatch(e) {
                    let t = this.autoFlushingQueue.push(e);
                    return new Promise(e => this.callbacks.set(t, e))
                }
                async load(e) {
                    let t = new Map;
                    for (let [n, r] of e) t.set(r, n);
                    let n = new FormData;
                    for (let [e, r] of t.entries())
                        for (let t of r.inputs) n.append(`items[${e}][${t.name}]`, t.value);
                    if (0 === Array.from(n.values()).length) return;
                    n.set("_method", "GET");
                    let r = await fetch(this.url, {
                        method: "POST",
                        body: n,
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (r.ok) {
                        let e = await r.json();
                        if (!e || "object" != typeof e || Array.isArray(e)) throw Error("Malformed batch response");
                        for (let t in e) {
                            let n = this.callbacks.get(t);
                            if (n) {
                                let r = e[t];
                                this.validate(r), n(r)
                            }
                        }
                    }
                }
                constructor(e, t) {
                    this.url = e, this.callbacks = new Map, this.autoFlushingQueue = new a, this.autoFlushingQueue.onFlush(async e => {
                        this.load(e)
                    }), this.validate = t
                }
            };

            function o(e, t, n, r) {
                var i, a = arguments.length,
                    o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            }
            let BaseBatchDeferredContentElement = class BaseBatchDeferredContentElement extends HTMLElement {
                async connectedCallback() {
                    let e = await this.batchLoader.loadInBatch(this);
                    this.update(e)
                }
                get batchLoader() {
                    let e = this.getAttribute("data-url");
                    if (!e) throw Error(`${this.tagName} element requires a data-url attribute`);
                    let t = this.batchLoaders.get(e);
                    return t || (t = new BatchLoader(e, e => this.validate(e)), this.batchLoaders.set(e, t)), t
                }
            };
            let s = new Map,
                l = class BatchDeferredContentElement extends BaseBatchDeferredContentElement {
                    validate(e) {
                        if ("string" != typeof e) throw Error("Batch deferred content was not a string")
                    }
                    update(e) {
                        let t = (0, i.r)(document, e);
                        this.replaceWith(t)
                    }
                    constructor(...e) {
                        super(...e), this.batchLoaders = s
                    }
                };
            o([r.GO], l.prototype, "inputs", void 0), l = o([r.Ih], l)
        },
        90596: () => {
            let e;
            let t = !1;

            function n() {
                e = document.activeElement, document.body && document.body.classList.toggle("intent-mouse", t)
            }
            document.addEventListener("mousedown", function() {
                t = !0, e === document.activeElement && n()
            }, {
                capture: !0
            }), document.addEventListener("keydown", function() {
                t = !1
            }, {
                capture: !0
            }), document.addEventListener("focusin", n, {
                capture: !0
            })
        },
        78332: (e, t, n) => {
            "use strict";
            n.d(t, {
                OD: () => o,
                Qc: () => s,
                nz: () => a
            });
            var r = n(57619);

            function i(e) {
                return e.hasAttribute("data-maxlength") ? parseInt(e.getAttribute("data-maxlength") || "") : e.maxLength
            }

            function a(e) {
                let t = i(e),
                    n = (0, r.rq)(e.value);
                return t - n < 0
            }

            function o(e) {
                let t = i(e);
                ! function(e, t, n) {
                    let i = n.closest(".js-characters-remaining-container");
                    if (!i) return;
                    let a = i.querySelector(".js-characters-remaining"),
                        o = String(a.getAttribute("data-suffix")),
                        s = (0, r.rq)(e),
                        l = t - s;
                    l <= 20 ? (a.textContent = `${l} ${o}`, a.classList.toggle("color-fg-danger", l <= 5), a.setAttribute("role", "status"), a.hidden = !1) : (a.setAttribute("role", "none"), a.hidden = !0)
                }(e.value, t, e)
            }

            function s(e) {
                let t = e.querySelectorAll(".js-characters-remaining-container");
                for (let e of t) {
                    let t = e.querySelector(".js-characters-remaining-field");
                    o(t)
                }
            }(0, n(254).ZG)(".js-characters-remaining-field", function(e) {
                function t() {
                    (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && o(e)
                }
                t(), e.addEventListener("input", t), e.addEventListener("blur", () => {
                    e.removeEventListener("input", t)
                }, {
                    once: !0
                })
            })
        },
        26361: () => {
            document.addEventListener("click", function(e) {
                if (!(e.target instanceof Element)) return;
                let t = e.target.closest("a[data-confirm], input[type=submit][data-confirm], input[type=checkbox][data-confirm], button[data-confirm]");
                if (!t) return;
                let n = t.getAttribute("data-confirm");
                if (n) {
                    if (t instanceof HTMLInputElement && t.hasAttribute("data-confirm-checked") && !t.checked) return;
                    confirm(n) || (e.stopImmediatePropagation(), e.preventDefault())
                }
            }, !0)
        },
        92792: (e, t, n) => {
            "use strict";
            n.d(t, {
                r: () => d
            });
            var r = n(56959),
                i = n(81574),
                a = n(52191),
                o = n(36071),
                s = n(59753);
            let l = null;

            function c({
                currentTarget: e
            }) {
                if (e.hasAttribute("open")) {
                    let t = e.querySelector("[autofocus]");
                    t && t.focus()
                } else {
                    let t = e.querySelector("summary");
                    t && t.focus()
                }
            }

            function u({
                currentTarget: e
            }) {
                e.hasAttribute("open") ? (l && l !== e && l.removeAttribute("open"), l = e) : e === l && (l = null)
            }

            function d(e) {
                e.hasAttribute("open") ? e.removeAttribute("open") : e.setAttribute("open", "open")
            }
            document.addEventListener("keydown", function(e) {
                !e.defaultPrevented && "Escape" === e.key && l && l.removeAttribute("open")
            }), (0, o.N7)(".js-dropdown-details", {
                subscribe: e => (0, r.qC)((0, r.RB)(e, "toggle", u), (0, r.RB)(e, "toggle", c))
            }), (0, o.N7)("[data-deferred-details-content-url]:not([data-details-no-preload-on-hover])", {
                subscribe: e => {
                    let t = e.querySelector("summary");
                    return (0, r.RB)(t, "mouseenter", a.G)
                }
            }), (0, o.N7)("[data-deferred-details-content-url]", {
                subscribe: e => (0, r.RB)(e, "toggle", a.G)
            }), (0, s.on)("click", "[data-toggle-for]", function(e) {
                let t = e.currentTarget.getAttribute("data-toggle-for") || "",
                    n = document.getElementById(t);
                n && d(n)
            }), (0, i.Z)(function({
                target: e
            }) {
                if (!e || e.closest("summary")) return;
                let t = e.parentElement;
                for (; t;)(t = t.closest("details")) && (t.hasAttribute("open") || t.setAttribute("open", ""), t = t.parentElement)
            }), (0, s.on)("details-dialog-close", "[data-disable-dialog-dismiss]", function(e) {
                e.preventDefault()
            })
        },
        74721: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => i
            });
            var r = n(59753);

            function i(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }(0, n(36071).N7)(".js-document-dropzone", {
                constructor: HTMLElement,
                add(e) {
                    document.body.addEventListener("dragstart", u), document.body.addEventListener("dragend", d), document.body.addEventListener("dragenter", o), document.body.addEventListener("dragover", o), document.body.addEventListener("dragleave", s), e.addEventListener("drop", l)
                },
                remove(e) {
                    document.body.removeEventListener("dragstart", u), document.body.removeEventListener("dragend", d), document.body.removeEventListener("dragenter", o), document.body.removeEventListener("dragover", o), document.body.removeEventListener("dragleave", s), e.removeEventListener("drop", l)
                }
            });
            let a = null;

            function o(e) {
                if (c) return;
                let t = e.currentTarget;
                a && window.clearTimeout(a), a = window.setTimeout(() => t.classList.remove("dragover"), 200);
                let n = e.dataTransfer;
                n && i(n) && (n.dropEffect = "copy", t.classList.add("dragover"), e.stopPropagation(), e.preventDefault())
            }

            function s(e) {
                if (e.target instanceof Element && e.target.classList.contains("js-document-dropzone")) {
                    let t = e.currentTarget;
                    t.classList.remove("dragover")
                }
            }

            function l(e) {
                let t = e.currentTarget;
                t.classList.remove("dragover"), document.body.classList.remove("dragover");
                let n = e.dataTransfer;
                n && i(n) && ((0, r.f)(t, "document:drop", {
                    transfer: n
                }), e.stopPropagation(), e.preventDefault())
            }
            let c = !1;

            function u() {
                c = !0
            }

            function d() {
                c = !1
            }
        },
        14992: (e, t, n) => {
            "use strict";
            n.d(t, {
                HI: () => a,
                Jx: () => o,
                cv: () => s
            });
            var r = n(69567),
                i = n(59753);
            async function a(e, t) {
                let r = new TextEncoder,
                    i = r.encode(t),
                    {
                        seal: a
                    } = await Promise.all([n.e("vendors-node_modules_blakejs_index_js-node_modules_tweetnacl_nacl-fast_js"), n.e("_empty-file_js-app_assets_modules_github_tweetsodium_ts")]).then(n.bind(n, 20179));
                return a(i, e)
            }

            function o(e) {
                let t = atob(e).split("").map(e => e.charCodeAt(0));
                return Uint8Array.from(t)
            }

            function s(e) {
                let t = "";
                for (let n of e) t += String.fromCharCode(n);
                return btoa(t)
            }

            function l(e) {
                return async function(t) {
                    let n = t.currentTarget;
                    if (t.defaultPrevented || !n.checkValidity()) return;
                    let i = o(n.getAttribute("data-public-key"));
                    for (let o of (t.preventDefault(), n.elements))
                        if (o.id.endsWith("secret")) {
                            if (o.disabled = !0, o.required && !o.value) {
                                let e = `${o.name} is invalid!`,
                                    t = document.querySelector("template.js-flash-template");
                                t.after(new r.R(t, {
                                    className: "flash-error",
                                    message: e
                                }));
                                return
                            }
                            let t = `${o.name}_encrypted_value`;
                            if (!o.value) {
                                n.elements.namedItem(t).disabled = e;
                                continue
                            }
                            n.elements.namedItem(t).value = s(await a(i, o.value))
                        } n.submit()
                }
            }(0, i.on)("submit", "form.js-encrypt-submit", async function(e) {
                let t = e.currentTarget;
                if (e.defaultPrevented || !t.checkValidity()) return;
                let n = t.elements.namedItem("secret_value");
                if (n.disabled = !0, !n.value) return;
                e.preventDefault();
                let r = o(t.getAttribute("data-public-key"));
                t.elements.namedItem("encrypted_value").value = s(await a(r, n.value)), t.submit()
            }), (0, i.on)("submit", "form.js-encrypt-bulk-submit", l(!0)), (0, i.on)("submit", "form.js-encrypt-bulk-submit-enable-empty", l(!1))
        },
        55240: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => s
            });
            var r = n(56959),
                i = n(4412),
                a = n(36071),
                o = n(98105);
            async function s(e) {
                await i.C, l(e)
            }

            function l(e) {
                let t = e.querySelectorAll(".js-responsive-underlinenav-item"),
                    n = e.querySelector(".js-responsive-underlinenav-overflow"),
                    r = (0, o.oE)(n, e);
                if (!r) return;
                let i = !1;
                for (let n of t) {
                    let t = (0, o.oE)(n, e);
                    if (t) {
                        let e = t.left + n.offsetWidth >= r.left;
                        ! function(e, t) {
                            e.style.visibility = t ? "hidden" : "";
                            let n = e.getAttribute("data-tab-item");
                            if (n) {
                                let e = document.querySelector(`[data-menu-item=${n}]`);
                                e instanceof HTMLElement && (e.hidden = !t)
                            }
                        }(n, e), i = i || e
                    }
                }
                n.style.visibility = i ? "" : "hidden"
            }(0, a.N7)(".js-responsive-underlinenav", {
                constructor: HTMLElement,
                subscribe: e => (s(e), (0, r.RB)(window, "resize", () => l(e)))
            })
        },
        79422: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => c
            });
            var r = n(407),
                i = n(46263),
                a = n(98973),
                o = n(36071),
                s = n(44544);
            let l = (0, s.Z)("localStorage", {
                    ttl: 3e5,
                    throwQuotaErrorsOnSet: !1,
                    sendCacheStats: !0
                }),
                c = () => {
                    (0, r.e6)((0, a.e)()), (0, r.e6)((0, a.e)(), {
                        storage: l
                    })
                },
                u = () => {
                    (0, r.Xm)((0, a.e)(), {
                        selector: ".js-session-resumable"
                    }), (0, r.Xm)((0, a.e)(), {
                        selector: ".js-local-storage-resumable",
                        storage: l
                    })
                },
                d = (0, i.D)(function() {
                    c()
                }, 50);
            window.addEventListener("submit", r.iO, {
                capture: !0
            }), window.addEventListener("pageshow", function() {
                c()
            }), (0, o.N7)(".js-session-resumable", function() {
                document.querySelector("html")?.hasAttribute("data-turbo-preview") || d()
            }), window.addEventListener("pagehide", function() {
                u()
            }), window.addEventListener("turbo:before-fetch-response", function() {
                u()
            }), window.addEventListener("turbo:load", function() {
                c()
            })
        },
        82565: () => {
            function e(e) {
                let t = e && e.getAttribute("value");
                if (t)
                    for (let e of document.querySelectorAll(".js-sidenav-container-pjax .js-selected-navigation-item")) {
                        let n = (e.getAttribute("data-selected-links") || "").split(" ").indexOf(t) >= 0;
                        n ? e.setAttribute("aria-current", "page") : e.removeAttribute("aria-current"), e.classList.toggle("selected", n)
                    }
            }
            let t = new MutationObserver(t => {
                for (let n of t)
                    for (let t of n.addedNodes) t instanceof HTMLMetaElement && "selected-link" === t.getAttribute("name") && e(t)
            });
            t.observe(document.head, {
                childList: !0
            }), document.addEventListener("turbo:load", () => {
                let t = document.head.querySelector('meta[name="selected-link"]');
                t && e(t)
            })
        },
        36543: (e, t, n) => {
            "use strict";
            var r = n(67044),
                i = n(59753),
                a = n(36071);
            let o = class TagInput {
                setup() {
                    this.container.addEventListener("click", e => {
                        let t = e.target;
                        t.closest(".js-remove") ? this.removeTag(e) : this.onFocus()
                    }), this.container.addEventListener("keydown", e => {
                        "Enter" === e.key && !(e.defaultPrevented || !this.input.value) && (e.preventDefault(), this.selectTag(this.input.value), this.autoComplete && (this.autoComplete.open = !1))
                    }), this.input.addEventListener("focus", this.onFocus.bind(this)), this.input.addEventListener("blur", this.onBlur.bind(this)), this.input.addEventListener("keydown", this.onKeyDown.bind(this)), this.form.addEventListener("submit", this.onSubmit.bind(this)), this.autoComplete?.addEventListener("auto-complete-change", () => {
                        this.selectTag(this.autoComplete.value)
                    })
                }
                onFocus() {
                    this.inputWrap.classList.add("focus"), this.input !== document.activeElement && this.input.focus()
                }
                onBlur() {
                    this.inputWrap.classList.remove("focus"), this.autoComplete && (!this.autoComplete || this.autoComplete.open) || this.onSubmit()
                }
                onSubmit() {
                    this.input.value && (this.selectTag(this.input.value), this.autoComplete && (this.autoComplete.open = !1))
                }
                onKeyDown(e) {
                    switch ((0, r.EL)(e)) {
                        case "Backspace":
                            this.onBackspace();
                            break;
                        case "Enter":
                        case "Tab":
                            this.taggifyValueWhenSuggesterHidden(e);
                            break;
                        case ",":
                        case "Space":
                            this.taggifyValue(e)
                    }
                }
                taggifyValueWhenSuggesterHidden(e) {
                    this.autoComplete && !this.autoComplete.open && this.input.value && (e.preventDefault(), this.selectTag(this.input.value))
                }
                taggifyValue(e) {
                    this.input.value && (e.preventDefault(), this.selectTag(this.input.value), this.autoComplete && (this.autoComplete.open = !1))
                }
                selectTag(e) {
                    let t = this.normalizeTag(e),
                        n = this.selectedTags(),
                        r = !1;
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e];
                        0 > n.indexOf(i) && (this.selections.appendChild(this.templateTag(i)), r = !0)
                    }
                    r && (this.input.value = "", (0, i.f)(this.form, "tags:changed"))
                }
                removeTag(e) {
                    let t = e.target;
                    e.preventDefault();
                    let n = t.closest(".js-tag-input-tag");
                    n.remove(), (0, i.f)(this.form, "tags:changed")
                }
                templateTag(e) {
                    let t = this.tagTemplate.cloneNode(!0);
                    t.querySelector("input").value = e;
                    let n = t.querySelector(".js-placeholder-tag-name");
                    return n.replaceWith(e), t.classList.remove("d-none", "js-template"), t
                }
                normalizeTag(e) {
                    let t = e.toLowerCase().trim();
                    return t ? this.multiTagInput ? t.split(/[\s,']+/) : [t.replace(/[\s,']+/g, "-")] : []
                }
                onBackspace() {
                    if (!this.input.value) {
                        let e = this.selections.querySelector("li:last-child .js-remove");
                        e instanceof HTMLElement && e.click()
                    }
                }
                selectedTags() {
                    let e = this.selections.querySelectorAll("input");
                    return Array.from(e).map(e => e.value).filter(e => e.length > 0)
                }
                constructor(e) {
                    this.container = e.container, this.selections = e.selections, this.inputWrap = e.inputWrap, this.input = e.input, this.tagTemplate = e.tagTemplate, this.form = this.input.form, this.autoComplete = e.autoComplete, this.multiTagInput = e.multiTagInput
                }
            };
            (0, a.N7)(".js-tag-input-container", {
                constructor: HTMLElement,
                initialize(e) {
                    new o({
                        container: e,
                        inputWrap: e.querySelector(".js-tag-input-wrapper"),
                        input: e.querySelector('input[type="text"], input:not([type])'),
                        selections: e.querySelector(".js-tag-input-selected-tags"),
                        tagTemplate: e.querySelector(".js-template"),
                        autoComplete: e.querySelector("auto-complete"),
                        multiTagInput: !1
                    }).setup()
                }
            }), (0, a.N7)(".js-multi-tag-input-container", {
                constructor: HTMLElement,
                initialize(e) {
                    new o({
                        container: e,
                        inputWrap: e.querySelector(".js-tag-input-wrapper"),
                        input: e.querySelector('input[type="text"], input:not([type])'),
                        selections: e.querySelector(".js-tag-input-selected-tags"),
                        tagTemplate: e.querySelector(".js-template"),
                        autoComplete: e.querySelector("auto-complete"),
                        multiTagInput: !0
                    }).setup()
                }
            })
        },
        19052: () => {
            ! function() {
                let e = document.createElement("div");
                return e.style.cssText = "-ms-user-select: element; user-select: contain;", "element" === e.style.getPropertyValue("-ms-user-select") || "contain" === e.style.getPropertyValue("-ms-user-select") || "contain" === e.style.getPropertyValue("user-select")
            }() && document.addEventListener("click", function(e) {
                if (!(e.target instanceof Element)) return;
                let t = e.target.closest(".user-select-contain");
                if (!t) return;
                let n = window.getSelection();
                if (!n || !n.rangeCount || !n.rangeCount || "Range" !== n.type) return;
                let r = n.getRangeAt(0).commonAncestorContainer;
                t.contains(r) || n.selectAllChildren(t)
            })
        },
        56334: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);
                if (t) {
                    if (1 === t.length) {
                        let e = s(t[0]);
                        if (!e) return;
                        return Object.freeze({
                            start: e,
                            end: e
                        })
                    }
                    if (2 !== t.length) return;
                    {
                        let e = s(t[0]),
                            n = s(t[1]);
                        if (!e || !n) return;
                        return u(Object.freeze({
                            start: e,
                            end: n
                        }))
                    }
                }
            }

            function i(e) {
                let {
                    start: t,
                    end: n
                } = u(e);
                return null != t.column && null != n.column ? `L${t.line}C${t.column}-L${n.line}C${n.column}` : null != t.column ? `L${t.line}C${t.column}-L${n.line}` : null != n.column ? `L${t.line}-L${n.line}C${n.column}` : t.line === n.line ? `L${t.line}` : `L${t.line}-L${n.line}`
            }

            function a(e) {
                let t = r(e),
                    n = function(e) {
                        let t = e.length < 5e3 && e.match(/(file-.+?-)L\d+?/i);
                        return t ? t[1] : ""
                    }(e);
                return {
                    blobRange: t,
                    anchorPrefix: n
                }
            }

            function o({
                anchorPrefix: e,
                blobRange: t
            }) {
                return t ? `#${e}${i(t)}` : "#"
            }

            function s(e) {
                let t = e.match(/L(\d+)/),
                    n = e.match(/C(\d+)/);
                return t ? Object.freeze({
                    line: parseInt(t[1]),
                    column: n ? parseInt(n[1]) : null
                }) : null
            }

            function l(e, t) {
                let [n, r] = c(e.start, !0, t), [i, a] = c(e.end, !1, t);
                if (!n || !i) return;
                let o = r,
                    s = a;
                if (-1 === o && (o = 0), -1 === s && (s = i.childNodes.length), !n.ownerDocument) throw Error("DOMRange needs to be inside document");
                let l = n.ownerDocument.createRange();
                return l.setStart(n, o), l.setEnd(i, s), l
            }

            function c(e, t, n) {
                let r = [null, 0],
                    i = n(e.line);
                if (!i) return r;
                if (null == e.column) return [i, -1];
                let a = e.column - 1,
                    o = function e(t) {
                        if (t.nodeType === Node.TEXT_NODE) return [t];
                        if (!t.childNodes || !t.childNodes.length) return [];
                        let n = [];
                        for (let r of t.childNodes) n = n.concat(e(r));
                        return n
                    }(i);
                for (let e = 0; e < o.length; e++) {
                    let n = o[e],
                        r = a - (n.textContent || "").length;
                    if (0 === r) {
                        let r = o[e + 1];
                        if (t && r) return [r, 0];
                        return [n, a]
                    }
                    if (r < 0) return [n, a];
                    a = r
                }
                return r
            }

            function u(e) {
                let t = [e.start, e.end];
                return (t.sort(d), t[0] === e.start && t[1] === e.end) ? e : Object.freeze({
                    start: t[0],
                    end: t[1]
                })
            }

            function d(e, t) {
                return e.line === t.line && e.column === t.column ? 0 : e.line === t.line && "number" == typeof e.column && "number" == typeof t.column ? e.column - t.column : e.line - t.line
            }
            n.d(t, {
                Dw: () => o,
                G5: () => r,
                M9: () => l,
                g1: () => i,
                n6: () => a
            })
        },
        54697: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => a,
                g: () => o
            });
            var r = n(59753);
            let i = new WeakMap;

            function a(e) {
                return i.get(e)
            }
            async function o(e) {
                return i.get(e) || s(await new Promise(t => {
                    e.addEventListener("codeEditor:ready", t, {
                        once: !0
                    })
                }))
            }

            function s(e) {
                if (!(e instanceof CustomEvent)) throw Error("assert: event is not a CustomEvent");
                let t = e.detail.editor;
                if (!e.target) throw Error("assert: event.target is null");
                return i.set(e.target, t), t
            }(0, r.on)("codeEditor:ready", ".js-code-editor", s)
        },
        41982: (e, t, n) => {
            "use strict";

            function r(e, t, n) {
                return [... function*(e, t) {
                    for (let n of e) {
                        let e = t(n);
                        null != e && (yield e)
                    }
                }(e, e => {
                    let n = t(e);
                    return null != n ? [e, n] : null
                })].sort((e, t) => n(e[1], t[1])).map(([e]) => e)
            }
            n.d(t, {
                W: () => r
            })
        },
        87738: (e, t, n) => {
            "use strict";

            function r(e, t, n = .1) {
                let r = o(e, t, n);
                if (r && -1 === t.indexOf("/")) {
                    let i = e.substring(e.lastIndexOf("/") + 1);
                    r += o(i, t, n)
                }
                return r
            }

            function i(e, t, n) {
                if (t) {
                    let r = e.innerHTML.trim().match(n || function(e) {
                        let t = e.toLowerCase().split(""),
                            n = "";
                        for (let e = 0; e < t.length; e++) {
                            let r = t[e],
                                i = r.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
                            0 === e ? n += `(.*)(${i})` : n += `([^${i}]*?)(${i})`
                        }
                        return RegExp(`${n}(.*?)$`, "i")
                    }(t));
                    if (!r) return;
                    let i = !1,
                        a = [];
                    for (let e = 1; e < r.length; ++e) {
                        let t = r[e];
                        t && (e % 2 == 0 ? i || (a.push("<mark>"), i = !0) : i && (a.push("</mark>"), i = !1), a.push(t))
                    }
                    e.innerHTML = a.join("")
                } else {
                    let t = e.innerHTML.trim(),
                        n = t.replace(/<\/?mark>/g, "");
                    t !== n && (e.innerHTML = n)
                }
            }
            n.d(t, {
                EW: () => r,
                Qw: () => i,
                qu: () => s
            });
            let a = new Set([" ", "-", "_"]);

            function o(e, t, n = .1) {
                let r = e;
                if (r === t) return 1;
                let i = r.length,
                    o = 0,
                    s = 0;
                for (let e = 0; e < t.length; e++) {
                    let l = t[e],
                        c = r.indexOf(l.toLowerCase()),
                        u = r.indexOf(l.toUpperCase()),
                        d = Math.min(c, u),
                        m = d > -1 ? d : Math.max(c, u);
                    if (-1 === m) return 0;
                    o += .1, r[m] === l && (o += .1), 0 === m && (o += .9 - n, 0 === e && (s = 1)), a.has(r.charAt(m - 1)) && (o += .9 - n), r = r.substring(m + 1, i)
                }
                let l = t.length,
                    c = o / l,
                    u = (c * (l / i) + c) / 2;
                return s && u + n < 1 && (u += n), u
            }

            function s(e, t) {
                return e.score > t.score ? -1 : e.score < t.score ? 1 : e.text < t.text ? -1 : e.text > t.text ? 1 : 0
            }
        },
        97895: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(47142);
            let i = (e, t, n) => {
                    if (!(0, r.CD)(e, t)) return -1 / 0;
                    let i = (0, r.Gs)(e, t);
                    return i < n ? -1 / 0 : i
                },
                a = (e, t, n) => {
                    e.textContent = "";
                    let i = 0;
                    for (let a of (0, r.m7)(t, n)) {
                        let t = n.slice(i, a);
                        "" !== t && e.appendChild(document.createTextNode(n.slice(i, a))), i = a + 1;
                        let r = document.createElement("mark");
                        r.textContent = n[a], e.appendChild(r)
                    }
                    e.appendChild(document.createTextNode(n.slice(i)))
                },
                o = new WeakMap,
                s = new WeakMap,
                l = new WeakMap,
                c = e => {
                    if (!l.has(e) && e instanceof HTMLElement) {
                        let t = (e.getAttribute("data-value") || e.textContent || "").trim();
                        return l.set(e, t), t
                    }
                    return l.get(e) || ""
                },
                u = class FuzzyListElement extends HTMLElement {
                    connectedCallback() {
                        let e = this.querySelector("ul");
                        if (!e) return;
                        let t = new Set(e.querySelectorAll("li")),
                            n = this.querySelector("input");
                        n instanceof HTMLInputElement && n.addEventListener("input", () => {
                            this.value = n.value
                        });
                        let i = new MutationObserver(e => {
                            let n = !1;
                            for (let i of e)
                                if ("childList" === i.type && i.addedNodes.length) {
                                    for (let e of i.addedNodes)
                                        if (e instanceof HTMLLIElement && !t.has(e)) {
                                            let i = c(e);
                                            n = n || (0, r.CD)(this.value, i), t.add(e)
                                        }
                                } n && this.sort()
                        });
                        i.observe(e, {
                            childList: !0
                        });
                        let a = {
                            handler: i,
                            items: t,
                            lazyItems: new Map,
                            timer: null
                        };
                        s.set(this, a)
                    }
                    disconnectedCallback() {
                        let e = s.get(this);
                        e && (e.handler.disconnect(), s.delete(this))
                    }
                    addLazyItems(e, t) {
                        let n = s.get(this);
                        if (!n) return;
                        let {
                            lazyItems: i
                        } = n, {
                            value: a
                        } = this, o = !1;
                        for (let n of e) i.set(n, t), o = o || !!a && (0, r.CD)(a, n);
                        o && this.sort()
                    }
                    sort() {
                        let e = o.get(this);
                        e && (e.aborted = !0);
                        let t = {
                            aborted: !1
                        };
                        o.set(this, t);
                        let {
                            minScore: n,
                            markSelector: r,
                            maxMatches: u,
                            value: d
                        } = this, m = s.get(this);
                        if (!m || !this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort", {
                                cancelable: !0,
                                detail: d
                            }))) return;
                        let {
                            items: f,
                            lazyItems: h
                        } = m, p = this.hasAttribute("mark-selector"), g = this.querySelector("ul");
                        if (!g) return;
                        let b = [];
                        if (d) {
                            for (let e of f) {
                                let t = c(e),
                                    r = i(d, t, n);
                                r !== -1 / 0 && b.push({
                                    item: e,
                                    score: r
                                })
                            }
                            for (let [e, t] of h) {
                                let r = i(d, e, n);
                                r !== -1 / 0 && b.push({
                                    text: e,
                                    render: t,
                                    score: r
                                })
                            }
                            b.sort((e, t) => t.score - e.score).splice(u)
                        } else {
                            let e = b.length;
                            for (let t of f) {
                                if (e >= u) break;
                                b.push({
                                    item: t,
                                    score: 1
                                }), e += 1
                            }
                            for (let [t, n] of h) {
                                if (e >= u) break;
                                b.push({
                                    text: t,
                                    render: n,
                                    score: 1
                                }), e += 1
                            }
                        }
                        requestAnimationFrame(() => {
                            if (t.aborted) return;
                            let e = g.querySelector('input[type="radio"]:checked');
                            g.textContent = "";
                            let n = 0,
                                i = () => {
                                    if (t.aborted) return;
                                    let o = Math.min(b.length, n + 100),
                                        s = document.createDocumentFragment();
                                    for (let e = n; e < o; e += 1) {
                                        let t = b[e],
                                            n = null;
                                        if ("render" in t && "text" in t) {
                                            let {
                                                render: e,
                                                text: r
                                            } = t;
                                            n = e(r), f.add(n), l.set(n, r), h.delete(r)
                                        } else "item" in t && (n = t.item);
                                        n instanceof HTMLElement && (p && a(r && n.querySelector(r) || n, p ? d : "", c(n)), s.appendChild(n))
                                    }
                                    n = o;
                                    let u = !1;
                                    if (e instanceof HTMLInputElement)
                                        for (let t of s.querySelectorAll('input[type="radio"]:checked')) t instanceof HTMLInputElement && t.value !== e.value && (t.checked = !1, u = !0);
                                    if (this.getAttribute("data-tab-only-first")) {
                                        let e = this.querySelectorAll("button.js-emoji-button");
                                        for (let t of e) t.setAttribute("tabindex", "-1");
                                        e.item(0)?.setAttribute("tabindex", "0")
                                    } else
                                        for (let e of s.querySelectorAll('button[tabindex="-1"]')) e.setAttribute("tabindex", "0");
                                    if (g.appendChild(s), e && u && e.dispatchEvent(new Event("change", {
                                            bubbles: !0
                                        })), o < b.length) requestAnimationFrame(i);
                                    else {
                                        g.hidden = 0 === b.length;
                                        let e = this.querySelector("[data-fuzzy-list-show-on-empty]");
                                        e && (e.hidden = b.length > 0), this.dispatchEvent(new CustomEvent("fuzzy-list-sorted", {
                                            detail: b.length
                                        }))
                                    }
                                };
                            i()
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
                    attributeChangedCallback(e, t, n) {
                        if (t === n) return;
                        let r = s.get(this);
                        r && (r.timer && window.clearTimeout(r.timer), r.timer = window.setTimeout(() => this.sort(), 100))
                    }
                },
                d = u;
            window.customElements.get("fuzzy-list") || (window.FuzzyListElement = u, window.customElements.define("fuzzy-list", u))
        },
        29764: (e, t, n) => {
            "use strict";
            n.d(t, {
                $S: () => i,
                Fk: () => a,
                sz: () => o
            });
            var r = n(71643);

            function i(e, t, n) {
                let i = {
                        hydroEventPayload: e,
                        hydroEventHmac: t,
                        visitorPayload: "",
                        visitorHmac: "",
                        hydroClientContext: n
                    },
                    a = document.querySelector("meta[name=visitor-payload]");
                a instanceof HTMLMetaElement && (i.visitorPayload = a.content);
                let o = document.querySelector("meta[name=visitor-hmac]") || "";
                o instanceof HTMLMetaElement && (i.visitorHmac = o.content), (0, r.b)(i, !0)
            }

            function a(e) {
                let t = e.getAttribute("data-hydro-view") || "",
                    n = e.getAttribute("data-hydro-view-hmac") || "",
                    r = e.getAttribute("data-hydro-client-context") || "";
                i(t, n, r)
            }

            function o(e) {
                let t = e.getAttribute("data-hydro-click-payload") || "",
                    n = e.getAttribute("data-hydro-click-hmac") || "",
                    r = e.getAttribute("data-hydro-client-context") || "";
                i(t, n, r)
            }
        },
        3626: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = function(e) {
                        let t = [...Object.values(e)].reduce((e, t) => e + t.visitCount, 0);
                        return new Map(Object.keys(e).map(n => [n, e[n].visitCount / t]))
                    }(e),
                    n = function(e) {
                        var t, n;
                        let r = (t = [...Object.keys(e)], n = t => e[t].lastVisitedAt, t.sort((e, t) => n(e) - n(t))),
                            i = r.length;
                        return new Map(r.map((e, t) => [e, (t + 1) / i]))
                    }(e);
                return function(e) {
                    return .6 * (t.get(e) || 0) + .4 * (n.get(e) || 0)
                }
            }
            n.d(t, {
                vt: () => d,
                WF: () => u,
                DV: () => c,
                jW: () => p,
                Nc: () => s,
                $t: () => r
            });
            let i = /^\/orgs\/([a-z0-9-]+)\/teams\/([\w-]+)/,
                a = [/^\/([^/]+)\/([^/]+)\/?$/, /^\/([^/]+)\/([^/]+)\/blob/, /^\/([^/]+)\/([^/]+)\/tree/, /^\/([^/]+)\/([^/]+)\/issues/, /^\/([^/]+)\/([^/]+)\/pulls?/, /^\/([^/]+)\/([^/]+)\/pulse/],
                o = [
                    ["organization", /^\/orgs\/([a-z0-9-]+)\/projects\/([0-9-]+)/],
                    ["repository", /^\/([^/]+)\/([^/]+)\/projects\/([0-9-]+)/]
                ];

            function s(e) {
                let t, n;
                let r = e.match(i);
                if (r) {
                    l(c(r[1], r[2]));
                    return
                }
                for (let n = 0, r = o.length; n < r; n++) {
                    let [r, i] = o[n];
                    if (t = e.match(i)) {
                        let e = null,
                            n = null;
                        switch (r) {
                            case "organization":
                                e = t[1], n = t[2];
                                break;
                            case "repository":
                                e = `${t[1]}/${t[2]}`, n = t[3]
                        }
                        e && n && l(d(e, n));
                        return
                    }
                }
                for (let t = 0, r = a.length; t < r; t++)
                    if (n = e.match(a[t])) {
                        l(u(n[1], n[2]));
                        return
                    }
            }

            function l(e) {
                let t = p(),
                    n = Math.floor(Date.now() / 1e3),
                    i = t[e] || {
                        lastVisitedAt: n,
                        visitCount: 0
                    };
                i.visitCount += 1, i.lastVisitedAt = n, t[e] = i, h(function(e) {
                    let t = Object.keys(e);
                    if (t.length <= 100) return e;
                    let n = r(e),
                        i = t.sort((e, t) => n(t) - n(e)).slice(0, 50);
                    return Object.fromEntries(i.map(t => [t, e[t]]))
                }(t))
            }

            function c(e, t) {
                return `team:${e}/${t}`
            }

            function u(e, t) {
                return `repository:${e}/${t}`
            }

            function d(e, t) {
                return `project:${e}/${t}`
            }
            let m = /^(team|repository|project):[^/]+\/[^/]+(\/([^/]+))?$/,
                f = "jump_to:page_views";

            function h(e) {
                ! function(e, t) {
                    try {
                        window.localStorage.setItem(e, t)
                    } catch {}
                }(f, JSON.stringify(e))
            }

            function p() {
                let e;
                let t = function(e) {
                    try {
                        return window.localStorage.getItem(e)
                    } catch {
                        return null
                    }
                }(f);
                if (!t) return {};
                try {
                    e = JSON.parse(t)
                } catch {
                    return h({}), {}
                }
                let n = {};
                for (let t in e) t.match(m) && (n[t] = e[t]);
                return n
            }
        },
        34090: (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => s,
                n: () => o
            });
            var r = n(39629);
            let i = ["notification_referrer_id", "notifications_before", "notifications_after", "notifications_query"],
                a = "notification_shelf";

            function o(e, t = null) {
                return e.has("notification_referrer_id") ? (function(e, t) {
                    let n = l(t);
                    if (!n) return;
                    let o = {
                        pathname: n
                    };
                    for (let t of i) {
                        let n = e.get(t);
                        n && (o[t] = n)
                    }(0, r.LS)(a, JSON.stringify(o))
                }(e, t), function(e) {
                    for (let t of i) e.delete(t);
                    return e
                }(e)) : null
            }

            function s(e = null) {
                let t = l(e);
                if (!t) return (0, r.cl)(a), null;
                try {
                    let e = (0, r.rV)(a);
                    if (!e) return null;
                    let n = JSON.parse(e);
                    if (!n || !n.pathname) throw Error("Must have a pathname");
                    if (n.pathname !== t) throw Error("Stored pathname does not match current pathname.");
                    let o = {};
                    for (let e of i) o[e] = n[e];
                    return o
                } catch (e) {
                    return (0, r.cl)(a), null
                }
            }

            function l(e) {
                e = e || window.location.pathname;
                let t = e.match(/^(\/[^/]+\/[^/]+\/pull\/[^/]+)/);
                return t ? t[0] : null
            }
        },
        95005: (e, t, n) => {
            "use strict";

            function r(e, t) {
                var n;
                let r = e.closest("[data-notification-id]");
                t.hasAttribute("data-status") && (n = t.getAttribute("data-status"), r.classList.toggle("notification-archived", "archived" === n), r.classList.toggle("notification-unread", "unread" === n), r.classList.toggle("notification-read", "read" === n)), t.hasAttribute("data-subscription-status") && function(e, t) {
                    e.classList.toggle("notification-unsubscribed", "unsubscribed" === t)
                }(r, t.getAttribute("data-subscription-status")), t.hasAttribute("data-starred-status") && function(e, t) {
                    e.classList.toggle("notification-starred", "starred" === t)
                }(r, t.getAttribute("data-starred-status"))
            }
            n.d(t, {
                a: () => r
            })
        },
        11445: (e, t, n) => {
            "use strict";

            function r(e, t) {
                t.appendChild(e.extractContents()), e.insertNode(t)
            }
            n.d(t, {
                v: () => r
            })
        },
        98973: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = e || window.location,
                    n = document.head && document.head.querySelector("meta[name=session-resume-id]"),
                    r = n instanceof HTMLMetaElement && n.content;
                return r || t.pathname
            }
            n.d(t, {
                e: () => r
            })
        },
        96056: (e, t, n) => {
            "use strict";
            n.d(t, {
                Hu: () => d,
                _8: () => l,
                cj: () => s
            });
            var r = n(69567),
                i = n(36071);
            let a = "github-mobile-auth-flash";

            function o() {
                let e = document.querySelector("#js-flash-container");
                if (e)
                    for (let t of e.children) !t.classList.contains("js-flash-template") && t.classList.contains(a) && e.removeChild(t)
            }

            function s() {
                let e = document.getElementById("github-mobile-authenticate-prompt");
                e && (e.hidden = !0);
                let t = document.getElementById("github-mobile-authenticate-error-and-retry");
                t && (t.hidden = !1)
            }

            function l() {
                o();
                let e = document.getElementById("github-mobile-authenticate-prompt");
                e && (e.hidden = !1);
                let t = document.getElementById("github-mobile-authenticate-error-and-retry");
                t && (t.hidden = !0)
            }

            function c(e) {
                e && function(e) {
                    let t = new r.R(document.querySelector("template.js-flash-template"), {
                            className: `flash-error ${a}`,
                            message: e
                        }),
                        n = document.importNode(t, !0),
                        i = document.querySelector("#js-flash-container");
                    i && (o(), i.appendChild(n))
                }(e), s()
            }

            function u(e) {
                return document.getElementById("github-mobile-authenticate-error-and-retry").getAttribute(e)
            }
            async function d(e, t, n, r) {
                try {
                    var i;
                    await (i = e.getAttribute("data-poll-url"), async function e(a) {
                        let o, s, l;
                        if (r && r()) return;
                        let d = "STATUS_UNKNOWN";
                        try {
                            let e = document.getElementById("github-mobile-authenticate-form"),
                                t = e.querySelector(".js-data-url-csrf"),
                                n = await self.fetch(new Request(i, {
                                    method: "POST",
                                    body: new FormData(e),
                                    mode: "same-origin",
                                    headers: {
                                        Accept: "application/json",
                                        "Scoped-CSRF-Token": t.value,
                                        "X-Requested-With": "XMLHttpRequest"
                                    }
                                }));
                            if (n.ok) {
                                let e = await n.json();
                                d = e.status, o = e.token
                            } else d = "STATUS_ERROR"
                        } catch {
                            d = "STATUS_ERROR"
                        }
                        switch (d) {
                            case "STATUS_APPROVED":
                                var m;
                                return t ? t() : void((l = (m = o) ? new URL(`password_reset/${encodeURIComponent(m)}`, window.location.origin) : new URL("", window.location.href)).searchParams.set("redirect", "true"), window.location.assign(l));
                            case "STATUS_EXPIRED":
                                return s = u("timeout-flash"), n ? n(s) : c(s);
                            case "STATUS_ACTIVE":
                            case "STATUS_ERROR":
                            case "STATUS_UNKNOWN":
                                break;
                            case "STATUS_REJECTED":
                                return s = u("error-flash"), n ? n(s) : void document.getElementById("github-mobile-rejected-redirect").click();
                            default:
                                return s = u("error-flash"), n ? n(s) : c(s)
                        }
                        await new Promise(e => setTimeout(e, 3e3)), e(a)
                    }(0))
                } catch (t) {
                    let e = u("error-flash");
                    return c(e)
                }
            }(0, i.N7)(".js-poll-github-mobile-two-factor-authenticate", function(e) {
                d(e)
            }), (0, i.N7)(".js-poll-github-mobile-verified-device-authenticate", function(e) {
                d(e)
            }), (0, i.N7)(".js-poll-github-mobile-two-factor-password-reset-authenticate", function(e) {
                d(e)
            })
        },
        98576: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => s,
                v: () => l
            });
            var r = n(59753),
                i = n(254),
                a = n(65935),
                o = n(58700);

            function s() {
                document.body.classList.add("is-sending"), document.body.classList.remove("is-sent", "is-not-sent")
            }

            function l() {
                document.body.classList.add("is-sent"), document.body.classList.remove("is-sending")
            }(0, a.AC)(".js-send-auth-code", async (e, t) => {
                let n;
                s();
                try {
                    n = await t.text()
                } catch (e) {
                    ! function(e) {
                        e && (document.querySelector(".js-sms-error").textContent = e), document.body.classList.add("is-not-sent"), document.body.classList.remove("is-sending")
                    }(e.response.text)
                }
                n && l()
            }), (0, a.AC)(".js-two-factor-set-sms-fallback", async (e, t) => {
                let n;
                try {
                    n = await t.text()
                } catch (a) {
                    let t = e.querySelector(".js-configure-sms-fallback"),
                        n = e.querySelector(".js-verify-sms-fallback"),
                        r = t.hidden ? n : t,
                        i = r.querySelector(".flash");
                    switch (a.response.status) {
                        case 404:
                        case 422:
                        case 429:
                            i.textContent = JSON.parse(a.response.text).error, i.hidden = !1
                    }
                }
                if (n) switch (n.status) {
                    case 200:
                    case 201:
                        window.location.reload();
                        break;
                    case 202:
                        e.querySelector(".js-configure-sms-fallback").hidden = !0, e.querySelector(".js-verify-sms-fallback").hidden = !1, e.querySelector(".js-fallback-otp").focus()
                }
            }), (0, i.q6)(".js-verification-code-input-auto-submit", function(e) {
                let t = e.currentTarget,
                    n = t.pattern || "[0-9]{6}";
                RegExp(`^(${n})$`).test(t.value) && (0, o.Bt)(t.form)
            }), (0, r.on)("click", ".js-toggle-redacted-note-content", async e => {
                let t = e.currentTarget,
                    n = t.closest(".note");
                if (n) {
                    let e = n.getElementsByClassName("js-note")[0];
                    if (e) {
                        let n = t.getAttribute("data-content").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                        e.innerHTML = n
                    }
                }
                let r = n.getElementsByClassName("js-toggle-redacted-note-content");
                for (let e of r) e.hidden = !e.hidden
            })
        },
        68423: (e, t, n) => {
            "use strict";
            n.d(t, {
                dY: () => u,
                iU: () => c,
                oq: () => l
            });
            let r = new WeakMap;

            function i(e) {
                let t = r.get(e);
                t && (null != t.timer && clearTimeout(t.timer), t.timer = window.setTimeout(() => {
                    null != t.timer && (t.timer = null), t.inputed = !1, t.listener.call(null, e)
                }, t.wait))
            }

            function a(e) {
                let t = e.currentTarget,
                    n = r.get(t);
                n && (n.keypressed = !0, null != n.timer && clearTimeout(n.timer))
            }

            function o(e) {
                let t = e.currentTarget,
                    n = r.get(t);
                n && (n.keypressed = !1, n.inputed && i(t))
            }

            function s(e) {
                let t = e.currentTarget,
                    n = r.get(t);
                n && (n.inputed = !0, n.keypressed || i(t))
            }

            function l(e, t, n = {
                wait: null
            }) {
                r.set(e, {
                    keypressed: !1,
                    inputed: !1,
                    timer: void 0,
                    listener: t,
                    wait: null != n.wait ? n.wait : 100
                }), e.addEventListener("keydown", a), e.addEventListener("keyup", o), e.addEventListener("input", s)
            }

            function c(e, t) {
                e.removeEventListener("keydown", a), e.removeEventListener("keyup", o), e.removeEventListener("input", s);
                let n = r.get(e);
                n && (null != n.timer && n.listener === t && clearTimeout(n.timer), r.delete(e))
            }

            function u(e) {
                let t = r.get(e);
                t && t.listener.call(null, e)
            }
        },
        97629: (e, t, n) => {
            "use strict";

            function r(e) {
                return !(e.offsetWidth <= 0 && e.offsetHeight <= 0)
            }
            n.d(t, {
                Z: () => r
            })
        },
        69202: (e, t, n) => {
            "use strict";
            let r;
            n.d(t, {
                G: () => w
            });
            var i = n(21461);
            let AliveSession = class AliveSession extends i.a2 {
                getUrlFromRefreshUrl() {
                    return a(this.refreshUrl)
                }
                constructor(e, t, n, r) {
                    super(e, () => this.getUrlFromRefreshUrl(), n, r), this.refreshUrl = t
                }
            };
            async function a(e) {
                let t = await o(e);
                return t && t.url && t.token ? s(t.url, t.token) : null
            }
            async function o(e) {
                let t = await fetch(e, {
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (t.ok) return t.json();
                if (404 === t.status) return null;
                throw Error("fetch error")
            }
            async function s(e, t) {
                let n = await fetch(e, {
                    method: "POST",
                    mode: "same-origin",
                    headers: {
                        "Scoped-CSRF-Token": t
                    }
                });
                if (n.ok) return n.text();
                throw Error("fetch error")
            }
            var l = n(46263),
                c = n(4412),
                u = n(44544),
                d = n(22490),
                m = n(71643),
                f = n(7180);
            let h = "alive";
            let InvalidSourceRelError = class InvalidSourceRelError extends f.d {};
            let p = d.ZO.createPolicy(h, {
                createScriptURL: e => f.O.apply({
                    policy: () => {
                        if (!(0, m.B)()) return e;
                        if (!e.startsWith("/")) throw new InvalidSourceRelError("Alive worker src URL must start with a slash");
                        return e
                    },
                    policyName: h,
                    fallback: e,
                    fallbackOnError: !0
                })
            });

            function g(e, {
                channel: t,
                type: n,
                data: r
            }) {
                for (let i of e) i.dispatchEvent(new CustomEvent(`socket:${n}`, {
                    bubbles: !1,
                    cancelable: !1,
                    detail: {
                        name: t,
                        data: r
                    }
                }))
            }
            let b = class AliveSessionProxy {
                subscribe(e) {
                    let t = this.subscriptions.add(...e);
                    t.length && this.worker.port.postMessage({
                        subscribe: t
                    });
                    let n = new Set(t.map(e => e.name)),
                        r = e.reduce((e, t) => {
                            let r = t.topic.name;
                            return (0, i.A)(r) && !n.has(r) && e.add(r), e
                        }, new Set);
                    r.size && this.worker.port.postMessage({
                        requestPresence: Array.from(r)
                    })
                }
                unsubscribeAll(...e) {
                    let t = this.subscriptions.drain(...e);
                    t.length && this.worker.port.postMessage({
                        unsubscribe: t
                    });
                    let n = this.presenceMetadata.removeSubscribers(e);
                    this.sendPresenceMetadataUpdate(n)
                }
                updatePresenceMetadata(e) {
                    let t = new Set;
                    for (let n of e) this.presenceMetadata.setMetadata(n), t.add(n.channelName);
                    this.sendPresenceMetadataUpdate(t)
                }
                sendPresenceMetadataUpdate(e) {
                    if (!e.size) return;
                    let t = [];
                    for (let n of e) t.push({
                        channelName: n,
                        metadata: this.presenceMetadata.getChannelMetadata(n)
                    });
                    this.worker.port.postMessage({
                        updatePresenceMetadata: t
                    })
                }
                online() {
                    this.worker.port.postMessage({
                        online: !0
                    })
                }
                offline() {
                    this.worker.port.postMessage({
                        online: !1
                    })
                }
                hangup() {
                    this.worker.port.postMessage({
                        hangup: !0
                    })
                }
                receive(e) {
                    let {
                        channel: t
                    } = e;
                    if ("presence" === e.type) {
                        let n = this.notifyPresenceDebouncedByChannel.get(t);
                        n || (n = (0, l.D)((e, n) => {
                            this.notify(e, n), this.notifyPresenceDebouncedByChannel.delete(t)
                        }, 100), this.notifyPresenceDebouncedByChannel.set(t, n)), n(this.subscriptions.subscribers(t), e);
                        return
                    }
                    this.notify(this.subscriptions.subscribers(t), e)
                }
                constructor(e, t, n, r, a) {
                    this.subscriptions = new i.SubscriptionSet, this.presenceMetadata = new i.ah, this.notifyPresenceDebouncedByChannel = new Map, this.notify = a, this.worker = new SharedWorker(e, `github-socket-worker-v2-${r}`), this.worker.port.onmessage = ({
                        data: e
                    }) => this.receive(e), this.worker.port.postMessage({
                        connect: {
                            url: t,
                            refreshUrl: n
                        }
                    })
                }
            };
            async function y() {
                let e = function() {
                    let e = document.head.querySelector("link[rel=shared-web-socket-src]")?.getAttribute("href") ?? "";
                    try {
                        return p.createScriptURL(e)
                    } catch (e) {
                        if (e instanceof InvalidSourceRelError) return null;
                        throw e
                    }
                }();
                if (!e) return;
                let t = document.head.querySelector("link[rel=shared-web-socket]")?.href ?? null;
                if (!t) return;
                let n = document.head.querySelector("link[rel=shared-web-socket]")?.getAttribute("data-refresh-url") ?? null;
                if (!n) return;
                let r = document.head.querySelector("link[rel=shared-web-socket]")?.getAttribute("data-session-id") ?? null;
                if (!r) return;
                let i = (() => {
                    if ("SharedWorker" in window && "true" !== (0, u.Z)("localStorage").getItem("bypassSharedWorker")) try {
                        return new b(e, t, n, r, g)
                    } catch (e) {}
                    return new AliveSession(t, n, !1, g)
                })();
                return window.addEventListener("online", () => i.online()), window.addEventListener("offline", () => i.offline()), window.addEventListener("pagehide", () => {
                    "hangup" in i && i.hangup()
                }), i
            }
            async function v() {
                return await c.x, y()
            }

            function w() {
                return r || (r = v())
            }
        },
        99550: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => a,
                p: () => i
            });
            let r = !0;

            function i(e) {
                r = e
            }

            function a() {
                return r
            }
        },
        49421: (e, t, n) => {
            "use strict";

            function r(e, t, n) {
                if (!t) return;
                let r = t.className.includes("cm-content") ? t : t.querySelector(".cm-content");
                r && r.dispatchEvent(new CustomEvent(e, {
                    detail: n
                }))
            }
            n.d(t, {
                a: () => r
            })
        },
        16730: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => a
            });
            var r = n(15345),
                i = n(86283);

            function a(e) {
                if (!i.n4) return;
                let t = i.n4.querySelector("title"),
                    n = i.n4.createElement("title");
                n.textContent = e, t ? t.textContent !== e && (t.replaceWith(n), (0, r.x)(e)) : (i.n4.head.appendChild(n), (0, r.x)(e))
            }
        },
        14873: (e, t, n) => {
            "use strict";

            function r() {
                return Promise.resolve()
            }

            function i() {
                return new Promise(window.requestAnimationFrame)
            }
            async function a(e, t) {
                let n;
                let r = new Promise(t => {
                    n = self.setTimeout(t, e)
                });
                if (!t) return r;
                try {
                    var i;
                    await Promise.race([r, (i = t, new Promise((e, t) => {
                        let n = Error("aborted");
                        n.name = "AbortError", i.aborted ? t(n) : i.addEventListener("abort", () => t(n))
                    }))])
                } catch (e) {
                    throw self.clearTimeout(n), e
                }
            }

            function o(e) {
                let t = [];
                return function(n) {
                    t.push(n), 1 === t.length && queueMicrotask(() => {
                        let n = t.slice(0);
                        t.length = 0, e(n)
                    })
                }
            }
            n.d(t, {
                Dc: () => a,
                g: () => o,
                gJ: () => r,
                rs: () => i
            })
        },
        78806: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            let r = (e, t) => {
                let n = new URL(e, window.location.origin),
                    r = new URL(t, window.location.origin),
                    i = r.href.includes("#");
                return i && n.host === r.host && n.pathname === r.pathname && n.search === r.search
            }
        },
        45974: (e, t, n) => {
            "use strict";
            n.d(t, {
                dy: () => s.dy,
                sY: () => s.sY,
                Au: () => s.Au
            });
            var r = n(22490),
                i = n(7180);
            let a = "jtml-no-op",
                o = r.ZO.createPolicy(a, {
                    createHTML: e => i.O.apply({
                        policy: () => e,
                        policyName: a,
                        fallback: e,
                        fallbackOnError: !0
                    })
                });
            var s = n(20845);
            s.js.setCSPTrustedTypesPolicy(o)
        },
        31287: (e, t, n) => {
            "use strict";
            n.d(t, {
                JR: () => u,
                ZP: () => m,
                qG: () => f
            });
            var r = n(54177),
                i = n(82873),
                a = n(65935),
                o = n(27800);
            let s = !1;
            async function l() {
                let e = document.querySelector("link[rel=sudo-modal]"),
                    t = document.querySelector(".js-sudo-prompt");
                if (t instanceof HTMLTemplateElement) return t;
                if (e) {
                    let t = await (0, i.a_)(document, function(e) {
                        let t = new URL(e, window.location.origin),
                            n = new URLSearchParams(t.search.slice(1));
                        return n.set("webauthn-support", (0, o.T)()), t.search = n.toString(), t.toString()
                    }(e.href));
                    return document.body.appendChild(t), document.querySelector(".js-sudo-prompt")
                }
                throw Error("couldn't load sudo prompt")
            }
            let c = !1;
            async function u(e) {
                if (s) return !1;
                s = !0, c = !1;
                let t = await l(),
                    n = t.content.cloneNode(!0),
                    i = await (0, r.W)({
                        content: n
                    }),
                    a = e?.closest("details[open]");
                return a && a.removeAttribute("open"), await new Promise(e => {
                    i.addEventListener("dialog:remove", function() {
                        a && a.setAttribute("open", "open"), s = !1, e()
                    }, {
                        once: !0
                    })
                }), c
            }
            async function d(e, t, n = "Sudo authentication failed.", r = "Too many authentication attemtps. Please try again later.", i = ".js-sudo-error", a) {
                try {
                    await t.text()
                } catch (o) {
                    let t;
                    if (!o.response) throw o;
                    switch (o.response.status) {
                        case 401:
                            t = n;
                            break;
                        case 429:
                            t = r;
                            break;
                        default:
                            t = "An unknown error occurred. Please try again later."
                    }
                    if (e.querySelector(i).textContent = t, e.querySelector(i).hidden = !1, a && (e.querySelector(a).value = ""), 401 !== o.response.status && 429 !== o.response.status) throw o;
                    return
                }
                c = !0, e.closest("details").removeAttribute("open")
            }
            async function m(e) {
                let t = await fetch("/sessions/in_sudo", {
                    headers: {
                        accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (t.ok) {
                    let e = await t.text();
                    if ("true" === e) return !0
                }
                return u(e)
            }
            async function f() {
                let e = await fetch("/sessions/in_sudo", {
                    headers: {
                        accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (e.ok) {
                    let t = await e.text();
                    if ("true" === t) return !0
                }
                return !1
            }(0, a.AC)(".js-sudo-webauthn-form", async function(e, t) {
                await d(e, t)
            }), (0, a.AC)(".js-sudo-github-mobile-form", async function(e, t) {
                await d(e, t)
            }), (0, a.AC)(".js-sudo-totp-form", async function(e, t) {
                await d(e, t, void 0, void 0, ".flash-error", "#totp")
            }), (0, a.AC)(".js-sudo-password-form", async function(e, t) {
                await d(e, t, "Incorrect password.", "Too many password attempts. Please wait and try again.", void 0, ".js-sudo-password")
            })
        },
        57619: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = e.split("\u200D"),
                    n = 0;
                for (let e of t) {
                    let t = Array.from(e.split(/[\ufe00-\ufe0f]/).join("")).length;
                    n += t
                }
                return n / t.length
            }

            function i(e, t, n, r = !0) {
                let i = e.value.substring(0, e.selectionEnd || 0),
                    a = e.value.substring(e.selectionEnd || 0);
                return s(e, (i = i.replace(t, n)) + (a = a.replace(t, n)), i.length, r), n
            }

            function a(e, t, n) {
                if (null === e.selectionStart || null === e.selectionEnd) return i(e, t, n);
                let r = e.value.substring(0, e.selectionStart),
                    a = e.value.substring(e.selectionEnd);
                return s(e, r + n + a, r.length), n
            }

            function o(e, t, n = {}) {
                let r = e.selectionEnd || 0,
                    i = e.value.substring(0, r),
                    a = e.value.substring(r),
                    o = "" === e.value || i.match(/\n$/) ? "" : "\n",
                    s = n.appendNewline ? "\n" : "",
                    l = o + t + s;
                e.value = i + l + a;
                let c = r + l.length;
                return e.selectionStart = c, e.selectionEnd = c, e.dispatchEvent(new CustomEvent("change", {
                    bubbles: !0,
                    cancelable: !1
                })), e.focus(), l
            }

            function s(e, t, n, r = !0) {
                e.value = t, r && (e.selectionStart = n, e.selectionEnd = n), e.dispatchEvent(new CustomEvent("change", {
                    bubbles: !0,
                    cancelable: !1
                }))
            }

            function l(e, t) {
                let n = [...e],
                    r = new TextEncoder,
                    i = new Uint8Array(4);
                for (let e = 0; e < n.length; e++) {
                    let a = n[e],
                        {
                            written: o,
                            read: s
                        } = r.encodeInto(a, i);
                    if (!o || !s) return -1;
                    let l = o - s;
                    if (0 !== l && (e < t && (t -= l), e >= t)) break
                }
                return t
            }
            n.d(t, {
                Om: () => o,
                lp: () => i,
                rq: () => r,
                t4: () => a,
                yb: () => l
            })
        },
        78923: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => o
            });
            var r = n(22490),
                i = n(7180);
            let a = "turbo",
                o = r.ZO.createPolicy(a, {
                    createHTML: e => i.O.apply({
                        policy: () => e,
                        policyName: `${a}-html`,
                        fallback: e,
                        fallbackOnError: !0,
                        silenceErrorReporting: !0
                    }),
                    createScript: e => i.O.apply({
                        policy: () => e,
                        policyName: `${a}-script`,
                        fallback: e,
                        fallbackOnError: !0,
                        silenceErrorReporting: !0
                    }),
                    createScriptURL: e => i.O.apply({
                        policy: () => e,
                        policyName: `${a}-url`,
                        fallback: e,
                        fallbackOnError: !0,
                        silenceErrorReporting: !0
                    })
                })
        },
        23243: (e, t, n) => {
            "use strict";
            n.d(t, {
                AU: () => l,
                Ap: () => E,
                DT: () => f,
                HN: () => s,
                Lq: () => o,
                T2: () => w,
                Yg: () => v,
                ag: () => y,
                ck: () => c,
                lL: () => p,
                po: () => b,
                q3: () => u,
                uL: () => S,
                wz: () => m,
                xk: () => h,
                zH: () => a
            });
            var r = n(78923);
            let i = "data-turbo-loaded";

            function a() {
                document.documentElement.setAttribute(i, "")
            }

            function o() {
                return document.documentElement.hasAttribute(i)
            }
            let s = e => e?.tagName === "TURBO-FRAME";

            function l(e, t) {
                let n = e.split("/", 3).join("/"),
                    r = t.split("/", 3).join("/");
                return n === r
            }

            function c(e, t) {
                let n = e.split("/", 2).join("/"),
                    r = t.split("/", 2).join("/");
                return n === r
            }
            async function u() {
                let e = document.head.querySelectorAll("link[rel=stylesheet]"),
                    t = new Set([...document.styleSheets].map(e => e.href)),
                    n = [];
                for (let r of e) "" === r.href || t.has(r.href) || n.push(d(r));
                await Promise.all(n)
            }
            let d = (e, t = 2e3) => new Promise(n => {
                    let r = () => {
                        e.removeEventListener("error", r), e.removeEventListener("load", r), n()
                    };
                    e.addEventListener("load", r, {
                        once: !0
                    }), e.addEventListener("error", r, {
                        once: !0
                    }), setTimeout(r, t)
                }),
                m = (e, t) => {
                    let n = t || e.querySelectorAll("[data-turbo-replace]"),
                        r = [...document.querySelectorAll("[data-turbo-replace]")];
                    for (let e of n) {
                        let t = r.find(t => t.id === e.id);
                        t && t.replaceWith(e.cloneNode(!0))
                    }
                },
                f = e => {
                    for (let t of e.querySelectorAll("link[rel=stylesheet]")) document.head.querySelector(`link[href="${t.getAttribute("href")}"],
           link[data-href="${t.getAttribute("data-href")}"]`) || document.head.append(t)
                },
                h = e => {
                    for (let t of e.querySelectorAll("script")) document.head.querySelector(`script[src="${t.getAttribute("src")}"]`) || g(t)
                },
                p = e => {
                    let {
                        src: t
                    } = e;
                    if (!t) return;
                    let n = document.createElement("script"),
                        i = e.getAttribute("type");
                    i && (n.type = i);
                    let a = r.w.createScriptURL(t);
                    return n.src = a, n
                },
                g = e => {
                    let t = p(e);
                    document.head && t && document.head.appendChild(t)
                },
                b = e => {
                    let t = [];
                    for (let n of e.querySelectorAll('meta[data-turbo-track="reload"]')) document.querySelector(`meta[http-equiv="${n.getAttribute("http-equiv")}"]`)?.content !== n.content && t.push(w(n.getAttribute("http-equiv") || ""));
                    return t
                },
                y = e => {
                    let t = e.querySelector("[data-turbo-head]") || e.head;
                    return {
                        title: t.querySelector("title")?.textContent,
                        transients: [...t.querySelectorAll("[data-turbo-transient]")].map(e => e.cloneNode(!0)),
                        bodyClasses: e.querySelector("meta[name=turbo-body-classes]")?.content,
                        replacedElements: [...e.querySelectorAll("[data-turbo-replace]")].map(e => e.cloneNode(!0))
                    }
                },
                v = () => [...document.documentElement.attributes],
                w = e => e.replace(/^x-/, "").replaceAll("-", "_"),
                S = e => document.dispatchEvent(new CustomEvent("turbo:reload", {
                    detail: {
                        reason: e
                    }
                })),
                E = (e, t) => {
                    for (let n of e.attributes) t.hasAttribute(n.nodeName) || "aria-busy" === n.nodeName || e.removeAttribute(n.nodeName);
                    for (let n of t.attributes) e.getAttribute(n.nodeName) !== n.nodeValue && e.setAttribute(n.nodeName, n.nodeValue)
                }
        },
        59840: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                State: () => i,
                WebauthnGetElement: () => c
            });
            var r, i, a = n(76006),
                o = n(8433),
                s = n(58700);

            function l(e, t, n, r) {
                var i, a = arguments.length,
                    o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            }! function(e) {
                e.Initializing = "initializing", e.Unsupported = "unsupported", e.Ready = "ready", e.Waiting = "waiting", e.Error = "error", e.Submitting = "submitting"
            }(i || (i = {}));
            let c = ((r = class WebauthnGetElement extends HTMLElement {
                async connectedCallback() {
                    this.originalButtonText = this.getCurrentButtonText(), this.originalErrorText = this.errorText.textContent, this.setState((0, o.Zh)() ? "ready" : "unsupported"), this.passkeySupport = await window.PublicKeyCredential?.isUserVerifyingPlatformAuthenticatorAvailable(), "unsupported" !== this.state && !this.passkeySupport && this.passkeysUnsupportedMessage && (this.passkeysUnsupportedMessage.hidden = !1), this.subtleLogin ? this.handleWebauthnSubtle() : this.showWebauthnLoginFragment()
                }
                handleWebauthnSubtle() {
                    let e = document.querySelector(".js-webauthn-subtle");
                    e && (e.hidden = !1, this.updateWebauthnSubtleParentBoxVisibility(!1), e.addEventListener("webauthn-subtle-submit", () => {
                        this.showWebauthnLoginFragment(), "unsupported" !== this.state && this.prompt()
                    }))
                }
                showWebauthnLoginFragment() {
                    let e = document.querySelector(".js-webauthn-login-section");
                    e && (e.hidden = !1, this.updateWebauthnSubtleParentBoxVisibility(!0))
                }
                updateWebauthnSubtleParentBoxVisibility(e) {
                    let t = document.querySelector(".js-webauthn-hint");
                    t && (t.hidden = e)
                }
                getCurrentButtonText() {
                    return this.buttonText.textContent || ""
                }
                setCurrentButtonText(e) {
                    this.buttonText.textContent = e
                }
                setState(e) {
                    let t = this.button.getAttribute("data-retry-message") || this.originalButtonText,
                        n = this.hasErrored ? t : this.originalButtonText;
                    for (let e of (this.setCurrentButtonText(n), this.button.disabled = !1, this.button.hidden = !1, this.errorText.textContent = "", this.messages)) e.hidden = !0;
                    switch (e) {
                        case "initializing":
                            this.button.disabled = !0;
                            break;
                        case "unsupported":
                            this.button.disabled = !0, this.unsupportedMessage.hidden = !1, this.passkeysUnsupportedMessage && (this.passkeysUnsupportedMessage.hidden = !0);
                            break;
                        case "ready":
                            break;
                        case "waiting":
                            this.waitingMessage.hidden = !1, this.button.hidden = !0;
                            break;
                        case "error":
                            this.errorMessage.hidden = !1, this.errorText.textContent = this.originalErrorText;
                            break;
                        case "submitting":
                            this.setCurrentButtonText("Verifying\u2026"), this.button.disabled = !0;
                            break;
                        default:
                            throw Error("invalid state")
                    }
                    this.state = e
                }
                async prompt(e, t) {
                    e?.preventDefault(), this.dispatchEvent(new CustomEvent("webauthn-get-prompt"));
                    try {
                        t || this.setState("waiting");
                        let e = JSON.parse(this.dataJson),
                            n = await (0, o.U2)((0, o.wz)(e));
                        this.setState("submitting");
                        let r = this.closest(".js-webauthn-form"),
                            i = r.querySelector(".js-webauthn-response");
                        i.value = JSON.stringify(n), (0, s.Bt)(r)
                    } catch (e) {
                        if (!t) throw this.hasErrored = !0, this.setState("error"), e
                    }
                }
                constructor(...e) {
                    super(...e), this.state = "initializing", this.dataJson = "", this.subtleLogin = !1, this.hasErrored = !1
                }
            }).attrPrefix = "", r);
            l([a.fA], c.prototype, "button", void 0), l([a.fA], c.prototype, "buttonText", void 0), l([a.GO], c.prototype, "messages", void 0), l([a.fA], c.prototype, "capitalizedDescription", void 0), l([a.fA], c.prototype, "unsupportedMessage", void 0), l([a.fA], c.prototype, "passkeysUnsupportedMessage", void 0), l([a.fA], c.prototype, "waitingMessage", void 0), l([a.fA], c.prototype, "errorMessage", void 0), l([a.fA], c.prototype, "errorText", void 0), l([a.Lj], c.prototype, "dataJson", void 0), l([a.Lj], c.prototype, "subtleLogin", void 0), c = l([a.Ih], c)
        },
        27800: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => i,
                k: () => a
            });
            var r = n(8433);

            function i() {
                return (0, r.Zh)() ? "supported" : "unsupported"
            }
            async function a() {
                return await window.PublicKeyCredential?.isUserVerifyingPlatformAuthenticatorAvailable() ? "supported" : "unsupported"
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, ["vendors-node_modules_dompurify_dist_purify_js", "vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183", "vendors-node_modules_github_selector-observer_dist_index_esm_js", "vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hydro-analytics-client_-978abc0", "vendors-node_modules_lit-html_lit-html_js", "vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_alive-client_dist-bf5aa2", "vendors-node_modules_morphdom_dist_morphdom-esm_js", "vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js", "vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-29dc30", "vendors-node_modules_color-convert_index_js", "vendors-node_modules_github_remote-form_dist_index_js-node_modules_scroll-anchoring_dist_scro-231ccf", "vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-59c459", "vendors-node_modules_github_session-resume_dist_index_js-node_modules_primer_behaviors_dist_e-ac74c6", "vendors-node_modules_primer_behaviors_dist_esm_dimensions_js-node_modules_github_jtml_lib_index_js", "vendors-node_modules_github_paste-markdown_dist_index_esm_js-node_modules_github_quote-select-81e6af", "ui_packages_failbot_failbot_ts", "app_assets_modules_github_updatable-content_ts", "app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_onfocus_ts-app_ass-421cec", "app_assets_modules_github_sticky-scroll-into-view_ts", "app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-467754", "app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235"], () => t(12857)), e.O()
    }
]);
//# sourceMappingURL=behaviors-cb29f080c856.js.map