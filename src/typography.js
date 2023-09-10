
const fontWeight = {
    bold: 700,
    light: 400
}

const fontSize = {
    size_1: '24px',
    size_2: '20px',
    size_3: '16px',
    size_4: '12px'
}

const fontFamily = {
    font_1: 'Coves',
    font_2: 'Nunito'
}

const typographyStyles = {

    subHeader: {
        bold: {
            fontFamily: fontFamily.font_2,
            fontSize: fontSize.size_1,
            fontWeight: fontWeight.bold
        },

        light: {
            fontFamily: fontFamily.font_2,
            fontSize: fontSize.size_1,
            fontWeight: fontWeight.light
        }
        
    },

    subHeader_1: {
        bold: {
            fontFamily: fontFamily.font_2,
            fontSize: fontSize.size_2,
            fontWeight: fontWeight.bold
        },

        light: {
            fontFamily: fontFamily.font_2,
            fontSize: fontSize.size_2,
            fontWeight: fontWeight.light
        }
    },

    subHeader_2: {
        bold: {
            fontFamily: fontFamily.font_2,
            fontSize: fontSize.size_3,
            fontWeight: fontWeight.bold
        },

        light: {
            fontFamily: fontFamily.font_2,
            fontSize: fontSize.size_3,
            fontWeight: fontWeight.light
        }
    },

    subHeader_3: {
        bold: {
            fontFamily: fontFamily.font_2,
            fontSize: fontSize.size_4,
            fontWeight: fontWeight.bold
        },

        light: {
            fontFamily: fontFamily.font_2,
            fontSize: fontSize.size_4,
            fontWeight: fontWeight.light
        }
    },

    header: {
        bold: {
            fontFamily: fontFamily.font_1,
            fontSize: fontSize.size_1,
            fontWeight: fontWeight.bold
        },

        light: {
            fontFamily: fontFamily.font_1,
            fontSize: fontSize.size_1,
            fontWeight: fontWeight.light
        }
    },

    header_1: {
        bold: {
            fontFamily: fontFamily.font_1,
            fontSize: fontSize.size_2,
            fontWeight: fontWeight.bold
        },

        light: {
            fontFamily: fontFamily.font_1,
            fontSize: fontSize.size_2,
            fontWeight: fontWeight.light
        }
    },

    header_2: {
        bold: {
            fontFamily: fontFamily.font_1,
            fontSize: fontSize.size_3,
            fontWeight: fontWeight.bold
        },

        light: {
            fontFamily: fontFamily.font_1,
            fontSize: fontSize.size_3,
            fontWeight: fontWeight.light
        }
    }

}

export { typographyStyles }
