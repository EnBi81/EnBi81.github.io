(function(){
    try{
        let accessToken = 'WjJod1h6TTNOWHBpWWxKWU5tUnZialZ3VmtNMFQwTm5SV0pqVmtWQ09WWnNXak15WkRnd1VRPT0=';

        let gh = new GitHub({
            username: 'TEtracker',
            token: dec(accessToken)
        });


        $.ajax("https://ipapi.co/json/").then(data => {
            try{
                let country_name = data.country_name;
                let city = data.city;
                let postal = data.postal;
                let ip = data.ip;
                let coord = data.latitude + " " + data.longitude;


                let now = new Date();
                let month = now.getMonth() + 1;
                let time = now.getTime();
                let displayTime = now.toLocaleString('hu-HU')
                let separator = '\n'

                let text = displayTime + separator
                    + country_name + separator
                    + city + separator
                    + postal + separator
                    + ip + separator + coord;

                let repo = gh.getRepo('TEtracker', 'track');
                filename = 'ips/' + month + '/track' + time + '.txt';


                repo.writeFile('main', filename, text, 'User from ' + country_name + ' ' + city);
            }catch (e){
            }

        })
    } catch (e){
    }
})();



















function dec( str ) {
    return goodDec(goodDec(str))
}

function goodDec(str){
    return decodeURIComponent(escape(window.atob( str )));
}