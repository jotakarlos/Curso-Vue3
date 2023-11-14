import { ref, Ref } from 'vue';
import IPost from '@/interfaces/IPost';

class PostService {
    private posts: Ref<Array<IPost>>;
    private post: Ref<IPost>

    constructor() {
        this.posts = ref<Array<IPost>>([]);
        this.post = ref<IPost>({});
    }

    // Obtener todos los posts
    getPosts(): Ref<Array<IPost>> {
        return this.posts;
    }

    // Obtener un Post
    getPost(): Ref<IPost> {
        return this.post
    }

    // Fetch para obtener todos los posts
    async fetchAll(): Promise<void> {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const response = await fetch(url);
            const json = await response.json();
            this.posts.value = await json;
        } catch (error) {
            console.log(error);
        }
    }

    // Fetch para obtener un post por su Id
    async fetchPostById(id: string | Array<string>): Promise<void> {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
            const response = await fetch(url);
            const json = await response.json();
            this.post.value = await json;
        } catch (error) {
            console.log(error);
        }
    }


}

export default PostService;
