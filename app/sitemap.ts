// export const baseUrl = "https://portfolio-blog-starter.vercel.app";
export const baseUrl = "https://sruud.github.io/my-portfolio";

// export default async function sitemap() {
//   let routes = [""].map((route) => ({
//     url: `${baseUrl}${route}`,
//     lastModified: new Date().toISOString().split("T")[0],
//   }));
// return routes;
// }

export default async function sitemap() {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString().split("T")[0],
    },
  ];
}
