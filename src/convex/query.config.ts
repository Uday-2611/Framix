import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server"
import { preloadQuery } from 'convex/nextjs'
import { api } from "../../convex/_generated/api"
import { ConvexUserRaw, normalizeProfile } from "@/types/user"
import { Id } from "../../convex/_generated/dataModel"

export const ProfileQuery = async () => {
    return await preloadQuery(
        api.user.getCurrentUser, // here we will get the user from user.ts in the convex folder.
        {},
        { token: await convexAuthNextjsToken() }
    )
}
// This is going to use the preloadQuery and load in the users. This is going to help us determine details of the users and whether the user is subscribed or not. 
export const SubscriptionEntitlementQuery = async () => {
    const rawProfile = await ProfileQuery()
    const profile = normalizeProfile(
        rawProfile._valueJSON as unknown as ConvexUserRaw | null
    )

    // This is sunscription query
    const entitlement = await preloadQuery(
        api.subscription.hasEntitlement,
        { userId: profile?.id as Id<'users'>, },
        { token: await convexAuthNextjsToken() }
    )

    return { entitlement, profileName: profile?.name }
}

// TODO: In Convex we have queries and mutations. Query is a read only function that runs on convex's server and helps us fetch data from there database. Mutation is write function that changes data in the database.

// TODO: Another feature in convex is preload query. We can load the data before the app even starts so the users get the data instantly. 