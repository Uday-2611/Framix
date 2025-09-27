import { SubscriptionEntitlementQuery } from '@/convex/query.config'
import { combinedSlug } from '@/lib/utils'
import { redirect } from 'next/navigation'

// TODO: Remove billing hardcoded part
const page = async () => {
    const { entitlement, profileName } = await SubscriptionEntitlementQuery()
    if (!entitlement._valueJSON) {
        // redirect(`/billing/${combinedSlug(profileName!)}`)
        redirect(`/dashboard/${combinedSlug(profileName!)}`)
    }
    redirect(`/dashboard/${combinedSlug(profileName!)}`)
}

export default page

//TODO: DAL Structure: Data Access Layer