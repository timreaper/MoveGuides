var map = new function () {
    this.load = function (obj_data, id) {
        var icons = {
            normal: {
                icon: 'assets/icons/pointer.png'
            },
            selected: {
                icon: 'assets/icons/pointer-selected.png'
            }
        };

        var map;
        var mapOptions = {
            center: new google.maps.LatLng(46.3, 7.1),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById(id),
            mapOptions);
        $.each(obj_data, function (key, data) {
            if (data.location) {
                var latLng = new google.maps.LatLng(data.location.latitude, data.location.longitude);
                var marker = new google.maps.Marker({
                    position: latLng,
                    icon: icons['normal'].icon,
                    label: key + 1,
                    title: data.first_name + ' ' + data.last_name + ' - '  + data.location.city
                });
                marker.setMap(map);
            }
        });
    };
};