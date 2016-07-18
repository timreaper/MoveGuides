var router = new function () {
    this.getRoute = function () {
        return window.location.pathname.split('/')[1];
    };

    this.loadMain = function () {
        $.getJSON('employees.json', function (data1) {
            $('#page').html(MoveGuides.main(data1));
            map.load(data1.employees, 'mapcontainer');
        });
    };


    this.route = function () {
        switch (router.getRoute()) {
            case '':
                router.loadMain();
                break;
            default:
                router.loadMain();
        }
    }
};