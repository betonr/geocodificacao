function getPoint(line, callback){

    var number = line[1];
    var line = line[0];

    if(number%2==0){
        var ponto = app.externalApi.getPoint.searchPoint.getPoint(line[0].geometry, parseInt(line[0].nfpar), parseInt(line[0].nlpar), parseInt(number));
        if(ponto.error) callback(null);
        else line.point = ponto.point; callback(line);
    }else{
        var ponto = app.externalApi.getPoint.searchPoint.getPoint(line[0].geometry, parseInt(line[0].nfimpar), parseInt(line[0].nlimpar), parseInt(number));
        if(ponto.error) callback(null);
        else line.point = ponto.point; callback(line);
    }

}

module.exports = function(){
    return getPoint;
}