import { createClient } from "@sanity/client";
const PUBLIC_PROJECT_ID = "c3h37y0w";
const PUBLIC_API_VERSION = "2021-10-21";
const client = createClient({
  projectId: PUBLIC_PROJECT_ID,
  dataset: "production",
  apiVersion: PUBLIC_API_VERSION,
  useCdn: false
});
async function load({ params }) {
  const { slug } = params;
  const data = await client.fetch(`*[_type == "blogs" && urlParam == "${slug}"]`);
  if (data) {
    return {
      blogs: data
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}
export {
  load
};
