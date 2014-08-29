function feedwind_show_widget_iframe(params, html) {
    params['rssmikle_frame_width'] = params['rssmikle_frame_width'] ? params['rssmikle_frame_width'] : 180;
    params['rssmikle_frame_height'] = params['rssmikle_frame_height'] ? params['rssmikle_frame_height'] : 500;

    var iframe_width = params['rssmikle_frame_width'];
    var iframe_height = params['rssmikle_frame_height'];
    if (params['rssmikle_border'] != 'off' && !params['rssmikle_css_url']) {
	iframe_width = parseInt(params['rssmikle_frame_width']) + 2;
	iframe_height = parseInt(params['rssmikle_frame_height']) + 2;
    }
    if (params['responsive'] == 'on') {
        iframe_width = '100%';
        params['rssmikle_frame_width'] = '100%';
    }

    var scroll_flag = params['rssmikle_item_description_tag'] == 'on_scrollbar' ? 'auto' : 'no';
    scroll_flag = params['autoscroll'] == 'on' ? 'no' : scroll_flag;

    var url = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'feed.mikle.com/widget/?';
    for (var key in params) {
        if (params[key]) {
            url += key + '=' + encodeURIComponent(params[key]) + '&';
        }
    }

    var iframe = '<iframe name="rssmikle_frame" width="' + iframe_width + '" height="' + iframe_height + '" frameborder="0" src="' + url + '" marginwidth="0" marginheight="0" vspace="0" hspace="0" scrolling="' + scroll_flag + '"></iframe>';

    if (html) {
        return iframe;
    } else {
        document.write(iframe);
    }
}

(function(){
var a = window;
if (a.rssmikle_url && typeof(a.rssmikle_url) == 'string') {
    old_snippet();
}

function undef_to_nullstr(v) {
    return (v ? v : '');
}

function old_snippet() {
    var params = {
        rssmikle_url: undef_to_nullstr(a.rssmikle_url),
        rssmikle_frame_width: undef_to_nullstr(a.rssmikle_frame_width),
        rssmikle_frame_height: undef_to_nullstr(a.rssmikle_frame_height),
        rssmikle_target: undef_to_nullstr(a.rssmikle_target),
        rssmikle_font: undef_to_nullstr(a.rssmikle_font),
        rssmikle_font_size: undef_to_nullstr(a.rssmikle_font_size),
        rssmikle_border: undef_to_nullstr(a.rssmikle_border),
        responsive: undef_to_nullstr(a.responsive),
        rssmikle_css_url: (a.rssmikle_css_url == 'http://' ? '' : undef_to_nullstr(a.rssmikle_css_url)),
        text_align: undef_to_nullstr(a.text_align),
        text_align2: undef_to_nullstr(a.text_align2),
        corner: undef_to_nullstr(a.corner),
        scrollbar: undef_to_nullstr(a.scrollbar),
        autoscroll: undef_to_nullstr(a.autoscroll),
        scrolldirection: undef_to_nullstr(a.scrolldirection),
        scrollstep: undef_to_nullstr(a.scrollstep),
        mcspeed: undef_to_nullstr(a.mcspeed),
        sort: undef_to_nullstr(a.sort),
        rssmikle_title: undef_to_nullstr(a.rssmikle_title),
        rssmikle_title_sentence: undef_to_nullstr(a.rssmikle_title_sentence),
        rssmikle_title_link: (a.rssmikle_title_link == 'http://' ? '' : undef_to_nullstr(a.rssmikle_title_link)),
        rssmikle_title_bgcolor: undef_to_nullstr(a.rssmikle_title_bgcolor),
        rssmikle_title_color: undef_to_nullstr(a.rssmikle_title_color),
        rssmikle_title_bgimage: (a.rssmikle_title_bgimage == 'http://' ? '' : undef_to_nullstr(a.rssmikle_title_bgimage)),
        rssmikle_item_bgcolor: undef_to_nullstr(a.rssmikle_item_bgcolor),
        rssmikle_item_bgimage: (a.rssmikle_item_bgimage == 'http://' ? '' : undef_to_nullstr(a.rssmikle_item_bgimage)),
        rssmikle_item_title_length: undef_to_nullstr(a.rssmikle_item_title_length),
        rssmikle_item_title_color: undef_to_nullstr(a.rssmikle_item_title_color),
        rssmikle_item_border_bottom: undef_to_nullstr(a.rssmikle_item_border_bottom),
        rssmikle_item_description: undef_to_nullstr(a.rssmikle_item_description),
        item_link: undef_to_nullstr(a.item_link),
        rssmikle_item_description_length: undef_to_nullstr(a.rssmikle_item_description_length),
        rssmikle_item_description_color: undef_to_nullstr(a.rssmikle_item_description_color),
        rssmikle_item_date: undef_to_nullstr(a.rssmikle_item_date),
        rssmikle_timezone: undef_to_nullstr(a.rssmikle_timezone),
        datetime_format: undef_to_nullstr(a.datetime_format),
        rssmikle_item_description_tag: undef_to_nullstr(a.rssmikle_item_description_tag),
        rssmikle_item_description_image_scaling: undef_to_nullstr(a.rssmikle_item_description_image_scaling),
        article_num: undef_to_nullstr(a.article_num),
        rssmikle_item_podcast: undef_to_nullstr(a.rssmikle_item_podcast),
        keyword_inc: undef_to_nullstr(a.keyword_inc),
        keyword_exc: undef_to_nullstr(a.keyword_exc)
    };

    feedwind_show_widget_iframe(params);
    
    a.rssmikle_url = '';
    a.rssmikle_frame_width = '';
    a.rssmikle_frame_height = '';
    a.rssmikle_target = '';
    a.rssmikle_font = '';
    a.rssmikle_font_size = '';
    a.rssmikle_border = '';
    a.responsive = '';
    a.rssmikle_css_url = '';
    a.text_align = '';
    a.text_align2 = '';
    a.corner = '';
    a.scrollbar = '';
    a.autoscroll = '';
    a.scrolldirection = '';
    a.scrollstep = '';
    a.mcspeed = '';
    a.sort = '';
    a.rssmikle_title = '';
    a.rssmikle_title_sentence = '';
    a.rssmikle_title_link = '';
    a.rssmikle_title_bgcolor = '';
    a.rssmikle_title_color = '';
    a.rssmikle_title_bgimage = '';
    a.rssmikle_item_bgcolor = '';
    a.rssmikle_item_bgimage = '';
    a.rssmikle_item_title_length = '';
    a.rssmikle_item_title_color = '';
    a.rssmikle_item_border_bottom = '';
    a.rssmikle_item_description = '';
    a.item_link = '';
    a.rssmikle_item_description_length = '';
    a.rssmikle_item_description_color = '';
    a.rssmikle_item_date = '';
    a.rssmikle_timezone = '';
    a.datetime_format = '';
    a.rssmikle_item_description_tag = '';
    a.rssmikle_item_description_image_scaling = '';
    a.article_num = '';
    a.rssmikle_item_podcast = '';
    a.keyword_inc = '';
    a.keyword_exc = '';
}
})()
