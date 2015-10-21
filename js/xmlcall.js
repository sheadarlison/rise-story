

//information from XML via AJAX request 

$(document).ready(function(){

	 $.ajax({
        type: "GET",
        url: "myData.xml",
        dataType: "xml",
        success: parseXml,
        error: backupData
        });

        function parseXml(xml)
        {
        $(xml).find('displayStats').each(function(){

        var displayStats = $(this);
        var totalRegistered = displayStats.find('totalCompaniesRegistered').text();
        var newCompanies = displayStats.find('newCompaniesAddedYesterday').text();
        var largestDisplayNetworkToday = displayStats.find('largestDisplayNetworkToday').text();
        var numberOfCountriesInstalled = displayStats.find('numberOfCountriesInstalled').text();

        // add total registered companies
        $(".owl-carousel .slide1 .button-box").prepend("<span class='count-num'>"+totalRegistered+"</span>");
        
        //add new companies
        $(".owl-carousel .slide2 .button-box").prepend("<span class='count-num'>"+newCompanies+"</span>");

        //add number of countries installed
        $(".owl-carousel .slide3 .button-box").prepend("<span class='count-num'>"+numberOfCountriesInstalled+"</span>");
    });
    };


        function backupData(){
            // add backup total registered companies
        $(".owl-carousel .slide1 .button-box").prepend("<span class='count-num'>"+07965+"</span>");
        
        //add backup total new companies
        $(".owl-carousel .slide2 .button-box").prepend("<span class='count-num'>"+107+"</span>");

        //add backup number of countries installed
        $(".owl-carousel .slide3 .button-box").prepend("<span class='count-num'>"+118+"</span>");

        }


});