 //clicking on color generator will generate all colors or only selected  colors
 export const handleClick = (bgColor, randomBgColorGenerator, selectedColors,colors) => {
    bgColor = randomBgColorGenerator(
        selectedColors.length ? selectedColors : colors
    );
    /*  history = [...history, bgColor];
     console.log({ history }); */
};
