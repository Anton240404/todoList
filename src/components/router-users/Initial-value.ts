export const nav = {
    base: '/',
    about: '/about',
    home: '/home',
    user(id: string | number) {
        return '/users/' + id;
    },
};

//    nav.user(':id') = //     /user/:id
//    nav.user + '42' = //      /user/42
//    nav.user(12)

const base = '/home/user/view/details/';

const x = nav.base + '12376152837162';
const x = base + '6456456';
const x = base + '43567456756';
const x = base + '2';
const x = base + '3';
const x = base + '4';
const x = base + '5';

const nav = {
    main: '/',
    archive: '/archive',
    settings: '/settings',
    profile: '/profile',
    login: '/login',
    register: '/register',
};
