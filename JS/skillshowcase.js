<section data-bs-version="5.1" class="features06 tradem5" group="Features" mbr-class="{
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
        <input type="checkbox" title="Text" name="showText" checked="">
        <input type="color" title="Secondary Color" value="#000000" name="text" condition="showText">
        <header>Cards</header>
        <input type="checkbox" title="Card Number" name="showNumber" checked="">
        <input type="color" title="Number BG" value="#fe1e52" name="numberBg" condition="showNumber" selected="">
        <input type="checkbox" title="Card Title" name="showCardTitle" checked="">
        <input type="checkbox" title="Card Tags" name="showTags" checked="">
        <input type="color" title="Tags BG" value="#8C1C13" name="tagsBg" condition="showTags">
        <input type="checkbox" title="Card Icon" name="showIcon" checked="">
        <input type="color" title="Icon Color" value="#FFFFFF" name="icon" condition="showIcon">
        <input type="color" title="Icon BG" value="#323046" name="iconBg" condition="showIcon">
        <input type="color" title="Card Border" value="#735751" name="border" selected="">
        <input type="color" title="Card BG" value="#292739" name="card" selected="">
        <input type="checkbox" title="Card Transparent" name="showTransparent">
        <header>Background</header>
        <fieldset type="background" name="bg" parallax="">
            <input type="image" title="Image" value="../_images/background1.jpg" parallax="">
            <input type="color" title="Color" value="#000000" selected="">
        </fieldset>
        <header condition="bg.type === 'video'">Fallback Image</header>
        <input type="image" title="Fallback Image" value="../_images/background4.jpg" name="fallBackImage" condition="bg.type === 'video'">
        <input type="checkbox" title="Overlay" name="overlay" condition="bg.type !== 'color'" checked="">
        <input type="color" title="Overlay Color" name="overlayColor" value="#E7D7C1" condition="overlay &amp;&amp; bg.type !== 'color'">
        <input type="range" inline="" title="Opacity" name="overlayOpacity" min="0" max="1" step="0.1" value="0.5" condition="overlay &amp;&amp; bg.type !== 'color'">
    </mbr-parameters>

    <div class="mbr-fallback-image disabled" mbr-if="bg.type == 'video'"></div>
    <div class="mbr-overlay" mbr-if="overlay &amp;&amp; bg.type !== 'color'" opacity="{{overlayOpacity}}" bg-color="{{overlayColor}}"></div>

    <div mbr-class="{'container': !fullWidth, 'container-fluid': fullWidth}">
        <div class="row">
            <div class="col-12">
                <div class="title-wrapper" mbr-if="showTitle || showText">
                    <h2 class="mbr-section-title mbr-fonts-style" data-app-selector=".mbr-section-title" mbr-theme-style="display-2" mbr-if="showTitle">Skills Showcase</h2>
                    <p class="mbr-text mbr-fonts-style" mbr-theme-style="display-7" mbr-if="showText" data-app-selector=".mbr-text">Here’s what I bring to the table:</p>
                </div>
            </div>
        </div>
        <div class="row items-wrap">
            <div class="item features-without-image col-12 col-lg-4">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="number-wrapper" mbr-if="showNumber">
                            <p class="item-number mbr-fonts-style" mbr-theme-style="display-7" data-app-selector=".item-number, .number-wrapper">1</p>
                        </div>
                        <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-7" data-app-selector=".item-title, .tags-wrapper, .icon-wrapper" mbr-if="showCardTitle">React Mastery</h4>
                        <div class="tags-wrapper" mbr-if="showTags">
                            <ul class="list mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".list, .item-wrap" data-multiline="" mbr-article="">
                                <li class="tag-wrap">Component Wizardry</li>
                                <li class="tag-wrap">State Management</li>
                                <li class="tag-wrap">Hooks Enthusiast</li>
                            </ul>
                        </div>
                        <div class="icon-wrapper" mbr-if="showIcon">
                            <div class="icon-wrap">
                                <span mbr-icon="" class="mbr-iconfont mobi-mbri-success mobi-mbri"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-4">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="number-wrapper" mbr-if="showNumber">
                            <p class="item-number mbr-fonts-style" mbr-theme-style="display-7" data-app-selector=".item-number, .number-wrapper">2</p>
                        </div>
                        <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-7" data-app-selector=".item-title, .tags-wrapper, .icon-wrapper" mbr-if="showCardTitle">SQL Sorcery</h4>
                        <div class="tags-wrapper" mbr-if="showTags">
                            <ul class="list mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".list, .item-wrap" data-multiline="" mbr-article="">
                                <li class="tag-wrap">Database Ninja</li>
                                <li class="tag-wrap">Query Magician</li>
                                <li class="tag-wrap">Data Whisperer</li>
                            </ul>
                        </div>
                        <div class="icon-wrapper" mbr-if="showIcon">
                            <div class="icon-wrap">
                                <span mbr-icon="" class="mbr-iconfont mobi-mbri-success mobi-mbri"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item features-without-image col-12 col-lg-4">
                <div class="item-wrapper">
                    <div class="card-box">
                        <div class="number-wrapper" mbr-if="showNumber">
                            <p class="item-number mbr-fonts-style" mbr-theme-style="display-7" data-app-selector=".item-number, .number-wrapper">3</p>
                        </div>
                        <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-7" data-app-selector=".item-title, .tags-wrapper, .icon-wrapper" mbr-if="showCardTitle">CSS Wizardry</h4>
                        <div class="tags-wrapper" mbr-if="showTags">
                            <ul class="list mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".list, .item-wrap" data-multiline="" mbr-article="">
                                <li class="tag-wrap">Styling Guru</li>
                                <li class="tag-wrap">Responsive Design</li>
                                <li class="tag-wrap">Animation Aficionado</li>
                            </ul>
                        </div>
                        <div class="icon-wrapper" mbr-if="showIcon">
                            <div class="icon-wrap">
                                <span mbr-icon="" class="mbr-iconfont mobi-mbri-success mobi-mbri"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>