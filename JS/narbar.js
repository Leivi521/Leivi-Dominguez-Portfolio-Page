<section data-bs-version="5.1" class="menu menu01 tradem5" group="Menu" plugins="DropDown, TouchSwipe" always-top global once="menu" not-draggable position-absolute>
    <mbr-parameters>
        <header>Size</header>
        <input type="checkbox" name="fullWidth" title="Full Width">
        <header>Show/Hide</header>
        <input type="checkbox" title="Logo" name="showLogo">
        <input type="range" title="Logo Size" inline name="logoSize" min="1" max="5" step="0.1" value="3" condition="showLogo">
        <input type="checkbox" title="Brand Name" name="showBrand">
        <input type="checkbox" title="Menu Items" name="showItems" checked>
        <select title="Menu Items Align" name="contentAlign" condition="showItems">
            <option value="1">Left</option>
            <option value="2">Center</option>
            <option value="3" selected>Right</option>
        </select>
        <input type="color" title="Active Item Color" name="activeItem" value="#000000" condition="showItems">
        <input type="checkbox" title="Icons" name="showIcons">
        <select title="Amount" name="iconsAmount" condition="showIcons">
            <option value="1">1</option>
            <option value="2" selected>2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <input type="color" title="Icons Color" name="iconsColor" value="#FFFFFF" condition="showIcons">
        <input type="checkbox" title="Button" name="showButtons">
        <header>Styles</header>
        <input type="checkbox" title="Collapsed" name="collapsed" condition="none"> 
        <input type="checkbox" title="Transparent" name="transparent">
        <input type="checkbox" title="Sticky" name="sticky">
        <input type="range" title="Opacity" name="opacity" min="0" max="1" step="0.1" value="0.4" condition="transparent">
        <input type="color" title="Menu BG" name="menuBgColor" value="#000000">
        <input type="color" title="Border Color" name="borderMenu" value="#ffffff">
        <input type="color" title="Hamburger" name="hamburgerColor" value="#000000">
        <input type="checkbox" title="Transparent" name="transparentBg" condition="bg.type === 'color'" checked>
    </mbr-parameters>

    <div mbr-class="{'container': !fullWidth, 'container-fluid': fullWidth}">
        <nav class="navbar navbar-dropdown" mbr-class="{'navbar-fixed-top':sticky,
                     'navbar-expand-lg':!collapsed,
                     'collapsed':collapsed}">
            <div class="menu-container">
                <div class="navbar-brand">
				<span mbr-if="showLogo" class="navbar-logo">
					<a href="https://mobiri.se">
						<img src="../_images/background1.jpg" alt="Mobirise Website Builder" mbr-style="{'height': logoSize + 'rem'}">
					</a>
				</span>
                    <span mbr-if="showBrand" mbr-buttons mbr-theme-style="display-7" class="navbar-caption-wrap" data-toolbar="-mbrBtnMove,-mbrBtnAdd,-mbrBtnRemove,-iconFont"><a class="navbar-caption text-white" data-app-selector=".navbar-caption" href="https://mobiri.se" data-app-placeholder="Type Text">Leivi521</a></span>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" mbr-if="showItems || showIcons || showButtons">
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" mbr-if="showItems || showIcons || showButtons">
                    <ul mbr-menu class="navbar-nav nav-dropdown" mbr-theme-style="display-4" mbr-if="showItems" mbr-class="{'nav-right': !showButtons,'navbar-nav-top-padding': isPublish && !showBrand && !showLogo}"><li class="nav-item">
                            <a class="nav-link link text-white" href="https://mobiri.se" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-white" href="https://mobiri.se" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text" aria-expanded="false">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-white" href="https://mobiri.se" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-white" href="https://mobiri.se" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">Contact</a>
                        </li></ul>
                    <div class="icons-menu" mbr-if="showIcons">
                        <a class="iconfont-wrapper" href="https://mobiri.se">
                            <span mbr-icon class="p-2 mbr-iconfont mobi-mbri-globe-2 mobi-mbri"></span>
                        </a>
                        <a class="iconfont-wrapper" href="https://mobiri.se" mbr-if="iconsAmount > 1">
                            <span mbr-icon class="p-2 mbr-iconfont socicon-instagram socicon"></span>
                        </a>
                        <a class="iconfont-wrapper" href="https://mobiri.se" mbr-if="iconsAmount > 2">
                            <span mbr-icon class="p-2 mbr-iconfont mobi-mbri-map-pin mobi-mbri"></span>
                        </a>
                        <a class="iconfont-wrapper" href="https://mobiri.se" mbr-if="iconsAmount > 3">
                            <span mbr-icon class="p-2 mbr-iconfont mobi-mbri-shopping-cart mobi-mbri"></span>
                        </a>
                    </div>
                    <div mbr-if="showButtons" mbr-buttons mbr-theme-style="display-4" class="navbar-buttons mbr-section-btn">
                        <a class="btn btn-primary" href="https://mobiri.se" data-app-placeholder="Type Text">Get Hired!</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</section>