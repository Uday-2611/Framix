export interface ColorSwatch {
    name: string
    hexColor: string
    description?: string
}

export interface ColorSection {
    title:
    | 'Primary Colours'
    | 'Secondary & Accent Colours'
    | 'UI Component Colours'
    | 'Utility & Form Colours'
    | 'Status & Feedback Colours'
    swatches: ColorSwatch[]
}

export interface TypographyStyle {
    name: string
    fontfamily: string
    fontSize: string
    fontWeight: string
    lineHeight: string
    letterSpacing?: string
    description?: string
}

export interface TypographySection {
    title: string
    styles: TypographyStyle[]
}

export interface StyleGuide {
    theme: string
    description: string
    colorSections: [
        ColorSection,
        ColorSection,
        ColorSection,
        ColorSection,
        ColorSection,
    ]
    typographySections: [
        TypographySection,
        TypographySection,
        TypographySection
    ]

}