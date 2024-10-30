<?php if ( get_theme_mod('engineering_manufacturing_blog_box_enable',false) ) : ?>

<?php $engineering_manufacturing_args = array(
  'post_type' => 'post',
  'post_status' => 'publish',
  'category_name' =>  get_theme_mod('engineering_manufacturing_blog_slide_category'),
  'posts_per_page' => get_theme_mod('engineering_manufacturing_blog_slide_number'),
); ?>

<div class="slider">
  <div class="owl-carousel">
    <?php $engineering_manufacturing_arr_posts = new WP_Query( $engineering_manufacturing_args );
    if ( $engineering_manufacturing_arr_posts->have_posts() ) :
      while ( $engineering_manufacturing_arr_posts->have_posts() ) :
        $engineering_manufacturing_arr_posts->the_post();
        ?>
        <div class="blog_inner_box">
           <?php
            if ( has_post_thumbnail() ) :
              the_post_thumbnail();
            else:
              ?>
              <div class="slider-alternate">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/banner.png'; ?>">
              </div>
              <?php
            endif;
          ?>
          <div class="blog_box">
            <?php if ( get_theme_mod('engineering_manufacturing_slider_extra_heading') ) : ?>
              <h6><span class="mr-2"><?php esc_html_e('TRENDING','engineering-manufacturing'); ?></span><?php echo esc_html(get_theme_mod('engineering_manufacturing_slider_extra_heading')); ?></h6>
            <?php endif; ?>
            <?php if ( get_theme_mod('engineering_manufacturing_title_unable_disable') ) : ?>
              <h3 class="my-3"><?php the_title(); ?></a></h3>
            <?php endif; ?>
            <?php if ( get_theme_mod('engineering_manufacturing_text_unable_disable') ) : ?>
              <p class="mt-2"><?php echo wp_trim_words( get_the_content(), 20 ); ?></p>
            <?php endif; ?>
            <?php if ( get_theme_mod('engineering_manufacturing_button_unable_disable') ) : ?>
              <p class="slider-button mt-4">
                <a href="<?php echo esc_url(get_permalink($post->ID)); ?>"><?php esc_html_e('Read More','engineering-manufacturing'); ?></a>
              </p>
            <?php endif; ?>
          </div>
        </div>
      <?php
    endwhile;
    wp_reset_postdata();
    endif; ?>
  </div>
</div>

<?php endif; ?>
