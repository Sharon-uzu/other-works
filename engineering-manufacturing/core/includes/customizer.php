<?php

if ( class_exists("Kirki")){

	// LOGO

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'slider',
		'settings'    => 'engineering_manufacturing_logo_resizer',
		'label'       => esc_html__( 'Adjust Your Logo Size ', 'engineering-manufacturing' ),
		'section'     => 'title_tagline',
		'default'     => 70,
		'choices'     => [
			'min'  => 10,
			'max'  => 300,
			'step' => 10,
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_enable_logo_text',
		'section'     => 'title_tagline',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Enable / Disable Site Title and Tagline', 'engineering-manufacturing' ) . '</h3>',
		'priority'    => 10,
	] );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'engineering_manufacturing_display_header_title',
		'label'       => esc_html__( 'Site Title Enable / Disable Button', 'engineering-manufacturing' ),
		'section'     => 'title_tagline',
		'default'     => '1',
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'engineering-manufacturing' ),
			'off' => esc_html__( 'Disable', 'engineering-manufacturing' ),
		],
		'partial_refresh'    => [
		'engineering_manufacturing_display_header_title' => [
			'selector'        => '.logo a',
			'render_callback' => function() {
				return get_bloginfo( 'name', 'display' );
			},
		],
	],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'engineering_manufacturing_display_header_text',
		'label'       => esc_html__( 'Tagline Enable / Disable Button', 'engineering-manufacturing' ),
		'section'     => 'title_tagline',
		'default'     => false,
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'engineering-manufacturing' ),
			'off' => esc_html__( 'Disable', 'engineering-manufacturing' ),
		],
		'partial_refresh'    => [
		'engineering_manufacturing_display_header_text' => [
			'selector'        => '.logo-content span',
			'render_callback' => function() {
				return get_bloginfo( 'name', 'display' );
			},
		],
	],
	] );

	// FONT STYLE TYPOGRAPHY

	Kirki::add_panel( 'engineering_manufacturing_panel_id', array(
	    'priority'    => 10,
	    'title'       => esc_html__( 'Typography', 'engineering-manufacturing' ),
	) );

	Kirki::add_section( 'engineering_manufacturing_font_style_section', array(
		'title'      => esc_attr__( 'Typography Option',  'engineering-manufacturing' ),
		'priority'   => 2,
		'capability' => 'edit_theme_options',
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_all_headings_typography',
		'section'     => 'engineering_manufacturing_font_style_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Heading Of All Sections',  'engineering-manufacturing' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'global', array(
		'type'        => 'typography',
		'settings'    => 'engineering_manufacturing_all_headings_typography',
		'label'       => esc_attr__( 'Heading Typography',  'engineering-manufacturing' ),
		'description' => esc_attr__( 'Select the typography options for your heading.',  'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_font_style_section',
		'priority'    => 10,
		'default'     => array(
			'font-family'    => '',
			'variant'        => '',
		),
		'output' => array(
			array(
				'element' => array( 'h1','h2','h3','h4','h5','h6', ),
			),
		),
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_body_content_typography',
		'section'     => 'engineering_manufacturing_font_style_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Body Content',  'engineering-manufacturing' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'global', array(
		'type'        => 'typography',
		'settings'    => 'engineering_manufacturing_body_content_typography',
		'label'       => esc_attr__( 'Content Typography',  'engineering-manufacturing' ),
		'description' => esc_attr__( 'Select the typography options for your content.',  'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_font_style_section',
		'priority'    => 10,
		'default'     => array(
			'font-family'    => '',
			'variant'        => '',
		),
		'output' => array(
			array(
				'element' => array( 'body', ),
			),
		),
	) );

	// PANEL

	Kirki::add_panel( 'engineering_manufacturing_panel_id', array(
	    'priority'    => 10,
	    'title'       => esc_html__( 'Theme Options', 'engineering-manufacturing' ),
	) );

	// Additional Settings

	Kirki::add_section( 'engineering_manufacturing_addtional_settings', array(
	    'title'          => esc_html__( 'Additional Settings', 'engineering-manufacturing' ),
	    'description'    => esc_html__( 'Scroll To Top', 'engineering-manufacturing' ),
	    'panel'          => 'engineering_manufacturing_panel_id',
	    'priority'       => 10,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'engineering_manufacturing_scroll_enable_setting',
		'label'       => esc_html__( 'Here you can enable or disable your scroller.', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_addtional_settings',
		'default'     => '1',
		'priority'    => 10,
		'partial_refresh'    => [
		'engineering_manufacturing_scroll_enable_setting' => [
			'selector'        => '.scroll-up a',
			'render_callback' => function() {
				return get_bloginfo( 'name', 'display' );
			},
		],
	],
	] );

	new \Kirki\Field\Radio_Buttonset(
		[
			'settings'    => 'engineering_manufacturing_scroll_top_position',
			'label'       => esc_html__( 'Alignment for Scroll To Top', 'engineering-manufacturing' ),
			'section'     => 'engineering_manufacturing_addtional_settings',
			'default'     => 'Right',
			'priority'    => 10,
			'choices'     => [
				'Left'   => esc_html__( 'Left', 'engineering-manufacturing' ),
				'Center' => esc_html__( 'Center', 'engineering-manufacturing' ),
				'Right'  => esc_html__( 'Right', 'engineering-manufacturing' ),
			],
		]
		);

	new \Kirki\Field\Select(
	[
		'settings'    => 'menu_text_transform_engineering_manufacturing',
		'label'       => esc_html__( 'Menus Text Transform', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_addtional_settings',
		'default'     => 'CAPITALISE',
		'placeholder' => esc_html__( 'Choose an option', 'engineering-manufacturing' ),
		'choices'     => [
			'CAPITALISE' => esc_html__( 'CAPITALISE', 'engineering-manufacturing' ),
			'UPPERCASE' => esc_html__( 'UPPERCASE', 'engineering-manufacturing' ),
			'LOWERCASE' => esc_html__( 'LOWERCASE', 'engineering-manufacturing' ),

		],
	]);

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'slider',
		'settings'    => 'engineering_manufacturing_container_width',
		'label'       => esc_html__( 'Theme Container Width', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_addtional_settings',
		'default'     => 100,
		'choices'     => [
			'min'  => 50,
			'max'  => 100,
			'step' => 1,
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'engineering_manufacturing_sticky_header',
		'label'       => esc_html__( 'Here you can enable or disable your Sticky Header.', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_addtional_settings',
		'default'     => false,
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'engineering_manufacturing_site_loader',
		'label'       => esc_html__( 'Here you can enable or disable your Site Loader.', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_addtional_settings',
		'default'     => false,
		'priority'    => 10,
	] );

	if ( class_exists("woocommerce")){

	// Woocommerce Settings

	Kirki::add_section( 'engineering_manufacturing_woocommerce_settings', array(
			'title'          => esc_html__( 'Woocommerce Settings', 'engineering-manufacturing' ),
			'description'    => esc_html__( 'Shop Page', 'engineering-manufacturing' ),
			'panel'          => 'engineering_manufacturing_panel_id',
			'priority'       => 160,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'engineering_manufacturing_shop_sidebar',
		'label'       => esc_html__( 'Here you can enable or disable shop page sidebar.', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_woocommerce_settings',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'engineering_manufacturing_product_sidebar',
		'label'       => esc_html__( 'Here you can enable or disable product page sidebar.', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_woocommerce_settings',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'engineering_manufacturing_related_product_setting',
		'label'       => esc_html__( 'Here you can enable or disable your related products.', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_woocommerce_settings',
		'default'     => true,
		'priority'    => 10,
	] );

	new \Kirki\Field\Number(
	[
		'settings' => 'engineering_manufacturing_per_columns',
		'label'    => esc_html__( 'Product Per Row', 'engineering-manufacturing' ),
		'section'  => 'engineering_manufacturing_woocommerce_settings',
		'default'  => 3,
		'choices'  => [
			'min'  => 1,
			'max'  => 4,
			'step' => 1,
		],
	]
	);

	new \Kirki\Field\Number(
	[
		'settings' => 'engineering_manufacturing_product_per_page',
		'label'    => esc_html__( 'Product Per Page', 'engineering-manufacturing' ),
		'section'  => 'engineering_manufacturing_woocommerce_settings',
		'default'  => 9,
		'choices'  => [
			'min'  => 1,
			'max'  => 15,
			'step' => 1,
		],
	]
	);

}

	// POST SECTION

	Kirki::add_section( 'engineering_manufacturing_section_post', array(
	    'title'          => esc_html__( 'Post Settings', 'engineering-manufacturing' ),
	    'description'    => esc_html__( 'Here you can get different post settings', 'engineering-manufacturing' ),
	    'panel'          => 'engineering_manufacturing_panel_id',
	    'priority'       => 160,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_enable_post_heading',
		'section'     => 'engineering_manufacturing_section_post',
		'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Enable / Disable Post Settings.', 'engineering-manufacturing' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'engineering_manufacturing_blog_admin_enable',
		'label'       => esc_html__( 'Post Author Enable / Disable Button', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_section_post',
		'default'     => '1',
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'engineering-manufacturing' ),
			'off' => esc_html__( 'Disable', 'engineering-manufacturing' ),
		],
		'partial_refresh'    => [
		'engineering_manufacturing_blog_admin_enable' => [
			'selector'        => 'h3.post-title',
			'render_callback' => function() {
				return get_bloginfo( 'name', 'display' );
			},
		],
	],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'engineering_manufacturing_blog_comment_enable',
		'label'       => esc_html__( 'Post Comment Enable / Disable Button', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_section_post',
		'default'     => '1',
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'engineering-manufacturing' ),
			'off' => esc_html__( 'Disable', 'engineering-manufacturing' ),
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'slider',
		'settings'    => 'engineering_manufacturing_post_excerpt_number',
		'label'       => esc_html__( 'Post Content Range', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_section_post',
		'default'     => 15,
		'choices'     => [
			'min'  => 0,
			'max'  => 100,
			'step' => 1,
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'engineering_manufacturing_pagination_setting',
		'label'       => esc_html__( 'Here you can enable or disable your Pagination.', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_section_post',
		'default'     => true,
		'priority'    => 10,
	] );

	// HEADER SECTION

	Kirki::add_section( 'engineering_manufacturing_section_header', array(
	    'title'          => esc_html__( 'Header Settings', 'engineering-manufacturing' ),
	    'description'    => esc_html__( 'Here you can add header information.', 'engineering-manufacturing' ),
	    'panel'          => 'engineering_manufacturing_panel_id',
	    'priority'       => 160,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_enable_timing_heading',
		'section'     => 'engineering_manufacturing_section_header',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Add Timing', 'engineering-manufacturing' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'settings' => 'engineering_manufacturing_header_timing',
		'section'  => 'engineering_manufacturing_section_header',
		'default'  => '',
		'partial_refresh'    => [
		'engineering_manufacturing_header_timing' => [
			'selector'        => '.topheader p',
			'render_callback' => function() {
				return get_bloginfo( 'name', 'display' );
			},
		],
	],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_enable_button_heading',
		'section'     => 'engineering_manufacturing_section_header',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Add Button', 'engineering-manufacturing' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'label'       => esc_html__( 'Text 1', 'engineering-manufacturing' ),
		'settings' => 'engineering_manufacturing_header_link1_text',
		'section'  => 'engineering_manufacturing_section_header',
		'default'  => '',
		'partial_refresh'    => [
		'engineering_manufacturing_header_link1_text' => [
			'selector'        => '.button-links a',
			'render_callback' => function() {
				return get_bloginfo( 'name', 'display' );
			},
		],
	],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'url',
		'label'       => esc_html__( 'Link 1', 'engineering-manufacturing' ),
		'settings' => 'engineering_manufacturing_header_link1_url',
		'section'  => 'engineering_manufacturing_section_header',
		'default'  => '',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'label'       => esc_html__( 'Text 2', 'engineering-manufacturing' ),
		'settings' => 'engineering_manufacturing_header_link2_text',
		'section'  => 'engineering_manufacturing_section_header',
		'default'  => '',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'url',
		'label'       => esc_html__( 'Link 2', 'engineering-manufacturing' ),
		'settings' => 'engineering_manufacturing_header_link2_url',
		'section'  => 'engineering_manufacturing_section_header',
		'default'  => '',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_header_phone_number_heading',
		'section'     => 'engineering_manufacturing_section_header',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Add Phone Number', 'engineering-manufacturing' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'settings' => 'engineering_manufacturing_header_phone_number',
		'section'  => 'engineering_manufacturing_section_header',
		'default'  => '',
		'sanitize_callback' => 'engineering_manufacturing_sanitize_phone_number',
		'partial_refresh'    => [
		'engineering_manufacturing_header_phone_number' => [
			'selector'        => 'span.box-phone',
			'render_callback' => function() {
				return get_bloginfo( 'name', 'display' );
			},
		],
	],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_enable_email_heading',
		'section'     => 'engineering_manufacturing_section_header',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Add Email Address', 'engineering-manufacturing' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'settings' => 'engineering_manufacturing_header_email',
		'section'  => 'engineering_manufacturing_section_header',
		'default'  => '',
		'sanitize_callback' => 'sanitize_email',
		'partial_refresh'    => [
		'engineering_manufacturing_header_email' => [
			'selector'        => '.topheader span',
			'render_callback' => function() {
				return get_bloginfo( 'name', 'display' );
			},
		],
	],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_enable_socail_link',
		'section'     => 'engineering_manufacturing_section_header',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Social Media Link', 'engineering-manufacturing' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'repeater',
		'section'     => 'engineering_manufacturing_section_header',
		'row_label' => [
			'type'  => 'field',
			'value' => esc_html__( 'Social Icon', 'engineering-manufacturing' ),
			'field' => 'link_text',
		],
		'button_label' => esc_html__('Add New Social Icon', 'engineering-manufacturing' ),
		'settings'     => 'engineering_manufacturing_social_links_settings',
		'default'      => '',
		'fields' 	   => [
			'link_text' => [
				'type'        => 'text',
				'label'       => esc_html__( 'Icon', 'engineering-manufacturing' ),
				'description' => esc_html__( 'Add the fontawesome class ex: "fab fa-facebook-f".', 'engineering-manufacturing' ),
				'default'     => '',
			],
			'link_url' => [
				'type'        => 'url',
				'label'       => esc_html__( 'Social Link', 'engineering-manufacturing' ),
				'description' => esc_html__( 'Add the social icon url here.', 'engineering-manufacturing' ),
				'default'     => '',
			],
		],
		'choices' => [
			'limit' => 5
		],
		'partial_refresh'    => [
		'engineering_manufacturing_social_links_settings' => [
			'selector'        => '.social-links a',
			'render_callback' => function() {
				return get_bloginfo( 'name', 'display' );
			},
		],
	],
	] );

	// SLIDER SECTION

	Kirki::add_section( 'engineering_manufacturing_blog_slide_section', array(
        'title'          => esc_html__( 'Slider Settings', 'engineering-manufacturing' ),
        'description'    => esc_html__( 'You have to select post category to show slider.', 'engineering-manufacturing' ),
        'panel'          => 'engineering_manufacturing_panel_id',
        'priority'       => 160,
    ) );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_enable_heading',
		'section'     => 'engineering_manufacturing_blog_slide_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Enable / Disable Slider', 'engineering-manufacturing' ) . '</h3>',
		'priority'    => 10,
	] );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'engineering_manufacturing_blog_box_enable',
		'label'       => esc_html__( 'Section Enable / Disable', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_blog_slide_section',
		'default'     => false,
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'engineering-manufacturing' ),
			'off' => esc_html__( 'Disable', 'engineering-manufacturing' ),
		],
		'partial_refresh'    => [
		'engineering_manufacturing_blog_box_enable' => [
			'selector'        => '.blog_box h3',
			'render_callback' => function() {
				return get_bloginfo( 'name', 'display' );
			},
		],
	],
	] );
	

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'engineering_manufacturing_title_unable_disable',
		'label'       => esc_html__( 'Slide Title Enable / Disable', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_blog_slide_section',
		'default'     => '1',
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'engineering-manufacturing' ),
			'off' => esc_html__( 'Disable', 'engineering-manufacturing' ),
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'engineering_manufacturing_text_unable_disable',
		'label'       => esc_html__( 'Slide Text Enable / Disable', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_blog_slide_section',
		'default'     => '1',
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'engineering-manufacturing' ),
			'off' => esc_html__( 'Disable', 'engineering-manufacturing' ),
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'engineering_manufacturing_button_unable_disable',
		'label'       => esc_html__( 'Slide Button Enable / Disable', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_blog_slide_section',
		'default'     => '0',
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'engineering-manufacturing' ),
			'off' => esc_html__( 'Disable', 'engineering-manufacturing' ),
		],
	] );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_slider_heading',
		'section'     => 'engineering_manufacturing_blog_slide_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Slider', 'engineering-manufacturing' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'label'       => esc_html__( 'Extra Heading', 'engineering-manufacturing' ),
		'settings' => 'engineering_manufacturing_slider_extra_heading',
		'section'  => 'engineering_manufacturing_blog_slide_section',
		'default'  => '',
		'priority' => 10,
	] );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'number',
		'settings'    => 'engineering_manufacturing_blog_slide_number',
		'label'       => esc_html__( 'Number of slides to show', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_blog_slide_section',
		'default'     => 3,
		'choices'     => [
			'min'  => 0,
			'max'  => 5,
			'step' => 1,
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'select',
		'settings'    => 'engineering_manufacturing_blog_slide_category',
		'label'       => esc_html__( 'Select the category to show slider ( Image Dimension 1600 x 600 )', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_blog_slide_section',
		'default'     => '',
		'placeholder' => esc_html__( 'Select an category...', 'engineering-manufacturing' ),
		'priority'    => 10,
		'choices'     => engineering_manufacturing_get_categories_select(),
	] );

	new \Kirki\Field\Select(
	[
		'settings'    => 'engineering_manufacturing_slider_content_alignment',
		'label'       => esc_html__( 'Slider Content Alignment', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_blog_slide_section',
		'default'     => 'LEFT-ALIGN',
		'placeholder' => esc_html__( 'Choose an option', 'engineering-manufacturing' ),
		'choices'     => [
			'LEFT-ALIGN' => esc_html__( 'LEFT-ALIGN', 'engineering-manufacturing' ),
			'CENTER-ALIGN' => esc_html__( 'CENTER-ALIGN', 'engineering-manufacturing' ),
			'RIGHT-ALIGN' => esc_html__( 'RIGHT-ALIGN', 'engineering-manufacturing' ),

		],
	] );

	// OUR SERVICES SECTION

	Kirki::add_section( 'engineering_manufacturing_services_section', array(
	    'title'          => esc_html__( 'Our Services Settings', 'engineering-manufacturing' ),
	    'description'    => esc_html__( 'Here you can add different type of services.', 'engineering-manufacturing' ),
	    'panel'          => 'engineering_manufacturing_panel_id',
	    'priority'       => 160,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_enable_heading',
		'section'     => 'engineering_manufacturing_services_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Enable / Disable Our Services',  'engineering-manufacturing' ) . '</h3>',
		'priority'    => 1,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'engineering_manufacturing_services_section_enable',
		'label'       => esc_html__( 'Section Enable / Disable', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_services_section',
		'default'     => false,
		'priority'    => 2,
		'choices'     => [
			'on'  => esc_html__( 'Enable',  'engineering-manufacturing' ),
			'off' => esc_html__( 'Disable',  'engineering-manufacturing' ),
		],
		'partial_refresh'    => [
		'engineering_manufacturing_services_section_enable' => [
			'selector'        => '.services h3',
			'render_callback' => function() {
				return get_bloginfo( 'name', 'display' );
			},
		],
	],
	] );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_services_text_heading',
		'section'     => 'engineering_manufacturing_services_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Our Services', 'engineering-manufacturing' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'label'       => esc_html__( 'Heading', 'engineering-manufacturing' ),
		'settings' => 'engineering_manufacturing_services_heading',
		'section'  => 'engineering_manufacturing_services_section',
		'default'  => '',
		'priority' => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'select',
		'settings'    => 'engineering_manufacturing_services_category',
		'label'       => esc_html__( 'Select the category to show services ', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_services_section',
		'default'     => '',
		'placeholder' => esc_html__( 'Select an category...', 'engineering-manufacturing' ),
		'priority'    => 10,
		'choices'     => engineering_manufacturing_get_categories_select(),
	] );

	// FOOTER SECTION

	Kirki::add_section( 'engineering_manufacturing_footer_section', array(
        'title'          => esc_html__( 'Footer Settings', 'engineering-manufacturing' ),
        'description'    => esc_html__( 'Here you can change copyright text', 'engineering-manufacturing' ),
        'panel'          => 'engineering_manufacturing_panel_id',
        'priority'       => 160,
    ) );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_footer_text_heading',
		'section'     => 'engineering_manufacturing_footer_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Footer Copyright Text', 'engineering-manufacturing' ) . '</h3>',
		'priority'    => 10,
	] );

    Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'settings' => 'engineering_manufacturing_footer_text',
		'section'  => 'engineering_manufacturing_footer_section',
		'default'  => '',
		'priority' => 10,
		'partial_refresh'    => [
		'engineering_manufacturing_footer_text' => [
			'selector'        => '.copy-text p',
			'render_callback' => function() {
				return get_bloginfo( 'name', 'display' );
			},
		],
	],
	] );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'engineering_manufacturing_footer_enable_heading',
		'section'     => 'engineering_manufacturing_footer_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Enable / Disable Footer Link', 'engineering-manufacturing' ) . '</h3>',
		'priority'    => 10,
	] );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'engineering_manufacturing_copyright_enable',
		'label'       => esc_html__( 'Section Enable / Disable', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_footer_section',
		'default'     => '1',
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'engineering-manufacturing' ),
			'off' => esc_html__( 'Disable', 'engineering-manufacturing' ),
		],
	] );

	Kirki::add_field( 'theme_config_id', [
	'type'        => 'custom',
	'settings'    => 'engineering_manufacturing_footer_text_heading_2',
	'section'     => 'engineering_manufacturing_footer_section',
	'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Footer Copyright Alignment', 'engineering-manufacturing' ) . '</h3>',
	'priority'    => 10,
	] );

	new \Kirki\Field\Select(
	[
		'settings'    => 'engineering_manufacturing_copyright_text_alignment',
		'label'       => esc_html__( 'Copyright text Alignment', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_footer_section',
		'default'     => 'LEFT-ALIGN',
		'placeholder' => esc_html__( 'Choose an option', 'engineering-manufacturing' ),
		'choices'     => [
			'LEFT-ALIGN' => esc_html__( 'LEFT-ALIGN', 'engineering-manufacturing' ),
			'CENTER-ALIGN' => esc_html__( 'CENTER-ALIGN', 'engineering-manufacturing' ),
			'RIGHT-ALIGN' => esc_html__( 'RIGHT-ALIGN', 'engineering-manufacturing' ),

		],
	] );

	Kirki::add_field( 'theme_config_id', [
	'type'        => 'custom',
	'settings'    => 'engineering_manufacturing_footer_text_heading_1',
	'section'     => 'engineering_manufacturing_footer_section',
	'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Footer Copyright Background Color', 'engineering-manufacturing' ) . '</h3>',
	'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'color',
		'settings'    => 'engineering_manufacturing_copyright_bg',
		'label'       => __( 'Choose Your Copyright Background Color', 'engineering-manufacturing' ),
		'section'     => 'engineering_manufacturing_footer_section',
		'default'     => '',
	] );
}
