function convert(obj) {
    // eslint-disable-next-line array-callback-return
    return JSON.stringify(obj.data.image.album_images.images.map(v => {
        let a = ('https://i.imgur.com/' + v.hash + v.ext);
        // eslint-disable-next-line no-useless-concat
        console.log('"' + a + '"' + ',')
    }))
}