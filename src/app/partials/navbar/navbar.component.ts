import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule],
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements AfterViewInit {
    showMenu: boolean = false;
    showAboutMenu: boolean = false;
    showLanguageMenu: boolean = false;
    numItemsInCart: number = 0;
    @ViewChild('collapsableSearchBar') collapsableSearchBar!: ElementRef;
    @ViewChild('mobileNav') mobileNav!: ElementRef;
    @ViewChild('menuButton') menuButton!: ElementRef;
    @ViewChild('soloSearchIcon') searchIcon!: ElementRef;
    @ViewChild('aboutMenu') aboutMenu!: ElementRef;
    @ViewChild('languageMenu') languageMenu!: ElementRef;
    i18nLanguages = [
        { name: "English", code: "eng" },
        { name: "Español", code: "spa" },
        { name: "Français", code: "fra" },
        { name: "Deutsch", code: "deu" },
        { name: "Italiano", code: "ita" },
        { name: "Português", code: "por" },
        { name: "Nederlands", code: "nld" },
        { name: "Polski", code: "pol" },
        { name: "Русский", code: "rus" },
        { name: "日本語", code: "jpn" },
        { name: "中文", code: "cmn" },
        { name: "한국어", code: "kor" },
        // { name: "العربية", code: "" },
        // { name: "עברית", code: " },
        // { name: "Türkçe", code: " },
        // { name: "हिन्दी", code: " },
        // { name: "ไทย", code: " },
        // { name: "Bahasa Indonesia", code: " },
        // { name: "Tiếng Việt", code: " },
        // { name: "Tagalog", code: " },
        // { name: "Ελληνικά", code: " },
        // { name: "Magyar", code: " },
        // { name: "Čeština", code: " },
        // { name: "Svenska", code: " },
        // { name: "Norsk", code: " },
        // { name: "Dansk", code: " },
        // { name: "Suomi", code: " },
        // { name: "Română", code: " },
        // { name: "Українська", code: " },
        // { name: "Hrvatski", code: " },
        // { name: "Srpski", code: " },
        // { name: "Български", code: " },
        // { name: "Slovenčina", code: " },
        // { name: "Slovenščina", code: " },
        // { name: "Lietuvių", code: " },
        // { name: "Latviešu", code: " },
        // { name: "Eesti", code: " },
        // { name: "Català", code: " },
        // { name: "Galego", code: " },
        // { name: "Basque", code: " },
        // { name: "Galician", code: " },
        // { name: "Esperanto", code: " },
    ];

    constructor(
        private renderer: Renderer2,
        private translate: TranslateService,
    ) {}

    ngOnInit() {
        // console.debug("token: ", this.authService.getAccessToken());
    }

    ngAfterViewInit() {
        this.renderer.listen('window', 'click', (event: any) => {
            if (this.showMenu && this.clickOutsideMobileMenu(event)) {
                this.showMenu = false;
            } else if (this.showLanguageMenu && this.clickOutsideLanguageMenu(event)) {
                this.showLanguageMenu = false;
            } else if (this.showAboutMenu && this.clickOutsideAboutMenu(event)) {
                this.showAboutMenu = false;
            }
        });
    }

    clickOutsideMobileMenu(event: any): boolean {
        return !this.mobileNav.nativeElement.contains(event.target)
        && !this.menuButton.nativeElement.contains(event.target)
        && !this.searchIcon.nativeElement.contains(event.target)
    }

    clickOutsideAboutMenu(event: any): boolean {
        return !this.aboutMenu.nativeElement.contains(event.target);
    }

    clickOutsideLanguageMenu(event: any): boolean {
        return !this.languageMenu.nativeElement.contains(event.target);
    }

    toggleLanguageMenu() {
        this.showLanguageMenu = !this.showLanguageMenu;
    }

    switchLanguage(languageCode: string) {
        this.translate.use(languageCode);
    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }

    toggleAboutMenu() {
        this.showAboutMenu = !this.showAboutMenu;
    }

    openSearchBar() {
        this.showMenu = !this.showMenu;
        if (this.showMenu) {
            setTimeout(() => {
                this.collapsableSearchBar.nativeElement.focus();
            }, 100);
        } else {
            this.collapsableSearchBar.nativeElement.blur();
        }
    }
}
