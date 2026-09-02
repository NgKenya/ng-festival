import { InjectionToken, type Provider } from "@angular/core";
import type { IconNode } from "lucide";

/** Icon shapes keyed by the kebab-case name templates refer to. */
export type IconRegistry = Readonly<Record<string, IconNode>>;

export const ICON_REGISTRY = new InjectionToken<IconRegistry>("ICON_REGISTRY");

/**
 * Registers the icons the app is allowed to render. Only the icons listed here
 * are pulled out of the `lucide` package, which keeps the bundle proportional
 * to what the templates actually use.
 */
export function provideIcons(icons: IconRegistry): Provider {
	return { provide: ICON_REGISTRY, useValue: icons };
}
