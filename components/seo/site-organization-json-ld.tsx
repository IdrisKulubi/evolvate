import { JsonLd } from "@/components/seo/json-ld"
import { graphDocument, organizationGraph } from "@/lib/seo/schema"

export function SiteOrganizationJsonLd() {
  return <JsonLd data={graphDocument(...organizationGraph())} />
}
