import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements AfterViewInit {
    showMenu: boolean = false;
    showAboutMenu: boolean = false;
    showLanguageMenu: boolean = false;
    numItemsInCart: number = 0;
    pageTitle: string = 'Home';
    @ViewChild('mobileNav') mobileNav!: ElementRef;
    @ViewChild('menuButton') menuButton!: ElementRef;
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
        private router: Router,
        private activatedRoute: ActivatedRoute
        // private translate: TranslateService,
    ) {}

    ngOnInit(): void {
        // Listen for navigation end events and retrieve the title from the route data
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map(route => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            mergeMap(route => route.data)
        ).subscribe(data => {
            this.pageTitle = data['title'] || 'Default Title'; // Set a default title if none is provided
        });
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
        // this.translate.use(languageCode);
    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }

    toggleAboutMenu() {
        this.showAboutMenu = !this.showAboutMenu;
    }
}
