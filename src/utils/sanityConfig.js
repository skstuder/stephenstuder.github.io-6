import {createClient} from "@sanity/client";
import { PUBLIC_PROJECT_ID, PUBLIC_API_VERSION } from '$env/static/public';


const client = createClient({
    projectId: PUBLIC_PROJECT_ID,
    dataset: "production",
    apiVersion: PUBLIC_API_VERSION,
    useCdn: false
  });

  export default client