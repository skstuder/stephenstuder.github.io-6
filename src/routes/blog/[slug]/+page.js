import client from "../../../utils/sanityConfig.js"
// TODO: Use .env files to store the project ID and dataset name
// TODO: .gitignore the .env file to keep it out of version control
// TODO: Use the page data slug to fetch the correct blog post
export async function load({ params }) {

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