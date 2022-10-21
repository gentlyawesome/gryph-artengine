const fs = require("fs")
const path = require("path")
const folder = path.join(`${process.cwd()}/layers_raw`)

async function main() {
  try {
    if (!fs.existsSync(folder)) return false
    console.log("Build Layers")

    const folders = fs.readdirSync(folder)
    folders.forEach(async (subFolder) => {
      const files = fs.readdirSync(`${folder}/${subFolder}`)
      files.forEach(async (file) => {
        const folderFile = file
          .toLowerCase()
          .replace(".png", "")
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("-")

        fs.mkdirSync(`${folder}/${subFolder}/${folderFile}`)
        fs.copyFileSync(`${folder}/${subFolder}/${file}`, `${folder}/${subFolder}/${folderFile}/0.png`)
        fs.copyFileSync(`${folder}/${subFolder}/${file}`, `${folder}/${subFolder}/${folderFile}/1.png`)
        fs.copyFileSync(`${folder}/${subFolder}/${file}`, `${folder}/${subFolder}/${folderFile}/2.png`)
        fs.unlinkSync(`${folder}/${subFolder}/${file}`)
      })
    })
  } catch (err) {
    console.log({ err })
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
