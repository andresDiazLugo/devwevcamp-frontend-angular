import { environment } from '../../environment/environment';

const baseUrl = environment.apiUrl ?? 'http://localhost:5041';

export const APIUrls = {
    get:{
        key:""
    },
    post:{
        createAccount: `${baseUrl}/api/user/signup`
    }
}