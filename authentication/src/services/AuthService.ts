import { Ref, ref } from "vue";

class AuthService {

    private jwt: Ref<string>
    constructor() {
        this.jwt = ref('');
    }

    getJwt(): Ref<string> {
        return this.jwt;
    }

    async login(usuario: string, password: string): Promise<boolean> {
        try {
            const url = `http://controllaboral.com/api/login`;
            const params = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    usuario: usuario,
                    password: password
                })

            };
            const response = await fetch(url, params);
            const json = await response.json();
            if (response.status === 200) {
                this.jwt.value = json.token;
                return true;
            }
            return false;

        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

export default AuthService