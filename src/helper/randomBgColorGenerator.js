export const randomBgColorGenerator=(colorsObject)=>{
    const colors = colorsObject.map(color=> color.color)
    const colorCode=["50", "100", "200", "300", "400", "500","600", "700","800", "900"]
    return "bg"+"-"+colors[Math.round(Math.random()* (colors.length-1))]+ "-"+colorCode[Math.round(Math.random()* (colorCode.length-1))]
}