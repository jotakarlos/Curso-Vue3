import { Ref, ref } from 'vue'
import IUser from "@/interfaces/IUser"

class UserService {
    private users: Ref<Array<IUser>>;
    private user: Ref<IUser>;

    constructor() {
        this.users = ref<Array<IUser>>([]);
        this.user = ref<IUser>({});
    }

    getUsers(): Ref<Array<IUser>> {
        return this.users;
    }

    getUser(): Ref<IUser> {
        return this.user;
    }

    async fetchAll(): Promise<void> {
        try {
            const url = 'https://jsonplaceholder.typicode.com/users';
            const response = await fetch(url);
            const json = await response.json();
            this.users.value = await json;
        } catch (error) {
            console.log(error);
        }
    }

    async fecthUserById(id: string | string[]): Promise<void> {
        try {
            const url = `https://jsonplaceholder.typicode.com/users/${id}`;
            const response = await fetch(url);
            const json = await response.json();
            this.user.value = await json;
        } catch (error) {
            console.log(error);
        }
    }
}

export default UserService;