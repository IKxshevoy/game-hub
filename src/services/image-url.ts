import noImage from "../assets/no_image_to_show_.webp"

const getCroppedUrl = (url: string):string => {
    if(!url) return noImage;
    const target  = "media/"
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedUrl;