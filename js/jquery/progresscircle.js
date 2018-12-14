function makesvg(percentage,color){
  var abs_percentage = Math.abs(percentage).toString();
  var percentage_str = percentage.toString();
  var svg = '';
 	svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
     + '<circle class="circle-outside" cx="16.9" cy="16.9" r="14.9" />'
     + '<circle class="circle-inside"'
     + 'stroke-dasharray="'+ abs_percentage +',100"  cx="16.9" cy="16.9" r="14.9" stroke="'+color+'" />'
     + '<g><text class="circle-percent" x="17.9" y="17.9">'+percentage+'%</text></g></svg>';
  
  return svg
}

(function( $ ) {

    $.fn.circlechart = function() {
        this.each(function() {
            var percentage = $(this).data("percentage");
            var color = $(this).data("color");
            $(this).html(makesvg(percentage,color));
        });
        return this;
    };

}( jQuery ));