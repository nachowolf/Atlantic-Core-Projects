module.exports = function (navi) {

    function home(req, res) {
        let nav1 = navi.route("home")
        let hero1 = navi.hero("home")
        res.render('home', {
            nav1,
            hero1
        })
    }

    function services(req, res) {
        let nav2 = navi.route("services")
        let hero2 = navi.hero("services")
        res.render('services', {
            nav2,
            hero2
        })
    }

    function projects(req, res) {
        let nav3 = navi.route("projects")
        let hero3 = navi.hero("projects")
        res.render('projects', {
            nav3,
            hero3
        })
    }

    // function gallery(req, res) {
    //     let nav4 = navi.route("gallery")
    //     let hero4 = navi.hero("gallery")
    //     res.render('gallery', {
    //         nav4,
    //         hero4
    //     })
    // }

    function aboutUs(req, res) {
        let nav5 = navi.route("aboutUs")
        let hero5 = navi.hero("aboutUs")
        res.render('about', {
            nav5,
            hero5
        })
    }

    function contactUs(req, res) {
        let nav6 = navi.route("contactUs")
        let hero6 = navi.hero("contactUs")
        res.render('contact', {
            nav6,
            hero6
        })
    }

    return {
        home,
        services,
        projects,
        // gallery,
        aboutUs,
        contactUs
    }
}