'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Label } from 'recharts'
import { Toggle } from '@/components/ui/toggle'
import { Slider } from '@/components/ui/slider'
import { TextShape, updateShape } from '@/redux/slice/shapes'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { Bold, Italic, Underline, Strikethrough, Palette } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'

type Props = {
    isOpen: boolean
}

const TextSidebar = ({ isOpen }: Props) => {

    const dispatch = useAppDispatch()
    const selectedShapes = useAppSelector((state) => state.shapes.selected)
    const shapesEntities = useAppSelector((state) => state.shapes.shapes.entites)
    const [colorInput, setColorInput] = useState('#ffffff')

    const fontFamilies = [
        'Inter, sans-serif',
        'Georgia, serif',
        'Times New Roman, serif',
        'Arial, sans-serif',
        'Courier New, monospace',
        'Helvetica, sans-serif',
        'Lucida Sans, Lucida Sans Regular',
        'Monaco, monospace'
    ];

    const selectedTextShape = Object.keys(selectedShapes)
        .map((id) => shapesEntities[id])
        .find((shape) => shape?.type === 'text') as TextShape | undefined

    useEffect(() => {
        if (selectedTextShape?.fill) {
            setColorInput(selectedTextShape.fill)
        }
    }, [selectedTextShape?.fill])

    const updateTextProperty = (property: keyof TextShape, value: any) => {
        if (!selectedTextShape) return

        dispatch(updateShape({
            id: selectedTextShape.id,
            patch: { [property]: value },
        }))
    }

    const handleColorChange = (color: string) => {
        setColorInput(color)
        if (/^#[0-9A-F]{6}$/i.test(color) || /^#[0-9A-F]{3}$/i.test(color)) {
            updateTextProperty('fill', color)
        }
    }

    if (!isOpen || !selectedTextShape) return null

    return (
        <div className={cn('fixed right-5 top-1/2 transform -translate-y-1/2 w-80 backdrop-blur-xl bg-white/[0.08] border-white/[0.12] gap-2 p-3 saturate-150 border rounded-lg z-50 transition-transform duration-300', isOpen ? 'translate-x-0' : 'translate-x-full')}>
            <div className='p-4 flex flex-col gap-10 overflow-y-auto max-h-[calc(100vh-8rem)]'>
                <div className='space-y-2'>
                    <Label className='text-white/80'>Font Family</Label>

                    <Select value={selectedTextShape.fontFamily} onValueChange={(value) => updateTextProperty('fontFamily', value)}>
                        <SelectTrigger className='bg-white/5 border-white/10 w-full text-white'>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className='bg-black/90 border-white/10'>
                            {fontFamilies.map((font) => (
                                <SelectItem
                                    key={font}
                                    value={font}
                                    className='text-white hover:bg-white/10'
                                >
                                    <span style={{ fontFamily: font }} >{font.split(',')[0]}</span>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className='space-y-2'>
                    <Label className='text-white/80'>
                        Font Size: {selectedTextShape?.fontSize}px
                    </Label>
                    <Slider
                        value={[selectedTextShape?.fontSize]}
                        onValueChange={([value]) => updateTextProperty('fontSize', value)}
                        min={8}
                        max={128}
                        step={1}
                        className='w-full'
                    />
                </div>

                <div className='space-y-2'>
                    <Label className='text-white/80'>
                        Font Weight: {selectedTextShape?.fontWeight}
                    </Label>
                    <Slider
                        value={[selectedTextShape?.fontWeight]}
                        onValueChange={([value]) => updateTextProperty('fontWeight', value)}
                        min={100}
                        max={900}
                        step={100}
                        className='w-full'
                    />
                </div>

                <div className='space-y-3'>
                    <Label className='text-white/80'>Style</Label>
                    <div className='flex gap-2'>
                        <Toggle
                            className='data-[state=on]:bg-blue-500 data-[state=on]:text-white'
                            pressed={selectedTextShape.fontWeight >= 600}
                            onPressedChange={(pressed) =>
                                updateTextProperty('fontWeight', pressed ? 700 : 400)
                            }
                        >
                            <Bold className='w-4 h-4' />
                        </Toggle>
                        <Toggle
                            className='data-[state=on]:bg-blue-500 data-[state=on]:text-white'
                            pressed={selectedTextShape.fontStyle === 'italic'}
                            onPressedChange={(pressed) =>
                                updateTextProperty('fontStyle', pressed ? 'italic' : 'normal')
                            }
                        >
                            <Italic className='w-4 h-4' />
                        </Toggle>
                        <Toggle
                            className='data-[state=on]:bg-blue-500 data-[state=on]:text-white'
                            pressed={selectedTextShape.textDecoration === 'underline'}
                            onPressedChange={(pressed) =>
                                updateTextProperty('textDecoration', pressed ? 'underline' : 'none')
                            }
                        >
                            <Underline className='w-4 h-4' />
                        </Toggle>
                        <Toggle
                            className='data-[state=on]:bg-blue-500 data-[state=on]:text-white'
                            pressed={selectedTextShape.textDecoration === 'line-through'}
                            onPressedChange={(pressed) =>
                                updateTextProperty('textDecoration', pressed ? 'line-through' : 'none')
                            }
                        >
                            <Strikethrough className='w-4 h-4' />
                        </Toggle>
                    </div>
                </div>

                {/* Letter Spacing -> */}
                <div className='space-y-2'>
                    <Label className='text-white/80'>
                        Letter Spacing: {selectedTextShape.letterSpacing}px
                    </Label>
                    <Slider
                        value={[selectedTextShape.letterSpacing]}
                        onValueChange={([value]) =>
                            updateTextProperty('letterSpacing', value)
                        }
                        min={-2}
                        max={10}
                        step={0.1}
                        className='w-full'
                    />
                </div>

                {/* Text Color -> */}
                <div className='space-y-2'>
                    <Label className='text-white/80 flex items-center gap-2'>
                        <Palette className='w-4 h-4' />
                        Text Color
                    </Label>
                    <div className='flex gap-2'>
                        <Input
                            value={colorInput}
                            onChange={(e) => handleColorChange(e.target.value)}
                            placeholder='#ffffff'
                            className='bg-white/5 border-white/10 text-white flex-1'
                        />
                        <div className='w-10 h-10 rounded-md border-white/20 cursor-pointer'
                            style={{ backgroundColor: selectedTextShape.fill || '#ffffff' }}
                            onClick={() => {
                                const input = document.createElement('input')
                                input.type = 'color'
                                input.value = selectedTextShape.fill || '#ffffff'
                                input.onchange = (e) => {
                                    const color = (e.target as HTMLInputElement).value
                                    setColorInput(color)
                                    updateTextProperty('fill', color)
                                }
                                input.click()
                            }}
                        >

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextSidebar