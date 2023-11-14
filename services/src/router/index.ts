import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PostListView from '../views/PostListView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import PhotoListView from '../views/PhotoListView.vue'
import PhotoDetailView from '../views/PhotoDetailView.vue'
import UserListView from '../views/UserListView.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: { name: 'PostList' }
    },
    {
        path: '/posts',
        name: 'PostList',
        component: PostListView
    },
    {
        path: '/post/:id',
        name: 'PostDetail',
        component: PostDetailView
    },
    {
        path: '/photos',
        name: 'PhotoList',
        component: PhotoListView
    },
    {
        path: '/photos/:id',
        name: 'PhotoDetail',
        component: PhotoDetailView
    },
    {
        path: '/users',
        name: 'UserList',
        component: UserListView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
