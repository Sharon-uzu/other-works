<?php


$engineering_manufacturing_custom_css = '';

	/*---------------------------text-transform-------------------*/

	$engineering_manufacturing_text_transform = get_theme_mod( 'menu_text_transform_engineering_manufacturing','CAPITALISE');
    if($engineering_manufacturing_text_transform == 'CAPITALISE'){

		$engineering_manufacturing_custom_css .='#main-menu ul li a{';

			$engineering_manufacturing_custom_css .='text-transform: capitalize ; font-size: 14px;';

		$engineering_manufacturing_custom_css .='}';

	}else if($engineering_manufacturing_text_transform == 'UPPERCASE'){

		$engineering_manufacturing_custom_css .='#main-menu ul li a{';

			$engineering_manufacturing_custom_css .='text-transform: uppercase ; font-size: 14px';;

		$engineering_manufacturing_custom_css .='}';

	}else if($engineering_manufacturing_text_transform == 'LOWERCASE'){

		$engineering_manufacturing_custom_css .='#main-menu ul li a{';

			$engineering_manufacturing_custom_css .='text-transform: lowercase ; font-size: 14px;';

		$engineering_manufacturing_custom_css .='}';
	}

	/*---------------------------Container Width-------------------*/

	$engineering_manufacturing_container_width = get_theme_mod('engineering_manufacturing_container_width');

		$engineering_manufacturing_custom_css .='body{';

			$engineering_manufacturing_custom_css .='width: '.esc_attr($engineering_manufacturing_container_width).'%; margin: auto;';

		$engineering_manufacturing_custom_css .='}';

		/*---------------------------Slider-content-alignment-------------------*/


$engineering_manufacturing_slider_content_alignment = get_theme_mod( 'engineering_manufacturing_slider_content_alignment','LEFT-ALIGN');

if($engineering_manufacturing_slider_content_alignment == 'LEFT-ALIGN'){

	$engineering_manufacturing_custom_css .='.blog_box{';

		$engineering_manufacturing_custom_css .='text-align:left;';

	$engineering_manufacturing_custom_css .='}';


}else if($engineering_manufacturing_slider_content_alignment == 'CENTER-ALIGN'){

	$engineering_manufacturing_custom_css .='.blog_box{';

		$engineering_manufacturing_custom_css .='text-align:center; right: 30%; left: 30%;';

	$engineering_manufacturing_custom_css .='}';


}else if($engineering_manufacturing_slider_content_alignment == 'RIGHT-ALIGN'){

	$engineering_manufacturing_custom_css .='.blog_box{';

		$engineering_manufacturing_custom_css .='text-align:right; right: 15%; left: 55%;';

	$engineering_manufacturing_custom_css .='}';

}

	/*---------------------------Copyright Text alignment-------------------*/

$engineering_manufacturing_copyright_text_alignment = get_theme_mod( 'engineering_manufacturing_copyright_text_alignment','LEFT-ALIGN');

 if($engineering_manufacturing_copyright_text_alignment == 'LEFT-ALIGN'){

		$engineering_manufacturing_custom_css .='.copy-text p{';

			$engineering_manufacturing_custom_css .='text-align:left;';

		$engineering_manufacturing_custom_css .='}';


	}else if($engineering_manufacturing_copyright_text_alignment == 'CENTER-ALIGN'){

		$engineering_manufacturing_custom_css .='.copy-text p{';

			$engineering_manufacturing_custom_css .='text-align:center;';

		$engineering_manufacturing_custom_css .='}';


	}else if($engineering_manufacturing_copyright_text_alignment == 'RIGHT-ALIGN'){

		$engineering_manufacturing_custom_css .='.copy-text p{';

			$engineering_manufacturing_custom_css .='text-align:right;';

		$engineering_manufacturing_custom_css .='}';

	}

	/*---------------------------related Product Settings-------------------*/


$engineering_manufacturing_related_product_setting = get_theme_mod('engineering_manufacturing_related_product_setting',true);

	if($engineering_manufacturing_related_product_setting == false){

		$engineering_manufacturing_custom_css .='.related.products, .related h2{';

			$engineering_manufacturing_custom_css .='display: none;';

		$engineering_manufacturing_custom_css .='}';
	}

	/*---------------------------Scroll to Top Alignment Settings-------------------*/

	$engineering_manufacturing_scroll_top_position = get_theme_mod( 'engineering_manufacturing_scroll_top_position','Right');

	if($engineering_manufacturing_scroll_top_position == 'Right'){

		$engineering_manufacturing_custom_css .='.scroll-up{';

			$engineering_manufacturing_custom_css .='right: 20px;';

		$engineering_manufacturing_custom_css .='}';

	}else if($engineering_manufacturing_scroll_top_position == 'Left'){

		$engineering_manufacturing_custom_css .='.scroll-up{';

			$engineering_manufacturing_custom_css .='left: 20px;';

		$engineering_manufacturing_custom_css .='}';

	}else if($engineering_manufacturing_scroll_top_position == 'Center'){

		$engineering_manufacturing_custom_css .='.scroll-up{';

			$engineering_manufacturing_custom_css .='right: 50%;left: 50%;';

		$engineering_manufacturing_custom_css .='}';
	}

		/*---------------------------Pagination Settings-------------------*/


$engineering_manufacturing_pagination_setting = get_theme_mod('engineering_manufacturing_pagination_setting',true);

	if($engineering_manufacturing_pagination_setting == false){

		$engineering_manufacturing_custom_css .='.nav-links{';

			$engineering_manufacturing_custom_css .='display: none;';

		$engineering_manufacturing_custom_css .='}';
	}

