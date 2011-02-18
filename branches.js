
// the "branches" variable is assumed to be set

function show_branches() {
    var host = window.location.hostname;
    var splitat = host.indexOf('.');
    var branch = host.substring(0, splitat);
    var domain = host.substring(splitat+1);

    function remake_url(domain) {
	var loc = window.location;

	if(loc.port != 80) {
	    domain += ':' + loc.port;
	}

	return loc.protocol + '//' + domain + loc.pathname + loc.search;
    }
    
   
    if(window.branches && window.jQuery) {
	var el = $('<div class="_branches"></div>');

	el.append('Current branch: ' + branch);

	for(var i=0; i<branches.length; i++) {
	    el.append('<div><a href="' + remake_url(branches[i] + '.' + domain) + '">' + branches[i] + '</a></div>');
	}

	el.hide();
	el.css({ position: 'fixed',
		 top: 0,
		 right: 0,
		 padding: '30px',
		 margin: '15px',
		 backgroundColor: '#00FF00' });
	$('body').prepend(el);
	el.fadeIn(1500);
    }
}

setTimeout(show_branches, 1000);