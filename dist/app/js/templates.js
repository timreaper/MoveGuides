this.MoveGuides=this.MoveGuides||{},this.MoveGuides.main=Handlebars.template({1:function(n,a,l,s,r){var e,i,t=null!=a?a:{},o=l.helperMissing,d="function",c=n.escapeExpression;return'                <div class="row employee" id="'+c((i=null!=(i=l.id||(null!=a?a.id:a))?i:o,typeof i===d?i.call(t,{name:"id",hash:{},data:r}):i))+'" title="'+c((i=null!=(i=l.first_name||(null!=a?a.first_name:a))?i:o,typeof i===d?i.call(t,{name:"first_name",hash:{},data:r}):i))+" "+c((i=null!=(i=l.last_name||(null!=a?a.last_name:a))?i:o,typeof i===d?i.call(t,{name:"last_name",hash:{},data:r}):i))+'">\r\n'+(null!=(e=l["if"].call(t,null!=(e=null!=a?a.visa:a)?e.status:e,{name:"if",hash:{},fn:n.program(2,r,0),inverse:n.noop,data:r}))?e:"")+'                    <img src="'+c((i=null!=(i=l.photo||(null!=a?a.photo:a))?i:o,typeof i===d?i.call(t,{name:"photo",hash:{},data:r}):i))+'" class="shrink columns employee__image" alt="'+c((i=null!=(i=l.first_name||(null!=a?a.first_name:a))?i:o,typeof i===d?i.call(t,{name:"first_name",hash:{},data:r}):i))+" "+c((i=null!=(i=l.last_name||(null!=a?a.last_name:a))?i:o,typeof i===d?i.call(t,{name:"last_name",hash:{},data:r}):i))+'"\r\n                         title="'+c((i=null!=(i=l.first_name||(null!=a?a.first_name:a))?i:o,typeof i===d?i.call(t,{name:"first_name",hash:{},data:r}):i))+" "+c((i=null!=(i=l.last_name||(null!=a?a.last_name:a))?i:o,typeof i===d?i.call(t,{name:"last_name",hash:{},data:r}):i))+'">\r\n                    <div class="columns employee__info">\r\n                        <p class="employee__info__name">'+c((i=null!=(i=l.first_name||(null!=a?a.first_name:a))?i:o,typeof i===d?i.call(t,{name:"first_name",hash:{},data:r}):i))+" "+c((i=null!=(i=l.last_name||(null!=a?a.last_name:a))?i:o,typeof i===d?i.call(t,{name:"last_name",hash:{},data:r}):i))+'</p>\r\n                        <p class="employee__info__arrival">Arrival date: '+c((i=null!=(i=l.arrival_date||(null!=a?a.arrival_date:a))?i:o,typeof i===d?i.call(t,{name:"arrival_date",hash:{},data:r}):i))+"</p>\r\n"+(null!=(e=l["if"].call(t,null!=(e=null!=a?a.visa:a)?e.status:e,{name:"if",hash:{},fn:n.program(4,r,0),inverse:n.noop,data:r}))?e:"")+"                    </div>\r\n                    <hr>\r\n                </div>\r\n"},2:function(n,a,l,s,r){var e;return'                        <img class="employee__warning--icon" src="assets/icons/warning.png" alt="Visa Warning"\r\n                             title="Visa expires in '+n.escapeExpression(n.lambda(null!=(e=null!=a?a.visa:a)?e.time_remaining:e,a))+' days">\r\n'},4:function(n,a,l,s,r){var e;return'                            <p class="employee__warning--text">Visa expires in '+n.escapeExpression(n.lambda(null!=(e=null!=a?a.visa:a)?e.time_remaining:e,a))+" days</p>\r\n"},compiler:[7,">= 4.0.0"],main:function(n,a,l,s,r){var e;return'<div class="top-bar">\r\n    <div class="top-bar-left">\r\n        <a href="/">\r\n            <img src="assets/logos/moveguides.png" alt="Move Guides" title="Move Guides">\r\n        </a>\r\n    </div>\r\n    <div class="top-bar-right text-right">\r\n        <div class="row align-right">\r\n            <div class="columns">\r\n                <p class="no-margin">Amanda Johnson</p>\r\n                <a>Log out</a>\r\n            </div>\r\n            <div>\r\n                <img class="img-circle" src="assets/employees/002-gemma-falconn.jpg">\r\n                <img src="assets/icons/notifications.png" alt="Notifications" title="Notifications">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="row no-padding">\r\n    <div class="header">\r\n        <div class="header__text">\r\n            Track Your Employees\r\n        </div>\r\n        <div class="header__filters">\r\n            <div class="row align-center">\r\n                <div class="column small-3">\r\n                </div>\r\n                <div class="column small-6">\r\n                    <ul class="row">\r\n                        <li class="column small-4 header__filters__filter selected">\r\n                            Map\r\n                        </li>\r\n                        <li class="column small-4 header__filters__filter">\r\n                            List\r\n                        </li>\r\n                        <li class="column small-4 header__filters__filter">\r\n                            Filters\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class="column small-3 text-right">\r\n                    <button class="button">\r\n                        Add Filter\r\n                        <img src="assets/icons/add-filter.png" class="" id="">\r\n                    </button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="row">\r\n    <div class="filters">\r\n        <button class="button filters__filter__name">Short <span aria-hidden="true"><i class="fa fa-close"></i></span>\r\n        </button>\r\n        <button class="button filters__filter__name">Long Name Or Filter <span aria-hidden="true"><i\r\n                class="fa fa-close"></i></span></button>\r\n        <button class="button filters__filter__name">Filter Name <span aria-hidden="true"><i\r\n                class="fa fa-close"></i></span></button>\r\n    </div>\r\n</div>\r\n\r\n<div class="row">\r\n    <div class="small-9 columns map" id="mapcontainer">\r\n\r\n    </div>\r\n    <div class="columns sidebar">\r\n        <div class="sidebar__header">\r\n            <p>Employees in</p>\r\n            <p class="uppercase">London</p>\r\n        </div>\r\n        <div class="employees-container">\r\n'+(null!=(e=l.each.call(null!=a?a:{},null!=a?a.employees:a,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r}))?e:"")+"        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"},useData:!0});