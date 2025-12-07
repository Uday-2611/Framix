import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server"
import { fetchMutation, preloadQuery } from 'convex/nextjs'
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

export const ProjectsQuery = async () => {
    const rawProfile = await ProfileQuery();
    const profile = normalizeProfile(
        rawProfile._valueJSON as unknown as ConvexUserRaw | null
    )

    if (!profile?.id) {
        return { projects: null, profile: null }
    }

    const projects = await preloadQuery(
        api.projects.getUserProjects,
        { userId: profile.id as Id<'users'> },
        { token: await convexAuthNextjsToken() }
    )

    return { projects, profile }
}

export const ProjectQuery = async (projectId: string) => {
    const rawProfile = await ProfileQuery()
    const profile = normalizeProfile(rawProfile._valueJSON as unknown as ConvexUserRaw | null)

    if (!profile?.id || !projectId) {
        return { project: null, profile: null }
    }

    const project = await preloadQuery(
        api.projects.getProject,
        { projectId: projectId as Id<'projects'> },
        { token: await convexAuthNextjsToken() }
    )

    return { project, profile }
}

export const StyleGuideQuery = async (projectId: string) => {
    const styleGuide = await preloadQuery(
        api.projects.getProjectStyleGuide,
        { projectId: projectId as Id<'projects'> },
        { token: await convexAuthNextjsToken() }
    )

    return { styleGuide }
}

export const MoodBoardImagesQuery = async (projectId: string) => {
    const images = await preloadQuery(
        api.moodboard.getMoodBoardImages,
        { projectId: projectId as Id<'projects'> },
        { token: await convexAuthNextjsToken() }
    )

    return { images }
}

export const CreditsBalanceQuery = async () => {
    const rawProfile = await ProfileQuery()
    const profile = normalizeProfile(
        rawProfile._valueJSON as unknown as ConvexUserRaw | null
    )

    if (!profile?.id) {
        return { ok: false, balance: 0, profile: null }
    }

    const balance = await preloadQuery(
        api.subscription.getCreditsBalance,
        { userId: profile.id as Id<'users'> },
        { token: await convexAuthNextjsToken() }
    )

    return { ok: true, balance: balance._valueJSON, profile }
}

export const ComsumeCreditsQuery = async ({ amount }: { amount?: number }) => {
    const rawProfile = await ProfileQuery()
    const profile = normalizeProfile(
        rawProfile._valueJSON as unknown as ConvexUserRaw | null
    )

    if (!profile?.id) {
        return { ok: false, balance: 0, profile: null }
    }

    const credits = await fetchMutation(
        api.subscription.consumeCredits,
        {
            reason: 'ai:generation',
            userId: profile.id as Id<'users'>,
            amount: amount || 1
        },
        {
            token: await convexAuthNextjsToken()
        }
    )

    return { ok: credits.ok, balance: credits.balance, profile }
}

export const InspirationImagesQuery = async (projectId: string) => {
    const images = await preloadQuery(
        api.inspiration.getInspirationImages,
        { projectId: projectId as Id<'projects'> },
        { token: await convexAuthNextjsToken() }
    )

    return { images }
}

// TODO: In Convex we have queries and mutations. Query is a read only function that runs on convex's server and helps us fetch data from there database. Mutation is write function that changes data in the database.

// TODO: Another feature in convex is preload query. We can load the data before the app even starts so the users get the data instantly. 