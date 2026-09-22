import type { APIRoute } from "astro";

const routes = [
    "/",
    "/skills/",
    "/projects/rocketeers/",
    "/projects/rocketeers/business-operations/",
    "/projects/rocketeers/repricing/",
    "/projects/rocketeers/financial-tracker/",
    "/projects/rame/",
    "/projects/ai-job-outreach/",
    "/projects/gym-progress/",
    "/projects/chess-analytics/",
    "/projects/chess-analytics/rating-upsets/",
    "/projects/chess-analytics/opening-performance/",
];

export const GET: APIRoute = ({ site }) => {
    const origin = site ?? new URL("https://konstantinoszafiropoulos.netlify.app");
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${new URL(route, origin).href}</loc></url>`).join("\n")}
</urlset>`;

    return new Response(body, {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
};
