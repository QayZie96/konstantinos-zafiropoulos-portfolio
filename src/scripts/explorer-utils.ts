/* =========================================================
   EXPLORER UTILITIES

   Small, dependency-free helpers shared by the interactive
   data explorers (Gym Progress, Rocketeers). Charts are drawn
   as plain SVG so they stay crisp, themeable and accessible.
   ========================================================= */

export const SVG_NS = "http://www.w3.org/2000/svg";

export const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type Attrs = Record<string, string | number | undefined | null>;

/** Create an SVG element with attributes and optional parent. */
export function svg<K extends keyof SVGElementTagNameMap>(
    tag: K,
    attrs: Attrs = {},
    parent?: Element,
): SVGElementTagNameMap[K] {
    const node = document.createElementNS(SVG_NS, tag);
    for (const [key, value] of Object.entries(attrs)) {
        if (value === undefined || value === null) continue;
        node.setAttribute(key, String(value));
    }
    if (parent) parent.append(node);
    return node;
}

/** Create an HTML element with a class name and optional text. */
export function el<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    className = "",
    text?: string,
    parent?: Element,
): HTMLElementTagNameMap[K] {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    if (parent) parent.append(node);
    return node;
}

/** "Nice" axis ticks between min and max. */
export function niceTicks(min: number, max: number, count = 5): number[] {
    if (!Number.isFinite(min) || !Number.isFinite(max)) return [0];
    if (min === max) {
        const pad = Math.abs(min) * 0.1 || 1;
        min -= pad;
        max += pad;
    }
    const span = max - min;
    const raw = span / Math.max(1, count);
    const magnitude = 10 ** Math.floor(Math.log10(raw));
    const residual = raw / magnitude;
    const step =
        (residual >= 5 ? 10 : residual >= 2 ? 5 : residual >= 1 ? 2 : 1) * magnitude;
    const start = Math.floor(min / step) * step;
    const ticks: number[] = [];
    for (let value = start; value <= max + step * 0.5; value += step) {
        ticks.push(Number(value.toFixed(10)));
    }
    return ticks;
}

export const formatNumber = (value: number, digits = 0) =>
    new Intl.NumberFormat("en-US", {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    }).format(value);

export const formatCompact = (value: number) =>
    new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: value >= 10_000 ? 1 : 2,
    }).format(value);

export const formatUsd = (value: number, digits = 0) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    }).format(value);

export const formatPercent = (value: number, digits = 1) =>
    `${(value * 100).toFixed(digits)}%`;

/** Mix two hex colours; t = 0 returns a, t = 1 returns b. */
export function mixColor(a: string, b: string, t: number): string {
    const pa = parseInt(a.slice(1), 16);
    const pb = parseInt(b.slice(1), 16);
    const channel = (shift: number) => {
        const ca = (pa >> shift) & 255;
        const cb = (pb >> shift) & 255;
        return Math.round(ca + (cb - ca) * t);
    };
    return `rgb(${channel(16)}, ${channel(8)}, ${channel(0)})`;
}

/** Three-stop sequential scale used for heatmaps. */
export function heatColor(t: number): string {
    const clamped = Math.max(0, Math.min(1, t));
    return clamped < 0.5
        ? mixColor("#0d2a44", "#168dff", clamped * 2)
        : mixColor("#168dff", "#9fd6ff", (clamped - 0.5) * 2);
}

/**
 * Place a tooltip inside its positioned container near (x, y),
 * keeping it fully inside the container's bounds.
 */
export function placeTooltip(
    tooltip: HTMLElement,
    container: HTMLElement,
    x: number,
    y: number,
) {
    tooltip.hidden = false;
    const width = tooltip.offsetWidth;
    const height = tooltip.offsetHeight;
    const maxX = container.clientWidth - width - 6;
    let left = x - width / 2;
    left = Math.max(6, Math.min(maxX, left));
    let top = y - height - 14;
    if (top < 4) top = y + 16;
    tooltip.style.transform = `translate(${Math.round(left)}px, ${Math.round(top)}px)`;
}

/** Run a callback once when an element scrolls into view. */
export function onReveal(element: Element, callback: () => void, threshold = 0.2) {
    if (!("IntersectionObserver" in window)) {
        callback();
        return;
    }
    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                observer.disconnect();
                callback();
            }
        },
        { threshold },
    );
    observer.observe(element);
}

/** Animate [data-count] numbers inside root when they become visible. */
export function setUpCountUps(root: ParentNode) {
    const nodes = root.querySelectorAll<HTMLElement>("[data-count]");
    nodes.forEach((node) => {
        const target = Number(node.dataset.count);
        const decimals = Number(node.dataset.decimals ?? 0);
        const prefix = node.dataset.prefix ?? "";
        const suffix = node.dataset.suffix ?? "";
        const finalText = node.textContent ?? "";
        if (!Number.isFinite(target) || prefersReducedMotion()) return;

        onReveal(node, () => {
            const start = performance.now();
            const duration = 1100;
            const tick = (now: number) => {
                const progress = Math.min(1, (now - start) / duration);
                const eased = 1 - (1 - progress) ** 3;
                node.textContent = `${prefix}${formatNumber(target * eased, decimals)}${suffix}`;
                if (progress < 1) requestAnimationFrame(tick);
                else node.textContent = finalText;
            };
            requestAnimationFrame(tick);
        });
    });
}

/** Grow [data-grow] bars (scaleX) when they become visible. */
export function setUpBarGrowth(root: Element) {
    if (prefersReducedMotion()) {
        root.classList.add("bars-ready");
        return;
    }
    onReveal(root, () => root.classList.add("bars-ready"), 0.15);
}

/** Wire a set of toggle buttons (aria-pressed) as a single-choice group. */
export function bindToggleGroup(
    group: Element,
    selector: string,
    onChange: (value: string, button: HTMLButtonElement) => void,
) {
    const buttons = Array.from(group.querySelectorAll<HTMLButtonElement>(selector));
    const select = (button: HTMLButtonElement, focus = false) => {
        buttons.forEach((candidate) =>
            candidate.setAttribute("aria-pressed", String(candidate === button)),
        );
        if (focus) button.focus();
        onChange(button.dataset.value ?? "", button);
    };
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => select(button));
        button.addEventListener("keydown", (event) => {
            let next = -1;
            if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % buttons.length;
            if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + buttons.length) % buttons.length;
            if (next < 0) return;
            event.preventDefault();
            select(buttons[next], true);
        });
    });
    return select;
}

/** Re-run a render function when the container width changes. */
export function onWidthChange(element: Element, render: () => void) {
    let lastWidth = 0;
    let frame = 0;
    const observer = new ResizeObserver((entries) => {
        const width = Math.round(entries[0].contentRect.width);
        if (width === lastWidth) return;
        lastWidth = width;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(render);
    });
    observer.observe(element);
}
