<section data-bs-version="5.1" class="features07 tradem5" group="Features" mbr-class="{
    'mbr-fullscreen': fullScreen,
    'mbr-parallax-background': bg.parallax}">
    <mbr-parameters>
        <header>Size</header>
        <input type="checkbox" title="Full Screen" name="fullScreen">
        <input type="checkbox" title="Full Width" name="fullWidth">
        <input type="range" inline="" title="Top" name="paddingTop" min="0" max="12" step="1" value="5" condition="fullScreen == false">
        <input type="range" inline="" title="Bottom" name="paddingBottom" min="0" max="12" step="1" value="7" condition="fullScreen == false">
        <header>Show/Hide</header>
        <input type="checkbox" title="Title" name="showTitle" checked="">
        <input type="color" title="Secondary Color" value="#ffffff" name="title" condition="showTitle">
        <header>Cards</header>
        <input type="checkbox" title="Card Icon" name="showIcon" checked="">
        <input type="color" title="Icon Color" value="#FFFFFF" name="icon" condition="showIcon">
        <input type="color" title="Icon BG" value="#735751" name="iconBg" condition="showIcon">
        <input type="checkbox" title="Card Title" name="showCardTitle" checked="">
        <input type="checkbox" title="Card Tags" name="showTags" checked="">
        <input type="color" title="Tags Border" value="#ffffff" name="tagsBorder" condition="showTags">
        <input type="color" title="Card Border" value="#ffffff" name="border" selected="">
        <input type="color" title="Card BG" value="#000000" name="card" selected="">
        <input type="checkbox" title="Card Gradient" name="showGradient" checked="">
        <input type="color" title="Gradient Color 1" value="#AEF800" name="gradient_1" condition="showGradient" selected="">
        <input type="color" title="Gradient Color 2" value="#323046" name="gradient_2" condition="showGradient" selected="">
        <input type="color" title="Gradient Color 3" value="#7541E5" name="gradient_3" condition="showGradient" selected="">
        <header>Background</header>
        <fieldset type="background" name="bg" parallax="">
            <input type="image" title="Image" value="../_images/background1.jpg">
            <input type="color" title="Color" value="#000000" selected="">
        </fieldset>
        <header condition="bg.type === 'video'">Fallback Image</header>
        <input type="image" title="Fallback Image" value="../_images/background1.jpg" name="fallBackImage" condition="bg.type === 'video'">
        <input type="checkbox" title="Overlay" name="overlay" condition="bg.type !== 'color'" checked="">
        <input type="color" title="Overlay Color" name="overlayColor" value="#080813" condition="overlay &amp;&amp; bg.type !== 'color'">
        <input type="range" inline="" title="Opacity" name="overlayOpacity" min="0" max="1" step="0.1" value="0.5" condition="overlay &amp;&amp; bg.type !== 'color'">
    </mbr-parameters>

    <div class="mbr-fallback-image disabled" mbr-if="bg.type == 'video'"></div>
    <div class="mbr-overlay" mbr-if="overlay &amp;&amp; bg.type !== 'color'" opacity="{{overlayOpacity}}" bg-color="{{overlayColor}}"></div>

    <div mbr-class="{'container': !fullWidth, 'container-fluid': fullWidth}">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style" data-app-selector=".mbr-section-title" mbr-theme-style="display-2" mbr-if="showTitle">
                        <b sectiontitle="">Let’s Connect!</b>
                    </h2>
                </div>
            </div>
        </div>
        <div class="row items-wrap">
            <div class="item features-without-image col-12 col-lg-4">
                <div class="item-wrapper card_1">
                    <div class="card-box">
                        <div class="icon-wrapper" mbr-if="showIcon">
                            <div class="icon-wrap">
                                <span mbr-icon="" class="mbr-iconfont mobi-mbri-success mobi-mbri"></span>
                            </div>
                        </div>
                        <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-5" data-app-selector=".item-title, .tags-wrapper, .icon-wrapper" mbr-if="showCardTitle">GitHub Profile</h4>
                        <div class="tags-wrapper" mbr-if="showTags">
                            <ul class="list mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".list, .item-wrap" data-multiline="" mbr-article="">
                                <li class="tag-wrapper">Open Source</li>
                                <li class="tag-wrapper">Projects Galore</li>
                                <li class="tag-wrapper">Code Reviews</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-4">
                <div class="item-wrapper card_2">
                    <div class="card-box">
                        <div class="icon-wrapper" mbr-if="showIcon">
                            <div class="icon-wrap">
                                <span mbr-icon="" class="mbr-iconfont mobi-mbri-success mobi-mbri"></span>
                            </div>
                        </div>
                        <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-5" data-app-selector=".item-title, .tags-wrapper, .icon-wrapper" mbr-if="showCardTitle">LinkedIn Network</h4>
                        <div class="tags-wrapper" mbr-if="showTags">
                            <ul class="list mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".list, .item-wrap" data-multiline="" mbr-article="">
                                <li class="tag-wrapper">Professional Connections</li>
                                <li class="tag-wrapper">Job Opportunities</li>
                                <li class="tag-wrapper">Endorsements Welcome</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-4">
                <div class="item-wrapper card_3">
                    <div class="card-box">
                        <div class="icon-wrapper" mbr-if="showIcon">
                            <div class="icon-wrap">
                                <span mbr-icon="" class="mbr-iconfont mobi-mbri-success mobi-mbri"></span>
                            </div>
                        </div>
                        <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-5" data-app-selector=".item-title, .tags-wrapper, .icon-wrapper" mbr-if="showCardTitle">Contact Me</h4>
                        <div class="tags-wrapper" mbr-if="showTags">
                            <ul class="list mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".list, .item-wrap" data-multiline="" mbr-article="">
                                <li class="tag-wrapper">Email Me</li>
                                <li class="tag-wrapper">DM on Twitter</li>
                                <li class="tag-wrapper">Let’s Chat!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>