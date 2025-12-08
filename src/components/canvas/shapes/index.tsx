import React from 'react'
import { Text } from './text';
import { Line } from './line';
import { Arrow } from './arrow';
import { Frame } from './frame';
import { Stroke } from './stroke';
import { Elipse } from './elipse';
import { Rectangle } from './rectangle';
import { Shape } from '@/redux/slice/shapes';
import GeneratedUI from './generatedui';

const ShapeRenderer = ({
    shape,
    toggleInspiration,
    toggleChat,
    generateWorkFlow,
    exportDesign
}: {
    shape: Shape;
    toggleInspiration: () => void;
    toggleChat: (generatedUIId: string) => void;
    generateWorkFlow: (generatedUIId: string) => void;
    exportDesign: (generatedUIId: string, element: HTMLElement | null) => void;
}) => {

    switch (shape.type) {
        case 'frame':
            return (
                <Frame shape={shape} toggleInspiration={toggleInspiration} />
            )
        case 'rect':
            return <Rectangle shape={shape} />
        case 'ellipse':
            return <Elipse shape={shape} />
        case 'freedraw':
            return <Stroke shape={shape} />
        case 'arrow':
            return <Arrow shape={shape} />
        case 'line':
            return <Line shape={shape} />
        case 'text':
            return <Text shape={shape} />
        case 'generatedui':
            return (
                <GeneratedUI
                    shape={shape}
                    toggleChat={toggleChat}
                    generatedWorkFlow={generateWorkFlow}
                    exportDesign={exportDesign}
                />
            )
        default:
            return null
    }
}

export default ShapeRenderer

/*  //TODO: Background Jobs Function -> Kafka and Reddis, for the queing system, for this we gonna need job runners, this can take months of time. We would also need a scheduling job. This is not advisable. 

  For all this we will be using Inngest which does all the work in background with an orchestration engine.  

  Also learn about Zapier, it is an automation tool

*/