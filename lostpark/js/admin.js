$(function() {
	$( "#selectDate" ).datepicker({ minDate: 0});
});
new Vue({
	el: '#admin-lostanimal-user',
	data: {
		dataFilters: {
			mobile: "",
			date: "",
			finalTime: "",
			page:1,
			pageSize:20
		},
		data: [],
		mission: []
	},
	created () {
		this.getMissionCount();
		this.goToPage(1);
	},
	computed: {
        pages: function () {
            var pageCount = parseInt(this.data.totalPages);
            var number = parseInt(this.data.number);
            var pageSlide = 10;
            var pageFrom = Math.max(1, number - pageSlide);
            var pageTo = Math.min(pageCount, number + pageSlide);
            pageFrom = Math.max(1, Math.min(pageTo - 2 * pageSlide, pageFrom));
            pageTo = Math.min(pageCount, Math.max(pageFrom + 2 * pageSlide, pageTo));

            var result = [];
            for (var i = pageFrom; i <= pageTo; i++) {
                result.push(i);
            }
            return result;
        }
    },
	methods: {
		goToPage: function (page) {
			var self = this;
			self.dataFilters.mobile = $( "#findMobile" ).val();
			self.dataFilters.date = $( "#selectDate" ).val();
			self.dataFilters.finalTime = $( "#findFinalTime" ).val();
			
			this.dataFilters.page = (page > 0 ? page : 1);
			$.get('/api/animal/admin/user', self.dataFilters, function (res) {
				self.data = res;
			});
		},
		getMissionCount: function() {
			var self = this;
			$.get('/api/animal/admin/user/get-mssion-count', self.dataFilters, function (res) {
				self.mission = res;
			});
		},
		download: function () {
			var params = 'date='+encodeURIComponent(this.dataFilters.date) + '&mobile='+encodeURIComponent(this.dataFilters.mobile)+'&finalTime='+encodeURIComponent(this.dataFilters.finalTime);
			location.href = '/upmn/lost-animal-park/download?' + params;
		}	
	},
	filters: {
		moment: function (date) {
			return date? moment(date).format('YYYY-MM-DD H:mm:ss') : date;
		}
	}
});