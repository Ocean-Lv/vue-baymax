"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("./views/Home.vue");
var index_vue_1 = require("@/layout/index.vue");
vue_1["default"].use(vue_router_1["default"]);
//system page（home/404）
exports.constantRoutes = [
    {
        path: '/',
        name: 'home',
        component: Home_vue_1["default"]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "about" */ './views/About.vue'); }); }
    },
    {
        path: '/layout',
        name: 'Layout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "about" */ './layout/index.vue'); }); },
        meta: {
            title: 'First Link',
            icon: 'sideLink'
        }
    }
];
//user权限page
exports.asyncRoutes = [
    {
        path: '/permission',
        component: index_vue_1["default"],
        redirect: '/permission/page',
        alwaysShow: true,
        name: 'Permission',
        meta: {
            title: 'Permission',
            icon: 'lock',
            roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [
            {
                path: 'page',
                component: function () { return Promise.resolve().then(function () { return require('@/views/permission/page.vue'); }); },
                name: 'PagePermission',
                meta: {
                    title: 'Page Permission',
                    roles: ['admin'] // or you can only set roles in sub nav
                }
            },
            {
                path: 'directive',
                component: function () { return Promise.resolve().then(function () { return require('@/views/permission/directive.vue'); }); },
                name: 'DirectivePermission',
                meta: {
                    title: 'Directive Permission'
                    // if do not set roles, means: this page does not require permission
                }
            },
            {
                path: 'role',
                component: function () { return Promise.resolve().then(function () { return require('@/views/permission/role.vue'); }); },
                name: 'RolePermission',
                meta: {
                    title: 'Role Permission',
                    roles: ['admin']
                }
            }
        ]
    },
    {
        path: '/icon',
        component: index_vue_1["default"],
        children: [
            {
                path: 'index',
                component: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "about" */ '@/views/icons/index.vue'); }); },
                name: 'Icons',
                meta: { title: 'Icons', icon: 'icon' }
            }
        ]
    },
    {
        path: '/pdf/download',
        component: function () { return Promise.resolve().then(function () { return require('@/views/pdf/index.vue'); }); },
        name: 'pdf',
        meta: { title: 'pdf', icon: 'pdf' }
    },
];
//system page（home/404）
var router = new vue_router_1["default"]({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: exports.constantRoutes
});
router.addRoutes(exports.asyncRoutes);
exports["default"] = router;
