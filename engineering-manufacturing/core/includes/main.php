<?php

add_action( 'admin_menu', 'engineering_manufacturing_getting_started' );
function engineering_manufacturing_getting_started() {
	add_theme_page( esc_html__('Get Started', 'engineering-manufacturing'), esc_html__('Get Started', 'engineering-manufacturing'), 'edit_theme_options', 'engineering-manufacturing-guide-page', 'engineering_manufacturing_test_guide');
}

function engineering_manufacturing_admin_enqueue_scripts() {
	wp_enqueue_style( 'engineering-manufacturing-admin-style', esc_url( get_template_directory_uri() ).'/css/main.css' );
}
add_action( 'admin_enqueue_scripts', 'engineering_manufacturing_admin_enqueue_scripts' );

if ( ! defined( 'ENGINEERING_MANUFACTURING_DOCS_FREE' ) ) {
define('ENGINEERING_MANUFACTURING_DOCS_FREE',__('https://www.misbahwp.com/docs/engineering-manufacturing-free-docs/','engineering-manufacturing'));
}
if ( ! defined( 'ENGINEERING_MANUFACTURING_DOCS_PRO' ) ) {
define('ENGINEERING_MANUFACTURING_DOCS_PRO',__('https://www.misbahwp.com/docs/engineering-manufacturing-pro-docs','engineering-manufacturing'));
}
if ( ! defined( 'ENGINEERING_MANUFACTURING_BUY_NOW' ) ) {
define('ENGINEERING_MANUFACTURING_BUY_NOW',__('https://www.misbahwp.com/themes/manufacturing-wordpress-theme/','engineering-manufacturing'));
}
if ( ! defined( 'ENGINEERING_MANUFACTURING_SUPPORT_FREE' ) ) {
define('ENGINEERING_MANUFACTURING_SUPPORT_FREE',__('https://wordpress.org/support/theme/engineering-manufacturing','engineering-manufacturing'));
}
if ( ! defined( 'ENGINEERING_MANUFACTURING_REVIEW_FREE' ) ) {
define('ENGINEERING_MANUFACTURING_REVIEW_FREE',__('https://wordpress.org/support/theme/engineering-manufacturing/reviews/#new-post','engineering-manufacturing'));
}
if ( ! defined( 'ENGINEERING_MANUFACTURING_DEMO_PRO' ) ) {
define('ENGINEERING_MANUFACTURING_DEMO_PRO',__('https://www.misbahwp.com/demo/engineering-manufacturing/','engineering-manufacturing'));
}
if( ! defined( 'ENGINEERING_MANUFACTURING_THEME_BUNDLE' ) ) {
define('ENGINEERING_MANUFACTURING_THEME_BUNDLE',__('https://www.misbahwp.com/themes/wordpress-bundle/','engineering-manufacturing'));
}


function engineering_manufacturing_test_guide() { ?>
	<?php $engineering_manufacturing_theme = wp_get_theme(); ?>

	<div class="wrap" id="main-page">
		<div id="lefty">
			<div id="admin_links">
				<a href="<?php echo esc_url( ENGINEERING_MANUFACTURING_DOCS_FREE ); ?>" target="_blank" class="blue-button-1"><?php esc_html_e( 'Documentation', 'engineering-manufacturing' ) ?></a>
				<a href="<?php echo esc_url( admin_url('customize.php') ); ?>" id="customizer" target="_blank"><?php esc_html_e( 'Customize', 'engineering-manufacturing' ); ?> </a>
				<a class="blue-button-1" href="<?php echo esc_url( ENGINEERING_MANUFACTURING_SUPPORT_FREE ); ?>" target="_blank" class="btn3"><?php esc_html_e( 'Support', 'engineering-manufacturing' ) ?></a>
				<a class="blue-button-2" href="<?php echo esc_url( ENGINEERING_MANUFACTURING_REVIEW_FREE ); ?>" target="_blank" class="btn4"><?php esc_html_e( 'Review', 'engineering-manufacturing' ) ?></a>
			</div>
			<div id="description">
				<h3><?php esc_html_e('Welcome! Thank you for choosing ','engineering-manufacturing'); ?><?php echo esc_html( $engineering_manufacturing_theme ); ?>  <span><?php esc_html_e('Version: ', 'engineering-manufacturing'); ?><?php echo esc_html($engineering_manufacturing_theme['Version']);?></span></h3>
				<img class="img_responsive" style="width:100%;" src="<?php echo esc_url( get_template_directory_uri() ); ?>/screenshot.png">
				<div id="description-inside">
					<?php
						$engineering_manufacturing_theme = wp_get_theme();
						echo wp_kses_post( apply_filters( 'misbah_theme_description', esc_html( $engineering_manufacturing_theme->get( 'Description' ) ) ) );
					?>
				</div>
			</div>
		</div>

		<div id="righty">
			<div class="postbox donate">
				<h3 class="hndle"><?php esc_html_e( 'Upgrade to Premium', 'engineering-manufacturing' ); ?></h3>
				<div class="inside">
					<p><?php esc_html_e('Discover upgraded pro features with premium version click to upgrade.','engineering-manufacturing'); ?></p>
					<div id="admin_pro_links">
						<a class="blue-button-2" href="<?php echo esc_url( ENGINEERING_MANUFACTURING_BUY_NOW ); ?>" target="_blank"><?php esc_html_e( 'Go Pro', 'engineering-manufacturing' ); ?></a>
						<a class="blue-button-1" href="<?php echo esc_url( ENGINEERING_MANUFACTURING_DEMO_PRO ); ?>" target="_blank"><?php esc_html_e( 'Live Demo', 'engineering-manufacturing' ) ?></a>
						<a class="blue-button-2" href="<?php echo esc_url( ENGINEERING_MANUFACTURING_DOCS_PRO ); ?>" target="_blank"><?php esc_html_e( 'Pro Docs', 'engineering-manufacturing' ) ?></a>
					</div>
				</div>

				<h3 class="hndle bundle"><?php esc_html_e( 'Go For Theme Bundle', 'engineering-manufacturing' ); ?></h3>
				<div class="inside theme-bundle">
					<p class="offer"><?php esc_html_e('Get 50+ Perfect WordPress Theme In A Single Package at just $79."','engineering-manufacturing'); ?></p>
					<p class="coupon"><?php esc_html_e('Exclusive Offer !! Get Our Theme Pack of 60+ WordPress Themes At 10% Off','engineering-manufacturing'); ?><span class="coupon-code"><?php esc_html_e('"Themespack10"','engineering-manufacturing'); ?></span></p>
					<div id="admin_pro_linkss">
						<a class="blue-button-1" href="<?php echo esc_url( ENGINEERING_MANUFACTURING_THEME_BUNDLE ); ?>" target="_blank"><?php esc_html_e( 'Theme Bundle', 'engineering-manufacturing' ) ?></a>
					</div>
				</div>
				<div class="d-table">
			    <ul class="d-column">
			      <li class="feature"><?php esc_html_e('Features','engineering-manufacturing'); ?></li>
			      <li class="free"><?php esc_html_e('Pro','engineering-manufacturing'); ?></li>
			      <li class="plus"><?php esc_html_e('Free','engineering-manufacturing'); ?></li>
			    </ul>
			    <ul class="d-row">
			      <li class="points"><?php esc_html_e('24hrs Priority Support','engineering-manufacturing'); ?></li>
			      <li class="right"><span class="dashicons dashicons-yes"></span></li>
			      <li class="wrong"><span class="dashicons dashicons-yes"></span></li>
			    </ul>
			    <ul class="d-row">
			      <li class="points"><?php esc_html_e('Kirki Framework','engineering-manufacturing'); ?></li>
			      <li class="right"><span class="dashicons dashicons-yes"></span></li>
			      <li class="wrong"><span class="dashicons dashicons-yes"></span></li>
			    </ul>
			    <ul class="d-row">
			      <li class="points"><?php esc_html_e('Advance Posttype','engineering-manufacturing'); ?></li>
			      <li class="right"><span class="dashicons dashicons-yes"></span></li>
			      <li class="wrong"><span class="dashicons dashicons-no"></span></li>
			    </ul>
			    <ul class="d-row">
			      <li class="points"><?php esc_html_e('One Click Demo Import','engineering-manufacturing'); ?></li>
			      <li class="right"><span class="dashicons dashicons-yes"></span></li>
			      <li class="wrong"><span class="dashicons dashicons-no"></span></li>
			    </ul>
			    <ul class="d-row">
			      <li class="points"><?php esc_html_e('Section Reordering','engineering-manufacturing'); ?></li>
			      <li class="right"><span class="dashicons dashicons-yes"></span></li>
			      <li class="wrong"><span class="dashicons dashicons-no"></span></li>
			    </ul>
			    <ul class="d-row">
			      <li class="points"><?php esc_html_e('Enable / Disable Option','engineering-manufacturing'); ?></li>
			      <li class="right"><span class="dashicons dashicons-yes"></span></li>
			      <li class="wrong"><span class="dashicons dashicons-yes"></span></li>
			    </ul>
			    <ul class="d-row">
			      <li class="points"><?php esc_html_e('Multiple Sections','engineering-manufacturing'); ?></li>
			      <li class="right"><span class="dashicons dashicons-yes"></span></li>
			      <li class="wrong"><span class="dashicons dashicons-no"></span></li>
			    </ul>
			    <ul class="d-row">
			      <li class="points"><?php esc_html_e('Advance Color Pallete','engineering-manufacturing'); ?></li>
			      <li class="right"><span class="dashicons dashicons-yes"></span></li>
			      <li class="wrong"><span class="dashicons dashicons-no"></span></li>
			    </ul>
			    <ul class="d-row">
			      <li class="points"><?php esc_html_e('Advance Widgets','engineering-manufacturing'); ?></li>
			      <li class="right"><span class="dashicons dashicons-yes"></span></li>
			      <li class="wrong"><span class="dashicons dashicons-yes"></span></li>
			    </ul>
			    <ul class="d-row">
			      <li class="points"><?php esc_html_e('Page Templates','engineering-manufacturing'); ?></li>
			      <li class="right"><span class="dashicons dashicons-yes"></span></li>
			      <li class="wrong"><span class="dashicons dashicons-no"></span></li>
			    </ul>
			    <ul class="d-row">
			      <li class="points"><?php esc_html_e('Advance Typography','engineering-manufacturing'); ?></li>
			      <li class="right"><span class="dashicons dashicons-yes"></span></li>
			      <li class="wrong"><span class="dashicons dashicons-no"></span></li>
			    </ul>
			    <ul class="d-row">
			      <li class="points"><?php esc_html_e('Section Background Image / Color ','engineering-manufacturing'); ?></li>
			      <li class="right"><span class="dashicons dashicons-yes"></span></li>
			      <li class="wrong"><span class="dashicons dashicons-no"></span></li>
			    </ul>
	  		</div>
			</div>
		</div>
	</div>

<?php } ?>
