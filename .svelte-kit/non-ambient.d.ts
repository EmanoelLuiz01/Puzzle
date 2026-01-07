
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/jogar2" | "/jogar3" | "/jogar" | "/level" | "/sobre";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/jogar2": Record<string, never>;
			"/jogar3": Record<string, never>;
			"/jogar": Record<string, never>;
			"/level": Record<string, never>;
			"/sobre": Record<string, never>
		};
		Pathname(): "/" | "/jogar2" | "/jogar2/" | "/jogar3" | "/jogar3/" | "/jogar" | "/jogar/" | "/level" | "/level/" | "/sobre" | "/sobre/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | "/images/igara.jpeg" | "/images/logoIFPE.png" | "/images/n1.png" | "/images/n2.png" | "/images/n3.png" | string & {};
	}
}