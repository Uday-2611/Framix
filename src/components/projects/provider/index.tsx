'use client'

import { loadProject } from '@/redux/slice/shapes';
import { restoreViewport } from '@/redux/slice/viewport';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

type Props = { children: React.ReactNode; initialProject: any }

const ProjectProvider = ({ children, initialProject }: Props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (initialProject?._valueJSON.sketchesData) {
            const projectData = initialProject._valueJSON

            // Load the sketches data into the shapes Redux state
            dispatch(loadProject(projectData.sketchesData))

            // Restore viewport position if available
            if (projectData.viewportData) {
                dispatch(restoreViewport(projectData.viewportData))
            }
        }
    }, [dispatch, initialProject])


    return (
        <>
            {children}
        </>
    )
}

export default ProjectProvider
