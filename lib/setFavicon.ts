const setFavicon = (icon) => {
  const canvas = document.createElement('canvas')
  canvas.height = 64
  canvas.width = 64

  const ctx = canvas.getContext('2d')
  ctx.font = '50px serif'
  ctx.fillText(icon, 0, 50)

  const favicon = document.querySelector('link[rel=icon]')
  // @ts-ignore
  favicon.href = canvas.toDataURL()
}

export default setFavicon
