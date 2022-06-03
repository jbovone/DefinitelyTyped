export type TSorterFn = (a: number, b: number) => (1 | 0 | -1) | Parameters<typeof Array.prototype.sort>[0];
export type TQuerySort = 'key_a_to_z' | 'key_z_to_a' | 'value_a_to_z' | 'value_z_to_a';
