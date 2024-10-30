type Mods = Record<string, boolean | string>;
type Additional = string | undefined;

export function classNames(
	cls: string,
	mode: Mods = {},
	additional: Additional[] = []
): string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mode)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ');
}
