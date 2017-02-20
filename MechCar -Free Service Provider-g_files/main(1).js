jQuery(document).ready(function($){
	//open the lateral panel
	$('#menu-icon').on('click', function(e){
		e.preventDefault();
		$('.settings').addClass('is-visible');
	});
	//close the lateral panel
	$('.settings').on('click', function(e){
		if( $(e.target).is('.settings') || $(e.target).is('.settings-close') ) { 
			$('.settings').removeClass('is-visible');
			e.preventDefault();
		}
	});
});

$(document).ready(function() {
    $('.trigger').click(function(e) {  
        var classSelector = e.currentTarget.classList[1];
        classSelector = classSelector.replace("-trigger", "");
        classSelector += '-receiver';
        classSelector = '.' + classSelector;

        $(localStorage.getItem("lastSettingTriggered")).css('display','none');
        localStorage.setItem("lastSettingTriggered", classSelector);

        $(classSelector).css('display','block');
        $('.settings').addClass('is-visible');
    });
});