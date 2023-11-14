import { Ref, ref } from "vue"
import IPhotos from "@/interfaces/IPhotos"
class PhotoService {
    private photos: Ref<Array<IPhotos>>
    private photo: Ref<IPhotos>

    constructor() {
        this.photos = ref<Array<IPhotos>>([]);
        this.photo = ref<IPhotos>({});
    }

    getPhotos(): Ref<Array<IPhotos>> {
        return this.photos;
    }

    getPhoto(): Ref<IPhotos> {
        return this.photo;
    }

    async fetchAll(): Promise<void> {
        try {
            const url = 'https://jsonplaceholder.typicode.com/photos';
            const response = await fetch(url);
            const json = await response.json();
            this.photos.value = await json;
        } catch (error) {
            console.log(error);
        }
    }

    async fecthPhotoById(id: string | string[]): Promise<void> {
        try {
            const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
            const response = await fetch(url);
            const json = await response.json();
            this.photo.value = await json;
        } catch (error) {
            console.log(error);
        }
    }
}

export default PhotoService;