'use client'

import { fetchProjectsSuccess } from '@/redux/slice/projects'
import { useAppDispatch } from '@/redux/store'
import React, { useEffect } from 'react'

interface ProjectSummary {
    _id: string
    name: string
    projectNumber: number
    thumbnail?: string
    lastModified: number
    createdAt: number
    isPublic?: boolean
}

type Props = {
    children: React.ReactNode
    initialProjects: { _valueJSON: ProjectSummary[] } | null
}

const ProjectProvider = ({ children, initialProjects }: Props) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (initialProjects?._valueJSON) {
            const projectsData = initialProjects._valueJSON
            dispatch(
                fetchProjectsSuccess({
                    projects: projectsData,
                    total: projectsData.length,
                })
            )
        }
    }, [dispatch, initialProjects])

    return <>{children}</>
}

export default ProjectProvider
