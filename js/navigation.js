// -------------------------------------
// Kings Template: JS > Navigation
// -------------------------------------


// Toggles class open to display/hide the whole navigation
$( ".widget__extendednavigation" ).addClass( "closed" );

$(document).on("click", ".navigation-toggle", function() {
    $( ".widget__extendednavigation" ).toggleClass( "open" ).toggleClass( "closed" );
    $( "html" ).toggleClass( "nav-open" );
});

// Togglse class open to display/hide folders
$( ".navigation-item.folder .item-name--parent" ).each(function() {
	$( this ).click(function() {
			$( this ).parent( ".navigation-item.folder" ).toggleClass( "open" );
	});
});
