<footer>
  <div class="container">
    <?php
      if ( is_active_sidebar('engineering-manufacturing-footer-sidebar')) {
        echo '<div class="row sidebar-area footer-area">';
          dynamic_sidebar('engineering-manufacturing-footer-sidebar');
        echo '</div>';
      }
    ?>
    </div>
    <div class="copyright">
      <div class="container">
        <div class="row">
      <div class="col-md-12">
        <div class="copy-text">
          <p class="mb-0 py-3">
          <?php
            if (!get_theme_mod('engineering_manufacturing_footer_text') ) { ?>
              <a href="<?php echo esc_url('https://www.misbahwp.com/themes/free-engineering-wordpress-theme/'); ?>" target="_blank">
              <?php esc_html_e('Engineering Manufacturing WordPress Theme ','engineering-manufacturing'); ?></a>
            <?php } else {
              echo esc_html(get_theme_mod('engineering_manufacturing_footer_text'));
            }
          ?>
          <?php if ( get_theme_mod('engineering_manufacturing_copyright_enable', true) == true ) : ?>
            <?php
            /* translators: %s: Misbah WP */
            printf( esc_html__( 'by %s', 'engineering-manufacturing' ), 'Misbah WP' ); ?>
            <a href="<?php echo esc_url('https://wordpress.org'); ?>" rel="generator"><?php  /* translators: %s: WordPress */  printf( esc_html__( ' | Proudly powered by %s', 'engineering-manufacturing' ), 'WordPress' ); ?></a>
          <?php endif; ?>
        </p>
        </div>
      </div>
    </div>
      </div>
    </div>
    <?php if ( get_theme_mod('engineering_manufacturing_scroll_enable_setting', true) == true ) : ?>
      <div class="scroll-up">
          <a href="#tobottom"><i class="fa fa-arrow-up"></i></a>
      </div>
    <?php endif; ?>
</footer>

<?php wp_footer(); ?>

</body>
</html>
