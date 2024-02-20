//task 40
function make_album(name: string, album_title: string ,tracks ?: number): Record<string, any> {
    const artist:Record<string,any> = {
        name: name,
        album_title: album_title
    }
    if(tracks !== undefined){
        artist.tracks = tracks
    }
    return artist
}