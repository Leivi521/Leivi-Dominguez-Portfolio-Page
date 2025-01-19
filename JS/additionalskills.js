<section data-bs-version="5.1" class="slider01 mbr-embla tradem5" group="Sliders &amp; Galleries" plugins="embla" mbr-class="{
    'mbr-fullscreen': fullScreen,
    'mbr-parallax-background': bg.parallax}">
    <mbr-parameters>
        <header>Size</header>
        <input type="checkbox" title="Full Width" name="fullWidth">
        <input type="range" inline="" title="Top" name="paddingTop" min="0" max="10" step="1" value="5">
        <input type="range" inline="" title="Bottom" name="paddingBottom" min="0" max="10" step="1" value="0">
        <header>Show/Hide</header>
        <input type="checkbox" name="showTitle" title="Title" checked="">
        <header>Carousel</header>
        <input type="checkbox" title="Autoplay" name="autoplay" checked="">
        <input type="range" title="Interval" name="interval" min="1" max="10" value="4" step="1" condition="autoplay">
        <input type="checkbox" title="Loop" name="loop" checked="">
        <input type="checkbox" title="Draggable" name="draggable" checked="">
        <input type="checkbox" name="arrows" title="Arrows" checked="">
        <input type="checkbox" name="arrowsMobile" title="Mobile Arrows" condition="arrows" checked="">
        <input type="color" name="arrowsColor" title="Arrows Color" value="#bcfe1e" condition="arrows">
        <header>Cards</header>
        <input type="range" name="gap" title="Gap" min="0" max="20" step="5" value="20">
        <input type="color" name="card" title="Card BG" value="#bcfe1e">
        <header>Background</header>
        <fieldset type="background" name="bg" parallax="" required="">
            <input type="image" title="Image" value="../_images/background3.jpg">
            <input type="color" title="Color" value="#080813" selected="">
        </fieldset>
        <input type="checkbox" title="Overlay" name="overlay" condition="bg.type !== 'color'" checked="">
        <input type="color" title="Overlay Color" name="overlayColor" value="#ffffff" condition="overlay &amp;&amp; bg.type == 'image'">
        <input type="range" inline="" title="Opacity" name="overlayOpacity" min="0" max="1" step="0.1" value="0.1" condition="overlay &amp;&amp; bg.type == 'image'">
    </mbr-parameters>
    <div class="mbr-overlay" mbr-if="overlay &amp;&amp; bg.type !== 'color'"></div>

    <div mbr-class="{'container': !fullWidth, 'container-fluid': fullWidth}">
        <div class="row">
            <div class="col-12">
                <h2 class="mbr-section-title mbr-fonts-style" mbr-theme-style="display-5" mbr-if="showTitle" data-app-selector=".mbr-section-title">
                    <b>Additional Skills</b></h2>
            </div>
            <div class="col-12">
                <div class="embla" data-loop="{{loop}}" data-auto-play="{{autoplay}}" data-auto-play-interval="{{interval}}" data-draggable="{{draggable}}" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps">
                    <div class="embla__viewport">
                        <div class="embla__container">
                            <div class="embla__slide slider-image item" mbr-style="{'margin-left': gap + 'px', 'margin-right': gap + 'px'}">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="../_images/trade/1.png" alt="Mobirise Website Builder">
                                        </div>
                                    </div>
                                </div>
                            </div><div class="embla__slide slider-image item" mbr-style="{'margin-left': gap + 'px', 'margin-right': gap + 'px'}">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="https://r.mobirisesite.com/1110484/assets/images/gc3af09ab0d9224f63f7d672f341e-h_m6348yes.jpg" alt="Mobirise Website Builder" data-slide-to="1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" mbr-style="{'margin-left': gap + 'px', 'margin-right': gap + 'px'}">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="../_images/trade/2.png" alt="Mobirise Website Builder" data-slide-to="2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" mbr-style="{'margin-left': gap + 'px', 'margin-right': gap + 'px'}">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="../_images/trade/3.png" alt="Mobirise Website Builder" data-slide-to="3">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" mbr-style="{'margin-left': gap + 'px', 'margin-right': gap + 'px'}">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="../_images/trade/4.png" alt="Mobirise Website Builder" data-slide-to="4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" mbr-style="{'margin-left': gap + 'px', 'margin-right': gap + 'px'}">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="../_images/trade/5.png" alt="Mobirise Website Builder" data-slide-to="5">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" mbr-style="{'margin-left': gap + 'px', 'margin-right': gap + 'px'}">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="../_images/trade/6.png" alt="Mobirise Website Builder" data-slide-to="6">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" mbr-style="{'margin-left': gap + 'px', 'margin-right': gap + 'px'}">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="../_images/trade/3.png" alt="Mobirise Website Builder" data-slide-to="7">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" mbr-style="{'margin-left': gap + 'px', 'margin-right': gap + 'px'}">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="../_images/trade/4.png" alt="Mobirise Website Builder" data-slide-to="8">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" mbr-style="{'margin-left': gap + 'px', 'margin-right': gap + 'px'}">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="../_images/trade/5.png" alt="Mobirise Website Builder" data-slide-to="9">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" mbr-style="{'margin-left': gap + 'px', 'margin-right': gap + 'px'}">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="../_images/trade/2.png" alt="Mobirise Website Builder" data-slide-to="10">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide slider-image item" mbr-style="{'margin-left': gap + 'px', 'margin-right': gap + 'px'}">
                                <div class="slide-content">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <img src="../_images/trade/6.png" alt="Mobirise Website Builder" data-slide-to="11">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="embla__button embla__button--prev">
                        <span class="mbr-iconfont mobi-mbri-left mobi-mbri" aria-hidden="true"></span>
                        <span class="sr-only visually-hidden visually-hidden visually-hidden">Previous</span>
                    </button>
                    <button class="embla__button embla__button--next">
                        <span class="mbr-iconfont mobi-mbri-right mobi-mbri" aria-hidden="true"></span>
                        <span class="sr-only visually-hidden visually-hidden visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>