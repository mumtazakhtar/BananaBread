$(function(){
        $.getJSON('json/menu.json',function(data){
            console.log('success');
            $('.items').append('</br>')
            $.each(data,function(i,emp){
            	console.log(emp.name);
                $('.items').append('<a herf="#"><h4>'+emp.name+'</h4></a>');
                
                $.each(emp.items, function(i,item){
                	console.log(item.name);
                	$('.items').append('<a href="' + item.link +'"><li>'+item.name+'</li></a>');
                });
            });
        }).error(function(){
            console.log('error');
        });
    });