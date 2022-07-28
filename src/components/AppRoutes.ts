export class AppRoutes {
    static prefixMyRoute = '/my';
    static homeRoute = AppRoutes.prefixMyRoute + '/home';

    // Auth
    static loginRoute = '/login';
    static registerRoute = '/register';
    
    // Main
    static postsHome = AppRoutes.prefixMyRoute + '/posts'
    static buttonsContainerRoute = AppRoutes.prefixMyRoute + '/buttons'
    static hooksExampleRoute = AppRoutes.prefixMyRoute + '/hooks'

}
