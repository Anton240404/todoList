export const nav = {
    base: '/',
    about: '/about',
    home: '/home',
    user(id: string | number) {
        return '/users/' + id;
    },
    create: '/create',
};

//    nav.user(':id') = //     /user/:id
//    nav.user + '42' = //      /user/42
//    nav.user(12)

const base = '/home/user/view/details/';

const x = nav.base + '12376152837162';

const nave = {
    main: '/',
    archive: '/archive',
    settings: '/settings',
    profile: '/profile',
    login: '/login',
    register: '/register',
};
