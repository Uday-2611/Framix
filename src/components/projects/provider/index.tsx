'use client'

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { loadProject } from '@/redux/slice/shapes';
import { restoreViewport } from '@/redux/slice/viewport';
import { EntityState } from '@reduxjs/toolkit';
import { Shape, Tool } from "@/redux/slice/shapes";
import { Point } from "@/redux/slice/viewport";
type Props = {
    children: React.ReactNode;
    initialProject: {
        _valueJSON: {
            sketchesData: {
                shapes: EntityState<Shape, string>;
                tool: Tool;
                selected: Record<string, true>;
                frameCounter: number;
            };
            viewportData?: {
                scale: number;
                translate: Point;
            }
        }
    } | null
}

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
