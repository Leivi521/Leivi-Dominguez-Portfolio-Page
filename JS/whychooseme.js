<section data-bs-version="5.1" class="features09 tradem5" group="Features" mbr-class="{
    'mbr-fullscreen': fullScreen,
    'mbr-parallax-background': bg.parallax}">
    <mbr-parameters>
        <header>Size</header>
        <input type="checkbox" title="Full Screen" name="fullScreen">
        <input type="checkbox" title="Full Width" name="fullWidth">
        <input type="range" inline title="Top" name="paddingTop" min="0" max="12" step="1" value="5" condition="fullScreen == false">
        <input type="range" inline title="Bottom" name="paddingBottom" min="0" max="12" step="1" value="1" condition="fullScreen == false">
        <header>Show/Hide</header>
        <input type="checkbox" title="Title" name="showTitle" checked>
        <input type="color" title="Secondary Color" value="#000000" name="title" condition="showTitle">
        <input type="color" title="Border" value="#fe1e52" name="border" selected>
        <input type="color" title="Container BG" value="#292739" name="container" selected>
        <input type="checkbox" title="Container Transparent" name="showTransparent">
        <header>Cards</header>
        <input type="checkbox" title="Card Title" name="showCardTitle" checked>
        <input type="color" title="Title BG" value="#f50039" name="titleBg" condition="showCardTitle">
        <input type="checkbox" title="Card Text" name="showCardText" checked>
        <input type="color" title="Card Border Right" value="#735751" name="borderRight" selected>
        <header>Background</header> 
        <fieldset type="background" name="bg" parallax>
            <input type="image" title="Image" value="../_images/background2.jpg">
            <input type="color" title="Color" value="#000000" selected>
        </fieldset>
        <header condition="bg.type === 'video'">Fallback Image</header>
        <input type="image" title="Fallback Image" value="../_images/background2.jpg" name="fallBackImage" condition="bg.type === 'video'">
        <input type="checkbox" title="Overlay" name="overlay" condition="bg.type !== 'color'" checked>
        <input type="color" title="Overlay Color" name="overlayColor" value="#080813" condition="overlay && bg.type !== 'color'">
        <input type="range" inline title="Opacity" name="overlayOpacity" min="0" max="1" step="0.1" value="0.7" condition="overlay && bg.type !== 'color'">
    </mbr-parameters>

    <div class="mbr-fallback-image disabled" mbr-if="bg.type == 'video'"></div>
    <div class="mbr-overlay" mbr-if="overlay && bg.type !== 'color'" opacity="{{overlayOpacity}}" bg-color="{{overlayColor}}"></div>

    <div mbr-class="{'container': !fullWidth, 'container-fluid': fullWidth}">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style" data-app-selector=".mbr-section-title" mbr-theme-style="display-2" mbr-if="showTitle">Why Choose Me?</h2>
                    <div class="row items-wrap">
                        <div class="item features-without-image col-12 col-lg-3">
                            <div class="item-wrapper card-mini">
                                <div class="card-box">
                                    <div class="title-wrap">
                                        <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".item-title, .title-wrap" mbr-if="showCardTitle">Passionate Developer</h4>
                                    </div>
                                    <p class="item-text mbr-fonts-style" mbr-if="showCardText" mbr-theme-style="display-4" data-app-selector=".item-text">I live and breathe code, and I love it!</p>
                                </div>
                            </div>
                        </div>
                        <div class="item features-without-image col-12 col-lg-3">
                            <div class="item-wrapper card-mini">
                                <div class="card-box">
                                    <div class="title-wrap">
                                        <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".item-title, .title-wrap" mbr-if="showCardTitle">Creative Solutions</h4>
                                    </div>
                                    <p class="item-text mbr-fonts-style" mbr-if="showCardText" mbr-theme-style="display-4" data-app-selector=".item-text">I think outside the box, or maybe I lost it!</p>
                                </div>
                            </div>
                        </div>
                        <div class="item features-without-image col-12 col-lg-3">
                            <div class="item-wrapper card-mini">
                                <div class="card-box">
                                    <div class="title-wrap">
                                        <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".item-title, .title-wrap" mbr-if="showCardTitle">Quick Learner</h4>
                                    </div>
                                    <p class="item-text mbr-fonts-style" mbr-if="showCardText" mbr-theme-style="display-4" data-app-selector=".item-text">I absorb knowledge like a sponge on caffeine!</p> 
                                </div>
                            </div>
                        </div>
                        <div class="item features-without-image col-12 col-lg-3">
                            <div class="item-wrapper card-mini">
                                <div class="card-box">
                                    <div class="title-wrap">
                                        <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".item-title, .title-wrap" mbr-if="showCardTitle">Team Player</h4>
                                    </div>
                                    <p class="item-text mbr-fonts-style" mbr-if="showCardText" mbr-theme-style="display-4" data-app-selector=".item-text">Collaboration is my jam, let’s rock this together!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>